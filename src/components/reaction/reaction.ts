import './reaction.scss';
// import { lang } from '../translate/translate';
// import { Ilanguage } from '../translate/translateInterfase';
// import { Igame } from 'utils/types';
// import { gamesInfo } from '../../utils/games-info';
// import { state } from '../../utils/state';
import { GameGreetingComponent } from '../game-greeting/game-greeting';
import { gamesInfo } from '../../utils/games-info';
import { GameAboutComponent } from '../game-about/game-about';


export class ReactionComponent {
  async getHtml(): Promise<string> {
    const greetingSection = new GameGreetingComponent(2, gamesInfo);
    // const statisticsSection = new GameStatisticsComponent(2, gamesInfo);
    const aboutSection = new GameAboutComponent(2, gamesInfo);

    return `${await greetingSection.getHtml()}
    <section class="game-info">
      ${await aboutSection.getHtml()}
    </section>`;
  }
}