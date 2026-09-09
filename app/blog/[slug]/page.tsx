import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return (await getAllPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPostBySlug((await params).slug);
  if (!post) return { title: "Post Not Found | Cybertech Marketing" };
  return { title: `${post.title} | Cybertech Marketing`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();
  const relatedPosts = (await getAllPosts()).filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main className="blog-post-page">
      <section className="blog-post-hero">
        <Image src={post.image} alt="" fill priority sizes="100vw" />
        <div className="blog-post-overlay" />
        <div className="site-container blog-post-hero-content">
          <Link href="/blog" className="blog-back-link"><ArrowLeft size={17} /> All insights</Link>
          <div className="blog-post-tags"><span>{post.category}</span><span><Clock size={15} />{post.readTime}</span></div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>

        </div>
      </section>

      <section className="blog-post-body">
        <div className="site-container blog-detail-grid">
          <article className="blog-article">
            <p className="blog-article-lead">{post.content[0]}</p>
            {post.content.slice(1).map((paragraph, index) => (
              <div key={index} className="blog-article-section">
                {index === 0 && <h2>What this means in practice</h2>}
                {index === 2 && <h2>Building the operating rhythm</h2>}
                <p>{paragraph}</p>
              </div>
            ))}
            <div className="blog-article-cta">
              <div><span>Turn insight into action</span><h2>Ready to apply this to your business?</h2></div>
              <Link href="/contact" className="button button-primary">Talk to Cybertech <ArrowRight size={18} /></Link>
            </div>
          </article>

          <aside className="blog-sidebar">
            <div className="blog-sidebar-cta">
              <span>Need a practical next step?</span>
              <h2>Build a focused digital growth system.</h2>
              <p>Share the challenge, current setup and outcome you need. We’ll help you identify the clearest route forward.</p>
              <Link href="/contact" className="button button-primary">Start a conversation</Link>
            </div>
            <div>
              <p className="blog-sidebar-title">Related insights</p>
              <div className="blog-related-grid">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} className="blog-related-card">
                    <div><Image src={related.image} alt={related.title} fill sizes="320px" /></div>
                    <span>{related.category}</span>
                    <h3>{related.title}</h3>
                    <small>{related.readTime}</small>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
