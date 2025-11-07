import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";

import SiteHeader from '@/app/components/ui/app-layout-nav/site-header';
import "@/app/globals.css";
import { getDictionary } from '@/app/lib/dictionaries';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ryanPaixao( )",
  description: "Ryan Paixao's Personal Site",
};

export default async function RootLayout(props: LayoutProps<'/[lang]'>) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className="flex min-h-screen flex-col">
            <SiteHeader dict={dict} currentLang={lang} />
            {props.children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
