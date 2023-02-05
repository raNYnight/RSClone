import './main.css';
import { isEngl } from '../../header/header';
import { lang } from '../../translate/translate';
import { AIM_SVG_PATH, BOLT_SVG, BOLT_SVG_PATH, NUMBER_SVG_PATH, VERBAL_SVG_PATH, TYPING_SVG_PATH } from '../../../assets/icons/svg';

export class MainComponent {
  async getHtml(): Promise<string> {
    const path = isEngl ? lang.en : lang.ru;
    return `<section class="greeting">
      <div class="greeting_svg-wrap">${BOLT_SVG}</div>
      <h1>${path.main.benchmark}</h1>
      <h4>${path.main.mainDiscr}</h4>
      <div class="greeting_btn">
        <a href="#main" class= "greeting-a">${path.main.getStarted}</a>
      </div>
    </section>
    <section class="games">      
      <a class="games_a" href="#reaction">
      <svg class="games_svg" viewBox="0 0 100 128" xmlns="http://www.w3.org/2000/svg">${BOLT_SVG_PATH}</svg>
        <h3>${path.main.reaction}</h3>
        <h4 class="games_h4">${path.main.reactionDiscr}</h4>
      </a>
      <a class="games_a" href="#sequence">
      <svg class="games_svg" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title>Sequence Memory</title><rect width="58" height="58" rx="10"></rect><rect x="70" width="58" height="58" rx="10"></rect><rect y="70" width="58" height="58" rx="10"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M118 80H80L80 118H118V80ZM80 70C74.4772 70 70 74.4772 70 80V118C70 123.523 74.4772 128 80 128H118C123.523 128 128 123.523 128 118V80C128 74.4772 123.523 70 118 70H80Z"></path></svg>
        <h3>${path.main.sequence}</h3>
        <h4 class="games_h4">${path.main.sequenceDiscr}</h4>
      </a>
      <a class="games_a" href="#aim">
        <svg class="games_svg" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">${AIM_SVG_PATH}</svg>
        <h3>${path.main.aim}</h3>
        <h4 class="games_h4">${path.main.aimDiscr}</h4>
      </a>
      <a class="games_a" href="#number">
        <svg class="games_svg" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">${NUMBER_SVG_PATH}</svg>
        <h3>${path.main.number}</h3>
        <h4 class="games_h4">${path.main.numberDiscr}</h4>
      </a>
      <a class="games_a" href="#verbal">
        <svg class="games_svg" viewBox="0 0 100 131" xmlns="http://www.w3.org/2000/svg">${VERBAL_SVG_PATH}</svg>
        <h3>${path.main.verbal}</h3>
        <h4 class="games_h4">${path.main.verbalDiscr}</h4>
      </a>
      <a class="games_a" href="#typing">
        <svg class="games_svg" viewBox="0 0 125 127" xmlns="http://www.w3.org/2000/svg">${TYPING_SVG_PATH}</svg>
        <h3>${path.main.typing}</h3>
        <h4 class="games_h4">${path.main.typingDiscr}</h4>
      </a>
    </section>`;
  }
}
