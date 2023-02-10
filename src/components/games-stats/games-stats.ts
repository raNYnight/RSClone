import { Igame } from 'utils/types';
import { state } from '../../utils/state';
import { lang } from '../translate/translate';
import { gamesInfo } from '../../utils/games-info';

export class GamesStatsComponent {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  async getHtml(): Promise<string> {

    const gameInfo: Igame = gamesInfo.filter((el) => el.id === this.id)[0];

    const language = state.isEngl ? 'en' : 'ru';

    //Дописать рендер графика статистики
    return `<div class="game-about">
        <p class="title">${lang[language].common.statistics}</p>
        <p class="text">${gameInfo.aboutTest[language]}</p>
      </div>`;
  }
}