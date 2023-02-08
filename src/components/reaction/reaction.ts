import './reaction.scss';
import { GameGreetingComponent } from '../game-greeting/game-greeting';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class ReactionComponent {
  async getHtml(): Promise<string> {
    const greetingSection = new GameGreetingComponent(2, gamesInfo);
    const statsSection = new GamesStatsComponent(2, gamesInfo);
    const aboutSection = new GameAboutComponent(2, gamesInfo);

    return `${await greetingSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}