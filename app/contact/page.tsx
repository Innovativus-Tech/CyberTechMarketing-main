import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Target, Workflow } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact Us | Cybertech Marketing",
  description: "Contact Cybertech Marketing for digital marketing, web development, software, AI, data and mobile app enquiries.",
};

const contactSteps = [
  "Share your requirements",
  "Discuss them with Cybertech experts",
  "Get a clear quote and next step",
  "Start the project with a focused plan",
];

const serviceNeeds = [
  "Digital Marketing & Growth",
  "Web Development",
  "Software Development",
  "AI & Intelligent Solutions",
  "Machine Learning & Data",
  "Mobile App Development",
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="site-container page-hero-content">
          <Reveal>
            <p className="eyebrow"><span /> Contact Us</p>
            <h1>Let&apos;s start your next digital project.</h1>
            <p>Share your requirement and Cybertech Marketing will help you map the right mix of growth, software, AI, data and mobile execution.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="site-container contact-page-grid contact-page-premium">
          <Reveal className="contact-details">
            <p className="eyebrow"><span /> You Are Here</p>
            <h2>Talk to Cybertech Marketing</h2>
            <a href="mailto:info@cybertechmarketing.com"><Mail size={22} /> info@cybertechmarketing.com</a>
            <a href="tel:+917428768779"><Phone size={22} /> +91 74287 68779</a>
            <a href="https://wa.me/917428768779" target="_blank" rel="noreferrer"><MessageCircle size={22} /> WhatsApp Cybertech Marketing</a>
            <p><MapPin size={22} /> Serving clients across India and beyond.</p>
            <div className="contact-step-card">
              {contactSteps.map((step, index) => (
                <span key={step}><CheckCircle2 size={18} /> {String(index + 1).padStart(2, "0")} {step}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="form-panel">
            <h3>Let&apos;s connect</h3>
            <p>Send us a message and we will promptly discuss your project with you.</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section tech-section">
        <div className="site-container tech-layout">
          <Reveal>
            <p className="eyebrow"><span /> What We Can Discuss</p>
            <h2>Bring your requirement. We will shape the route.</h2>
          </Reveal>
          <Reveal className="tech-cloud contact-cloud">
            {serviceNeeds.map((need, index) => (
              <span key={need}>{index === 0 ? <Target size={18} /> : index === 3 ? <Workflow size={18} /> : index === 5 ? <ShieldCheck size={18} /> : null}{need}</span>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
