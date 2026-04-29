interface SectionBadgeProps {
  label: string;
}

export default function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
      <div className="section-badge-glow rounded-full px-4 py-2">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.35em] text-white">
          {label}
        </span>
      </div>
    </div>
  );
}
