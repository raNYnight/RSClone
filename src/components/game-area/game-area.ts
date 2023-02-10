import './game-area.scss';
import { Igame } from 'utils/types';
import { state } from '../../utils/state';
import { lang } from '../translate/translate';
import { gamesInfo } from '../../utils/games-info';

export class GameAreaComponent {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  async getHtml(): Promise<string> {

    const gameInfo: Igame = gamesInfo.filter((el) => el.id === this.id)[0];

    const language = state.isEngl ? 'en' : 'ru';

    if (gameInfo.name.en !== 'Typing') {
      return `<section class="greeting">
        <div class="greeting_svg-wrap">${gameInfo.svg}</div>
        <h1>${gameInfo.name[language]}</h1>
        <h4>${gameInfo.description[language]}</h4>
        <div class="greeting_btn greeting-a">${lang[language].common.start}</div>
      </section>`;
    } else {
      return `<section class="greeting">
        <h1>${gameInfo.name[language]}</h1>
        <h4>${gameInfo.description[language]}</h4>
        <div class="text-area">${lang[language].typing.typingText}</div>
        <div class="greeting_btn greeting-a">${lang[language].common.start}</div>
      </section>`;
    }    
  }

}

