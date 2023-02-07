import { PlayedTest, User } from 'utils/types';
// const url: string = 'http://127.0.0.1:3000';
const url: string = 'https://rscloneserver.onrender.com';
const users: string = `${url}/users`;
const tests: string = `${url}/played`;

export const getUser = async (user_id: number): Promise<User> => (await fetch(`${url}/users/${user_id}`)).json();

export const getUserPlayedTests = async (user_id: number): Promise<PlayedTest[]> =>
  (await fetch(`${users}/${user_id}/played`)).json();

export const getTestData = async (test_id: number): Promise<PlayedTest> => (await fetch(`${tests}/${test_id}`)).json();

export const getUserTestData = async (user_id: number, test_id: number): Promise<PlayedTest> =>
  (await fetch(`${users}/${user_id}/played/${test_id}`)).json();