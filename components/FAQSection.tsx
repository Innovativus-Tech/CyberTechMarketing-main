"use client";

import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import { Plus, Minus } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
  list?: string[];
};

const faqs: Faq[] = [
  {
    question: "Do you build custom software or only websites?",
    answer: "Both. We build websites, internal platforms, dashboards, portals, APIs, mobile applications and custom business software."
  },
  {
    question: "Can you help us identify where AI would actually be useful?",
    answer: "Yes. We start with the workflow, not the technology. We identify repetitive, expensive or slow processes where automation or AI can create measurable value."
  },
  {
    question: "How much does a project cost?",
    answer: "It depends on the scope, complexity and outcome you're targeting. After understanding your requirements, we'll recommend an appropriate approach and provide a clear proposal."
  },
  {
    question: "How long does a project take?",
    answer: "Timelines vary by scope. A focused landing page may take weeks, while custom software or AI systems can require several development phases. We'll establish the expected timeline before work begins."
  },
  {
    question: "What happens after I contact you?",
    answer: "We'll review your requirement, discuss the opportunity with you and recommend the next practical step. No complicated process."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative top-right corner background */}
      <div 
        className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] pointer-events-none opacity-20 hidden md:block" 
        style={{
          background: 'linear-gradient(225deg, #E6332A 0%, transparent 50%)',
        }} 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h4 className="text-sm font-bold tracking-widest text-[#101828] uppercase">F.A.Q.</h4>
            <div className="w-12 h-[2px] bg-[#E6332A] rounded flex items-center justify-end relative">
              <div className="w-2 h-2 rounded-full bg-[#E6332A] absolute -right-1" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#101828] mb-16 text-center">
            Questions, <span className="text-[#E6332A]">answered.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => {
            const isActive = openIdx === idx;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="w-full">
                  <button 
                    onClick={() => toggle(idx)}
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <h3 className="text-xl md:text-[22px] font-medium text-[#101828] pr-8 transition-colors group-hover:text-[#E6332A]">
                      Q. {faq.question}
                    </h3>
                    <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-md border transition-colors duration-200 ${
                      isActive 
                        ? "bg-[#E6332A] border-[#E6332A] text-white" 
                        : "bg-white border-gray-200 text-[#E6332A] group-hover:border-[#E6332A]"
                    }`}>
                      {isActive ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                    </div>
                  </button>
                  
                  <div 
                    id={`faq-answer-${idx}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive ? "max-h-[800px] opacity-100 mt-2 mb-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-[#FFEDE8] rounded-md p-6 md:p-10 flex flex-col sm:flex-row gap-6 md:gap-10">
                      <div className="flex-shrink-0 pt-2.5">
                        <div className="w-3 h-3 rounded-full bg-[#E6332A]" />
                      </div>
                      <div className="text-[#475467] leading-relaxed w-full">
                        <p className={faq.list ? "mb-6" : "mb-0"}>{faq.answer}</p>
                        
                        {faq.list && (
                          <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                            {faq.list.map((item, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#E6332A] flex-shrink-0" />
                                <span className="text-[15px]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
