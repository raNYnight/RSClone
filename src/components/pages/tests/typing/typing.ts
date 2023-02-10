import './typing.scss';
import { GameGreetingComponent } from '../../../game-greeting/game-greeting';
import { gamesInfo } from '../../../../utils/games-info';
import { GamesStatsComponent } from '../../../games-stats/games-stats';
import { GameAboutComponent } from '../../../game-about/game-about';
import { TestComponents } from '../test-component';

export class TypingComponent extends TestComponents {
  constructor(id: number) {
    super(id);
    this.id = id;
  }

  async getHtml(): Promise<string> {
    const greetingSection = new GameGreetingComponent(this.id, gamesInfo);
    const statsSection = new GamesStatsComponent(this.id, gamesInfo);
    const aboutSection = new GameAboutComponent(this.id, gamesInfo);

    return `${await greetingSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}
