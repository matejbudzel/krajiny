import { countries, type Country } from '../data/countries';
import { pickN, shuffle } from './random';

export type Question = {
  prompt: string;
  options?: string[];
  answer: string;
  type:
    | 'flag-country'
    | 'country-flag'
    | 'map-country'
    | 'country-map-click'
    | 'capital-country'
    | 'country-capital';
  country?: Country;
  feedbackAnswer: string;
};

const wrongCountries = (country: Country): Country[] =>
  countries.filter((c) => c.id !== country.id);

export const generateQuestion = (preferredCountryId?: string): Question => {
  const preferred = preferredCountryId
    ? countries.find((c) => c.id === preferredCountryId)
    : undefined;
  const country = preferred ?? pickN(countries, 1)[0];
  const type = pickN(
    [
      'flag-country',
      'country-flag',
      'map-country',
      'country-map-click',
      'capital-country',
      'country-capital',
    ],
    1,
  )[0] as Question['type'];
  const wrong = pickN(wrongCountries(country), 2);

  if (type === 'country-map-click') {
    return {
      prompt: `Klikni na správne miesto na mape: ${country.name}`,
      answer: country.id,
      type,
      country,
      feedbackAnswer: country.name,
    };
  }

  if (type === 'flag-country') {
    return {
      prompt: 'Ktorej krajine patrí táto vlajka?',
      options: shuffle([country.name, ...wrong.map((w) => w.name)]),
      answer: country.name,
      type,
      country,
      feedbackAnswer: country.name,
    };
  }
  if (type === 'country-flag') {
    return {
      prompt: `Vyber vlajku krajiny ${country.name}`,
      options: shuffle([country.id, ...wrong.map((w) => w.id)]),
      answer: country.id,
      type,
      country,
      feedbackAnswer: country.name,
    };
  }
  if (type === 'map-country') {
    return {
      prompt: 'Ktorá krajina je označená na mape?',
      options: shuffle([country.name, ...wrong.map((w) => w.name)]),
      answer: country.name,
      type,
      country,
      feedbackAnswer: country.name,
    };
  }
  if (type === 'capital-country') {
    return {
      prompt: `Hlavné mesto ${country.capital} patrí krajine:`,
      options: shuffle([country.name, ...wrong.map((w) => w.name)]),
      answer: country.name,
      type,
      country,
      feedbackAnswer: country.name,
    };
  }

  return {
    prompt: `Hlavné mesto krajiny ${country.name} je:`,
    options: shuffle([country.capital, ...wrong.map((w) => w.capital)]),
    answer: country.capital,
    type,
    country,
    feedbackAnswer: country.capital,
  };
};
