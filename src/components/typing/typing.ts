import { GameGreetingComponent } from '../game-greeting/game-greeting';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class TypingComponent {
  async getHtml(): Promise<string> {

    const ID_TYPING: number = 9;

    const greetingSection = new GameGreetingComponent(ID_TYPING, gamesInfo);
    const statsSection = new GamesStatsComponent(ID_TYPING, gamesInfo);
    const aboutSection = new GameAboutComponent(ID_TYPING, gamesInfo);

    return `${await greetingSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}