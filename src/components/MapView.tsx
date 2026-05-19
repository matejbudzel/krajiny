import { countries, type Country } from '../data/countries';

type Props = {
  onSelect: (country: Country) => void;
  highlightedId?: string;
  correctId?: string;
  selectedId?: string;
  showLabels?: boolean;
};

const toPoint = (lat: number, lon: number) => {
  const x = ((lon - 30) / (95 - 30)) * 100;
  const y = 100 - ((lat - 15) / (45 - 15)) * 100;
  return { x, y };
};

const regionBorder = [
  [15, 30], [16, 36], [21, 42], [23, 53], [25, 59], [27, 68], [31, 76], [36, 82], [40, 92], [44, 88], [43, 74], [40, 62], [38, 54], [36, 46], [35, 38], [33, 32], [28, 31], [23, 33], [19, 35],
];

const toPolygon = (c: Country) => {
  const w = 2.2;
  const h = 1.8;
  const corners = [
    [c.lat - h, c.lon - w],
    [c.lat - h, c.lon + w],
    [c.lat + h, c.lon + w],
    [c.lat + h, c.lon - w],
  ] as const;
  return corners.map(([lat, lon]) => {
    const p = toPoint(lat, lon);
    return `${p.x},${p.y}`;
  }).join(' ');
};

export const MapView = ({ onSelect, highlightedId, correctId, selectedId, showLabels = false }: Props) => (
  <div className="rounded-2xl bg-blue-100 p-2">
    <svg viewBox="0 0 100 100" className="h-72 w-full rounded-xl bg-gradient-to-b from-cyan-200 to-blue-300">
      <polygon
        points={regionBorder.map(([lat, lon]) => {
          const p = toPoint(lat, lon);
          return `${p.x},${p.y}`;
        }).join(' ')}
        fill="#d9f99d"
        stroke="#64748b"
        strokeWidth="0.8"
        opacity="0.9"
      />
      {countries.map((c) => {
        const point = toPoint(c.lat, c.lon);
        const highlighted = highlightedId === c.id;
        const isCorrect = correctId === c.id;
        const isSelected = selectedId === c.id;
        const fill = isSelected ? (isCorrect ? '#22c55e' : '#f87171') : (highlighted ? '#f97316' : '#1d4ed8');
        return (
          <g key={c.id}>
            <polygon
              points={toPolygon(c)}
              fill={isSelected ? (isCorrect ? '#86efac' : '#fca5a5') : '#bbf7d0'}
              stroke={isCorrect ? '#16a34a' : '#65a30d'}
              strokeWidth={isCorrect ? 1.2 : 0.4}
              opacity="0.7"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r={highlighted ? 3.2 : 2.5}
              className="cursor-pointer"
              fill={fill}
              onClick={() => onSelect(c)}
            />
            {showLabels && <text x={point.x + 2.5} y={point.y - 2} fontSize="3" fill="#0f172a">{c.name}</text>}
          </g>
        );
      })}
    </svg>
  </div>
);
