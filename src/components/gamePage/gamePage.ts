import { GameGreetingComponent } from '../game-area/game-area';
import { gamesInfo } from '../../utils/games-info';
import { GamesStatsComponent } from '../games-stats/games-stats';
import { GameAboutComponent } from '../game-about/game-about';
import { Igame } from 'utils/types';


export class GamePageComponent {

  game: Igame;

  constructor(game: Igame) {
    this.game = game;
  }

  async getHtml(): Promise<string> {

    const id: number = 2;

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