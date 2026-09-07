"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a, button") !== null
      );
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isPointer ? "40px" : "24px",
          height: isPointer ? "40px" : "24px",
          border: `2px solid ${isPointer ? "var(--red)" : "rgba(230, 51, 42, 0.4)"}`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "6px",
          height: "6px",
          background: "var(--red)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%) scale(" + (isPointer ? "0" : "1") + ")",
          transition: "transform 0.2s ease",
        }}
      />
    </>
  );
}
