import { UsersService } from '../APIs/UsersService';
import { build } from './build';
import { router } from './router';
import { routerPaths } from './routerPaths';

export class App {
  static render(pageId: string = 'main'): void {
    document.body.innerHTML = '';
    if (window.location.hash.slice(1) === '') {
      pageId = 'main';
      window.location.hash = 'main';
    } else {
      pageId = window.location.hash.slice(1).split("/")[0];
    }
    build(routerPaths[pageId]);
  }

  run(): void {
    App.render();
    window.addEventListener('hashchange', router);
    console.log(UsersService.getCookie());
     
  }
}
