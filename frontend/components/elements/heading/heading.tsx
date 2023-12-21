import clsx from 'clsx';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  variant?: HeadingLevel;
  style?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ variant = 'h2', style, children, className = '' }: HeadingProps) => {
  const HeadingType = variant;

  const parsedStyle = style ?? variant;

  const headingClasses = clsx('', {
    ['text-[length:var(--font-size-heading-1)]']: style === 'h1',
    ['text-[length:var(--font-size-heading-2)]']: style === 'h2',
    ['text-[length:var(--font-size-heading-3)]']: style === 'h3',
    ['text-[length:var(--font-size-heading-4)]']: style === 'h4',
    ['text-[length:var(--font-size-heading-5)]']: style === 'h5',
    ['text-[length:var(--font-size-heading-6)]']: style === 'h6',
    [className]: className,
  });

  return (
    <HeadingType className={headingClasses} data-testid="heading" data-heading-style-level={parsedStyle}>
      {children}
    </HeadingType>
  );
};
