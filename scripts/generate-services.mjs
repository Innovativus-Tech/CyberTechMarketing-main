import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const services = [
  {
    slug: 'digital-marketing-growth',
    title: 'Digital Marketing & Growth',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
    subtitle: 'Scale your brand with precision targeting, data-driven funnels, and performance SEO.',
    description: 'Our Digital Marketing & Growth systems are engineered to turn attention into revenue. We don\'t just run ads; we build interconnected ecosystems combining technical SEO, high-converting landing pages, and automated lead nurturing.',
    features: [
      { title: 'Performance Media Buying', desc: 'Maximized ROAS across Meta, Google, LinkedIn, and TikTok using AI-driven bidding.' },
      { title: 'Technical & Content SEO', desc: 'Dominating search rankings with clean architecture and high-authority content engines.' },
      { title: 'Conversion Rate Optimization', desc: 'A/B testing, heatmaps, and psychological design to turn more visitors into buyers.' },
      { title: 'Lifecycle Automation', desc: 'Email and SMS sequences that nurture leads and maximize customer lifetime value (LTV).' }
    ]
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    subtitle: 'Lightning-fast, highly-converting websites built on modern tech stacks.',
    description: 'Your website is your best salesperson. We develop ultra-fast, responsive, and secure websites that serve as the foundation of your digital growth. From bespoke corporate sites to high-traffic eCommerce platforms, we build to perform.',
    features: [
      { title: 'Modern Frameworks', desc: 'Built with React, Next.js, and Node.js for instantaneous load times and unparalleled SEO.' },
      { title: 'Headless CMS Integration', desc: 'Empowering your marketing team with an easy-to-use content system tailored to your publishing workflow.' },
      { title: 'Responsive & Accessible', desc: 'Flawless experiences across all devices, ensuring WCAG compliance and broad accessibility.' },
      { title: 'High-Performance eCommerce', desc: 'Scalable Shopify Plus and custom headless commerce builds that handle massive traffic spikes.' }
    ]
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    subtitle: 'Custom applications, internal portals, and scalable SaaS platforms.',
    description: 'Off-the-shelf software rarely fits perfectly. We engineer custom software solutions that streamline your operations, open new revenue channels, and give you a distinct competitive advantage in your industry.',
    features: [
      { title: 'Custom SaaS Platforms', desc: 'End-to-end development of multi-tenant architectures, subscription billing, and complex dashboards.' },
      { title: 'Internal Portals & CRM', desc: 'Bespoke tools that connect your disparate databases and streamline your team\'s daily workflows.' },
      { title: 'API & Legacy Integration', desc: 'Modernizing legacy systems and connecting third-party APIs into one cohesive infrastructure.' },
      { title: 'Enterprise Security', desc: 'Bank-grade encryption, SOC2-compliant architectures, and rigorous penetration testing.' }
    ]
  },
  {
    slug: 'ai-intelligent-solutions',
    title: 'AI & Intelligent Solutions',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    subtitle: 'Automate workflows and unlock new capabilities with generative AI and LLMs.',
    description: 'We integrate practical Artificial Intelligence into your business operations. Whether it\'s deploying intelligent customer service bots, automating content generation, or building internal AI assistants, we help you work smarter.',
    features: [
      { title: 'Custom AI Assistants', desc: 'LLM-powered chatbots trained on your internal knowledge bases to assist staff and customers.' },
      { title: 'Workflow Automation', desc: 'Replacing manual data entry and repetitive tasks with intelligent, error-free AI pipelines.' },
      { title: 'Generative Design & Copy', desc: 'Dynamic systems that automatically generate personalized marketing copy and assets at scale.' },
      { title: 'Computer Vision & OCR', desc: 'Extracting data from physical documents and analyzing images using advanced neural networks.' }
    ]
  },
  {
    slug: 'machine-learning-data',
    title: 'Machine Learning & Data',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    subtitle: 'Predictive modeling, data lakes, and business intelligence that drives decisions.',
    description: 'Your data is your most valuable asset. We build the pipelines to collect it, the infrastructure to store it, and the machine learning models to extract predictive, actionable insights that keep you steps ahead of your competition.',
    features: [
      { title: 'Predictive Analytics', desc: 'Forecasting sales, predicting customer churn, and identifying market trends before they happen.' },
      { title: 'Data Pipelines & ETL', desc: 'Robust architectures that securely aggregate data from CRMs, ERPs, and marketing platforms.' },
      { title: 'Recommendation Engines', desc: 'Personalized product and content recommendations that significantly boost average order value.' },
      { title: 'Business Intelligence Dashboards', desc: 'Real-time, interactive visualizations that give executives a clear view of company health.' }
    ]
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    subtitle: 'Native and cross-platform mobile experiences for iOS and Android.',
    description: 'We design and develop mobile applications that users love. Whether you need a consumer-facing app with millions of downloads or a secure internal tool for your field workforce, our mobile team delivers excellence.',
    features: [
      { title: 'Cross-Platform React Native', desc: 'Deploying high-performance apps to both iOS and Android from a single codebase.' },
      { title: 'Native iOS & Android', desc: 'Utilizing Swift and Kotlin for applications that require maximum performance and hardware access.' },
      { title: 'UX/UI Mobile Design', desc: 'Intuitive, gesture-driven interfaces that feel native and adhere strictly to Apple and Material design guidelines.' },
      { title: 'App Store Optimization', desc: 'Ensuring your app ranks highly in the App Store and Google Play, driving organic downloads.' }
    ]
  }
];

const template = (service) => `
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
            src="${service.img}" 
            alt="${service.title}" 
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
                <span className="text-white">${service.title}</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.1 }}>${service.title}</h1>
              <p style={{ fontSize: '1.25rem', marginTop: '24px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '760px', marginInline: 'auto' }}>
                ${service.subtitle}
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
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '24px', color: 'var(--ink)' }}>Driving results with ${service.title}</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                ${service.description}
              </p>
            </Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
              ${service.features.map((f, i) => `
              <Reveal direction="up" delay={${i * 0.1}}>
                <div style={{ background: 'white', border: '1px solid #e1e5ea', borderRadius: '16px', padding: '32px', height: '100%', transition: 'transform 0.3s ease', cursor: 'default' }} className="hover:-translate-y-2 hover:shadow-xl">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--red)' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>${f.title}</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>${f.desc}</p>
                </div>
              </Reveal>
              `).join('')}
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
              Partner with Cybertech Marketing to leverage cutting-edge ${service.title.toLowerCase()} tailored to your unique goals.
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
`;

services.forEach(svc => {
  const dir = path.join(ROOT, 'app', 'services', svc.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(svc), 'utf8');
  console.log(`Generated ${svc.slug}`);
});
