import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Code2, Phone } from "lucide-react";
import Reveal from "./Reveal";

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
      
      {/* Floating Animated Shapes (Parallax feel) */}
      <div className="hero-shapes">
        <div className="hero-shape shape-1" />
        <div className="hero-shape shape-2" />
      </div>

      <div className="site-container hero-content">
        <Reveal direction="left">
          <p className="eyebrow hero-eyebrow"><span /> Cybertech Marketing</p>
          <h1>Let&apos;s <em>digitize</em> your business.</h1>
          <p className="hero-desc">We build digital growth systems, performance websites, and AI automation workflows for modern businesses.</p>
          <div className="hero-actions">
            <Link href="#enquiry" className="button button-primary">GET STARTED <ArrowRight size={18} /></Link>
            <a href="tel:+917428768779" className="button button-ghost"><Phone size={17} /> +91 74287 68779</a>
          </div>
        </Reveal>
        
        <Reveal className="hero-service-panel" direction="right" delay={0.2}>
          <div className="hero-service-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <div className="hsc-icon" style={{ color: 'var(--orange)' }}>
              <Code2 size={24} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>Digital Growth Engine</strong>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#b8c0cc' }}>Performance marketing, Custom software & Data systems</p>
            </div>
          </div>
          <div className="hero-service-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '16px' }}>
            <div className="hsc-icon" style={{ color: 'var(--red)' }}>
              <Bot size={24} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>AI & Automation</strong>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#b8c0cc' }}>Removing manual work with intelligent tools.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
