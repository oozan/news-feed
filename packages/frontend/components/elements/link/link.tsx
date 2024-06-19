import { LinkExternal } from '@elements/link/link.external';
import { LinkInternal } from '@elements/link/link.internal';
import clsx from 'clsx';
import { isExternalUrl } from 'utils/isExternalUrl';

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  url: string;
  testId?: string;
  isAbsolute?: boolean;
}

export const Link = ({ url, children, className = '', activeClassName = '', testId, isAbsolute }: LinkProps) => {
  const linkClasses = clsx('', {
    [className]: className,
  });

  const linkContent = (
    <>
      {isAbsolute && <span className="absolute inset-0" aria-hidden="true" />}
      {children}
    </>
  );

  if (isExternalUrl(url)) {
    return (
      <LinkExternal url={url} className={linkClasses} testId={testId}>
        {linkContent}
      </LinkExternal>
    );
  }

  return (
    <LinkInternal url={url} className={linkClasses} testId={testId} activeClassName={activeClassName}>
      {linkContent}
    </LinkInternal>
  );
};
