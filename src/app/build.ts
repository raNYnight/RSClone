import { DashboardComponent } from '../components/pages/dashboard/dashboard';
import { LoginComponent } from '../components/pages/login/login';
import { MainComponent } from '../components/pages/main/main';
import { SignupComponent } from '../components/pages/registation/signup';
import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from '../components/header/header';
import { pageMarkup } from 'interfaces/paths';


export async function build(page: pageMarkup): Promise<void> {
  const main: HTMLElement = document.createElement('main');
  main.classList.add('main');
  document.body.innerHTML = '';
  main.innerHTML = '';
  document.body.insertAdjacentHTML('afterbegin', await new HeaderComponent().getHtml());
  document.body.insertAdjacentElement('beforeend', main);
  document.body.insertAdjacentHTML('beforeend', await new FooterComponent().getHtml());

  main.innerHTML = await page();

}
