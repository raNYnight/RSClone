import './typing.scss';
import { PlayComponent } from '../play-component';
import { Ilanguage } from 'components/translate/translateInterfase';
import { lang } from '../../../../components/translate/translate';
import { state } from '../../../../utils/state';
import { gamesInfo } from '../../../../utils/games-info';
import { SPINNER_SVG } from '../../../../assets/icons/svg';

export class TypingComponent extends PlayComponent {

  language: Ilanguage = state.isEngl ? lang.en : lang.ru;

  typing_text: HTMLElement | null = document.querySelector('.text-of-typing p');

  inputField: HTMLInputElement | null = document.querySelector('.input-field');

  errorTag: HTMLElement | null = document.querySelector('.typing_errors-span');

  textContainer: HTMLElement | null = document.querySelector('.text-container');

  wpm: number = 0;

  characterIndex: number = 0;

  errors: number = 0;

  timer: NodeJS.Timeout | undefined;

  maxTime: number = 60;

  timeLeft: number = this.maxTime;

  isTyping: boolean = false;

  stats: HTMLElement | null = document.getElementById('typingInfo');

  async gameStarter(): Promise<void> {

    this.sliceText();

    if (this.inputField) {      
      this.inputField.addEventListener('input', async () => {
        await this.initTyping();   
      });      
    }
    
    if (window.location.hash.slice(1) === 'typing') {
      document.addEventListener('keydown', () => this.inputField!.focus());
    }

    if (this.typing_text) this.typing_text.addEventListener('click', () => this.inputField!.focus());    
  }

  sliceText(): void {
    if (this.typing_text) {
      let splitText = this.typing_text.innerHTML;
      this.typing_text.innerHTML = '';

      splitText.split('').forEach((span) => {
        let spanTag: string = `<span>${span}</span>`;
        this.typing_text!.innerHTML += spanTag;
      });

      this.typing_text.querySelectorAll('span')[0].classList.add('active');
    }
  }

  async renderStats(): Promise<string> {
    return `<div class="typing_time">
          <p>${this.language.typing.time}  </p>
          <span class="typing_time-span">60</span>
          <span>  ${this.language.typing.sec}</span>
        </div>

        <div class="typing_errors">
          <p>${this.language.typing.errors}</p>
          <span class="typing_errors-span">${this.errors}</span>
        </div>
        
        <div class="typing_wpm">
          <p>WPM</p>
          <span class="typing_wpm-span">${this.wpm}</span>
        </div>`;
  }

  async initTyping(): Promise<void> {

    const characters: NodeListOf<HTMLSpanElement> = this.typing_text!.querySelectorAll('span');

    let typedCharacter: string = this.inputField!.value.split('')[this.characterIndex];

    if (this.characterIndex < characters.length - 1 && this.timeLeft > 0) {

      if (!this.isTyping) {
        this.isTyping = true;
        if (this.isTyping) {
          this.startTimer();
        }
      }

      if (typedCharacter == null) {
        this.characterIndex--;

        if (characters[this.characterIndex].classList.contains('incorrect')) {
          this.errors--;
        }

        characters[this.characterIndex].classList.remove('correct', 'incorrect');
      } else {
        if (characters[this.characterIndex].innerText === typedCharacter) {
          characters[this.characterIndex].classList.add('correct');
        } else {
          this.errors++;
          characters[this.characterIndex].classList.add('incorrect');
        }
        this.characterIndex++;
      }

      characters.forEach(span => span.classList.remove('active'));
      characters[this.characterIndex].classList.add('active');

      if (this.errorTag) {
        this.errorTag.textContent = (this.errors).toString();
      }

      this.wpm = Math.round((((this.characterIndex - this.errors) / 5) / (this.maxTime - this.timeLeft)) * 60);
      this.wpm = this.wpm < 0 || !this.wpm || this.wpm === Infinity ? 0 : this.wpm;

    } else {
      if (this.inputField) {
        this.inputField.value = '';
      }      
    }
  }

  async startTimer(): Promise<void> {
    if (this.stats) {
      this.stats.innerHTML = await this.renderStats();
    }
    this.timer = setInterval(() => this.initTimer(), 1000);
  }

  initTimer(): void {    
    const timeTag: HTMLElement | null = document.querySelector('.typing_time-span');
    const curErrors: HTMLElement | null = document.querySelector('.typing_errors-span');
    const curWpm: HTMLElement | null = document.querySelector('.typing_wpm-span');

    if (this.timeLeft > 0) {
      this.timeLeft = this.timeLeft - 1;
      if (timeTag) timeTag.textContent = (this.timeLeft).toString();
      if (curErrors) curErrors.textContent = (this.errors).toString();
      if (curWpm) curWpm.textContent = (this.wpm).toString();
    } else {
      clearInterval(this.timer);
      
      document.addEventListener('keydown', () => this.inputField!.focus());
      
      const greeting: HTMLElement = document.querySelector('.greeting') as HTMLElement;

      const modal: string = `<div id="loading-modal" class="modal">
        <div class="modal-content">
          <p>${this.language.common.loading}   ${SPINNER_SVG}</p>
        </div>
      </div>`;
      greeting.remove();
      const main: HTMLElement = document.querySelector('main') as HTMLElement;
      const playField = '<section class="play-field"></section>';


      main.insertAdjacentHTML('beforeend', modal);
      main.insertAdjacentHTML('afterbegin', playField);
      const lang = state.isEngl ? 'en' : 'ru';
      super.gameEnd(9, this.wpm, gamesInfo[5].units[lang]);
    }
  }
 
}
