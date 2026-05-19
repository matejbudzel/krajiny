const KEY = 'geo-kids-score';

export type Score = { correct: number; wrong: number; mistakes: string[] };

export const loadScore = (): Score => {
  const raw = localStorage.getItem(KEY);
  if (!raw) return { correct: 0, wrong: 0, mistakes: [] };
  return JSON.parse(raw) as Score;
};

export const saveScore = (score: Score) =>
  localStorage.setItem(KEY, JSON.stringify(score));
