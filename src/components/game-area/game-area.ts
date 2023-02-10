import './game-area.scss';
import { Igame } from 'utils/types';
import { state } from '../../utils/state';
import { lang } from '../translate/translate';


export class GameAreaComponent {

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

}

