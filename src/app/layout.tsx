import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serenity - Yoga & Life Coaching",
  description: "Transform your life through yoga, meditation, hypnosis, NLP, and Wing Chun. Discover inner peace and wellness.",
  keywords: "yoga, meditation, hypnosis, NLP, Wing Chun, life coaching, wellness, mindfulness",
  authors: [{ name: "Serenity Wellness Center" }],
  openGraph: {
    title: "Serenity - Yoga & Life Coaching",
    description: "Transform your life through holistic wellness practices",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        <SmoothScroll />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
