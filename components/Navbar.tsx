"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <BrandLogo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link href="/#enquiry" className="nav-cta">Start a project <ArrowUpRight size={16} /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}</Link>
          ))}
        </nav>
        <Link href="/#enquiry" className="button button-primary" onClick={() => setOpen(false)}>Tell us about your project</Link>
      </div>
    </header>
  );
}
