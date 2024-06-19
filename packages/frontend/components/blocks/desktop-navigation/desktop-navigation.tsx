import { DesktopNavigationItem } from '@blocks/desktop-navigation/desktop-navigation.item';
import { IconName } from '@elements/icon/icon';
import clsx from 'clsx';
import { t } from 'i18next';

interface DesktopNavigationProps {
  isCondensed?: boolean;
}

interface NavigationItem {
  label: string;
  url: string;
  icon: IconName;
}

const navigationItems: NavigationItem[] = [
  { label: t('navigation.dashboard'), url: '/', icon: IconName.home },
  { label: t('navigation.news'), url: '/news', icon: IconName.news },
  { label: t('navigation.publish-news'), url: '/publish-news', icon: IconName.news },
];

export const DesktopNavigation = ({ isCondensed }: DesktopNavigationProps): JSX.Element | null => {
  const desktopNavigationClasses = clsx('');
  const desktopNavigationListClasses = clsx('');

  return (
    <nav className={desktopNavigationClasses} data-testid={'desktop-navigation'}>
      <ul className={desktopNavigationListClasses} data-testid={'desktop-navigation-list'}>
        {navigationItems.map(({ label, url, icon }) => (
          <DesktopNavigationItem iconName={icon} url={url} key={label} hiddenLabel={isCondensed}>
            {label}
          </DesktopNavigationItem>
        ))}
      </ul>
    </nav>
  );
};
