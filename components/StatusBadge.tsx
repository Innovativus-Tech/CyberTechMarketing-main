import { CheckCircle2, Clock, Sparkles, TrendingUp } from "lucide-react";

interface StatusBadgeProps {
  type: "popular" | "new" | "trending" | "verified";
  label?: string;
}

const badgeConfig = {
  popular: {
    icon: TrendingUp,
    label: "Most Popular",
    color: "#ff7a3d",
    bg: "rgba(255, 122, 61, 0.1)",
  },
  new: {
    icon: Sparkles,
    label: "New Service",
    color: "#4a8fd4",
    bg: "rgba(74, 143, 212, 0.1)",
  },
  trending: {
    icon: TrendingUp,
    label: "Trending",
    color: "#e6332a",
    bg: "rgba(230, 51, 42, 0.1)",
  },
  verified: {
    icon: CheckCircle2,
    label: "Verified",
    color: "#10b981",
    bg: "rgba(16, 185, 129, 0.1)",
  },
};

export default function StatusBadge({ type, label }: StatusBadgeProps) {
  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 12px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: config.color,
        background: config.bg,
        border: `1px solid ${config.color}33`,
      }}
    >
      <Icon size={14} />
      {label || config.label}
    </span>
  );
}
