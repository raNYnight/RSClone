import './statsPage.scss';
import { Igame } from 'utils/types';
import { gamesInfo } from '../../../utils/games-info';
import { state } from '../../../utils/state';
import { lang } from '../../translate/translate';


function getUserTitleHtml(gameInfo: Igame): string {
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

function getIconsHtml(id: number): string {
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

function getTitleStatsHtml(gameInfo: Igame): string {
  const language = state.isEngl ? 'en' : 'ru';
  return `<div class=" dashboard_user-wrap statistic-media statistic-title-wrap">
      <p class="statistic-title">${gameInfo.name[language]}</p>
      <p class="statistic-score">?</p>
      <p class="statistic-pts">${lang[language].common.pts}</p>
      <p class="statistic-item">${lang[language].dashboard.percentile}: 20%</p>      
      <a class="statistic-link" href="#${gameInfo.href}">
        <img class="statistic-link-svg" src="https://www.svgrepo.com/show/479265/play-button.svg" alt="play">
        <p class="statistic-link"> ${lang[language].dashboard.play}</p>
      </a>
    </div>`;
}

function getFirstGraphStatsHtml(gameInfo: Igame): string {
  const language = state.isEngl ? 'en' : 'ru';
  return `<div class=" dashboard_user-wrap statistic-media">
      <p class="statistic-title">${gameInfo.name[language]}: ${lang[language].common.statistics}</p>
      <img src="https://web-standards.ru/articles/performance-metrics/images/3.png" style="width: 100%;" alt="graphic">
    </div>`;
}

function getSecondGraphStatsHtml(gameInfo: Igame): string {
  const language = state.isEngl ? 'en' : 'ru';
  return `<div class=" dashboard_user-wrap statistic-media">
      <p class="statistic-title">${gameInfo.name[language]}: ${lang[language].common.recentResults}</p>
      <img src="https://web-standards.ru/articles/performance-metrics/images/3.png" style="width: 100%;" alt="graphic">
    </div>`;
}



export class StatsPageComponent {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  async getHtml(): Promise<string> {

    const gameInfo: Igame = gamesInfo.filter((el) => el.id === this.id)[0];

    return `<section class="dashboard">
    ${getUserTitleHtml(gameInfo)}
    ${getIconsHtml(this.id)}
    ${getTitleStatsHtml(gameInfo)}
    ${getFirstGraphStatsHtml(gameInfo)}
    ${getSecondGraphStatsHtml(gameInfo)}
    </section>`;
  }
}