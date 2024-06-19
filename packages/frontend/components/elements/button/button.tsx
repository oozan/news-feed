import { ButtonExternal } from '@elements/button/button.external';
import { ButtonInternal } from '@elements/button/button.internal';
import { ButtonPlain } from '@elements/button/button.plain';
import { IconName } from '@elements/icon/icon';
import clsx from 'clsx';
import { isExternalUrl } from 'utils/isExternalUrl';

export interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  testId?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  isDisabled?: boolean;
  icon?: IconName;
}

interface ButtonLinkProps extends ButtonBaseProps {
  url: string;
  type?: undefined;
  onClick?: undefined;
  ariaExpanded?: undefined;
  ariaControls?: undefined;
}

interface ButtonProps extends ButtonBaseProps {
  type?: 'button' | 'submit' | 'reset';
  url?: undefined;
  onClick?: () => void;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

export const buttonIconClasses = clsx('h-4 w-4');

export const Button = ({
  children,
  className = '',
  onClick = () => {},
  testId,
  url,
  type = 'button',
  ariaExpanded,
  ariaControls,
  variant = 'primary',
  isDisabled,
  icon,
}: ButtonProps | ButtonLinkProps): JSX.Element => {
  const primaryClasses = clsx(
    !isDisabled && [
      'bg-sherpa-blue fill-peal-lusta text-peal-lusta',
      'hover:bg-downy hover:after:block',
      'focus:bg-downy',
      'active:bg-sherpa-blue active:opacity-70 active:after:block',
      'after:bg-peal-lusta after:absolute after:inset-x-0 after:bottom-0 after:hidden after:h-0.5',
    ],
    ['disabled:bg-alto disabled:fill-scorpion/30 disabled:text-scorpion/30']
  );

  const secondaryClasses = clsx(
    'outline outline-2 -outline-offset-[2px]',
    !isDisabled && [
      'fill-sherpa-blue text-sherpa-blue',
      'hover:bg-downy/10',
      'focus:bg-downy/10 focus:outline-sherpa-blue',
      'active:bg-downy/10 active:fill-sherpa-blue/70 active:text-sherpa-blue/70 active:outline-downy',
    ],
    ['disabled:fill-scorpion/30 disabled:text-scorpion/30 disabled:outline-alto']
  );

  const tertiaryClasses = clsx(
    !isDisabled && [
      'fill-sherpa-blue text-sherpa-blue',
      'hover:bg-downy/10',
      'focus:bg-downy/10',
      'active:fill-sherpa-blue/70 active:text-sherpa-blue/70 active:outline-downy',
    ],
    ['disabled:fill-scorpion/30 disabled:text-scorpion/30']
  );

  const buttonVariantStyles = (() => {
    switch (variant) {
      case 'primary':
        return primaryClasses;
      case 'secondary':
        return secondaryClasses;
      case 'tertiary':
        return tertiaryClasses;
    }
  })();

  const buttonClasses = clsx(
    'relative inline-block overflow-hidden rounded py-[9px] leading-[1.5] disabled:cursor-not-allowed',
    {
      ['px-8']: !icon,
      ['inline-flex items-center gap-4 pl-8 pr-4']: icon,
      [buttonVariantStyles]: true,
      [className]: true,
    }
  );

  const commonProps = {
    testId,
    className: buttonClasses,
    icon,
  };

  if (!!url) {
    if (isExternalUrl(url)) {
      return (
        <ButtonExternal url={url} {...commonProps}>
          {children}
        </ButtonExternal>
      );
    }

    return (
      <ButtonInternal url={url} {...commonProps}>
        {children}
      </ButtonInternal>
    );
  }

  return (
    <ButtonPlain
      type={type}
      onClick={onClick}
      ariaControls={ariaControls}
      ariaExpanded={ariaExpanded}
      isDisabled={isDisabled}
      {...commonProps}
    >
      {children}
    </ButtonPlain>
  );
};
