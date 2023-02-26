import { PlayedTest } from 'utils/types';
import { UsersService } from './UsersService';
// const url: string = 'http://127.0.0.1:3000';
const url: string = 'https://rscloneserver.onrender.com';
const tests: string = `${url}/played`;

export class Tests {
  static getTestData = async (test_id: number): Promise<PlayedTest[]> => (await fetch(`${tests}/${test_id}`)).json();

  static addTestInDB = async (test: PlayedTest): Promise<PlayedTest> =>
    (
      await fetch(`${url}/tests`, {
        method: 'POST',
        body: JSON.stringify(test),
        headers: { 'Content-Type': 'application/json' },
      })
    ).json();

  static getUserPlayedTests = async (): Promise<PlayedTest[]> => {
    const currUser = UsersService.getCookie();
    if (currUser) {
      const playedDB = await UsersService.getUserPlayedTests(currUser.userId!);
      return playedDB;
    } else return [];
  };

  static getUserAverageStats = async (testID: number) => {
    const currUser = UsersService.getCookie();
    const location = document.location.hash.slice(1).split('/');
    let testStats = {
      score: '?',
      percentile: '?',
    };
    let testData: PlayedTest[] = [];
    if (location[1] === 'users') {
      const allUsers = await UsersService.getAllUsers();
      const userFromLink = allUsers.find((user) => user.permalink === location[2]);
      testData = await UsersService.getUserTestData(userFromLink?.id!, testID);
      console.log('permalink user', userFromLink);
      console.log('permalink data', testData);
    }
    if (currUser && location[1] !== 'users') {
      testData = await UsersService.getUserTestData(currUser.userId!, testID);
    }
    if (!currUser && location[1] !== 'users' && localStorage.length === 0) testStats.score = '?';
    if (!currUser && location[1] !== 'users' && localStorage.length > 0) {
      testData = await UsersService.getGuestTestDataFromLocalStorage(testID);
    }
    const lastFive = testData.slice(Math.max(testData.length - 5, 0));
    const averageScore =
      testData.length !== 0
        ? (lastFive.reduce((sum, current) => sum + current.score, 0) / lastFive.length).toFixed(0)
        : 0;
    if (lastFive.length > 0) testStats.score = averageScore.toString();
    const scoresArr = testData.map((obj) => obj.score);
    scoresArr.push(+averageScore);
    const sortedScores = scoresArr.sort((a: number, b: number) => a - b);
    const index = sortedScores.indexOf(+averageScore);
    const percentile = (index / sortedScores.length) * 100;
    testStats.percentile = percentile.toFixed(2) + '%';
    return testStats;
  };
}
