import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  countries,
  countryScopeOptions,
  type Country,
  type CountryScope,
} from './data/countries';
import { historyFacts } from './data/history';
import { FlagView } from './components/FlagView';
import { MapView } from './components/MapView';
import { type Question, type QuestionMode } from './utils/questions';
import {
  generateHistoryQuestion,
  type HistoryQuestion,
} from './utils/historyQuestions';
import {
  createQuizSchedulerState,
  generateScheduledQuestion,
  recordScheduledAnswer,
} from './utils/quizScheduler';
import { loadScore, saveScore, type Score } from './utils/storage';

const defaultScopes: CountryScope[] = ['grade3-h2'];
const defaultCountries = countries.filter((country) =>
  defaultScopes.includes(country.scope),
);
const defaultScheduler = createQuizSchedulerState();
const AUTO_ADVANCE_MS = 3000;
type Subject = 'countries' | 'history';
type ActiveQuestion = Question | HistoryQuestion;

const isHistoryQuestion = (
  question: ActiveQuestion,
): question is HistoryQuestion =>
  'kind' in question && question.kind === 'history';

const App = () => {
  const [subject, setSubject] = useState<Subject>('countries');
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [questionMode, setQuestionMode] = useState<QuestionMode>('full');
  const [selectedScopes, setSelectedScopes] =
    useState<CountryScope[]>(defaultScopes);
  const [selected, setSelected] = useState<Country | null>(null);
  const [question, setQuestion] = useState<ActiveQuestion>(() =>
    generateScheduledQuestion(defaultScheduler, defaultCountries, 'full'),
  );
  const [quizScheduler, setQuizScheduler] = useState(defaultScheduler);
  const [result, setResult] = useState<string>('');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [autoAdvanceProgress, setAutoAdvanceProgress] = useState(0);
  const [score, setScore] = useState<Score>(() => loadScore());

  useEffect(() => saveScore(score), [score]);

  const filteredCountries = useMemo(
    () => countries.filter((country) => selectedScopes.includes(country.scope)),
    [selectedScopes],
  );
  const filteredHistoryFacts = historyFacts;
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
    const nextScheduler = createQuizSchedulerState();
    setQuizScheduler(nextScheduler);
    setSelected(null);
    setSelectedAnswer(null);
    setAutoAdvanceProgress(0);
    setResult('');
    setQuestion(
      subject === 'countries'
        ? generateScheduledQuestion(
            nextScheduler,
            filteredCountries,
            questionMode,
          )
        : generateHistoryQuestion(filteredHistoryFacts),
    );
  }, [filteredCountries, filteredHistoryFacts, questionMode, subject]);

  const answer = (value: string) => {
    if (selectedAnswer) return;
    const ok = value === question.answer;
    setSelectedAnswer(value);
    setResult(ok ? 'Správne!' : 'Skoro.');
    if (subject === 'countries' && 'country' in question) {
      setQuizScheduler((current) =>
        recordScheduledAnswer(current, question, ok),
      );
    }
    setScore((s) => ({
      correct: s.correct + (ok ? 1 : 0),
      wrong: s.wrong + (ok ? 0 : 1),
      mistakes: ok
        ? s.mistakes
        : [
            ...s.mistakes,
            isHistoryQuestion(question)
              ? question.fact.id
              : (question.country?.id ?? question.answer),
          ],
    }));
  };

  const next = useCallback(() => {
    setQuestion(
      subject === 'countries'
        ? generateScheduledQuestion(
            quizScheduler,
            filteredCountries,
            questionMode,
          )
        : generateHistoryQuestion(filteredHistoryFacts),
    );
    setResult('');
    setSelectedAnswer(null);
    setAutoAdvanceProgress(0);
  }, [
    filteredCountries,
    filteredHistoryFacts,
    questionMode,
    quizScheduler,
    subject,
  ]);

  useEffect(() => {
    if (!selectedAnswer || selectedAnswer !== question.answer) {
      setAutoAdvanceProgress(0);
      return;
    }

    const startedAt = Date.now();
    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      setAutoAdvanceProgress(Math.min(100, (elapsed / AUTO_ADVANCE_MS) * 100));
    }, 50);
    const timeout = window.setTimeout(next, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [next, question.answer, selectedAnswer]);

  const resetProgress = () => {
    const nextScheduler = createQuizSchedulerState();
    setQuizScheduler(nextScheduler);
    setScore({ correct: 0, wrong: 0, mistakes: [] });
    setSelected(null);
    setSelectedAnswer(null);
    setAutoAdvanceProgress(0);
    setResult('');
    setQuestion(
      subject === 'countries'
        ? generateScheduledQuestion(
            nextScheduler,
            filteredCountries,
            questionMode,
          )
        : generateHistoryQuestion(filteredHistoryFacts),
    );
  };

  const hardResetProgress = () => {
    setScore({ correct: 0, wrong: 0, mistakes: [] });
    setSelected(null);
    setSelectedAnswer(null);
    setAutoAdvanceProgress(0);
    setResult('');
  };

  const toggleAllScopes = () => {
    setSelectedScopes(
      allScopesSelected
        ? defaultScopes
        : countryScopeOptions.map((scope) => scope.id),
    );
    hardResetProgress();
  };

  const toggleScope = (scope: CountryScope) => {
    if (selectedScopes.includes(scope) && selectedScopes.length === 1) return;

    setSelectedScopes(
      selectedScopes.includes(scope)
        ? selectedScopes.filter((selectedScope) => selectedScope !== scope)
        : [...selectedScopes, scope],
    );
    hardResetProgress();
  };

  const learnActive = mode === 'learn';
  const quizActive = mode === 'quiz';
  const countriesActive = subject === 'countries';
  const historyActive = subject === 'history';
  const simpleQuestions = questionMode === 'simple';
  const correctAnswerSelected = selectedAnswer === question.answer;
  const autoAdvanceSeconds = Math.max(
    1,
    Math.ceil((AUTO_ADVANCE_MS * (1 - autoAdvanceProgress / 100)) / 1000),
  );

  return (
    <main className="mx-auto max-w-4xl p-4 text-slate-900">
      <h1 className="mb-4 text-center text-4xl font-extrabold text-blue-700">
        🌍 Ucenie hravo
      </h1>
      <div className="mb-4 flex flex-wrap items-stretch gap-2 rounded-xl bg-white p-2 shadow">
        <button
          className={`min-h-11 flex-1 self-stretch whitespace-nowrap rounded-lg border-2 px-3 py-2 text-base font-bold sm:flex-none sm:text-lg ${countriesActive ? 'border-blue-700 bg-blue-500 text-white shadow' : 'border-transparent bg-blue-100 text-blue-900'}`}
          onClick={() => setSubject('countries')}
          aria-pressed={countriesActive}
        >
          Krajiny
        </button>
        <button
          className={`min-h-11 flex-1 self-stretch whitespace-nowrap rounded-lg border-2 px-3 py-2 text-base font-bold sm:flex-none sm:text-lg ${historyActive ? 'border-amber-700 bg-amber-500 text-white shadow' : 'border-transparent bg-amber-100 text-amber-900'}`}
          onClick={() => setSubject('history')}
          aria-pressed={historyActive}
        >
          Dejiny
        </button>
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
        {countriesActive && (
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
        )}
        {countriesActive && (
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
        )}
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

      {mode === 'learn' && countriesActive && (
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

      {mode === 'learn' && historyActive && (
        <section className="grid gap-3">
          {filteredHistoryFacts.map((fact, index) => (
            <article
              key={fact.id}
              className="rounded-xl bg-white p-4 text-xl font-bold leading-relaxed shadow"
            >
              <span className="mr-2 text-slate-400">{index + 1}.</span>
              {fact.sentence}
            </article>
          ))}
        </section>
      )}

      {mode === 'quiz' && (
        <section className="rounded-2xl bg-white p-4 shadow">
          <h2 className="text-2xl font-bold">{question.prompt}</h2>
          {'kind' in question && question.kind === 'history' && (
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
          {!('kind' in question) &&
            question.type === 'flag-country' &&
            question.country && (
              <div className="my-4">
                <FlagView country={question.country} />
              </div>
            )}
          {!('kind' in question) &&
            question.type === 'country-flag' &&
            question.options && (
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
          {!('kind' in question) &&
            question.type === 'map-country' &&
            question.country && (
              <MapView
                onSelect={() => {}}
                visibleCountries={filteredCountries}
                highlightedId={question.country.id}
              />
            )}
          {!('kind' in question) && question.type === 'country-map-click' && (
            <MapView
              onSelect={(c) => answer(c.id)}
              visibleCountries={filteredCountries}
              correctId={question.answer}
              selectedId={selectedAnswer ?? undefined}
            />
          )}
          {question.options &&
            !('kind' in question) &&
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
              className="rounded-xl px-5 py-3 text-xl font-bold text-white transition-colors"
              onClick={next}
              style={{
                background: correctAnswerSelected
                  ? `linear-gradient(90deg, #22c55e ${autoAdvanceProgress}%, #4f46e5 ${autoAdvanceProgress}%)`
                  : '#4f46e5',
              }}
            >
              {correctAnswerSelected
                ? `Ďalej (${autoAdvanceSeconds})`
                : 'Ďalej'}
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default App;
