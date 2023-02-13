import { lang } from '../components/translate/translate';
import { AIM_SVG, BOLT_SVG, NUMBER_SVG, SEQUENCE_SVG, TYPING_SVG, VERBAL_SVG } from '../assets/icons/svg';
import { Igame } from './types';

export const gamesInfo: Igame[] = [
  {
    id: 2,
    name: {
      en: 'Reaction Time',
      ru: 'Скорость реакции',
    },
    description: {
      en: 'When the red box turns green, click as quickly as you can. </br> Click start to begin.',
      ru: 'Проверьте свои зрительные рефлексы.',
    },
    aboutTest: {
      en: lang.en.reaction.discr,
      ru: lang.ru.reaction.discr,
    },
    new: false,
    svg: BOLT_SVG,
    href: 'reaction',
    hrefStats: 'reaction-stats',
  },
  {
    id: 3,
    name: {
      en: 'Sequence Memory',
      ru: 'Порядок следования',
    },
    description: {
      en: 'Remember an increasingly long pattern of button presses',
      ru: 'Запомните самую длинную последовательность нажатий кнопок.',
    },
    aboutTest: {
      en: lang.en.sequence.discr,
      ru: lang.ru.sequence.discr,
    },
    new: false,
    svg: SEQUENCE_SVG,
    href: 'sequence',
    hrefStats: 'sequence-stats',
  },
  {
    id: 5,
    name: {
      en: 'Aim Trainer',
      ru: 'Тренеровка прицеливания',
    },
    description: {
      en: 'How quickly can you hit all the targets?',
      ru: 'Как быстро вы можете поразить все цели?',
    },
    aboutTest: {
      en: lang.en.aim.discr,
      ru: lang.ru.aim.discr,
    },
    new: false,
    svg: AIM_SVG,
    href: 'aim',
    hrefStats: 'aim-stats',
  },
  {
    id: 7,
    name: {
      en: 'Number Memory',
      ru: 'Запоминание цифр',
    },
    description: {
      en: 'Remember the longest number you can.',
      ru: 'Запомните самое длинное число, которое сможете.',
    },
    aboutTest: {
      en: lang.en.number.discr,
      ru: lang.ru.number.discr,
    },
    new: false,
    svg: NUMBER_SVG,
    href: 'number',
    hrefStats: 'number-stats',
  },
  {
    id: 6,
    name: {
      en: 'Verbal Memory',
      ru: 'Вербальная память',
    },
    description: {
      en: 'Keep as many words in short term memory as possible.',
      ru: 'Запомните как можно больше слов.',
    },
    aboutTest: {
      en: lang.en.verbal.discr,
      ru: lang.ru.verbal.discr,
    },
    new: false,
    svg: VERBAL_SVG,
    href: 'verbal',
    hrefStats: 'verbal-stats',
  },
  {
    id: 9,
    name: {
      en: 'Typing',
      ru: 'Скорость печати',
    },
    description: {
      en: 'How many words per minute can you type?',
      ru: 'Сколько слов в минуту вы можете напечатать?',
    },
    aboutTest: {
      en: lang.en.typing.discr,
      ru: lang.ru.typing.discr,
    },
    new: false,
    svg: TYPING_SVG,
    href: 'typing',
    hrefStats: 'typing-stats',
  },
];
