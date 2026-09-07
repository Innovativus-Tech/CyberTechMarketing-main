import { getAllPosts } from '@/lib/blog';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { User, Calendar, MessageSquare, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Cybertech Marketing',
  description: 'Insights on AI marketing, content strategy, conversion design, and performance growth.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Page Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h4 className="text-sm font-bold tracking-widest text-[#101828] uppercase">OUR ARTICLES</h4>
              <div className="w-12 h-[2px] bg-[#E6332A] rounded flex items-center justify-end relative">
                <div className="w-2 h-2 rounded-full bg-[#E6332A] absolute -right-1" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#101828] mb-6">
              Latest <span className="text-[#E6332A]">Articles</span>
            </h1>
            <p className="text-xl text-[#475467] max-w-2xl mx-auto">
              Insights on AI marketing, content systems, conversion design, and performance growth that actually ships.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid of Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any, idx: number) => (
              <Reveal key={post.slug?.current || idx} direction="up" delay={idx * 0.1}>
                <Link href={`/blog/${post.slug?.current}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="relative h-[240px] w-full overflow-hidden">
                    <Image 
                      src={post.image ? (typeof post.image === 'string' ? post.image : urlFor(post.image).url()) : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'} 
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#E6332A] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                        {post.category || 'Tech'}
                      </span>
                    </div>
                    {/* Decorative circle with arrow on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-[#E6332A] flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                        <ArrowUpRight size={24} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h2 className="text-xl md:text-[22px] font-bold text-[#101828] leading-tight mb-4 group-hover:text-[#E6332A] transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-[#475467] text-base leading-relaxed mb-8 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4 text-sm font-medium text-[#475467]">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-[#101828]" />
                        <span>By admin</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#101828]" />
                        <span>{new Date(post.date || Date.now()).toLocaleDateString('en-GB')}</span>
                      </div>
                      <div className="flex items-center gap-2 hidden lg:flex">
                        <MessageSquare size={16} className="text-[#101828]" />
                        <span>0</span>
                      </div>
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
