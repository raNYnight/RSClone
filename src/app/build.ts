import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from '../components/header/header';
import { PageMarkup } from 'interfaces/paths';
import { TestComponents } from '../components/pages/tests/test-component';

export async function build(page: PageMarkup): Promise<void> {
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
  if (pageComponent instanceof TestComponents) pageComponent.setTestStartListener();

  if (pageComponent.setListeners) pageComponent.setListeners();
}
