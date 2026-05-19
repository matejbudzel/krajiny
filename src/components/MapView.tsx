import { countries, type Country } from '../data/countries';

type Props = {
  onSelect: (country: Country) => void;
  highlightedId?: string;
  clickMode?: boolean;
};

const toPoint = (lat: number, lon: number) => {
  const x = ((lon - 30) / (95 - 30)) * 100;
  const y = 100 - ((lat - 15) / (45 - 15)) * 100;
  return { x, y };
};

export const MapView = ({ onSelect, highlightedId, clickMode }: Props) => (
  <div className="rounded-2xl bg-blue-100 p-2">
    <svg viewBox="0 0 100 100" className="h-72 w-full rounded-xl bg-gradient-to-b from-cyan-200 to-blue-300">
      <rect x="10" y="20" width="80" height="60" rx="8" fill="#d9f99d" opacity="0.5" />
      {countries.map((c) => {
        const point = toPoint(c.lat, c.lon);
        const highlighted = highlightedId === c.id;
        return (
          <g key={c.id}>
            <circle
              cx={point.x}
              cy={point.y}
              r={highlighted ? 3.2 : 2.5}
              className="cursor-pointer"
              fill={highlighted ? '#f97316' : '#1d4ed8'}
              onClick={() => onSelect(c)}
            />
            {!clickMode && <text x={point.x + 2.5} y={point.y - 2} fontSize="3" fill="#0f172a">{c.name}</text>}
          </g>
        );
      })}
    </svg>
  </div>
);
