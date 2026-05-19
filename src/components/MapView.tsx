import { countries, type Country } from '../data/countries';

const WORLD_MAP_URL = `${import.meta.env.BASE_URL}blank-map-world-v2.svg`;
const MAP_WIDTH = 100;
const MAP_HEIGHT = 60;
const WORLD_MAP = {
  x: -23.041,
  y: 19.146,
  width: 913.906,
  height: 402.89,
};
const WORLD_MAP_CROP = {
  x: 490,
  y: 95,
  width: 185,
  height: 105,
};

const CALIBRATED_COUNTRY_CENTERS: Record<string, { x: number; y: number }> = {
  bd: { x: 656.55, y: 158.89 },
  bt: { x: 655.05, y: 147.7 },
  ge: { x: 532.95, y: 104.6 },
  il: { x: 517.7, y: 129.1 },
  pk: { x: 599.69, y: 139.25 },
  tr: { x: 515.6, y: 114.35 },
};

const projectedSvgPoint = (lat: number, lon: number) => ({
  x: lon * 2.48545 + 427.97773,
  y: lat * -2.85511 + 226.72426,
});

type Props = {
  onSelect: (country: Country) => void;
  highlightedId?: string;
  correctId?: string;
  selectedId?: string;
  showLabels?: boolean;
};

const toPoint = (country: Country) => {
  const svgPoint = CALIBRATED_COUNTRY_CENTERS[country.id] ?? projectedSvgPoint(country.lat, country.lon);
  const x = ((svgPoint.x - WORLD_MAP_CROP.x) / WORLD_MAP_CROP.width) * MAP_WIDTH;
  const y = ((svgPoint.y - WORLD_MAP_CROP.y) / WORLD_MAP_CROP.height) * MAP_HEIGHT;
  return { x, y };
};

export const MapView = ({ onSelect, highlightedId, correctId, selectedId, showLabels = false }: Props) => (
  <div className="rounded-2xl bg-sky-100 p-2">
    <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="h-72 w-full rounded-xl bg-sky-100">
      <svg
        x="0"
        y="0"
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        viewBox={`${WORLD_MAP_CROP.x} ${WORLD_MAP_CROP.y} ${WORLD_MAP_CROP.width} ${WORLD_MAP_CROP.height}`}
        preserveAspectRatio="none"
      >
        <image
          href={WORLD_MAP_URL}
          x={WORLD_MAP.x}
          y={WORLD_MAP.y}
          width={WORLD_MAP.width}
          height={WORLD_MAP.height}
          className="pointer-events-none"
        />
      </svg>
      {countries.map((c) => {
        const point = toPoint(c);
        const highlighted = highlightedId === c.id;
        const isCorrect = correctId === c.id;
        const isSelected = selectedId === c.id;
        const fill = isSelected ? (isCorrect ? '#22c55e' : '#f87171') : (highlighted ? '#f97316' : '#1d4ed8');
        return (
          <g key={c.id}>
            <circle
              cx={point.x}
              cy={point.y}
              r={highlighted ? 2.4 : 1.9}
              className="cursor-pointer"
              fill={fill}
              stroke="#ffffff"
              strokeWidth="0.45"
              onClick={() => onSelect(c)}
            />
            {showLabels && <text x={point.x + 2.5} y={point.y - 2} fontSize="3" fill="#0f172a">{c.name}</text>}
          </g>
        );
      })}
    </svg>
  </div>
);
