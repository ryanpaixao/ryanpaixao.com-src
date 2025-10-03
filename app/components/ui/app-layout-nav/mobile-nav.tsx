'use client';

import { useState } from "react";
import Link from 'next/link';
import { Menu as MenuIcon } from 'lucide-react';

// Shadcn/ui components
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type Link = {
  name: string;
  href: string;
};

type MobileNavProps = {
  links: Link[]
};

export default function MobileNav({ links }: MobileNavProps ) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side='left'>
        <SheetTitle aria-describedby='mobile navigation menu' />
        <div className="flex flex-col items-start">
          {links.map(({ name, href }) => (
            <Button
              key={`mobile-nav-link-${name}`}
              variant='link'
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href={href}>
                {`[ ${name} ]`}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
