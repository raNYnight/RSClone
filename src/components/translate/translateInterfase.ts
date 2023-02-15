export interface Itranslate {
  en: Ilanguage;
  ru: Ilanguage;
  [key: string]: Ilanguage;
}

export interface Ilanguage {
  main: Imain;
  dashboard: Idashboard;
  signUp: IsignUp;
  login: Ilogin;
  common: Icommon;
  reaction: Ireaction;
  sequence: Isequence;
  aim: Iaim;
  number: Inumber;
  visual: Ivisual;
  verbal: Iverbal;
  typing: Ityping;
}

export interface Imain {
  benchmark: string;
  main: string;
  dashboard: string;
  sign: string;
  login: string;
  logout: string;
  mainDiscr: string;
  getStarted: string;
  new: string;
  reaction: string;
  reactionDiscr: string;
  sequence: string;
  sequenceDiscr: string;
  aim: string;
  aimDiscr: string;
  number: string;
  numberDiscr: string;
  verbal: string;
  verbalDiscr: string;
  chimp: string;
  chimpDiscr: string;
  visual: string;
  visualDiscr: string;
  typing: string;
  typingDiscr: string;
}

export interface Idashboard {
  username: string;
  guest: string;
  joined: string;
  or: string;
  save: string;
  permalink: string;
  test: string;
  actions: string;
  score: string;
  percentile: string;
  play: string;
  stats: string;
  points: string;
  activityFeed: string;
  date: string;
}

export interface IsignUp {
  [key: string]: string | Fields;
}

export type Fields = { [key: string]: string };

export interface Ilogin {
  login: string;
  haveAcc: string;
  signUp: string;
  username: string;
  password: string;
  forgotPas: string;
  resetPas: string;
  error: string;
  fields: {
    [key: string]: string;
  };
}

export interface Icommon {
  start: string;
  statistics: string;
  about: string;
  submit: string;
  next: string;
  ms: string;
  pts: string;
  saveDiscr: string;
  saveScore: string;
  tryAgain: string;
  level: string;
  recentResults: string;
}

export interface Ireaction {
  title: string;
  subTitle: string;
  discr: string;
  wait: string;
  soon: string;
  click: string;
  tryAgain: string;
  going: string;
  endGameDiscr: string;
}

export interface Isequence {
  title: string;
  subTitle: string;
  discr: string;
}

export interface Iaim {
  title: string;
  subTitle: string;
  discr: string;
  remaining: string;
  endGameDiscr: string;
}

export interface Inumber {
  title: string;
  subTitle: string;
  discr: string;
  num: string;
  answer: string;
  submit: string;
  submitBTN: string;
  whatNumber: string;
}

export interface Ivisual {
  title: string;
  subTitle: string;
  discr: string;
  lives: string;
}

export interface Iverbal {
  title: string;
  subTitle: string;
  discr: string;
  lives: string;
  seen: string;
  new: string;
  score: string;
}

export interface Ityping {
  title: string;
  subTitle: string;
  discr: string;
  typingText: string;
  startTyping: string;
}
