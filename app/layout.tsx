import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import LayoutNav from '@/app/components/ui/app-layout-nav/layout-nav';
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
        <div className="flex flex-row flex-wrap">
          <div className="w-full">
            <LayoutNav />
          </div>
          <div className="block w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
