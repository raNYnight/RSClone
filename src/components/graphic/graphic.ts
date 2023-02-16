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

  language = state.isEngl ? lang.en : lang.ru;

  constructor(id: number) {
    this.id = id;
    this.gameInfo = gamesInfo.filter((el) => el.id === this.id)[0];
  }

  async renderGraph(xDataset: number[], yTestDataset: number[], yUserDataset?: number[]) {
    const ds = await this.getTestDataset(this.gameInfo.datasetStep);
    console.log(ds);
    const currUser = UsersService.getCookie();

    let datasets = [
      {
        label: this.language.common.averageUsers,
        data: yTestDataset,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ];
    if (yUserDataset)
      datasets.push({
        label: currUser.userName,
        data: yUserDataset,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      });

    const ctx = document.querySelector('canvas') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xDataset,
        datasets: datasets,
      },
      options: {
        scales: {
          y: {
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  }

  async getTestDataset(step: number) {
    const tests = await Tests.getTestData(this.gameInfo.id);
    const obj: { [key: number]: number } = {
      0: 0,
    };
    const res = this.gameInfo.dataset.reduce((acc, curr) => {
      acc[curr] = 0;
      return acc;
    }, obj);

    for (let i = 0; i < tests.length; i++) {
      let score = tests[i].score;
      let roundedScore = Math.round(score / step) * step;
      res[roundedScore] += 1;
    }
    return res;
  }

  async getUserDataset(step: number) {
    const currUser = UsersService.getCookie();
    const userTests = await UsersService.getUserTestData(currUser.userId!, this.id);
    const obj: { [key: number]: number } = {
      0: 0,
    };
    const res = this.gameInfo.dataset.reduce((acc, curr) => {
      acc[curr] = 0;
      return acc;
    }, obj);
    for (let i = 0; i < userTests.length; i++) {
      let score = userTests[i].score;
      let roundedScore = Math.round(score / step) * step;
      res[roundedScore] += 1;
    }
    return res;
  }
}
