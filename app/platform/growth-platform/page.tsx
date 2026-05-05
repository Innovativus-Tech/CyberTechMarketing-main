import Link from 'next/link';
import Image from 'next/image';

export default function GrowthPlatformPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop" alt="Growth Platform" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">CyberTech Growth Platform</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Integrated strategy across SEO, content, paid media, and conversion optimization</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop" alt="Platform Overview" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Unified Growth Strategy</h2>
            <p className="text-lg text-slate-600 mb-4">Our Growth Platform brings together all elements of digital marketing into one coordinated system. Rather than managing disconnected campaigns, we integrate SEO, content marketing, paid advertising, and conversion optimization into a unified strategy that multiplies results.</p>
            <p className="text-lg text-slate-600 mb-6">By aligning all channels around your business objectives, we create a marketing engine that consistently drives growth, builds brand authority, and maximizes ROI.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Integrated Strategy:</strong> All channels working together</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Data-Driven:</strong> Every decision backed by analytics</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Scalable:</strong> Grows with your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Platform Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Visibility Engine",
                desc: "SEO and organic visibility that builds sustainable traffic"
              },
              {
                title: "Demand Generation",
                desc: "Paid advertising that reaches customers when they're searching"
              },
              {
                title: "Authority Building",
                desc: "Content strategy that establishes expertise and trust"
              },
              {
                title: "Conversion Optimization",
                desc: "Convert more visitors into customers and leads"
              },
              {
                title: "Customer Intelligence",
                desc: "Analytics and insights that drive decisions"
              },
              {
                title: "Growth Acceleration",
                desc: "Expansion strategies that scale profitable channels"
              }
            ].map((component, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{component.title}</h3>
                <p className="text-slate-600">{component.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">How the Platform Works</h2>
        <div className="space-y-8">
          {[
            {
              num: "01",
              title: "Foundation: SEO & Content",
              desc: "Build long-term visibility and authority through organic search and valuable content that ranks"
            },
            {
              num: "02",
              title: "Acceleration: Paid Channels",
              desc: "Complement organic efforts with targeted paid advertising to capture ready-to-buy prospects"
            },
            {
              num: "03",
              title: "Optimization: Conversion",
              desc: "Convert more visitors into customers with strategic optimization and user experience improvements"
            },
            {
              num: "04",
              title: "Intelligence: Analytics",
              desc: "Gain deep insights into performance and identify opportunities for growth"
            },
            {
              num: "05",
              title: "Scale: Expansion",
              desc: "Scale proven channels and test new opportunities to accelerate growth"
            }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-700 text-white font-bold text-2xl flex-shrink-0">{step.num}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Platform Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { metric: "300%", label: "Average Traffic Growth" },
              { metric: "2.5x", label: "Conversion Rate Increase" },
              { metric: "45%", label: "ROI Improvement" },
              { metric: "60%", label: "Customer Retention" }
            ].map((item, idx) => (
              <div key={idx} className="bg-red-700/20 border border-red-700/50 rounded-xl p-8">
                <p className="text-5xl font-bold text-red-400 mb-2">{item.metric}</p>
                <p className="text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Implement Your Growth Platform?</h2>
          <p className="text-xl text-red-100 mb-8">Let's build an integrated marketing system that drives consistent growth</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Start Your Platform</Link>
        </div>
      </section>
    </main>
  );
}
