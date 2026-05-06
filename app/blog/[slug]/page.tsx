import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

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
    <main className="min-h-screen bg-[#f8f6f3] pb-20">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.85)), url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${post.accent} mix-blend-multiply opacity-80`} />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Link href="/blog" className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm">
            Back to Blog
          </Link>
          <div className="mt-8 max-w-4xl animate-fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-100">
              {post.category} | {post.readTime}
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-12 grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.65fr] lg:px-8">
        <article className="rounded-[2rem] bg-white p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
            Published {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="space-y-6">
          <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-red-300">Need help applying this?</p>
            <h2 className="mt-4 text-3xl font-black">Build the strategy with us.</h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              We help brands turn channel chaos into a focused growth system built around traffic, conversion, and retention.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-red-700">
              Contact Cybertech
            </Link>
          </div>

          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.slug}
              href={`/blog/${relatedPost.slug}`}
              className="group block overflow-hidden rounded-[1.75rem] bg-white shadow-[0_15px_40px_rgba(15,23,42,0.06)]"
            >
              <div
                className={`h-48 bg-gradient-to-br ${relatedPost.accent} transition-transform duration-500 group-hover:scale-105`}
                style={{ backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.35)), url(${relatedPost.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="p-6">
                <p className="text-sm font-bold text-slate-500">{relatedPost.category}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-slate-900">
                  {relatedPost.title}
                </h3>
              </div>
            </Link>
          ))}
        </aside>
      </section>
    </main>
  );
}
