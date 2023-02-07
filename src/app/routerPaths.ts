import { DashboardComponent } from "../components/pages/dashboard/dashboard";
import { LoginComponent } from "../components/pages/login/login";
import { MainComponent } from "../components/pages/main/main";
import { SignupComponent } from "../components/pages/registation/signup";
import { paths } from "interfaces/paths";
import { gamesInfo } from "../utils/games-info";

export const routerPaths: paths = {
  dashboard: async () => await new DashboardComponent().getHtml(),
  signup: async () => await new SignupComponent().getHtml(),
  login: async () => await new LoginComponent().getHtml(),
  main: async () => await new MainComponent(gamesInfo).getHtml(),
};
