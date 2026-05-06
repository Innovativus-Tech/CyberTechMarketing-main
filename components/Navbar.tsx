'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { type SiteSettings, defaultSiteSettings } from '@/lib/siteSettings';

type NavbarProps = {
  settings?: SiteSettings;
};

export default function Navbar({ settings = defaultSiteSettings }: NavbarProps) {
  const primaryLinks = settings.primaryNavLinks.map((link) => ({
    id: link.id || link.label.toLowerCase().replace(/\s+/g, '-'),
    name: link.label,
    href: link.href,
  }));

  const mobileLinks = [
    ...primaryLinks,
    { id: 'contact', name: settings.mobileCtaLabel, href: settings.mobileCtaHref },
    { id: 'blog', name: 'Blog', href: '/blog' },
  ];

  const megaMenuData = {
    col1: settings.platformAdvantageLinks.map((link) => ({
      title: link.title,
      desc: link.description || '',
      href: link.href,
    })),
    col2: settings.platformServiceLinks.map((link) => ({
      label: link.label,
      href: link.href,
    })),
    col3: settings.platformFocusLinks.map((link) => ({
      label: link.label,
      href: link.href,
    })),
  };

  // ── Desktop state ──────────────────────────────────────────────────────────
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const platformButtonRef = useRef<HTMLButtonElement>(null);

  // ── Mobile state (fully independent of desktop) ────────────────────────────
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        platformButtonRef.current && !platformButtonRef.current.contains(e.target as Node)
      ) {
        setDesktopDropdownOpen(false);
        setActiveMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobilePlatformOpen(false);
  }

  return (
    <>
      {/* ── Announcement bar ─────────────────────────────────────────────── */}
      <div className="w-full z-40 flex flex-col relative">
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-orange-500 text-white px-4 py-2 text-center text-[12px] sm:text-[13px] font-bold flex flex-wrap justify-center items-center gap-2 shadow-[0_10px_30px_rgba(185,28,28,0.22)]">
          <span>{settings.announcementText}</span>
          <Link href={settings.announcementCtaHref} className="underline decoration-white/60 underline-offset-4 flex items-center gap-1 hover:text-red-100 transition-colors whitespace-nowrap">
            {settings.announcementCtaLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Sticky header ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full bg-[#fff8f6]/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.06)] border-b border-red-100/70">
        {/* Desktop utility bar */}
        <div className="hidden md:flex max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2 justify-end items-center gap-6 text-[13px] font-bold text-slate-600 border-b border-red-100/70">
          {settings.utilityLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.variant === 'filled'
                  ? 'bg-gradient-to-r from-red-700 to-red-500 text-white px-4 py-1.5 rounded-full hover:from-red-800 hover:to-red-600 transition-all shadow-[0_10px_24px_rgba(220,38,38,0.25)]'
                  : link.variant === 'outline'
                    ? 'border-2 border-slate-900 text-slate-900 px-4 py-1.5 rounded-full hover:border-red-700 hover:text-red-700 hover:bg-red-50/70 transition-colors'
                    : 'hover:text-red-700 transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px] gap-4">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex items-center gap-3">
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
                </div>
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center space-x-1 h-full">
              {primaryLinks.map((item) => {
                const isDropdown = item.id === 'platform';
                return (
                  <div
                    key={item.id}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => isDropdown && setActiveMenu(item.id)}
                    onMouseLeave={() => isDropdown && setActiveMenu(null)}
                  >
                    {isDropdown ? (
                      <button
                        ref={platformButtonRef}
                        onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                        onMouseEnter={() => setActiveMenu(item.id)}
                        onMouseLeave={() => setActiveMenu(null)}
                        className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-bold transition-colors ${
                          activeMenu === item.id || desktopDropdownOpen
                            ? 'bg-red-50 text-red-700'
                            : 'text-slate-800 hover:bg-red-50/80 hover:text-red-700'
                        }`}
                        aria-expanded={activeMenu === item.id || desktopDropdownOpen}
                      >
                        {item.name}
                        <svg
                          className={`w-3 h-3 transition-transform ${activeMenu === item.id || desktopDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-bold transition-colors ${
                          activeMenu === item.id
                            ? 'bg-red-50 text-red-700'
                            : 'text-slate-800 hover:bg-red-50/80 hover:text-red-700'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}

                    {(activeMenu === item.id || desktopDropdownOpen) && isDropdown && (
                      <div
                        ref={dropdownRef}
                        className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[900px] max-w-[calc(100vw-2rem)] bg-[#fffaf8] border border-red-100 shadow-[0_24px_60px_rgba(127,29,29,0.12)] rounded-[1.5rem] py-8 px-8 xl:px-10 grid grid-cols-3 gap-6 xl:gap-8 cursor-default z-50"
                        onMouseEnter={() => setActiveMenu(item.id)}
                        onMouseLeave={() => { setActiveMenu(null); setDesktopDropdownOpen(false); }}
                        role="menu"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 rounded-t-[1.5rem] bg-gradient-to-r from-red-800 via-red-600 to-orange-500" aria-hidden="true"></div>

                        <div role="none">
                          <h4 className="text-slate-900 font-bold mb-6 pb-4 border-b border-red-100 text-[15px]">CyberTech Advantage</h4>
                          <div className="space-y-6">
                            {megaMenuData.col1.map((link) => (
                              <Link href={link.href} key={link.title} className="block group" role="menuitem">
                                <h5 className="text-slate-900 font-bold text-[14px] group-hover:text-red-700 transition-colors">{link.title}</h5>
                                <p className="text-slate-500 text-[12px] leading-snug mt-1">{link.desc}</p>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div role="none">
                          <h4 className="text-slate-900 font-bold mb-6 pb-4 border-b border-red-100 text-[15px]">Core Services</h4>
                          <div className="space-y-3">
                            {megaMenuData.col2.map((link) => (
                              <Link href={link.href} key={link.label} className="block text-[13px] font-bold text-slate-700 hover:text-red-700 transition-colors" role="menuitem">
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div role="none">
                          <h4 className="text-slate-900 font-bold mb-6 pb-4 border-b border-red-100 text-[15px]">Focus Areas</h4>
                          <div className="space-y-3">
                            {megaMenuData.col3.map((link) => (
                              <Link href={link.href} key={link.label} className="block text-[13px] font-bold text-slate-700 hover:text-red-700 transition-colors" role="menuitem">
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile hamburger button */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link href={settings.mobileCtaHref} className="hidden sm:inline-flex border border-red-200 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-red-100 transition-colors">
                {settings.mobileCtaLabel}
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="w-11 h-11 rounded-full border border-red-100 bg-white/80 flex items-center justify-center text-slate-900 hover:bg-red-50 transition-colors shadow-sm"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <div className="flex flex-col gap-1.5">
                  <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                  <span className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/*
        ── Mobile drawer ─────────────────────────────────────────────────────
        MUST be outside <header> — backdrop-blur-xl on header creates a CSS
        stacking context that traps fixed children inside it, making the drawer
        invisible. Placing it here (sibling of header) avoids that entirely.
      */}
      <div
        className={`lg:hidden fixed inset-0 z-[200] transition-all duration-300 ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeMobileMenu}
        />

        {/* Drawer panel */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-[#fff8f6] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-red-100 flex-shrink-0">
            <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute w-8 h-8 border-[3px] border-l-red-700 border-t-red-700 border-b-orange-400 border-r-transparent rounded-full transform -rotate-45"></div>
                <div className="absolute top-1.5 right-1 w-1 h-1 bg-red-900 rounded-full"></div>
                <div className="absolute bottom-1.5 right-1 w-1 h-1 bg-red-900 rounded-full"></div>
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-start">
                  <span className="text-base font-black text-slate-900 tracking-wider">CYBERTECH</span>
                  <span className="text-[8px] text-slate-900 font-bold ml-0.5 mt-0.5">TM</span>
                </div>
                <span className="text-[9px] font-bold tracking-[0.2em] text-red-700 uppercase ml-0.5">Marketing</span>
              </div>
            </Link>
            <button
              onClick={closeMobileMenu}
              className="w-9 h-9 rounded-full border border-red-100 bg-white flex items-center justify-center text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors"
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Utility links row */}
          <div className="flex items-center gap-3 px-5 py-3 bg-red-50 border-b border-red-100 flex-shrink-0">
            {settings.utilityLinks.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className={`flex-1 text-center text-xs font-bold py-1.5 rounded-full border bg-white transition-colors ${
                  link.variant === 'filled' || link.variant === 'outline'
                    ? 'text-red-700 border-red-200 hover:bg-red-100'
                    : 'text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Scrollable nav links */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
            {mobileLinks.map((item) => {
              const isPlatform = item.id === 'platform';

              if (isPlatform) {
                return (
                  <div key={item.id}>
                    <button
                      onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                      className={`w-full rounded-2xl border px-4 py-3 text-sm font-bold shadow-sm transition-all flex items-center justify-between ${
                        mobilePlatformOpen
                          ? 'border-red-200 bg-red-50 text-red-700'
                          : 'border-white/80 bg-white/90 text-slate-800 hover:border-red-200 hover:bg-red-50/70 hover:text-red-700'
                      }`}
                      aria-expanded={mobilePlatformOpen}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobilePlatformOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {mobilePlatformOpen && (
                      <div className="mt-2 ml-3 pl-3 border-l-2 border-red-200 space-y-4">
                        {/* CyberTech Advantage */}
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-red-600 mb-2">CyberTech Advantage</p>
                          <div className="space-y-2">
                            {megaMenuData.col1.map((link) => (
                              <Link
                                href={link.href}
                                key={link.title}
                                onClick={closeMobileMenu}
                                className="block rounded-xl bg-white border border-red-50 px-3 py-2.5 group hover:border-red-200 hover:bg-red-50/70 transition-colors"
                              >
                                <span className="block text-[13px] font-bold text-slate-800 group-hover:text-red-700 transition-colors">{link.title}</span>
                                <span className="block text-[11px] text-slate-500 mt-0.5 leading-snug">{link.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Core Services */}
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-red-600 mb-2">Core Services</p>
                          <div className="grid grid-cols-2 gap-1.5">
                            {megaMenuData.col2.map((link) => (
                              <Link
                                href={link.href}
                                key={link.label}
                                onClick={closeMobileMenu}
                                className="block text-[12px] font-bold text-slate-700 hover:text-red-700 transition-colors py-1.5 px-2 rounded-lg hover:bg-red-50/70"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Focus Areas */}
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-red-600 mb-2">Focus Areas</p>
                          <div className="grid grid-cols-2 gap-1.5">
                            {megaMenuData.col3.map((link) => (
                              <Link
                                href={link.href}
                                key={link.label}
                                onClick={closeMobileMenu}
                                className="block text-[12px] font-bold text-slate-700 hover:text-red-700 transition-colors py-1.5 px-2 rounded-lg hover:bg-red-50/70"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm font-bold text-slate-800 shadow-sm transition-all hover:border-red-200 hover:bg-red-50/70 hover:text-red-700 active:scale-[0.98]"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Drawer footer CTAs */}
          <div className="px-5 py-4 border-t border-red-100 flex flex-col gap-3 flex-shrink-0">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="rounded-full bg-gradient-to-r from-red-700 to-red-500 px-5 py-3 text-center text-sm font-extrabold text-white hover:from-red-800 hover:to-red-600 transition-all shadow-[0_12px_24px_rgba(220,38,38,0.22)] active:scale-[0.98]"
            >
              Get a Free Strategy Call
            </Link>
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className="rounded-full border-2 border-slate-900 px-5 py-3 text-center text-sm font-extrabold text-slate-900 hover:border-red-700 hover:bg-red-700 hover:text-white transition-colors active:scale-[0.98]"
            >
              Open Blog
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
