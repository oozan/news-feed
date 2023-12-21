export const isExternalUrl = (url: string): boolean =>
  url.startsWith('https://') || url.substring(0, 7) === 'http://' || url.substring(0, 2) === '//';
