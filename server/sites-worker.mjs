// Cloudflare entrypoint: pre-rendered Next pages and durable enquiry intake.
const serviceNames = ["Digital Marketing & Growth", "Web Development", "Software Development", "AI & Intelligent Solutions", "Machine Learning & Data", "Mobile App Development"];
const json = (data, status = 200) => Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

export async function saveEnquiry(db, data) {
  const id = crypto.randomUUID();
  const [firstName, ...lastNameParts] = data.fullName.split(/\s+/);
  await db.prepare("INSERT INTO enquiries (id, first_name, last_name, email, phone, company, service, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
    .bind(id, firstName, lastNameParts.join(" "), data.email, data.phone, data.company, data.serviceInterest, data.message, Date.now()).run();
  return id;
}

export async function handleContact(request, env) {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
  const origin = request.headers.get("Origin");
  const forwardedHost = (request.headers.get("X-Forwarded-Host") || request.headers.get("Host") || new URL(request.url).host).split(",")[0].trim().toLowerCase();
  if (origin && new URL(origin).host.toLowerCase() !== forwardedHost) return json({ error: "Please submit from this website." }, 403);
  if (!request.headers.get("Content-Type")?.includes("application/json")) return json({ error: "Expected a JSON request." }, 415);
  if (Number(request.headers.get("Content-Length") || 0) > 12000) return json({ error: "Message too large." }, 413);
  let raw;
  try { const text = await request.text(); if (text.length > 12000) return json({ error: "Message too large." }, 413); raw = JSON.parse(text); } catch { return json({ error: "Please check your message." }, 400); }
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return json({ error: "Invalid message." }, 400);
  if (raw.website) return json({ success: true }, 201); // Honeypot: discard automated submissions.
  if (typeof raw.fullName !== "string") raw.fullName = [raw.firstName, raw.lastName].filter(value=>typeof value==="string"&&value.trim()).join(" ");
  const fields = ["fullName", "email", "phone", "company", "serviceInterest", "message"];
  const data = Object.fromEntries(fields.map(key=>[key,typeof raw[key]==="string"?raw[key].trim():""]));
  const phoneDigits = data.phone.replace(/\D/g,"").length;
  const invalid = data.fullName.length < 2 || data.fullName.length > 100 || !/^[a-zA-Z\s'-]+$/.test(data.fullName) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 100 || (data.phone !== "" && (!/^[+\d()\s.-]+$/.test(data.phone) || phoneDigits < 10 || phoneDigits > 15)) || data.phone.length > 25 || data.company.length > 100 || data.message.length < 10 || data.message.length > 1000 || (data.serviceInterest && !serviceNames.includes(data.serviceInterest));
  if (invalid) return json({ error: "Please check your name, email, phone and project details." }, 400);
  if (!env.DB) return json({ error: "We couldn’t receive your enquiry. Please contact us by email or WhatsApp." }, 503);
  try { const id = await saveEnquiry(env.DB, data); return json({ success: true, reference: id.slice(0,8) }, 201); }
  catch { return json({ error: "Your enquiry could not be saved. Please try again or contact us directly." }, 503); }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact") return handleContact(request, env);
    if (url.pathname.startsWith("/api/")) return json({ error: "Not found" }, 404);
    if (!env.ASSETS) return new Response("Site assets unavailable", { status: 503 });
    // Next client navigation expects the corresponding prerendered RSC payload.
    if (request.headers.get("RSC") === "1") {
      url.pathname = (url.pathname.replace(/\/$/, "") || "/index") + ".txt";
      url.search = "";
      const response = await env.ASSETS.fetch(new Request(url, { method: "GET" }));
      if (response.ok) return new Response(response.body, { headers: { "Content-Type": "text/x-component", "Vary": "RSC", "Cache-Control": "no-cache" } });
      return new Response("", { status: 404 });
    }
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    return new Response(response.body, { status: response.status, headers });
  },
};
