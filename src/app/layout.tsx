import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Velnix — AI-Native Software Studio & Intelligent Infrastructure",
  description:
    "The Velnix is an AI-native software studio building intelligent products, scalable infrastructure, developer tools, and communication systems for the next generation of the internet.",
};

import { SmoothScroll } from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakartaSans.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#050505] text-white font-[family-name:var(--font-plus-jakarta-sans)]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
