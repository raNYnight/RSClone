import './dashboard.scss';
import { lang } from '../../translate/translate';
import { Ilanguage } from 'components/translate/translateInterfase';
import { Igame, User, UserData } from 'utils/types';
import { gamesInfo } from '../../../utils/games-info';
import { state } from '../../../utils/state';
import { Component } from '../../../components/component';
import { UsersService } from '../../../APIs/UsersService';
import { GuestUser } from '../../../utils/guestUser';
import { getCookie, setCookie } from '../../../../node_modules/typescript-cookie';

let dataToShow: UserData | null = null;
let sharedUser: UserData | undefined;
async function getUserTitleWrapHtml(path: Ilanguage): Promise<string> {
  sharedUser = undefined;
  const location = document.location.hash.slice(1).split('/');

  if (location[1] === 'users'){
    const userLink = location[2];
    const users = await UsersService.getAllUsers();
    const user =  users.find((user) => user.permalink === userLink);
    if (user){
      const UserData: UserData = {
        userId:user.id,
        userName: user.user_name,
        regDate: new Date(user.registration_date),
        permalink: user.permalink
       }
      sharedUser = UserData;
    }
    
  }
  console.log(sharedUser);
  
  const usersCookie: UserData | string = UsersService.getCookie();
  const guestCookie = getCookie('guest');
  const guest = guestCookie ? JSON.parse(guestCookie) : new GuestUser();
  if (!usersCookie && !guestCookie){
    setCookie('guest', JSON.stringify(guest));
  }

  dataToShow = sharedUser || usersCookie || guest;
  let date = new Date();
  if (dataToShow){
  date =  new Date(dataToShow.regDate);
  }
  

  const fullDate = `${date.getFullYear()}-${date.getDate().toString().padStart(2,'0')}-${(Number(date.getUTCMonth())+1).toString().padStart(2,'0')}`;
  console.log(date.getDay(), date.getDate());
  
  return `<div class="dashboard_user-wrap">
      <p class="dashboard_user-paragraf">${path.dashboard.username}</p>
      <p class="dashboard_username">
        <img src="https://www.svgrepo.com/show/447734/person-male.svg" alt="person">
        ${dataToShow?.userName}
      </p>
      <p class="dashboard_user-paragraf">${ path.dashboard.joined}</p>
      <p class="dashboard_user-join">${fullDate}</p>
      <div class="link">
      ${ usersCookie ? `<span class="perma-link">${path.dashboard.permalink}</span> `:
        `
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

function getStatsHtml(arr: Igame[], path: Ilanguage): string {
  const language = state.isEngl ? 'en' : 'ru';
  const statsTable = arr.map((el) => {
    return `<div class="stats_item-wrap">
      <div class="stats_item">${el.name[language]}</div>
      <div class="stats_item">
        <a class="stats_link" href="#${el.href}">
          <img class="stats_link-svg" src="https://www.svgrepo.com/show/479265/play-button.svg" alt="play">
        </a>
        <a class="stats_link" href="#${el.hrefStats}">
          <img class="stats_link-svg" src="https://www.svgrepo.com/show/409311/stats-up.svg" alt="stats">
        </a>
      </div>
      <div class="stats_item">?</div>
      <div class="stats_item">20%</div>
    </div>`;
  });
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
function getActivityItemHtml(arr: Igame[]): string {
  const language = state.isEngl ? 'en' : 'ru';
  const activityTable = arr.map((el) => {
    return `<div class="activity_item-wrap">
    <a class="dashboard_activity_link" href="#${el.href}">
      <div class="activity_link-svg-wrap">
        ${el.svg}
      </div>
    </a>      
      <div class="activity_item">${el.name[language]}</div>      
      <div class="activity_item">21.02.2023</div>
      <div class="activity_item">20%</div>
    </div>`;
  });
  return activityTable.join('');
}

function getActivityTitleWrapHtml(path: Ilanguage): string {
  return `<div class="stats-wrap">
  <div class="activity_item-wrap activity_title-bold">
    <div class="dashboard_activity_link">${path.dashboard.test}</div>
    <div class="activity_item"></div>
    <div class="activity_item">${path.dashboard.date}</div>
    <div class="activity_item">${path.dashboard.score}</div>
  </div>
  ${getActivityItemHtml(gamesInfo)}
</div>`;
}

export class DashboardComponent implements Component {
  async getHtml(): Promise<string> {
    const path = state.isEngl ? lang.en : lang.ru;

    return `<section class="dashboard">
    ${await getUserTitleWrapHtml(path)}
    ${getGamesIconsHtml(gamesInfo)}
    ${getStatsHtml(gamesInfo, path)}
    ${getActivityTitleWrapHtml(path)}
    </section>`;
  }

  async setListeners() {
    // Доделать расчет даты регистрации
    // const joined = document.querySelector(".dashboard_user-join");
    // const cookie = UsersService.getJoinPeriod();

    // if (joined){

    // }
    const permalink = document.querySelector('.perma-link');
    if (permalink){
      permalink.addEventListener('click', ()=>{
        if (dataToShow)
        window.location.hash = `dashboard/users/${dataToShow.permalink}`
        
      });
    }
  }
}
