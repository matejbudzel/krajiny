import { useEffect, useMemo, useState } from 'react';
import { countries, type Country } from './data/countries';
import { FlagView } from './components/FlagView';
import { MapView } from './components/MapView';
import { generateQuestion, type Question } from './utils/questions';
import { loadScore, saveScore, type Score } from './utils/storage';

const App = () => {
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [selected, setSelected] = useState<Country | null>(null);
  const [question, setQuestion] = useState<Question>(() => generateQuestion());
  const [result, setResult] = useState<string>('');
  const [score, setScore] = useState<Score>(() => loadScore());

  useEffect(() => saveScore(score), [score]);

  const countryById = useMemo(() => new Map(countries.map((c) => [c.id, c])), []);

  const answer = (value: string) => {
    const ok = value === question.answer;
    setResult(ok ? 'Správne!' : `Skoro. Správna odpoveď je ${question.feedbackAnswer}.`);
    setScore((s) => ({ correct: s.correct + (ok ? 1 : 0), wrong: s.wrong + (ok ? 0 : 1), mistakes: ok ? s.mistakes : [...s.mistakes, question.feedbackAnswer] }));
  };

  const next = () => {
    setQuestion(generateQuestion());
    setResult('');
  };

  return (
    <main className="mx-auto max-w-4xl p-4 text-slate-900">
      <h1 className="mb-4 text-center text-4xl font-extrabold text-blue-700">🌍 Krajiny hravo</h1>
      <div className="mb-4 flex gap-3">
        <button className="rounded-xl bg-emerald-500 px-6 py-4 text-2xl font-bold text-white" onClick={() => setMode('learn')}>Učím sa</button>
        <button className="rounded-xl bg-fuchsia-500 px-6 py-4 text-2xl font-bold text-white" onClick={() => setMode('quiz')}>Skúšanie</button>
      </div>

      <p className="mb-3 text-xl">✅ {score.correct} | ❌ {score.wrong}</p>

      {mode === 'learn' && (
        <section>
          <MapView onSelect={setSelected} />
          {selected && (
            <div className="mt-4 rounded-2xl bg-white p-4 shadow">
              <FlagView country={selected} />
              <p className="text-2xl font-bold">{selected.name}</p>
              <p className="text-xl">Hlavné mesto: {selected.capital}</p>
            </div>
          )}
          <button className="mt-4 rounded-xl bg-blue-600 px-6 py-3 text-xl font-bold text-white" onClick={() => setMode('quiz')}>Skúšaj ma</button>
        </section>
      )}

      {mode === 'quiz' && (
        <section className="rounded-2xl bg-white p-4 shadow">
          <h2 className="text-2xl font-bold">{question.prompt}</h2>
          {question.type === 'flag-country' && question.country && <div className="my-4"><FlagView country={question.country} /></div>}
          {(question.type === 'country-flag' && question.options) && (
            <div className="my-4 grid grid-cols-3 gap-3">{question.options.map((id) => {
              const c = countryById.get(id)!;
              return <button key={id} className="rounded-xl border-2 p-4" onClick={() => answer(id)}><FlagView country={c} /></button>;
            })}</div>
          )}
          {question.type === 'map-country' && question.country && <MapView onSelect={() => {}} highlightedId={question.country.id} clickMode />}
          {question.type === 'country-map-click' && <MapView onSelect={(c) => !result && answer(c.id)} clickMode />}
          {question.options && question.type !== 'country-flag' && question.type !== 'country-map-click' && (
            <div className="mt-4 grid gap-3">{question.options.map((option) => <button key={option} className="rounded-xl bg-amber-200 p-4 text-left text-xl font-bold" onClick={() => answer(option)}>{option}</button>)}</div>
          )}
          {result && <div className="mt-4 text-2xl font-bold">{result}</div>}
          <div className="mt-4 flex gap-3">
            <button className="rounded-xl bg-indigo-600 px-5 py-3 text-xl font-bold text-white" onClick={next}>Ďalej</button>
            <button className="rounded-xl bg-rose-500 px-5 py-3 text-xl font-bold text-white" onClick={() => {
              const wrongNames = Array.from(new Set(score.mistakes));
              if (wrongNames.length === 0) return;
              const c = countries.find((x) => x.name === wrongNames[Math.floor(Math.random() * wrongNames.length)]);
              if (c) setQuestion({ prompt: `Hlavné mesto krajiny ${c.name} je:`, options: [c.capital, 'Neviem', 'Skúsim'], answer: c.capital, type: 'country-capital', country: c, feedbackAnswer: c.capital });
            }}>Precvičiť chyby</button>
          </div>
        </section>
      )}
    </main>
  );
};

export default App;
