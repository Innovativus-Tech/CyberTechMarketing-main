import Link from 'next/link';
import Image from 'next/image';

export default function EcommerceBrandsPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1556740722-a3fc46c48ae1?q=80&w=2070&auto=format&fit=crop" alt="E-commerce" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">E-commerce Brand Marketing</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Build brand authority and scale your online retail business to new heights</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Accelerate Online Sales</h2>
            <p className="text-lg text-slate-600 mb-4">E-commerce brands need more than just a store—they need a comprehensive marketing strategy that drives traffic, builds brand loyalty, and maximizes customer lifetime value. We specialize in helping online retailers grow profitably.</p>
            <p className="text-lg text-slate-600 mb-6">From product marketing and social commerce to influencer partnerships and retention strategies, we create integrated campaigns that drive consistent revenue growth.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Product Marketing:</strong> Showcase products that convert</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Social Commerce:</strong> Sell through social platforms</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Brand Building:</strong> Create customer loyalty</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop" alt="E-commerce Growth" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">E-commerce Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Product Photography & Listings',
              'Social Commerce Strategy',
              'Influencer Partnerships',
              'Email & SMS Marketing',
              'Retention & Loyalty Programs',
              'Performance Analytics'
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Growth Strategy for Retailers</h2>
        <div className="space-y-8">
          {[
            { num: "01", title: "Market Analysis", desc: "Understand your competition and market opportunities" },
            { num: "02", title: "Multi-Channel Strategy", desc: "Sell across website, social, and marketplaces" },
            { num: "03", title: "Customer Acquisition", desc: "Drive quality traffic and conversions" },
            { num: "04", title: "Retention & Growth", desc: "Build repeat customers and increase order value" }
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

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">E-commerce Results We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { metric: "250%", desc: "Average Revenue Growth" },
              { metric: "3.5x", desc: "Customer Lifetime Value Increase" },
              { metric: "60%", desc: "Repeat Customer Rate" }
            ].map((item, idx) => (
              <div key={idx} className="bg-red-700/20 border border-red-700/50 rounded-xl p-8">
                <p className="text-5xl font-bold text-red-400 mb-2">{item.metric}</p>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Store?</h2>
          <p className="text-xl text-red-100 mb-8">Let's build a marketing strategy that drives sustainable growth</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Get E-commerce Strategy</Link>
        </div>
      </section>
    </main>
  );
}
