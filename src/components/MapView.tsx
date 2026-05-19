import { useEffect, useState } from 'react';
import { countries, type Country } from '../data/countries';
import { mapCenters, type MapCountryId } from '../data/mapCenters';

const WORLD_MAP_URL = `${import.meta.env.BASE_URL}blank-map-world-v2.svg`;
const MAP_WIDTH = 100;
const MAP_HEIGHT = 60;
const MAP_SHAPE_OFFSET = {
  x: 23.041,
  y: -19.146,
};
const WORLD_MAP_CROP = {
  x: 490,
  y: 78,
  width: 280,
  height: 168,
};
const ZOOM_LEVELS = [1, 1.45, 1.9] as const;
const MAX_ZOOM_INDEX = ZOOM_LEVELS.length - 1;
type MapShapes = Partial<Record<MapCountryId, string>>;
type LoadedMap = {
  appShapes: MapShapes;
  backgroundShapes: string;
};

let mapShapesPromise: Promise<LoadedMap> | undefined;

type Props = {
  onSelect: (country: Country) => void;
  visibleCountries?: Country[];
  highlightedId?: string;
  correctId?: string;
  selectedId?: string;
  activeId?: string;
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

const countryFill = (
  country: Country,
  hoveredId: string | undefined,
  highlightedId: string | undefined,
  correctId: string | undefined,
  selectedId: string | undefined,
  activeId: string | undefined,
) => {
  const isCorrect = correctId === country.id;
  const isSelected = selectedId === country.id;

  if (selectedId && isCorrect) return '#22c55e';
  if (isSelected && !isCorrect) return '#f87171';
  if (activeId === country.id) return '#a855f7';
  if (highlightedId === country.id) return '#f97316';
  if (hoveredId === country.id) return '#38bdf8';
  return undefined;
};

const sanitizeMapElement = (element: Element) => {
  const clone = element.cloneNode(true) as Element;
  const sanitize = (node: Element) => {
    for (const attribute of [
      'id',
      'class',
      'style',
      'fill',
      'stroke',
      'stroke-width',
      'stroke-miterlimit',
      'stroke-dasharray',
    ]) {
      node.removeAttribute(attribute);
    }
    for (const child of Array.from(node.children)) {
      sanitize(child);
    }
  };

  sanitize(clone);
  return clone.outerHTML;
};

const loadMapShapes = () => {
  mapShapesPromise ??= fetch(WORLD_MAP_URL)
    .then((response) => {
      if (!response.ok) throw new Error('Could not load map SVG.');
      return response.text();
    })
    .then((svg) => {
      const document = new DOMParser().parseFromString(svg, 'image/svg+xml');
      const appShapes: MapShapes = {};
      const appCountryIds = new Set(countries.map((country) => country.id));

      for (const country of countries) {
        const element = document.getElementById(country.id);
        if (element) {
          appShapes[country.id as MapCountryId] = sanitizeMapElement(element);
        }
      }

      const backgroundShapes = Array.from(
        document.querySelectorAll<SVGElement>('path[id], g[id]'),
      )
        .filter((element) => {
          const id = element.id;
          return /^[a-z]{2}$/.test(id) && !appCountryIds.has(id);
        })
        .map(sanitizeMapElement)
        .join('');

      return { appShapes, backgroundShapes };
    });

  return mapShapesPromise;
};

export const MapView = ({
  onSelect,
  visibleCountries = countries,
  highlightedId,
  correctId,
  selectedId,
  activeId,
  showLabels = false,
}: Props) => {
  const [zoomIndex, setZoomIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string>();
  const [loadedMap, setLoadedMap] = useState<LoadedMap>({
    appShapes: {},
    backgroundShapes: '',
  });
  const zoom = ZOOM_LEVELS[zoomIndex];
  const canZoomOut = zoomIndex > 0;
  const canZoomIn = zoomIndex < MAX_ZOOM_INDEX;
  const dotRadius = 1.9 / zoom;
  const highlightedDotRadius = 2.4 / zoom;
  const dotStrokeWidth = 0.45 / zoom;

  useEffect(() => {
    let cancelled = false;
    loadMapShapes().then((map) => {
      if (!cancelled) setLoadedMap(map);
    });
    return () => {
      cancelled = true;
    };
  }, []);

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
            <g
              className="pointer-events-none"
              transform={`translate(${MAP_SHAPE_OFFSET.x} ${MAP_SHAPE_OFFSET.y})`}
            >
              {loadedMap.backgroundShapes && (
                <g
                  className="map-background-shape"
                  dangerouslySetInnerHTML={{
                    __html: loadedMap.backgroundShapes,
                  }}
                />
              )}
              {visibleCountries.map((country) => {
                const shape = loadedMap.appShapes[country.id as MapCountryId];
                if (!shape) return null;

                const fill = countryFill(
                  country,
                  hoveredId,
                  highlightedId,
                  correctId,
                  selectedId,
                  activeId,
                );

                return (
                  <g
                    key={country.id}
                    className="map-country-shape"
                    style={{ fill: fill ?? '#bfdbfe' }}
                    dangerouslySetInnerHTML={{
                      __html: shape,
                    }}
                  />
                );
              })}
            </g>
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
                  onMouseEnter={() => setHoveredId(c.id)}
                  onMouseLeave={() => setHoveredId(undefined)}
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
