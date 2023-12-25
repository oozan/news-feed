export const isExternalUrl = (url: string): boolean =>
  url.substring(0, 8) === 'https://' || url.substring(0, 7) === 'http://' || url.substring(0, 2) === '//';
