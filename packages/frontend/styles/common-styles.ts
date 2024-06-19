import clsx from 'clsx';

export const inputStateStyles = (hasError?: boolean) =>
  clsx(
    'rounded border border-port-gore/40 bg-white leading-[1.5] text-port-gore',
    'placeholder:text-port-gore/40',
    'disabled:border-port-gore/40 disabled:bg-alto disabled:text-port-gore/40 disabled:opacity-100',
    'enabled:hover:border-sherpa-blue enabled:hover:ring-4 enabled:hover:ring-downy/25',
    'focus:border-sherpa-blue focus:ring-4 focus:ring-downy/25',
    { ['!border-carnation ring-4 ring-carnation/25 focus:!ring-carnation/25']: hasError }
  );

export const inputLabelStyles = (isLabelHidden?: boolean) =>
  clsx('break-words pt-1 text-port-gore/70', { ['sr-only']: isLabelHidden });
