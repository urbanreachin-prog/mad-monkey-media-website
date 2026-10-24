import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { SmartVideo } from "@/components/media/SmartVideo";
import { SmartImage } from "@/components/media/SmartImage";
import { GlassCTA } from "@/components/glass/GlassCTA";
import { Reveal } from "@/components/motion/Reveal";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.category} Portfolio`,
    description: project.description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Mad Monkey Media`,
      description: project.description,
      url: `/work/${project.slug}`,
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = project.nextProject
    ? getProjectBySlug(project.nextProject)
    : undefined;

  return (
    <div className="overflow-x-hidden bg-studio-charcoal text-studio-cream min-h-screen">
      {/* 1. PROJECT HERO */}
      <section className="studio-dark-grid pt-10 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-studio-muted transition-colors hover:text-studio-lime"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to Selected Work</span>
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-studio-cream/15 bg-studio-charcoalDeep px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-studio-cream">
                <span
                  className="h-2 w-2 rounded-full bg-studio-lime"
                  aria-hidden="true"
                />
                {project.industryLabel}
              </span>

              {project.client && (
                <span className="rounded-full border border-studio-lime/35 bg-studio-lime/10 px-4 py-1.5 text-xs font-medium text-studio-lime">
                  Client: {project.client}
                </span>
              )}
            </div>

            <h1 className="mt-5 max-w-4xl font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tightest text-studio-cream leading-[1.05]">
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-xl text-studio-muted leading-relaxed">
              {project.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. MAIN MEDIA */}
      <section
        aria-label="Primary project media"
        className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl p-1.5 sm:p-2.5 border border-studio-cream/15 bg-studio-charcoalDeep shadow-cinema">
              {project.coverVideo ? (
                <SmartVideo
                  src={project.coverVideo}
                  poster={project.coverImage}
                  title={project.title}
                  autoPlay={false}
                  priorityLoad={true}
                  aspectClassName="aspect-[16/10] sm:aspect-[16/9] rounded-[1.25rem]"
                />
              ) : (
                <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-[1.25rem] bg-studio-ink">
                  <SmartImage
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. OVERVIEW, SERVICES INVOLVED & CREATIVE APPROACH */}
      <section className="border-t border-studio-cream/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sidebar: Services Involved & Client */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="rounded-2xl border border-studio-cream/12 bg-studio-charcoalDeep p-6 sm:p-8">
                <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-studio-lime">
                  Services Involved
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-full bg-studio-charcoal border border-studio-cream/15 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-studio-cream"
                    >
                      {service}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-studio-cream/10">
                  <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-studio-muted">
                    Category
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-studio-cream">
                    {project.category}
                  </p>
                </div>

                {project.client && (
                  <div className="mt-6 pt-6 border-t border-studio-cream/10">
                    <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-studio-muted">
                      Brand / Collaboration
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold text-studio-cream">
                      {project.client}
                    </p>
                  </div>
                )}
              </div>
            </aside>

            {/* Main Narrative: Overview, Challenge, Creative Approach */}
            <div className="lg:col-span-8 space-y-12">
              {project.overview && (
                <Reveal>
                  <div>
                    <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-studio-lime">
                      01 &mdash; Project Overview
                    </h2>
                    <p className="mt-3 text-lg sm:text-xl text-studio-cream leading-relaxed font-medium">
                      {project.overview}
                    </p>
                  </div>
                </Reveal>
              )}

              {project.challenge && (
                <Reveal delay={0.06}>
                  <div className="pt-8 border-t border-studio-cream/10">
                    <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-studio-lime">
                      02 &mdash; The Challenge
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-studio-muted leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                </Reveal>
              )}

              {project.creativeApproach && (
                <Reveal delay={0.12}>
                  <div className="pt-8 border-t border-studio-cream/10">
                    <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-studio-lime">
                      03 &mdash; Creative Approach
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-studio-muted leading-relaxed">
                      {project.creativeApproach}
                    </p>
                  </div>
                </Reveal>
              )}

              {/* Verified Results */}
              {project.verifiedResults &&
                project.verifiedResults.length > 0 && (
                  <Reveal delay={0.16}>
                    <div className="rounded-2xl border border-studio-lime/35 bg-studio-charcoalDeep p-7 sm:p-9">
                      <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-studio-lime">
                        Documented Outcomes
                      </h2>
                      <ul className="mt-4 space-y-3">
                        {project.verifiedResults.map((result) => (
                          <li
                            key={result}
                            className="flex items-start gap-3 text-sm sm:text-base text-studio-cream"
                          >
                            <CheckCircle2
                              className="h-5 w-5 shrink-0 text-studio-lime mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )}

              {/* Client Testimonial */}
              {project.clientTestimonial && (
                <Reveal delay={0.2}>
                  <blockquote className="rounded-2xl p-8 border border-studio-cream/15 bg-studio-charcoalDeep">
                    <p className="font-heading text-xl sm:text-2xl font-medium text-studio-cream leading-relaxed">
                      &ldquo;{project.clientTestimonial.quote}&rdquo;
                    </p>
                    <footer className="mt-4 text-sm font-semibold text-studio-muted">
                      &mdash; {project.clientTestimonial.author}
                      {project.clientTestimonial.role
                        ? `, ${project.clientTestimonial.role}`
                        : ""}
                    </footer>
                  </blockquote>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEXT PROJECT NAVIGATION */}
      {nextProject && (
        <section
          aria-label="Next project"
          className="border-t border-studio-cream/10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-3xl border border-studio-cream/15 bg-studio-charcoalDeep p-8 sm:p-12 transition-all duration-200 hover:border-studio-lime/60"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-studio-lime">
                  NEXT PROJECT &middot; {nextProject.category}
                </span>
                <h2 className="mt-2 font-heading text-2xl sm:text-4xl font-bold tracking-tight text-studio-cream group-hover:text-studio-lime transition-colors">
                  {nextProject.title}
                </h2>
              </div>

              <span className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full bg-studio-lime px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-ink transition-colors group-hover:bg-studio-cream">
                <span>View Case Study</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* 5. CONTACT CTA */}
      <GlassCTA
        headline="Want similar craft for your brand?"
        supportingText={`Let's discuss how we can approach ${project.category.toLowerCase()} production and digital growth for your business.`}
        primaryLabel="Discuss Your Project"
        primaryHref="/contact"
        whatsappContext={`Hi Mad Monkey Media, I saw your "${project.title}" project and would like to discuss a project for my brand.`}
      />
    </div>
  );
}
