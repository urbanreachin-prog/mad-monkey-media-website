import portfolioManifest from "./portfolio-manifest.json";

export type ProjectCategory =
  | "Jewellery"
  | "Automotive"
  | "Real Estate"
  | "Manufacturing"
  | "Personal Branding"
  | "Other";

export const PROJECT_CATEGORIES: readonly ("All" | ProjectCategory)[] = [
  "All",
  "Jewellery",
  "Automotive",
  "Real Estate",
  "Manufacturing",
  "Personal Branding",
  "Other",
] as const;

/**
 * Portfolio Video Item (Portrait 9:16 Work Archive)
 * Automatically synced with `public/videos/projects/` via `npm.cmd run portfolio:sync`
 * and enriched with verified metadata below.
 */
export interface PortfolioItem {
  /** Unique URL-safe slug/id derived from filename */
  id: string;
  /** Original video filename inside `public/videos/projects/` */
  filename: string;
  /** Public URL path to the video file */
  video: string;
  /** Public URL path to the extracted real frame thumbnail (.webp/.jpg/.png) */
  thumbnail: string;
  /** Industry category for filtering on /work */
  category: ProjectCategory;
  /**
   * Confirmed view count to display on the card (number or formatted string such as "322K+ VIEWS", "4.7M+ VIEWS").
   * Empty/null when no detectable or confirmed view count exists.
   */
  views: number | string | null;
  /**
   * Editable suggested view count extracted from the video filename (e.g. "322K+ views", "4.7M+ views").
   * Used only after `viewsConfirmed` is set to `true` in `PORTFOLIO_METADATA`.
   */
  suggestedViews?: string | null;
  /**
   * Whether the view count has been confirmed in portfolio data for public display on cards.
   */
  viewsConfirmed: boolean;
  /** Optional verified client name — omitted on card if not set */
  client?: string;
  /** Optional clean title — omitted on card if not set */
  title?: string;
  /** Whether to prioritize this video at the top of the Work gallery */
  featured: boolean;
  /** Optional sort order (lower numbers appear first) */
  order?: number;
}

export interface PortfolioMetadataOverride {
  category?: ProjectCategory;
  /**
   * Suggested view count extracted from filename (editable metadata).
   */
  suggestedViews?: string | null;
  /**
   * Set confirmed views here (e.g. "322K+ VIEWS", "4.7M+ VIEWS", or 120000).
   * Leave as `null` when views have not yet been provided.
   */
  views?: number | string | null;
  /**
   * Mark as `true` to display the view count on the portfolio card.
   * Keep `false` while awaiting manual confirmation.
   */
  viewsConfirmed?: boolean;
  client?: string;
  title?: string;
  featured?: boolean;
  order?: number;
}

/**
 * ============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION — EDIT VIEWS, CONFIRMATION & CATEGORIES HERE
 * ============================================================================
 * - Every video discovered in `public/videos/projects/` is listed here by its `id`.
 * - Filenames with clearly identifiable view counts have their extracted value in
 *   `suggestedViews` and `views`, and are marked `viewsConfirmed: true` so they
 *   display cleanly on the cards (e.g. "322K+ VIEWS"). You can edit `views` or
 *   toggle `viewsConfirmed: false` on any entry at any time.
 * - Videos without a detectable count in their filename keep `views: null` and
 *   `viewsConfirmed: false` until manually confirmed.
 */
export const PORTFOLIO_METADATA: Record<string, PortfolioMetadataOverride> = {
  // --- JEWELLERY ---
  "jewellery-trend-campaign": {
    category: "Jewellery",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    client: "Super Jewellers",
    featured: true,
    order: 1,
  },
  "4-7million-plus-views": {
    category: "Jewellery",
    suggestedViews: "4.7M+ views",
    views: "4.7M+ VIEWS",
    viewsConfirmed: true,
    client: "Jinendra Jain · Super Jewellers",
    featured: true,
    order: 2,
  },
  "110k-plus-views": {
    category: "Jewellery",
    suggestedViews: "110K+ views",
    views: "110K+ VIEWS",
    viewsConfirmed: true,
    client: "Super Jewellers",
    featured: true,
    order: 3,
  },
  "112k-plus-views": {
    category: "Jewellery",
    suggestedViews: "112K+ views",
    views: "112K+ VIEWS",
    viewsConfirmed: true,
    client: "Jinendra Jain (@jinendra04)",
    featured: false,
    order: 9,
  },

  // --- AUTOMOTIVE ---
  "3m-car-care-india": {
    category: "Automotive",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    client: "3M Car Care",
    featured: true,
    order: 4,
  },
  "automotive-detailing-studio": {
    category: "Automotive",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: true,
    order: 5,
  },
  "322k-plus-views": {
    category: "Automotive",
    suggestedViews: "322K+ views",
    views: "322K+ VIEWS",
    viewsConfirmed: true,
    featured: true,
    order: 6,
  },
  "tvs-promotional-video": {
    category: "Automotive",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: false,
    order: 10,
  },
  "45-6k-views": {
    category: "Automotive",
    suggestedViews: "45.6K views",
    views: "45.6K VIEWS",
    viewsConfirmed: true,
    featured: false,
    order: 11,
  },
  "most-popular-one": {
    category: "Automotive",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: false,
    order: 12,
  },

  // --- REAL ESTATE ---
  "real-estate-showcase": {
    category: "Real Estate",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: true,
    order: 7,
  },

  // --- MANUFACTURING ---
  "manufacturing-brand-film": {
    category: "Manufacturing",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: true,
    order: 8,
  },
  "68k-plus-views": {
    category: "Manufacturing",
    suggestedViews: "68K+ views",
    views: "68K+ VIEWS",
    viewsConfirmed: true,
    featured: false,
    order: 13,
  },

  // --- PERSONAL BRANDING ---
  "ca-vaibhav-jain-personal-branding": {
    category: "Personal Branding",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    client: "CA Vaibhav Jain",
    featured: true,
    order: 14,
  },

  // --- OTHER / GENERAL CAMPAIGNS ---
  "200million-plus-views": {
    category: "Other",
    suggestedViews: "200M+ views",
    views: "200M+ VIEWS",
    viewsConfirmed: true,
    featured: true,
    order: 0,
  },
  "6-3million-plus-views": {
    category: "Other",
    suggestedViews: "6.3M+ views",
    views: "6.3M+ VIEWS",
    viewsConfirmed: true,
    featured: false,
    order: 16,
  },
  "commercial-growth-campaign": {
    category: "Other",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: false,
    order: 17,
  },
  "before-vs-after": {
    category: "Other",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: false,
    order: 18,
  },
  "ai-talking-heads": {
    category: "Other",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: false,
    order: 19,
  },
  "gym-edits": {
    category: "Other",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: false,
    order: 20,
  },
  "mad-monkey-edit": {
    category: "Other",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: false,
    order: 21,
  },
  "medical-genre": {
    category: "Other",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: false,
    order: 22,
  },
  "most-professional-one": {
    category: "Other",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: false,
    order: 23,
  },
  "viral-campaign-reel": {
    category: "Other",
    suggestedViews: null,
    views: null,
    viewsConfirmed: false,
    featured: false,
    order: 24,
  },
};

/**
 * Formats a verified view count into the studio display format:
 * e.g. "120K VIEWS", "3L VIEWS", "22L VIEWS", "1.2M VIEWS", "4.7M VIEWS".
 * Preserves exact custom formatting when a string is configured.
 */
export function formatPortfolioViews(
  views: number | string | null | undefined
): string | null {
  if (views === null || views === undefined) return null;

  if (typeof views === "string") {
    const trimmed = views.trim();
    if (!trimmed) return null;
    if (/views$/i.test(trimmed)) {
      return trimmed.toUpperCase();
    }
    return `${trimmed.toUpperCase()} VIEWS`;
  }

  if (typeof views === "number" && Number.isFinite(views) && views > 0) {
    if (views >= 1_000_000) {
      const m = (views / 1_000_000).toFixed(1).replace(/\.0$/, "");
      return `${m}M VIEWS`;
    }
    if (views >= 1_000) {
      const k = (views / 1_000).toFixed(1).replace(/\.0$/, "");
      return `${k}K VIEWS`;
    }
    return `${views.toLocaleString("en-IN")} VIEWS`;
  }

  return null;
}

const VALID_CATEGORIES = new Set<ProjectCategory>([
  "Jewellery",
  "Automotive",
  "Real Estate",
  "Manufacturing",
  "Personal Branding",
  "Other",
]);

function normalizeCategory(raw: string | undefined): ProjectCategory {
  if (raw && VALID_CATEGORIES.has(raw as ProjectCategory)) {
    return raw as ProjectCategory;
  }
  return "Other";
}

/**
 * Merged list of all discovered portfolio video items from `portfolio-manifest.json`
 * combined with verified overrides in `PORTFOLIO_METADATA`.
 */
export const portfolioItems: PortfolioItem[] = portfolioManifest.items
  .map((manifestItem, index): PortfolioItem => {
    const override = PORTFOLIO_METADATA[manifestItem.id] ?? {};
    const category =
      override.category ?? normalizeCategory(manifestItem.inferredCategory);

    const suggestedViews =
      override.suggestedViews ??
      manifestItem.suggestedViews ??
      manifestItem.suggestedViewsFromFilename ??
      null;
    const viewsConfirmed = Boolean(override.viewsConfirmed);
    const activeViews = viewsConfirmed
      ? override.views ?? suggestedViews ?? null
      : null;

    return {
      id: manifestItem.id,
      filename: manifestItem.filename,
      video: manifestItem.video,
      thumbnail: manifestItem.thumbnail,
      category,
      views: activeViews,
      suggestedViews,
      viewsConfirmed,
      client: override.client,
      title: override.title,
      featured: override.featured ?? false,
      order: override.order ?? 100 + index,
    };
  })
  .sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }
    return (a.order ?? 999) - (b.order ?? 999);
  });

export function getPortfolioItemsByCategory(
  category: "All" | ProjectCategory
): PortfolioItem[] {
  if (category === "All") {
    return portfolioItems;
  }
  return portfolioItems.filter((item) => item.category === category);
}

/**
 * Returns "All" plus all categories that have at least one video item.
 */
export function getActivePortfolioCategories(): ("All" | ProjectCategory)[] {
  return PROJECT_CATEGORIES.filter(
    (cat) => cat === "All" || getPortfolioItemsByCategory(cat).length > 0
  );
}

// ============================================================================
// CASE STUDY ARCHIVE DATA (Used by /work/[slug], /services, and /sitemap.xml)
// ============================================================================

export interface ProjectImageItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectVideoItem {
  src: string;
  poster: string;
  title: string;
}

export interface ClientTestimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface Project {
  slug: string;
  title: string;
  client?: string;
  category: ProjectCategory;
  industryLabel: string;
  description: string;
  coverImage: string;
  coverVideo?: string;
  services: string[];
  overview?: string;
  challenge?: string;
  creativeApproach?: string;
  imageGallery?: ProjectImageItem[];
  videoGallery?: ProjectVideoItem[];
  verifiedResults?: string[];
  clientTestimonial?: ClientTestimonial;
  nextProject?: string;
  featured: boolean;
  editorialSpan?: "large" | "standard" | "wide";
}

export const projects: Project[] = [
  {
    slug: "viral-jewellery-campaign",
    title: "Viral Jewellery Trend & Profile Transformation",
    client: "Jinendra Jain (@jinendra04) · Super Jewellers",
    category: "Jewellery",
    industryLabel: "Jewellery & Luxury Showroom",
    description:
      "Short-form creative direction and social growth system crafted to showcase fine jewellery craftsmanship while building an engaged digital community.",
    coverImage: "/images/portfolio/thumbnails/jewellery-trend-campaign.webp",
    coverVideo: "/videos/projects/jewellery-trend-campaign.mp4",
    services: [
      "Reels Production",
      "Content Production",
      "Social Media Management",
      "Personal Branding",
    ],
    overview:
      "Jewellery buyers rely on trust, visual detail, and brand desirability. For Jinendra Jain (@jinendra04 / Super Jewellers), we combined macro-level product cinematography with culturally resonant short-form storytelling to elevate both the showroom brand and founder presence.",
    challenge:
      "Fine jewellery often loses its brilliance in standard mobile social posts. The objective was to retain the luxury aesthetic of the pieces while creating formats that hold viewer attention on Instagram Reels.",
    creativeApproach:
      "We designed a repeatable short-form production language: controlled lighting on precious metals and stones, crisp pacing, and founder-led storytelling that humanized the showroom experience.",
    imageGallery: [
      {
        src: "/images/projects/jinendra-profile-before.png",
        alt: "Jinendra Jain (@jinendra04) Instagram profile before campaign at 1,240 followers",
        caption:
          "Baseline profile snapshot (@jinendra04 — 1,240 followers, 300 posts)",
      },
      {
        src: "/images/projects/jinendra-profile-after.png",
        alt: "Jinendra Jain (@jinendra04) Instagram profile after campaign at 13.3k followers",
        caption:
          "Documented profile progression (@jinendra04 — 13.3k followers, verified presence)",
      },
    ],
    videoGallery: [
      {
        src: "/videos/projects/jewellery-trend-campaign.mp4",
        poster: "/images/portfolio/thumbnails/jewellery-trend-campaign.webp",
        title: "Jewellery Campaign Reel",
      },
    ],
    verifiedResults: [
      "Documented Instagram profile growth from 1,240 followers to 13.3K followers (@jinendra04)",
      "Consistent short-form reel production tailored for fine jewellery presentation",
    ],
    nextProject: "automotive-detailing-studios",
    featured: true,
    editorialSpan: "large",
  },
  {
    slug: "automotive-detailing-studios",
    title: "Precision Automotive Detailing Showcase",
    category: "Automotive",
    industryLabel: "Automotive & Detailing Studio",
    description:
      "High-contrast studio cinematography capturing paint correction, ceramic coating reflections, and workshop craftsmanship.",
    coverImage: "/images/portfolio/thumbnails/automotive-detailing-studio.webp",
    coverVideo: "/videos/projects/automotive-detailing-studio.mp4",
    services: [
      "Video Production",
      "Reels Production",
      "Content Production",
      "Social Media Management",
    ],
    overview:
      "In the luxury automotive care and detailing sector, visual proof is everything. Vehicle owners judge a studio by the depth of its gloss, the cleanliness of its bay, and the precision of its technicians.",
    challenge:
      "Standing out in a crowded local detailing market without relying on discount-driven promotions required making the technical craft itself look cinematic and authoritative.",
    creativeApproach:
      "We filmed tight specular highlights, tactile application sequences, and dramatic before-and-after surface finishes under studio lighting to communicate uncompromising workshop standards.",
    videoGallery: [
      {
        src: "/videos/projects/automotive-detailing-studio.mp4",
        poster: "/images/portfolio/thumbnails/automotive-detailing-studio.webp",
        title: "Detailing Studio Production Reel",
      },
    ],
    nextProject: "3m-car-care-india-campaign",
    featured: true,
    editorialSpan: "standard",
  },
  {
    slug: "architectural-real-estate-showcase",
    title: "Cinematic Property & Architectural Walkthrough",
    category: "Real Estate",
    industryLabel: "Real Estate & Architecture",
    description:
      "Spatial storytelling and smooth movement sequences designed to present premium developments with warmth, scale, and architectural clarity.",
    coverImage: "/images/portfolio/thumbnails/real-estate-showcase.webp",
    coverVideo: "/videos/projects/real-estate-showcase.mp4",
    services: [
      "Video Production",
      "Content Production",
      "Brand Strategy",
      "Performance Marketing / Meta Ads",
    ],
    overview:
      "We produced a property showcase film that moves beyond static room walkthroughs, focusing instead on natural light, spatial flow, and the lifestyle atmosphere of the residence.",
    challenge:
      "Conventional property videos often feel purely informational. Discerning buyers respond to how a space feels, how light enters the architecture, and how rooms connect.",
    creativeApproach:
      "Using stabilized camera movement, disciplined framing, and natural-light grading, we structured the film to guide prospective buyers through the property with a sense of calm luxury.",
    videoGallery: [
      {
        src: "/videos/projects/real-estate-showcase.mp4",
        poster: "/images/portfolio/thumbnails/real-estate-showcase.webp",
        title: "Real Estate Architectural Film",
      },
    ],
    nextProject: "industrial-manufacturing-brand-film",
    featured: true,
    editorialSpan: "wide",
  },
  {
    slug: "industrial-manufacturing-brand-film",
    title: "Industrial Scale & Manufacturing Brand Story",
    category: "Manufacturing",
    industryLabel: "Manufacturing & Industrial",
    description:
      "Visualizing heavy machinery, shop-floor discipline, and engineering reliability for modern B2B brand perception.",
    coverImage: "/images/portfolio/thumbnails/manufacturing-brand-film.webp",
    coverVideo: "/videos/projects/manufacturing-brand-film.mp4",
    services: ["Video Production", "Content Production", "Brand Strategy"],
    overview:
      "Manufacturing enterprises often possess extraordinary infrastructure that remains invisible to prospective B2B partners and distributors. This production translated industrial capability into a cohesive visual narrative.",
    challenge:
      "Industrial environments are complex, fast-moving, and challenging to light. The goal was to capture authentic factory operations while maintaining a clean, authoritative visual standard.",
    creativeApproach:
      "We focused on rhythm, machinery precision, quality inspection stages, and human oversight—creating a visual asset suitable for both corporate presentations and digital channels.",
    videoGallery: [
      {
        src: "/videos/projects/manufacturing-brand-film.mp4",
        poster: "/images/portfolio/thumbnails/manufacturing-brand-film.webp",
        title: "Manufacturing Operations Film",
      },
    ],
    nextProject: "3m-car-care-india-campaign",
    featured: true,
    editorialSpan: "standard",
  },
  {
    slug: "3m-car-care-india-campaign",
    title: "3M Car Care — Product & Studio Demonstration",
    client: "3M Car Care (India Campaign Production)",
    category: "Automotive",
    industryLabel: "Automotive Care & Retail",
    description:
      "Demonstration-led social video production highlighting surface protection technology and real-world automotive care applications.",
    coverImage: "/images/portfolio/thumbnails/3m-car-care-india.webp",
    coverVideo: "/videos/projects/3m-car-care-india.mp4",
    services: ["Reels Production", "Content Production", "Video Production"],
    overview:
      "Created for automotive care communication, this production centered on clear visual demonstration—showing vehicle owners the tangible process and finish quality of professional car care treatments.",
    challenge:
      "Technical automotive care products require clear, credible visual proof in the first three seconds of a vertical video without feeling like a traditional hard-sell commercial.",
    creativeApproach:
      "We paired tight macro shots of product application with clean, high-contrast studio lighting so viewers could immediately see surface clarity and finish quality.",
    videoGallery: [
      {
        src: "/videos/projects/3m-car-care-india.mp4",
        poster: "/images/portfolio/thumbnails/3m-car-care-india.webp",
        title: "3M Car Care Demonstration Reel",
      },
    ],
    nextProject: "ca-vaibhav-jain-personal-branding",
    featured: true,
    editorialSpan: "large",
  },
  {
    slug: "ca-vaibhav-jain-personal-branding",
    title: "Executive & Creator Personal Brand System",
    client: "CA Vaibhav Jain (@ca.vaibhavjain)",
    category: "Personal Branding",
    industryLabel: "Personal Branding & Finance Creator",
    description:
      "End-to-end personal branding production, scripting structure, and short-form video execution built for authority and audience retention.",
    coverImage:
      "/images/portfolio/thumbnails/ca-vaibhav-jain-personal-branding.webp",
    coverVideo: "/videos/projects/ca-vaibhav-jain-personal-branding.mp4",
    services: [
      "Personal Branding",
      "Reels Production",
      "Content Production",
      "Social Media Management",
    ],
    overview:
      "Building an authoritative personal brand requires clarity of thought matched by visual and audio polish. We worked on structured short-form production that keeps complex insights engaging and accessible.",
    challenge:
      "Professionals and subject-matter experts have limited recording time and need a streamlined production workflow that delivers consistent quality across every episode.",
    creativeApproach:
      "We established a signature framing, crisp typography, and retention-focused editing cadence that keeps attention on the speaker's expertise without visual clutter.",
    videoGallery: [
      {
        src: "/videos/projects/ca-vaibhav-jain-personal-branding.mp4",
        poster:
          "/images/portfolio/thumbnails/ca-vaibhav-jain-personal-branding.webp",
        title: "CA Vaibhav Jain Personal Brand Reel",
      },
      {
        src: "/videos/projects/viral-campaign-reel.mp4",
        poster: "/images/portfolio/thumbnails/viral-campaign-reel.webp",
        title: "Short-Form Authority Reel",
      },
    ],
    nextProject: "high-reach-social-content-systems",
    featured: true,
    editorialSpan: "wide",
  },
  {
    slug: "high-reach-social-content-systems",
    title: "High-Reach Reels & Editorial Social Systems",
    client: "Mad Monkey Media Studio Productions",
    category: "Other",
    industryLabel: "Digital Growth & Commercial Campaigns",
    description:
      "A curated collection of high-retention vertical reels, commercial retail productions, and structured social media publishing systems.",
    coverImage: "/images/projects/social-campaign-01.jpg",
    coverVideo: "/videos/projects/viral-campaign-reel.mp4",
    services: [
      "Social Media Management",
      "Reels Production",
      "Performance Marketing / Meta Ads",
      "Brand Strategy",
    ],
    overview:
      "Consistent digital presence combines standout hero reels with disciplined weekly publishing systems. This showcase brings together our viral short-form productions, commercial retail films, and editorial social design series.",
    challenge:
      "Brands often struggle to bridge the gap between one-off high-production videos and the day-to-day cadence required to stay relevant on social platforms.",
    creativeApproach:
      "We pair high-impact video production with structured visual templates and audience-timed publishing schedules so every piece of content supports a cohesive brand identity.",
    imageGallery: [
      {
        src: "/images/projects/social-campaign-01.jpg",
        alt: "Mad Monkey Media Monday publishing cadence visual",
        caption: "Editorial social series — Monday publishing framework",
      },
      {
        src: "/images/projects/social-campaign-02.jpg",
        alt: "Mad Monkey Media Tuesday publishing cadence visual",
        caption: "Editorial social series — Tuesday publishing framework",
      },
      {
        src: "/images/projects/social-campaign-03.jpg",
        alt: "Mad Monkey Media Wednesday publishing cadence visual",
        caption: "Editorial social series — Wednesday publishing framework",
      },
      {
        src: "/images/projects/social-campaign-04.jpg",
        alt: "Mad Monkey Media Thursday publishing cadence visual",
        caption: "Editorial social series — Thursday publishing framework",
      },
    ],
    videoGallery: [
      {
        src: "/videos/projects/viral-campaign-reel.mp4",
        poster: "/images/portfolio/thumbnails/viral-campaign-reel.webp",
        title: "High-Reach Short-Form Production",
      },
      {
        src: "/videos/projects/commercial-growth-campaign.mp4",
        poster: "/images/portfolio/thumbnails/commercial-growth-campaign.webp",
        title: "Commercial Retail & Showroom Campaign",
      },
    ],
    nextProject: "viral-jewellery-campaign",
    featured: false,
    editorialSpan: "standard",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 6);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(
  category: "All" | ProjectCategory
): Project[] {
  if (category === "All") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}
