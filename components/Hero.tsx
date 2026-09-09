import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return <section className="cm-hero" id="home">
    <div className="site-container cm-hero-grid">
      <Reveal className="cm-hero-copy" direction="left">
        <p className="eyebrow hero-eyebrow"><span /> Cybertech Marketing</p>
        <h1>Turn Your <br /><em>Digital Presence</em> Into a <span>Growth Engine.</span></h1>
        <p className="cm-hero-desc">We build the marketing, technology and automation systems that turn attention into leads, leads into customers, and operations into scalable growth.</p>
        <ul className="cm-hero-checks"><li><CheckCircle2 size={18} /> Strategy, creativity and technology. Connected.</li><li><CheckCircle2 size={18} /> One team. From first idea to launch.</li></ul>
        <div className="cm-hero-actions"><Link className="button button-primary" href="#enquiry">BOOK A GROWTH CALL <ArrowUpRight size={18} /></Link><a className="button button-whatsapp" href="https://wa.me/917428768779" target="_blank" rel="noreferrer"><Phone size={18} /> WHATSAPP US</a></div>
      </Reveal>
      <div className="cm-hero-art"><Image src="/images/technology-core.webp" alt="Red illuminated technology core with concentric circuitry" width={1000} height={1000} priority /><span className="cm-art-label">STRATEGY × CREATIVITY × TECHNOLOGY</span></div>
    </div>
    <div className="site-container cm-hero-bottom"><span>ONE PARTNER. EVERY DIGITAL POSSIBILITY.</span><a href="#services">Explore our expertise <span>↓</span></a></div>
  </section>;
}
