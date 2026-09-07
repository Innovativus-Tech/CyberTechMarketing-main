"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top"
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        right: "22px",
        bottom: "90px",
        zIndex: 80,
        display: "grid",
        placeItems: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "2px solid var(--red)",
        color: "var(--red)",
        background: "white",
        boxShadow: "0 8px 24px rgba(230, 51, 42, 0.2)",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.25, 1, 0.35, 1)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
