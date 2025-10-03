import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

const LINKS = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'About',
    href: '/about'
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
