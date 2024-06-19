export const truncateWithEllipses = (text: string, max: number): string => {
  return text.substring(0, max - 3) + (text.length > max ? '...' : '');
};
