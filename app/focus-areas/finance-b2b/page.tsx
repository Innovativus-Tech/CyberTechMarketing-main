import Link from 'next/link';
import Image from 'next/image';

export default function FinanceB2BPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="B2B Finance" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">Finance & B2B Marketing</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Drive high-value B2B leads and build financial authority</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">B2B Demand Generation</h2>
            <p className="text-lg text-slate-600 mb-4">Finance and B2B companies need sophisticated marketing strategies that generate qualified leads and build thought leadership. We develop comprehensive B2B marketing programs that drive pipeline growth.</p>
            <p className="text-lg text-slate-600 mb-6">From content marketing and LinkedIn strategy to account-based marketing, we help B2B and financial services companies accelerate growth.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Lead Generation:</strong> High-value B2B prospects</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Thought Leadership:</strong> Build industry authority</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Account-Based Marketing:</strong> Target key accounts</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1470&auto=format&fit=crop" alt="B2B Growth" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">B2B Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Account-Based Marketing',
              'LinkedIn Strategy',
              'Thought Leadership Content',
              'Webinar Marketing',
              'Sales Enablement',
              'Lead Scoring & Nurturing'
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">B2B Growth Strategy</h2>
        <div className="space-y-8">
          {[
            { num: "01", title: "Market Positioning", desc: "Establish your authority in the B2B market" },
            { num: "02", title: "Demand Generation", desc: "Create high-quality leads through multiple channels" },
            { num: "03", title: "Lead Nurturing", desc: "Guide prospects through the buyer journey" },
            { num: "04", title: "Sales Enablement", desc: "Provide sales team with the tools to close deals" }
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
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your B2B Pipeline?</h2>
          <p className="text-xl text-red-100 mb-8">Let's develop a B2B marketing strategy that drives results</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Get B2B Strategy</Link>
        </div>
      </section>
    </main>
  );
}
