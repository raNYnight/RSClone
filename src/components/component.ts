export interface Component{
  getHtml: () => Promise<string>,
  setListeners?: () => void,
}