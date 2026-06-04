import { religionFacts, type ReligionFact } from '../data/religion';
import { pickN, shuffle } from './random';

export type ReligionQuestion = {
  kind: 'religion';
  prompt: string;
  options: string[];
  answer: string;
  fact: ReligionFact;
  feedbackAnswer: string;
};

export const generateReligionQuestion = (
  facts: ReligionFact[],
  distractorFacts: ReligionFact[] = religionFacts,
): ReligionQuestion => {
  const fact = pickN(facts, 1)[0];
  const wrongAnswers = distractorFacts
    .filter((candidate) => candidate.id !== fact.id)
    .map((candidate) => candidate.answer);

  return {
    kind: 'religion',
    prompt: fact.prompt,
    options: shuffle([fact.answer, ...pickN(wrongAnswers, 3)]),
    answer: fact.answer,
    fact,
    feedbackAnswer: fact.answer,
  };
};
