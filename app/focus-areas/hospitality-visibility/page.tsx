import Link from 'next/link';
import Image from 'next/image';

export default function HospitalityVisibilityPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Hospitality" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">Hospitality Marketing</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Increase bookings and build your hospitality brand's reputation</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop" alt="Hospitality Growth" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Fill Your Rooms & Seats</h2>
            <p className="text-lg text-slate-600 mb-4">Hotels, restaurants, and hospitality businesses need visible online presence and positive reviews to attract guests. We develop comprehensive hospitality marketing strategies that increase bookings and drive occupancy.</p>
            <p className="text-lg text-slate-600 mb-6">From local SEO and review management to social media marketing and OTA optimization, we help hospitality businesses get discovered and build loyal guests.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Booking Optimization:</strong> Increase direct bookings</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Review Management:</strong> Build positive reputation</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Guest Loyalty:</strong> Build repeat business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Hospitality Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Local SEO for Hospitality',
              'Review Management & Reputation',
              'OTA Optimization (Booking.com, Airbnb)',
              'Social Media Management',
              'Email Marketing & Guest Loyalty',
              'Google Business Profile Optimization'
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Booking Growth Strategy</h2>
        <div className="space-y-8">
          {[
            { num: "01", title: "Visibility Optimization", desc: "Get discovered by travelers searching for accommodations" },
            { num: "02", title: "Reputation Building", desc: "Generate positive reviews and manage online reputation" },
            { num: "03", title: "Booking Optimization", desc: "Streamline path to booking on all channels" },
            { num: "04", title: "Guest Retention", desc: "Build loyalty programs and repeat bookings" }
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
          <h2 className="text-4xl font-bold mb-6">Ready to Increase Bookings?</h2>
          <p className="text-xl text-red-100 mb-8">Let's develop a hospitality marketing strategy that fills your rooms</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Get Hospitality Marketing Plan</Link>
        </div>
      </section>
    </main>
  );
}
