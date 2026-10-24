export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
  relatedProjectSlug: string;
  relatedProjectTitle: string;
  relatedCategory: string;
}

/**
 * Centralized Services Data — Mad Monkey Media
 * Covers all 8 required core capabilities without inflated or unsupported promises.
 */
export const services: ServiceItem[] = [
  {
    id: "content-production",
    number: "01",
    title: "Content Production",
    shortDescription:
      "Studio-grade visual assets—photography, product frames, and campaign visuals crafted around your brand identity.",
    description:
      "We plan, art-direct, and shoot original visual libraries for brands that want to move past generic templates. Every shoot is structured around your product's material quality, showroom atmosphere, and multi-channel usage needs.",
    deliverables: [
      "Creative concept & pre-production shot lists",
      "On-location or studio product & lifestyle photography",
      "Campaign key visuals for digital and print touchpoints",
      "Color-graded asset libraries formatted for web and social",
    ],
    relatedProjectSlug: "viral-jewellery-campaign",
    relatedProjectTitle: "Viral Jewellery Trend & Profile Transformation",
    relatedCategory: "Jewellery",
  },
  {
    id: "reels-production",
    number: "02",
    title: "Reels Production",
    shortDescription:
      "Retention-engineered vertical video production built natively for Instagram Reels and YouTube Shorts.",
    description:
      "Short-form video is often the first touchpoint a prospective customer has with your brand. We combine cinematic camera work, clean lighting, and purposeful pacing so your vertical content commands attention while looking unmistakably premium.",
    deliverables: [
      "Hook & narrative scripting for vertical formats",
      "Multi-angle 4K vertical filming & macro detail capture",
      "Rhythmic editing, sound design, and custom motion captions",
      "Platform-ready exports optimized for Instagram & YouTube",
    ],
    relatedProjectSlug: "3m-car-care-india-campaign",
    relatedProjectTitle: "3M Car Care — Product & Studio Demonstration",
    relatedCategory: "Automotive",
  },
  {
    id: "social-media-management",
    number: "03",
    title: "Social Media Management",
    shortDescription:
      "Cohesive grid architecture, editorial calendars, and disciplined publishing for brands that value consistency.",
    description:
      "A strong brand presence requires more than occasional viral moments. We manage your social channels end-to-end—maintaining visual cohesion, clear brand voice, and structured publishing schedules.",
    deliverables: [
      "Monthly content calendar & editorial planning",
      "Grid curation, carousel design, and copywriting",
      "Publishing workflow & profile optimization",
      "Periodic content performance review & creative refinement",
    ],
    relatedProjectSlug: "high-reach-social-content-systems",
    relatedProjectTitle: "High-Reach Reels & Editorial Social Systems",
    relatedCategory: "Digital Growth",
  },
  {
    id: "performance-marketing",
    number: "04",
    title: "Performance Marketing / Meta Ads",
    shortDescription:
      "Creative-first paid social campaigns designed to put your strongest brand assets in front of qualified audiences.",
    description:
      "Paid distribution works best when powered by compelling creative. We pair targeted Meta campaign architecture with purpose-built ad variations to help your brand reach relevant local and national audiences.",
    deliverables: [
      "Ad creative production (video hooks, static & carousel variants)",
      "Meta Ads campaign structure & audience segmentation",
      "Enquiry funnel & WhatsApp / landing page integration",
      "Creative testing and transparent campaign reporting",
    ],
    relatedProjectSlug: "architectural-real-estate-showcase",
    relatedProjectTitle: "Cinematic Property & Architectural Walkthrough",
    relatedCategory: "Real Estate",
  },
  {
    id: "brand-strategy",
    number: "05",
    title: "Brand Strategy",
    shortDescription:
      "Clear positioning, visual direction, and communication frameworks that define how your brand shows up.",
    description:
      "Before rolling cameras or launching campaigns, we clarify what sets your business apart. We define your visual tone, audience messaging pillars, and content direction so every creative asset feels intentional.",
    deliverables: [
      "Brand positioning & audience discovery framework",
      "Visual direction, moodboards, and tonal guidelines",
      "Content pillar architecture across digital touchpoints",
      "Campaign rollout roadmap",
    ],
    relatedProjectSlug: "industrial-manufacturing-brand-film",
    relatedProjectTitle: "Industrial Scale & Manufacturing Brand Story",
    relatedCategory: "Manufacturing",
  },
  {
    id: "personal-branding",
    number: "06",
    title: "Personal Branding",
    shortDescription:
      "Executive, founder, and specialist positioning through structured thought-leadership video production.",
    description:
      "People connect with founders, creators, and industry specialists. We build streamlined recording and post-production systems that respect your schedule while presenting your expertise with authority.",
    deliverables: [
      "Personal brand positioning & content pillar mapping",
      "Topic research & conversational script outlines",
      "Batch studio or office filming sessions",
      "Signature editing, typography, and profile visual alignment",
    ],
    relatedProjectSlug: "ca-vaibhav-jain-personal-branding",
    relatedProjectTitle: "Executive & Creator Personal Brand System",
    relatedCategory: "Personal Branding",
  },
  {
    id: "website-development",
    number: "07",
    title: "Website Development",
    shortDescription:
      "Modern, responsive, editorial websites engineered for speed, clarity, and seamless client enquiries.",
    description:
      "Your website is your digital flagship. We design and engineer bespoke, fast-loading websites that showcase your work with editorial polish and make it effortless for prospective clients to initiate a conversation.",
    deliverables: [
      "Bespoke UI/UX design & luxury editorial art direction",
      "Responsive full-stack development (Next.js, React, TypeScript)",
      "Portfolio, showroom, and service architecture",
      "Technical SEO foundation, performance optimization & WhatsApp/email integration",
    ],
    relatedProjectSlug: "viral-jewellery-campaign",
    relatedProjectTitle: "Viral Jewellery Trend & Profile Transformation",
    relatedCategory: "Jewellery",
  },
  {
    id: "video-production",
    number: "08",
    title: "Video Production",
    shortDescription:
      "Cinematic brand films, showroom walkthroughs, and industrial documentaries filmed with precision.",
    description:
      "When your story calls for widescreen depth, we produce flagship brand films, architectural walkthroughs, and commercial productions with dedicated lighting, stabilized movement, and refined color grading.",
    deliverables: [
      "Storyboarding, location scouting, and production scheduling",
      "Cinema camera direction, lighting, and stabilized movement",
      "Editorial assembly, custom sound design, and color grading",
      "Master deliverables in horizontal (16:9) and vertical (9:16) ratios",
    ],
    relatedProjectSlug: "automotive-detailing-studios",
    relatedProjectTitle: "Precision Automotive Detailing Showcase",
    relatedCategory: "Automotive",
  },
];
