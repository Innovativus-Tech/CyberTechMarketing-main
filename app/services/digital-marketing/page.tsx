import Link from 'next/link';
import Image from 'next/image';

export default function DigitalMarketingPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop" 
            alt="Digital Marketing Strategy" 
            fill 
            sizes="100vw"
            className="object-cover opacity-40" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Digital Marketing Excellence
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Transform your online presence with data-driven strategies that deliver measurable results
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">What is Digital Marketing?</h2>
            <p className="text-lg text-slate-600 mb-4">
              Digital marketing encompasses all online efforts to promote your brand, attract qualified leads, and drive conversions. Our comprehensive approach combines SEO, content marketing, paid advertising, social media, and email marketing into a cohesive strategy that maximizes your ROI.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              We don't believe in one-size-fits-all solutions. Every business is unique, and our team develops customized digital marketing strategies tailored to your specific goals, target audience, and competitive landscape.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Data-Driven Approach:</strong> Every decision backed by analytics and performance metrics</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Multi-Channel Strategy:</strong> Coordinated campaigns across all digital touchpoints</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Continuous Optimization:</strong> Real-time adjustments for maximum performance</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
              alt="Digital Marketing Analytics"
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
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Core Digital Marketing Services</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We provide a full spectrum of digital marketing services designed to work together seamlessly
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Search Engine Optimization (SEO)",
                desc: "Improve your organic visibility and rank higher on Google for keywords your customers are searching for"
              },
              {
                title: "Pay-Per-Click Advertising",
                desc: "Reach customers actively searching for your products with targeted, high-converting ad campaigns"
              },
              {
                title: "Content Marketing",
                desc: "Create valuable, engaging content that educates your audience and establishes your authority"
              },
              {
                title: "Social Media Marketing",
                desc: "Build community, increase engagement, and drive traffic through strategic social media campaigns"
              },
              {
                title: "Email Marketing",
                desc: "Nurture leads and convert customers with personalized, targeted email sequences"
              },
              {
                title: "Marketing Analytics",
                desc: "Track, measure, and optimize every aspect of your digital marketing with comprehensive reporting"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-red-700 font-bold text-lg">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Our Proven Process</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          We follow a systematic approach to ensure every campaign delivers exceptional results
        </p>
        
        <div className="space-y-8">
          {[
            {
              num: "01",
              title: "Discovery & Strategy",
              desc: "We conduct in-depth research to understand your business, competitors, and target audience. Then we develop a comprehensive digital marketing strategy aligned with your goals."
            },
            {
              num: "02",
              title: "Planning & Setup",
              desc: "We set up all necessary tools, accounts, and infrastructure. From Google Analytics to ad platforms, we ensure proper tracking and integration across all channels."
            },
            {
              num: "03",
              title: "Campaign Execution",
              desc: "Our team launches coordinated campaigns across SEO, PPC, content, social, and email. Each channel is optimized for maximum performance and audience engagement."
            },
            {
              num: "04",
              title: "Monitoring & Optimization",
              desc: "We continuously monitor performance, analyze data, and make strategic adjustments. A/B testing and refinement are ongoing to maximize ROI."
            },
            {
              num: "05",
              title: "Reporting & Growth",
              desc: "Monthly comprehensive reports show exactly what's working. We identify growth opportunities and scale successful tactics to accelerate your business growth."
            }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-700 text-white font-bold text-2xl">
                  {step.num}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Proven Results</h2>
          <p className="text-center text-red-200 mb-12 max-w-2xl mx-auto">
            Our clients consistently see significant improvements in their digital performance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { metric: "300%", label: "Average Traffic Increase" },
              { metric: "150%", label: "Lead Generation Growth" },
              { metric: "45%", label: "Average ROI Improvement" },
              { metric: "2.3x", label: "Conversion Rate Increase" }
            ].map((item, idx) => (
              <div key={idx} className="bg-red-700/20 border border-red-700/50 rounded-xl p-8">
                <p className="text-5xl font-bold text-red-400 mb-2">{item.metric}</p>
                <p className="text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Who Benefits?</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Digital marketing strategies that work across industries
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "E-commerce Businesses",
            "SaaS Companies",
            "Professional Services",
            "Healthcare Providers",
            "Real Estate Agencies",
            "Educational Institutions"
          ].map((useCase, idx) => (
            <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 text-center">
              <p className="text-xl font-bold text-slate-900">{useCase}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Digital Presence?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's develop a digital marketing strategy that drives real results for your business
          </p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">
            Schedule Your Strategy Session
          </Link>
        </div>
      </section>
    </main>
  );
}
