import './header.css';
import { lang } from '../translate/translate';

export let isEngl: Boolean = true;
export class HeaderComponent {
  async getHtml(): Promise<string> {
    return `<header class="top-nav">
    <div><a class='top-nav-svg' href="#main">${isEngl ? lang.en.main.benchmark : lang.ru.main.benchmark}</a></div>
    <input id="menu-toggle" type="checkbox"/>
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
    <li><a href="#main" class="nav__link">${isEngl ? lang.en.main.main : lang.ru.main.main}</a></li>
      <li><a href="#dashboard" class="nav__link">${isEngl ? lang.en.main.dashboard : lang.ru.main.dashboard}</a></li>
      <li><a href="#signup" class="nav__link">${isEngl ? lang.en.main.sign : lang.ru.main.sign}</a></li>
      <li><a href="#login" class="nav__link">${isEngl ? lang.en.main.login : lang.ru.main.login}</a></li>
    </ul>
  </header>
      `;
  }
}