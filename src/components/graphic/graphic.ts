import Chart from 'chart.js/auto';
import { Igame } from '../../utils/types';
import { gamesInfo } from '../../utils/games-info';
import './graph.css';
import { Tests } from '../../APIs/Tests';
import { UsersService } from '../../APIs/UsersService';
import { lang } from '../../components/translate/translate';
import { state } from '../../utils/state';

export class GraphComponent {
  id: number;

  gameInfo: Igame;

  en!: string;

  ru!: string;

  constructor(id: number) {
    this.id = id;
    this.gameInfo = gamesInfo.filter((el) => el.id === this.id)[0];
  }

  async renderGraph() {
    const language = state.isEngl ? 'en' : 'ru';
    const currUser = UsersService.getCookie();
    let userValues: number[] = [0, 0, 0];

    if (!currUser && localStorage.length === 0) userValues = [];
    if (!currUser && localStorage.length > 0) userValues = await this.getGuestTestsValues(this.gameInfo.datasetStep);
    if (currUser) userValues = await this.getUserTestsValues(this.gameInfo.datasetStep);

    const testsValues = await this.getAllTestsValues(this.gameInfo.datasetStep);
    const usersDataset = Object.values(await this.getDataset(userValues, this.gameInfo.datasetStep));
    const testsDataset = Object.values(await this.getDataset(testsValues, this.gameInfo.datasetStep));
    testsDataset.unshift(0);
    usersDataset.unshift(0);
    console.log(testsDataset);
    let datasets = [
      {
        label: lang[language].common.averageUsers,
        data: testsDataset,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: currUser ? currUser.userName : lang[language].dashboard.guest,
        data: usersDataset,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ];

    const ctx = document.querySelector('canvas') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [0, ...this.gameInfo.dataset].map((el) => el + ` ${this.gameInfo.units[language]}`),
        datasets: datasets,
      },
      options: {
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          y: {
            min: 0,
            max: 120,
            ticks: {
              display: false,
              backdropPadding: 20,
            },
          },
          x: {
            min: 0,
          },
        },

        elements: {
          line: {
            tension: 0.5,
          },
        },
      },
    });
  }

  async renderLastgamesGraph() {
    const language = state.isEngl ? 'en' : 'ru';
    const currUser = UsersService.getCookie();
    let data = [0];
    if (!currUser && localStorage.length === 0) data = [];
    if (!currUser && localStorage.length > 0) data = await this.getGuestTestsValues(this.gameInfo.datasetStep);
    if (currUser) {
      const userData = await UsersService.getUserTestData(currUser.userId!, this.gameInfo.id);
      data = userData.map((item) => item.score);
    }
    const gameNumbers = data.map((item, index) => index);

    const ctx = document.querySelector('#LastGamesGraph') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: gameNumbers,
        datasets: [
          {
            label: this.gameInfo.name[language],
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
        scales: {
          y: {
            min: 0,
            max: Math.max(...data) + 5,
          },
        },
      },
    });
  }

  async getUserTestsValues(step: number) {
    const currUser = UsersService.getCookie();
    let userTests = await UsersService.getUserTestData(currUser!.userId!, this.id);
    const scores = userTests.map((obj) => Math.round(obj.score / step) * step);
    return scores;
  }

  async getGuestTestsValues(step: number) {
    let guestTests = await UsersService.getGuestTestDataFromLocalStorage(this.id);
    const scores = guestTests.map((obj) => Math.round(obj.score / step) * step);
    return scores;
  }

  async getAllTestsValues(step: number) {
    const tests = await Tests.getTestData(this.gameInfo.id);
    const scores = tests.map((obj) => Math.round(obj.score / step) * step);
    return scores;
  }

  async getDataset(values: number[], step: number) {
    const result: { [key: number]: number } = {};
    const n = 70;
    for (let i = 0; i <= n * step; i += step) {
      if (i === 0) continue;
      result[i] = 0;
    }
    values.forEach((value) => {
      if (result[value] !== undefined) {
        result[value]++;
      }
    });
    const maxCount = Math.max(...Object.values(result));
    for (const key in result) {
      if (result.hasOwnProperty(key)) {
        result[key] = maxCount > 0 ? Math.round((result[key] / maxCount) * 100) : 0;
      }
    }
    return result;
  }
}
