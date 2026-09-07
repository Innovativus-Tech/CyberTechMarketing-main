import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid-v2">
          {/* Column 1 */}
          <div className="footer-col">
            <BrandLogo light={true} />
            <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Empowering businesses with innovative digital solutions, cutting-edge technology, and strategic marketing for sustainable growth in the modern era.
            </p>
            <div className="footer-social" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://wa.me/917428768779" target="_blank" rel="noopener noreferrer" aria-label="Message Cybertech on WhatsApp" title="WhatsApp"><MessageCircle size={18} /></a>
              <a href="mailto:info@cybertechmarketing.com" aria-label="Email Cybertech Marketing" title="Email"><Mail size={18} /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-col-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3 className="footer-col-title">Our Services</h3>
            <ul className="footer-col-links">
              <li><Link href="/services/digital-marketing-growth">Digital Marketing & Growth</Link></li>
              <li><Link href="/services/web-development">Web Development</Link></li>
              <li><Link href="/services/software-development">Software Development</Link></li>
              <li><Link href="/services/ai-intelligent-solutions">AI & Intelligent Solutions</Link></li>
              <li><Link href="/services/machine-learning-data">Machine Learning & Data</Link></li>
              <li><Link href="/services/mobile-app-development">Mobile App Development</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contact Info</h3>
            <ul className="footer-col-links">
              <li>
                <a href="tel:+917428768779" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +91 74287 68779
                </a>
              </li>
              <li>
                <a href="mailto:info@cybertechmarketing.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  info@cybertechmarketing.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/917428768779" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 3.4L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0-1"/></svg>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Serving clients across India and beyond</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="site-container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <p>&copy; {new Date().getFullYear()} CyberTech Marketing. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
