import { useEffect, useMemo, useState } from 'react';
import {
  countries,
  countryScopeOptions,
  type Country,
  type CountryScope,
} from './data/countries';
import { FlagView } from './components/FlagView';
import { MapView } from './components/MapView';
import {
  generateQuestion,
  type Question,
  type QuestionMode,
} from './utils/questions';
import { loadScore, saveScore, type Score } from './utils/storage';

const defaultScopes: CountryScope[] = ['grade3-h2'];
const defaultCountries = countries.filter((country) =>
  defaultScopes.includes(country.scope),
);

const App = () => {
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [questionMode, setQuestionMode] = useState<QuestionMode>('full');
  const [selectedScopes, setSelectedScopes] =
    useState<CountryScope[]>(defaultScopes);
  const [selected, setSelected] = useState<Country | null>(null);
  const [question, setQuestion] = useState<Question>(() =>
    generateQuestion(undefined, defaultCountries),
  );
  const [result, setResult] = useState<string>('');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<Score>(() => loadScore());

  useEffect(() => saveScore(score), [score]);

  const filteredCountries = useMemo(
    () => countries.filter((country) => selectedScopes.includes(country.scope)),
    [selectedScopes],
  );
  const countryById = useMemo(
    () => new Map(countries.map((c) => [c.id, c])),
    [],
  );
  const allScopesSelected =
    selectedScopes.length === countryScopeOptions.length;
  const selectedScopeSummary = allScopesSelected
    ? 'Všetko'
    : countryScopeOptions
        .filter((scope) => selectedScopes.includes(scope.id))
        .map((scope) => scope.label)
        .join(', ');
  const questionModeSummary =
    questionMode === 'simple' ? '1. ročník: názvy a vlajky' : 'Plný režim';

  useEffect(() => {
    setSelected(null);
    setSelectedAnswer(null);
    setResult('');
    setQuestion(generateQuestion(undefined, filteredCountries, questionMode));
  }, [filteredCountries, questionMode]);

  const answer = (value: string) => {
    if (selectedAnswer) return;
    const ok = value === question.answer;
    setSelectedAnswer(value);
    setResult(ok ? 'Správne!' : 'Skoro.');
    setScore((s) => ({
      correct: s.correct + (ok ? 1 : 0),
      wrong: s.wrong + (ok ? 0 : 1),
      mistakes: ok
        ? s.mistakes
        : [...s.mistakes, question.country?.id ?? question.answer],
    }));
  };

  const next = () => {
    const targetMistake =
      score.mistakes.length > 0 && Math.random() < 0.6
        ? score.mistakes[Math.floor(Math.random() * score.mistakes.length)]
        : undefined;
    setQuestion(
      generateQuestion(targetMistake, filteredCountries, questionMode),
    );
    setResult('');
    setSelectedAnswer(null);
  };

  const resetProgress = () => {
    setScore({ correct: 0, wrong: 0, mistakes: [] });
    setSelected(null);
    setSelectedAnswer(null);
    setResult('');
    setQuestion(generateQuestion(undefined, filteredCountries, questionMode));
  };

  const toggleAllScopes = () => {
    setSelectedScopes(
      allScopesSelected
        ? defaultScopes
        : countryScopeOptions.map((scope) => scope.id),
    );
  };

  const toggleScope = (scope: CountryScope) => {
    setSelectedScopes((current) => {
      if (!current.includes(scope)) return [...current, scope];
      if (current.length === 1) return current;
      return current.filter((selectedScope) => selectedScope !== scope);
    });
  };

  const learnActive = mode === 'learn';
  const quizActive = mode === 'quiz';
  const simpleQuestions = questionMode === 'simple';

  return (
    <main className="mx-auto max-w-4xl p-4 text-slate-900">
      <h1 className="mb-4 text-center text-4xl font-extrabold text-blue-700">
        🌍 Krajiny hravo
      </h1>
      <div className="mb-4 flex flex-wrap items-stretch gap-2 rounded-xl bg-white p-2 shadow">
        <button
          className={`min-h-11 flex-1 self-stretch whitespace-nowrap rounded-lg border-2 px-3 py-2 text-base font-bold sm:flex-none sm:text-lg ${learnActive ? 'border-emerald-700 bg-emerald-500 text-white shadow' : 'border-transparent bg-emerald-100 text-emerald-900'}`}
          onClick={() => setMode('learn')}
          aria-pressed={learnActive}
        >
          Učím sa
        </button>
        <button
          className={`min-h-11 flex-1 self-stretch whitespace-nowrap rounded-lg border-2 px-3 py-2 text-base font-bold sm:flex-none sm:text-lg ${quizActive ? 'border-fuchsia-700 bg-fuchsia-500 text-white shadow' : 'border-transparent bg-fuchsia-100 text-fuchsia-900'}`}
          onClick={() => setMode('quiz')}
          aria-pressed={quizActive}
        >
          Skúšanie
        </button>
        <details className="relative min-w-0 flex-[1_1_11rem] self-stretch sm:flex-[1_1_13rem]">
          <summary className="flex h-full min-h-11 cursor-pointer list-none items-center justify-between gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold marker:hidden sm:text-base">
            <span className="min-w-0">
              <span className="block text-xs font-semibold text-slate-500">
                Režim učenia
              </span>
              <span className="block truncate">{questionModeSummary}</span>
            </span>
            <span className="shrink-0 text-slate-500">▾</span>
          </summary>
          <div className="absolute z-30 mt-2 w-full min-w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            <label className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 font-bold">
              <input
                type="radio"
                name="question-mode"
                checked={!simpleQuestions}
                onChange={() => setQuestionMode('full')}
              />
              Plný režim
            </label>
            <label className="mt-2 flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 font-bold">
              <input
                type="radio"
                name="question-mode"
                checked={simpleQuestions}
                onChange={() => setQuestionMode('simple')}
              />
              1. ročník: názvy a vlajky
            </label>
          </div>
        </details>
        <details className="relative min-w-0 flex-[1_1_11rem] self-stretch sm:flex-[1_1_13rem]">
          <summary className="flex h-full min-h-11 cursor-pointer list-none items-center justify-between gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold marker:hidden sm:text-base">
            <span className="min-w-0">
              <span className="block text-xs font-semibold text-slate-500">
                Rozsah
              </span>
              <span className="block truncate">{selectedScopeSummary}</span>
            </span>
            <span className="shrink-0 text-slate-500">▾</span>
          </summary>
          <div className="absolute right-0 z-30 mt-2 max-h-72 w-full min-w-72 overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            <label className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 font-bold">
              <input
                type="checkbox"
                checked={allScopesSelected}
                onChange={toggleAllScopes}
              />
              Všetko
            </label>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {countryScopeOptions.map((scope) => (
                <label
                  key={scope.id}
                  className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 font-bold"
                >
                  <input
                    type="checkbox"
                    checked={selectedScopes.includes(scope.id)}
                    onChange={() => toggleScope(scope.id)}
                  />
                  {scope.label}
                </label>
              ))}
            </div>
          </div>
        </details>
        {quizActive && (
          <button
            className="min-h-11 flex-1 self-stretch whitespace-nowrap rounded-lg bg-slate-600 px-3 py-2 text-base font-bold text-white sm:flex-none sm:text-lg"
            onClick={resetProgress}
          >
            Reset
          </button>
        )}
      </div>

      {mode === 'quiz' && (
        <p className="mb-3 text-xl">
          ✅ {score.correct} | ❌ {score.wrong}
        </p>
      )}

      {mode === 'learn' && (
        <section>
          <MapView
            onSelect={setSelected}
            visibleCountries={filteredCountries}
            activeId={selected?.id}
          />
          {selected && (
            <div className="mt-4 rounded-2xl bg-white p-4 shadow">
              <FlagView country={selected} />
              <p className="text-2xl font-bold">{selected.name}</p>
              {!simpleQuestions && (
                <p className="text-xl">Hlavné mesto: {selected.capital}</p>
              )}
            </div>
          )}
        </section>
      )}

      {mode === 'quiz' && (
        <section className="rounded-2xl bg-white p-4 shadow">
          <h2 className="text-2xl font-bold">{question.prompt}</h2>
          {question.type === 'flag-country' && question.country && (
            <div className="my-4">
              <FlagView country={question.country} />
            </div>
          )}
          {question.type === 'country-flag' && question.options && (
            <div className="my-4 grid grid-cols-3 gap-3">
              {question.options.map((id) => {
                const c = countryById.get(id)!;
                const picked = selectedAnswer === id;
                const correct = question.answer === id;
                const revealed = selectedAnswer !== null;
                const bg =
                  revealed && correct
                    ? 'bg-green-300'
                    : picked
                      ? 'bg-rose-300'
                      : 'bg-white';
                const border =
                  revealed && correct
                    ? 'border-4 border-green-600'
                    : 'border-2 border-slate-200';
                return (
                  <button
                    key={id}
                    className={`rounded-xl p-4 ${bg} ${border}`}
                    onClick={() => answer(id)}
                  >
                    <FlagView country={c} />
                  </button>
                );
              })}
            </div>
          )}
          {question.type === 'map-country' && question.country && (
            <MapView
              onSelect={() => {}}
              visibleCountries={filteredCountries}
              highlightedId={question.country.id}
            />
          )}
          {question.type === 'country-map-click' && (
            <MapView
              onSelect={(c) => answer(c.id)}
              visibleCountries={filteredCountries}
              correctId={question.answer}
              selectedId={selectedAnswer ?? undefined}
            />
          )}
          {question.options &&
            question.type !== 'country-flag' &&
            question.type !== 'country-map-click' && (
              <div className="mt-4 grid gap-3">
                {question.options.map((option) => {
                  const picked = selectedAnswer === option;
                  const correct = question.answer === option;
                  const revealed = selectedAnswer !== null;
                  const bg =
                    revealed && correct
                      ? 'bg-green-300'
                      : picked
                        ? 'bg-rose-300'
                        : 'bg-amber-200';
                  const border =
                    revealed && correct
                      ? 'border-4 border-green-600'
                      : 'border-2 border-transparent';
                  return (
                    <button
                      key={option}
                      className={`rounded-xl p-4 text-left text-xl font-bold ${bg} ${border}`}
                      onClick={() => answer(option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}
          {result && <div className="mt-4 text-2xl font-bold">{result}</div>}
          <div className="mt-4 flex gap-3">
            <button
              className="rounded-xl bg-indigo-600 px-5 py-3 text-xl font-bold text-white"
              onClick={next}
            >
              Ďalej
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default App;
