import { MobileNavigationItem } from '@blocks/mobile-navigation/mobile-navigation.item';
import { IconName } from '@elements/icon/icon';
import clsx from 'clsx';
import { t } from 'i18next';

interface NavigationItem {
  label: string;
  url: string;
  icon: IconName;
}

const navigationItems: NavigationItem[] = [
  { label: t('navigation.dashboard'), url: '/', icon: IconName.home },
  { label: t('navigation.news'), url: '/news', icon: IconName.news },
];

export const MobileNavigation = (): JSX.Element | null => {
  const mobileNavigationClasses = clsx(
    // eslint-disable-next-line prettier/prettier
    'fixed inset-x-0 bottom-0 z-50 h-[50px] bg-black lg:hidden'
  );
  const mobileNavigationListClasses = clsx('grid h-full grid-cols-2');

  return (
    <nav className={mobileNavigationClasses} data-testid={'mobile-navigation'}>
      <ul className={mobileNavigationListClasses} data-testid={'mobile-navigation-list'}>
        {navigationItems.map(({ label, url, icon }) => (
          <MobileNavigationItem iconName={icon} url={url} key={label}>
            {label}
          </MobileNavigationItem>
        ))}
      </ul>
    </nav>
  );
};
