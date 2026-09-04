import { ArrowRight, Bot, BrainCircuit, CheckCircle2, Code2, Gauge, LayoutTemplate, Megaphone, Smartphone, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Digital Marketing & Growth",
    description: "Campaign strategy, paid media, SEO, content systems and conversion improvements built around measurable demand.",
    Icon: Megaphone,
  },
  {
    title: "Web Development",
    description: "Fast, responsive websites and landing pages designed to convert visitors into qualified enquiries.",
    Icon: LayoutTemplate,
  },
  {
    title: "Software Development",
    description: "Custom platforms, dashboards, portals and internal tools that support real business workflows.",
    Icon: Code2,
  },
  {
    title: "AI & Intelligent Solutions",
    description: "Automation, assistants and intelligent workflows that reduce repetitive work and speed up decisions.",
    Icon: Bot,
  },
  {
    title: "Machine Learning & Data",
    description: "Data pipelines, prediction models and reporting layers that make growth signals easier to act on.",
    Icon: BrainCircuit,
  },
  {
    title: "Mobile App Development",
    description: "iOS and Android product experiences with clean interfaces, reliable performance and scalable foundations.",
    Icon: Smartphone,
  },
];

const process = [
  "Understand the market, users and business goals.",
  "Design a focused roadmap across growth, product and data.",
  "Build the website, software, automation or campaign system.",
  "Measure performance and keep improving what matters.",
];

const faqs = [
  {
    question: "Can Cybertech handle both marketing and development?",
    answer: "Yes. The team is positioned to connect acquisition, websites, software, AI and data work so your growth stack does not feel fragmented.",
  },
  {
    question: "How do we start?",
    answer: "Send an enquiry with your goal, service interest and contact details. Cybertech Marketing can then respond with the right next step.",
  },
  {
    question: "Do you work on new builds and improvements?",
    answer: "Yes. The site is structured for new websites, apps and software builds, as well as improvements to existing marketing and technology systems.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section section-light" id="services">
        <div className="site-container">
          <Reveal className="section-heading">
            <p className="eyebrow"><span /> Services</p>
            <h2>One team for growth, product and intelligence.</h2>
            <p>Cybertech Marketing brings the core digital services together so strategy, build quality and performance move in the same direction.</p>
          </Reveal>
          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal className="service-card" key={service.title}>
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <service.Icon size={30} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="about">
        <div className="site-container split-section">
          <Reveal>
            <p className="eyebrow"><span /> About</p>
            <h2>Built for businesses that need more than isolated campaigns.</h2>
          </Reveal>
          <Reveal className="rich-copy">
            <p>Modern growth depends on the whole system: the message, the website, the product, the data and the automation behind it. Cybertech Marketing helps align those moving parts into a clean, practical execution plan.</p>
            <div className="proof-grid">
              <div><Gauge size={26} /><strong>Performance-minded</strong><span>Every build is shaped around clarity, speed and measurable outcomes.</span></div>
              <div><Sparkles size={26} /><strong>AI-aware</strong><span>Automation and intelligence are used where they make work faster and sharper.</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-light" id="process">
        <div className="site-container process-layout">
          <Reveal className="section-heading align-left">
            <p className="eyebrow"><span /> Process</p>
            <h2>Clear stages. Visible progress. Useful outcomes.</h2>
            <p>A practical workflow keeps the site, campaign, product or AI initiative moving without losing sight of the business goal.</p>
          </Reveal>
          <div className="process-list">
            {process.map((item, index) => (
              <Reveal className="process-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-accent" id="enquiry">
        <div className="site-container contact-band">
          <Reveal className="contact-intro">
            <p className="eyebrow"><span /> Enquiry</p>
            <h2>Tell us what you want to grow, build or automate.</h2>
            <p>Use the form and Cybertech Marketing will get back to you at the email or phone number you provide.</p>
            <div className="contact-methods">
              <a href="mailto:info@cybertechmarketing.com">info@cybertechmarketing.com</a>
              <a href="tel:+917428768779">+91 74287 68779</a>
            </div>
          </Reveal>
          <Reveal className="form-panel">
            <ContactForm compact />
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="site-container faq-layout">
          <Reveal className="section-heading">
            <p className="eyebrow"><span /> Questions</p>
            <h2>Before you reach out.</h2>
          </Reveal>
          <div className="faq-list">
            {faqs.map((item) => (
              <Reveal key={item.question}>
                <details>
                  <summary>{item.question}<ArrowRight size={18} /></summary>
                  <p>{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="site-container">
          <Reveal>
            <h2>Ready to build a stronger digital engine?</h2>
            <a className="button button-primary" href="#enquiry">Send an enquiry <CheckCircle2 size={18} /></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
