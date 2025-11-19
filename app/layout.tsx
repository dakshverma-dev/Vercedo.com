import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/smooth-scroll";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vercedo | AI Voice Agents for Real Estate",
  description: "High-performance AI voice agents for wholesalers and brokers. Sub-500ms latency, human-like intonation, and infinite scale. Engineered by Daksh Verma.",
  keywords: ["AI Voice", "Real Estate AI", "Daksh Verma", "Vercedo", "Cold Calling AI", "Wholesaling Automation"],
  openGraph: {
    title: "Vercedo | The Voice of Your Business",
    description: "Replace your call center with Vercedo. The world's most advanced AI voice agent for real estate.",
    url: "https://vercedo.ai",
    siteName: "Vercedo",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Vercedo",
        "url": "https://vercedo.ai",
        "logo": "https://vercedo.ai/logo.png",
        "founder": {
          "@type": "Person",
          "name": "Daksh Verma",
          "jobTitle": "Founder & Lead Architect",
          "alumniOf": "IIT Madras",
          "url": "https://vercedo.ai/about"
        },
        "sameAs": [
          "https://twitter.com/vercedo",
          "https://linkedin.com/company/vercedo"
        ]
      },
      {
        "@type": "Person",
        "name": "Daksh Verma",
        "url": "https://vercedo.ai/about",
        "jobTitle": "Founder",
        "worksFor": {
          "@type": "Organization",
          "name": "Vercedo"
        },
        "alumniOf": "IIT Madras"
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, "bg-vercedo-black font-sans antialiased selection:bg-vercedo-blue/30 selection:text-white")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
