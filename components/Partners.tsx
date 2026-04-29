type Partner =
  | { type: 'wordmark'; name: string; className?: string }
  | { type: 'shopify' }
  | { type: 'google' }
  | { type: 'meta' }
  | { type: 'microsoft' };

const partners: Partner[] = [
  { type: 'wordmark', name: 'SAMSUNG', className: 'tracking-tight font-black' },
  { type: 'wordmark', name: 'lyft', className: 'font-black lowercase' },
  { type: 'wordmark', name: 'jetBlue', className: 'font-black' },
  { type: 'wordmark', name: 'servicenow', className: 'font-black lowercase' },
  { type: 'wordmark', name: 'norwegian', className: 'font-black lowercase' },
  { type: 'wordmark', name: 'flex', className: 'font-black lowercase' },
  { type: 'shopify' },
  { type: 'google' },
  { type: 'meta' },
  { type: 'microsoft' },
];

function PartnerMark({ partner }: { partner: Partner }) {
  if (partner.type === 'shopify') {
    return (
      <div className="flex items-center gap-3">
        <div className="relative flex h-12 w-10 items-center justify-center rounded-[0.9rem] bg-[#95bf47] text-white shadow-sm">
          <span className="text-3xl font-black italic">S</span>
          <span className="absolute -top-1 h-3 w-5 rounded-full border-2 border-[#95bf47] border-b-0"></span>
        </div>
        <div className="flex items-end gap-1 leading-none">
          <span className="text-[2.1rem] font-black italic text-black">shopify</span>
          <span className="pb-1 text-[1.15rem] font-medium italic text-gray-700">partners</span>
        </div>
      </div>
    );
  }

  if (partner.type === 'google') {
    return (
      <div className="flex items-center gap-4">
        <div className="h-16 w-3 rounded-full bg-[#4285f4]"></div>
        <div className="leading-none">
          <div className="text-[1.15rem] font-semibold">
            <span className="text-[#4285f4]">G</span>
            <span className="text-[#ea4335]">o</span>
            <span className="text-[#fbbc05]">o</span>
            <span className="text-[#4285f4]">g</span>
            <span className="text-[#34a853]">l</span>
            <span className="text-[#ea4335]">e</span>
          </div>
          <div className="text-[2rem] font-medium text-gray-700">Partner</div>
        </div>
      </div>
    );
  }

  if (partner.type === 'meta') {
    return (
      <div className="flex items-center gap-4">
        <svg width="82" height="48" viewBox="0 0 82 48" fill="none" aria-hidden="true" className="shrink-0">
          <path
            d="M13 33C13 18 21 8 30 8C39 8 44 18 48 26C52 18 57 8 66 8C75 8 83 18 83 33C83 37 80 40 76 40C69 40 64 32 58 24C54 18 51 13 48 13C45 13 42 18 38 24C32 32 27 40 20 40C16 40 13 37 13 33Z"
            stroke="#1877F2"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[4rem] font-semibold leading-none tracking-[-0.05em] text-slate-900">Meta</span>
      </div>
    );
  }

  if (partner.type === 'microsoft') {
    return (
      <div className="flex items-center gap-4">
        <div className="grid grid-cols-2 gap-1">
          <span className="h-7 w-7 bg-[#f25022]"></span>
          <span className="h-7 w-7 bg-[#7fba00]"></span>
          <span className="h-7 w-7 bg-[#00a4ef]"></span>
          <span className="h-7 w-7 bg-[#ffb900]"></span>
        </div>
        <span className="text-[3.25rem] font-semibold leading-none tracking-[-0.04em] text-gray-500">Microsoft</span>
      </div>
    );
  }

  return (
    <span className={`text-[3rem] leading-none text-gray-500 ${partner.className ?? 'font-black'}`}>
      {partner.name}
    </span>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="relative py-20 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-gray-500 font-semibold tracking-widest uppercase text-sm">
          Tried and trusted by the industry&apos;s leading authorities
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-18 px-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex min-w-[240px] items-center justify-center opacity-65 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <PartnerMark partner={partner} />
            </div>
          ))}

          {partners.map((partner, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex min-w-[240px] items-center justify-center opacity-65 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <PartnerMark partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
