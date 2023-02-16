import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from '../components/header/header';
import { PageMarkup } from 'interfaces/paths';
import { StatsPageComponent } from '../components/pages/statsPage/statsPage';

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
  if (pageComponent.setListeners) pageComponent.setListeners();
  if (pageComponent instanceof StatsPageComponent) pageComponent.renderGraph();
}
