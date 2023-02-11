import { PlayComponent } from '../play-component';

export class TypingComponent extends PlayComponent {
  async gameStarter() {
    super.gameStarter();
    console.log('TypingComponent');
  }
}
