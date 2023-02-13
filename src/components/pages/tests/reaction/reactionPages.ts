import { type } from "os";
import { lang } from "../../../../components/translate/translate";

const soonSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>`;
const clockSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" class="svg-inline--fa fa-clock fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>`
const strokeSvg = `<svg width="100" height="128" viewBox="0 0 100 128" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" style="width: 80px; height: 80px;"><path d="M0.719527 59.616L32.8399 2.79148C33.8149 1.06655 35.6429 0 37.6243 0H94.4947C98.9119 0 101.524 4.94729 99.0334 8.59532L71.201 49.357C68.7101 53.0051 71.3225 57.9524 75.7397 57.9524H82.2118C87.3625 57.9524 89.6835 64.4017 85.7139 67.6841L14.34 126.703C9.85287 130.413 3.43339 125.513 5.82845 120.206L25.9709 75.5735C27.6125 71.936 24.9522 67.8166 20.9615 67.8166H5.50391C1.29539 67.8166 -1.35146 63.2798 0.719527 59.616Z" fill="currentcolor"></path></svg>`
const dots = `
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
`

export const PageData: pageData = {
  en:{
    red: {
      text: lang.en.reaction.wait,
      style: 'reaction-red',
      decor: dots,
    },
    green: {
      text: lang.en.reaction.click,
      style: 'reaction-green',
      decor: dots,

    },
    fail:{
      text: lang.en.reaction.soon,
      sub: lang.en.reaction.tryAgain,
      style: 'reaction-blue',
      decor: soonSvg,
    },
    result:{
      text: 'ms',
      sub: lang.en.reaction.going,
      style: 'reaction-blue',
      decor: clockSvg,
    },
    end:{
      title: lang.en.reaction.endGameDiscr,
      text: 'ms',
      sub: lang.en.common.saveDiscr,
      style: 'reaction-blue',
      decor: strokeSvg,
      btnSave: lang.en.common.saveScore,
      btnTry: lang.en.common.tryAgain,
    }
  },
  ru:{
    red: {
      text: lang.ru.reaction.wait,
      style: 'reaction-red',
      decor: dots,
    },
    green: {
      text: lang.ru.reaction.click,
      style: 'reaction-green',
      decor: dots,
    },
    fail:{
      text: lang.ru.reaction.soon,
      sub: lang.ru.reaction.tryAgain,
      style: 'reaction-blue',
      decor: soonSvg,
    },
    result:{
      text: 'мс',
      sub: lang.ru.reaction.going,
      style: 'reaction-blue',
      decor: clockSvg,
    },
    end:{
      title: lang.ru.reaction.endGameDiscr,
      text: 'мс',
      sub: lang.ru.common.saveDiscr,
      style: 'reaction-blue',
      decor: strokeSvg,
      btnSave: lang.ru.common.saveScore,
      btnTry: lang.ru.common.tryAgain,
    }
  }
}

export type reactPages = 'red' | 'green' | 'fail' | 'result' | 'end';

interface pageData {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    }
  }
}