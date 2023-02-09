import { UsersService } from "../APIs/UsersService";

const symbols = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890-=!@#$%^&*()";

function getRandomInt(min = 0, max = symbols.length): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export async function getRandomString(length: number): Promise<string>{
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += symbols[getRandomInt()];
  };
  const users = await UsersService.getAllUsers();
  const isUnique = users.every((user) => user.permalink !== randomString)
  if (isUnique) {
    console.log("I've made a string");
    return randomString;

  }
  return getRandomString(length);
}