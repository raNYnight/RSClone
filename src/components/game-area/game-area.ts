import './game-area.scss';
import { Igame } from 'utils/types';
import { state } from '../../utils/state';
import { lang } from '../translate/translate';
import { gamesInfo } from '../../utils/games-info';
import { ReactionComponent } from '../../components/pages/tests/reaction/reaction';
import { SequenceComponent } from '../../components/pages/tests/sequence/sequence';
import { AimComponent } from '../../components/pages/tests/aim/aim';
import { NumberComponent } from '../../components/pages/tests/number/number';
import { VerbalComponent } from '../../components/pages/tests/verbal/verbal';
import { TypingComponent } from '../../components/pages/tests/typing/typing';

export class GameAreaComponent {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  async getHtml(): Promise<string> {
    const gameInfo: Igame = gamesInfo.filter((el) => el.id === this.id)[0];

    const language = state.isEngl ? 'en' : 'ru';

    if (gameInfo.name.en !== 'Typing') {
      return `<section class="greeting">
        <div class="greeting_svg-wrap">${gameInfo.svg}</div>
        <h1>${gameInfo.name[language]}</h1>
        <h4>${gameInfo.description[language]}</h4>
        <div class="greeting_btn greeting-a">${lang[language].common.start}</div>
      </section>`;
    } else {
      return `<section class="greeting">
        <h1>${gameInfo.name[language]}</h1>
        <h4>${gameInfo.description[language]}</h4>
        <div class="text-area">${lang[language].typing.typingText}</div>
        <div class="greeting_btn greeting-a">${lang[language].common.start}</div>
      </section>`;
    }
  }

  async setListeners(): Promise<void> {
    const startBTN = document.querySelector('.greeting_btn')! as HTMLButtonElement;
    let test = new ReactionComponent();
    switch (this.id) {
      case 2:
        test = new ReactionComponent();
        break;
      case 3:
        test = new SequenceComponent();
        break;
      case 5:
        test = new AimComponent();
        break;
      case 7:
        test = new NumberComponent();
        break;
      case 6:
        test = new VerbalComponent();
        break;
      case 9:
        test = new TypingComponent();
        break;
    }
    startBTN.addEventListener('click', test.gameStarter);
  }
}
