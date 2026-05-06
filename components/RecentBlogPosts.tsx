import { getRecentBlogPosts } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default async function RecentBlogPosts() {
  const posts = await getRecentBlogPosts(3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover insights, strategies, and trends shaping the digital marketing landscape
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  {post.image && (
                    <div className="relative h-40 overflow-hidden bg-gray-200">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${post.accent || 'from-red-950 via-red-800 to-rose-500'}`}
                      ></div>
                      <Image
                        src={urlFor(post.image).url()}
                        alt={post.title}
                        fill
                        className="object-cover opacity-40"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <span className="text-xs font-bold text-red-600 uppercase">{post.category}</span>
                    <h3 className="text-lg font-bold mt-2 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                      <span>{post.readTime}</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
            <div className="col-span-3 text-center py-8">
              <p className="text-gray-600">No blog posts available yet</p>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
          >
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
