import Link from 'next/link';
import Image from 'next/image';

export default function PayPerClickPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1432522715577-64de4b1f07e8?q=80&w=2070&auto=format&fit=crop" alt="PPC Campaign" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">Pay-Per-Click Advertising</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Reach customers actively searching for your products with targeted, high-converting ads</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Instant Visibility, Measurable Results</h2>
            <p className="text-lg text-slate-600 mb-4">PPC advertising puts your ads directly in front of customers when they're actively searching. Unlike organic search, you get immediate visibility and traffic—and you only pay when someone clicks.</p>
            <p className="text-lg text-slate-600 mb-6">Our PPC experts optimize every campaign for maximum ROI, continuously testing and refining to lower costs and increase conversions.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Immediate Results:</strong> Visible traffic within hours</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Precise Targeting:</strong> Reach your ideal customers</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Cost Control:</strong> Set budgets and pay only for clicks</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" alt="PPC Analytics" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">PPC Platforms We Manage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Google Ads", desc: "Search, Display, Shopping, and YouTube advertising" },
              { name: "Meta Ads", desc: "Facebook and Instagram targeted advertising" },
              { name: "LinkedIn Ads", desc: "B2B targeting and professional audience reach" },
              { name: "Microsoft Ads", desc: "Bing and Microsoft properties advertising" }
            ].map((platform, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{platform.name}</h3>
                <p className="text-slate-600">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our PPC Strategy</h2>
        <div className="space-y-8">
          {[
            { num: "01", title: "Keyword Research", desc: "Identify high-intent keywords your customers are searching for" },
            { num: "02", title: "Campaign Setup", desc: "Structure campaigns for maximum organization and control" },
            { num: "03", title: "Ad Creation", desc: "Write compelling ads that encourage clicks and conversions" },
            { num: "04", title: "Bid Management", desc: "Optimize bids to maximize ROI and minimize costs" },
            { num: "05", title: "Continuous Optimization", desc: "A/B test and refine for constantly improving results" }
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
          <h2 className="text-4xl font-bold mb-12 text-center">PPC Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { metric: "3.5x", label: "Average ROAS" },
              { metric: "-35%", label: "Cost Per Click" },
              { metric: "45%", label: "Conversion Increase" },
              { metric: "$2.50", label: "Avg Cost Per Lead" }
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
          <h2 className="text-4xl font-bold mb-6">Start Getting Quality Leads Today</h2>
          <p className="text-xl text-red-100 mb-8">Let's launch a high-performing PPC campaign for your business</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Schedule PPC Audit</Link>
        </div>
      </section>
    </main>
  );
}
