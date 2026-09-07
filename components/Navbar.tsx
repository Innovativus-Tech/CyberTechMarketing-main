"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

const menus = [
  {
    label: "Home",
    href: "/",
    items: [
      { label: "Hero Overview", href: "/#home", text: "Cybertech positioning and main CTA" },
      { label: "Featured Services", href: "/#services", text: "Six growth and technology services" },
      { label: "Client Journey", href: "/#process", text: "How projects move from brief to launch" },
    ],
  },
  {
    label: "Company",
    href: "/#about",
    items: [
      { label: "About Cybertech", href: "/#about", text: "Mission, approach and delivery style" },
      { label: "Proof & Outcomes", href: "/#proof", text: "Business impact areas and use cases" },
      { label: "Technology Stack", href: "/#technology", text: "Platforms and tools we work with" },
    ],
  },
  {
    label: "Services",
    href: "/#services",
    featured: true,
    items: [
      { label: "Digital Marketing & Growth", href: "/#services", text: "SEO, paid media, funnels and content systems" },
      { label: "Web Development", href: "/#services", text: "High-performance websites and landing pages" },
      { label: "Software Development", href: "/#services", text: "Custom platforms, dashboards and portals" },
      { label: "AI & Intelligent Solutions", href: "/#services", text: "Assistants, automation and smart workflows" },
      { label: "Machine Learning & Data", href: "/#services", text: "Data pipelines, reporting and prediction models" },
      { label: "Mobile App Development", href: "/#services", text: "iOS, Android and cross-platform products" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    items: [
      { label: "Contact Us Page", href: "/contact", text: "Full contact details and form" },
      { label: "Homepage Enquiry", href: "/#enquiry", text: "Quick project enquiry section" },
      { label: "WhatsApp", href: "https://wa.me/917428768779", text: "Message Cybertech directly" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-topbar">
        <div className="site-container nav-topbar-inner">
          <a href="tel:+917428768779"><Phone size={14} /> +91 74287 68779</a>
          <a href="https://wa.me/917428768779" target="_blank" rel="noreferrer"><MessageCircle size={14} /> WhatsApp</a>
          <a href="mailto:info@cybertechmarketing.com">info@cybertechmarketing.com</a>
        </div>
      </div>
      <div className="nav-shell">
        <BrandLogo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {menus.map((menu) => (
            <div className="nav-menu" key={menu.label}>
              <Link href={menu.href}>{menu.label}<ChevronDown size={14} /></Link>
              <div className={`mega-menu ${menu.featured ? "mega-menu-wide" : ""}`}>
                <div className="mega-kicker">
                  <span>{menu.label}</span>
                  <b>Cybertech Marketing</b>
                </div>
                <div className="mega-links">
                  {menu.items.map((item) => (
                    <Link key={item.label} href={item.href}>
                      <strong>{item.label}</strong>
                      <small>{item.text}</small>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
        <Link href="/#enquiry" className="nav-cta">Free consultation <ArrowUpRight size={16} /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {menus.map((menu, index) => (
            <Link key={menu.label} href={menu.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{menu.label}</Link>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <Link href="/#enquiry" className="button button-primary" onClick={() => setOpen(false)}>Tell us about your project</Link>
          <a href="https://wa.me/917428768779" className="button button-dark" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>WhatsApp Cybertech</a>
        </div>
      </div>
    </header>
  );
}
