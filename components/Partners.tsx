import { defaultHomePageContent } from '@/lib/homePage';

type PartnersProps = {
  heading?: string;
  partners?: string[];
};

export default function Partners({
  heading = defaultHomePageContent.partnersHeading,
  partners = defaultHomePageContent.partnerNames,
}: PartnersProps) {
  return (
    <section id="partners" className="relative py-20 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-gray-500 font-semibold tracking-widest uppercase text-sm">
          {heading}
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-18 px-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex min-w-[240px] items-center justify-center opacity-65 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <span className="text-[2.5rem] leading-none text-gray-500 font-black tracking-tight">
                {partner}
              </span>
            </div>
          ))}

          {partners.map((partner, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex min-w-[240px] items-center justify-center opacity-65 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <span className="text-[2.5rem] leading-none text-gray-500 font-black tracking-tight">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
