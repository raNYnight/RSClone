import { rejects } from 'assert';
import { lang } from '../../../../components/translate/translate';
import { state } from '../../../../utils/state';
import { getRandomInt } from '../../../../utils/random';
import { PlayComponent } from '../play-component';
import './sequence.scss';
export class SequenceComponent extends PlayComponent {
  field: HTMLElement[] = [];
  gameSequence: HTMLElement[] = [];
  userSequence: HTMLElement[] = [];
  level = 1;
  levelElement: HTMLElement | null = null;
  isGameStarted = false;
  lang = state.isEngl ? lang.en : lang.ru;
  async gameStarter() {
    super.gameStarter();
    console.log('SequenceComponent');
    const playField = document.querySelector('.play-field');
    const level = document.createElement('span');
    level.textContent = String(this.level);
    const levelLabel = document.createElement('p');
    levelLabel.className = 'level-label';
    levelLabel.textContent = `${this.lang.sequence.level}: `;
    levelLabel.append(level);
    this.levelElement = level;
    if (playField)
    playField.append(levelLabel, await this.drawField());
    this.showSequence().then(()=>{
      this.isGameStarted = true;
    });
  }

  async drawField(){
    const playField: HTMLElement | null = document.querySelector('.play-field');
    const memoryField = document.createElement('div');
    memoryField.className = 'memory-field';
    for (let i = 0; i < 9; i++) {
      const plate = document.createElement('div');
      plate.className = `memo-plate plate-${i}`;
      this.field.push(plate);
      plate.addEventListener('click', () => {
        if(!this.isGameStarted) return;
        this.userSequence.push(plate);
        if (!(this.userSequence[this.userSequence.length - 1] ===
           this.gameSequence[this.userSequence.length - 1])){
          this.gameOver(this.level);
        }
        if (plate === this.gameSequence[this.gameSequence.length - 1]
           && this.gameSequence.length === this.userSequence.length && playField){
          this.animateBGright(playField);
          this.level++;
          setTimeout(()=>{
            this.userSequence = [];
            this.showSequence().then(()=>{
              this.isGameStarted = true;
            });
          }, 700)
        }
      });
    }
    memoryField.append(...this.field);
    return memoryField;
  }

  animatePlate(plate: HTMLElement, animation: 'plate-animation-short' | 'plate-animation-long'){
    plate.classList.add('plate-animation-short');
    plate.addEventListener('animationend', () => plate.classList.remove('plate-animation-short'));
  }

  async showSequence(): Promise<string>{
    this.isGameStarted = false;
    return new Promise((resolve, rejects) =>{
      if (this.levelElement)
      this.levelElement.textContent = String(this.level);
      this.gameSequence.push(this.field[getRandomInt(0, this.field.length)])
      let delay = 0;
      this.gameSequence.forEach((plate: HTMLElement, index)=>{
        setTimeout(() => {
          this.animatePlate(plate, "plate-animation-long");
          if (index === this.gameSequence.length - 1) resolve('sequence ended');
        }, delay);
        delay += 701;
      })
    })
  }

  gameOver(score: number){
    const playField: HTMLElement | null = document.querySelector('.play-field');
    if (playField)
    this.animateBGwrong(playField);
    this.gameEnd(3, score, this.lang.sequence.level);
  }
}
