export interface Igame {
  id: number,
  name: {
    en: string,
    ru: string,
  },
  description: {
    en: string,
    ru: string,
  },
  new: boolean,
  svg: string,
  href: string,
  hrefStats: string,
}