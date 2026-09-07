"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const serviceOptions = [
  "Digital Marketing & Growth",
  "Web Development",
  "Software Development",
  "AI & Intelligent Solutions",
  "Machine Learning & Data",
  "Mobile App Development",
];

type ContactFormProps = {
  compact?: boolean;
  defaultService?: string;
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ compact = false, defaultService = "" }: ContactFormProps) {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [emailFallback, setEmailFallback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const serviceInterest = String(data.get("serviceInterest") || "");
    const projectMessage = String(data.get("message") || "");

    const payload = {
      category: "sales",
      firstName: String(data.get("firstName") || ""),
      lastName: String(data.get("lastName") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      company: String(data.get("company") || ""),
      serviceInterest,
      message: projectMessage,
      website: String(data.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || result.error || "Please check the form and try again.");
      }

      setStatus("success");
      setMessage(`Thank you. Your enquiry has been received.${result.reference ? ` Reference: ${result.reference}.` : ""} We’ll review your project and get back to you.`);
      form.reset();
    } catch (error) {
      const subject = encodeURIComponent(`Cybertech Marketing enquiry from ${payload.firstName} ${payload.lastName}`.trim());
      const body = encodeURIComponent(
        [
          `Name: ${payload.firstName} ${payload.lastName}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone}`,
          payload.company ? `Company: ${payload.company}` : "",
          payload.serviceInterest ? `Service interest: ${payload.serviceInterest}` : "",
          "",
          projectMessage,
        ].filter(Boolean).join("\n")
      );

      setEmailFallback(`mailto:info@cybertechmarketing.com?subject=${subject}&body=${body}`);
      setStatus("error");
      setMessage(error instanceof Error && error.name !== "TimeoutError" ? "We couldn’t submit your enquiry. Please check your details and try again, or send it by email or WhatsApp below." : "The request timed out. Please try again or contact us directly.");
    }
  }

  return (
    <form className={`contact-form ${compact ? "contact-form-compact" : ""}`} onSubmit={handleSubmit}>
      <label className="form-honeypot" aria-hidden="true">Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-row">
        <label>
          First name
          <input name="firstName" type="text" minLength={2} maxLength={50} required autoComplete="given-name" />
        </label>
        <label>
          Last name
          <input name="lastName" type="text" minLength={2} maxLength={50} required autoComplete="family-name" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email
          <input name="email" type="email" maxLength={100} required autoComplete="email" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" minLength={10} maxLength={25} required autoComplete="tel" placeholder="Your phone number" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Company
          <input name="company" type="text" maxLength={100} autoComplete="organization" />
        </label>
        <label>
          Service interest
          <select name="serviceInterest" defaultValue={defaultService}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Project details
        <textarea name="message" rows={compact ? 4 : 5} minLength={10} maxLength={1000} required placeholder="Tell us what you want to improve, build, automate, or launch." />
      </label>
      <button className="button button-primary form-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? <Loader2 size={18} className="spin" /> : status === "success" ? <CheckCircle2 size={18} /> : <ArrowRight size={18} />}
        {status === "submitting" ? "Sending..." : "Send enquiry"}
      </button>
      <p className="form-privacy">We use your details to respond to this enquiry. <a href="/privacy-policy">Privacy information</a></p>
      {message ? <p role={status === "error" ? "alert" : "status"} className={`form-status ${status === "error" ? "is-error" : "is-success"}`}>{message}</p> : null}
      {status === "error" && <div className="form-fallbacks"><a href={emailFallback}>Send by email</a><a href="https://wa.me/917428768779" target="_blank" rel="noreferrer">Contact on WhatsApp</a></div>}
    </form>
  );
}
