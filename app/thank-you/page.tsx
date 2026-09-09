import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Cybertech Marketing",
  description: "Your enquiry has been received by Cybertech Marketing.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    title: "We review your enquiry",
    text: "Our team reviews your goals, project details and the service you are interested in.",
  },
  {
    title: "We connect with you",
    text: "A Cybertech specialist will contact you to clarify priorities, scope and timelines.",
  },
  {
    title: "You get a clear next step",
    text: "We will recommend the most practical way to move your growth or technology project forward.",
  },
];

type ThankYouPageProps = {
  searchParams: Promise<{ reference?: string | string[] }>;
};

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const rawReference = Array.isArray(params.reference) ? params.reference[0] : params.reference;
  const reference = rawReference?.replace(/[^a-zA-Z0-9-]/g, "").slice(0, 24);

  return (
    <section className="thank-you-page" aria-labelledby="thank-you-title">
      <div className="thank-you-shell">
        <div className="thank-you-check" aria-hidden="true"><Check size={44} strokeWidth={2.5} /></div>
        <p className="thank-you-kicker">Enquiry received</p>
        <h1 id="thank-you-title">Thank you. We&apos;ve got your details.</h1>
        <p className="thank-you-lead">
          Your enquiry has reached the Cybertech team. We&apos;ll review what you want to grow, build or automate and contact you with a practical next step.
        </p>
        {reference ? <p className="thank-you-reference">Reference: {reference}</p> : null}

        <div className="thank-you-steps">
          {nextSteps.map((step, index) => (
            <article className="thank-you-step" key={step.title}>
              <span>0{index + 1}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="thank-you-actions">
          <a className="button button-primary" href="tel:+917428768779"><Phone size={18} /> Call Cybertech</a>
          <Link className="button thank-you-home" href="/"><ArrowLeft size={18} /> Back to homepage</Link>
        </div>
      </div>
    </section>
  );
}
