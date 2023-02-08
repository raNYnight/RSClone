import { GameGreetingComponent } from '../game-greeting/game-greeting';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class SequenceComponent {
  async getHtml(): Promise<string> {

    const ID_SEQUENCE: number = 3;

    const greetingSection = new GameGreetingComponent(ID_SEQUENCE, gamesInfo);
    const statsSection = new GamesStatsComponent(ID_SEQUENCE, gamesInfo);
    const aboutSection = new GameAboutComponent(ID_SEQUENCE, gamesInfo);

    return `${await greetingSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}