import { AuthApiError, RegApiError } from '../utils/errors';
import { Authorization, AuthResponse, PlayedTest, Registration, User, UserData } from 'utils/types';
import { getCookie, setCookie, removeCookie } from '../../node_modules/typescript-cookie'
import { json } from 'stream/consumers';

const url: string = 'https://rscloneserver.onrender.com';
const users: string = `${url}/users`;
const authorize: string = `${url}/authorize`;

export class UsersService{
  static getUser = async (user_id: number): Promise<User> => (await fetch(`${url}/users/${user_id}`)).json();

  static getAllUsers = async (): Promise<User[]> => (await fetch(`${url}/users`)).json();

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

  static authorizeWithCookie = async (userData: Authorization): Promise<void> => {
    const response: AuthResponse = await this.authorizeUser(userData);
    const {isAuthorized, user_id} = response;
    if (!isAuthorized){
      throw new AuthApiError();
    }

    const user = await this.getUser(user_id);

    const cookie: UserData = {
      userId: user_id,
      userName: user.user_name,
      regDate: new Date(user.registration_date),
      permalink: user.permalink,
    }
    console.log("date: ",new Date(user.registration_date));
    
    setCookie('user', JSON.stringify(cookie), {expires: 7, path: ''});
  }

  static getCookie(): UserData{
    const cookie = getCookie('user')
    return JSON.parse(cookie? cookie : 'false');
  }

  static removeCookie(){
    removeCookie('user');
  }

  // Returns interval between registration and now in milliseconds
  static getJoinPeriod(): number{
    const cookie = this.getCookie();
    if (typeof cookie === 'string'){
      return 1000;
    }
    const regDate = new Date(cookie.regDate).getTime();
    const now = new Date().getTime();
    return now - regDate;
  }

  static registerNewUser = async (user: Registration): Promise<Registration> =>
  {
    const response = await fetch(`${users}`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      await response.json().then(error => {
        throw new RegApiError(error.message, error);
      });
    };
    return response.json();
  }
   
}