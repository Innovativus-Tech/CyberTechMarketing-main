"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "rgba(230, 51, 42, 0.1)",
        zIndex: 10000,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          background: "linear-gradient(90deg, var(--red), var(--orange))",
          width: `${scrollProgress}%`,
          transition: "width 0.1s ease-out",
          boxShadow: "0 0 10px rgba(230, 51, 42, 0.5)",
        }}
      />
    </div>
  );
}
