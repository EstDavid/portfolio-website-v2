export function getSlug (title: string) {
  return (title.toLowerCase()).replaceAll(' ', '-');
}