"use client";

import React, { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Network } from "lucide-react";

const techData = {
  "Web Platform": [
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
    { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "G318", icon: "lucide:network" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "React Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" }
  ],
  "Databases": [
    { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "G318", icon: "lucide:network" },
    { name: "React Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" }
  ],
  "Cloud & DevOps": [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "React Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "G318", icon: "lucide:network" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" }
  ],
  "Mobile Apps": [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
    { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "G318", icon: "lucide:network" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" },
    { name: "React Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" }
  ],
  "Other Frameworks": [
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" },
    { name: "React Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" }
  ]
};

const tabs = Object.keys(techData) as (keyof typeof techData)[];

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof techData>("Web Platform");

  return (
    <section className="py-24 relative overflow-hidden bg-[#FFF8F6]" id="technology">
      {/* Decorative background line */}
      <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none hidden lg:block">
        <svg width="100%" height="100%" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M 0 120 C 150 120 250 150 250 300 C 250 450 350 450 400 450" stroke="#F2C9C1" strokeWidth="2" fill="none" />
          <circle cx="250" cy="300" r="6" fill="#E6332A" />
          <circle cx="400" cy="450" r="6" fill="#E6332A" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal direction="up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h4 className="text-sm font-bold tracking-widest text-[#101828] uppercase">OUR TECHNOLOGIES</h4>
            <div className="w-12 h-[2px] bg-[#E6332A] rounded flex items-center justify-end relative">
              <div className="w-2 h-2 rounded-full bg-[#E6332A] absolute -right-1" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#101828] mb-12">
            We Use <span className="text-[#E6332A]">Technologies</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center bg-[#FFE4DE] rounded-full p-1.5 mb-16 max-w-fit mx-auto shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-[#101828] shadow-md"
                    : "text-[#475467] hover:text-[#101828]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
          {techData[activeTab].map((tech, idx) => (
            <Reveal key={`${activeTab}-${tech.name}-${idx}`} direction="scale" delay={idx * 0.05}>
              <div className="flex flex-col items-center justify-center group">
                <div className="relative filter drop-shadow-md transition-transform duration-300 group-hover:-translate-y-2">
                  <div 
                    className="bg-white w-[100px] h-[115px] flex items-center justify-center relative"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    }}
                  >
                    {tech.icon === "lucide:network" ? (
                      <Network size={42} strokeWidth={1.5} className="text-[#101828]" />
                    ) : (
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={46} 
                        height={46} 
                        className="object-contain"
                      />
                    )}
                  </div>
                </div>
                <span className="mt-5 text-[#101828] font-medium text-[15px]">{tech.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
