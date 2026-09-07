import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Image
        className="hero-image"
        src="/cybertech-hero.png"
        alt=""
        width={1200}
        height={760}
        priority
      />
      <div className="hero-scrim" />
      <div className="site-container hero-content">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span /> Perfect company solution</div>
          <h1>We help companies digitize, market and scale smarter.</h1>
          <p>Cybertech Marketing blends growth strategy, custom websites, software engineering, AI, data and mobile products into one high-performance digital system.</p>
          <div className="hero-actions">
            <Link href="#enquiry" className="button button-primary">Contact us today <ArrowRight size={18} /></Link>
            <a href="tel:+917428768779" className="button button-ghost"><Phone size={17} /> Call daily +91 74287 68779</a>
          </div>
          <div className="hero-proof">
            <span><CheckCircle2 size={17} /> Focus on quality first</span>
            <span><CheckCircle2 size={17} /> Get to market on time</span>
            <span><CheckCircle2 size={17} /> Improve with real data</span>
          </div>
        </div>
        <div className="hero-service-panel" aria-label="Cybertech service highlights">
          <span><Sparkles size={17} /> Cybertech service stack</span>
          <b>Growth, product and intelligence under one roof.</b>
          <ul>
            <li>Marketing funnels</li>
            <li>Custom software</li>
            <li>AI automation</li>
            <li>Mobile experiences</li>
          </ul>
        </div>
      </div>
      <div className="hero-ticker" aria-hidden="true">
        <div>Digital Marketing & Growth <span>/</span> Web Development <span>/</span> Software Development <span>/</span> AI & Intelligent Solutions <span>/</span> Machine Learning & Data <span>/</span> Mobile App Development <span>/</span></div>
      </div>
    </section>
  );
}
