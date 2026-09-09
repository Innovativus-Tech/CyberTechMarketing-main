"use client";

import React, { useState, useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

const steps = [
  { 
    id: "01", 
    title: "Discover",
    description: <><strong style={{display: 'block', marginBottom: '4px', color: '#101828'}}>Understand the business before recommending the technology.</strong>We learn about your goals, customers, current systems, challenges and opportunities.</>
  },
  { 
    id: "02", 
    title: "Strategy",
    description: <><strong style={{display: 'block', marginBottom: '4px', color: '#101828'}}>Turn the problem into a clear roadmap.</strong>We define priorities, scope, user journeys, technology and the metrics that matter.</>
  },
  { 
    id: "03", 
    title: "Build",
    description: <><strong style={{display: 'block', marginBottom: '4px', color: '#101828'}}>Turn the strategy into something real.</strong>Our team designs, develops, integrates and launches the solution.</>
  },
  { 
    id: "04", 
    title: "Test & Launch",
    description: <><strong style={{display: 'block', marginBottom: '4px', color: '#101828'}}>Make sure it works in the real world.</strong>We test performance, usability, integrations and critical workflows before launch.</>
  },
  { 
    id: "05", 
    title: "Improve",
    description: <><strong style={{display: 'block', marginBottom: '4px', color: '#101828'}}>Launch is the beginning not the finish line.</strong>We use feedback, data and performance insights to improve what we&apos;ve built and help you keep moving forward.</>
  },
];

export default function WorkingProcess() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % steps.length);
      }, 3500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <section 
      className="py-24 bg-[#FFF8F6] relative overflow-hidden" 
      id="process"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative background line */}
      <div className="absolute left-0 top-12 pointer-events-none hidden lg:block opacity-70">
        <svg width="150" height="250" viewBox="0 0 150 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50 0 C50 0 100 50 100 150 C100 200 50 250 0 250" stroke="#F2C9C1" strokeWidth="2" fill="none" />
          <circle cx="-50" cy="0" r="4" fill="#E6332A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Visual process map */}
          <div>
            <Reveal direction="left">
              <p className="text-sm font-bold tracking-widest text-[#101828] uppercase mb-4">
                OUR APPROACH
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#101828] mb-12" style={{ letterSpacing: '-1px', lineHeight: '1.1' }}>
                From Business Problem to <span className="text-[#E6332A]">Working Solution.</span>
              </h2>
            </Reveal>

            <div className="process-orbit-wrap" aria-label="Cybertech delivery cycle">
              <div className="process-orbit">
                <svg className="process-orbit-svg" viewBox="0 0 360 360" aria-hidden="true">
                  <circle cx="180" cy="180" r="128" />
                  <path d="M180 52a128 128 0 0 1 121 86" />
                  <path d="M301 138l-17-2 11 13" />
                </svg>
                <div className="process-orbit-core">
                  <span>CYBERTECH</span>
                  <strong>Growth<br />in motion</strong>
                  <small>strategy × technology</small>
                </div>
                {steps.map((step, idx) => (
                  <button
                    key={step.id}
                    type="button"
                    className={`process-orbit-node process-orbit-node-${idx + 1} ${activeIdx === idx ? "is-active" : ""}`}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Select ${step.title}`}
                    aria-pressed={activeIdx === idx}
                  >
                    <span>{step.id}</span>
                    <b>{step.title.split(" ")[0]}</b>
                  </button>
                ))}
              </div>
              <div className="process-orbit-caption">
                <span>{steps[activeIdx].id} / 05</span>
                <p>{steps[activeIdx].description}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Diagram */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <Reveal direction="right">
              <div className="process-diagram">
                {steps.map((step, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`process-diagram-card cursor-pointer ${isActive ? "is-active" : ""}`}
                    >
                      <span className="process-diagram-index">{step.id}</span>
                      <span className="process-diagram-title">
                        {step.title}
                      </span>
                      <span className="process-diagram-toggle" aria-hidden="true">{isActive ? "−" : "+"}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8" style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '12px' }}>
                <a className="button button-primary" href="/#enquiry" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', fontWeight: 800, padding: '14px 28px' }}>
                  START A PROJECT <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
