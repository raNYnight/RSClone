export type pageMarkup = () => Promise<string>

export interface paths {
  [key: string]: pageMarkup
}

