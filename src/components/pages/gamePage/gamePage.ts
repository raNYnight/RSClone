import { GameAreaComponent } from '../../game-area/game-area';
import { GamesStatsComponent } from '../../games-stats/games-stats';
import { GameAboutComponent } from '../../game-about/game-about';

export class GamePageComponent {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  async getHtml(): Promise<string> {
    const areaSection = new GameAreaComponent(this.id);
    const statsSection = new GamesStatsComponent(this.id);
    const aboutSection = new GameAboutComponent(this.id);

    return `${await areaSection.getHtml()}
    <section class="game-info">      
      ${await statsSection.getHtml()}
      ${await aboutSection.getHtml()}
    </section>`;
  }

  async setListeners(): Promise<void> {
    const startBTN = document.querySelector('.greeting_btn')! as HTMLButtonElement;
    startBTN.addEventListener('click', this.gameStarter);
  }

  // В каждом тесте-компоненте переопределям этот метод под логику конкретного теста
  async gameStarter(): Promise<void> {
    const greeting = document.querySelector('.greeting') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;
    const playField = '<section class="play-field"></section>';
    greeting.remove();
    main.insertAdjacentHTML('afterbegin', playField);
  }
}
