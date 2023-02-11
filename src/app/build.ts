import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from '../components/header/header';
import { pageMarkup } from 'interfaces/paths';

export async function build(page: pageMarkup): Promise<void> {
  console.log(page);
  
  const main: HTMLElement = document.createElement('main');
  main.classList.add('main');
  document.body.innerHTML = '';
  main.innerHTML = '';
  document.body.insertAdjacentHTML('afterbegin', await new HeaderComponent().getHtml());
  HeaderComponent.setListeners();
  document.body.insertAdjacentElement('beforeend', main);
  document.body.insertAdjacentHTML('beforeend', await new FooterComponent().getHtml());

  const pageComponent = page();
  main.innerHTML = await pageComponent.getHtml();
  if (pageComponent.setListeners) pageComponent.setListeners();
}
