import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { GlassNavbar } from "@/components/glass/GlassNavbar";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.productionDomain),
  title: {
    default: "Mad Monkey Media — Creative Production & Digital Marketing",
    template: "%s | Mad Monkey Media",
  },
  description:
    "Creative production, social media and digital marketing for brands that want to be seen, remembered and chosen.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/branding/logo.png",
    shortcut: "/images/branding/logo.png",
    apple: "/images/branding/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.productionDomain,
    siteName: siteConfig.businessName,
    title: "Mad Monkey Media — Creative Production & Digital Marketing",
    description: siteConfig.brandPromise,
    images: [
      {
        url: "/images/branding/logo.png",
        width: 800,
        height: 800,
        alt: "Mad Monkey Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mad Monkey Media — Creative Production & Digital Marketing",
    description: siteConfig.brandPromise,
    images: ["/images/branding/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-studio-charcoalDeep text-studio-cream antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-studio-lime focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-studio-ink"
        >
          Skip to main content
        </a>
        <GlassNavbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
