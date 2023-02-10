import { GameAreaComponent } from '../game-area/game-area';
// import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class TypingComponent {
  async getHtml(): Promise<string> {

    const ID_TYPING: number = 9;

    const areaSection = new GameAreaComponent(ID_TYPING);
    const statsSection = new GamesStatsComponent(ID_TYPING);
    const aboutSection = new GameAboutComponent(ID_TYPING);

    return `${await areaSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}