import './dashboard.scss';
import { lang } from '../../translate/translate';
import { Ilanguage } from 'components/translate/translateInterfase';
import { Igame, PlayedTest, UserData } from 'utils/types';
import { gamesInfo } from '../../../utils/games-info';
import { state } from '../../../utils/state';
import { Component } from '../../../components/component';
import { UsersService } from '../../../APIs/UsersService';
import { GuestUser } from '../../../utils/guestUser';
import { getCookie, setCookie } from '../../../../node_modules/typescript-cookie';
import { Tests } from '../../../APIs/Tests';

let dataToShow: UserData | null = null;
let sharedUser: UserData | undefined;
async function getUserTitleWrapHtml(path: Ilanguage): Promise<string> {
  sharedUser = undefined;
  const location = document.location.hash.slice(1).split('/');

  if (location[1] === 'users') {
    const userLink = location[2];
    const users = await UsersService.getAllUsers();
    const user = users.find((user) => user.permalink === userLink);
    if (user) {
      const UserData: UserData = {
        userId: user.id,
        userName: user.user_name,
        regDate: new Date(user.registration_date),
        permalink: user.permalink,
      };
      sharedUser = UserData;
    }
  }

  const usersCookie: UserData | string = UsersService.getCookie();
  const guestCookie = getCookie('guest');
  const guest = guestCookie ? JSON.parse(guestCookie) : new GuestUser();
  if (!usersCookie && !guestCookie) {
    setCookie('guest', JSON.stringify(guest));
  }

  dataToShow = sharedUser || usersCookie || guest;
  let date = new Date();
  if (dataToShow) {
    date = new Date(dataToShow.regDate);
  }

  const fullDate = `${date.getFullYear()}-${date.getDate().toString().padStart(2, '0')}-${(
    Number(date.getUTCMonth()) + 1
  )
    .toString()
    .padStart(2, '0')}`;

  return `<div class="dashboard_user-wrap">
      <p class="dashboard_user-paragraf">${path.dashboard.username}</p>
      <p class="dashboard_username">
        <img src="https://www.svgrepo.com/show/447734/person-male.svg" alt="person">
        ${dataToShow?.userName}
      </p>
      <p class="dashboard_user-paragraf">${path.dashboard.joined}</p>
      <p class="dashboard_user-join">${fullDate}</p>
      <div class="link">
      ${
  usersCookie
    ? `<span class="perma-link">${path.dashboard.permalink}</span> `
    : `
        <a href="#login">${path.signUp.login}</a> ${path.dashboard.or} 
        <a href="#signup">${path.signUp.signUp}</a> ${path.dashboard.save}
        `
}
        
      </div>
    </div>`;
}

function getGamesIconsHtml(arr: Igame[]): string {
  const innerGamesIcons = arr.map((el) => {
    return `<a class="dashboard_games_link" href="#${el.href}">
      <div class="games_link-svg-wrap">
        ${el.svg}
      </div>
    </a>`;
  });
  return `<div class="dashboard_games">${innerGamesIcons.join('')}</div>`;
}

async function getStatsHtml(arr: Igame[], path: Ilanguage): Promise<string> {
  const language = state.isEngl ? 'en' : 'ru';
  const statsTable = await Promise.all(
    arr.map(async (el: Igame, i: number) => {
      const gameInfo: Igame = gamesInfo[i];
      const played = await Tests.getUserAverageStats(gameInfo.id);
      const score = isNaN(parseInt((played.score).toString())) ? 0 : parseInt((played.score).toString());
      return `<div class="stats_item-wrap">
                <div class="stats_item">${gameInfo.name[language]}</div>
                <div class="stats_item">
                  <a class="stats_link" href="#${gameInfo.href}">
                    <img class="stats_link-svg" src="https://www.svgrepo.com/show/479265/play-button.svg" alt="play">
                  </a>
                  <a class="stats_link" href="#${gameInfo.hrefStats}">
                    <img class="stats_link-svg" src="https://www.svgrepo.com/show/409311/stats-up.svg" alt="stats">
                  </a>
                </div>
                <div class="stats_item">${score} ${gameInfo.units[language]}</div>
                <div class="stats_item">${played.percentile}</div>
              </div>`;
    }),
  );
  return `<div class="stats-wrap">
    <div class="stats_item-wrap stats_title-bold">
      <div class="stats_item">${path.dashboard.test}</div>
      <div class="stats_item">${path.dashboard.actions}</div>
      <div class="stats_item">${path.dashboard.score}</div>
      <div class="stats_item">${path.dashboard.percentile}</div>
    </div>
    ${statsTable.join('')}
  </div>`;
}
//надо будет переделать функцию вывода последних игр. Написал только для настройки верстки
async function getActivityItemHtml(): Promise<string> {
  const played = await Tests.getUserPlayedTests();

  const language = state.isEngl ? 'en' : 'ru';
  console.log(await played);
  const activityTable = await Promise.all(
    played
      .map(async (el: PlayedTest, i: number) => {
        let gameInfo: Igame = gamesInfo.find((el) => el.id === played[i].tests_id)!;
        let dateString: string = played[i].date;
        let date: Date = new Date(dateString);
        let formattedDate: string = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
        return `<div class="activity_item-wrap">
    <a class="dashboard_activity_link" href="#${gameInfo.href}">
      <div class="activity_link-svg-wrap">
        ${gameInfo.svg}
      </div>
    </a>      
      <div class="activity_item">${gameInfo.name[language]}</div>      
      <div class="activity_item">${formattedDate}</div>
      <div class="activity_item">${played[i].score} ${gameInfo.units[language]}</div>
    </div>`;
      })
      .reverse().slice(0, 10),
  );
  return activityTable.join('');
}

async function getActivityTitleWrapHtml(path: Ilanguage): Promise<string> {
  const played = await getActivityItemHtml();
  return `<div class="stats-wrap">
  <div class="activity_item-wrap activity_title-bold">
    <div class="dashboard_activity_link">${path.dashboard.test}</div>
    <div class="activity_item"></div>
    <div class="activity_item">${path.dashboard.date}</div>
    <div class="activity_item">${path.dashboard.score} </div>
  </div>
  ${played}
</div>`;
}

export class DashboardComponent implements Component {
  async getHtml(): Promise<string> {
    const path = state.isEngl ? lang.en : lang.ru;
    const played = await getActivityTitleWrapHtml(path);
    return `<section class="dashboard">
    ${await getUserTitleWrapHtml(path)}
    ${getGamesIconsHtml(gamesInfo)}
    ${await getStatsHtml(gamesInfo, path)}
    ${played}
    </section>`;
  }

  async setListeners() {
    // Доделать расчет даты регистрации
    // const joined = document.querySelector(".dashboard_user-join");
    // const cookie = UsersService.getJoinPeriod();

    // if (joined){

    // }
    const permalink = document.querySelector('.perma-link');
    if (permalink) {
      permalink.addEventListener('click', () => {
        if (dataToShow) window.location.hash = `dashboard/users/${dataToShow.permalink}`;
      });
    }
  }
}
