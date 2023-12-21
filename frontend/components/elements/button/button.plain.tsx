import { Icon } from '@elements/icon/icon';
import clsx from 'clsx';

import { ButtonBaseProps, buttonIconClasses } from './button';

interface ButtonPlainProps {
  children: ButtonBaseProps['children'];
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  testId?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  isDisabled?: ButtonBaseProps['isDisabled'];
  icon?: ButtonBaseProps['icon'];
}

export const ButtonPlain = ({
  children,
  onClick,
  className = '',
  type = 'button',
  testId,
  ariaExpanded,
  ariaControls,
  isDisabled,
  icon,
}: ButtonPlainProps): JSX.Element => (
  <button
    type={type}
    onClick={onClick}
    className={clsx({ [className]: true })}
    data-testid={testId ?? 'button-plain'}
    aria-expanded={ariaExpanded}
    aria-controls={ariaControls}
    disabled={isDisabled}
  >
    {children}
    {icon && <Icon icon={icon} className={buttonIconClasses} />}
  </button>
);
