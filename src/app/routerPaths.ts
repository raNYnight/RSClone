import { DashboardComponent } from '../components/pages/dashboard/dashboard';
import { LoginComponent } from '../components/pages/login/login';
import { MainComponent } from '../components/pages/main/main';
import { SignupComponent } from '../components/pages/registation/signup';
import { Paths } from 'interfaces/paths';
import { gamesInfo } from '../utils/games-info';
import { GamePageComponent } from '../components/pages/game-page/game-page';
import { StatsPageComponent } from '../components/pages/statsPage/statsPage';

export const routerPaths: Paths = {
  dashboard: () => new DashboardComponent(),
  signup: () => new SignupComponent(),
  login: () => new LoginComponent(),
  main: () => new MainComponent(gamesInfo),
};

gamesInfo.forEach((game) => {
  routerPaths[game.href] = () => new GamePageComponent(game.id);
});

gamesInfo.forEach((game) => {
  routerPaths[game.hrefStats] = () => new StatsPageComponent(game.id);
});
