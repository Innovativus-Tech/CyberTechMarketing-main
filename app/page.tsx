import { ArrowRight, Bot, BrainCircuit, CheckCircle2, Code2, LayoutTemplate, Megaphone, ShieldCheck, Smartphone, Target, Workflow } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Digital Marketing & Growth",
    description: "Performance campaigns, SEO, content systems and conversion paths built to generate qualified demand.",
    Icon: Megaphone,
    bullets: ["Growth strategy", "Paid media funnels", "SEO and content", "Conversion improvement"],
  },
  {
    title: "Web Development",
    description: "Modern websites and landing pages with fast load times, clear journeys and responsive execution.",
    Icon: LayoutTemplate,
    bullets: ["Corporate websites", "Landing pages", "CMS-ready builds", "Speed optimization"],
  },
  {
    title: "Software Development",
    description: "Custom business software, dashboards, portals and systems that make operations easier to run.",
    Icon: Code2,
    bullets: ["Custom platforms", "Admin dashboards", "API integrations", "Workflow tools"],
  },
  {
    title: "AI & Intelligent Solutions",
    description: "AI assistants and automation layers that remove repetitive work and make teams faster.",
    Icon: Bot,
    bullets: ["AI assistants", "Process automation", "Lead qualification", "Knowledge workflows"],
  },
  {
    title: "Machine Learning & Data",
    description: "Data pipelines, reporting systems and predictive models for sharper business decisions.",
    Icon: BrainCircuit,
    bullets: ["Data dashboards", "Prediction models", "Reporting pipelines", "Insight automation"],
  },
  {
    title: "Mobile App Development",
    description: "Mobile products for iOS and Android with clean UX, stable foundations and scalable delivery.",
    Icon: Smartphone,
    bullets: ["iOS and Android", "Product UX", "App integrations", "Release support"],
  },
];

const proofCards = [
  {
    title: "Lead generation systems",
    label: "Growth operations",
    copy: "Campaigns, websites and CRM-ready journeys aligned around clearer enquiries.",
  },
  {
    title: "Digital product builds",
    label: "Software execution",
    copy: "Web apps, dashboards and portals designed for teams that need reliable daily tools.",
  },
  {
    title: "AI-enabled workflows",
    label: "Intelligent automation",
    copy: "Assistants, data flows and automation mapped to practical business tasks.",
  },
];

const process = [
  ["01", "Share your requirements", "We understand your goals, audience, current stack and what success should look like."],
  ["02", "Discuss with experts", "Strategy, creative, engineering and data needs are shaped into one practical roadmap."],
  ["03", "Get a clear quote", "You receive a scoped plan for the right mix of marketing, software, AI, data or mobile work."],
  ["04", "Build and launch", "Design, development, campaigns and automation move through clean delivery milestones."],
  ["05", "Optimize continuously", "Performance signals guide the next improvements after launch."],
];

const technologies = ["React", "Next.js", "Node.js", "Python", "TypeScript", "MongoDB", "PostgreSQL", "AI Models", "Analytics", "Automation", "Cloud", "Mobile"];

const faqs = [
  {
    question: "What makes Cybertech Marketing different?",
    answer: "Cybertech connects marketing, website development, software, AI and data in one execution plan, so your digital presence and backend systems support the same business goal.",
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes. Cybertech can improve an existing website with better structure, conversion paths, responsiveness, content and technical performance.",
  },
  {
    question: "Do you build software and apps as well as marketing campaigns?",
    answer: "Yes. The service mix includes software development, web development, mobile app development, AI solutions and machine learning/data work.",
  },
  {
    question: "How do we start a project?",
    answer: "Send your requirement through the enquiry form or contact Cybertech by phone, email or WhatsApp. The team can then discuss scope, timeline and next steps.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="logo-marquee" aria-label="Cybertech focus areas">
        <div className="ticker-track">
          {["Performance Marketing", "Custom Web Apps", "Web Development", "Software Solutions", "Enterprise Automation", "AI Systems", "Mobile Apps", "Data Intelligence", "Performance Marketing", "Custom Web Apps", "Web Development", "Software Solutions"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section section-light" id="services">
        <div className="site-container">
          <Reveal className="section-heading">
            <p className="eyebrow"><span /> Our Services</p>
            <h2>How we can help you</h2>
            <p>Cybertech Marketing brings growth, software and intelligence together so your brand can attract, convert, operate and scale with confidence.</p>
          </Reveal>
          <div className="service-showcase">
            {services.map((service, index) => (
              <Reveal className="service-row" key={service.title}>
                <div className="service-row-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="service-row-icon"><service.Icon size={30} /></div>
                <div className="service-row-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ul>
                  {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="about">
        <div className="site-container mission-layout">
          <Reveal className="mission-copy">
            <p className="eyebrow"><span /> About Us</p>
            <h2>Cybertech mission and goal</h2>
            <p>Our mission is to help businesses build a stronger digital engine: one where marketing, websites, software, AI and data work together instead of living in separate silos.</p>
            <a className="button button-primary" href="#enquiry">Start with Cybertech <ArrowRight size={18} /></a>
          </Reveal>
          <Reveal className="mission-board">
            <div><strong>6</strong><span>Core service lines</span></div>
            <div><strong>360</strong><span>Growth and product thinking</span></div>
            <div><strong>1</strong><span>Connected execution team</span></div>
          </Reveal>
        </div>
      </section>

      <section className="section case-section" id="proof">
        <div className="site-container">
          <Reveal className="section-heading align-left">
            <p className="eyebrow"><span /> Case Studies</p>
            <h2>Business problems Cybertech is built to solve</h2>
          </Reveal>
          <div className="case-grid">
            {proofCards.map((card) => (
              <Reveal className="case-card" key={card.title}>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <a href="#enquiry">Discuss this need <ArrowRight size={17} /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="process">
        <div className="site-container process-layout">
          <Reveal className="section-heading align-left">
            <p className="eyebrow"><span /> Working Process</p>
            <h2>Our approach</h2>
            <p>The process keeps your project practical: clear discovery, expert planning, focused build work and ongoing improvement.</p>
          </Reveal>
          <div className="process-list process-list-premium">
            {process.map(([number, title, copy]) => (
              <Reveal className="process-item process-item-premium" key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tech-section" id="technology">
        <div className="site-container tech-layout">
          <Reveal>
            <p className="eyebrow"><span /> Our Technologies</p>
            <h2>We use modern technologies</h2>
          </Reveal>
          <Reveal className="tech-cloud">
            {technologies.map((tech) => <span key={tech}>{tech}</span>)}
          </Reveal>
        </div>
      </section>

      <section className="section section-accent" id="enquiry">
        <div className="site-container contact-band contact-start">
          <Reveal className="contact-intro">
            <p className="eyebrow"><span /> You Are Here</p>
            <h2>Let&apos;s start your journey to digital growth.</h2>
            <p>Tell Cybertech Marketing what you want to grow, build or automate. We will review the requirement and get back to you.</p>
            <div className="start-steps">
              <span><Target size={18} /> Share your requirements</span>
              <span><Workflow size={18} /> Discuss them with experts</span>
              <span><ShieldCheck size={18} /> Get a clear next step</span>
            </div>
            <div className="contact-methods">
              <a href="mailto:info@cybertechmarketing.com">info@cybertechmarketing.com</a>
              <a href="tel:+917428768779">+91 74287 68779</a>
              <a href="https://wa.me/917428768779" target="_blank" rel="noreferrer">WhatsApp Cybertech</a>
            </div>
          </Reveal>
          <Reveal className="form-panel">
            <h3>Let&apos;s connect</h3>
            <p>Send us a message and we will promptly discuss your project with you.</p>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="site-container faq-layout">
          <Reveal className="section-heading">
            <p className="eyebrow"><span /> F.A.Q.</p>
            <h2>Need support?</h2>
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
            <p className="eyebrow hero-eyebrow"><span /> Cybertech Marketing</p>
            <h2>Ready for a high-performance digital system?</h2>
            <a className="button button-primary" href="#enquiry">Send an enquiry <CheckCircle2 size={18} /></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
