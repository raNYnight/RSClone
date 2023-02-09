import './reaction.scss';
import { GameGreetingComponent } from '../game-greeting/game-greeting';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class ReactionComponent {
  async getHtml(): Promise<string> {

    const ID_REACTION: number = 2;

    const greetingSection = new GameGreetingComponent(ID_REACTION, gamesInfo);
    const statsSection = new GamesStatsComponent(ID_REACTION, gamesInfo);
    const aboutSection = new GameAboutComponent(ID_REACTION, gamesInfo);

    return `${await greetingSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}