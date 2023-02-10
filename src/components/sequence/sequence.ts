import { GameAreaComponent } from '../game-area/game-area';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class SequenceComponent {
  async getHtml(): Promise<string> {

    const ID_SEQUENCE: number = 3;

    const areaSection = new GameAreaComponent(ID_SEQUENCE, gamesInfo);
    const statsSection = new GamesStatsComponent(ID_SEQUENCE);
    const aboutSection = new GameAboutComponent(ID_SEQUENCE, gamesInfo);

    return `${await areaSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}