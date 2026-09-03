import Link from 'next/link';
import { type SiteSettings, defaultSiteSettings } from '@/lib/siteSettings';

type FooterProps = {
  settings?: SiteSettings;
};

export default function Footer({ settings = defaultSiteSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gray-100 opacity-50 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              {/* Logo Replication */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Red C shape */}
                <div className="absolute w-8 h-8 border-[3px] border-l-gray-900 border-t-gray-900 border-b-gray-400 border-r-transparent rounded-full transform -rotate-45"></div>
                {/* Dots */}
                <div className="absolute top-1.5 right-1 w-1 h-1 bg-gray-900 rounded-full"></div>
                <div className="absolute bottom-1.5 right-1 w-1 h-1 bg-gray-900 rounded-full"></div>
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-start">
                  <span className="text-xl font-black text-[#1d2633] tracking-wider">CYBERTECH</span>
                </div>
                <span className="text-[9px] font-bold tracking-[0.25em] text-gray-900 uppercase ml-1">Marketing</span>
              </div>
            </Link>
            <p className="text-gray-600 max-w-sm mb-6 leading-relaxed font-medium">
              {settings.footerDescription}
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-3 font-medium">
              {settings.footerCompanyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-lg">Get In Touch</h3>
            <ul className="space-y-3 font-medium">
              <li><a href={`mailto:${settings.footerEmail}`} className="text-gray-600 hover:text-gray-900 transition-colors">{settings.footerEmail}</a></li>
              <li><a href={`tel:${settings.footerPhone.replace(/\s+/g, '')}`} className="text-gray-600 hover:text-gray-900 transition-colors">{settings.footerPhone}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-medium">© {currentYear} Cybertech Marketing. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
            {settings.footerLegalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
