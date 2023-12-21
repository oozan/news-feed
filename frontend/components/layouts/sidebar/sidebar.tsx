import { DesktopNavigation } from '@blocks/desktop-navigation/desktop-navigation';
import clsx from 'clsx';

interface SidebarProps {
  className?: string;
  testId?: string;
}

export const Sidebar = ({ testId, className = '' }: SidebarProps): JSX.Element | null => {
  const sidebarClasses = clsx(
    'relative z-[100] bg-black transition-all after:absolute after:inset-y-0 after:right-0 after:ml-[-100vw] after:bg-black after:pr-[100vw]',
    { [className]: true }
  );
  return (
    <aside className={sidebarClasses} data-testid={testId ?? 'sidebar'}>
      <section className="sticky top-0 z-10">
        <div className="flex h-[80px] items-center justify-center"></div>
        <DesktopNavigation />
      </section>
    </aside>
  );
};
