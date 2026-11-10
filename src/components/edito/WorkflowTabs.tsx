"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import {
  Compass,
  FileText,
  Camera,
  Layers,
  Rocket,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

interface WorkflowStep {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  turnaround: string;
  summary: string;
  deliverables: string[];
  quote: string;
}

const steps: WorkflowStep[] = [
  {
    number: "01",
    id: "strategy",
    title: "Vision & Hook Strategy",
    subtitle: "Discovery, competitor teardown & audience positioning",
    icon: Compass,
    turnaround: "Day 01",
    summary:
      "Before a single frame is cut, we dissect your niche, study your high-converting competitors, and define scroll-stopping hooks tailored to your audience's psychological triggers.",
    deliverables: [
      "Brand & Audience Positioning Blueprint",
      "High-Retention Hook Ideation Matrix (15+ angles)",
      "Visual Style & Color Grading Moodboard",
      "Content Calendar & Distribution Plan",
    ],
    quote: "Content without hook strategy is just noise. We engineer attention first.",
  },
  {
    number: "02",
    id: "scripting",
    title: "Direction & Scripting",
    subtitle: "Retention-engineered storytelling & shot lists",
    icon: FileText,
    turnaround: "Day 02",
    summary:
      "We draft word-for-word scripts formatted with visual cues, pacing beats, b-roll recommendations, and call-to-actions that keep viewer watch time above 85%.",
    deliverables: [
      "Word-for-Word Voiceover / Dialogue Scripts",
      "Frame-by-Frame Shot Lists & B-Roll Brief",
      "Teleprompter-Ready Deliverables",
      "On-Camera Delivery & Lighting Guidelines",
    ],
    quote: "Every second counts in the first 3 seconds. Our scripts are engineered to hold.",
  },
  {
    number: "03",
    id: "production",
    title: "Studio & Shoot Direction",
    subtitle: "Cinema-grade 4K capture or remote footage ingestion",
    icon: Camera,
    turnaround: "Day 03 - 04",
    summary:
      "Whether directing a commercial on-set with Sony FX series cinema rigs or organizing remote footage uploads, we ensure crisp audio, dynamic lighting, and pristine 10-bit color capture.",
    deliverables: [
      "Multi-Angle 4K 10-Bit Video Capture",
      "Dedicated Studio Lighting & Audio Setup",
      "Cloud Upload Portal for Remote Clients",
      "Organized Raw Asset Metadata & Ingestion",
    ],
    quote: "Cinema quality visuals instantly elevate your brand's perceived market authority.",
  },
  {
    number: "04",
    id: "post-production",
    title: "Precision Post & Sound",
    subtitle: "Rhythm editing, SFX soundscapes & dynamic motion",
    icon: Layers,
    turnaround: "Day 05 (24-48h)",
    summary:
      "This is where the magic happens. We cut with musical rhythm, layer custom sound design (whooshes, risers, textures), grade colors for filmic richness, and design custom kinetic typography.",
    deliverables: [
      "Dynamic Rhythm Cut with Zero Dead Air",
      "Multi-Layered Sound Design & Audio Sweetening",
      "Cinematic Rec.709 / Film Print Emulation Color Grade",
      "Custom Kinetic Captions & Motion Graphics",
    ],
    quote: "Sound design and micro-animations turn a boring video into an addictive watch.",
  },
  {
    number: "05",
    id: "delivery",
    title: "Delivery & Iteration",
    subtitle: "Multi-platform export, revisions & Meta ad variations",
    icon: Rocket,
    turnaround: "Instant Handover",
    summary:
      "You receive your final polished cuts with instant cloud download links, custom click-worthy thumbnails, and alternate hook variations ready to deploy for paid ads or organic feeds.",
    deliverables: [
      "Full 1080x1920 9:16 Vertical Master Exports",
      "High-CTR Custom Thumbnail Covers",
      "Alternate Hook Cuts (A/B Test Ready)",
      "Unlimited Creative Revisions Included",
    ],
    quote: "We don't stop until your content looks and performs like world-class cinema.",
  },
];

export function WorkflowTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const currentStep = steps[activeTab];
  const StepIcon = currentStep.icon;

  return (
    <section id="process" className="bg-[#FAF8F3] text-[#171C19] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#103C32]/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#103C32]/15 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#103C32] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D3B45F]" />
              <span>THE MAD MONKEY ENGINE</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#103C32] uppercase">
              Our 5-Step Creative Workflow.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E7771]">
              A battle-tested production pipeline engineered for rapid 24-48h turnaround without compromising cinematic excellence.
            </p>
          </Reveal>
        </div>

        {/* Tab Navigation Pill Bar */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`group shrink-0 inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full text-xs font-heading font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#103C32] text-white shadow-[0_8px_20px_rgba(16,60,50,0.25)]"
                      : "bg-white border border-[#103C32]/12 text-[#6E7771] hover:text-[#103C32] hover:border-[#103C32]/30"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                      isActive
                        ? "bg-[#D3B45F] text-[#103C32] font-bold"
                        : "bg-[#103C32]/10 text-[#103C32]"
                    }`}
                  >
                    {step.number}
                  </span>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{step.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active Tab Detailed Stage Card (EditoHub Style) */}
        <Reveal delay={0.15}>
          <div className="mt-8 rounded-3xl border border-[#103C32]/12 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(16,60,50,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Step Content */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between gap-4 border-b border-[#103C32]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#D3B45F]">
                      STAGE {currentStep.number} OF 05
                    </span>
                    <span className="text-[#103C32]/30">&bull;</span>
                    <span className="text-xs font-medium text-[#6E7771]">
                      {currentStep.subtitle}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-800">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{currentStep.turnaround}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#103C32] text-[#D3B45F] flex items-center justify-center shrink-0 shadow-md">
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#103C32]">
                      {currentStep.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#6E7771] leading-relaxed">
                      {currentStep.summary}
                    </p>
                  </div>
                </div>

                {/* Key Deliverables Checklist */}
                <div className="mt-8 pt-6 border-t border-[#103C32]/8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#103C32]/70">
                    STAGE DELIVERABLES & OUTCOMES
                  </span>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStep.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-medium text-[#171C19]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Stage Graphic & Quote */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-[#103C32]/12 bg-[#F5F2E9] p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#D3B45F]/20 blur-2xl" />

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#D3B45F]">
                      CREATIVE STANDARD
                    </div>
                    <blockquote className="mt-4 font-heading text-lg sm:text-xl font-bold text-[#103C32] leading-snug">
                      &ldquo;{currentStep.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#103C32]/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-[#103C32]">
                        100% Client Satisfaction Guaranteed
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveTab((activeTab + 1) % steps.length)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#103C32] hover:text-[#D3B45F] transition-colors"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
