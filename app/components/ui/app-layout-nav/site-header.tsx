import { Dictionary } from '@/app/lib/definitions';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

type SiteHeaderProps = {
  dict: Dictionary;
}

export default function SiteHeader({ dict }: SiteHeaderProps) {
  const LINKS = [
    {
      name: dict.siteHeader.nav.links.about,
      href: '/'
    },
    {
      name: dict.siteHeader.nav.links.skills,
      href: '/skills'
    },
    {
      name: dict.siteHeader.nav.links.projects,
      href: '/projects'
    },
    {
      name: dict.siteHeader.nav.links.contact,
      href: '/contact'
    },
  ];

  return (
    <header className='w-full border-b fixed bg-white dark:bg-gray-800'>
      <div className='flex h-14 items-center px-4 dark:bg-red-500'>
        <DesktopNav links={LINKS} />
        <MobileNav links={LINKS} />
      </div>
    </header>
  );
}
