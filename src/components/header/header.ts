import './header.css';
import { lang } from '../translate/translate';
// import { changeLanguage } from '../translate/changeLanguage';
import { state } from '../../utils/state';
import { App } from '../../app/app';
import { Component } from '../../components/component';
import { UsersService } from '../../APIs/UsersService';

export class HeaderComponent implements Component {

  async getHtml(): Promise<string> {
    const path = state.isEngl ? lang.en : lang.ru;
    const btnInner = state.isEngl ? 'РУС' : 'ENG';
    const cookie = UsersService.getCookie();
    return `<header class="top-nav">
    <div><a class='top-nav-svg' href="#main">${lang.en.main.benchmark}</a></div>    
    <input id="menu-toggle" type="checkbox"/>
    <label class='menu-button-container' for="menu-toggle">
      <div class='menu-button'></div>
    </label>
    <ul class="menu">
      <li><a href="#dashboard" class="nav__link">${path.main.dashboard}</a></li>
      ${!cookie ? `
      <li><a href="#signup" class="nav__link">${path.main.sign}</a></li>
      <li><a href="#login" class="nav__link">${path.main.login}</a></li>
      `
      : 
      `
      <li><a href="#main" class="nav__link log__out">${path.main.logout}</a></li>
      `}

      <li><button class='nav__link change-lang-btn'>${btnInner}</button></li>
    </ul>
  </header>`;
  }

  static setListeners() {
    const changeLangBtn: HTMLButtonElement | null = document.querySelector('.change-lang-btn');  
    const logOutBtn: HTMLAnchorElement | null = document.querySelector('.log__out');
    if (changeLangBtn) {
      changeLangBtn.addEventListener('click', () => {
        state.isEngl = !state.isEngl;
        App.render();
      });
    }

    if (logOutBtn){
      logOutBtn.addEventListener('click', () => {
        UsersService.removeCookie();
        App.render();
      });
    }
  }   
}

