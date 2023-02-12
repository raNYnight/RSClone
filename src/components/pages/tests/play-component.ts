import { lang } from '../../../components/translate/translate';
import { gamesInfo } from '../../../utils/games-info';
import { state } from '../../../utils/state';
import { Igame } from '../../../utils/types';
import { GamePageComponent } from '../game-page/game-page';

export class PlayComponent {
  async gameStarter(): Promise<void> {
    console.log('PLAY-COMPONENTS');

    const greeting = document.querySelector('.greeting') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;
    const playField = '<section class="play-field"></section>';
    greeting.remove();
    main.insertAdjacentHTML('afterbegin', playField);
  }

  async gameEnd(gameID: number, score: string): Promise<void> {
    const playField = document.querySelector('.play-field') as HTMLElement;
    const language = state.isEngl ? 'en' : 'ru';
    const gameInfo: Igame = gamesInfo.filter((el) => el.id === gameID)[0];
    playField.innerHTML = `
    <div class="greeting_svg-wrap game-end_svg-wrap">${gameInfo.svg}</div>
    <h3>${gameInfo.name[language]}</h3>
    <h2>SCORE: ${score}</h2>
    <div clas="game-end_btns">
    <div class="greeting_btn greeting-a" id="SaveScore">${lang[language].common.saveScore}</div>
    <div class="greeting_btn greeting-a try-again_btn" id="tryAgain" href="#${gameInfo.href}">${lang[language].common.tryAgain}</div>
      </div>
    `;
    const tryAgain = document.querySelector('#tryAgain') as HTMLElement;
    const saveScore = document.querySelector('#SaveScore') as HTMLElement;
    tryAgain.addEventListener('click', async () => {
      const main = document.querySelector('main') as HTMLElement;
      const newGame = new GamePageComponent(gameID);
      main.innerHTML = await newGame.getHtml();
      newGame.setListeners();
    });
  }
}
