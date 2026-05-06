import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Cybertech Marketing',
  description: 'Insights on AI marketing, content strategy, conversion design, and performance growth.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <main className="min-h-screen bg-[#f8f6f3] pt-10 pb-20">
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 animate-fade-up">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.3em] text-red-700">
              Cybertech Blog
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Marketing intelligence, creative systems, and conversion strategy that actually ships.
            </h1>
          </div>
          <Link href="/contact" className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-red-700">
            Talk to our team
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.9fr]">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group grid overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 lg:grid-cols-[0.95fr_1.25fr]"
          >
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${featuredPost.accent}`}
                style={{ backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.18), rgba(127, 29, 29, 0.25)), url(${featuredPost.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>
            <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:-ml-16 lg:self-center lg:bg-white">
              <div className="absolute left-0 top-14 hidden h-12 w-1 bg-red-600 lg:block" />
              <p className="text-sm font-bold text-slate-500">{featuredPost.category} | {featuredPost.readTime}</p>
              <h2 className="mt-6 text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl">
                {featuredPost.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                {featuredPost.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-slate-950 transition-transform group-hover:translate-x-1">
                Read More
                <span>{'>'}</span>
              </span>
            </div>
          </Link>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">Explore</p>
              <h2 className="mt-4 text-2xl font-black text-slate-900">Looking for a strategy partner?</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Browse our services or speak with the team about SEO, paid media, web design, and content growth.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/services" className="rounded-2xl bg-slate-950 px-5 py-4 text-center text-sm font-extrabold text-white transition-colors hover:bg-red-700">
                  View Services
                </Link>
                <Link href="/contact" className="rounded-2xl border border-slate-200 px-5 py-4 text-center text-sm font-extrabold text-slate-900 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-700">
                  Contact Our Team
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-red-900 via-red-700 to-orange-500 p-8 text-white shadow-[0_25px_60px_rgba(127,29,29,0.35)]">
              <p className="text-4xl font-black">Sign Up</p>
              <p className="mt-4 max-w-sm text-lg leading-7 text-white/90">
                Keep up to date with our weekly digest of growth strategy, SEO, content, and creative insights.
              </p>
              <div className="mt-8 flex overflow-hidden rounded-2xl bg-white">
                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full px-5 py-4 text-slate-700 outline-none"
                  readOnly
                />
                <div className="grid w-16 place-items-center bg-red-950 text-xl font-black">
                  {'>'}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {otherPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${post.accent} transition-transform duration-500 group-hover:scale-105`}
                style={{ backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.15), rgba(15, 23, 42, 0.78)), url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8">
                <p className="text-sm font-bold text-white/70">{post.category} | {post.readTime}</p>
                <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight text-white">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-white transition-transform group-hover:translate-x-1">
                  Read More
                  <span>{'>'}</span>
                </span>
              </div>
              <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                0{index + 2}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
