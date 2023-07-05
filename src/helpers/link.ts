export const isExternalLink = (route: string) => {
  return route.startsWith('https://') || route.startsWith('http://');
};
