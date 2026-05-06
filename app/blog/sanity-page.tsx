import { getAllBlogPosts } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="pt-16 pb-16 bg-white min-h-screen">
      <section className="page-top-red-gradient relative overflow-hidden pt-16 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 pt-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200/30 bg-white/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-red-300 animate-pulse"></span>
            <span className="text-sm font-bold text-red-50 tracking-wide uppercase">Our Blog</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Latest Insights</h1>
          <p className="text-xl text-red-50/85 max-w-3xl mx-auto font-medium">
            Stay updated with the latest digital marketing trends and strategies
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer h-full">
                  {post.image && (
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${post.accent || 'from-red-950 via-red-800 to-rose-500'}`}
                      ></div>
                      <Image
                        src={urlFor(post.image).url()}
                        alt={post.title}
                        fill
                        className="object-cover opacity-50"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.readTime}</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
