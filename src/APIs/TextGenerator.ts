import { RandomENTEXT, RandomRussianText } from 'utils/types';

export class TextGenerator {
  static getRandomTextEN = async (): Promise<string> => {
    const res: Promise<RandomENTEXT> = (
      await fetch('https://fakerapi.it/api/v1/texts?_quantity=1&_characters=500')
    ).json();
    return (await res).data[0].content;
  };

  static getRandomTextRU = async (): Promise<RandomRussianText> =>
    (await fetch('https://fish-text.ru/get?type=sentence&format=json&number=5')).json();

  static getRandomWordEN = async (): Promise<string> =>
    (await fetch('https://random-word-form.herokuapp.com/random/noun')).json();

  static getRandomWordRU = async (): Promise<string> => {
    const res = await (
      await fetch('https://raw.githubusercontent.com/Harrix/Russian-Nouns/main/dist/russian_nouns_with_definition.json')
    ).json();
    const values = Object.values(res);
    const randomIndex: number = Math.floor(Math.random() * values.length);
    const randomValue = values[randomIndex];
    const randomKey = Object.keys(res).find((key) => res[key] === randomValue) as string;
    return randomKey;
  };

  static async getRandomWord(lang: string) {
    if (lang === 'en') {
      return TextGenerator.getRandomWordEN();
    } else {
      return TextGenerator.getRandomWordRU();
    }
  }
}
