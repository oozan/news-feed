import clsx from 'clsx';

interface LinkExternalProps {
  children: React.ReactNode;
  className?: string;
  url: string;
  testId?: string;
}

export const LinkExternal = ({ children, className = '', url, testId }: LinkExternalProps): JSX.Element => (
  <a
    href={url}
    className={clsx({ [className]: true })}
    data-testid={testId ?? 'link-external'}
    rel="noreferrer nofollow"
  >
    {children}
  </a>
);
