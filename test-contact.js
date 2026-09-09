const payload = {
  category: "sales",
  fullName: "John Doe",
  email: "john@example.com",
  phone: "1234567890",
  company: "Acme",
  serviceInterest: "Web Development",
  message: "I want a new website right now.",
  website: ""
};

fetch("http://localhost:3000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
})
.then(async (res) => {
  console.log("Status:", res.status);
  console.log("Response:", await res.json().catch(() => ({})));
})
.catch(err => console.error("Error:", err));
