import type { HeaderNavItem } from '@/shared/config/navigation';
import {
  NavigationBar,
  NavigationScroller,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './Header.styles';

type NavigationItemViewModel = {
  id: HeaderNavItem['id'];
  label: string;
  href: string;
  isActive: boolean;
};

type NavigationProps = {
  isScrolled: boolean;
  items: NavigationItemViewModel[];
};

function Navigation({ isScrolled, items }: NavigationProps) {
  return (
    <NavigationBar $isScrolled={isScrolled} aria-label="Primary">
      <NavigationScroller>
        <NavigationList>
          {items.map(item => (
            <NavigationItem key={item.id}>
              <NavigationLink
                href={item.href}
                $isScrolled={isScrolled}
                $isActive={item.isActive}
              >
                {item.label}
              </NavigationLink>
            </NavigationItem>
          ))}
        </NavigationList>
      </NavigationScroller>
    </NavigationBar>
  );
}

export default Navigation;
