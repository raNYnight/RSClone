import { GameAreaComponent } from '../../game-area/game-area';
import { GamesStatsComponent } from '../../games-stats/games-stats';
import { GameAboutComponent } from '../../game-about/game-about';
import { GraphComponent } from '../../../components/graphic/graphic';
import { gamesInfo } from '../../../utils/games-info';
import { Igame } from '../../../utils/types';
import { UsersService } from '../../../APIs/UsersService';

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
    const currUser = UsersService.getCookie();
    let gameArea = new GameAreaComponent(this.id);
    const graph = new GraphComponent(this.id);
    if (!currUser && localStorage.length === 0) await graph.renderGraph();
    if (!currUser && localStorage.length > 0) await graph.renderGraph();
    if (currUser) await graph.renderGraph();

    await gameArea.setListeners();
  }
}
