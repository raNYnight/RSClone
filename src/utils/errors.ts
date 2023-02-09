import { state } from "./state";

export class RegApiError extends Error {
  data: object;

  constructor(message: string, data: object) {
    super(message);
    this.data = data;
  }
}

export class AuthApiError extends Error {
  data: string;

  constructor() {
    super("Authorization error");
    const desc = state.isEngl ? "Wrong password or username" : "Неверный пароль или имя пользователя";
    this.data = desc;
  }
}

