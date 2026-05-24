import { type Country } from '../data/countries';
import {
  generateQuestion,
  questionTypesForMode,
  type Question,
  type QuestionMode,
  type QuestionType,
} from './questions';

const RECENT_COUNTRY_LIMIT = 4;
const MISTAKE_BOOST = 8;
const CORRECT_BOOST_REDUCTION = 3;
const BOOST_DECAY_PER_QUESTION = 0.4;

export type QuizSchedulerState = {
  countryCounts: Record<string, number>;
  typeCounts: Record<QuestionType, number>;
  countryBoosts: Record<string, number>;
  recentCountryIds: string[];
};

export const createQuizSchedulerState = (): QuizSchedulerState => ({
  countryCounts: {},
  typeCounts: {
    'flag-country': 0,
    'country-flag': 0,
    'map-country': 0,
    'country-map-click': 0,
    'capital-country': 0,
    'country-capital': 0,
  },
  countryBoosts: {},
  recentCountryIds: [],
});

const weightedPick = <T>(items: T[], weightFor: (item: T) => number): T => {
  const weights = items.map((item) => Math.max(0, weightFor(item)));
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  if (total <= 0) return items[Math.floor(Math.random() * items.length)];
  let target = Math.random() * total;

  for (let i = 0; i < items.length; i += 1) {
    target -= weights[i];
    if (target <= 0) return items[i];
  }

  return items[items.length - 1];
};

const recentPenalty = (countryId: string, recentCountryIds: string[]) => {
  const index = recentCountryIds.indexOf(countryId);
  if (index === -1) return 0;
  if (index === 0) return 100;
  return RECENT_COUNTRY_LIMIT - index;
};

const decayBoosts = (boosts: Record<string, number>) =>
  Object.fromEntries(
    Object.entries(boosts)
      .map(([countryId, boost]): [string, number] => [
        countryId,
        Math.max(0, boost - BOOST_DECAY_PER_QUESTION),
      ])
      .filter(([, boost]) => boost > 0),
  );

export const generateScheduledQuestion = (
  state: QuizSchedulerState,
  sourceCountries: Country[],
  mode: QuestionMode,
): Question => {
  const questionTypes = questionTypesForMode(mode);
  const maxCountryCount = Math.max(
    0,
    ...sourceCountries.map((country) => state.countryCounts[country.id] ?? 0),
  );
  const maxTypeCount = Math.max(
    0,
    ...questionTypes.map((type) => state.typeCounts[type] ?? 0),
  );

  const country = weightedPick(sourceCountries, (candidate) => {
    const count = state.countryCounts[candidate.id] ?? 0;
    const balanceWeight = maxCountryCount - count + 1;
    const boostWeight = state.countryBoosts[candidate.id] ?? 0;
    const penalty =
      sourceCountries.length > 1
        ? recentPenalty(candidate.id, state.recentCountryIds)
        : 0;

    return balanceWeight + boostWeight - penalty + Math.random() * 0.25;
  });

  const type = weightedPick(questionTypes, (candidate) => {
    const count = state.typeCounts[candidate] ?? 0;
    return maxTypeCount - count + 1 + Math.random() * 0.25;
  });

  return generateQuestion(country.id, sourceCountries, mode, type);
};

export const recordScheduledAnswer = (
  state: QuizSchedulerState,
  question: Question,
  correct: boolean,
): QuizSchedulerState => {
  const countryId = question.country?.id;
  const countryBoosts = decayBoosts(state.countryBoosts);

  if (countryId) {
    countryBoosts[countryId] = correct
      ? Math.max(0, (countryBoosts[countryId] ?? 0) - CORRECT_BOOST_REDUCTION)
      : Math.min(16, (countryBoosts[countryId] ?? 0) + MISTAKE_BOOST);
  }

  return {
    countryCounts: countryId
      ? {
          ...state.countryCounts,
          [countryId]: (state.countryCounts[countryId] ?? 0) + 1,
        }
      : state.countryCounts,
    typeCounts: {
      ...state.typeCounts,
      [question.type]: (state.typeCounts[question.type] ?? 0) + 1,
    },
    countryBoosts,
    recentCountryIds: countryId
      ? [
          countryId,
          ...state.recentCountryIds.filter((id) => id !== countryId),
        ].slice(0, RECENT_COUNTRY_LIMIT)
      : state.recentCountryIds,
  };
};
