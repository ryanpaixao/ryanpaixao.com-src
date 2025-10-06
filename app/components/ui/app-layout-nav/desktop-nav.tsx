import Link from 'next/link';

// Shadcn/ui components
import { Button } from "@/components/ui/button";

import ThemeSwitcher from '@/app/components/ui/theme-switcher';

type Link = {
  name: string;
  href: string;
};

type DesktopNavProps = {
  links: Link[]
}

export default function DesktopNav({ links }: DesktopNavProps) {
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
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
