import { AIM_SVG, BOLT_SVG, NUMBER_SVG, SEQUENCE_SVG, TYPING_SVG, VERBAL_SVG } from '../assets/icons/svg';
import { Igame } from './types';

export const gamesInfo: Igame[] = [
  {
    id: 0,
    name: {
      en: 'Reaction Time',
      ru: 'Время реакции',
    },
    description: {
      en: 'Test your visual reflexes.',
      ru: 'Проверьте свои зрительные рефлексы.',
    },
    new: false,
    svg: BOLT_SVG,
    href: 'reaction',
    hrefStats: 'reaction-stats',
  },
  {
    id: 1,
    name: {
      en: 'Sequence Memory',
      ru: 'Запоминание последовательности',
    },
    description: {
      en: 'Remember an increasingly long pattern of button presses',
      ru: 'Запомните самую длинную последовательность нажатий кнопок.',
    },
    new: false,
    svg: SEQUENCE_SVG,
    href: 'sequence',
    hrefStats: 'sequence-stats',
  },
  {
    id: 2,
    name: {
      en: 'Aim Trainer',
      ru: 'Тренеровка прицеливания',
    },
    description: {
      en: 'How quickly can you hit all the targets?',
      ru: 'Как быстро вы можете поразить все цели?',
    },
    new: false,
    svg: AIM_SVG,
    href: 'aim',
    hrefStats: 'aim-stats',
  },
  {
    id: 3,
    name: {
      en: 'Number Memory',
      ru: 'Запоминание цифр',
    },
    description: {
      en: 'Remember the longest number you can.',
      ru: 'Запомните самое длинное число, которое сможете.',
    },
    new: false,
    svg: NUMBER_SVG,
    href: 'number',
    hrefStats: 'number-stats',
  },
  {
    id: 4,
    name: {
      en: 'Verbal Memory',
      ru: 'Вербальная память',
    },
    description: {
      en: 'Keep as many words in short term memory as possible.',
      ru: 'Запомните как можно больше слов.',
    },
    new: false,
    svg: VERBAL_SVG,
    href: 'verbal',
    hrefStats: 'verbal-stats',
  },
  {
    id: 5,
    name: {
      en: 'Typing',
      ru: 'Скорость печати',
    },
    description: {
      en: 'How many words per minute can you type?',
      ru: 'Сколько слов в минуту вы можете напечатать?',
    },
    new: false,
    svg: TYPING_SVG,
    href: 'typing',
    hrefStats: 'typing-stats',
  },
];
