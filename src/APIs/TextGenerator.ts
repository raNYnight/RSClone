import { RandomRussianText } from 'utils/types';

export class TextGenerator {
  static getRandomTextEN = async (): Promise<string> => (await fetch('http://metaphorpsum.com/paragraphs/2/4')).text();

  static getRandomTextRU = async (): Promise<RandomRussianText> =>
    (await fetch('https://fish-text.ru/get?type=sentence&format=json&number=5')).json();

  static getRandomWordEN = async (): Promise<string> =>
    (await fetch('https://random-word-form.herokuapp.com/random/noun')).json();

  static getRandomWordRU = async (): Promise<string> => {
    const res = await (
      await fetch('https://raw.githubusercontent.com/Harrix/Russian-Nouns/main/dist/russian_nouns_with_definition.json')
    ).json();
    const keys: string[] = Object.keys(res);
    const randomNumber: number = Math.floor(Math.random() * keys.length);
    const randomWord: string = keys[randomNumber];
    return randomWord;
  };
}
