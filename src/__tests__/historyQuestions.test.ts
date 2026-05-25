import { describe, expect, it } from 'vitest';
import { historyFacts } from '../data/history';
import { generateHistoryQuestion } from '../utils/historyQuestions';

describe('generateHistoryQuestion', () => {
  it('creates a multiple-choice history question with the correct answer included', () => {
    const question = generateHistoryQuestion(historyFacts);

    expect(question.kind).toBe('history');
    expect(question.options).toContain(question.answer);
    expect(question.options.length).toBeGreaterThanOrEqual(3);
    expect(question.fact.sentence.length).toBeGreaterThan(0);
  });
});
