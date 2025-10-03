import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import SiteHeader from '@/app/components/ui/app-layout-nav/site-header';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Paixao",
  description: "Ryan Paixao's Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
