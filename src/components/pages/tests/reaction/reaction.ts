import { PlayedTest } from '../../../../utils/types';
import { UsersService } from '../../../../APIs/UsersService';
import { getRandomInt } from '../../../../utils/random';
import { state } from '../../../../utils/state';
import { PlayComponent } from '../play-component';
import './reaction.scss';
import { pageData, ReactionPages } from './reactionPages';
import { Tests } from '../../../../APIs/Tests';
import { routerPaths } from '../../../../app/routerPaths';
import { build } from '../../../../app/build';
import { lang } from 'components/translate/translate';
import { LocalGameStorage } from '../../../../utils/localGameStorage';
import { ModalWindow } from '../../../../components/pages/modalWindow';

export class ReactionComponent extends PlayComponent {
  defaultFieldColor = 'rgb(43, 135, 209)';

  playField: HTMLElement | undefined;

  language: string | undefined;

  results: number[] = [];

  async gameStarter(): Promise<void> {
    await super.gameStarter();
    this.language = state.isEngl ? 'en' : 'ru';
    this.playField = document.querySelector('.play-field') as HTMLElement;
    this.playField.className = 'play-field pointer';
    this.playField.insertAdjacentHTML('afterbegin', '<div class="react-game-field"></div>');
    this.changeState('red');
  }

  async changeState(page: ReactionPages, time?: number): Promise<void> {
    const data = pageData[this.language || 'en'][page];
    const Msg = `
    <div class="reaction-wrapper">
      <div class="decor">
        ${data.decor}
      </div>
      ${page === 'end' ? `<p class="end-title">${data.title}</p>` : ''}
      <p class="main-msg">${time ? time + data.text : data.text}</p>
      <p class="sub-msg">${data.sub || ''}</p>
      ${
        page === 'end'
          ? `
      <div class="end-btns">
      <button class="greeting_btn greeting-a save">${data.btnSave || ''}</button>
      <button class="greeting_btn greeting-a try-again_btn">${data.btnTry || ''}</button>
      </div>`
          : ''
      }
    </div>
    `;
    if (this.playField && this.language) {
      this.playField.className = 'play-field pointer';
      this.playField.classList.add(data.style);
      this.playField.innerHTML = Msg;

      switch (page) {
        case 'red': {
          const delay = getRandomInt(2000, 6001);
          const timeout = setTimeout(() => {
            this.removeListeners();
            this.changeState('green');
          }, delay);
          this.playField.addEventListener('click', (event: Event) => {
            clearTimeout(timeout);
            this.navigate('fail', event);
          });
          break;
        }
        case 'fail': {
          this.playField.addEventListener('click', (event: Event) => {
            this.navigate('red', event);
          });
          break;
        }
        case 'green': {
          const startTime = performance.now();
          this.playField.addEventListener('click', (event: Event) => {
            this.navigate('result', event, Math.round(performance.now() - startTime));
          });
          break;
        }
        case 'result': {
          let pageToGo: ReactionPages = 'red';
          if (time) this.results.push(time);
          if (this.results.length === 5) pageToGo = 'end';
          this.playField.addEventListener('click', (event: Event) => {
            let ms: number | undefined = undefined;
            if (pageToGo === 'end') ms = time;
            this.navigate(pageToGo, event, ms);
          });
          break;
        }
        case 'end': {
          const saveBtn = this.playField.querySelector('.save');
          const tryAgainBtn = this.playField.querySelector('.try-again_btn');
          this.playField.style.cursor = 'default';
          if (saveBtn && tryAgainBtn) {
            const save = (event: Event) => {
              this.saveScore();
              if (event.target) event.target.removeEventListener('click', save);
            };
            saveBtn.addEventListener('click', save);
            tryAgainBtn.addEventListener('click', async () => {
              await super.newGame(2);
            });
          }
          break;
        }
      }
    }
  }

  async removeListeners(): Promise<void> {
    if (this.playField) {
      const clone = this.playField.cloneNode(true) as HTMLElement;
      this.playField.parentNode?.replaceChild(clone, this.playField);
      this.playField = clone;
    }
  }

  async navigate(page: ReactionPages, event: Event, ms?: number): Promise<void> {
    event.stopImmediatePropagation();
    this.removeListeners();
    this.changeState(page, ms);
  }

  async saveScore(): Promise<void> {
    const userData = await UsersService.getCookie();
    const score = this.results.reduce((acc, curr) => acc + curr, 0);
    const modal = new ModalWindow();
    const playedTest: PlayedTest = {
      user_id: userData ? userData.userId! : 36,
      tests_id: 2,
      date: new Date().toISOString(),
      score: parseInt((score / 5).toString()),
    };
    if (!userData) {
      LocalGameStorage.addGame(playedTest);
    }
    modal.showModal();
    await Tests.addTestInDB(playedTest).then(() => {
      window.location.hash = 'dashboard';
      modal.hideModal();
    });
  }
}
