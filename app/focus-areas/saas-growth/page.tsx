import Link from 'next/link';
import Image from 'next/image';

export default function SaaSGrowthPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1516534775068-bb4765c62cc6?q=80&w=2070&auto=format&fit=crop" alt="SaaS Growth" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">SaaS Growth Marketing</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Accelerate user acquisition, reduce churn, and build sustainable SaaS growth</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop" alt="SaaS Metrics" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Scale Your SaaS Business</h2>
            <p className="text-lg text-slate-600 mb-4">SaaS companies face unique marketing challenges: high customer acquisition costs, subscription retention, and competitive landscapes. We specialize in growth-focused marketing strategies that drive recurring revenue and scalable customer bases.</p>
            <p className="text-lg text-slate-600 mb-6">Our approach combines demand generation, product-led growth, and customer retention strategies to maximize your SaaS metrics and profitability.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Trial-to-Paid Conversion:</strong> Optimize free trial to paid upgrades</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Churn Reduction:</strong> Strategies to retain and expand accounts</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Expansion Revenue:</strong> Grow revenue from existing customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">SaaS Growth Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Demand Generation',
              'Free Trial Optimization',
              'Customer Onboarding',
              'Retention Programs',
              'Upsell & Expansion',
              'Analytics & Metrics'
            ].map((strategy, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900">{strategy}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Our SaaS Marketing Process</h2>
        <div className="space-y-8">
          {[
            { num: "01", title: "Analyze SaaS Metrics", desc: "Review CAC, LTV, churn rate, and identify growth opportunities" },
            { num: "02", title: "Define Growth Channels", desc: "Identify best channels for your target customers" },
            { num: "03", title: "Optimize Funnel", desc: "Improve conversion at each stage from awareness to retention" },
            { num: "04", title: "Scale & Expand", desc: "Grow revenue through acquisition and expansion" }
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
          <h2 className="text-4xl font-bold mb-12 text-center">SaaS Growth Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { metric: "150%", desc: "Average CAC ROI Improvement" },
              { metric: "40%", desc: "Churn Rate Reduction" },
              { metric: "2.5x", desc: "Annual Revenue Growth" }
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
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your SaaS Business?</h2>
          <p className="text-xl text-red-100 mb-8">Let's develop a growth strategy that drives recurring revenue</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Schedule SaaS Consultation</Link>
        </div>
      </section>
    </main>
  );
}
