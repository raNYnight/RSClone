export class TestComponents {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  async setTestStartListener(): Promise<void> {
    const startBTN = document.querySelector('.greeting_btn')! as HTMLButtonElement;
    startBTN.addEventListener('click', this.gameStarter);
  }

  // В каждом тесте переопределям этот метод под логику конкретного теста
  async gameStarter(): Promise<void> {
    const greeting = document.querySelector('.greeting') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;
    const playField = '<section class="play-field"></section>';
    greeting.remove();
    main.insertAdjacentHTML('afterbegin', playField);
  }
}
