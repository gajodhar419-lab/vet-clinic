import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { clinicConfig as c } from "@/config/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(c.siteUrl),
  title: {
    default: `${c.clinicName} | Veterinary Care`,
    template: `%s | ${c.clinicName}`,
  },
  description: `${c.tagline}. ${c.doctorName} — ${c.doctorQualification}, ${c.doctorExperience}. Book appointments, vaccinations, surgery and emergency care.`,
  openGraph: {
    title: c.clinicName,
    description: c.tagline,
    url: c.siteUrl,
    siteName: c.clinicName,
    images: [{ url: c.heroImage, width: 1200, height: 630, alt: c.clinicName }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: c.clinicName,
    description: c.tagline,
    images: [c.heroImage],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={
        {
          "--primary": c.primaryColor,
          "--secondary": c.secondaryColor,
        } as React.CSSProperties
      }
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}