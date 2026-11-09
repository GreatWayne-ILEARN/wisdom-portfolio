import type { Metadata } from "next";
import localFont from "next/font/local";
import { portfolio } from "@/data/portfolio";
import "./globals.css";
const geistSans = localFont({ src: "./fonts/geist-latin.woff2", variable: "--font-geist-sans", weight: "100 900", display: "swap" });
const geistMono = localFont({ src: "./fonts/geist-mono-latin.woff2", variable: "--font-geist-mono", weight: "100 900", display: "swap" });
export const metadata: Metadata = {
  title: portfolio.seo.title, description: portfolio.seo.description,
  openGraph: { title: portfolio.seo.title, description: portfolio.seo.description, type: "website", locale: "en_NG", siteName: portfolio.name },
  twitter: { card: "summary", title: portfolio.seo.title, description: portfolio.seo.description },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}><body><a className="skip-link" href="#content">Skip to content</a>{children}</body></html>;
}

