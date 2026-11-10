"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { getWhatsAppEnquiryUrl } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "TURNAROUND",
    question: "How does the guaranteed 24-48h turnaround sprint operate?",
    answer:
      "Once raw assets or recording takes are uploaded to your private studio portal, our editing pipeline immediately ingests and structures the footage. You receive your first full master cut complete with sound design, color grade, and kinetic typography within 24 to 48 hours.",
  },
  {
    category: "CREATIVE SCRIPTING",
    question: "Do you write scripts and hooks or do we need to provide them?",
    answer:
      "We provide end-to-end creative direction. Our strategists reverse-engineer top performing videos in your niche, writing word-for-word scripts complete with 3-second visual hooks, teleprompter notes, and b-roll recommendations. If you already have scripts, we polish them for maximum viewer retention.",
  },
  {
    category: "REVISIONS POLICY",
    question: "What does '100% Unlimited Creative Revisions' actually mean?",
    answer:
      "You never have to count revision rounds or worry about surprise invoice add-ons. We refine cuts, pacing, music selections, subtitle styling, and color grading until you are completely confident in the final master.",
  },
  {
    category: "REMOTE CLIENTS",
    question: "How do you work with brands outside your immediate location?",
    answer:
      "Over 70% of our partner brands collaborate with us remotely across India and internationally. We provide high-speed cloud upload portals, dedicated smartphone / camera filming guidelines, and direct real-time communication via WhatsApp and Slack.",
  },
  {
    category: "EQUIPMENT & SOFTWARE",
    question: "What camera gear and post-production systems do you utilize?",
    answer:
      "We shoot on cinema-line Sony FX systems with prime cinema optics, commercial lighting rigs from Aputure / Godox, and Sennheiser wireless audio. In post, we edit in DaVinci Resolve Studio for filmic color science and Adobe Premiere / After Effects for kinetic motion design.",
  },
  {
    category: "BILLING & GST",
    question: "Is Mad Monkey Media a registered entity for GST tax invoicing?",
    answer:
      "Yes, Mad Monkey Media is a fully registered Indian business entity. We provide 100% compliant GST tax invoices for all client retainers and project sprints, enabling input tax credit for your business.",
  },
];

export function StudioFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#F6F2E9] text-[#191E1B] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
              <span className="text-[#B88D44] font-bold">&mdash; FREQUENTLY ASKED QUESTIONS &mdash;</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#191E1B]">
              Got questions?{" "}
              <span className="text-[#B88D44]">Clear answers.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#68716B]">
              Everything you need to know about partnering with Mad Monkey Media for your brand production.
            </p>
          </Reveal>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={faq.question} delay={idx * 0.04}>
                <div
                  className={`rounded-2xl transition-all duration-200 overflow-hidden bg-white ${
                    isOpen
                      ? "border-2 border-[#B88D44] shadow-md"
                      : "border border-[#EDE7DA] hover:border-[#B88D44]/40 shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="font-mono text-[10px] text-[#B88D44] uppercase tracking-widest block mb-1 font-bold">
                        {faq.category}
                      </span>
                      <span className="font-heading text-base sm:text-lg font-bold text-[#191E1B] pr-4">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-[#B88D44] text-white border-[#B88D44]"
                          : "bg-[#FAF7F2] text-[#191E1B] border-[#EDE7DA]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#68716B] leading-relaxed border-t border-[#EDE7DA] pt-4 font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Direct CTA */}
        <div className="mt-12 rounded-3xl bg-white border border-[#EDE7DA] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-[#FAF7F2] border border-[#EDE7DA] flex items-center justify-center text-[#B88D44] shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="block font-heading text-base font-bold text-[#191E1B]">
                Have a bespoke production requirement?
              </span>
              <span className="block text-xs font-mono text-[#68716B]">
                Our creative directors are available directly on WhatsApp.
              </span>
            </div>
          </div>

          <a
            href={getWhatsAppEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] text-white px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
