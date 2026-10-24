/**
 * Centralized Business Configuration — Mad Monkey Media
 * All contact destinations, canonical URLs, and brand identity details live here.
 */
export const siteConfig = {
  businessName: "Mad Monkey Media",
  shortName: "Mad Monkey",
  tagline: "Creative Production & Digital Marketing",
  brandPromise:
    "Creative that captures attention, content that communicates value, and digital experiences that help brands stand out.",
  productionDomain: "https://themadmonkey.in",
  whatsappNumber: "+91 7470637758",
  whatsappNumberRaw: "917470637758",
  whatsappUrl: "https://wa.me/917470637758",
  email: "contact@themadmonkey.in",
  mailtoUrl: "mailto:contact@themadmonkey.in",
  instagramUrl: "https://www.instagram.com/themadmonkeymedia.in/",
  instagramHandle: "@themadmonkeymedia.in",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ],
  footerNavigation: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  targetIndustries: [
    "Jewellery brands and showrooms",
    "Automotive businesses and detailing studios",
    "Real estate businesses",
    "Manufacturing companies",
    "Retail brands and premium showrooms",
    "Personal brands",
    "Businesses that need professional content and digital marketing",
  ],
} as const;

/**
 * Helper to generate a prefilled WhatsApp URL with properly URL-encoded text.
 */
export function getWhatsAppEnquiryUrl(message?: string): string {
  const defaultMessage =
    "Hi Mad Monkey Media, I would like to discuss a creative project for my brand.";
  const text = encodeURIComponent(message?.trim() || defaultMessage);
  return `${siteConfig.whatsappUrl}?text=${text}`;
}
