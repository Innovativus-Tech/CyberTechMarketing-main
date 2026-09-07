import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Blog | Cybertech Marketing',
  description: 'Insights on AI marketing, content strategy, conversion design, and performance growth.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <main className="min-h-screen">
      {/* Dark Hero Section */}
      <section className="about-page-hero relative">
        <div className="site-container about-page-layout" style={{ gridTemplateColumns: '1fr' }}>
          <div className="about-page-copy" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <Reveal direction="up">
              <p className="eyebrow" style={{ justifyContent: 'center' }}><span /> Intelligence &amp; Insights</p>
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.1 }}>Marketing intelligence &amp; <em>growth</em> strategy</h1>
              <p style={{ fontSize: '1.25rem', marginTop: '24px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '760px', marginInline: 'auto' }}>
                Insights on AI marketing, content systems, conversion design, and performance growth that actually ships.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Post & Sidebar Grid */}
      <section className="section section-light" style={{ padding: '80px 0 40px' }}>
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="lg:grid-cols-[1.8fr_1fr]">
            
            {/* Featured Post */}
            {featuredPost && (
              <Reveal direction="up">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  style={{ display: 'block', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e1e5ea', background: 'white', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  className="hover:-translate-y-2 hover:shadow-xl group"
                >
                  <div style={{ position: 'relative', height: '400px', width: '100%' }}>
                    <Image 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(21, 26, 36, 0.9), transparent)' }}></div>
                    <div style={{ position: 'absolute', bottom: '32px', left: '32px', right: '32px' }}>
                      <span style={{ display: 'inline-block', padding: '4px 12px', background: 'var(--red)', color: 'white', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', borderRadius: '4px', marginBottom: '16px' }}>
                        {featuredPost.category}
                      </span>
                      <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '12px' }}>
                        {featuredPost.title}
                      </h2>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: 600 }}>
                        <span>{featuredPost.readTime}</span>
                        <span>•</span>
                        <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )}

            {/* Sidebar CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Reveal direction="up" delay={0.1} style={{ height: '100%' }}>
                <div style={{ background: 'var(--ink)', borderRadius: '16px', padding: '40px', height: '100%', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--red)', filter: 'blur(80px)', opacity: 0.4 }}></div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', position: 'relative' }}>Subscribe to the Growth Digest</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px', position: 'relative' }}>
                    Keep up to date with our weekly digest of growth strategy, SEO, content, and creative insights.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', position: 'relative' }}>
                    <input type="email" placeholder="Business Email" style={{ flex: 1, padding: '16px', borderRadius: '8px', border: 'none', outline: 'none', color: 'var(--ink)' }} />
                    <button className="button button-primary" style={{ minWidth: 'auto', padding: '0 24px', borderRadius: '8px' }}><ArrowRight size={20} /></button>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Grid of Other Posts */}
      <section className="section" style={{ padding: '40px 0 100px', background: 'var(--paper)' }}>
        <div className="site-container">
          <Reveal direction="up">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--ink)', marginBottom: '40px' }}>Latest Articles</h2>
          </Reveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
            {otherPosts.map((post, idx) => (
              <Reveal direction="up" delay={idx * 0.1} key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white', border: '1px solid #e1e5ea', borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  className="hover:-translate-y-2 hover:shadow-xl group"
                >
                  <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '0.85rem', fontWeight: 800, color: 'var(--muted)', textTransform: 'uppercase' }}>
                      <span style={{ color: 'var(--red)' }}>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.3, marginBottom: '16px' }}>
                      {post.title}
                    </h3>
                    <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ink)', fontWeight: 800, fontSize: '0.95rem' }}>
                      Read Article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
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
