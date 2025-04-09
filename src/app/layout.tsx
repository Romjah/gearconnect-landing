import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GearConnect - Le réseau social du sport automobile",
  description: "Rejoignez la communauté GearConnect et partagez votre passion pour le sport automobile. Événements, rencontres et actualités du monde du racing.",
  keywords: "sport automobile, réseau social, racing, motorsport, événements automobiles, communauté pilotes, circuit automobile",
  openGraph: {
    title: "GearConnect - Le réseau social du sport automobile",
    description: "Partagez vos expériences sur circuit, échangez avec d'autres pilotes et vivez votre passion à fond ! Rejoignez la communauté GearConnect.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GearConnect - Communauté Sport Automobile"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GearConnect - Le réseau social du sport automobile",
    description: "Partagez vos expériences sur circuit, échangez avec d'autres pilotes et vivez votre passion à fond !",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
