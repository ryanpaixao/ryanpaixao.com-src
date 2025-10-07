import Link from 'next/link';

// Shadcn/ui components
import { Button } from "@/components/ui/button";

import ThemeSwitcher from '@/app/components/ui/theme-switcher';
import LanguageSwitcher from '@/app/components/ui/language-switcher';
import { AvailableLanguages } from '@/app/lib/definitions';

type Link = {
  name: string;
  href: string;
};

type DesktopNavProps = {
  links: Link[];
  currentLang: AvailableLanguages;
}

export default function DesktopNav({ links, currentLang }: DesktopNavProps) {
  return (
    <div className="hidden md:flex justify-between w-full">
      <div className="mr-4 gap-2">
        {links.map(({ name, href }) => (
          <Button key={`desktop-nav-link-${name}`} variant='link'>
            <Link href={href}>
              {`[ ${name} ]`}
            </Link>
          </Button>
        ))}
      </div>
      <div className='flex flex-row justify-between gap-1'>
        <LanguageSwitcher currentLang={currentLang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
