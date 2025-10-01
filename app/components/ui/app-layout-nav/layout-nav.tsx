import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import NavLink from './nav-link';

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

export default function SideNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {LINKS.map(({name, href}) => {
          return (
            <NavLink
              key={name}
              name={name}
              href={href}
            />
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
