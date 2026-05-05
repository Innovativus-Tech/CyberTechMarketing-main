import Link from 'next/link';
import Image from 'next/image';

export default function ProofTrustPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1507238691740-e6e1586f5160?q=80&w=2070&auto=format&fit=crop" alt="Proof & Trust" fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-700 opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">Proof & Trust</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">See the client signals, testimonials, and credibility markers that support our approach</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1470&auto=format&fit=crop" alt="Success Stories" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Proven Track Record</h2>
            <p className="text-lg text-slate-600 mb-4">We believe in results, not just promises. Our clients see measurable improvements in traffic, leads, and revenue. Our approach is backed by data, industry expertise, and a proven track record of success across diverse industries.</p>
            <p className="text-lg text-slate-600 mb-6">From startups to enterprise clients, we help businesses grow by combining strategic thinking with data-driven execution.</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Measurable Results:</strong> Real data, real growth</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Industry Expertise:</strong> Deep knowledge across sectors</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-700 font-bold">✓</span>
                <p className="text-slate-700"><strong>Client Success:</strong> Your goals are our goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Successful Campaigns" },
              { number: "200+", label: "Active Clients" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Industry Awards" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8">
                <p className="text-5xl font-bold text-red-700 mb-2">{stat.number}</p>
                <p className="text-slate-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "E-commerce Brand",
              result: "300% Revenue Growth",
              desc: "Scaled online store from $500K to $2M annual revenue through integrated marketing"
            },
            {
              company: "SaaS Company",
              result: "5x Customer Growth",
              desc: "Grew from 100 to 500+ customers through demand generation and retention"
            },
            {
              company: "Healthcare Provider",
              result: "150% New Patient Increase",
              desc: "Attracted 300+ new patients annually through local SEO and reputation"
            },
            {
              company: "B2B Services",
              result: "2.5x Revenue Growth",
              desc: "Increased pipeline and closed deals worth $5M+ in new business"
            },
            {
              company: "Real Estate Team",
              result: "10x Lead Generation",
              desc: "Generated 500+ qualified leads annually for property sales"
            },
            {
              company: "Education Institute",
              result: "40% Enrollment Increase",
              desc: "Attracted 200+ new students through enrollment marketing campaigns"
            }
          ].map((story, idx) => (
            <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{story.company}</h3>
              <p className="text-2xl font-bold text-red-700 mb-3">{story.result}</p>
              <p className="text-slate-600">{story.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">What Clients Say About Us</h2>
          <p className="text-center text-red-200 mb-12 max-w-2xl mx-auto">
            Real feedback from clients who have experienced transformational growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "CyberTech transformed our marketing approach. We went from struggling to find leads to having a consistent pipeline.",
                author: "CEO, Tech Startup"
              },
              {
                quote: "The team's expertise across all marketing channels means we finally have one cohesive strategy instead of fragmented efforts.",
                author: "Marketing Director, E-commerce"
              },
              {
                quote: "Their data-driven approach is refreshing. Every decision is backed by analytics and real results.",
                author: "Founder, SaaS Company"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 border border-white/20 rounded-xl p-8">
                <p className="text-lg text-white mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-red-300 font-bold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Approach to Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Data First",
              desc: "Every strategy and decision is backed by deep data analysis and insights"
            },
            {
              title: "Results Focused",
              desc: "We measure success by your business metrics, not vanity numbers"
            },
            {
              title: "Transparency",
              desc: "Clear reporting and regular communication keep you informed"
            },
            {
              title: "Continuous Learning",
              desc: "We stay on top of latest trends and best practices"
            },
            {
              title: "Collaborative",
              desc: "Your team is our extended team—we work together"
            },
            {
              title: "Scalable",
              desc: "Our strategies grow with your business"
            }
          ].map((principle, idx) => (
            <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{principle.title}</h3>
              <p className="text-slate-600">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-red-100 mb-8">Let's discuss how we can help you achieve transformational growth</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Schedule Consultation</Link>
        </div>
      </section>
    </main>
  );
}
