import Link from 'next/link';
import Image from 'next/image';

export default function D2CPerformancePage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" alt="D2C Performance" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">D2C Performance Marketing</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Maximize revenue from direct-to-consumer channels and build brand loyalty</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Direct-to-Consumer Excellence</h2>
            <p className="text-lg text-slate-600 mb-4">Direct-to-consumer brands have the unique advantage of owning the customer relationship. We help D2C brands maximize profitability through integrated performance marketing strategies that drive repeat customers and sustainable growth.</p>
            <p className="text-lg text-slate-600 mb-6">From paid acquisition to retention marketing, we optimize every channel to drive efficient growth and build a loyal customer base.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Efficient Acquisition:</strong> Low CAC, high-quality customers</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Retention Focus:</strong> Build repeat customers</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Brand Building:</strong> Create customer loyalty</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1470&auto=format&fit=crop" alt="D2C Success" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">D2C Performance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Paid Advertising (PPC, Social)',
              'Conversion Rate Optimization',
              'Email & SMS Marketing',
              'Content Marketing & SEO',
              'Influencer Partnerships',
              'Customer Lifetime Value Optimization'
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">D2C Growth Framework</h2>
        <div className="space-y-8">
          {[
            { num: "01", title: "Channel Optimization", desc: "Identify and optimize best performing acquisition channels" },
            { num: "02", title: "Unit Economics", desc: "Ensure profitable customer acquisition and retention" },
            { num: "03", title: "Customer Journey", desc: "Optimize experience from discovery to loyal advocate" },
            { num: "04", title: "Scale & Profitability", desc: "Grow revenue while maintaining healthy margins" }
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
          <h2 className="text-4xl font-bold mb-12 text-center">D2C Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { metric: "3.0x", desc: "Average Customer LTV:CAC Ratio" },
              { metric: "35%", desc: "Repeat Customer Rate" },
              { metric: "250%", desc: "Year-over-Year Growth" }
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
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your D2C Business?</h2>
          <p className="text-xl text-red-100 mb-8">Let's develop a performance marketing strategy that drives profitable growth</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Get D2C Strategy</Link>
        </div>
      </section>
    </main>
  );
}
