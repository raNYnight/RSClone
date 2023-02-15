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
    let testStats = {
      score: '?',
      percentile: '?',
    };
    if (currUser) {
      const testData = await UsersService.getUserTestData(currUser.userId!, testID);
      const lastFive = testData.slice(Math.max(testData.length - 5, 0));
      const averageScore = lastFive.reduce((sum, current) => sum + current.score, 0) / lastFive.length;
      if (lastFive.length > 0) testStats.score = averageScore.toFixed(2);
    }
    return testStats;
  };
}
