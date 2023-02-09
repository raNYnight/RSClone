import { GameGreetingComponent } from '../game-greeting/game-greeting';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class NumberComponent {
  async getHtml(): Promise<string> {

    const ID_NUMBER: number = 7;

    const greetingSection = new GameGreetingComponent(ID_NUMBER, gamesInfo);
    const statsSection = new GamesStatsComponent(ID_NUMBER, gamesInfo);
    const aboutSection = new GameAboutComponent(ID_NUMBER, gamesInfo);

    return `${await greetingSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}