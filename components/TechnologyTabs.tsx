"use client";
import { useState } from "react";
import { Code2, Database, Cpu, Smartphone } from "lucide-react";
const groups = [
  { name: "Web platform", Icon: Code2, tools: ["React", "Next.js", "TypeScript", "Node.js"] },
  { name: "Data & intelligence", Icon: Database, tools: ["Python", "PostgreSQL", "MongoDB", "AI Models"] },
  { name: "Cloud & automation", Icon: Cpu, tools: ["Cloud", "Analytics", "Automation", "APIs"] },
  { name: "Mobile apps", Icon: Smartphone, tools: ["React Native", "Swift", "Kotlin", "Mobile UX"] },
];
export default function TechnologyTabs() {
  const [active, setActive] = useState(0);
  const group = groups[active];
  return <div><div className="cm-tech-tabs" role="tablist" aria-label="Technology categories">{groups.map((g,i)=><button key={g.name} id={"tech-tab-"+i} role="tab" aria-selected={active===i} aria-controls="tech-panel" tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={event=>{let next=i;if(event.key==="ArrowRight")next=(i+1)%groups.length;else if(event.key==="ArrowLeft")next=(i+groups.length-1)%groups.length;else if(event.key==="Home")next=0;else if(event.key==="End")next=groups.length-1;else return;event.preventDefault();setActive(next);document.getElementById("tech-tab-"+next)?.focus();}}>{g.name}</button>)}</div><div className="cm-tech-panel" id="tech-panel" role="tabpanel" aria-labelledby={"tech-tab-"+active} tabIndex={0}><div className="cm-tech-items">{group.tools.map(t=><div key={t}><group.Icon size={24}/>{t}</div>)}</div></div></div>;
}
