'use client';

import Link from 'next/link';
import { useState } from 'react';

const primaryLinks = [
  { name: 'Platform', href: '/#platform' },
  { name: 'Services', href: '/#services' },
  { name: 'Partners', href: '/#partners' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Careers', href: '/careers' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
];

const mobileLinks = [
  ...primaryLinks,
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const megaMenuData = {
    col1: [
      { title: "Growth Platform", desc: "Integrated strategy across SEO, content, paid media, and conversion optimization.", href: '/#platform' },
      { title: 'Service Stack', desc: 'Explore the digital marketing, design, PPC, and web capabilities behind the system.', href: '/#services' },
      { title: 'Proof & Trust', desc: 'See the client signals, testimonials, and credibility markers that support our approach.', href: '/#partners' },
      { title: 'Meet CyberTech', desc: 'Learn how our agency combines creative execution with data-driven growth frameworks.', href: '/about' },
    ],
    col2: [
      { label: 'Digital Marketing', href: '/#services' },
      { label: 'Graphic Design', href: '/#services' },
      { label: 'E-commerce Marketing', href: '/#services' },
      { label: 'Pay Per Click', href: '/#services' },
      { label: 'Web Design', href: '/#services' },
      { label: 'Content Writing', href: '/#services' },
      { label: 'Pricing Plans', href: '/pricing' },
      { label: 'Contact Strategy Team', href: '/contact' },
    ],
    col3: [
      { label: 'SaaS Growth', href: '/blog' },
      { label: 'E-commerce Brands', href: '/blog' },
      { label: 'Healthcare Marketing', href: '/contact' },
      { label: 'Education Campaigns', href: '/contact' },
      { label: 'Real Estate Lead Gen', href: '/contact' },
      { label: 'Finance & B2B', href: '/contact' },
      { label: 'Hospitality Visibility', href: '/contact' },
      { label: 'D2C Performance', href: '/blog' },
    ],
  };

  return (
    <>
      <div className="w-full z-40 flex flex-col relative">
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-orange-500 text-white px-4 py-2 text-center text-[12px] sm:text-[13px] font-bold flex justify-center items-center gap-2 shadow-[0_10px_30px_rgba(185,28,28,0.22)]">
          <span>Don&apos;t Miss the CyberTech Marketing Forum — Learn How AI Is Changing the Marketing Landscape.</span>
          <Link href="/contact" className="underline decoration-white/60 underline-offset-4 flex items-center gap-1 hover:text-red-100 transition-colors">
            Register Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-[#fff8f6]/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.06)] border-b border-red-100/70">
        <div className="hidden md:flex max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2 justify-end items-center gap-6 text-[13px] font-bold text-slate-600 border-b border-red-100/70">
          <Link href="/contact" className="hover:text-red-700 transition-colors">Experiencing a Breach?</Link>
          <Link href="/blog" className="hover:text-red-700 transition-colors">Blog</Link>
          <Link href="/blog" className="bg-gradient-to-r from-red-700 to-red-500 text-white px-4 py-1.5 rounded-full hover:from-red-800 hover:to-red-600 transition-all shadow-[0_10px_24px_rgba(220,38,38,0.25)]">Get Started</Link>
          <Link href="/contact" className="border-2 border-slate-900 text-slate-900 px-4 py-1.5 rounded-full hover:border-red-700 hover:text-red-700 hover:bg-red-50/70 transition-colors">Contact Us</Link>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px] gap-4">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute w-10 h-10 border-4 border-l-[var(--color-brand-primary)] border-t-[var(--color-brand-primary)] border-b-[var(--color-brand-accent)] border-r-transparent rounded-full transform -rotate-45"></div>
                  <div className="absolute top-2 right-1.5 w-1.5 h-1.5 bg-red-900 rounded-full"></div>
                  <div className="absolute bottom-2 right-1.5 w-1.5 h-1.5 bg-red-900 rounded-full"></div>
                  <div className="absolute w-6 h-6 border-[0.5px] border-l-red-300 border-t-red-300 border-b-transparent border-r-transparent rounded-full transform -rotate-45 left-[5px] top-[9px]"></div>
                </div>
                <div className="flex flex-col leading-none">
                  <div className="flex items-start">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-wider">CYBERTECH</span>
                    <span className="text-[10px] text-slate-900 font-bold ml-0.5 mt-0.5">TM</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-red-700 uppercase ml-1">Marketing</span>
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-1 h-full">
              {primaryLinks.map((item) => {
                const isDropdown = item.name === 'Platform';

                return (
                  <div
                    key={item.name}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setActiveMenu(isDropdown ? item.name : null)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <Link href={item.href} className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-bold transition-colors ${activeMenu === item.name ? 'bg-red-50 text-red-700' : 'text-slate-800 hover:bg-red-50/80 hover:text-red-700'}`}>
                      {item.name}
                      {isDropdown && (
                        <svg className={`w-3 h-3 transition-transform ${activeMenu === item.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>

                    {activeMenu === item.name && isDropdown && (
                      <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[900px] bg-[#fffaf8] border border-red-100 shadow-[0_24px_60px_rgba(127,29,29,0.12)] rounded-[1.5rem] py-8 px-10 grid grid-cols-3 gap-8 cursor-default animate-fade-up">
                        <div className="absolute top-0 left-0 w-full h-1 rounded-t-[1.5rem] bg-gradient-to-r from-red-800 via-red-600 to-orange-500"></div>

                        <div>
                          <h4 className="text-slate-900 font-bold mb-6 pb-4 border-b border-red-100 text-[15px]">CyberTech Advantage</h4>
                          <div className="space-y-6">
                            {megaMenuData.col1.map((link) => (
                              <Link href={link.href} key={link.title} className="block group">
                                <h5 className="text-slate-900 font-bold text-[14px] group-hover:text-red-700 transition-colors">{link.title}</h5>
                                <p className="text-slate-500 text-[12px] leading-snug mt-1">{link.desc}</p>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-slate-900 font-bold mb-6 pb-4 border-b border-red-100 text-[15px]">Core Services</h4>
                          <div className="space-y-3">
                            {megaMenuData.col2.map((link) => (
                              <Link href={link.href} key={link.label} className="block text-[13px] font-bold text-slate-700 hover:text-red-700 transition-colors">{link.label}</Link>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-slate-900 font-bold mb-6 pb-4 border-b border-red-100 text-[15px]">Focus Areas</h4>
                          <div className="space-y-3">
                            {megaMenuData.col3.map((link) => (
                              <Link href={link.href} key={link.label} className="block text-[13px] font-bold text-slate-700 hover:text-red-700 transition-colors">{link.label}</Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 lg:hidden">
              <Link href="/contact" className="hidden sm:inline-flex border border-red-200 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-red-100 transition-colors">
                Contact
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen((value) => !value)}
                className="w-11 h-11 rounded-full border border-red-100 bg-white/80 flex items-center justify-center text-slate-900 hover:bg-red-50 transition-colors shadow-sm"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <div className="flex flex-col gap-1.5">
                  <span className={`block h-0.5 w-5 bg-current transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                  <span className={`block h-0.5 w-5 bg-current transition-opacity ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block h-0.5 w-5 bg-current transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${mobileOpen ? 'max-h-[80vh] opacity-100 border-t border-red-100/70' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 sm:px-6 py-5 bg-[#fff8f6]">
            <div className="rounded-3xl border border-red-100 bg-gradient-to-br from-white via-red-50/70 to-orange-50 p-5 shadow-[0_18px_45px_rgba(127,29,29,0.12)]">
              <div className="mb-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-red-700">Navigation</p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">Explore every section</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mobileLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50/70 hover:text-red-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex-1 rounded-full bg-gradient-to-r from-red-700 to-red-500 px-5 py-3 text-center text-sm font-extrabold text-white hover:from-red-800 hover:to-red-600 transition-all shadow-[0_12px_24px_rgba(220,38,38,0.22)]">
                  Experiencing a Breach?
                </Link>
                <Link href="/blog" onClick={() => setMobileOpen(false)} className="flex-1 rounded-full border border-slate-900 px-5 py-3 text-center text-sm font-extrabold text-slate-900 hover:border-red-700 hover:bg-red-700 hover:text-white transition-colors">
                  Open Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
