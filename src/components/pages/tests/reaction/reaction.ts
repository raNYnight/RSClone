import { PlayedTest } from '../../../../utils/types';
import { UsersService } from '../../../../APIs/UsersService';
import { getRandomInt } from '../../../../utils/random';
import { state } from '../../../../utils/state';
import { PlayComponent } from '../play-component';
import './reaction.scss'
import { PageData, reactPages } from './reactionPages';
import { Tests } from '../../../../APIs/Tests';
import { routerPaths } from '../../../../app/routerPaths';
import { build } from '../../../../app/build';
import { lang } from 'components/translate/translate';

export class ReactionComponent extends PlayComponent {
  defaultFieldColor = 'rgb(43, 135, 209)';
  playField: HTMLElement | undefined;
  language: string | undefined;
  results: number[] = [];
  async gameStarter() {
    await super.gameStarter();
    console.log('ReactionComponent');
    this.language = state.isEngl ? 'en' : 'ru';
    this.playField = document.querySelector('.play-field') as HTMLElement;
    this.playField.className = 'play-field pointer';
    this.playField.insertAdjacentHTML('afterbegin', '<div class="react-game-field"></div>')
    this.changeState('red');
  }

  async changeState(page: reactPages, time?: number){
    const data = PageData[this.language || 'en'][page];
    const Msg = `
    <div class="reaction-wrapper">
      <div class="decor">
        ${data.decor}
      </div>
      ${page === 'end' ? `<p class="end-title">${data.title}</p>` : ''}
      <p class="main-msg">${time ? time + data.text : data.text}</p>
      <p class="sub-msg">${data.sub || ''}</p>
      ${page === 'end' ? `
      <div class="end-btns">
      <button class="greeting_btn greeting-a save">${data.btnSave || ''}</button>
      <button class="greeting_btn greeting-a try-again_btn">${data.btnTry || ''}</button>
      </div>` : ''}
    </div>
    `;
    if (this.playField && this.language) {
      this.playField.className = 'play-field pointer';
      this.playField.classList.add(data.style);
      this.playField.innerHTML = Msg;
      
      switch (page){
        case 'red':{
          const delay = getRandomInt(2000, 6001);
          const timeout = setTimeout(()=>{
            this.removeListeners();
            this.changeState('green');
          }, delay)
          this.playField.addEventListener('click', (event: Event)=>{
            clearTimeout(timeout);
            this.navigate('fail', event);
          })
          break;
        }
        case 'fail':{
          this.playField.addEventListener('click', (event: Event)=>{
            this.navigate('red', event);
          });
          break;
        }
        case 'green':{
          const startTime = performance.now();
          this.playField.addEventListener('click', (event: Event)=>{
            this.navigate('result', event, performance.now() - startTime);
          });
          break;
        }
        case 'result':{
          let pageToGo: reactPages = 'red';
          if (time) this.results.push(time);
          if (this.results.length === 5) pageToGo = 'end';
          this.playField.addEventListener('click', (event: Event)=>{
            let ms: number | undefined = undefined;
            if (pageToGo === 'end') ms = time;
            this.navigate(pageToGo, event, ms);
          });
          break;
        }
        case 'end':{
         const saveBtn = this.playField.querySelector('.save');
         const tryAgainBtn = this.playField.querySelector('.try-again_btn');
         if (saveBtn && tryAgainBtn) {
          saveBtn.addEventListener('click', ()=> {
            this.saveScore();
          });
          tryAgainBtn.addEventListener('click', ()=> {
            this.results = [];
          //todo реализовать ресет игры
          });
         }
         break;
        }
      }
    }
  }

  async removeListeners(){
    if (this.playField){
      const clone = this.playField.cloneNode(true) as HTMLElement;
      this.playField.parentNode?.replaceChild(clone, this.playField);
      this.playField = clone;
    }
  }

  async navigate(page: reactPages, event: Event, ms?: number){
    console.log("navigate to", page);
    
    event.stopImmediatePropagation();
    this.removeListeners();
    this.changeState(page, ms);
  }

  async saveScore(){
    const userData = await UsersService.getCookie();
    const score = this.results.reduce((acc, curr) => acc + curr);

    const playedTest: PlayedTest = {
      user_id: userData.userId!,
      tests_id: 2,
      date: new Date().toISOString(),
      score: score/5,
    };

    await Tests.addTestInDB(playedTest);
    await build(routerPaths.dashboard);
  }
}
