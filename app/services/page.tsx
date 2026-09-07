import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code2, LineChart, Cpu, Zap, Database, Smartphone } from 'lucide-react';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Our Services | Cybertech Marketing',
  description: 'Comprehensive digital marketing, software development, and AI solutions.',
};

const servicesList = [
  {
    title: 'Digital Marketing & Growth',
    slug: 'digital-marketing-growth',
    icon: <LineChart size={32} />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Scale your brand with precision targeting, data-driven funnels, and performance SEO that turns attention into revenue.',
    features: ['Performance Media Buying', 'Technical & Content SEO', 'Conversion Rate Optimization', 'Lifecycle Automation']
  },
  {
    title: 'Web Development',
    slug: 'web-development',
    icon: <Code2 size={32} />,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    excerpt: 'Lightning-fast, highly-converting websites built on modern tech stacks like Next.js, serving as the foundation of your digital growth.',
    features: ['React & Next.js Builds', 'Headless CMS Integration', 'High-Performance eCommerce', 'Accessible UI/UX']
  },
  {
    title: 'Software Development',
    slug: 'software-development',
    icon: <Cpu size={32} />,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Custom applications, internal portals, and scalable SaaS platforms engineered to streamline your operations and give you a distinct edge.',
    features: ['Custom SaaS Platforms', 'Internal Portals & CRM', 'API Integrations', 'Enterprise Security']
  },
  {
    title: 'AI & Intelligent Solutions',
    slug: 'ai-intelligent-solutions',
    icon: <Zap size={32} />,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    excerpt: 'Automate workflows and unlock new capabilities with generative AI, intelligent bots, and LLM-powered internal tools.',
    features: ['Custom AI Assistants', 'Workflow Automation', 'Generative Design & Copy', 'Computer Vision & OCR']
  },
  {
    title: 'Machine Learning & Data',
    slug: 'machine-learning-data',
    icon: <Database size={32} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Predictive modeling, robust data pipelines, and business intelligence dashboards that drive smarter executive decisions.',
    features: ['Predictive Analytics', 'Data Pipelines & ETL', 'Recommendation Engines', 'BI Dashboards']
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    icon: <Smartphone size={32} />,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Native and cross-platform mobile experiences for iOS and Android, designed with intuitive gestures and maximum performance.',
    features: ['React Native Apps', 'Native iOS (Swift)', 'Native Android (Kotlin)', 'App Store Optimization']
  }
];

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen">
      {/* Dark Hero Section */}
      <section className="about-page-hero relative">
        <div className="site-container about-page-layout" style={{ gridTemplateColumns: '1fr' }}>
          <div className="about-page-copy" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <Reveal direction="up">
              <p className="eyebrow" style={{ justifyContent: 'center' }}><span /> What We Do</p>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1 }}>Solutions engineered for <em>growth</em>.</h1>
              <p style={{ fontSize: '1.25rem', marginTop: '24px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '760px', marginInline: 'auto' }}>
                We combine technical excellence with strategic marketing to build interconnected digital ecosystems that scale modern businesses.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="section section-light" style={{ padding: '80px 0 100px', background: 'var(--paper)' }}>
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            {servicesList.map((svc, idx) => (
              <Reveal direction="up" delay={idx * 0.1} key={svc.slug}>
                <Link
                  href={`/services/${svc.slug}`}
                  style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white', border: '1px solid #e1e5ea', borderRadius: '20px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  className="hover:-translate-y-2 hover:shadow-xl group"
                >
                  <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                    <Image 
                      src={svc.image}
                      alt={svc.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(21,26,36,0.6), transparent)' }}></div>
                    <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: 'var(--red)', color: 'white', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(230,51,42,0.3)' }}>
                      {svc.icon}
                    </div>
                  </div>
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--ink)', marginBottom: '16px' }}>{svc.title}</h2>
                    <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                      {svc.excerpt}
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                      {svc.features.map(f => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 600, color: 'var(--ink)' }}>
                          <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)' }}></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ink)', fontWeight: 800, fontSize: '1rem', marginTop: 'auto' }}>
                      Explore Service <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 text-red-500" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark" style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(135deg, var(--ink), var(--ink-2))' }}>
        <div className="site-container">
          <Reveal direction="scale">
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}>Not sure where to start?</h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Book a free discovery call with our strategists to map out the exact digital architecture your business needs.
            </p>
            <Link href="/contact" className="button button-primary" style={{ padding: '0 40px', minHeight: '60px', fontSize: '1.1rem' }}>
              Book Discovery Call <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
