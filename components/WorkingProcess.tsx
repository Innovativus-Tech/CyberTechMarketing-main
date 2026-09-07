"use client";

import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import { Plus, Minus } from "lucide-react";

const steps = [
  { 
    id: "01", 
    title: "Discovery Phase", 
    description: "Data - driven diagnostic and predictive app for improving outcomes\nData driven diagnostic and predictive app for improving." 
  },
  { 
    id: "02", 
    title: "Design and Development", 
    description: "Strategy, creative, engineering and data needs are shaped into one practical roadmap." 
  },
  { 
    id: "03", 
    title: "Maintenance", 
    description: "You receive a scoped plan for the right mix of marketing, software, AI, data or mobile work." 
  },
  { 
    id: "04", 
    title: "Deployment", 
    description: "Design, development, campaigns and automation move through clean delivery milestones." 
  },
  { 
    id: "05", 
    title: "Testing and QA", 
    description: "Performance signals guide the next improvements after launch." 
  },
];

export default function WorkingProcess() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-[#F4F8FE] relative overflow-hidden" id="process">
      {/* Decorative background line */}
      <div className="absolute left-0 top-12 pointer-events-none hidden lg:block opacity-70">
        <svg width="150" height="250" viewBox="0 0 150 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50 0 C50 0 100 50 100 150 C100 200 50 250 0 250" stroke="#D1E0F5" strokeWidth="2" fill="none" />
          <circle cx="-50" cy="0" r="4" fill="#1653FF" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Accordion */}
          <div>
            <Reveal direction="left">
              <p className="text-sm font-bold tracking-widest text-[#101828] uppercase mb-4">
                WORKING PROCESS
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#101828] mb-12">
                Our <span className="text-[#1653FF]">Approach</span>
              </h2>
            </Reveal>

            <div className="flex flex-col">
              {steps.map((step, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <Reveal key={step.id} direction="up" delay={idx * 0.1}>
                    <div className="border-b border-gray-200 last:border-0">
                      <button
                        onClick={() => setActiveIdx(idx)}
                        className={`w-full py-6 flex items-center justify-between text-left transition-colors duration-200 ${
                          isActive ? "text-[#101828]" : "text-[#101828] hover:text-[#1653FF]"
                        }`}
                      >
                        <span className="text-xl md:text-2xl font-semibold">
                          {step.id}. {step.title}
                        </span>
                        {isActive ? (
                          <Minus className="w-6 h-6 text-[#101828]" />
                        ) : (
                          <Plus className="w-6 h-6 text-[#101828]" />
                        )}
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isActive ? "max-h-48 opacity-100 mb-6" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="bg-[#E2EDFC] p-6 rounded-md">
                          <p className="text-[#475467] leading-relaxed whitespace-pre-line">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Column - Diagram */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <Reveal direction="right">
              <div className="flex flex-col items-center relative w-[320px] sm:w-[420px] md:w-[480px]">
                {steps.map((step, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`cursor-pointer flex items-center justify-center w-full aspect-[3.5/1] rounded-[100%] transition-all duration-500 absolute left-0 ${
                        isActive 
                          ? "bg-[#1653FF] text-white border-2 border-[#1653FF] shadow-xl z-20 scale-105" 
                          : "bg-transparent text-[#101828] border border-[#101828] hover:border-[#1653FF] hover:text-[#1653FF] z-10"
                      }`}
                      style={{
                        top: `${idx * 65}px`, // Adjust vertical spacing to create the overlap
                      }}
                    >
                      <span className={`text-xl sm:text-2xl font-medium ${isActive ? 'font-semibold' : ''}`}>
                        {step.title}
                      </span>
                    </div>
                  );
                })}
                {/* Spacer to give the relative container enough height */}
                <div style={{ height: `${(steps.length - 1) * 65 + 160}px`, width: '100%' }} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
