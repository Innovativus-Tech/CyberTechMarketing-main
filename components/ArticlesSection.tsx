"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { User, Calendar, MessageSquare, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Unlocking New Possibilities with Advanced Cloud Computing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    author: "admin",
    date: "06/08/2024",
    comments: 0,
    slug: "/blog/unlocking-new-possibilities"
  },
  {
    id: 2,
    title: "Insider Perspectives on IT Solutions with Cybertech",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    author: "admin",
    date: "06/08/2024",
    comments: 0,
    slug: "/blog/insider-perspectives"
  },
  {
    id: 3,
    title: "Harnessing the Power of AI and Machine Learning",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    author: "admin",
    date: "06/08/2024",
    comments: 0,
    slug: "/blog/harnessing-ai"
  }
];

export default function ArticlesSection() {
  return (
    <section className="py-24 bg-white" id="articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h4 className="text-sm font-bold tracking-widest text-[#101828] uppercase">OUR ARTICLES</h4>
            <div className="w-12 h-[2px] bg-[#E6332A] rounded flex items-center justify-end relative">
              <div className="w-2 h-2 rounded-full bg-[#E6332A] absolute -right-1" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#101828] mb-16 text-center">
            Latest <span className="text-[#E6332A]">Articles</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <Reveal key={article.id} direction="up" delay={idx * 0.1}>
              <Link href={article.slug} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Decorative circle with arrow on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#E6332A] flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ArrowUpRight size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-[22px] font-bold text-[#101828] leading-tight mb-6 group-hover:text-[#E6332A] transition-colors">
                    {article.title}
                  </h3>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4 text-sm font-medium text-[#475467]">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-[#101828]" />
                      <span>By {article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#101828]" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} className="text-[#101828]" />
                      <span>{article.comments}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
