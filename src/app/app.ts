import { build } from './build';
import { router } from './router';

export class App {
  static render(pageId: string = 'main'): void {
    document.body.innerHTML = '';
    if (window.location.hash.slice(1) === '') {
      pageId = 'main';
      window.location.hash = 'main';
    } else {
      pageId = window.location.hash.slice(1);
    }
    build(pageId);
  }

  run(): void {
    App.render();
    window.addEventListener('hashchange', router);
  }
}
