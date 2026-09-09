import Link from "next/link";

export default function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-logo${light ? " brand-logo-light" : ""}`}
      aria-label="Cybertech Marketing home"
    >
      <span className="sr-only">Cybertech Marketing</span>
    </Link>
  );
}
