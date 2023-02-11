import { PlayComponent } from '../play-component';

export class SequenceComponent extends PlayComponent {
  async gameStarter() {
    super.gameStarter();
    console.log('SequenceComponent');
  }
}
