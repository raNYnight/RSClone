import { DashboardComponent } from '../components/pages/dashboard/dashboard';
import { LoginComponent } from '../components/pages/login/login';
import { MainComponent } from '../components/pages/main/main';
import { SignupComponent } from '../components/pages/registation/signup';
import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from '../components/header/header';


export async function build(page: string): Promise<void> {
  const main: HTMLElement = document.createElement('main');
  main.classList.add('main');
  document.body.innerHTML = '';
  main.innerHTML = '';
  document.body.insertAdjacentHTML('afterbegin', await new HeaderComponent().getHtml());
  document.body.insertAdjacentElement('beforeend', main);
  document.body.insertAdjacentHTML('beforeend', await new FooterComponent().getHtml());

  if (page.startsWith('main')) {
    main.innerHTML = await new MainComponent().getHtml();
  } else if (page === 'dashboard') {
    main.innerHTML = await new DashboardComponent().getHtml();
  } else if (page === 'signup') {
    main.innerHTML = await new SignupComponent().getHtml();
  } else if (page === 'login') {
    main.innerHTML = await new LoginComponent().getHtml();
  }
}
