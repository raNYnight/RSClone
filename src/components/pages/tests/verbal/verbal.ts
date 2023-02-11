/* eslint-disable @typescript-eslint/comma-dangle */
import { PlayComponent } from '../play-component';

export class VerbalComponent extends PlayComponent {
  async gameStarter(): Promise<void> {
    super.gameStarter();
    console.log('VERBAL COMPONENT');

    const playField = document.querySelector('.play-field') as HTMLElement;
    playField.insertAdjacentHTML(
      'afterbegin',
      `<section class="play-field">
      <div class="verbal-stats">
          <span>Lives | </span>
          <span id="LIVES">3</span>
          <span>Score | </span>
          <span id="SCORE">3</span>
      </div>
      <div class="verbal-current-word"></div>
      <div class="verbal-btns">
          <button id="SEEN">SEEN</button>
          <button id="NEW">NEW</button>
      </div>
    </section>`
    );
  }
}
