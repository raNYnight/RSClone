import './statsPage.scss';
import { Igame } from 'utils/types';
import { gamesInfo } from '../../../utils/games-info';
import { state } from '../../../utils/state';
import { lang } from '../../translate/translate';
import { UsersService } from '../../../APIs/UsersService';
import { GraphComponent } from '../../../components/graphic/graphic';
import { Tests } from '../../../APIs/Tests';

export class StatsPageComponent {
  id: number;

  gameInfo: Igame;

  constructor(id: number) {
    this.id = id;
    this.gameInfo = gamesInfo.filter((el) => el.id === this.id)[0];
  }

  async getHtml(): Promise<string> {
    return `<section class="dashboard">
    ${await this.getUserTitleHtml(this.gameInfo)}
    ${await this.getIconsHtml(this.id)}
    ${await this.getTitleStatsHtml(this.gameInfo)}
    ${await this.getFirstGraphStatsHtml(this.gameInfo)}
    ${await this.getSecondGraphStatsHtml(this.gameInfo)}
    </section>`;
  }

  async getUserTitleHtml(gameInfo: Igame): Promise<string> {
    const language = state.isEngl ? 'en' : 'ru';
    return `<div class=" dashboard_user-wrap statistic-media">
        <p class="statistic-title">
          <a href="#dashboard" class="statistic-page-link">${state.user.name}</a>
           > 
          <span class="statistic-span">${gameInfo.name[language]}</span>
        </p>
        <div class="link">
          <a href="/#login">${lang[language].signUp.login}</a> ${lang[language].dashboard.or} 
          <a href="/#signup">${lang[language].signUp.signUp}</a> ${lang[language].dashboard.save}
        </div>
      </div>`;
  }

  async getIconsHtml(id: number): Promise<string> {
    const innerGamesIcons = gamesInfo.map((game) => {
      const activeIcon = game.svg.replace('class="common_svg"', 'class="common_svg active-svg"');

      return `<a class="dashboard_games_link" href="#${game.hrefStats}">
        <div class="games_link-svg-wrap">
          ${game.id === id ? activeIcon : game.svg}
        </div>
      </a>`;
    });
    return `<div class="dashboard_games">${innerGamesIcons.join('')}</div>`;
  }

  async getTitleStatsHtml(gameInfo: Igame): Promise<string> {
    const averageScore = await Tests.getUserAverageStats(gameInfo.id);
    const language = state.isEngl ? 'en' : 'ru';
    return `<div class=" dashboard_user-wrap statistic-media statistic-title-wrap">
        <p class="statistic-title">${gameInfo.name[language]}</p>
        <p class="statistic-score">${averageScore.score}</p>
        <p class="statistic-pts">${lang[language].common.pts}</p>
        <p class="statistic-item">${lang[language].dashboard.percentile}: 20%</p>      
        <a class="statistic-link" href="#${gameInfo.href}">
          <img class="statistic-link-svg" src="https://www.svgrepo.com/show/479265/play-button.svg" alt="play">
          <p class="statistic-link"> ${lang[language].dashboard.play}</p>
        </a>
      </div>`;
  }

  async getFirstGraphStatsHtml(gameInfo: Igame): Promise<string> {
    const language = state.isEngl ? 'en' : 'ru';
    return `<div class=" dashboard_user-wrap statistic-media">
        <p class="statistic-title">${gameInfo.name[language]}: ${lang[language].common.statistics}</p>
        <canvas class = "user-stats-canvas"></canvas>
      </div>`;
  }

  async getSecondGraphStatsHtml(gameInfo: Igame): Promise<string> {
    const language = state.isEngl ? 'en' : 'ru';
    return `<div class=" dashboard_user-wrap statistic-media">
        <p class="statistic-title">${gameInfo.name[language]}: ${lang[language].common.recentResults}</p>
        <img src="https://web-standards.ru/articles/performance-metrics/images/3.png" style="width: 100%;" alt="graphic">
      </div>`;
  }

  async renderGraph() {
    const currUser = UsersService.getCookie();
    const graph = new GraphComponent(this.id);
    const testDataset = Object.values(await graph.getTestDataset(this.gameInfo.datasetStep));
    if (currUser) {
      const userDataset = Object.values(await graph.getUserDataset(this.gameInfo.datasetStep));
      console.log(userDataset);
      await graph.renderGraph(this.gameInfo.dataset, testDataset, userDataset);
    } else {
      await graph.renderGraph(this.gameInfo.dataset, testDataset);
    }
  }
}
