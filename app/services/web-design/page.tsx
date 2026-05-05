import Link from 'next/link';
import Image from 'next/image';

export default function WebDesignPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
            alt="Web Design" 
            fill 
            sizes="100vw"
            className="object-cover opacity-40" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Modern Web Design & Development
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Beautiful, responsive websites that convert visitors into customers
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop"
              alt="Web Design"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Web Design That Converts</h2>
            <p className="text-lg text-slate-600 mb-4">
              Your website is your digital storefront. It's often the first impression potential customers have of your business. We design and develop websites that are not only visually stunning but also strategically optimized for conversions.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              From responsive design that works seamlessly on all devices to intuitive user experiences that guide visitors toward action, we create digital experiences that drive business results.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Responsive Design:</strong> Perfect on mobile, tablet, and desktop</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Performance Optimized:</strong> Lightning-fast loading speeds</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>SEO-Friendly:</strong> Built for search engine visibility</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Conversion Focused:</strong> Strategic CTAs and user flows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Web Design Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Responsive Design",
                desc: "Automatically adapts to any screen size for optimal viewing on all devices"
              },
              {
                title: "Fast Performance",
                desc: "Optimized code and images for lightning-fast loading speeds"
              },
              {
                title: "User Experience",
                desc: "Intuitive navigation and design that guides visitors to take action"
              },
              {
                title: "SEO Optimization",
                desc: "Built with best practices to help you rank higher in search results"
              },
              {
                title: "Content Management",
                desc: "Easy-to-use CMS for managing content without technical knowledge"
              },
              {
                title: "Analytics Integration",
                desc: "Comprehensive tracking to measure website performance and user behavior"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-red-700 font-bold text-lg">✓</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Modern Technology Stack</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          We use the latest technologies to build fast, secure, and scalable websites
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Frontend</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600">•</span> React / Next.js</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> TypeScript</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Tailwind CSS</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Responsive Design</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Backend & Deployment</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2"><span className="text-purple-600">•</span> Node.js / Python</li>
              <li className="flex gap-2"><span className="text-purple-600">•</span> MongoDB / PostgreSQL</li>
              <li className="flex gap-2"><span className="text-purple-600">•</span> Cloud Hosting</li>
              <li className="flex gap-2"><span className="text-purple-600">•</span> SSL & Security</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Our Web Design Process</h2>
          
          <div className="space-y-8 mt-12">
            {[
              {
                num: "01",
                title: "Discovery & Planning",
                desc: "We understand your business goals, target audience, and competitive landscape"
              },
              {
                num: "02",
                title: "Wireframing & Design",
                desc: "Create detailed layouts and visual designs for your approval"
              },
              {
                num: "03",
                title: "Development",
                desc: "Build your website using modern, best-practice technologies"
              },
              {
                num: "04",
                title: "Testing & Launch",
                desc: "Comprehensive testing across devices and browsers before going live"
              },
              {
                num: "05",
                title: "Support & Optimization",
                desc: "Ongoing maintenance and optimization for peak performance"
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
        </div>
      </section>

      {/* Results */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Website Performance Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
            {[
              { metric: "95+", label: "Avg. Google Lighthouse Score" },
              { metric: "99.9%", label: "Uptime Guarantee" },
              { metric: "<1s", label: "Average Page Load Time" },
              { metric: "100%", label: "Mobile Responsive" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/20 border border-white/40 rounded-xl p-8">
                <p className="text-5xl font-bold text-white mb-2">{item.metric}</p>
                <p className="text-red-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready for a Website That Sells?</h2>
        <p className="text-xl text-slate-600 mb-8">
          Let's build a beautiful, high-converting website for your business
        </p>
        <Link href="/contact" className="inline-block bg-red-700 text-white font-bold py-4 px-8 rounded-full hover:bg-red-800 transition-colors text-lg">
          Start Your Project Today
        </Link>
      </section>
    </main>
  );
}
