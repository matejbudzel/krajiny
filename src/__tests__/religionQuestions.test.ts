import { describe, expect, it } from 'vitest';
import {
  religionFacts,
  religionScopeOptions,
  type ReligionScope,
} from '../data/religion';
import { generateReligionQuestion } from '../utils/religionQuestions';

describe('generateReligionQuestion', () => {
  it('creates a multiple-choice religion question with the correct answer included', () => {
    const question = generateReligionQuestion(religionFacts);

    expect(question.kind).toBe('religion');
    expect(question.options).toContain(question.answer);
    expect(question.options).toHaveLength(4);
    expect(question.fact.prompt.length).toBeGreaterThan(0);
  });

  it('keeps four options even for a narrow scope with few facts', () => {
    const narrowFacts = religionFacts.filter(
      (fact) => fact.scope === 'grade3-h1',
    );
    const question = generateReligionQuestion(narrowFacts);

    expect(question.options).toContain(question.answer);
    expect(question.options).toHaveLength(4);
  });

  it('has religion facts for every selectable scope', () => {
    const scopesWithFacts = new Set<ReligionScope>(
      religionFacts.map((fact) => fact.scope),
    );

    expect(
      religionScopeOptions.every((scope) => scopesWithFacts.has(scope.id)),
    ).toBe(true);
  });
});
