'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Shadcn/ui components
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import ThemeSwitcher from '@/app/components/ui/theme-switcher';
import LanguageSwitcher from '@/app/components/ui/language-switcher';

type Link = {
  name: string;
  href: string;
};

type DesktopNavProps = {
  links: Link[];
  currentLang: string;
}

export default function DesktopNav({ links, currentLang }: DesktopNavProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const logo = theme === 'dark'
    ? "/images/rp-logo-font-white.svg"
    : "/images/rp-logo-font-black.svg"

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return <Skeleton className='h-56px w-full' />;

  return (
    <div className="hidden md:flex justify-between w-full">
      <nav className="flex flex-row mr-4 gap-2">
        <div>
          <Link href={`/${currentLang}/`}>
            <Image
              src={logo}
              alt="Site Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>
        <div className='flex items-center'>
          {links.map(({ name, href }) => (
            <Button key={`desktop-nav-link-${name}`} variant='link'>
              <Link 
                href={href}
              >
                {`[ ${name} ]`}
              </Link>
            </Button>
          ))}
        </div>
      </nav>
      <div className='flex flex-row justify-between gap-1'>
        <LanguageSwitcher currentLang={currentLang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
