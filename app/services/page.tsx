import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { serviceCatalog } from "@/lib/serviceCatalog";

export const metadata = {
  title: "Services | Cybertech Marketing",
  description: "Explore Cybertech Marketing services across growth, web, software, AI, data and mobile product development.",
};

export default function ServicesIndexPage() {
  return (
    <main className="services-index-page">
      <section className="services-index-hero">
        <div className="site-container services-index-hero-grid">
          <Reveal direction="left">
            <p className="eyebrow"><span /> Connected digital expertise</p>
            <h1>Strategy, software and intelligence—working as one.</h1>
            <p>Choose a focused service or bring us a complex challenge. Cybertech connects growth, design, engineering, AI and data around the outcome your business needs.</p>
            <Link href="/contact" className="button button-primary">Discuss your project <ArrowUpRight size={18} /></Link>
          </Reveal>
          <Reveal className="services-index-hero-image" direction="right">
            <Image src="/images/strategy.webp" alt="Cybertech specialists planning a connected digital solution" width={900} height={700} priority />
            <div><strong>6</strong><span>specialist services<br />one delivery partner</span></div>
          </Reveal>
        </div>
      </section>

      <section className="section services-index-section">
        <div className="site-container">
          <Reveal className="section-heading" direction="up">
            <p className="eyebrow"><span /> What we do</p>
            <h2>Capabilities built for <em>measurable progress.</em></h2>
            <p>Every engagement is scoped around clear priorities, practical delivery and a handover your team can use.</p>
          </Reveal>
          <div className="services-index-grid">
            {serviceCatalog.map((service, index) => (
              <Reveal key={service.slug} direction="up" delay={index * 0.06}>
                <Link className="services-index-card" href={`/services/${service.slug}`}>
                  <div className="services-index-image">
                    <Image src={service.img} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="services-index-copy">
                    <p className="services-index-kicker">Cybertech service</p>
                    <h2>{service.title}</h2>
                    <p>{service.subtitle}</p>
                    <ul>
                      {service.deliverables.slice(0, 2).map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}
                    </ul>
                    <span className="services-index-link">View service <ArrowRight size={18} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
