import clsx from 'clsx';
import React from 'react';

import { Icon, IconName } from '@elements/icon/icon';
import { Link } from '@elements/link/link';

interface MobileNavigationItemProps {
  url: string;
  children: string;
  iconName?: IconName;
}

export const MobileNavigationItem = ({ url, children, iconName }: MobileNavigationItemProps): JSX.Element => {
  const mobileNavigationItemClasses = clsx('');
  const mobileLinkNavigationClasses = clsx(
    'fill-link-water text-link-water before:hidden',
    'hover:fill-peal-lusta hover:text-peal-lusta hover:before:block',
    'focus:fill-peal-lusta focus:text-peal-lusta focus:before:block',
    'relative flex h-full flex-col items-center justify-center gap-0.5 py-2 px-1',
    'before:absolute before:inset-1 before:rounded-md before:bg-alto/20'
  );

  return (
    <li className={mobileNavigationItemClasses} data-testid={'mobile-navigation-list-item'}>
      <Link
        className={mobileLinkNavigationClasses}
        url={url}
        testId="mobile-navigation-link"
        activeClassName={clsx('fill-peal-lusta font-bold text-peal-lusta before:!block')}
      >
        {iconName && <Icon icon={iconName} className="h-4 w-4" testId="mobile-navigation-link-icon" />}
        <span className="text-[0.625rem]">{children}</span>
      </Link>
    </li>
  );
};
