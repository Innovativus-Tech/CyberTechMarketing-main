import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <BrandLogo light />
          <p>Cybertech Marketing builds digital growth systems, websites, software, AI solutions, data workflows and mobile products.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/#services">Services</Link>
          <Link href="/#about">About</Link>
          <Link href="/#process">Process</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <div className="footer-contact">
          <a href="mailto:info@cybertechmarketing.com">info@cybertechmarketing.com</a>
          <a href="tel:+917428768779">+91 74287 68779</a>
          <a href="https://wa.me/917428768779" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>(c) {currentYear} Cybertech Marketing. All rights reserved.</span>
      </div>
    </footer>
  );
}
