import { GameGreetingComponent } from '../game-greeting/game-greeting';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';


export class AimComponent {
  async getHtml(): Promise<string> {

    const ID_AIM: number = 5;

    const greetingSection = new GameGreetingComponent(ID_AIM, gamesInfo);
    const statsSection = new GamesStatsComponent(ID_AIM, gamesInfo);
    const aboutSection = new GameAboutComponent(ID_AIM, gamesInfo);

    return `${await greetingSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }
}