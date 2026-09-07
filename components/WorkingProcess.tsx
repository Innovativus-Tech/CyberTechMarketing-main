"use client";

import React, { useState } from "react";
import Reveal from "@/components/Reveal";

const steps = [
  { 
    id: "01", 
    title: "Discover & Define",
    description: "We clarify the business goal, audience, current systems, constraints and the measures that will define success."
  },
  { 
    id: "02", 
    title: "Strategy & Experience",
    description: "Strategy, content, user journeys, technical architecture and priorities are shaped into one practical roadmap."
  },
  { 
    id: "03", 
    title: "Build & Integrate",
    description: "Design, engineering, campaigns, automation and integrations move through clear, reviewable delivery milestones."
  },
  { 
    id: "04", 
    title: "Test & Launch",
    description: "We validate responsive behavior, content, integrations and critical workflows before a controlled launch."
  },
  { 
    id: "05", 
    title: "Improve & Support",
    description: "Performance signals, user feedback and business priorities guide the next improvements after launch."
  },
];

export default function WorkingProcess() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-[#FFF8F6] relative overflow-hidden" id="process">
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
                WORKING PROCESS
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#101828] mb-12">
                Our <span className="text-[#E6332A]">Approach</span>
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
