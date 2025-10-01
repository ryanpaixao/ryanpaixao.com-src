'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

interface NavLinkProps {
  name: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  let activeStyle = '[&.active]:text-indigo-600 [&.active]:bg-indigo-100';
  
  if (isActive) {
    activeStyle = `${activeStyle} active`;
  }

  return (
    <NavigationMenuItem>
        <NavigationMenuLink asChild active={isActive}>
          <Link
            href={href}
            className={
              `flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 ${activeStyle}`
            }
          >
            <p className="hidden md:block">{name}</p>
          </Link>
        </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export default NavLink;
