import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "From Shadows to Stone - Franklin College and the Legacy of Slavery",
  description: "A comprehensive research project exploring Franklin College's relationship with slavery from 1787-1853. Uncovering forgotten stories of enslaved individuals and institutional connections through archival research.",
  keywords: [
    "Franklin College",
    "slavery",
    "Lancaster County",
    "historical research",
    "archival research",
    "institutional history",
    "Witness Stones Project",
    "Franklin & Marshall College",
    "Pennsylvania history",
    "enslaved individuals"
  ],
  authors: [
    { name: "Frances Taylor" },
    { name: "Arek Giir Riny" }
  ],
  creator: "Frances Taylor and Arek Giir Riny",
  publisher: "Franklin & Marshall College",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://from-shadows-to-stone.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "From Shadows to Stone - Franklin College and the Legacy of Slavery",
    description: "A comprehensive research project exploring Franklin College's relationship with slavery from 1787-1853. Uncovering forgotten stories of enslaved individuals and institutional connections through archival research.",
    url: 'https://from-shadows-to-stone.vercel.app',
    siteName: 'From Shadows to Stone',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'From Shadows to Stone Research Project',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "From Shadows to Stone - Franklin College and the Legacy of Slavery",
    description: "A comprehensive research project exploring Franklin College's relationship with slavery from 1787-1853.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
