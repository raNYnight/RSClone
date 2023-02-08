export interface Istate {
  isEngl: boolean;
}

export interface Igame {
  id: number;
  name: {
    en: string;
    ru: string;
  };
  description: {
    en: string;
    ru: string;
  };
  aboutTest: {
    en: string;
    ru: string;
  };
  new: boolean;
  svg: string;
  href: string;
  hrefStats: string;
}

export interface User {
  id: number;
  email: string;
  user_name: string;
  password: string;
  registration_date: Date;
  permalink: string;
}

export interface PlayedTest {
  id?: number;
  user_id: number;
  tests_id: number;
  date: Date;
  score: number;
}

export interface Authorization {
  user_name: string;
  password: string;
}
export interface AuthResponse {
  isAuthorized: boolean;
  user_id: number;
}

export interface Registration {
  email: string;
  user_name: string;
  password: string;
  registration_date: string;
  permalink: string;
}
