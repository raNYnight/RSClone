import './game-greeting.scss';
import { Igame } from 'utils/types';
import { state } from '../../utils/state';
import { lang } from '../../components/translate/translate';

export class GameGreetingComponent {
  id: number;

  gameInfo: Igame;

  constructor(id: number, gamesInfo: Igame[]) {
    this.id = id;
    this.gameInfo = gamesInfo.filter((el) => el.id === this.id)[0];
  }

  async getHtml(): Promise<string> {
    const language = state.isEngl ? 'en' : 'ru';

    if (this.gameInfo.name.en !== 'Typing') {
      return `<section class="greeting">
        <div class="greeting_svg-wrap">${this.gameInfo.svg}</div>
        <h1>${this.gameInfo.name[language]}</h1>
        <h4>${this.gameInfo.description[language]}</h4>
        <div class="greeting_btn greeting-a">${lang[language].common.start}</div>
      </section>`;
    } else {
      return `<section class="greeting">
        <h1>${this.gameInfo.name[language]}</h1>
        <h4>${this.gameInfo.description[language]}</h4>
        <div class="text-area">${lang[language].typing.typingText}</div>
        <div class="greeting_btn greeting-a">${lang[language].common.start}</div>
      </section>`;
    }
  }

  // async gameStarter() {
  //   const greeting = document.querySelector('.greeting') as HTMLElement;
  //   const main = document.querySelector('main') as HTMLElement;
  //   const playField = '<section class="play-field"> </section>';
  //   greeting.remove();
  //   main.insertAdjacentHTML('afterbegin', playField);
  // }

  // async setListeners() {
  //   const startBTN = document.querySelector('.greeting_btn') as HTMLButtonElement;
  //   startBTN.addEventListener('click', this.gameStarter);
  // }
}
