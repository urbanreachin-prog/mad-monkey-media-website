# Mad Monkey Media — Official Studio Website

Premium light-themed luxury glassmorphism and editorial website built from scratch for **Mad Monkey Media** (`https://themadmonkey.in`).

## 1. Tech Stack & Architecture
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + Custom Glassmorphism & `@supports` Fallback Utilities
- **Motion**: Framer Motion (restrained editorial reveals with `useReducedMotion` support)
- **Typography**: `Space Grotesk` (Headings) & `Inter` (Body) via `next/font/google`

## 2. Implemented Routes
- `/` — Home (Hero, Studio Showreel, Brand Statement, Selected Work, Services Overview, Our Approach, Closing GlassCTA)
- `/work` — Media-First Portfolio with Interactive Category Filtering (`All`, `Jewellery`, `Automotive`, `Real Estate`, `Manufacturing`, `Personal Branding`, `Other`)
- `/work/[slug]` — Dynamic Project Case Study Pages (Hero, Main Media, Overview, Services Involved, Challenge & Creative Approach, Verified Results, Galleries, Next Project, Contact CTA)
- `/services` — Comprehensive 8-Service Capability Breakdown with Deliverables & Related Real Work
- `/about` — Studio Philosophy, Perspective, Production Reel, and Partner Verticals
- `/contact` — Direct Channels (WhatsApp, Email, Instagram) & Validated Project Enquiry Form
- `/api/contact` — Server-side Enquiry Endpoint (Validation, Honeypot Spam Protection, Webhook/Resend Integration, and Honest Fallback)
- `/sitemap.xml` & `/robots.txt` — Dynamic SEO Indexing

## 3. Centralized Configuration & Data
- **Design Tokens**: `src/config/tokens.ts`
- **Business Configuration**: `src/config/site.ts`
- **Portfolio Data**: `src/data/projects.ts`
- **Services Data**: `src/data/services.ts`

## 4. Local Development Instructions
```bash
npm.cmd install
npm.cmd run dev
```
Open `http://localhost:3000` in your browser.

## 5. Quality Checks & Production Build
```bash
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
npm.cmd run start
```
