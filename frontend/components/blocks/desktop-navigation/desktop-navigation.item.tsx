/* eslint-disable tailwindcss/no-custom-classname */
import { Icon, IconName } from '@elements/icon/icon';
import { Link } from '@elements/link/link';
import clsx from 'clsx';

interface DesktopNavigationItemProps {
  url: string;
  children: string;
  iconName: IconName;
  hiddenLabel?: boolean;
}

export const DesktopNavigationItem = ({
  url,
  children,
  iconName,
  hiddenLabel,
}: DesktopNavigationItemProps): JSX.Element => {
  const afterUnderLineStyles = clsx('after:bg-peal-lusta after:absolute after:inset-x-0 after:bottom-0 after:h-0.5');

  const desktopNavigationItemClasses = clsx('');
  const desktopNavigationLinkClasses = clsx('fill-link-water text-link-water relative after:hidden', {
    ['hover:bg-downy hover:after:block hover:fill-zinc-900 hover:text-peal-lusta']: true,
    ['focus:bg-downy focus:after:block focus:fill-zinc-900 focus:text-peal-lusta']: true,
    [afterUnderLineStyles]: true,
    ['inline-flex justify-center items-center w-[80px] h-[80px]']: hiddenLabel,
    ['grid grid-cols-[24px,1fr] gap-4 items-center p-6']: !hiddenLabel,
  });

  return (
    <li className={desktopNavigationItemClasses} data-testid={'desktop-navigation-list-item'}>
      <Link
        className={desktopNavigationLinkClasses}
        activeClassName={clsx('!fill-peal-lusta !text-peal-lusta font-bold after:!block')}
        url={url}
        testId="desktop-navigation-link"
      >
        <Icon icon={iconName} className="h-6 w-6" testId="desktop-navigation-link-icon" />
        <span className={clsx('col-start-2 truncate', { ['sr-only']: hiddenLabel })}>{children}</span>
      </Link>
    </li>
  );
};
