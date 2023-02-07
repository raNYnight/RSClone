import './main.css';
import { isEngl } from '../../header/header';
import { lang } from '../../translate/translate';
import { BOLT_SVG } from '../../../assets/icons/svg';
import { gamesInfo } from '../../../utils/games-info';
import { Igame } from '../../../utils/types';

function getGamesSection(arr: Igame[]): string {
  const language = isEngl ? 'en' : 'ru';
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

export class MainComponent {
  async getHtml(): Promise<string> {
    const path = isEngl ? lang.en : lang.ru;
    return `<section class="greeting">
      <div class="greeting_svg-wrap">${BOLT_SVG}</div>
      <h1>${path.main.benchmark}</h1>
      <h4>${path.main.mainDiscr}</h4>
      <div class="greeting_btn">
        <a href="#reaction" class= "greeting-a">${path.main.getStarted}</a>
      </div>
    </section>
    ${getGamesSection(gamesInfo)}
    `;
  }
}
