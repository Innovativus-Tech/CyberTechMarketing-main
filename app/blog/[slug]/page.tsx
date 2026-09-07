import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Cybertech Marketing',
    };
  }

  return {
    title: `${post.title} | Cybertech Marketing`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await getAllPosts())
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen">
      {/* Blog Post Hero */}
      <section className="about-page-hero relative" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[rgba(21,26,36,0.85)] to-[rgba(21,26,36,0.6)] z-0" />
        
        <div className="site-container relative z-10">
          <Reveal direction="up" style={{ maxWidth: '900px' }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-white hover:text-red-400 transition-colors" style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '32px' }}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ display: 'inline-block', padding: '6px 16px', background: 'var(--red)', color: 'white', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', borderRadius: '6px' }}>
                {post.category}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.95rem' }}>
                {post.readTime}
              </span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', lineHeight: 1.1, fontWeight: 900, color: 'white', marginBottom: '24px' }}>
              {post.title}
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: '800px' }}>
              {post.excerpt}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '40px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '0.9rem' }}>
              <span>Published on {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Post Content */}
      <section className="section section-light" style={{ padding: '80px 0', background: 'var(--paper)' }}>
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="lg:grid-cols-[2fr_1fr]">
            
            {/* Article Body */}
            <Reveal direction="up">
              <article style={{ background: 'white', padding: '60px', borderRadius: '16px', border: '1px solid #e1e5ea', boxShadow: '0 20px 60px rgba(21, 26, 36, 0.05)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--ink)' }}>
                  {post.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                
                <hr style={{ border: 'none', borderTop: '1px solid #e1e5ea', margin: '60px 0 40px' }} />
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--ink)' }}>Ready to implement this strategy?</h3>
                  <Link href="/contact" className="button button-primary">
                    Book a Strategy Call <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              <Reveal direction="up" delay={0.1}>
                <div style={{ background: 'var(--ink)', padding: '40px', borderRadius: '16px', color: 'white' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '16px' }}>Need help applying this?</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '32px' }}>
                    We help brands turn channel chaos into a focused growth system built around traffic, conversion, and retention.
                  </p>
                  <Link href="/contact" className="button button-primary" style={{ width: '100%', minHeight: '50px' }}>
                    Contact Cybertech
                  </Link>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--ink)', marginBottom: '20px' }}>Related Reads</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      style={{ display: 'block', background: 'white', border: '1px solid #e1e5ea', borderRadius: '12px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                      className="hover:-translate-y-1 hover:shadow-lg group"
                    >
                      <div style={{ height: '140px', position: 'relative', overflow: 'hidden' }}>
                        <Image 
                          src={related.image}
                          alt={related.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--red)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                          {related.category}
                        </span>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.3 }}>
                          {related.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </Reveal>

            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
