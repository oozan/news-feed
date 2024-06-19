import { MobileNavigation } from '@blocks/mobile-navigation/mobile-navigation';
import { Sidebar } from '@layouts/sidebar/sidebar';
import clsx from 'clsx';

export interface LayoutProps {
  children: React.ReactNode;
  testId?: string;
}

export const Layout = ({ children, testId }: LayoutProps): JSX.Element => {
  const layoutClasses = clsx(
    'relative mx-auto min-h-screen max-w-[1440px] lg:grid lg:grid-cols-[240px,1fr] lg:grid-rows-[80px,1fr]',
    {}
  );
  const mainClasses = clsx('max-lg:mt-14 lg:row-start-2');

  return (
    <section className={layoutClasses} data-testid={testId}>
      <Sidebar className="row-span-2 row-start-1 max-lg:hidden" />
      <main className={mainClasses} data-testid="main">
        {children}
      </main>
      <MobileNavigation />
    </section>
  );
};
