import { describe, expect, it } from 'vitest';
import { countries } from '../data/countries';
import {
  createQuizSchedulerState,
  generateScheduledQuestion,
  recordScheduledAnswer,
} from '../utils/quizScheduler';

const sampleCountries = countries.slice(0, 4);

describe('quiz scheduler', () => {
  it('does not immediately repeat the most recent country when alternatives exist', () => {
    const state = {
      ...createQuizSchedulerState(),
      recentCountryIds: [sampleCountries[0].id],
    };

    for (let i = 0; i < 20; i += 1) {
      const question = generateScheduledQuestion(
        state,
        sampleCountries,
        'full',
      );
      expect(question.country?.id).not.toBe(sampleCountries[0].id);
    }
  });

  it('boosts missed countries and lowers the boost after a correct answer', () => {
    const state = createQuizSchedulerState();
    const question = generateScheduledQuestion(state, sampleCountries, 'full');
    const missedState = recordScheduledAnswer(state, question, false);
    const boostedCountryId = question.country?.id ?? '';

    expect(missedState.countryBoosts[boostedCountryId]).toBeGreaterThan(0);

    const correctedState = recordScheduledAnswer(missedState, question, true);

    expect(correctedState.countryBoosts[boostedCountryId]).toBeLessThan(
      missedState.countryBoosts[boostedCountryId],
    );
  });
});
