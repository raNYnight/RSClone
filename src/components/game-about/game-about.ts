import { Igame } from 'utils/types';
import { state } from '../../utils/state';
import { lang } from '../translate/translate';

export class GameAboutComponent {

  id: number;

  gameInfo: Igame;

  constructor(id: number, gamesInfo: Igame[]) {
    this.id = id;
    this.gameInfo = gamesInfo.filter((el) => el.id === this.id)[0];
  }

  async getHtml(): Promise<string> {

    const language = state.isEngl ? 'en' : 'ru';

    return `<div class="game-stats">
        <h2 class="activity_title-bold>${lang[language].common.about}</h2>
        <div class="stats-wrap">${this.gameInfo.aboutTest[language]}</div>
      </div>`;
  }
}