import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

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
          <div className="eyebrow hero-eyebrow"><span /> Cybertech Marketing</div>
          <h1>Digital growth, software and AI for ambitious brands.</h1>
          <p>We connect marketing strategy, product engineering, automation and data into one practical growth system.</p>
          <div className="hero-actions">
            <Link href="#enquiry" className="button button-primary">Start your project <ArrowRight size={18} /></Link>
            <a href="tel:+917428768779" className="button button-ghost"><Phone size={17} /> +91 74287 68779</a>
          </div>
          <div className="hero-proof">
            <span><CheckCircle2 size={17} /> Strategy-first planning</span>
            <span><CheckCircle2 size={17} /> Build-ready execution</span>
            <span><CheckCircle2 size={17} /> Data-led improvement</span>
          </div>
        </div>
      </div>
      <div className="hero-ticker" aria-hidden="true">
        <div>Digital Marketing & Growth <span>/</span> Web Development <span>/</span> Software Development <span>/</span> AI & Intelligent Solutions <span>/</span> Machine Learning & Data <span>/</span> Mobile App Development <span>/</span></div>
      </div>
    </section>
  );
}
