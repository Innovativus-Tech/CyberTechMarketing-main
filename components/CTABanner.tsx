import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

interface CTABannerProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "primary" | "dark" | "gradient";
}

export default function CTABanner({
  title,
  description,
  ctaText = "Get Started",
  ctaHref = "/contact",
  variant = "gradient",
}: CTABannerProps) {
  const backgrounds = {
    primary: "var(--red)",
    dark: "var(--ink)",
    gradient: "linear-gradient(135deg, var(--red) 0%, #f14e35 50%, var(--orange) 100%)",
  };

  return (
    <section
      className="section"
      style={{
        background: backgrounds[variant],
        color: "white",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal
          direction="up"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontSize: "13px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "24px",
            }}
          >
            <Sparkles size={16} />
            Limited Time Offer
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.6,
              marginBottom: "32px",
            }}
          >
            {description}
          </p>

          <Link
            href={ctaHref}
            className="button"
            style={{
              background: "white",
              color: "var(--red)",
              minHeight: "56px",
              padding: "0 32px",
              fontSize: "15px",
            }}
          >
            {ctaText} <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
