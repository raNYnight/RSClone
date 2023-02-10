import { DashboardComponent } from '../components/pages/dashboard/dashboard';
import { LoginComponent } from '../components/pages/login/login';
import { MainComponent } from '../components/pages/main/main';
import { SignupComponent } from '../components/pages/registation/signup';
import { Paths } from 'interfaces/paths';
import { gamesInfo } from '../utils/games-info';
import { ReactionComponent } from '../components/pages/tests/reaction/reaction';
import { SequenceComponent } from '../components/pages/tests/sequence/sequence';
import { AimComponent } from '../components/pages/tests/aim/aim';
import { NumberComponent } from '../components/pages/tests/number/number';
import { VerbalComponent } from '../components/pages/tests/verbal/verbal';
import { TypingComponent } from '../components/pages/tests/typing/typing';

export const routerPaths: Paths = {
  dashboard: () => new DashboardComponent(),
  signup: () => new SignupComponent(),
  login: () => new LoginComponent(),
  main: () => new MainComponent(gamesInfo),
  reaction: () => new ReactionComponent(2),
  sequence: () => new SequenceComponent(3),
  aim: () => new AimComponent(5),
  number: () => new NumberComponent(7),
  verbal: () => new VerbalComponent(6),
  typing: () => new TypingComponent(9),
};
