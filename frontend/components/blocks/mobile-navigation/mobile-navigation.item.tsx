import { Icon, IconName } from '@elements/icon/icon';
import { Link } from '@elements/link/link';
import clsx from 'clsx';
import React from 'react';

interface MobileNavigationItemProps {
  url: string;
  children: string;
  iconName?: IconName;
}

export const MobileNavigationItem = ({ url, children, iconName }: MobileNavigationItemProps): JSX.Element => {
  const mobileNavigationItemClasses = clsx('');
  // eslint-disable-next-line tailwindcss/no-custom-classname
  const mobileLinkNavigationClasses = clsx(
    'fill-link-water text-link-water before:hidden',
    'hover:text-peal-lusta hover:fill-zinc-900 hover:before:block',
    'focus:text-peal-lusta focus:fill-zinc-900 focus:before:block',
    'relative flex h-full flex-col items-center justify-center gap-0.5 px-1 py-2',
    'before:bg-alto/20 before:absolute before:inset-1 before:rounded-md'
  );

  return (
    <li className={mobileNavigationItemClasses} data-testid={'mobile-navigation-list-item'}>
      <Link
        className={mobileLinkNavigationClasses}
        url={url}
        testId="mobile-navigation-link"
        activeClassName={clsx('fill-peal-lusta text-peal-lusta font-bold before:!block')}
      >
        {iconName && <Icon icon={iconName} className="h-4 w-4" testId="mobile-navigation-link-icon" />}
        <span className="text-[0.625rem]">{children}</span>
      </Link>
    </li>
  );
};
