import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="pt-16 pb-16 bg-white min-h-screen">
      <section className="page-top-red-gradient relative overflow-hidden pt-16 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 pt-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200/30 bg-white/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-red-300 animate-pulse"></span>
              <span className="text-sm font-bold text-red-50 tracking-wide uppercase">Who We Are</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">About Cybertech Marketing</h1>
          <p className="text-xl text-red-50/85 max-w-3xl mx-auto font-medium mb-12 leading-relaxed">
            We are an industry-leading digital marketing agency committed to driving explosive growth through AI-native strategies, autonomous intelligence, and relentless innovation.
          </p>

          <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden relative shadow-2xl mb-16 border border-white/10">
             <div className="absolute inset-0 bg-red-950/30 z-10"></div>
             <Image 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
               alt="Cybertech Marketing Team"
               fill
               sizes="100vw"
               className="object-cover"
             />
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
