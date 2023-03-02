import { AuthApiError, RegApiError } from '../utils/errors';
import { Authorization, AuthResponse, PlayedTest, Registration, User, UserData } from 'utils/types';
import { getCookie, setCookie, removeCookie } from '../../node_modules/typescript-cookie';
// import { json } from 'stream/consumers';

const url: string = 'https://rscloneserver.onrender.com';
const users: string = `${url}/users`;
const authorize: string = `${url}/authorize`;

export class UsersService {
  static getUser = async (user_id: number): Promise<User> => (await fetch(`${url}/users/${user_id}`)).json();

  static getAllUsers = async (): Promise<User[]> => (await fetch(`${url}/users`)).json();

  static getUserPlayedTests = async (user_id: number): Promise<PlayedTest[]> =>
    (await fetch(`${users}/${user_id}/played`)).json();

  static getUserTestData = async (user_id: number, test_id: number): Promise<PlayedTest[]> =>
    (await fetch(`${users}/${user_id}/played/${test_id}`)).json();

  static getGuestTestDataFromLocalStorage = async (test_id: number): Promise<PlayedTest[]> =>
    JSON.parse(localStorage.games).filter((el: PlayedTest) => el.tests_id === test_id);

  static getGuestAllTeststDataFromLocalStorage = async (): Promise<PlayedTest[]> => JSON.parse(localStorage.games);

  static authorizeUser = async (user: Authorization): Promise<AuthResponse> =>
    (
      await fetch(`${authorize}`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
      })
    ).json();

  static authorizeWithCookie = async (userData: Authorization): Promise<void> => {
    const response: AuthResponse = await this.authorizeUser(userData);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { isAuthorized, user_id } = response;
    if (!isAuthorized) {
      throw new AuthApiError();
    }

    const user = await this.getUser(user_id);

    const cookie: UserData = {
      userId: user_id,
      userName: user.user_name,
      regDate: new Date(user.registration_date),
      permalink: user.permalink,
    };

    setCookie('user', JSON.stringify(cookie), { expires: 7, path: '' });
  };

  static getCookie(): UserData | undefined {
    const cookie = getCookie('user');
    if (!cookie) return;
    return JSON.parse(cookie);
  }

  static removeCookie(): void {
    removeCookie('user');
  }

  // Returns interval between registration and now in milliseconds
  static getJoinPeriod(): number {
    const cookie = this.getCookie();
    if (!cookie) {
      return 1000;
    }
    const regDate = new Date(cookie.regDate).getTime();
    const now = new Date().getTime();
    return now - regDate;
  }

  static registerNewUser = async (user: Registration): Promise<Registration> => {
    const response = await fetch(`${users}`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      await response.json().then((error) => {
        throw new RegApiError(error.message, error);
      });
    }
    return response.json();
  };
}
