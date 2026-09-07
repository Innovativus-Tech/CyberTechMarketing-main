import Image from "next/image";
import { ArrowRight, Bot, BrainCircuit, CheckCircle2, Code2, Globe, LayoutTemplate, Megaphone, Phone, ShieldCheck, Smartphone, Sparkles, Star, Target, Users, Workflow, Zap } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import FAQSection from "@/components/FAQSection";
import ArticlesSection from "@/components/ArticlesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import WorkingProcess from "@/components/WorkingProcess";

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

const funFacts = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "6", label: "Core Services" },
  { value: "100%", label: "Results Guaranteed" },
];

const processSteps = [
  { number: "01", title: "Share your requirements", description: "We understand your goals, audience, current stack and what success should look like." },
  { number: "02", title: "Discuss with experts", description: "Strategy, creative, engineering and data needs are shaped into one practical roadmap." },
  { number: "03", title: "Get a clear quote", description: "You receive a scoped plan for the right mix of marketing, software, AI, data or mobile work." },
  { number: "04", title: "Build and launch", description: "Design, development, campaigns and automation move through clean delivery milestones." },
  { number: "05", title: "Optimize continuously", description: "Performance signals guide the next improvements after launch." },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechStart India",
    text: "Cybertech Marketing transformed our online presence. Their SEO and content strategy doubled our organic traffic in just 4 months.",
    rating: 5,
    avatarColor: "linear-gradient(135deg, #10b981, #059669)", // Emerald green
  },
  {
    name: "Priya Mehta",
    role: "Founder, DesignHub",
    text: "The web development team built us a stunning, fast website that actually converts visitors into clients. Highly recommended.",
    rating: 5,
    avatarColor: "linear-gradient(135deg, #f59e0b, #d97706)", // Amber orange
  },
  {
    name: "Amit Patel",
    role: "CTO, DataFlow Systems",
    text: "Their AI solutions automated our lead qualification process, saving us 20+ hours per week. Game-changing technology partner.",
    rating: 5,
    avatarColor: "linear-gradient(135deg, #3b82f6, #2563eb)", // Royal blue
  },
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
      {/* HERO */}
      <Hero />

      {/* PARTNERS MARQUEE */}
      <section className="logo-marquee" aria-label="Cybertech focus areas">
        <div className="ticker-track">
          {["Performance Marketing", "Custom Web Apps", "Web Development", "Software Solutions", "Enterprise Automation", "AI Systems", "Mobile Apps", "Data Intelligence", "Performance Marketing", "Custom Web Apps", "Web Development", "Software Solutions"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-services" id="services">
        <div className="site-container">
          <Reveal className="section-heading" direction="up">
            <p className="eyebrow"><span /> Our Services</p>
            <h2>How we can <em>help</em> you</h2>
            <p>Cybertech Marketing brings growth, software and intelligence together so your brand can attract, convert, operate and scale with confidence.</p>
          </Reveal>
          <div className="services-card-grid">
            {services.map((service, idx) => (
              <Reveal className="svc-card" key={service.title} delay={idx * 0.1} direction="up">
                <div className="svc-card-icon">
                  <service.Icon size={32} strokeWidth={1.5} />
                </div>
                <h3>{service.title}</h3>
                <ul className="svc-card-bullets">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="9" r="3" fill="currentColor"/></svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / MISSION */}
      <section className="section section-dark" id="about">
        <div className="site-container about-v2-layout">
          <Reveal className="about-v2-copy" direction="left">
            <p className="eyebrow"><span /> About Us</p>
            <h2>Cybertech <em>Mission &amp; Goal</em></h2>
            <p>Our mission is to help businesses build a stronger digital engine: one where marketing, websites, software, AI and data work together instead of living in separate silos. With a commitment to excellence and customer satisfaction we strive.</p>
          </Reveal>
          <Reveal className="about-v2-visual" direction="right">
            <div className="about-v2-image">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
                alt="Cybertech team working"
                width={480}
                height={320}
                className="about-v2-img"
              />
            </div>
            <div className="about-v2-stats-panel">
              <div className="about-v2-stats-top">
                <div className="about-v2-avatars">
                  <div className="avatar-stack">
                    <span className="avatar-circle" style={{background: 'linear-gradient(135deg, #e6332a, #ff7a3d)'}}>CT</span>
                    <span className="avatar-circle" style={{background: 'linear-gradient(135deg, #315a8f, #4a8fd4)'}}>DM</span>
                    <span className="avatar-circle" style={{background: 'linear-gradient(135deg, #202838, #3a4a60)'}}>AI</span>
                    <span className="avatar-circle avatar-count">50+</span>
                  </div>
                  <span className="about-v2-label">Happy Customers</span>
                </div>
                <a className="button button-primary about-v2-cta" href="#enquiry">Learn More <ArrowRight size={16} /></a>
              </div>
              <div className="about-v2-stats-bottom">
                <div className="about-v2-globe-icon">
                  <Globe size={24} />
                </div>
                <div className="about-v2-stat">
                  <strong>50+</strong>
                  <span>Projects Done</span>
                </div>
                <div className="about-v2-stat">
                  <strong>100%</strong>
                  <span>Results Guaranteed</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FUN FACTS / COUNTERS */}
      <section className="section funfact-section" id="facts">
        <div className="site-container">
          <div className="funfact-grid">
            {funFacts.map((fact, idx) => (
              <Reveal className="funfact-card" key={fact.label} delay={idx * 0.15} direction="scale">
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING PROCESS */}
      <WorkingProcess />

      {/* TESTIMONIALS */}
      <section className="section testimonial-section" id="testimonials">
        <div className="site-container">
          <Reveal className="section-heading" direction="up">
            <p className="eyebrow"><span /> Testimonials</p>
            <h2>What our <em>clients</em> say</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
              <span style={{ fontSize: '1.05rem', color: '#b8c0cc', fontWeight: 500 }}>Rated 5.0/5.0 by our clients on</span>
              <Image src="/google-rating.png" alt="Google 5 Stars" width={120} height={40} style={{ objectFit: 'contain' }} />
            </div>
          </Reveal>
          <div className="testimonial-grid" style={{ marginTop: '20px' }}>
            {testimonials.map((t, idx) => (
              <Reveal className="testimonial-card" key={t.name} delay={idx * 0.15} direction="up">
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} style={{ color: '#FBBC05' }} />
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: t.avatarColor }}>{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <TechnologiesSection />

      {/* CONTACT / ENQUIRY */}
      <section className="section section-accent" id="enquiry">
        <div className="site-container contact-band contact-start">
          <Reveal className="contact-intro" direction="left">
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
          <Reveal className="form-panel" direction="right">
            <h3>Let&apos;s connect</h3>
            <p>Send us a message and we will promptly discuss your project with you.</p>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* ARTICLES */}
      <ArticlesSection />

      {/* FINAL CTA */}
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
