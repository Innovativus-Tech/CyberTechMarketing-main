import Link from 'next/link';
import Image from 'next/image';

export default function ServiceStackPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1553117319-21588aa8dbb5?q=80&w=2070&auto=format&fit=crop" alt="Service Stack" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">Our Service Stack</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Explore the comprehensive digital marketing, design, and web capabilities behind our growth platform</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop" alt="Services" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Complete Service Portfolio</h2>
            <p className="text-lg text-slate-600 mb-4">Behind our growth platform is a comprehensive stack of digital marketing, design, and development services. This integrated approach means we can seamlessly connect every element of your marketing strategy.</p>
            <p className="text-lg text-slate-600 mb-6">From strategy and creative to execution and optimization, we handle all aspects of your digital presence under one roof, ensuring consistency and effectiveness.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Full-Service Capability:</strong> Everything from strategy to execution</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Integrated Approach:</strong> All teams working as one</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Accountability:</strong> One partner, unified results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Complete Offering</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Strategy & Consulting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Marketing Strategy',
                'Competitive Analysis',
                'Market Research',
                'Growth Planning',
                'Performance Audit',
                'Roadmap Development'
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-red-100 rounded-xl p-6">
                  <p className="text-lg font-bold text-slate-900">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Digital Marketing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'SEO & Organic Search',
                'Pay-Per-Click Advertising',
                'Social Media Marketing',
                'Email Marketing',
                'Content Marketing',
                'Marketing Analytics'
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-red-100 rounded-xl p-6">
                  <p className="text-lg font-bold text-slate-900">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Design & Creative</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Brand Identity',
                'Logo & Branding',
                'Graphic Design',
                'Social Media Design',
                'Marketing Collateral',
                'Video Production'
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-red-100 rounded-xl p-6">
                  <p className="text-lg font-bold text-slate-900">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Web & Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Web Design & Development',
                'E-commerce Solutions',
                'CMS Implementation',
                'Mobile Development',
                'Web Performance',
                'Security & Compliance'
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-red-100 rounded-xl p-6">
                  <p className="text-lg font-bold text-slate-900">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Integrated Delivery Model</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Rather than managing multiple vendors, work with one partner that has deep expertise across all disciplines
        </p>
        
        <div className="space-y-8">
          {[
            {
              num: "01",
              title: "Strategy Foundation",
              desc: "Develop a comprehensive strategy that aligns all services toward your business goals"
            },
            {
              num: "02",
              title: "Integrated Planning",
              desc: "Plan creative, marketing, and technical elements as one cohesive system"
            },
            {
              num: "03",
              title: "Unified Execution",
              desc: "Execute all services with perfect alignment and consistency"
            },
            {
              num: "04",
              title: "Collaborative Optimization",
              desc: "All teams work together to continuously improve results"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-700 text-white font-bold text-2xl flex-shrink-0">{item.num}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Integrated Marketing Excellence?</h2>
          <p className="text-xl text-red-100 mb-8">Let's leverage our complete service stack for your success</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Explore Our Services</Link>
        </div>
      </section>
    </main>
  );
}
