import Link from 'next/link';
import Image from 'next/image';

export default function MachineLearningDataPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="Machine Learning & Data" 
            fill 
            sizes="100vw"
            className="object-cover opacity-40" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Machine Learning & Data
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Unlock the power of your data with advanced machine learning models and predictive analytics.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Machine Learning & Data?</h2>
            <p className="text-lg text-slate-600 mb-6">
              Our Machine Learning & Data services are designed to give you a competitive edge in today's fast-paced digital landscape. We focus on delivering high-quality, scalable solutions tailored to your unique requirements.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Expert Team:</strong> Dedicated professionals with years of experience.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Custom Solutions:</strong> Strategies and architectures built specifically for you.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Ongoing Support:</strong> We stand by our work with continuous optimization and support.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Machine Learning & Data Analytics"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Core Capabilities</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We provide a comprehensive suite of services to ensure your success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Data Mining",
              "Predictive Modeling",
              "Computer Vision",
              "Deep Learning"
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-red-700 font-bold text-lg">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's build something amazing together.
          </p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
