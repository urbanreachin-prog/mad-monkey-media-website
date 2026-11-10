"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { getWhatsAppEnquiryUrl } from "@/config/site";

export function FloatingWhatsApp() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#191E1B] text-white border border-[#EDE7DA] shadow-lg flex items-center justify-center hover:bg-[#B88D44] hover:-translate-y-1 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={getWhatsAppEnquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 shadow-[0_8px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.55)] hover:-translate-y-1 transition-all"
        aria-label="Chat with Mad Monkey Media on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-heading text-xs font-bold tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
