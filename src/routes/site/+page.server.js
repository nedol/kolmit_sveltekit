import { dict } from './data.js';

export function load() {
  console.log('site');
  return {
    dict: dict.map((word) => ({
      en: word.en,
      fr: word.fr,
    })),
  };
}
