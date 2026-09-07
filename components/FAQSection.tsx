"use client";

import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How to choose a software development company?",
    answer: "A custom software development company is a vendor that builds unique software from scratch. Also, such vendors provide a range of other useful services like software upgrades, Here is an extended list of services:",
    list: [
      "Web and mobile app development",
      "Cloud computing",
      "Software architecture",
      "QA and testing",
      "IT consulting and audit",
      "Business analysis",
      "Legacy system modernization",
      "IT staffing services"
    ]
  },
  {
    question: "What is a custom software development company?",
    answer: "Cybertech connects marketing, website development, software, AI and data in one execution plan, so your digital presence and backend systems support the same business goal.",
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes. Cybertech can improve an existing website with better structure, conversion paths, responsiveness, content and technical performance.",
  },
  {
    question: "Do you build software and apps as well as marketing campaigns?",
    answer: "Yes. The service mix includes software development, web development, mobile app development, AI solutions and machine learning/data work.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative top-right corner background */}
      <div 
        className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] pointer-events-none opacity-20 hidden md:block" 
        style={{
          background: 'linear-gradient(225deg, #1653FF 0%, transparent 50%)',
        }} 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h4 className="text-sm font-bold tracking-widest text-[#101828] uppercase">F.A.Q.</h4>
            <div className="w-12 h-[2px] bg-blue-500 rounded flex items-center justify-end relative">
              <div className="w-2 h-2 rounded-full bg-blue-500 absolute -right-1" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#101828] mb-16 text-center">
            Need a <span className="text-[#1653FF]">Support?</span>
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
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <h3 className="text-xl md:text-[22px] font-medium text-[#101828] pr-8 transition-colors group-hover:text-[#1653FF]">
                      Q. {faq.question}
                    </h3>
                    <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-md border transition-colors duration-200 ${
                      isActive 
                        ? "bg-[#1653FF] border-[#1653FF] text-white" 
                        : "bg-white border-gray-200 text-[#1653FF] group-hover:border-[#1653FF]"
                    }`}>
                      {isActive ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive ? "max-h-[800px] opacity-100 mt-2 mb-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-[#DFEAFA] rounded-md p-6 md:p-10 flex flex-col sm:flex-row gap-6 md:gap-10">
                      <div className="text-4xl md:text-5xl font-extrabold text-[#101828] flex-shrink-0">
                        A.
                      </div>
                      <div className="text-[#475467] leading-relaxed w-full">
                        <p className={faq.list ? "mb-6" : "mb-0"}>{faq.answer}</p>
                        
                        {faq.list && (
                          <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                            {faq.list.map((item, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#1653FF] flex-shrink-0" />
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
