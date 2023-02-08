import { RandomRussianText } from 'utils/types';

export class TextGenerator{
  getRandomTextEN = async (): Promise<string> =>
  (await fetch('http://metaphorpsum.com/paragraphs/2/4')).text();

  getRandomTextRU = async (): Promise<RandomRussianText> =>
  (await fetch('https://fish-text.ru/get?type=sentence&format=json&number=5')).json();

  getRandomWordEN = async (): Promise<string> =>
  (await fetch('https://random-word-form.herokuapp.com/random/noun')).json();
}