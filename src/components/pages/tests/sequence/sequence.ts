import { GamesStatsComponent } from '../../../games-stats/games-stats';
import { GameAboutComponent } from '../../../game-about/game-about';
import { GamePageComponent } from 'components/pages/gamePage/gamePage';
import { GameAreaComponent } from 'components/game-area/game-area';

export class SequenceComponent extends GamePageComponent {
  constructor(id: number) {
    super(id);
    this.id = id;
  }

  async getHtml(): Promise<string> {
    const gameSection = new GameAreaComponent(this.id);
    const statsSection = new GamesStatsComponent(this.id);
    const aboutSection = new GameAboutComponent(this.id);

    return `${await gameSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}
