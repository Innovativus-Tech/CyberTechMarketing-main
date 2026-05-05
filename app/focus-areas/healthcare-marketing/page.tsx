import Link from 'next/link';
import Image from 'next/image';

export default function HealthcareMarketingPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1631217b2af7-6460daae6e1b?q=80&w=2070&auto=format&fit=crop" alt="Healthcare" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">Healthcare Marketing</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Patient acquisition and reputation management for healthcare providers</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1470&auto=format&fit=crop" alt="Healthcare Marketing" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Attract More Patients</h2>
            <p className="text-lg text-slate-600 mb-4">Healthcare providers need compliant, trusted marketing strategies that connect with patients and build reputation. We specialize in HIPAA-compliant healthcare marketing that drives patient acquisition and retention.</p>
            <p className="text-lg text-slate-600 mb-6">From online reputation management to patient education content, we help healthcare organizations build trust and grow their patient base.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>HIPAA Compliant:</strong> Full regulatory compliance</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Reputation Management:</strong> Build trust and reviews</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Patient Education:</strong> Trusted content strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Healthcare Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Local SEO for Healthcare',
              'Reputation Management',
              'Patient Review Strategy',
              'Healthcare Content Marketing',
              'Medical Advertising',
              'Patient Retention Programs'
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Patient Acquisition Strategy</h2>
        <div className="space-y-8">
          {[
            { num: "01", title: "Local Visibility", desc: "Optimize for patient searches in your service area" },
            { num: "02", title: "Trust Building", desc: "Manage reputation through reviews and testimonials" },
            { num: "03", title: "Patient Education", desc: "Create authoritative content that answers patient questions" },
            { num: "04", title: "Retention Programs", desc: "Keep patients engaged and informed" }
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
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Patient Base?</h2>
          <p className="text-xl text-red-100 mb-8">Let's develop a healthcare marketing strategy that attracts new patients</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Consult Our Healthcare Experts</Link>
        </div>
      </section>
    </main>
  );
}
