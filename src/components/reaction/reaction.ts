import { GameAreaComponent } from '../game-area/game-area';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class ReactionComponent {
  async getHtml(): Promise<string> {

    const ID_REACTION: number = 2;

    const areaSection = new GameAreaComponent(ID_REACTION, gamesInfo);
    const statsSection = new GamesStatsComponent(ID_REACTION);
    const aboutSection = new GameAboutComponent(ID_REACTION, gamesInfo);

    return `${await areaSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}