import { PlayComponent } from '../play-component';

export class ReactionComponent extends PlayComponent {
  async gameStarter() {
    super.gameStarter();
    console.log('ReactionComponent');
  }
}
