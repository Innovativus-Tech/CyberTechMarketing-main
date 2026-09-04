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
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      message: serviceInterest ? `Service interest: ${serviceInterest}\n\n${projectMessage}` : projectMessage,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || result.error || "Please check the form and try again.");
      }

      setStatus("success");
      setMessage("Thanks. Your enquiry has been sent to Cybertech Marketing.");
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

      window.location.href = `mailto:info@cybertechmarketing.com?subject=${subject}&body=${body}`;
      setStatus("error");
      setMessage(error instanceof Error ? `${error.message} Your email app is opening with the enquiry details.` : "Your email app is opening with the enquiry details.");
    }
  }

  return (
    <form className={`contact-form ${compact ? "contact-form-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          First name
          <input name="firstName" type="text" minLength={2} required autoComplete="given-name" />
        </label>
        <label>
          Last name
          <input name="lastName" type="text" minLength={2} required autoComplete="family-name" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required autoComplete="tel" placeholder="+91 74287 68779" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Company
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label>
          Service interest
          <select name="serviceInterest" defaultValue="">
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
      {message ? <p className={`form-status ${status === "error" ? "is-error" : "is-success"}`}>{message}</p> : null}
    </form>
  );
}
