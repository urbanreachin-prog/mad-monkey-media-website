"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";
import { getWhatsAppEnquiryUrl } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does your guaranteed 24-48h turnaround work?",
    answer:
      "Once raw footage or shoot briefs are uploaded into your dedicated client portal, our post-production team immediately begins ingesting, rhythm cutting, and audio design. You will receive your first full master cut within 24 to 48 hours for review.",
  },
  {
    question: "Do you write scripts and hooks, or do we have to provide them?",
    answer:
      "We provide end-to-end creative direction. Our team analyzes your industry, researches trending high-retention formats, and writes word-for-word scripts complete with hook angles, visual cues, and b-roll recommendations. If you already have scripts, we polish them for maximum watch time.",
  },
  {
    question: "What does 'Unlimited Creative Revisions' actually mean?",
    answer:
      "It means you never have to worry about counting revision rounds or facing surprise invoices. We tweak cuts, pacing, music choices, color grading, and subtitle styling until you are 100% satisfied with the final delivery.",
  },
  {
    question: "What if our team is located in another city or state in India?",
    answer:
      "Over 70% of our clients work with us remotely! We provide high-speed cloud upload portals, detailed smartphone / camera recording guidelines, and direct WhatsApp / Slack communication. For on-location commercial shoots, our cinema production crew travels across India.",
  },
  {
    question: "What equipment and post-production software do you utilize?",
    answer:
      "We shoot on cinema-line Sony FX systems with prime cinema glass, Godox / Aputure commercial lighting, and Sennheiser wireless audio. In post, we work in DaVinci Resolve Studio for color science and Adobe Premiere Pro & After Effects for kinetic motion graphics.",
  },
  {
    question: "Can we pause or cancel our monthly retainer at any time?",
    answer:
      "Yes. Our retainers operate on simple 30-day billing cycles with zero locked-in long-term contracts. You can scale your tier up, pause during seasonal downtimes, or cancel anytime with simple notice.",
  },
  {
    question: "Is Mad Monkey Media a registered business for GST invoicing?",
    answer:
      "Yes, Mad Monkey Media is a fully registered Indian business entity. We provide 100% compliant GST tax invoices for all client engagements, allowing business expense tax deductions.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#FAF8F3] text-[#171C19] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#103C32]/10 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#103C32]/15 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#103C32] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D3B45F]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#103C32] uppercase">
              Got Questions? We Have Answers.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E7771]">
              Everything you need to know about partnering with Mad Monkey Media for your brand video production.
            </p>
          </Reveal>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={faq.question} delay={idx * 0.04}>
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#103C32]/30 bg-white shadow-[0_8px_24px_rgba(16,60,50,0.06)]"
                      : "border-[#103C32]/10 bg-white/70 hover:bg-white hover:border-[#103C32]/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-[#103C32] pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-[#103C32] text-white border-[#103C32]"
                          : "bg-[#F5F2E9] text-[#103C32] border-[#103C32]/15"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#6E7771] leading-relaxed border-t border-[#103C32]/8 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Direct Query CTA */}
        <div className="mt-12 rounded-2xl bg-[#103C32]/8 border border-[#103C32]/15 p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#103C32] text-[#D3B45F] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-heading text-sm font-bold text-[#103C32]">
                Have a project-specific question?
              </span>
              <span className="block text-xs text-[#6E7771]">
                Our creative directors are available directly on WhatsApp.
              </span>
            </div>
          </div>

          <a
            href={getWhatsAppEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#103C32] hover:bg-[#0B2822] text-[#F5F2E9] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
