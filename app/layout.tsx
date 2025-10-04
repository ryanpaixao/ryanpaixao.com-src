import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-green-500 dark:bg-red-500">
              <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                {children}
              </main>
              <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                Footer
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
