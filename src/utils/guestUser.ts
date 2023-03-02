import { UserData } from "./types";

export class GuestUser implements UserData{
  userName: string;
  regDate: Date;
  constructor(){
    this.userName = "Guest";
    this.regDate = new Date(new Date().getTime());
  }
}