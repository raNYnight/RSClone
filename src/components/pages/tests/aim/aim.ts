import { PlayComponent } from '../play-component';

export class AimComponent extends PlayComponent {
  async gameStarter() {
    super.gameStarter();
    console.log('AimComponent');
  }
}
