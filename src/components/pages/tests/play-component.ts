import { Tests } from '../../../APIs/Tests';
import { UsersService } from '../../../APIs/UsersService';
import { lang } from '../../../components/translate/translate';
import { gamesInfo } from '../../../utils/games-info';
import { state } from '../../../utils/state';
import { Igame, PlayedTest } from '../../../utils/types';
import { GamePageComponent } from '../game-page/game-page';
import { SPINNER_SVG } from '../../../assets/icons/svg';
import { LocalGameStorage } from '../../../utils/localGameStorage';

export class PlayComponent {
  async gameStarter(): Promise<void> {
    const language = state.isEngl ? 'en' : 'ru';
    const modal: string = `<div id="loading-modal" class="modal">
    <div class="modal-content">
      <p>${lang[language].common.loading}   ${SPINNER_SVG}</p>
    </div>
  </div>`;
    const greeting = document.querySelector('.greeting') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;
    const playField = '<section class="play-field"></section>';
    greeting.remove();

    main.insertAdjacentHTML('beforeend', modal);
    main.insertAdjacentHTML('afterbegin', playField);
  }

  async gameEnd(gameID: number, score: number, scoreUnits: string): Promise<void> {
    const playField = document.querySelector('.play-field') as HTMLElement;
    const language = state.isEngl ? 'en' : 'ru';
    const gameInfo: Igame = gamesInfo.filter((el) => el.id === gameID)[0];
    playField.innerHTML = `
    <div class="greeting_svg-wrap game-end_svg-wrap">${gameInfo.svg}</div>
    <h3>${gameInfo.name[language]}</h3>
    <h2>${lang[language].dashboard.score}: ${score} ${scoreUnits}</h2>
    <div class="game-end_btns">
    <div class="greeting_btn greeting-a" id="SaveScore">${lang[language].common.saveScore}</div>
    <div class="greeting_btn greeting-a try-again_btn" id="tryAgain" href="#${gameInfo.href}">${lang[language].common.tryAgain}</div>
      </div>
    `;
    const tryAgain = document.querySelector('#tryAgain') as HTMLElement;
    const saveScore = document.querySelector('#SaveScore') as HTMLElement;
    tryAgain.addEventListener('click', async () => {
      await this.newGame(gameID);
    });
    saveScore.addEventListener('click', async () => {
      const currUser = UsersService.getCookie();

      const playedTest: PlayedTest = {
        user_id: currUser ? currUser.userId! : 36,
        tests_id: gameID,
        date: new Date().toISOString(),
        score: score,
      };
      if (!currUser) {
        LocalGameStorage.addGame(playedTest);
      }
      this.showModal();
      await Tests.addTestInDB(playedTest).then(() => {
        window.location.hash = 'dashboard';
        this.hideModal();
      });
    });
  }

  async newGame(gameID: number) {
    const main = document.querySelector('main') as HTMLElement;
    const newGame = new GamePageComponent(gameID);
    main.innerHTML = await newGame.getHtml();
    newGame.setListeners();
  }

  showModal() {
    const modalNode = document.querySelector('#loading-modal') as HTMLElement;
    modalNode.style.display = 'block';
  }

  hideModal() {
    const modalNode = document.querySelector('#loading-modal') as HTMLElement;
    modalNode.style.display = 'none';
  }

  animateBGright(bg: HTMLElement) {
    bg.classList.add('right-animation');
    bg.addEventListener('animationend', () => bg.classList.remove('right-animation'));
  }

  animateBGwrong(bg: HTMLElement) {
    bg.classList.add('wrong-animation');
    bg.addEventListener('animationend', () => bg.classList.remove('wrong-animation'));
  }
}
