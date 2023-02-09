import { PlayedTest } from 'utils/types';
// const url: string = 'http://127.0.0.1:3000';
const url: string = 'https://rscloneserver.onrender.com';
const tests: string = `${url}/played`;

export class Tests{
   static getTestData = async (test_id: number): Promise<PlayedTest> => (await fetch(`${tests}/${test_id}`)).json();
   
   static addTestInDB = async (test: PlayedTest): Promise<PlayedTest> =>
    (
      await fetch(`${url}/tests`, {
        method: 'POST',
        body: JSON.stringify(test),
        headers: { 'Content-Type': 'application/json' },
      })
    ).json();
}






