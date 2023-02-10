import './stats.scss';
import { lang } from '../../translate/translate';
import { Ilanguage } from 'components/translate/translateInterfase';
import { Igame } from 'utils/types';
import { gamesInfo } from '../../../utils/games-info';
import { state } from '../../../utils/state';
// import { Component } from '../../../components/component';

// function getIconsHtml(arr: Igame[]): string {
//   const innerGamesIcons = arr.map((el) => {
//     return `<a class="dashboard_games_link" href="#${el.href}">
//       <div class="games_link-svg-wrap">
//         ${el.svg}
//       </div>
//     </a>`;
//   });
//   return `<div class="dashboard_games">${innerGamesIcons.join('')}</div>`;
// }


// export class StatsComponent implements Component {
//   async getHtml(): Promise<string> {
//     const path = state.isEngl ? lang.en : lang.ru;    

//     return `<section class="dashboard">
//     ${getUserTitleWrapHtml(path)}
//     ${getGamesIconsHtml(gamesInfo)}
//     ${getStatsHtml(gamesInfo, path)}
//     ${getActivityTitleWrapHtml(path)}
//     </section>`;
//   }
// }