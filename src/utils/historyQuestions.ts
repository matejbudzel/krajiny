import { type HistoryFact } from '../data/history';
import { pickN, shuffle } from './random';

export type HistoryQuestion = {
  kind: 'history';
  prompt: string;
  options: string[];
  answer: string;
  fact: HistoryFact;
  feedbackAnswer: string;
};

export const generateHistoryQuestion = (
  facts: HistoryFact[],
): HistoryQuestion => {
  const fact = pickN(facts, 1)[0];
  const prompt = pickN(fact.prompts, 1)[0];

  return {
    kind: 'history',
    prompt: prompt.prompt,
    options: shuffle(prompt.options),
    answer: prompt.answer,
    fact,
    feedbackAnswer: prompt.answer,
  };
};
