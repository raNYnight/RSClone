import { GameAreaComponent } from '../game-area/game-area';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class VerbalComponent {
  async getHtml(): Promise<string> {

    const ID_VERBAL: number = 6;

    const areaSection = new GameAreaComponent(ID_VERBAL, gamesInfo);
    const statsSection = new GamesStatsComponent(ID_VERBAL);
    const aboutSection = new GameAboutComponent(ID_VERBAL, gamesInfo);

    return `${await areaSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}