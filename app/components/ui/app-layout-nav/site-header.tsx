import { Dictionary } from '@/app/lib/definitions';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

type SiteHeaderProps = {
  dict: Dictionary;
  currentLang: string;
}

export default function SiteHeader({ dict, currentLang }: SiteHeaderProps) {
  const { about, experience, projects, contact } = dict.siteHeader.nav.links;
  const LINKS = [
    {
      name: about,
      href: `/${currentLang}/about`
    },
    {
      name: experience,
      href: `/${currentLang}/experience`
    },
    {
      name: projects,
      href: `/${currentLang}/projects`
    },
    {
      name: contact,
      href: `/${currentLang}/contact`
    },
  ];

  return (
    <header className='w-full border-b fixed z-10 bg-gray-100 dark:bg-gray-600'>
      <div className='flex h-14 items-center px-4'>
        <DesktopNav links={LINKS} currentLang={currentLang} />
        <MobileNav links={LINKS} currentLang={currentLang} />
      </div>
    </header>
  );
}
