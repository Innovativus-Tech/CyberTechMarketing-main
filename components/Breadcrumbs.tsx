import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "0.9rem",
        fontWeight: 700,
        color: "rgba(255, 255, 255, 0.7)",
        marginBottom: "24px",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          transition: "color 0.2s ease",
        }}
        className="hover:text-white"
      >
        <Home size={16} />
        Home
      </Link>

      {items.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ChevronRight size={14} style={{ opacity: 0.5 }} />
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              style={{ transition: "color 0.2s ease" }}
              className="hover:text-white"
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "white" }}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
