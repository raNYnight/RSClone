import { GameAreaComponent } from '../../game-area/game-area';
import { GamesStatsComponent } from '../../games-stats/games-stats';
import { GameAboutComponent } from '../../game-about/game-about';


export class GamePageComponent {

  id: number;

  constructor(id: number) {
    this.id = id;
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
}