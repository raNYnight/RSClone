import { Authorization, AuthResponse, PlayedTest, Registration, User } from 'utils/types';

const url: string = 'https://rscloneserver.onrender.com';
const users: string = `${url}/users`;
const authorize: string = `${url}/authorize`;

export class UsersService{
  static getUser = async (user_id: number): Promise<User> => (await fetch(`${url}/users/${user_id}`)).json();

  static getUserPlayedTests = async (user_id: number): Promise<PlayedTest[]> =>
  (await fetch(`${users}/${user_id}/played`)).json();

  static getUserTestData = async (user_id: number, test_id: number): Promise<PlayedTest> =>
  (await fetch(`${users}/${user_id}/played/${test_id}`)).json();

  static authorizeUser = async (user: Authorization): Promise<AuthResponse> =>
  (
    await fetch(`${authorize}`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    })
  ).json();

  static registerNewUser = async (user: Registration): Promise<Registration> =>
  (
    await fetch(`${users}`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    })
  ).json();
}