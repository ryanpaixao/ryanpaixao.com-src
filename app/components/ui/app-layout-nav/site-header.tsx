import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

const LINKS = [
  {
    name: 'About',
    href: '/'
  },
  {
    name: 'Skills',
    href: '/skills'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'Contact',
    href: '/contact'
  },
];

export default function SiteHeader() {
  return (
    <header className='w-full border-b'>
      <div className='flex h-14 items-center px-4'>
        <DesktopNav links={LINKS} />
        <MobileNav links={LINKS} />
      </div>
    </header>
  );
}
