"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--ink)",
        zIndex: 99999,
        display: "grid",
        placeItems: "center",
        transition: "opacity 0.4s ease, visibility 0.4s ease",
        opacity: loading ? 1 : 0,
        visibility: loading ? "visible" : "hidden",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          className="brand-mark"
          style={{
            width: "60px",
            height: "60px",
            margin: "0 auto 20px",
            animation: "spin 1.2s linear infinite",
          }}
        >
          <span className="brand-mark-dot brand-mark-dot-one" />
          <span className="brand-mark-dot brand-mark-dot-two" />
        </div>
        <p style={{ color: "#b8c0cc", fontSize: "14px", fontWeight: 700 }}>
          Loading Cybertech...
        </p>
      </div>
    </div>
  );
}
