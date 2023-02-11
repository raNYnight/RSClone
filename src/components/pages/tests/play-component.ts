export class PlayComponent {
  async gameStarter(): Promise<void> {
    console.log('PLAY-COMPONENTS');

    const greeting = document.querySelector('.greeting') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;
    const playField = '<section class="play-field"></section>';
    greeting.remove();
    main.insertAdjacentHTML('afterbegin', playField);
  }
}
