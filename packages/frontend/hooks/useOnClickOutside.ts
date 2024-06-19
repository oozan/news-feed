import { useEffect } from 'react';

export const useOnClickOutside = (
  /* eslint-disable @typescript-eslint/no-explicit-any */
  ref: any,
  handler: any
  /* eslint-enable @typescript-eslint/no-explicit-any */
) => {
  useEffect(() => {
    const refArray = Array.isArray(ref) ? ref : [ref];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listener = (event: any) => {
      if (refArray.some((currentRef) => !currentRef.current || currentRef.current?.contains(event.target))) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
