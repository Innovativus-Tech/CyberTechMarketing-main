"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { User, Calendar, MessageSquare, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The AI Demand Generation Playbook for High-Intent Pipeline Growth",
    image: "/images/ai.webp",
    author: "admin",
    date: "06/08/2024",
    comments: 0,
    slug: "/blog/ai-demand-generation-playbook"
  },
  {
    id: 2,
    title: "Content Operations That Keep Multi-Channel Marketing Consistent",
    image: "/images/collaboration.webp",
    author: "admin",
    date: "06/08/2024",
    comments: 0,
    slug: "/blog/content-ops-for-multi-channel-marketing"
  },
  {
    id: 3,
    title: "Conversion Design Principles That Help Service Brands Win Trust Faster",
    image: "/images/marketing.webp",
    author: "admin",
    date: "06/08/2024",
    comments: 0,
    slug: "/blog/conversion-design-for-service-brands"
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
                  <div className="mt-auto pt-6" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
