import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const servicesList = [
  {
    title: 'Digital Marketing & Growth',
    slug: 'digital-marketing-growth',
    bgColor: 'bg-[#1653FF]',
    textColor: 'text-white',
    pillBg: 'bg-white/20 hover:bg-white/30',
    tags: ['Consultation', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Web Development',
    slug: 'web-development',
    bgColor: 'bg-[#F27A21]',
    textColor: 'text-white',
    pillBg: 'bg-white/20 hover:bg-white/30',
    tags: ['Management', 'Transfer'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Software Development',
    slug: 'software-development',
    bgColor: 'bg-[#F8A836]',
    textColor: 'text-white',
    pillBg: 'bg-white/20 hover:bg-white/30',
    tags: ['Strategy', 'Transfer'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'AI & Intelligent Solutions',
    slug: 'ai-intelligent-solutions',
    bgColor: 'bg-[#FC4B86]',
    textColor: 'text-white',
    pillBg: 'bg-white/20 hover:bg-white/30',
    tags: ['Consultation', 'Solution'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Machine Learning & Data',
    slug: 'machine-learning-data',
    bgColor: 'bg-[#0B153C]',
    textColor: 'text-white',
    pillBg: 'bg-white/20 hover:bg-white/30',
    tags: ['Data', 'Solution'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    bgColor: 'bg-[#18B092]',
    textColor: 'text-white',
    pillBg: 'bg-white/20 hover:bg-white/30',
    tags: ['Mobile App', 'Solution'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop'
  }
];

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Dark Banner */}
      <div className="bg-[#020B2D] py-12 md:py-20 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Subtle grid/line pattern background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `linear-gradient(#1653FF 1px, transparent 1px), linear-gradient(90deg, #1653FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FC4B86] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-lg">
            Our Main Services 🤝
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">Our Services</h1>
        </div>
      </div>

      {/* Hero Content Section */}
      <section className="bg-[#F0F6FF] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="inline-flex items-center gap-2 bg-[#FC4B86] text-white px-3 py-1 rounded text-sm font-semibold mb-6">
                We Are IT Guidance 😃
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101828] leading-[1.1] mb-6">
                Tailored IT Solutions for Your Success
              </h2>
              <p className="text-[#475467] text-lg leading-relaxed mb-8 max-w-xl">
                We understand that every business is unique, with its own set of challenges, goals, and aspirations. That's why we offer tailored IT solutions designed to fit exactly what you need to grow and scale efficiently.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1653FF] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">
                TALK TO AN EXPERT <ArrowUpRight size={20} />
              </Link>
            </Reveal>
            <Reveal direction="right" className="relative flex justify-center lg:justify-end">
              {/* 3D Illustration Placeholder - typically an img tag here */}
              <div className="relative w-full max-w-md aspect-[4/3]">
                <Image 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" 
                  alt="IT Solutions 3D Illustration" 
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl md:text-[44px] font-extrabold text-[#101828]">Featured Services</h2>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            {/* Row 1: 2 Columns */}
            <div className="grid md:grid-cols-2 gap-6">
              {servicesList.slice(0, 2).map((svc, idx) => (
                <Reveal key={svc.slug} direction="up" delay={idx * 0.1}>
                  <Link href={`/services/${svc.slug}`} className={`group block relative overflow-hidden rounded-[32px] h-[380px] md:h-[440px] ${svc.bgColor} ${svc.textColor} p-8 md:p-12 flex flex-col justify-end transition-transform hover:-translate-y-2 hover:shadow-2xl`}>
                    {/* Background abstract graphic/image */}
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-110">
                      <Image src={svc.image} alt="" fill className="object-cover" />
                    </div>
                    
                    <div className="relative z-10 mt-auto">
                      <h3 className="text-[32px] md:text-[40px] font-bold leading-tight mb-8 w-4/5">
                        {svc.title}
                      </h3>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="w-14 h-14 rounded-full bg-white text-[#101828] flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:-rotate-12">
                          <ArrowUpRight size={28} strokeWidth={2.5} />
                        </div>
                        <div className="flex gap-3">
                          {svc.tags.map(tag => (
                            <span key={tag} className={`px-4 py-2 rounded-md border border-white/30 text-sm font-medium ${svc.pillBg} backdrop-blur-sm transition-colors`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            {/* Row 2: 3 Columns */}
            <div className="grid md:grid-cols-3 gap-6">
              {servicesList.slice(2, 5).map((svc, idx) => (
                <Reveal key={svc.slug} direction="up" delay={idx * 0.1}>
                  <Link href={`/services/${svc.slug}`} className={`group block relative overflow-hidden rounded-[32px] h-[400px] ${svc.bgColor} ${svc.textColor} p-8 flex flex-col justify-end transition-transform hover:-translate-y-2 hover:shadow-2xl`}>
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-110">
                      <Image src={svc.image} alt="" fill className="object-cover" />
                    </div>
                    
                    <div className="relative z-10 mt-auto">
                      <h3 className="text-[28px] font-bold leading-tight mb-8">
                        {svc.title}
                      </h3>
                      <div className="flex items-center justify-between flex-wrap gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-white text-[#101828] flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:-rotate-12 flex-shrink-0">
                          <ArrowUpRight size={24} strokeWidth={2.5} />
                        </div>
                        <div className="flex gap-2 flex-wrap justify-end">
                          {svc.tags.map(tag => (
                            <span key={tag} className={`px-3 py-1.5 rounded-md border border-white/30 text-[13px] font-medium ${svc.pillBg} backdrop-blur-sm transition-colors`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            
            {/* Row 3: 1 Column for the remaining service */}
            <div className="grid md:grid-cols-1 gap-6">
              {servicesList.slice(5).map((svc, idx) => (
                <Reveal key={svc.slug} direction="up" delay={idx * 0.1}>
                  <Link href={`/services/${svc.slug}`} className={`group block relative overflow-hidden rounded-[32px] h-[340px] ${svc.bgColor} ${svc.textColor} p-8 md:p-12 flex flex-col justify-end transition-transform hover:-translate-y-2 hover:shadow-2xl`}>
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-110">
                      <Image src={svc.image} alt="" fill className="object-cover" />
                    </div>
                    
                    <div className="relative z-10 mt-auto">
                      <h3 className="text-[32px] md:text-[40px] font-bold leading-tight mb-8 w-4/5">
                        {svc.title}
                      </h3>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="w-14 h-14 rounded-full bg-white text-[#101828] flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:-rotate-12">
                          <ArrowUpRight size={28} strokeWidth={2.5} />
                        </div>
                        <div className="flex gap-3">
                          {svc.tags.map(tag => (
                            <span key={tag} className={`px-4 py-2 rounded-md border border-white/30 text-sm font-medium ${svc.pillBg} backdrop-blur-sm transition-colors`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
