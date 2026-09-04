import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact Us | Cybertech Marketing",
  description: "Contact Cybertech Marketing for digital marketing, web development, software, AI, data and mobile app enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="site-container page-hero-content">
          <Reveal>
            <p className="eyebrow"><span /> Contact Us</p>
            <h1>Let&apos;s talk about your next digital move.</h1>
            <p>Share your requirement and the Cybertech Marketing team will respond with the best next step.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="site-container contact-page-grid">
          <Reveal className="contact-details">
            <h2>Contact details</h2>
            <a href="mailto:info@cybertechmarketing.com"><Mail size={22} /> info@cybertechmarketing.com</a>
            <a href="tel:+917428768779"><Phone size={22} /> +91 74287 68779</a>
            <a href="https://wa.me/917428768779" target="_blank" rel="noreferrer"><MessageCircle size={22} /> WhatsApp Cybertech Marketing</a>
            <p><MapPin size={22} /> Serving clients across India and beyond.</p>
          </Reveal>
          <Reveal className="form-panel">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
