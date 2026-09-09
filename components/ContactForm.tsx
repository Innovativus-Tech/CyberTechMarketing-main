"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { validateSalesContact } from "@/lib/validations/contact";

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
  const router = useRouter();
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [emailFallback, setEmailFallback] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    setMessage("");
    setFieldErrors({});

    const form = event.currentTarget;
    const data = new FormData(form);
    const serviceInterest = String(data.get("serviceInterest") || "");
    const projectMessage = String(data.get("message") || "");

    const payload = {
      category: "sales",
      fullName: String(data.get("fullName") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      company: String(data.get("company") || ""),
      serviceInterest,
      message: projectMessage,
      website: String(data.get("website") || ""),
    };

    const clientValidation = validateSalesContact({
      category: payload.category,
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      company: payload.company,
      serviceInterest: payload.serviceInterest,
      message: payload.message,
    });

    if (!clientValidation.success) {
      const errors = clientValidation.error.issues.reduce<Record<string, string>>((result, issue) => {
        const field = String(issue.path[0]);
        if (!result[field]) result[field] = issue.message;
        return result;
      }, {});
      setFieldErrors(errors);
      setStatus("error");
      setMessage("Please review the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");

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
      form.reset();
      const reference = typeof result.reference === "string" ? result.reference : "";
      router.push(reference ? `/thank-you?reference=${encodeURIComponent(reference)}` : "/thank-you");
    } catch (error) {
      const subject = encodeURIComponent(`Cybertech Marketing enquiry from ${payload.fullName}`.trim());
      const body = encodeURIComponent(
        [
          `Name: ${payload.fullName}`,
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
      setMessage(
        error instanceof Error && error.name === "TimeoutError"
          ? "The request timed out. Please try again or contact us directly."
          : error instanceof Error
            ? error.message
            : "We couldn’t submit your enquiry. Please try again or contact us directly."
      );
    }
  }

  return (
    <form className={`contact-form ${compact ? "contact-form-compact" : ""}`} onSubmit={handleSubmit} noValidate>
      <label className="form-honeypot" aria-hidden="true">Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-row">
        <label>
          <span>Full name <span aria-hidden="true">*</span></span>
          <input name="fullName" type="text" minLength={2} maxLength={100} required autoComplete="name" placeholder="Your full name" aria-invalid={Boolean(fieldErrors.fullName)} aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined} />
          {fieldErrors.fullName && <small id="fullName-error" className="form-field-error">{fieldErrors.fullName}</small>}
        </label>
        <label>
          <span>Email <span aria-hidden="true">*</span></span>
          <input name="email" type="email" maxLength={100} required autoComplete="email" placeholder="name@company.com" aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "email-error" : undefined} />
          {fieldErrors.email && <small id="email-error" className="form-field-error">{fieldErrors.email}</small>}
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Phone <span aria-hidden="true">*</span></span>
          <input name="phone" type="tel" minLength={10} maxLength={25} required autoComplete="tel" placeholder="+91 98 7654 3210" aria-invalid={Boolean(fieldErrors.phone)} aria-describedby={fieldErrors.phone ? "phone-error" : undefined} />
          {fieldErrors.phone && <small id="phone-error" className="form-field-error">{fieldErrors.phone}</small>}
        </label>
        <label>
          <span>Company</span>
          <input name="company" type="text" maxLength={100} autoComplete="organization" placeholder="Your company (optional)" aria-invalid={Boolean(fieldErrors.company)} aria-describedby={fieldErrors.company ? "company-error" : undefined} />
          {fieldErrors.company && <small id="company-error" className="form-field-error">{fieldErrors.company}</small>}
        </label>
      </div>
      <label>
        <span>Service interest</span>
        <select name="serviceInterest" defaultValue={defaultService} aria-invalid={Boolean(fieldErrors.serviceInterest)} aria-describedby={fieldErrors.serviceInterest ? "serviceInterest-error" : undefined}>
          <option value="" disabled>Choose a service (optional)</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
        {fieldErrors.serviceInterest && <small id="serviceInterest-error" className="form-field-error">{fieldErrors.serviceInterest}</small>}
      </label>
      <label>
        <span>Project details <span aria-hidden="true">*</span></span>
        <textarea name="message" rows={compact ? 4 : 5} minLength={10} maxLength={1000} required placeholder="Tell us what you want to improve, build, automate, or launch." aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? "message-error" : undefined} />
        {fieldErrors.message && <small id="message-error" className="form-field-error">{fieldErrors.message}</small>}
      </label>
      <button className="button button-primary form-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? <Loader2 size={18} className="spin" /> : status === "success" ? <CheckCircle2 size={18} /> : <ArrowRight size={18} />}
        {status === "submitting" ? "Sending..." : status === "success" ? "Enquiry sent" : "Send enquiry"}
      </button>
      <p className="form-privacy">We use your details to respond to this enquiry. <a href="/privacy-policy">Privacy information</a></p>
      {message ? <p role={status === "error" ? "alert" : "status"} className={`form-status ${status === "error" ? "is-error" : "is-success"}`}>{message}</p> : null}
      {status === "error" && emailFallback && <div className="form-fallbacks"><a href={emailFallback}>Send by email</a><a href="https://wa.me/917428768779" target="_blank" rel="noreferrer">Contact on WhatsApp</a></div>}
    </form>
  );
}
