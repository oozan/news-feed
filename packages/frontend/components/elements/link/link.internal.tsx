import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LinkInternalProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  url: string;
  testId?: string;
}

export const LinkInternal = ({
  children,
  className = '',
  activeClassName = '',
  url,
  testId,
}: LinkInternalProps): JSX.Element => {
  const { asPath, pathname } = useRouter();
  const routerSlugBase = asPath.split('/').filter((item) => item)[0];
  const hrefSlugBase = url.split('/').filter((item) => item)[0];

  const isPartiallyActive = routerSlugBase === hrefSlugBase;

  const isLinkActive = asPath === url || pathname === url || isPartiallyActive;

  const parsedTestId = testId
    ? `${testId}${isLinkActive ? `-active` : ''}`
    : `link-internal${isLinkActive ? `-active` : ''}`;

  return (
    <Link
      href={url}
      className={clsx({ [className]: true, [activeClassName]: isLinkActive })}
      data-testid={parsedTestId}
      aria-current={asPath === url || pathname === url ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};
