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
  metadataBase: new URL("https://GodwinOkronipa.github.io"),
  title: {
    default: "Godwin Okronipa — Product Manager • Systems Analyst • AI",
    template: "%s | Godwin Okronipa",
  },
  description:
    "Product Manager and Systems Analyst focused on ethical AI, digital transformation, and building intuitive, empowering technology.",
  keywords: [
    "Godwin Okronipa",
    "Product Manager",
    "Systems Analyst",
    "AI",
    "Ethical AI",
    "Digital Transformation",
    "Ghana",
  ],
  authors: [{ name: "Godwin Okronipa" }],
  applicationName: "Godwin Okronipa Website",
  alternates: {
    canonical: "/my-website/",
  },
  icons: {
    icon: "/my-website/icon.svg",
    shortcut: "/my-website/icon.svg",
    apple: "/my-website/icon.svg",
  },
  openGraph: {
    type: "website",
    url: "/my-website/",
    title: "Godwin Okronipa — Product Manager • Systems Analyst • AI",
    description:
      "Product Manager and Systems Analyst focused on ethical AI, digital transformation, and building intuitive, empowering technology.",
    siteName: "Godwin Okronipa",
    images: [
      {
        url: "/my-website/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Godwin Okronipa — Product Manager • Systems Analyst • AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Godwin Okronipa — Product Manager • Systems Analyst • AI",
    description:
      "Product Manager and Systems Analyst focused on ethical AI, digital transformation, and building intuitive, empowering technology.",
    images: ["/my-website/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  themeColor: "#0f0f10",
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
