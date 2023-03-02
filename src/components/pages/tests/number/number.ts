import { gamesInfo } from '../../../../utils/games-info';
import { lang } from '../../../../components/translate/translate';
import { state } from '../../../../utils/state';
import { PlayComponent } from '../play-component';
import './number.css';
export class NumberComponent extends PlayComponent {
  currentNumberLength: number = 1;

  currentNumber: number = 1;

  userAnswer: number = 1;

  language = state.isEngl ? lang.en : lang.ru;

  async gameStarter() {
    if (document.querySelector('.greeting')) await super.gameStarter();

    const playField = document.querySelector('.play-field') as HTMLElement;
    playField.innerHTML = this.getNumberSlide();
    this.animateLine(this.currentNumberLength + 1);

    playField.addEventListener('click', (e) => {
      let target = e.target as HTMLButtonElement;
      switch (target.id) {
        case 'SUBMIT':
          const input = document.querySelector('.number-input') as HTMLInputElement;
          this.userAnswer = +input.value;
          if (this.userAnswer === this.currentNumber) {
            this.changeSlide(this.getResultPage());
            this.animateBGright(playField);
          } else {
            const language = state.isEngl ? 'en' : 'ru';
            this.gameEnd(7, this.currentNumberLength, gamesInfo[3].units[language]);
            this.animateBGwrong(playField);
          }
          break;
        case 'NEXT_LEVEL':
          this.currentNumberLength += 1;
          this.changeSlide(this.getNumberSlide());
          this.animateLine(this.currentNumberLength + 1);
          break;
      }
    });
  }

  getNumberSlide = (): string => {
    this.currentNumber = this.generateRandomNumber(this.currentNumberLength);
    return `<h1 class="current-number">
    ${this.currentNumber}</h1>
    <div class="line-container">
      <div class="line"></div>
    </div>`;
  };

  getAnswerSlide = (): string => `<form class="number-test_form">
  <div class="number-test_information">
    <h2>${this.language.number.whatNumber}</h2>
    <span class="number-test_span">${this.language.number.submit}</span>
  </div>
    <div class="number-test_input">
      <input pattern="[0-9]*" type="text" class="number-input">
    </div>
    <button class="greeting_btn greeting-a" id="SUBMIT">${this.language.number.submitBTN}</button>
  </form>`;

  getResultPage = (): string => `<h4 class="number-test_transparent">${this.language.number.num}</h4>
   <h2>${this.currentNumber}</h2>
   <h2 class="number-test_transparent">${this.language.number.answer}</h2>
   <h2 class='number-test_user-answer'>${this.userAnswer}</h2>
   <h1 id="number-level">${this.language.common.level} ${this.currentNumberLength}</h1>
   <button class="greeting_btn greeting-a" id="NEXT_LEVEL">${this.language.common.next}</button>`;

  async gameEnd(gameID: number, score: number, scoreUnits: string) {
    const language = state.isEngl ? 'en' : 'ru';
    const result = this.currentNumberLength;
    super.gameEnd(7, result, gamesInfo[3].units[language]);
    const playField = document.querySelector('.play-field') as HTMLElement;
    const insertPlace = playField.querySelector('h3') as HTMLElement;
    insertPlace.insertAdjacentHTML('afterend', this.getResultPage());
    const level = document.querySelector('#number-level') as HTMLElement;
    const nextBTN = document.querySelector('#NEXT_LEVEL') as HTMLElement;
    const answerSpan = document.querySelector('.number-test_user-answer') as HTMLElement;
    answerSpan.style.color = '#000';
    answerSpan.style.textDecoration = 'line-through';
    level.remove();
    nextBTN.remove();
  }

  changeSlide(slide: string) {
    const playField = document.querySelector('.play-field') as HTMLElement;
    playField.innerHTML = slide;
  }

  generateRandomNumber(length: number): number {
    const minimum = Math.pow(10, length - 1);
    const maximum = Math.pow(10, length) - 1;
    return Math.floor(minimum + Math.random() * (maximum - minimum));
  }

  animateLine(n: number = 1): void {
    const line = document.querySelector('.line') as HTMLElement;
    line.style.animationDuration = `${n}s`;
    line.classList.add('transition');
    const answerSlide = this.getAnswerSlide();
    line.addEventListener('animationend', () => this.changeSlide(answerSlide));
  }
}
