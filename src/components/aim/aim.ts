import { GameAreaComponent } from '../game-area/game-area';
// import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class AimComponent {
  async getHtml(): Promise<string> {

    const ID_AIM: number = 5;

    const areaSection = new GameAreaComponent(ID_AIM);
    const statsSection = new GamesStatsComponent(ID_AIM);
    const aboutSection = new GameAboutComponent(ID_AIM);

    return `${await areaSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}