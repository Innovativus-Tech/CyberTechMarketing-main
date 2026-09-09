import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, CheckCircle2, Code2, Globe, LayoutTemplate, Megaphone, ShieldCheck, Smartphone, Star, Target, Workflow } from "lucide-react";
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
    subheading: "Get Found. Get Leads. Grow.",
    description: "Build a predictable pipeline with SEO, paid media, content and conversion-focused campaigns designed around your ideal customers.",
    Icon: Megaphone,
    bullets: ["SEO", "Paid Advertising", "Content Strategy", "Lead Generation", "Conversion Funnels", "Growth Strategy"],
    cta: "Explore Growth Services",
  },
  {
    title: "Web Development",
    subheading: "Don't Just Look Professional. Convert.",
    description: <><span style={{display:'block', marginBottom:'8px'}}>Your website should do more than explain what you do. It should build trust, answer objections and turn the right visitors into enquiries.</span><span style={{display:'block'}}>We build fast, responsive websites and landing pages engineered for performance and conversion.</span></>,
    Icon: LayoutTemplate,
    bullets: ["Corporate Websites", "Landing Pages", "CMS Development", "Website Redesigns", "Conversion Optimization"],
    cta: "Build My Website",
  },
  {
    title: "Software Development",
    subheading: "Replace Manual Work With Software That Works.",
    description: <><span style={{display:'block', marginBottom:'8px'}}>Stop stitching your business together with spreadsheets, disconnected tools and repetitive processes.</span><span style={{display:'block'}}>We build custom platforms, dashboards and internal systems around the way your business actually operates.</span></>,
    Icon: Code2,
    bullets: ["Custom Platforms", "Business Dashboards", "Portals", "API Integrations", "Internal Tools"],
    cta: "Build My Solution",
  },
  {
    title: "AI & Automation",
    subheading: "Put AI to Work. Not Just on Your Pitch Deck.",
    description: <><span style={{display:'block', marginBottom:'8px'}}>Turn repetitive work into automated workflows and give your team intelligent systems that work around the clock.</span><span style={{display:'block'}}>From AI assistants to lead qualification and process automation, we identify where AI can create measurable leverage.</span></>,
    Icon: Bot,
    bullets: ["AI Assistants", "Workflow Automation", "Lead Qualification", "AI Integrations", "Intelligent Processes"],
    cta: "Find My AI Opportunity",
  },
  {
    title: "Data & Machine Learning",
    subheading: "Turn Your Data Into Better Decisions.",
    description: <><span style={{display:'block', marginBottom:'8px'}}>Your business already has data. The opportunity is making it useful.</span><span style={{display:'block'}}>We build reporting systems, data pipelines and predictive models that help teams understand what's happening—and what to do next.</span></>,
    Icon: BrainCircuit,
    bullets: ["Data Pipelines", "Dashboards", "Reporting", "Predictive Models", "Business Intelligence"],
    cta: "Unlock My Data",
  },
  {
    title: "Mobile App Development",
    subheading: "Build an App People Actually Want to Use.",
    description: "From idea to launch, we create reliable mobile experiences designed around your users, your business model and your growth plans.",
    Icon: Smartphone,
    bullets: ["iOS", "Android", "Cross-Platform Apps", "Product UX", "API Integrations", "App Development"],
    cta: "Build My App",
  },
];

const funFacts = [
  { value: "1000+", label: "Projects Done" },
  { value: "80+", label: "Happy Clients" },
  { value: "6", label: "Core Services" },
  { value: "100%", label: "Delivery Focus" },
];

const testimonials = [
  {
    name: "Rajesh K.",
    text: "“They made our digital marketing predictable.” Cybertech helped us improve our online visibility and generate better-quality leads. The team understood our goals and delivered exactly what we needed.",
    rating: 5,
    avatarColor: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    name: "Priya M.",
    text: "“Our website finally works for our business.” The new website is faster, clearer and much better at converting visitors into enquiries. Great team and smooth execution.",
    rating: 5,
    avatarColor: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
  {
    name: "Amit P.",
    text: "“They helped us automate hours of manual work.” Cybertech Marketing team identified where automation could make the biggest difference and built a solution that saves our team valuable time every week.",
    rating: 5,
    avatarColor: "linear-gradient(135deg, #ff7a3d, #e6332a)",
  },
  {
    name: "Vikram S.",
    text: "“A team that actually understands our business.” Cybertech didn't just deliver what we asked for. They understood the bigger picture and helped us find a better solution.",
    rating: 5,
    avatarColor: "linear-gradient(135deg, #3b82f6, #2563eb)",
  },
  {
    name: "Neha G.",
    text: "“Professional, responsive and reliable.” From strategy to execution, the Cybertech team made the entire process simple. They delivered quality work and kept us informed throughout.",
    rating: 5,
    avatarColor: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  },
  {
    name: "Karan D.",
    text: "“They turned our idea into reality.” We had a vision but weren't sure how to build it. Cybertech turned the idea into a practical, scalable digital solution.",
    rating: 5,
    avatarColor: "linear-gradient(135deg, #ec4899, #db2777)",
  }
];

const automationFlowSteps = ["Attract", "Convert", "Automate", "Scale"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* AUTOMATION FLOW */}
      <section className="automation-flow-banner" aria-label="Cybertech growth process">
        <div className="site-container">
          <div className="automation-flow-inner">
            <div className="flow-chart" aria-label="Attract to Convert to Automate to Scale">
              {automationFlowSteps.map((step, index) => (
                <div className="flow-chart-item" key={step} style={{ '--flow-step': index } as React.CSSProperties}>
                  <div className="flow-node">
                    <span className="flow-node-index">0{index + 1}</span>
                    <strong>{step}</strong>
                  </div>
                  {index < automationFlowSteps.length - 1 && (
                    <div className="flow-connector" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
            <div className="flow-banner-copy">
              <p>From generating demand to building the technology behind your business, Cybertech connects the pieces into one growth system.</p>
              <strong>Strategy &middot; Marketing &middot; Websites &middot; Software &middot; AI &middot; Data</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-services" id="services">
        <div className="site-container">
          <Reveal className="section-heading" direction="up">
            <p className="eyebrow"><span /> Our Services</p>
            <h2>Everything You Need to <em>Build, Grow & Scale</em> Digitally.</h2>
            <p>From your first customer acquisition campaign to the software running your operations, we bring strategy, execution and technology together around measurable business outcomes.</p>
          </Reveal>
          <div className="services-card-grid">
            {services.map((service, idx) => (
              <Reveal className="svc-card" key={service.title} delay={idx * 0.1} direction="up">
                <Link href={`/services/${["digital-marketing-growth", "web-development", "software-development", "ai-intelligent-solutions", "machine-learning-data", "mobile-app-development"][idx]}`} className="svc-card-link-wrap">
                  <div className="svc-card-topline">
                    <div className="svc-card-icon"><service.Icon size={28} strokeWidth={1.7} /></div>
                    <span className="svc-card-index">0{idx + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  {service.subheading && <h4 style={{ fontSize: '19px', fontWeight: 900, margin: '14px 0 10px', background: 'linear-gradient(135deg, var(--red), var(--orange))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.5px' }}>{service.subheading}</h4>}
                  <p className="svc-card-description">{service.description}</p>
                  <p style={{ fontWeight: 600, fontSize: '15px', marginBottom: '12px' }}>What we do:</p>
                  <ul className="svc-card-bullets">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}><CheckCircle2 size={17} />{bullet}</li>
                    ))}
                  </ul>
                  <span className="svc-card-action">{service.cta || "Explore service"} <ArrowRight size={17} /></span>
                </Link>
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
            <h2>One Partner. <em>Strategy, Technology &amp; Growth.</em></h2>
            <div className="about-v2-content">
              <p className="hook">
                <span>Most businesses don&apos;t have a technology problem.</span>
                <span>They have a fragmentation problem.</span>
              </p>
              <p>Marketing works separately from the website. The website sits apart from sales. Operations run on spreadsheets. Data lives in different systems. And everyone has a different idea of what &quot;growth&quot; means.</p>
              <p className="highlight">Cybertech brings those pieces together.</p>
              <p>We combine marketing, web development, software, AI and data to build digital systems that work as one.</p>
              <p>So instead of hiring another vendor to solve another isolated problem, you get one team focused on the bigger picture, and the business outcome.</p>
            </div>
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
                    <span className="avatar-circle" style={{background: 'linear-gradient(135deg, #ff7a3d, #e6332a)'}}>DM</span>
                    <span className="avatar-circle" style={{background: 'linear-gradient(135deg, #202838, #3a4a60)'}}>AI</span>
                    <span className="avatar-circle avatar-count">80+</span>
                  </div>
                  <span className="about-v2-label">Happy Clients</span>
                </div>
                <a className="button button-primary about-v2-cta" href="#enquiry">Learn More <ArrowRight size={16} /></a>
              </div>
              <div className="about-v2-stats-bottom">
                <div className="about-v2-globe-icon">
                  <Globe size={24} />
                </div>
                <div className="about-v2-stat">
                  <strong>1000+</strong>
                  <span>Projects Done</span>
                </div>
                <div className="about-v2-stat">
                  <strong>80+</strong>
                  <span>Clients</span>
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
          <div className="testimonial-marquee-wrapper" style={{ marginTop: '20px', overflow: 'hidden', padding: '20px 0' }}>
            <div className="testimonial-marquee">
              {[0, 1].map((group) => (
                <div className="testimonial-marquee-group" key={group} aria-hidden={group === 1}>
                  {testimonials.map((t) => (
                    <div className="testimonial-card" key={`${group}-${t.name}`}>
                      <div className="testimonial-stars">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" strokeWidth={0} style={{ color: '#FBBC05' }} />
                        ))}
                      </div>
                      <p className="testimonial-text">{t.text}</p>
                      <div className="testimonial-author">
                        <div className="testimonial-avatar" style={{ background: t.avatarColor }}>{t.name.charAt(0)}</div>
                        <div>
                          <strong>{t.name}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <TechnologiesSection />

      {/* CONTACT / ENQUIRY */}
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

      {/* FAQ */}
      <FAQSection />

      {/* ARTICLES */}
      <ArticlesSection />

      {/* FINAL CTA */}
      <section className="section final-cta">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow hero-eyebrow"><span /> Cybertech Marketing</p>
            <h2>Let&apos;s Build Something That Moves the Business Forward.</h2>
            <p style={{ fontSize: '1.25rem', color: '#c5c5cf', maxWidth: '650px', margin: '0 auto 36px', lineHeight: 1.6 }}>
              Tell us where you want to go. We&apos;ll help you figure out how to get there.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a className="button button-primary" href="/#enquiry">
                Start a Conversation <ArrowRight size={18} />
              </a>
              <a className="button" href="https://wa.me/917428768779" target="_blank" rel="noreferrer" style={{ border: '1px solid #25D366', color: '#101828', backgroundColor: '#25D366', fontWeight: 700 }}>
                WhatsApp Cybertech <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
