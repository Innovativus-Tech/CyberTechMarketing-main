import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Insights | Cybertech Marketing",
  description: "Practical insights on digital growth, content systems, conversion design, AI and modern technology delivery.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="blog-index-page">
      <section className="blog-index-hero">
        <div className="site-container">
          <Reveal direction="up">
            <p className="eyebrow"><span /> Cybertech insights</p>
            <h1>Ideas for building a sharper digital business.</h1>
            <p>Useful thinking on growth, conversion, content operations, AI and the technology systems behind modern customer experiences.</p>
          </Reveal>
        </div>
      </section>

      <section className="section blog-index-section">
        <div className="site-container blog-index-grid">
          {posts.map((post, index) => (
            <Reveal key={post.slug} direction="up" delay={index * 0.07} className={index === 0 ? "blog-index-featured" : ""}>
              <Link href={`/blog/${post.slug}`} className={`blog-index-card ${index === 0 ? "is-featured" : ""}`}>
                <div className="blog-index-image">
                  <Image src={post.image} alt={post.title} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 100vw, 33vw"} />
                  <span>{post.category}</span>
                </div>
                <div className="blog-index-copy">
                  <div className="blog-index-meta"><span><Calendar size={15} />{new Date(post.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span><span><Clock size={15} />{post.readTime}</span></div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className="blog-index-link">Read article <ArrowRight size={17} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
