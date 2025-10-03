import Link from 'next/link';

// Shadcn/ui components
import { Button } from "@/components/ui/button";

type Link = {
  name: string;
  href: string;
};

type DesktopNavProps = {
  links: Link[]
}

export default function DesktopNav({ links }: DesktopNavProps) {
  return (
    <div className="mr-4 hidden gap-2 md:flex">
      {links.map(({ name, href }) => (
        <Button key={`desktop-nav-link-${name}`} variant='link'>
          <Link href={href}>
            {name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
