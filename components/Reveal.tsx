"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "down" | "scale" | "none";
  style?: React.CSSProperties;
};

export default function Reveal({ children, className = "", delay = 0, direction = "up", style = {} }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case "up": return "reveal-up";
      case "down": return "reveal-down";
      case "left": return "reveal-left";
      case "right": return "reveal-right";
      case "scale": return "reveal-scale";
      default: return "";
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal-base ${getDirectionClass()} ${visible ? "is-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
