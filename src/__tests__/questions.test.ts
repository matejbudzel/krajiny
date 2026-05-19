import { describe, expect, it } from 'vitest';
import { generateQuestion } from '../utils/questions';

describe('generateQuestion', () => {
  it('creates one correct answer and two wrong options when options exist', () => {
    const q = generateQuestion();
    if (!q.options) return;
    expect(q.options).toHaveLength(3);
    expect(q.options.includes(q.answer)).toBe(true);
    expect(new Set(q.options).size).toBe(3);
  });
});
