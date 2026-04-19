"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  Shield,
  LineChart,
  Factory,
  BookOpen,
  ChevronRight,
  ArrowDown,
} from "lucide-react";

// Logo
import Image from "next/image";

import Link from "next/link";

// Symbol


export default function Page() {
  const [activeTab, setActiveTab] = useState("Gorilla");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const units = [
  {
    name: "About",
    type: "Founding Team",
    details: (
              <div className="space-y-1" >
                <br />
                <div className="w-40 h-40 overflow-hidden flex justify-center rounded-full">
  
    <Image
      src="/CEO.JPG"
      alt="Founder Portrait"
      width={160}
      height={160}
      className="object-cover flex justify-center"
    />
  </div>
  <br />
                <p className="font-medium text-white">Henry Oduor</p>
                <p>Founder & Chief Scientist</p>
                
              </div>
            ),
  },
  {
    name: "Gorilla",
    type: "Political Intelligence",
  
    details:
      "Model, test, and deploy political narratives at scale. Quantify influence pathways, simulate voter response, and shape perception under adversarial information conditions.",
  },
  {
    name: "Eagle",
    type: "Security Intelligence",
    
    details:
      "Fuse fragmented signals into operational awareness. Detect anomalies, assess threat trajectories, and enable rapid response in high-risk environments.",
  },
  {
    name: "Fox",
    type: "Business Intelligence",
    
    details:
      "Derive strategic advantage from incomplete data. Identify hidden patterns, forecast market shifts, and guide execution under uncertainty.",
  },
  {
    name: "Bear",
    type: "Sensor Manufacturing",
    
    details:
      "Engineer resilient sensing systems. Deploy edge hardware for reliable data capture in contested, remote, and degraded environments.",
  },
  {
  name: "Meticulix Institute",
  type: "Mathematical Thinking and Christian Philosophy",
  details: (
    <div className="space-y-4">
      <p>
        Develop foundational reasoning capacity. Train mathematical rigor,
        structured thinking, and philosophical analysis.
      </p>

      <Link
        href="/institute"
        className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
      >
        Publications <ChevronRight size={16} />
      </Link>
    </div>
  ),
}
];
const activeUnit = units.find((u) => u.name === activeTab);
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 w-full z-50 transition ${
          scrolled ? "bg-black/80 backdrop-blur-md py-4" : "py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center justify-center">
          <h1 className="text-xl font-bold text-zinc-700 font-orbitron">Meticulix Intelligence Lab</h1>
                    
          
        </div>
      </nav>

      {/* HERO */}
      <header className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto pt-20">
          <h1 className="text-7xl md:text-9xl font-light">
            To experiment <br />
            <span className="text-zinc-500">before tomorrow</span>
          </h1>

          <div className="mt-10 flex items-center gap-4 justify-center">
         <Image
            src="/logo.JPG"
            alt="Logo"
            width={400}
            height={400}
          />  
           
          </div>
          <p className="mt-8 text-zinc-400 italic text-sm md:text-base text-center">
          "If it disagrees with experiment, it is wrong! In that simple statement is the key to science. It doesn't make any difference how beautiful your guess is, it doesn't matter how smart you are, who made the guess, or what his name is... If it disagrees with experiment, it's wrong. That's all there is to it." - Richard Feynman
        </p>
        </div>
      </header>

      {/* TABS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 border-b border-white/10 mb-12">
            {units.map((unit) => (
              <button
                key={unit.name}
                onClick={() => setActiveTab(unit.name)}
                className={`px-6 py-4 text-xs uppercase ${
                  activeTab === unit.name
                    ? "text-white border-b-2 border-white"
                    : "text-zinc-500"
                }`}
              >
                {unit.name}
              </button>
            ))}
          </div>
          

          {activeUnit && (
  <div className="grid md:grid-cols-2 gap-12">
    <div>
      <h2 className="text-5xl">{activeUnit.type}</h2>

      <div className="text-zinc-400 mt-4">
        {activeUnit.details}
      </div>
    </div>
  </div>
)}
        </div>
      </section>

      {/* FOOTER */}
       {/* FOOTER */}
      <footer className="py-16 border-t border-white/10 text-center text-zinc-600 text-xs uppercase tracking-widest">
        © Meticulix Intelligence Lab
      </footer>
    </div>
  );
}