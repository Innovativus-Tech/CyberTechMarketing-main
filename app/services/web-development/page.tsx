
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
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
            alt="Web Development" 
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
                <span className="text-white">Web Development</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.1 }}>Web Development</h1>
              <p style={{ fontSize: '1.25rem', marginTop: '24px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '760px', marginInline: 'auto' }}>
                Lightning-fast, highly-converting websites built on modern tech stacks.
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
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '24px', color: 'var(--ink)' }}>Driving results with Web Development</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                Your website is your best salesperson. We develop ultra-fast, responsive, and secure websites that serve as the foundation of your digital growth. From bespoke corporate sites to high-traffic eCommerce platforms, we build to perform.
              </p>
            </Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
              
              <Reveal direction="up" delay={0}>
                <div style={{ background: 'white', border: '1px solid #e1e5ea', borderRadius: '16px', padding: '32px', height: '100%', transition: 'transform 0.3s ease', cursor: 'default' }} className="hover:-translate-y-2 hover:shadow-xl">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--red)' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>Modern Frameworks</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Built with React, Next.js, and Node.js for instantaneous load times and unparalleled SEO.</p>
                </div>
              </Reveal>
              
              <Reveal direction="up" delay={0.1}>
                <div style={{ background: 'white', border: '1px solid #e1e5ea', borderRadius: '16px', padding: '32px', height: '100%', transition: 'transform 0.3s ease', cursor: 'default' }} className="hover:-translate-y-2 hover:shadow-xl">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--red)' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>Headless CMS Integration</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Empowering your marketing team with easy-to-use content systems like Sanity and Contentful.</p>
                </div>
              </Reveal>
              
              <Reveal direction="up" delay={0.2}>
                <div style={{ background: 'white', border: '1px solid #e1e5ea', borderRadius: '16px', padding: '32px', height: '100%', transition: 'transform 0.3s ease', cursor: 'default' }} className="hover:-translate-y-2 hover:shadow-xl">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--red)' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>Responsive & Accessible</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Flawless experiences across all devices, ensuring WCAG compliance and broad accessibility.</p>
                </div>
              </Reveal>
              
              <Reveal direction="up" delay={0.30000000000000004}>
                <div style={{ background: 'white', border: '1px solid #e1e5ea', borderRadius: '16px', padding: '32px', height: '100%', transition: 'transform 0.3s ease', cursor: 'default' }} className="hover:-translate-y-2 hover:shadow-xl">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--red)' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>High-Performance eCommerce</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Scalable Shopify Plus and custom headless commerce builds that handle massive traffic spikes.</p>
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
              Partner with Cybertech Marketing to leverage cutting-edge web development tailored to your unique goals.
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
