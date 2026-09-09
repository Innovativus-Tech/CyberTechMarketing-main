import { ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Target, Workflow } from "lucide-react";
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
      <section className="about-page-hero">
        <div className="site-container about-page-layout" style={{ gridTemplateColumns: '1fr' }}>
          <div className="about-page-copy" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <Reveal direction="scale">
              <p className="eyebrow" style={{ justifyContent: 'center' }}><span /> Contact Us</p>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Let&apos;s start your next digital project.</h1>
              <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>Share your requirement and Cybertech Marketing will help you map the right mix of growth, software, AI, data and mobile execution.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-accent" id="enquiry">
        <div className="site-container contact-band contact-start">
          <Reveal className="contact-intro" direction="left">
            <h2>Have a Business Problem You Want to Solve?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              <p style={{ fontWeight: 700, color: '#101828', fontSize: '1.05rem' }}>Tell us what you&apos;re trying to grow, build or automate.</p>
              <p>You don&apos;t need a perfect brief. Tell us what&apos;s not working, what you&apos;re trying to achieve, or what you&apos;d like to build.</p>
              <p>We&apos;ll review it, ask the right questions and help you identify the next practical step.</p>
            </div>
            <div className="start-steps">
              <span><Target size={18} /> Share your requirements</span>
              <span><Workflow size={18} /> Discuss them with experts</span>
              <span><ShieldCheck size={18} /> Get a clear next step</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '36px' }}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a className="button button-primary" href="/#enquiry" style={{ padding: '14px 24px', fontSize: '14px' }}>
                  Book a Growth Call <ArrowRight size={16} />
                </a>
                <a className="button" href="https://wa.me/917428768779" target="_blank" rel="noreferrer" style={{ padding: '14px 24px', fontSize: '14px', border: '1px solid #25D366', color: '#101828', backgroundColor: '#25D366', fontWeight: 700 }}>
                  WhatsApp Cybertech <ArrowRight size={16} />
                </a>
              </div>
              <div style={{ marginTop: '12px' }}>
                <p style={{ margin: '0 0 4px', fontSize: '0.95rem', color: '#667085', fontWeight: 600 }}>Prefer email?</p>
                <a href="mailto:info@cybertechmarketing.com" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#E6332A', borderBottom: '2px solid #E6332A', display: 'inline-block', paddingBottom: '2px' }}>info@cybertechmarketing.com</a>
              </div>
            </div>
          </Reveal>
          <Reveal className="form-panel" direction="right">
            <h3>Let&apos;s Talk About My Project</h3>
            <p>Send us a message and we will promptly discuss your project with you.</p>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>

      <section className="section tech-section">
        <div className="site-container tech-layout">
          <Reveal direction="up">
            <p className="eyebrow"><span /> What We Can Discuss</p>
            <h2>Bring your requirement. We will shape the route.</h2>
          </Reveal>
          <Reveal className="tech-cloud contact-cloud" direction="scale" delay={0.2}>
            {serviceNeeds.map((need, index) => (
              <span key={need}>
                {index === 0 ? <Target size={18} /> : index === 3 ? <Workflow size={18} /> : index === 5 ? <ShieldCheck size={18} /> : null}
                <span>{need}</span>
              </span>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
