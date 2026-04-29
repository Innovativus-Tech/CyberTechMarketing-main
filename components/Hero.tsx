import Link from "next/link";

export default function Hero() {
  return (
    <section id="platform" className="relative pt-[160px] pb-24 md:pt-[180px] md:pb-32 flex flex-col items-center hero-red-gradient overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        <h1 className="text-4xl md:text-7xl lg:text-[80px] font-normal tracking-tight mb-6 md:mb-8 leading-[1.1] text-white drop-shadow-lg">
          <span className="block mb-2">Built to Convert.</span>
          <span className="block">Engineered for Growth.</span>
        </h1>
        
        <p className="text-lg md:text-[22px] text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto leading-snug font-medium">
          AI-powered marketing systems built for campaign velocity, stronger attribution, and revenue growth.<br className="hidden md:block" />
          See clearer. Scale faster. Win the market.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-red-950/30"
          >
            Free Growth Audit
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7-7"/></svg>
          </Link>
          <Link href="/blog" className="flex items-center justify-between bg-white/15 backdrop-blur-sm rounded-full p-1 pl-6 w-full sm:w-auto border border-white/10">
            <span className="text-white font-bold mr-4">See Campaign Wins</span>
            <span className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7-7"/></svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Video/Image Card placeholder bleeding down */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-24 relative z-20">
        <div className="hero-live-card w-full aspect-[16/10] md:aspect-video rounded-[1.75rem] overflow-hidden bg-black shadow-2xl relative border border-white/10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center scale-105 opacity-55"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-red-950/45 to-slate-950/55"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#180406] via-transparent to-white/8"></div>

          <div className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full bg-red-500/18 blur-3xl"></div>
          <div className="absolute right-[10%] top-[14%] h-40 w-40 rounded-full bg-orange-400/12 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute inset-x-[6%] top-[10%] hidden h-16 grid-cols-12 gap-3 md:grid">
            {Array.from({ length: 12 }).map((_, idx) => (
              <span key={idx} className="hero-pixel-float aspect-square rounded-[0.45rem] bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.04)]" style={{ animationDelay: `${idx * 120}ms` }}></span>
            ))}
          </div>

          <div className="absolute left-1/2 top-[12%] z-10 hidden -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-white/85 backdrop-blur-md md:block">
            CyberTech Marketing Live
          </div>

          <div className="absolute left-[6%] top-[22%] hero-ui-panel hero-float-slow w-[30%] min-w-[220px] max-w-[320px] rounded-[1.5rem] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Lead Surge</p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <div>
                <p className="text-4xl font-black text-white">56</p>
                <p className="mt-1 text-sm font-medium text-emerald-300">Qualified leads this week</p>
              </div>
              <div className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                +24%
              </div>
            </div>
            <div className="mt-5 flex items-end gap-2">
              {[22, 30, 28, 42, 39, 54, 49, 66].map((value, idx) => (
                <span
                  key={idx}
                  className="w-full rounded-full bg-gradient-to-t from-red-500/80 to-orange-300/80"
                  style={{ height: `${value}px` }}
                ></span>
              ))}
            </div>
          </div>

          <div className="absolute right-[8%] top-[16%] hero-ui-panel hero-float-fast hidden w-[32%] min-w-[260px] max-w-[360px] rounded-[1.5rem] p-5 md:block">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Channel ROI Mix</p>
                <h3 className="mt-2 text-lg font-black text-white">Revenue by Channel</h3>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/75">Live</span>
            </div>
            <div className="mt-6 flex items-center gap-5">
              <div className="relative h-28 w-28 rounded-full border-[14px] border-white/10">
                <div className="absolute inset-[-14px] rounded-full border-[14px] border-transparent border-t-violet-400 border-r-violet-500 rotate-12"></div>
                <div className="absolute inset-[-14px] rounded-full border-[14px] border-transparent border-b-sky-400 border-l-sky-500 -rotate-45"></div>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <p className="text-3xl font-black text-white">56</p>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Assets</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm font-medium text-white/80">
                <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-violet-400"></span>Meta Ads 30%</p>
                <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-sky-400"></span>SEO 28%</p>
                <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400"></span>Email 21%</p>
                <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-300"></span>PPC 21%</p>
              </div>
            </div>
          </div>

          <div className="absolute left-[12%] bottom-[14%] hero-ui-panel hero-float-fast hidden w-[34%] min-w-[280px] max-w-[420px] rounded-[1.5rem] p-5 lg:block">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-black text-white">CyberTech Campaign Flow</p>
                <p className="mt-1 text-sm leading-6 text-white/70">
                  Launch creative, route paid traffic, score intent, and trigger follow-up automations in one motion.
                </p>
              </div>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                Ready
              </span>
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="text-sm font-medium text-white/75">Growth Engine V11</div>
              <button className="rounded-full bg-red-600 px-4 py-2 text-sm font-extrabold text-white shadow-lg shadow-red-950/30 hover:bg-red-700 transition-colors">
                Launch Strategy
              </button>
            </div>
          </div>

          <div className="absolute right-[3%] bottom-[4%] z-10">
            <Link
              href="/services"
              className="flex items-center gap-4 rounded-full border border-white/30 bg-white/18 px-6 py-3 text-white backdrop-blur-md shadow-[0_16px_40px_rgba(15,23,42,0.25)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-xl md:text-2xl font-semibold tracking-tight">Explore Growth Engine</span>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-red-600 text-white shadow-lg shadow-red-950/30">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7-7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
