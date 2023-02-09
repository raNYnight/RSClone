import { Igame } from 'utils/types';
import { state } from '../../utils/state';
import { lang } from '../translate/translate';

export class GamesStatsComponent {

  id: number;

  gameInfo: Igame;

  constructor(id: number, gamesInfo: Igame[]) {
    this.id = id;
    this.gameInfo = gamesInfo.filter((el) => el.id === this.id)[0];
  }

  async getHtml(): Promise<string> {

    const language = state.isEngl ? 'en' : 'ru';

    //Дописать рендер графика статистики
    return `<div class="game-about">
        <p class="title">${lang[language].common.statistics}</p>
        <p class="text">${this.gameInfo.aboutTest[language]}</p>
      </div>`;
  }
}