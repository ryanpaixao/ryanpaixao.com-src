import { Dictionary, AvailableLanguages } from '@/app/lib/definitions';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

type SiteHeaderProps = {
  dict: Dictionary;
  currentLang: AvailableLanguages;
}

export default function SiteHeader({ dict, currentLang }: SiteHeaderProps) {
  const { about, skills, projects, contact } = dict.siteHeader.nav.links;
  const LINKS = [
    {
      name: about,
      href: `/${currentLang}/`
    },
    {
      name: skills,
      href: `/${currentLang}/skills`
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
    <header className='w-full border-b fixed bg-gray-100 dark:bg-gray-600'>
      <div className='flex h-14 items-center px-4'>
        <DesktopNav links={LINKS} currentLang={currentLang} />
        <MobileNav links={LINKS} currentLang={currentLang} />
      </div>
    </header>
  );
}
