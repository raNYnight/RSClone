import { GameAreaComponent } from '../game-area/game-area';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class NumberComponent {
  async getHtml(): Promise<string> {

    const ID_NUMBER: number = 7;

    const areaSection = new GameAreaComponent(ID_NUMBER, gamesInfo);
    const statsSection = new GamesStatsComponent(ID_NUMBER);
    const aboutSection = new GameAboutComponent(ID_NUMBER, gamesInfo);

    return `${await areaSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}