import './main.css';
import { lang } from '../../translate/translate';
import { BOLT_SVG } from '../../../assets/icons/svg';
import { gamesInfo } from '../../../utils/games-info';
import { Igame } from '../../../utils/types';
import { state } from '../../../utils/state';
import { Component } from '../../../components/component';


export class MainComponent implements Component {

  gamesArr: Igame[];

  constructor(gamesArr: Igame[]) {
    this.gamesArr = gamesArr;
  }

  async getHtml(): Promise<string> {
    const path = state.isEngl ? lang.en : lang.ru;
    return `<section class="greeting">
      <div class="greeting_svg-wrap">${BOLT_SVG}</div>
      <h1>${lang.en.main.benchmark}</h1>
      <h4>${path.main.mainDiscr}</h4>
      <div class="greeting_btn">
        <a href="#reaction" class= "greeting-a">${path.main.getStarted}</a>
      </div>
    </section>
    ${this.getGamesSection(gamesInfo)}
    `;
  }

  getGamesSection(arr: Igame[]): string {
    const language = state.isEngl ? 'en' : 'ru';
    const innerSection = arr.map((el) => {
      return `<a class="games_a" href="#${el.href}">
      <div class="svg-wrapper">
        ${el.svg}
      </div>
      <h3>${el.name[language]}</h3>
      <h4 class="games_h4">${el.description[language]}</h4>
    </a>`;
    });
    return `<section class="games">${innerSection.join('')}</section>`;
  }
}
