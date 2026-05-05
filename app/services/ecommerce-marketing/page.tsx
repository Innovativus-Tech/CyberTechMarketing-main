import Link from 'next/link';
import Image from 'next/image';

export default function EcommerceMarketingPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1556740722-a3fc46c48ae1?q=80&w=2070&auto=format&fit=crop" alt="E-commerce" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">E-commerce Marketing</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Drive more traffic, improve conversions, and boost your online store revenue</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1470&auto=format&fit=crop" alt="E-commerce Growth" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Increase Online Store Revenue</h2>
            <p className="text-lg text-slate-600 mb-4">E-commerce success requires a comprehensive approach that spans product visibility, conversion optimization, and customer retention. Our e-commerce marketing services are designed to drive consistent growth across all channels.</p>
            <p className="text-lg text-slate-600 mb-6">From SEO and PPC to social commerce and email marketing, we implement integrated strategies that maximize your store's revenue potential.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Product Visibility:</strong> Get your products in front of buyers</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Conversion Optimization:</strong> Increase your store's sales rate</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Customer Retention:</strong> Build repeat customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">E-commerce Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Product SEO & Optimization',
              'Amazon & Marketplace Management',
              'Shopping Ads & Google Merchant',
              'Social Commerce Strategy',
              'Email Marketing & Automation',
              'Conversion Rate Optimization'
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">E-commerce Growth Formula</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">We follow a proven approach to scale e-commerce stores</p>
        <div className="space-y-8">
          {[
            { num: "01", title: "Audit & Analysis", desc: "Analyze your current performance, competitors, and market opportunities" },
            { num: "02", title: "Strategy Development", desc: "Create a comprehensive e-commerce marketing roadmap" },
            { num: "03", title: "Channel Optimization", desc: "Optimize presence across all sales channels" },
            { num: "04", title: "Customer Experience", desc: "Streamline buying process and reduce cart abandonment" },
            { num: "05", title: "Growth & Scale", desc: "Continuously expand reach and revenue" }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-700 text-white font-bold text-2xl flex-shrink-0">{step.num}</div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your E-commerce Store?</h2>
          <p className="text-xl text-red-100 mb-8">Let's develop a strategy to increase your online revenue</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Get E-commerce Strategy</Link>
        </div>
      </section>
    </main>
  );
}
