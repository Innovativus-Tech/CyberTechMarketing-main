import { type HomePageHighlight, type HomePageReason, defaultHomePageContent } from '@/lib/homePage';

type WhyChooseUsProps = {
  title?: string;
  description?: string;
  highlights?: HomePageHighlight[];
  reasons?: HomePageReason[];
};

export default function WhyChooseUs({
  title = defaultHomePageContent.whyChooseTitle,
  description = defaultHomePageContent.whyChooseDescription,
  highlights = defaultHomePageContent.whyChooseHighlights,
  reasons = defaultHomePageContent.whyChooseReasons,
}: WhyChooseUsProps) {

  return (
    <section id="about" className="py-32 relative bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-100/50 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-medium">
              {description}
            </p>
            
            <div className="flex flex-col gap-6">
              {highlights.slice(0, 3).map((highlight, index) => (
              <div key={highlight.title + index} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-[var(--color-brand-primary)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold">{highlight.title}</h4>
                </div>
              </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
