"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const STUDIO_FAQS: FAQItem[] = [
  {
    id: "faq-services-scope",
    category: "Capabilities",
    question: "What services does Mad Monkey Media handle in-house?",
    answer:
      "We operate as an end-to-end creative production and digital marketing studio. Our core services cover Creative Production, Commercial Video Production, Reels & Short-Form Vertical Content, Social Media Management, Performance Marketing (Meta & Google Ads), Brand Strategy, Founder & Executive Personal Branding, and Custom Website Development.",
  },
  {
    id: "faq-engagement-models",
    category: "Working Together",
    question: "Do you work on monthly retainers or standalone campaign shoots?",
    answer:
      "Both. Many brands partner with us on ongoing monthly retainers that combine scheduled on-location shoots, vertical reels, graphic design, and complete social media management. We also execute standalone commercial brand films, showroom launches, and website builds with clearly defined project scopes.",
  },
  {
    id: "faq-industries",
    category: "Industries",
    question: "Which industries do you specialize in?",
    answer:
      "Our portfolio includes dedicated production and growth campaigns for jewellery brands and showrooms, automotive detailing studios and car care brands, architectural real estate developments, industrial and manufacturing companies, retail showrooms, and professional personal brands.",
  },
  {
    id: "faq-production-workflow",
    category: "Production Process",
    question: "How does a typical content or video production engagement work?",
    answer:
      "Every engagement follows four structured stages: (1) Discovery & Positioning to align on your brand voice and commercial goals, (2) Scripting & Pre-Production with shot lists and creative direction, (3) On-Location Direction & Post-Production including color grading and sound design, and (4) Platform-Native Deployment across Instagram, YouTube, LinkedIn, or paid ad channels.",
  },
  {
    id: "faq-getting-started",
    category: "Enquiries",
    question: "How quickly can we start a project or get a custom proposal?",
    answer:
      "You can reach us directly on WhatsApp (+91 7470637758), email us at contact@themadmonkey.in, or submit the project enquiry form on our Contact page. Once we review your requirements and timeline, we share a tailored scope of work and production schedule.",
  },
];

interface FAQAccordionProps {
  items?: FAQItem[];
  defaultOpenIndex?: number;
}

export function FAQAccordion({
  items = STUDIO_FAQS,
  defaultOpenIndex = 0,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="divide-y divide-studio-cream/10 rounded-3xl border border-studio-cream/12 bg-studio-charcoalDeep overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${item.id}`;
        const triggerId = `faq-trigger-${item.id}`;

        return (
          <div
            key={item.id}
            className={`transition-colors duration-200 ${
              isOpen
                ? "bg-studio-charcoalSurface/55"
                : "bg-studio-charcoalDeep hover:bg-studio-charcoalSurface/30"
            }`}
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-4 px-6 py-6 sm:px-8 sm:py-7 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-studio-lime"
              >
                <div className="space-y-1.5 pr-4">
                  {item.category && (
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-studio-lime">
                      {item.category}
                    </span>
                  )}
                  <span className="block font-heading text-lg sm:text-xl font-bold tracking-tight text-studio-cream">
                    {item.question}
                  </span>
                </div>

                <span
                  className={`mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors duration-200 ${
                    isOpen
                      ? "border-studio-lime bg-studio-lime text-studio-ink"
                      : "border-studio-cream/15 bg-studio-charcoal text-studio-cream"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  animate={
                    prefersReducedMotion
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 1, height: "auto" }
                  }
                  exit={
                    prefersReducedMotion
                      ? { opacity: 0, height: 0 }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                    <p className="max-w-3xl text-sm sm:text-base text-studio-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
