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
  metadataBase: new URL('https://gearconnect-landing.vercel.app'),
  title: "GearConnect - Le réseau social du sport automobile",
  description: "Partagez vos expériences sur circuit, échangez avec d'autres pilotes et vivez votre passion à fond ! Rejoignez la communauté GearConnect.",
  keywords: "sport automobile, réseau social, racing, motorsport, événements automobiles, communauté pilotes, circuit automobile",
  authors: [{ name: 'GearConnect Team' }],
  openGraph: {
    title: "GearConnect - Le réseau social du sport automobile",
    description: "Partagez vos expériences sur circuit, échangez avec d'autres pilotes et vivez votre passion à fond !",
    url: 'https://gearconnect-landing.vercel.app',
    siteName: 'GearConnect',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: '/images/op-image.jpg',
      width: 1200,
      height: 630,
      alt: 'GearConnect - La communauté du sport automobile',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GearConnect - Le réseau social du sport automobile",
    description: "Partagez vos expériences sur circuit, échangez avec d'autres pilotes et vivez votre passion à fond !",
    images: ['/images/op-image.jpg'],
  },
  alternates: {
    canonical: 'https://gearconnect-landing.vercel.app'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'google-site-verification',
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
