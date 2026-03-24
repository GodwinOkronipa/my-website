import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://godwinokronipa.github.io/my-website'),
  title: "Godwin Okronipa Exornam | Product Manager & AI Engineer",
  description: "Godwin Okronipa Exornam - Experienced Product Manager, Systems Analyst, and AI Engineer specializing in ethical AI solutions. Based in Ghana.",
  authors: [{
    name: "Godwin Okronipa Exornam",
    url: "https://godwinokronipa.github.io/my-website/"
  }],
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  verification: {
    google: 'google292271a51eb8fd7f',
  },
  openGraph: {
    title: "Godwin Okronipa Exornam | Product Manager & AI Engineer",
    description: "Experienced Product Manager, Systems Analyst, and AI Engineer specializing in ethical AI solutions. Based in Ghana.",
    url: "https://godwinokronipa.github.io/my-website/",
    siteName: "Godwin Okronipa's Portfolio",
    images: [
      {
        url: "/webimage.jpg",
        width: 1200,
        height: 630,
        alt: "Godwin Okronipa — Product Manager • Systems Analyst • AI Engineer",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
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
        {children}
        <BackToTop />
      </body>
    </html>
  );
}