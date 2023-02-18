import { GameAreaComponent } from '../../game-area/game-area';
import { GamesStatsComponent } from '../../games-stats/games-stats';
import { GameAboutComponent } from '../../game-about/game-about';
import { gamesInfo } from '../../../utils/games-info';
import { Igame } from '../../../utils/types';

export class GamePageComponent {
  id: number;

  gameInfo: Igame;

  constructor(id: number) {
    this.id = id;
    this.gameInfo = gamesInfo.filter((el) => el.id === this.id)[0];
  }

  async getHtml(): Promise<string> {
    const areaSection = new GameAreaComponent(this.id);
    const statsSection = new GamesStatsComponent(this.id);
    const aboutSection = new GameAboutComponent(this.id);

    return `${await areaSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }

  async setListeners(): Promise<void> {
    let gameArea = new GameAreaComponent(this.id);

    await gameArea.setListeners();
  }
}
