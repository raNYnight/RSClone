import { UsersService } from "../APIs/UsersService";
import { getRandomInt } from "./random";

const symbols = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890-=!@#$%^&*()";

export async function getRandomString(length: number): Promise<string>{
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += symbols[getRandomInt(0, symbols.length)];
  };
  const users = await UsersService.getAllUsers();
  const isUnique = users.every((user) => user.permalink !== randomString)
  if (isUnique) {
    return randomString;

  }
  return getRandomString(length);
}