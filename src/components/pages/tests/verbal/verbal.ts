/* eslint-disable @typescript-eslint/comma-dangle */
import './verbal.css';
import { TextGenerator } from '../../../../APIs/TextGenerator';
import { lang } from '../../../../components/translate/translate';
import { state } from '../../../../utils/state';
import { PlayComponent } from '../play-component';

export class VerbalComponent extends PlayComponent {
  async gameStarter(): Promise<void> {
    super.gameStarter();
    const language = state.isEngl ? 'en' : 'ru';
    const playField = document.querySelector('.play-field') as HTMLElement;
    playField.insertAdjacentHTML(
      'afterbegin',
      `<section class="play-field">
      <div class="verbal-stats">
      <span class="verbal-stats_span">${lang[language].verbal.lives} | </span>
          <h3 id="LIVES">3</h3>
          <span class="verbal-stats_span">${lang[language].verbal.score} | </span>
          <h3 id="SCORE">3</h3>
      </div>
      <h1 class="verbal-current-word">${await TextGenerator.getRandomWord(language)}</h1>
      <div class="verbal-btns">
          <button id="SEEN" class="greeting_btn greeting-a">${lang[language].verbal.seen} </button>
          <button id="NEW" class="greeting_btn greeting-a">${lang[language].verbal.new} </button>
      </div>
    </section>`
    );
    this.gamePlay();
  }

  gamePlay() {
    let current = document.querySelector('.verbal-current-word') as HTMLElement;
    let lives = document.querySelector('#LIVES') as HTMLElement;
    let score = document.querySelector('#SCORE') as HTMLElement;
    const SEEN_BTN = document.querySelector('#SEEN') as HTMLButtonElement;
    const NEW_BTN = document.querySelector('#NEW') as HTMLButtonElement;
    const language = state.isEngl ? 'en' : 'ru';
    const seenArr: string[] = [];

    SEEN_BTN.addEventListener('click', async () => {
      let index = seenArr.indexOf(current.textContent!);
      switch (true) {
        case index < 0:
          current.textContent! = await this.getWord(language, seenArr);
          seenArr.push(current.textContent!);
          console.log('нажали БЫЛО, но слово новое', seenArr);
          lives.textContent = (+lives.textContent! - 1).toString();
          break;
        case index >= 0:
          current.textContent! = await this.getWord(language, seenArr);
          console.log('НАЖАЛИ БЫЛО, СЛОВО БЫЛО', seenArr);
          score.textContent = (+score.textContent! + 1).toString();
          break;
      }
      if (+lives.textContent! === 0) this.gameEnd(6, +score.textContent!, 'words');
    });
    NEW_BTN.addEventListener('click', async () => {
      let index = seenArr.indexOf(current.textContent!);
      switch (true) {
        case index < 0:
          seenArr.push(current.textContent!);
          current.textContent! = await this.getWord(language, seenArr);
          console.log('Новое слово, нажали НОВОЕ', seenArr);
          score.textContent = (+score.textContent! + 1).toString();
          break;

        case index >= 0:
          current.textContent! = await this.getWord(language, seenArr);
          console.log('слово БЫЛО, нажали НОВОЕ ', seenArr);
          lives.textContent = (+lives.textContent! - 1).toString();
          break;
      }
      if (+lives.textContent! === 0) this.gameEnd(6, +score.textContent!, 'words');
    });
  }

  async getWord(currentLanguage: string, array: string[]) {
    let random: number = Math.round(Math.random());
    let result: string = 'word';
    if (random === 0 || array.length < 3) {
      return TextGenerator.getRandomWord(currentLanguage);
    }
    if (array.length > 2 && random === 1) {
      let randomIndex = Math.floor(Math.random() * array.length);
      let randomWord = array[randomIndex];
      result = randomWord;
    }
    return result;
  }
}
