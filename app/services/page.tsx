import Services from '@/components/Services';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="pt-16 pb-16 bg-gray-50 min-h-screen">
      
      {/* Intro Section with Image Background */}
      <div className="page-top-red-gradient relative w-full h-[500px] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop" 
            alt="Digital Marketing Analytics" 
            fill 
            sizes="100vw"
            className="object-cover opacity-25 mix-blend-screen" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse"></span>
            <span className="text-sm font-bold text-white tracking-wide uppercase">What We Do</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium drop-shadow-md">
            Comprehensive digital marketing solutions engineered to give you the ultimate competitive advantage.
          </p>
        </div>
      </div>
      
      <Services />
    </main>
  );
}
