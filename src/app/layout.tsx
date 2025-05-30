import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://gearconnect-landing.vercel.app'),
  title: "GearConnect - Career Acceleration Platform for Racing Pilots",
  description: "Transform your racing talent into professional opportunities with smart analytics and strategic networking. The first career acceleration platform designed specifically for ambitious pilots.",
  keywords: "career acceleration, racing pilots, motorsport analytics, professional racing, pilot development, racing careers, motorsport networking, performance analytics",
  authors: [{ name: 'GearConnect Team' }],
  openGraph: {
    title: "GearConnect - Career Acceleration Platform for Racing Pilots",
    description: "Transform your racing talent into professional opportunities with smart analytics and strategic networking.",
    url: 'https://gearconnect-landing.vercel.app',
    siteName: 'GearConnect',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/images/op-image.jpg',
      width: 1200,
      height: 630,
      alt: 'GearConnect - Career Acceleration Platform for Racing Pilots',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GearConnect - Career Acceleration Platform for Racing Pilots",
    description: "Transform your racing talent into professional opportunities with smart analytics and strategic networking.",
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
    <html lang="en">
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
