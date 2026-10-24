import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Compass,
  Film,
  Layers,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";
import { getWhatsAppEnquiryUrl, siteConfig } from "@/config/site";
import { ServiceVisualGraphic } from "@/components/services/ServiceVisualGraphic";
import { GlassCTA } from "@/components/glass/GlassCTA";
import { CapabilitiesMarquee } from "@/components/ui/CapabilitiesMarquee";
import { FAQAccordion, STUDIO_FAQS } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Services — Creative Production, Reels & Digital Growth",
  description:
    "Explore Mad Monkey Media's core capabilities: Content Production, Reels Production, Social Media Management, Performance Marketing, Brand Strategy, Personal Branding, Website Development, and Video Production.",
  alternates: {
    canonical: "/services",
  },
};

const servicePhilosophyCards = [
  {
    number: "01",
    title: "Content With a Plan",
    description:
      "Every shoot and social calendar has a clear objective. We plan content around audience insight, brand positioning, and platform context.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Scroll-Stopping Production",
    description:
      "Original, cinema-grade visual craft that earns organic attention—from macro jewellery cinematography to architectural and industrial films.",
    icon: Film,
  },
  {
    number: "03",
    title: "Full-Funnel Execution",
    description:
      "Reels, carousels, brand identity, paid Meta campaigns, and fast web experiences working together as a cohesive digital ecosystem.",
    icon: Layers,
  },
  {
    number: "04",
    title: "Consistent Studio Cadence",
    description:
      "Trends and platforms evolve fast. Our structured retainers and production schedules keep your brand visibly ahead without operational stress.",
    icon: Sparkles,
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Creative Production & Digital Marketing Services",
    serviceType:
      "Video Production, Reels Production, Social Media Management, Performance Marketing, Brand Strategy & Website Development",
    provider: {
      "@type": "Organization",
      name: siteConfig.businessName,
      url: siteConfig.productionDomain,
    },
    areaServed: "India",
    description: siteConfig.brandPromise,
  };

  return (
    <div className="overflow-x-hidden bg-studio-charcoal text-studio-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. SERVICES HERO */}
      <section className="studio-dark-grid relative pt-10 pb-14 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-studio-cream/15 bg-studio-charcoalDeep/80 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-studio-cream">
                <span
                  className="h-2 w-2 rounded-full bg-studio-lime shadow-[0_0_10px_#D8FF3E]"
                  aria-hidden="true"
                />
                <span>OUR SERVICES &middot; STUDIO CAPABILITIES</span>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-studio-lime/35 bg-studio-lime/10 px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-studio-lime">
                <span
                  className="h-1.5 w-1.5 rotate-45 bg-studio-lime"
                  aria-hidden="true"
                />
                <span>08 Core Disciplines</span>
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl font-heading text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tightest text-studio-cream leading-[1.03]">
              Built Around{" "}
              <span className="text-studio-lime">Your Brand.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-studio-muted leading-relaxed">
              Every brand is at a different stage. We structure our creative
              production, social media, and digital marketing around what your
              business actually needs to communicate value and stand out.
            </p>
          </Reveal>

          {/* Quick Jump Index */}
          <Reveal delay={0.08}>
            <nav
              aria-label="Services directory"
              className="mt-9 flex flex-wrap gap-2"
            >
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-studio-cream/12 bg-studio-charcoalDeep/90 px-3.5 sm:px-4 py-2 text-xs sm:text-[13px] font-medium text-studio-cream/85 transition-all duration-200 hover:border-studio-lime/60 hover:text-studio-lime"
                >
                  <span className="font-heading text-studio-lime font-bold">
                    {service.number}
                  </span>
                  <span>{service.title}</span>
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* 2. SCROLLING SERVICES TICKER */}
      <CapabilitiesMarquee variant="editorial" />

      {/* 3. EIGHT DARK SERVICE CARDS & DETAILED BREAKDOWNS */}
      <section
        aria-label="Core Services"
        className="divide-y divide-studio-cream/10"
      >
        {services.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-20 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 ${
                isEven
                  ? "studio-ink-grid bg-studio-charcoalDeep"
                  : "bg-studio-charcoal"
              }`}
            >
              <div className="mx-auto max-w-7xl">
                <div className="group rounded-3xl border border-studio-cream/12 bg-studio-charcoalDeep/90 p-6 sm:p-8 lg:p-10 transition-colors duration-300 hover:border-studio-lime/35">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left Column: Service Hierarchy, Description, Deliverables & CTAs */}
                    <div className="lg:col-span-7">
                      <Reveal>
                        <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/35 bg-studio-lime/10 px-3.5 py-1 text-[11px] font-bold tracking-[0.18em] text-studio-lime">
                          <span>{service.number}</span>
                          <span>&middot;</span>
                          <span className="uppercase">
                            {service.relatedCategory}
                          </span>
                        </div>

                        <h2 className="mt-4 font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-studio-cream leading-[1.08] group-hover:text-studio-lime transition-colors">
                          {service.title}
                        </h2>

                        <p className="mt-3 font-heading text-sm sm:text-base font-medium text-studio-cream/90 leading-snug">
                          {service.shortDescription}
                        </p>

                        <p className="mt-3 text-sm sm:text-base text-studio-muted leading-relaxed">
                          {service.description}
                        </p>

                        {/* Deliverables List */}
                        <div className="mt-7">
                          <h3 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-studio-lime">
                            Key Deliverables
                          </h3>
                          <ul className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.deliverables.map((deliverable) => (
                              <li
                                key={deliverable}
                                className="flex items-start gap-2.5 rounded-xl border border-studio-cream/10 bg-studio-charcoal px-3.5 py-3 text-xs sm:text-sm text-studio-cream/90"
                              >
                                <Check
                                  className="h-4 w-4 shrink-0 text-studio-lime mt-0.5"
                                  aria-hidden="true"
                                />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Service CTAs */}
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                          <Link
                            href={`/contact?service=${encodeURIComponent(
                              service.title
                            )}`}
                            className="inline-flex items-center gap-2 rounded-full bg-studio-lime px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-studio-ink transition-colors hover:bg-studio-cream"
                          >
                            <span>Discuss {service.title}</span>
                            <ArrowUpRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          </Link>

                          <a
                            href={getWhatsAppEnquiryUrl(
                              `Hi Mad Monkey Media, I would like to enquire about ${service.title} for my brand.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-studio-cream/20 bg-studio-charcoal px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
                          >
                            <MessageCircle
                              className="h-4 w-4 text-studio-lime"
                              aria-hidden="true"
                            />
                            <span>Enquire on WhatsApp</span>
                          </a>

                          <Link
                            href="/work"
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-studio-muted hover:text-studio-lime transition-colors"
                          >
                            <span>See Portfolio Work</span>
                            <ArrowUpRight
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </Reveal>
                    </div>

                    {/* Right Column: Purposeful Service Technical Diagram */}
                    <div className="lg:col-span-5">
                      <Reveal delay={0.08}>
                        <ServiceVisualGraphic
                          serviceId={service.id}
                          serviceNumber={service.number}
                          categoryLabel={service.relatedCategory}
                        />
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. STUDIO EXECUTION PRINCIPLES (4 Dark Cards) */}
      <section
        aria-labelledby="services-philosophy-heading"
        className="studio-dark-grid border-t border-studio-cream/10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-lime">
                <span
                  className="h-2 w-2 rotate-45 bg-studio-lime"
                  aria-hidden="true"
                />
                <span>HOW WE EXECUTE</span>
              </span>
              <h2
                id="services-philosophy-heading"
                className="mt-3 font-heading text-3xl sm:text-5xl font-bold tracking-tightest text-studio-cream leading-[1.06]"
              >
                Creative Production &amp; Digital Marketing Engineered for Brand
                Authority.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-studio-muted leading-relaxed">
                We bridge the gap between commercial production quality and
                disciplined day-to-day digital execution—so every reel, campaign,
                and web touchpoint works together.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {servicePhilosophyCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <Reveal key={card.number} delay={idx * 0.06}>
                  <div className="group h-full rounded-2xl border border-studio-cream/12 bg-studio-charcoalDeep p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-studio-lime/50">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-studio-charcoal border border-studio-cream/15 text-studio-cream transition-colors group-hover:border-studio-lime group-hover:bg-studio-lime group-hover:text-studio-ink">
                          <IconComponent
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-studio-lime">
                          {card.number}
                        </span>
                      </div>

                      <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-studio-cream group-hover:text-studio-lime transition-colors">
                        {card.title}
                      </h3>

                      <p className="mt-2.5 text-sm text-studio-muted leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SERVICES FAQ ACCORDION SECTION */}
      <section
        aria-labelledby="services-faq-heading"
        className="studio-ink-grid border-t border-studio-cream/10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-lime">
                  <span
                    className="h-2 w-2 rounded-full bg-studio-lime"
                    aria-hidden="true"
                  />
                  <span>FREQUENTLY ASKED QUESTIONS</span>
                </span>
                <h2
                  id="services-faq-heading"
                  className="mt-3 font-heading text-3xl sm:text-5xl font-bold tracking-tightest text-studio-cream leading-[1.08]"
                >
                  Everything You Need to Know Before We Shoot.
                </h2>
                <p className="mt-4 text-base sm:text-lg text-studio-muted leading-relaxed">
                  Have questions about retainers, production timelines, or custom
                  scopes? Here is how our studio works with clients.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <FAQAccordion items={STUDIO_FAQS} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <GlassCTA
        headline="Not sure which scope fits best?"
        supportingText="Share your objectives with us and we will recommend a practical production or marketing approach."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
      />
    </div>
  );
}
