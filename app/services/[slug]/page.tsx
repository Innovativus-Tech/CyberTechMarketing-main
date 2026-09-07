import { getServiceBySlug, getAllServices } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import WorkingProcess from '@/components/WorkingProcess';

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug.current,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main className="bg-white">
      {/* Dark Hero Section */}
      <section className="bg-[#020B2D] py-16 md:py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
        {/* Subtle radial lines background pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #1653FF 0, #1653FF 1px, transparent 0, transparent 50%)`,
          backgroundSize: '100px 100px'
        }}></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">{service.title}</h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium tracking-wide">
            <span>Cybertech</span> <span className="text-white/40">/</span> <span>{service.category || "Consultation"}</span> <span className="text-white/40">/</span> <span className="text-white">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Main Content & Introduction */}
      <section className="py-20 bg-[#F4F8FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Huge Top Image */}
          <div className="w-full aspect-[21/9] md:aspect-[2.5/1] relative rounded-3xl md:rounded-[40px] overflow-hidden shadow-xl mb-16 -mt-32 z-20 border-8 border-white">
            {service.mainImage ? (
               <Image src={urlFor(service.mainImage).url()} fill className="object-cover" alt={service.title} />
            ) : (
               <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" fill className="object-cover" alt="Placeholder" />
            )}
          </div>
          
          <div className="max-w-5xl mx-auto mt-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#101828] mb-8 leading-tight">
              {service.title} Features
            </h2>
            <div className="prose prose-lg max-w-none text-[#475467] leading-relaxed prose-p:mb-6 prose-headings:text-[#101828] prose-headings:font-bold">
              {service.fullDescription ? (
                <PortableText value={service.fullDescription} />
              ) : (
                <p className="text-xl leading-relaxed">{service.description}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section (Reusing WorkingProcess) */}
      <WorkingProcess />

      {/* Services Outcome Section */}
      <section className="py-24 bg-[#F0F6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-[44px] font-extrabold text-[#101828] mb-6">Services Outcome</h2>
          <p className="text-lg text-[#475467] leading-relaxed max-w-4xl mb-12">
            Here are six key points that can be associated with our digital transformation initiatives, helping leading companies on their innovation agenda:
          </p>
          <div className="grid md:grid-cols-2 gap-y-5 gap-x-12 mb-16 max-w-5xl">
            {['Scalability and Flexibility', 'User Experience', 'Security and Compliance', 'Security and Compliance', 'Performance Optimization', 'Training and Education'].map((outcome, idx) => (
              <div key={`${outcome}-${idx}`} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#1653FF] shadow flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-[#475467] font-medium text-[17px]">{outcome}</span>
              </div>
            ))}
          </div>
          
          {/* 3 Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-square rounded-[32px] overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" fill className="object-cover hover:scale-110 transition-transform duration-1000" alt="Outcome Design 1" />
            </div>
            <div className="relative aspect-square rounded-[32px] overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" fill className="object-cover hover:scale-110 transition-transform duration-1000" alt="Outcome Design 2" />
            </div>
            <div className="relative aspect-square rounded-[32px] overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop" fill className="object-cover hover:scale-110 transition-transform duration-1000" alt="Outcome Design 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[600px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" fill className="object-cover" alt="Team meeting" />
          <div className="absolute inset-0 bg-[#0A1647]/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to Work, Let's Chat
          </h2>
          <p className="text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
            Our team of experts is ready to collaborate with you every step of the way, from initial consultation to implementation.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1653FF] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors shadow-2xl hover:shadow-blue-500/40">
            CONTACT US TODAY! <ArrowUpRight size={20} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}
