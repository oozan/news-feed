import { Icon } from '@elements/icon/icon';
import clsx from 'clsx';

import { ButtonBaseProps, buttonIconClasses } from './button';

interface ButtonExternalProps {
  children: ButtonBaseProps['children'];
  className?: string;
  url: string;
  testId?: string;
  icon?: ButtonBaseProps['icon'];
}

export const ButtonExternal = ({ children, className = '', url, testId, icon }: ButtonExternalProps): JSX.Element => (
  <a
    href={url}
    className={clsx({ [className]: true })}
    data-testid={testId ?? 'button-external'}
    rel="noreferrer nofollow"
  >
    {children}
    {icon && <Icon icon={icon} className={buttonIconClasses} />}
  </a>
);
