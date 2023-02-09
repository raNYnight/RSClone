import { GameGreetingComponent } from '../game-greeting/game-greeting';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class VerbalComponent {
  async getHtml(): Promise<string> {

    const ID_VERBAL: number = 6;

    const greetingSection = new GameGreetingComponent(ID_VERBAL, gamesInfo);
    const statsSection = new GamesStatsComponent(ID_VERBAL, gamesInfo);
    const aboutSection = new GameAboutComponent(ID_VERBAL, gamesInfo);

    return `${await greetingSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}