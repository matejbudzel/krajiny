import { useState } from 'react';
import { countries, type Country } from '../data/countries';
import { mapCenters, type MapCountryId } from '../data/mapCenters';

const WORLD_MAP_URL = `${import.meta.env.BASE_URL}blank-map-world-v2.svg`;
const MAP_WIDTH = 100;
const MAP_HEIGHT = 60;
const WORLD_MAP = {
  x: 0,
  y: 0,
  width: 913.906,
  height: 402.89,
};
const WORLD_MAP_CROP = {
  x: 490,
  y: 78,
  width: 280,
  height: 168,
};
const ZOOM_LEVELS = [1, 1.45, 1.9] as const;
const MAX_ZOOM_INDEX = ZOOM_LEVELS.length - 1;

type Props = {
  onSelect: (country: Country) => void;
  visibleCountries?: Country[];
  highlightedId?: string;
  correctId?: string;
  selectedId?: string;
  showLabels?: boolean;
};

const toPoint = (country: Country) => {
  const svgPoint = mapCenters[country.id as MapCountryId];
  const x =
    ((svgPoint.x - WORLD_MAP_CROP.x) / WORLD_MAP_CROP.width) * MAP_WIDTH;
  const y =
    ((svgPoint.y - WORLD_MAP_CROP.y) / WORLD_MAP_CROP.height) * MAP_HEIGHT;
  return { x, y };
};

export const MapView = ({
  onSelect,
  visibleCountries = countries,
  highlightedId,
  correctId,
  selectedId,
  showLabels = false,
}: Props) => {
  const [zoomIndex, setZoomIndex] = useState(0);
  const zoom = ZOOM_LEVELS[zoomIndex];
  const canZoomOut = zoomIndex > 0;
  const canZoomIn = zoomIndex < MAX_ZOOM_INDEX;
  const dotRadius = 1.9 / zoom;
  const highlightedDotRadius = 2.4 / zoom;
  const dotStrokeWidth = 0.45 / zoom;

  return (
    <div className="rounded-2xl bg-sky-100 p-2">
      <div className="mb-2 flex justify-end gap-1">
        <button
          type="button"
          className="h-10 w-10 rounded-lg border border-blue-200 bg-white text-xl font-bold text-blue-900 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={() => setZoomIndex((current) => Math.max(0, current - 1))}
          disabled={!canZoomOut}
          aria-label="Oddialiť mapu"
        >
          −
        </button>
        <button
          type="button"
          className="h-10 w-10 rounded-lg border border-blue-200 bg-white text-xl font-bold text-blue-900 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={() =>
            setZoomIndex((current) => Math.min(MAX_ZOOM_INDEX, current + 1))
          }
          disabled={!canZoomIn}
          aria-label="Priblížiť mapu"
        >
          +
        </button>
      </div>
      <div className="max-h-[70vh] overflow-auto rounded-xl bg-sky-100">
        <svg
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          className="block max-w-none rounded-xl bg-sky-100"
          style={{ width: `${zoom * 100}%` }}
        >
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
          {visibleCountries.map((c) => {
            const point = toPoint(c);
            const highlighted = highlightedId === c.id;
            const isCorrect = correctId === c.id;
            const isSelected = selectedId === c.id;
            const shouldRevealCorrect = Boolean(selectedId && isCorrect);
            const fill = shouldRevealCorrect
              ? '#22c55e'
              : isSelected
                ? '#f87171'
                : highlighted
                  ? '#f97316'
                  : '#1d4ed8';
            return (
              <g key={c.id}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={
                    highlighted || shouldRevealCorrect
                      ? highlightedDotRadius
                      : dotRadius
                  }
                  className="cursor-pointer"
                  fill={fill}
                  stroke="#ffffff"
                  strokeWidth={dotStrokeWidth}
                  onClick={() => onSelect(c)}
                />
                {showLabels && (
                  <text
                    x={point.x + 2.5}
                    y={point.y - 2}
                    fontSize="3"
                    fill="#0f172a"
                  >
                    {c.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
