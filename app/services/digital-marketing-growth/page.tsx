
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function ServicePage() {
  return (
    <main className="min-h-screen">
      {/* Dark Hero Section */}
      <section className="about-page-hero relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop" 
            alt="Digital Marketing & Growth" 
            fill 
            sizes="100vw"
            className="object-cover opacity-20" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] to-transparent opacity-100"></div>
        </div>
        
        <div className="site-container about-page-layout relative z-10" style={{ gridTemplateColumns: '1fr', paddingBottom: '40px' }}>
          <div className="about-page-copy" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <Reveal direction="up">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px', color: 'var(--red)', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight size={14} />
                <span className="text-white">Digital Marketing & Growth</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.1 }}>Digital Marketing & Growth</h1>
              <p style={{ fontSize: '1.25rem', marginTop: '24px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '760px', marginInline: 'auto' }}>
                Scale your brand with precision targeting, data-driven funnels, and performance SEO.
              </p>
              <div style={{ marginTop: '32px' }}>
                <Link href="/contact" className="button button-primary">
                  Discuss Your Project <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Content & Features */}
      <section className="section section-light" style={{ padding: '100px 0' }}>
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', alignItems: 'start' }}>
            
            <Reveal direction="up" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p className="eyebrow" style={{ justifyContent: 'center' }}><span /> Overview</p>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '24px', color: 'var(--ink)' }}>Driving results with Digital Marketing & Growth</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                Our Digital Marketing & Growth systems are engineered to turn attention into revenue. We don't just run ads; we build interconnected ecosystems combining technical SEO, high-converting landing pages, and automated lead nurturing.
              </p>
            </Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
              
              <Reveal direction="up" delay={0}>
                <div style={{ background: 'white', border: '1px solid #e1e5ea', borderRadius: '16px', padding: '32px', height: '100%', transition: 'transform 0.3s ease', cursor: 'default' }} className="hover:-translate-y-2 hover:shadow-xl">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--red)' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>Performance Media Buying</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Maximized ROAS across Meta, Google, LinkedIn, and TikTok using AI-driven bidding.</p>
                </div>
              </Reveal>
              
              <Reveal direction="up" delay={0.1}>
                <div style={{ background: 'white', border: '1px solid #e1e5ea', borderRadius: '16px', padding: '32px', height: '100%', transition: 'transform 0.3s ease', cursor: 'default' }} className="hover:-translate-y-2 hover:shadow-xl">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--red)' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>Technical & Content SEO</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Dominating search rankings with clean architecture and high-authority content engines.</p>
                </div>
              </Reveal>
              
              <Reveal direction="up" delay={0.2}>
                <div style={{ background: 'white', border: '1px solid #e1e5ea', borderRadius: '16px', padding: '32px', height: '100%', transition: 'transform 0.3s ease', cursor: 'default' }} className="hover:-translate-y-2 hover:shadow-xl">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--red)' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>Conversion Rate Optimization</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>A/B testing, heatmaps, and psychological design to turn more visitors into buyers.</p>
                </div>
              </Reveal>
              
              <Reveal direction="up" delay={0.30000000000000004}>
                <div style={{ background: 'white', border: '1px solid #e1e5ea', borderRadius: '16px', padding: '32px', height: '100%', transition: 'transform 0.3s ease', cursor: 'default' }} className="hover:-translate-y-2 hover:shadow-xl">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--red)' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>Lifecycle Automation</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Email and SMS sequences that nurture leads and maximize customer lifetime value (LTV).</p>
                </div>
              </Reveal>
              
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-dark" style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(135deg, var(--ink), var(--ink-2))' }}>
        <div className="site-container">
          <Reveal direction="scale">
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}>Ready to transform your business?</h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Partner with Cybertech Marketing to leverage cutting-edge digital marketing & growth tailored to your unique goals.
            </p>
            <Link href="/contact" className="button button-primary" style={{ padding: '0 40px', minHeight: '60px', fontSize: '1.1rem' }}>
              Schedule a Free Strategy Session <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
