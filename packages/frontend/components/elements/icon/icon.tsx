import clsx from 'clsx';

export enum IconName {
  home = 'home',
  news = 'news',
}

interface IconProps {
  className?: string;
  icon: IconName;
  testId?: string;
}

export const Icon = ({ className = '', icon, testId }: IconProps) => {
  const iconClasses = clsx('translate-y-px', { [className]: true });

  return (
    <svg data-testid={testId ?? `icon-${icon}`} className={iconClasses} aria-hidden="true">
      <use href={`/sprites/solid.svg#${icon}`} />
    </svg>
  );
};
