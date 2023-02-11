import { PlayComponent } from '../play-component';

export class NumberComponent extends PlayComponent {
  async gameStarter() {
    super.gameStarter();
    console.log('NumberComponent');
  }
}
