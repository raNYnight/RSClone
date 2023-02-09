import { DashboardComponent } from '../components/pages/dashboard/dashboard';
import { LoginComponent } from '../components/pages/login/login';
import { MainComponent } from '../components/pages/main/main';
import { SignupComponent } from '../components/pages/registation/signup';
import { paths } from 'interfaces/paths';
import { gamesInfo } from '../utils/games-info';
import { ReactionComponent } from '../components/reaction/reaction';
import { SequenceComponent } from '../components/sequence/sequence';
import { AimComponent } from '../components/aim/aim';
import { NumberComponent } from '../components/number/number';
import { VerbalComponent } from '../components/verbal/verbal';
import { TypingComponent } from '../components/typing/typing';

export const routerPaths: paths = {
  dashboard: () => new DashboardComponent(),
  signup: () => new SignupComponent(),
  login: () => new LoginComponent(),
  main: () => new MainComponent(gamesInfo),
  reaction: () => new ReactionComponent(),
  sequence: () => new SequenceComponent(),
  aim: () => new AimComponent(),
  number: () => new NumberComponent(),
  verbal: () => new VerbalComponent(),
  typing: () => new TypingComponent(),
};
