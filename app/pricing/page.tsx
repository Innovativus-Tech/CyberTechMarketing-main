import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for small businesses looking to establish a digital presence.",
      price: "$999",
      period: "/month",
      features: ["Basic SEO Optimization", "Social Media Management (2 platforms)", "Monthly Analytics Report", "Email Support", "1 Content Piece / week"],
      popular: false
    },
    {
      name: "Professional",
      desc: "Advanced AI-driven strategies for growing enterprises.",
      price: "$2,499",
      period: "/month",
      features: ["Advanced SEO & Link Building", "Full Social Media Coverage", "Weekly Strategy Calls", "Priority Support 24/7", "PPC Campaign Management", "4 Content Pieces / week"],
      popular: true
    },
    {
      name: "Enterprise",
      desc: "Full-scale autonomous marketing for industry leaders.",
      price: "Custom",
      period: "",
      features: ["Dedicated Account Manager", "Custom AI Marketing Models", "Omnichannel Ad Campaigns", "Real-time Reporting Dashboard", "Unlimited Content Creation", "On-site Strategy Sessions"],
      popular: false
    }
  ];

  return (
    <main className="pt-20 pb-32 bg-gray-50 min-h-screen">
      <section className="page-top-red-gradient relative overflow-hidden pt-16 pb-20 mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-red-50/85 max-w-3xl mx-auto font-medium">
              Choose the perfect plan to accelerate your growth. No hidden fees. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-8 rounded-3xl bg-white border ${plan.popular ? 'border-[var(--color-brand-primary)] shadow-2xl md:scale-[1.02] lg:scale-105 z-10' : 'border-gray-200 shadow-md'} flex flex-col`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-brand-primary)] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">{plan.desc}</p>
              
              <div className="mb-8 border-b border-gray-100 pb-8">
                <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                <span className="text-gray-500 font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-brand-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    <span className="text-gray-700 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact" className={`w-full py-4 rounded-xl text-center font-bold transition-colors ${plan.popular ? 'bg-[var(--color-brand-primary)] hover:bg-red-700 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
