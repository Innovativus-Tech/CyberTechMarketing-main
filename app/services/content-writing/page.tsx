import Link from 'next/link';
import Image from 'next/image';

export default function ContentWritingPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1470386620122-44617dba30a4?q=80&w=2070&auto=format&fit=crop" alt="Content Writing" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">Professional Content Writing</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Engaging content that educates, converts, and builds authority in your industry</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Content That Drives Results</h2>
            <p className="text-lg text-slate-600 mb-4">Quality content is the foundation of digital marketing success. It builds trust, improves SEO, and guides customers through the buying journey. Our content writers create strategic, engaging content that resonates with your audience and drives business results.</p>
            <p className="text-lg text-slate-600 mb-6">From blog posts and landing pages to email campaigns and whitepapers, we develop content strategies that position your brand as an industry authority.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>SEO Optimized:</strong> Content designed to rank and attract organic traffic</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Conversion Focused:</strong> Strategic CTAs that drive action</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Brand Consistent:</strong> Writing that reflects your voice and values</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop" alt="Content Strategy" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Content Services We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-red-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Website Content</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Homepage & page copy</li>
                <li>• Product descriptions</li>
                <li>• About us & team pages</li>
                <li>• Service/offer pages</li>
              </ul>
            </div>
            <div className="bg-white border border-red-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Marketing Content</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Blog posts & articles</li>
                <li>• Email campaigns</li>
                <li>• Social media content</li>
                <li>• Case studies</li>
              </ul>
            </div>
            <div className="bg-white border border-red-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Lead Generation</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Landing pages</li>
                <li>• Lead magnets & guides</li>
                <li>• Webinar copy</li>
                <li>• Whitepapers & eBooks</li>
              </ul>
            </div>
            <div className="bg-white border border-red-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Industry Specific</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• B2B & enterprise</li>
                <li>• E-commerce & retail</li>
                <li>• SaaS & tech</li>
                <li>• Healthcare & professional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Content Development Process</h2>
        <div className="space-y-8">
          {[
            { num: "01", title: "Research & Strategy", desc: "Research your audience, competitors, and SEO opportunities" },
            { num: "02", title: "Outlining", desc: "Create detailed outlines ensuring comprehensive coverage" },
            { num: "03", title: "Writing", desc: "Draft engaging, high-quality content optimized for conversions" },
            { num: "04", title: "Editing & Optimization", desc: "Polish content and optimize for SEO and readability" },
            { num: "05", title: "Publishing & Promotion", desc: "Format, publish, and promote across channels" }
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Why Content Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { stat: "72%", desc: "of companies are more effective when they align their sales and marketing content" },
              { stat: "80%", desc: "of decision makers prefer getting company information through articles vs ads" },
              { stat: "70%", desc: "of people prefer to learn about companies through content rather than traditional advertising" }
            ].map((item, idx) => (
              <div key={idx} className="bg-red-700/20 border border-red-700/50 rounded-xl p-8">
                <p className="text-4xl font-bold text-red-400 mb-2">{item.stat}</p>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Publish Compelling Content?</h2>
          <p className="text-xl text-red-100 mb-8">Let's create a content strategy that drives traffic and converts readers</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Start Your Content Plan</Link>
        </div>
      </section>
    </main>
  );
}
