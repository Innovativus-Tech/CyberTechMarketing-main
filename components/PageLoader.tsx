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
        <div className="page-loader-logo" aria-hidden="true" />
        <p style={{ color: "#b8c0cc", fontSize: "14px", fontWeight: 700 }}>
          Loading Cybertech...
        </p>
      </div>
    </div>
  );
}
