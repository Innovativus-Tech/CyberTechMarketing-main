import Link from "next/link";

export default function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="brand-logo" aria-label="Cybertech Marketing home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark-dot brand-mark-dot-one" />
        <span className="brand-mark-dot brand-mark-dot-two" />
      </span>
      <span className="brand-wordmark">
        <span className={light ? "text-white" : "text-[#151a24]"}>CYBERTECH</span>
        <small>MARKETING</small>
      </span>
    </Link>
  );
}
