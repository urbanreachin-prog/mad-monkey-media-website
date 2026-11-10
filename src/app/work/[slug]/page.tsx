import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { SmartVideo } from "@/components/media/SmartVideo";
import { SmartImage } from "@/components/media/SmartImage";
import { Reveal } from "@/components/motion/Reveal";
import { StudioConversionCTA } from "@/components/studio/StudioConversionCTA";

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
    <div className="overflow-x-hidden bg-[#F6F2E9] text-[#191E1B] min-h-screen">
      {/* 1. PROJECT HERO */}
      <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] overflow-hidden pattern-warm-dots">
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#68716B] hover:text-[#B88D44] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO WORK ARCHIVE</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-3.5 py-1 text-[#B88D44] font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{project.industryLabel || project.category}</span>
              </span>

              {project.client && (
                <span className="rounded-full border border-[#EDE7DA] bg-white px-3.5 py-1 text-[#68716B] shadow-xs">
                  Client: <strong className="text-[#191E1B]">{project.client}</strong>
                </span>
              )}
            </div>

            <h1 className="mt-5 max-w-4xl font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#191E1B] leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#68716B] leading-relaxed">
              {project.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. MAIN MEDIA SHOWCASE */}
      <section
        aria-label="Primary project media"
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto"
      >
        <Reveal>
          <div className="rounded-3xl p-2 sm:p-3 border-2 border-[#EDE7DA] bg-white shadow-xl overflow-hidden">
            {project.coverVideo ? (
              <SmartVideo
                src={project.coverVideo}
                poster={project.coverImage}
                title={project.title}
                autoPlay={false}
                priorityLoad={true}
                aspectClassName="aspect-[16/10] sm:aspect-[16/9] rounded-2xl"
              />
            ) : (
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl bg-black">
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
      </section>

      {/* 3. CASE STUDY NARRATIVE & SERVICES */}
      <section className="border-t border-[#EDE7DA] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sidebar: Services & Scope */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl border border-[#EDE7DA] bg-[#FAF7F2] p-6 sm:p-8">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B88D44] block mb-4">
                  SERVICES INVOLVED
                </span>
                <ul className="flex flex-wrap gap-2 font-mono text-xs">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-full bg-white border border-[#EDE7DA] px-3 py-1.5 text-[#191E1B] font-semibold"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Results if available */}
              {project.verifiedResults && project.verifiedResults.length > 0 && (
                <div className="rounded-3xl border border-[#EDE7DA] bg-[#FAF7F2] p-6 sm:p-8">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B88D44] block mb-4">
                    DOCUMENTED OUTCOMES
                  </span>
                  <ul className="space-y-3 font-mono text-xs">
                    {project.verifiedResults.map((result) => (
                      <li key={result} className="flex items-start gap-2.5 text-[#191E1B]">
                        <CheckCircle2 className="w-4 h-4 text-[#B88D44] shrink-0 mt-0.5" />
                        <span className="font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>

            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-8">
              {project.challenge && (
                <Reveal>
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B88D44] block">
                      01 // THE CHALLENGE
                    </span>
                    <p className="mt-3 text-base sm:text-lg text-[#191E1B] leading-relaxed font-medium">
                      {project.challenge}
                    </p>
                  </div>
                </Reveal>
              )}

              {project.overview && (
                <Reveal delay={0.06}>
                  <div className="pt-8 border-t border-[#EDE7DA]">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B88D44] block">
                      02 // STRATEGIC OVERVIEW
                    </span>
                    <p className="mt-3 text-base sm:text-lg text-[#68716B] leading-relaxed">
                      {project.overview}
                    </p>
                  </div>
                </Reveal>
              )}

              {project.creativeApproach && (
                <Reveal delay={0.1}>
                  <div className="pt-8 border-t border-[#EDE7DA]">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B88D44] block">
                      03 // CREATIVE EXECUTION
                    </span>
                    <p className="mt-3 text-base sm:text-lg text-[#68716B] leading-relaxed">
                      {project.creativeApproach}
                    </p>
                  </div>
                </Reveal>
              )}

              {project.clientTestimonial && (
                <Reveal delay={0.15}>
                  <blockquote className="rounded-3xl p-8 border border-[#EDE7DA] bg-[#FAF7F2]">
                    <p className="font-heading text-xl sm:text-2xl font-bold text-[#191E1B] leading-snug">
                      &ldquo;{project.clientTestimonial.quote}&rdquo;
                    </p>
                    <footer className="mt-4 text-xs font-mono text-[#B88D44] font-semibold">
                      &mdash; {project.clientTestimonial.author}
                      {project.clientTestimonial.role ? `, ${project.clientTestimonial.role}` : ""}
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
          className="border-t border-[#EDE7DA] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]"
        >
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-3xl border border-[#EDE7DA] bg-white p-8 sm:p-12 transition-all duration-200 hover:border-[#B88D44]/60 hover:shadow-lg"
            >
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B88D44]">
                  NEXT PROJECT &bull; {nextProject.category}
                </span>
                <h2 className="mt-2 font-heading text-2xl sm:text-4xl font-bold tracking-tight text-[#191E1B] group-hover:text-[#B88D44] transition-colors">
                  {nextProject.title}
                </h2>
              </div>

              <span className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full bg-[#B88D44] px-6 py-3.5 text-xs font-heading font-bold uppercase tracking-wider text-white transition-all group-hover:bg-[#A37B35] shadow-md">
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* 5. CLOSING CTA BANNER */}
      <StudioConversionCTA />
    </div>
  );
}
