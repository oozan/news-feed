import clsx from 'clsx';

interface ParagraphProps {
  children?: React.ReactNode;
  className?: string;
  testId?: string;
}

export const Paragraph = ({ children, className = '', testId }: ParagraphProps) => {
  const paragraphClasses = clsx('', {
    [className]: className,
  });

  return (
    <p className={paragraphClasses} data-testid={testId ?? 'paragraph'}>
      {children}
    </p>
  );
};
