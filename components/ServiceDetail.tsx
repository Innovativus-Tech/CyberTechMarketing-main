import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { serviceCatalog, type ServiceContent } from "@/lib/serviceCatalog";

export default function ServiceDetail({ service }: { service: ServiceContent }) {
  return <>
    <section className="cm-service-hero">
      <div className="site-container">
        <nav className="cm-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} /><Link href="/services">Services</Link><ChevronRight size={14} /><span aria-current="page">{service.title}</span></nav>
        <div className="cm-service-hero-grid">
          <Reveal direction="left"><p className="eyebrow"><span /> {service.title}</p><h1>{service.headline}</h1><p className="cm-service-lede">{service.subtitle}</p><a className="button button-primary" href="#service-enquiry">DISCUSS YOUR PROJECT <ArrowUpRight size={18} /></a></Reveal>
          <div className="cm-service-hero-image"><Image src={service.img} alt={service.alt} width={1200} height={850} priority /><div><span>CYBERTECH EXPERTISE</span><b>{service.title}</b></div></div>
        </div>
      </div>
    </section>
    <section className="section cm-service-body"><div className="site-container cm-detail-layout">
      <aside className="cm-service-sidebar"><h2>Our expertise</h2><nav aria-label="Other services">{serviceCatalog.map(item=><Link key={item.slug} className={item.slug===service.slug?"is-current":""} aria-current={item.slug===service.slug?"page":undefined} href={"/services/"+item.slug}>{item.title}<ArrowUpRight size={16} /></Link>)}</nav><div className="cm-sidebar-contact"><span>HAVE A PROJECT IN MIND?</span><h3>Let’s find your next move.</h3><a href="tel:+917428768779"><Phone size={18} /> +91 74287 68779</a><Link href="/contact">Talk to our team <ArrowRight size={16} /></Link></div></aside>
      <div className="cm-service-main"><Reveal><p className="eyebrow"><span /> The bigger picture</p><h2>Built around your goals.</h2><p className="cm-body-lede">{service.description}</p></Reveal>
      <div className="cm-capabilities">{service.features.map((feature,i)=><Reveal key={feature.title} delay={i*.06}><div className="cm-capability-number">0{i+1}<ArrowUpRight size={19} /></div><h3>{feature.title}</h3><p>{feature.desc}</p></Reveal>)}</div>
      <Reveal className="cm-deliverables"><p className="eyebrow"><span /> What you receive</p><h2>A clear scope. A useful outcome.</h2><ul>{service.deliverables.map(item=><li key={item}><CheckCircle2 size={19} />{item}</li>)}</ul></Reveal>
      <Reveal className="cm-service-process"><p className="eyebrow"><span /> From idea to impact</p><h2>How we work with you.</h2><ol>{service.steps.map((step,i)=><li key={step}><span>0{i+1}</span><h3>{step}</h3></li>)}</ol></Reveal>
      <div className="cm-service-faq"><p className="eyebrow"><span /> Before we begin</p><h2>Your questions, answered.</h2><div className="faq-list">{service.faq.map(([q,a])=><details key={q}><summary>{q}<ArrowRight size={18} /></summary><p>{a}</p></details>)}</div></div>
      </div>
    </div></section>
    <section className="section section-accent" id="service-enquiry"><div className="site-container contact-band"><Reveal className="contact-intro"><p className="eyebrow"><span /> Let’s connect</p><h2>Tell us what you want to build.</h2><p>Share your goals for {service.title.toLowerCase()}. We’ll help you define the scope, priorities and next steps.</p><a href="mailto:info@cybertechmarketing.com">info@cybertechmarketing.com</a></Reveal><div className="form-panel"><h3>Start a conversation</h3><ContactForm defaultService={service.title} compact /></div></div></section>
    <section className="section"><div className="site-container"><p className="eyebrow"><span /> Better together</p><h2 className="cm-related-title">Explore more possibilities.</h2><div className="cm-related-grid">{serviceCatalog.filter(s=>s.slug!==service.slug).slice(0,3).map(s=><Link href={"/services/"+s.slug} key={s.slug}><Image src={s.img} alt={s.alt} width={500} height={320} /><div><h3>{s.title}</h3><ArrowUpRight size={20} /></div></Link>)}</div></div></section>
  </>;
}
