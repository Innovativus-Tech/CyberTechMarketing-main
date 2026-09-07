"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const devicon = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const techData = {
  "Web & Software": [
    { name: "Next.js", icon: devicon("nextjs") },
    { name: "React", icon: devicon("react") },
    { name: "TypeScript", icon: devicon("typescript") },
    { name: "JavaScript", icon: devicon("javascript") },
    { name: "Node.js", icon: devicon("nodejs") },
    { name: "PHP", icon: devicon("php") },
  ],
  "Data": [
    { name: "PostgreSQL", icon: devicon("postgresql") },
    { name: "MongoDB", icon: devicon("mongodb") },
    { name: "MySQL", icon: devicon("mysql") },
    { name: "Redis", icon: devicon("redis") },
    { name: "Python", icon: devicon("python") },
    { name: "Pandas", icon: devicon("pandas") },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: devicon("amazonwebservices") },
    { name: "Google Cloud", icon: devicon("googlecloud") },
    { name: "Azure", icon: devicon("azure") },
    { name: "Docker", icon: devicon("docker") },
    { name: "Kubernetes", icon: devicon("kubernetes") },
    { name: "GitHub", icon: devicon("github") },
  ],
  "Mobile": [
    { name: "React Native", icon: devicon("react") },
    { name: "Flutter", icon: devicon("flutter") },
    { name: "Swift", icon: devicon("swift") },
    { name: "Kotlin", icon: devicon("kotlin") },
    { name: "Android", icon: devicon("android") },
    { name: "Firebase", icon: devicon("firebase") },
  ],
  "AI & Automation": [
    { name: "Python", icon: devicon("python") },
    { name: "PyTorch", icon: devicon("pytorch") },
    { name: "TensorFlow", icon: devicon("tensorflow") },
    { name: "FastAPI", icon: devicon("fastapi") },
    { name: "Docker", icon: devicon("docker") },
    { name: "PostgreSQL", icon: devicon("postgresql") },
  ],
};

type TechGroup = keyof typeof techData;
const tabs = Object.keys(techData) as TechGroup[];

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState<TechGroup>("Web & Software");

  return (
    <section className="py-24 relative overflow-hidden bg-[#FFF8F6]" id="technology">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal direction="up">
          <p className="eyebrow justify-center"><span /> Technology capability</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#101828] mb-5">Tools selected for the <span className="text-[#E6332A]">right outcome.</span></h2>
          <p className="text-[#667085] text-lg leading-relaxed max-w-3xl mx-auto mb-10">We choose maintainable technologies around performance, security, integration needs and your team’s long-term ownership.</p>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center bg-[#FFE4DE] rounded-full p-1.5 mb-14 max-w-fit mx-auto shadow-inner" role="tablist" aria-label="Technology groups">
            {tabs.map((tab) => (
              <button key={tab} role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)} className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab ? "bg-white text-[#101828] shadow-md" : "text-[#475467] hover:text-[#101828]"}`}>{tab}</button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5" role="tabpanel">
          {techData[activeTab].map((tech, index) => (
            <Reveal key={`${activeTab}-${tech.name}`} direction="scale" delay={index * 0.04}>
              <div className="technology-card">
                <div><Image src={tech.icon} alt="" width={44} height={44} /></div>
                <span>{tech.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
