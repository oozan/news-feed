import clsx from 'clsx';
import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useOnClickOutside } from '@hooks/useOnClickOutside';

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  testId?: string;
  id?: string;
  direction?: 'left' | 'right';
  noBackdrop?: boolean;
  allowedRefs?: MutableRefObject<null>[] | MutableRefObject<null>;
  isFullWidthMobile?: boolean;
}

export const Drawer = ({
  className = '',
  isOpen = false,
  onClose,
  children,
  testId,
  id,
  direction = 'left',
  noBackdrop,
  allowedRefs = [],
  isFullWidthMobile,
}: DrawerProps) => {
  const { t } = useTranslation();
  const [isOpenDelayed, setIsOpenDelayed] = useState(false);
  const [isClosedDelay, setIsClosedDelay] = useState(true);

  const drawerRef = useRef(null);
  const targetRefsArray = useMemo(() => {
    const allowedRefsArray = Array.isArray(allowedRefs) ? allowedRefs : [allowedRefs];

    return [drawerRef, ...allowedRefsArray];
  }, [allowedRefs]);

  useOnClickOutside(targetRefsArray, () => {
    onClose();
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsOpenDelayed(isOpen), 50);
    const closedTimeout = setTimeout(() => setIsClosedDelay(!isOpen), isOpen ? 0 : 200);

    return () => {
      clearTimeout(timeout);
      clearTimeout(closedTimeout);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscapePress = (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.addEventListener('keydown', handleEscapePress as any);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.removeEventListener('keydown', handleEscapePress as any);
    };
  }, [isOpen, onClose]);

  const drawerClasses = {
    left: clsx('', {
      ['max-[1440px]:right-0']: true,
      ['min-[1440px]:pr-[100vw] min-[1440px]:mr-[-100vw] min-[1440px]:right-[calc(calc(100vw-1440px)/2+1.5rem)]']: true,
      ['max-[1440px]:aria-hidden:-right-[100vw] min-[1440px]:aria-hidden:-right-[calc(100vw)]']: true,
    }),
    right: clsx('', {
      ['max-[1440px]:left-0']: true,
      ['min-[1440px]:pl-[100vw] min-[1440px]:ml-[-100vw] min-[1440px]:left-[calc(calc(100vw-1440px)/2+1.5rem)]']: true,
      ['max-[1440px]:aria-hidden:-left-[100vw] min-[1440px]:aria-hidden:-left-[calc(100vw)]']: true,
    }),
  };

  const drawerBaseClasses = clsx('', {
    [className]: true,
    ['top-[56px] bottom-[56px] px-4 overflow-y-auto']: true,
    ['lg:top-[80px] lg:bottom-0 lg:px-6']: true,
    ['min-[1440px]:box-content min-[1440px]:max-w-[552px]']: true,
    ['bg-athens-gray shadow-xl fixed py-8 transition-all z-20 duration-200']: true,
    ['max-w-[600px] w-[75%]']: !isFullWidthMobile,
    ['w-full lg:max-w-[600px]']: isFullWidthMobile,
    [drawerClasses[direction]]: true,
    ['hidden']: isClosedDelay,
  });

  return (
    <>
      <section
        className={drawerBaseClasses}
        aria-hidden={!isOpen || !isOpenDelayed}
        ref={drawerRef}
        id={id}
        data-testid={testId ?? 'drawer'}
        data-direction={direction}
      >
        <button
          className="absolute top-0 right-0 inline-flex h-14 w-14 items-center justify-center bg-athens-gray lg:hidden"
          onClick={onClose}
        >
          <span className="sr-only">{t('common.closeDrawer')}</span>
        </button>
        {isClosedDelay ? null : children}
      </section>
      {!noBackdrop && (
        <div
          data-testid="drawer-backdrop"
          aria-hidden="true"
          className={clsx('fixed inset-0 bg-black/[.50] transition-opacity duration-200', {
            ['z-10 opacity-100']: isOpen,
            ['-z-10 opacity-0']: !isOpen || !isOpenDelayed,
          })}
        />
      )}
    </>
  );
};
