import Link from 'next/link';
import Image from 'next/image';

export default function GraphicDesignPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop" alt="Graphic Design" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">Creative Graphic Design</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Stunning visuals that capture attention and communicate your brand message</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1470&auto=format&fit=crop" alt="Design Work" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Visual Identity That Stands Out</h2>
            <p className="text-lg text-slate-600 mb-4">Great design is more than just aesthetics—it's strategic communication. Our graphic design services help your brand stand out in a crowded marketplace and create lasting impressions.</p>
            <p className="text-lg text-slate-600 mb-6">We create cohesive visual identities that resonate with your audience and accurately represent your brand values.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Brand Identity:</strong> Logo design and complete brand guidelines</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Visual Consistency:</strong> Unified design across all materials</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Professional Quality:</strong> Print and digital ready designs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Logo & Branding', 'Marketing Collateral', 'Social Media Graphics', 'Print Design', 'Packaging Design', 'Digital Illustrations'].map((service, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl font-bold text-slate-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Process</h2>
        <div className="space-y-8">
          {[
            { num: "01", title: "Discovery", desc: "Understanding your brand, target audience, and design goals" },
            { num: "02", title: "Conceptualization", desc: "Creating multiple design concepts and initial sketches" },
            { num: "03", title: "Refinement", desc: "Developing the best concept with your feedback and revisions" },
            { num: "04", title: "Finalization", desc: "Delivering print-ready and digital files in all required formats" }
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

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-red-100 mb-8">Let's create stunning visuals that tell your brand story</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Get Your Design Quote</Link>
        </div>
      </section>
    </main>
  );
}
