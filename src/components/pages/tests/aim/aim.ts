import './aim.scss';
import { lang } from '../../../../components/translate/translate';
import { state } from '../../../../utils/state';
import { PlayComponent } from '../play-component';
import { gamesInfo } from '../../../../utils/games-info';
import { Ilanguage } from 'components/translate/translateInterfase';

export class AimComponent extends PlayComponent {

  language: Ilanguage = state.isEngl ? lang.en : lang.ru;

  aimTarget: string | undefined = gamesInfo[2].svg.replace('class="common_svg"', 'class="aim_svg"');

  targets: number = 30;

  averageTime: number = 0;

  async gameStarter(): Promise<void> {
    if (document.querySelector('.greeting')) await super.gameStarter();    
    const playField = document.querySelector('.play-field') as HTMLElement;
    playField.innerHTML = this.renderPlayField();

    const aimTarget: HTMLElement | null = document.querySelector('.aim_svg');
    const curTargetsCount: HTMLElement | null = document.querySelector('.aim_count');
    const svgPosition: HTMLElement | null = document.querySelector('.aim_svg-wrapper');

    const timerStart: number = new Date().valueOf();

    svgPosition!.addEventListener('click', (event) => {      

      let target = event.target as HTMLElement;
      if (target === aimTarget || svgPosition) {
        this.targets = this.targets - 1;
        if (curTargetsCount) {
          curTargetsCount.textContent = this.targets.toString();
        }
        if (svgPosition) {
          svgPosition.style.top = `${this.randomPosition()}%`;
          svgPosition.style.left = `${this.randomPosition()}%`;
        }
        if (this.targets < 0) {
          const timerEnd: number = new Date().valueOf();
          const lang = state.isEngl ? 'en' : 'ru';
          this.averageTime = parseInt(((timerEnd - timerStart) / 30).toString());
          super.gameEnd(5, this.averageTime, gamesInfo[2].units[lang]);             
        }
      }        
    });
    
  }
  
  renderPlayField() {
    return `<div class="aim_game-wrap">
        <p class="aim_remaining">${this.language.aim.remaining}: <span class="aim_count">${this.targets}</span></p>
        <div class="aim_game-field">
          <div class="aim_svg-wrapper">
            ${this.aimTarget}
          </div>
        </div>
      </div>`;
  }  
  
  randomPosition(): number {
    return Math.floor(13 + Math.random() * (87 + 1 - 13));
  }

}
