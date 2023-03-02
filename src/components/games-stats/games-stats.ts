import { state } from '../../utils/state';
import { lang } from '../translate/translate';
export class GamesStatsComponent {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  async getHtml(): Promise<string> {
    const language = state.isEngl ? 'en' : 'ru';

    return `<div class="game-about">
        <p class="title">${lang[language].common.statistics}</p>
        <canvas class = "stats-canvas"></canvas>
      </div>`;
  }
}
