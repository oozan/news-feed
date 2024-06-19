import { Icon } from '@elements/icon/icon';
import clsx from 'clsx';
import Link from 'next/link';

import { ButtonBaseProps, buttonIconClasses } from './button';

interface ButtonInternalProps {
  children: ButtonBaseProps['children'];
  className?: string;
  url: string;
  testId?: string;
  icon?: ButtonBaseProps['icon'];
}

export const ButtonInternal = ({ children, className = '', url, testId, icon }: ButtonInternalProps): JSX.Element => (
  <Link href={url} className={clsx({ [className]: true })} data-testid={testId ?? 'button-internal'}>
    {children}
    {icon && <Icon icon={icon} className={buttonIconClasses} />}
  </Link>
);
