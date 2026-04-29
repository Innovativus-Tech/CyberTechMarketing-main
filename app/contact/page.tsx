'use client';

import { useState } from 'react';
import { Clock, Rocket, Target, Handshake, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import ContactFormModal from '@/components/ContactFormModal';

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<'sales' | 'support' | 'partnerships' | null>(null);

  const contactCategories = [
    {
      id: 'sales',
      title: 'Sales Inquiry',
      description: 'Explore our digital marketing services and find the perfect solution for your business growth.',
      Icon: Rocket,
      cta: 'Talk to Sales',
      email: 'sales@cybertechmarketing.com',
      response: '2-4 hours'
    },
    {
      id: 'support',
      title: 'Customer Support',
      description: 'Need help? Our support team is here to assist with any questions or technical issues.',
      Icon: Target,
      cta: 'Get Support',
      email: 'support@cybertechmarketing.com',
      response: '1-2 hours'
    },
    {
      id: 'partnerships',
      title: 'Partnerships',
      description: 'Interested in collaborating with CyberTech Marketing? Let\'s explore and grow together.',
      Icon: Handshake,
      cta: 'Explore Partnership',
      email: 'partnerships@cybertechmarketing.com',
      response: '24 hours'
    },
  ] as const;

  const trustSignals = [
    { label: '500+', metric: 'Satisfied Clients', Icon: Users },
    { label: '10+', metric: 'Years Experience', Icon: TrendingUp },
    { label: '24/7', metric: 'Support Available', Icon: Clock },
    { label: '99.9%', metric: 'Satisfaction Rate', Icon: CheckCircle },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50/80 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-sm font-semibold text-red-700 tracking-wide uppercase">We&apos;re Here to Help</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Get in Touch With <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">CyberTech</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Let&apos;s discuss how we can accelerate your digital marketing success
          </p>
          
          <p className="text-lg text-gray-500">
            Select your inquiry type below and we&apos;ll connect you with the right expert
          </p>
        </div>
      </section>

      {/* Contact Category Cards Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {contactCategories.map((category) => (
              <div
                key={category.id}
                className="group relative p-8 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-xl hover:border-red-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <category.Icon className="w-10 h-10 text-red-600 mb-4" />

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Response Time */}
                  <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Typical response: {category.response}
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => setSelectedCategory(category.id)}
                    className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 group/btn flex items-center justify-center gap-2"
                  >
                    {category.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {/* Email Link */}
                  <a 
                    href={`mailto:${category.email}`}
                    className="block text-center text-sm text-gray-500 hover:text-red-600 mt-4 transition-colors"
                  >
                    {category.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Direct Contact
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 mb-2">For general inquiries</p>
                    <a href="mailto:info@cybertechmarketing.com" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                      info@cybertechmarketing.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600 mb-2">Available 24/7 for urgent matters</p>
                    <a href="tel:+17428768779" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                      +91 7428768779
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Office Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600">Sat - Sun: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                
                <p className="text-red-100 mb-8 leading-relaxed">
                  Don&apos;t wait—reach out today for a free consultation and discover how CyberTech Marketing can transform your digital presence and drive meaningful growth.
                </p>

                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedCategory('sales')}
                    className="w-full py-4 px-6 rounded-lg bg-white text-red-600 font-bold hover:bg-red-50 transition-colors duration-300"
                  >
                    Schedule Free Consultation
                  </button>
                  
                  <button
                    onClick={() => setSelectedCategory('sales')}
                    className="w-full py-4 px-6 rounded-lg border-2 border-white text-white font-bold hover:bg-white/10 transition-colors duration-300"
                  >
                    Get a Quote
                  </button>
                </div>

                <p className="text-red-100 text-sm mt-6">
                  ✓ No credit card required
                  <br/>✓ Free 30-minute strategy session
                  <br/>✓ Personalized recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Trusted by Leading Brands
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustSignals.map((signal, idx) => (
              <div key={idx} className="text-center">
                <signal.Icon className="w-12 h-12 text-red-500 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {signal.label}
                </p>
                <p className="text-gray-300 font-medium">
                  {signal.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What is the typical response time?",
                a: "Response times vary by department. Sales inquiries typically receive a response within 2-4 hours, while support requests are prioritized and answered within 1-2 hours during business hours."
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer a complimentary 30-minute strategy session for all new prospects. This allows us to understand your goals and provide personalized recommendations."
              },
              {
                q: "What services does CyberTech Marketing offer?",
                a: "We provide a comprehensive suite of digital marketing services including SEO, paid advertising, social media management, content marketing, email campaigns, and web design."
              },
              {
                q: "How can I schedule a consultation?",
                a: 'Simply click on the "Schedule Free Consultation" button or fill out a contact form. Our team will reach out within one business day to confirm your preferred meeting time.'
              },
            ].map((item, idx) => (
              <details key={idx} className="group border border-gray-200 rounded-lg p-6 hover:border-red-300 hover:shadow-md transition-all duration-300 bg-white/50 backdrop-blur-sm">
                <summary className="cursor-pointer flex justify-between items-center font-bold text-gray-900 text-lg">
                  {item.q}
                  <span className="text-gray-400 group-open:text-red-600 transition-colors">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Send us an email directly or call our team. We&apos;re here to help with any questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@cybertechmarketing.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-colors duration-300 shadow-lg"
            >
              Send an Email
            </a>
            <a
              href="tel:+17428768779"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-red-600 text-red-600 font-bold hover:bg-red-50 transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {selectedCategory && (
        <ContactFormModal
          isOpen={!!selectedCategory}
          onClose={() => setSelectedCategory(null)}
          category={selectedCategory}
        />
      )}
    </main>
  );
}
