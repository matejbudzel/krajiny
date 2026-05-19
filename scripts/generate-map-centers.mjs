import fs from 'node:fs';

const svg = fs.readFileSync('public/blank-map-world-v2.svg', 'utf8');
const countries = fs.readFileSync('src/data/countries.ts', 'utf8');

const countryIds = [...countries.matchAll(/id: '([^']+)'/g)].map(
  (match) => match[1],
);
const svgViewBox = svg
  .match(/viewBox="([^"]+)"/)?.[1]
  .split(/\s+/)
  .map(Number);

if (!svgViewBox) {
  throw new Error('Could not read SVG viewBox.');
}

const [viewBoxX, viewBoxY] = svgViewBox;

const readAttributes = (tag) => {
  const attributes = {};
  for (const match of tag.matchAll(/([:\w-]+)="([^"]*)"/g)) {
    attributes[match[1]] = match[2];
  }
  return attributes;
};

const multiply = (a, b) => [
  a[0] * b[0] + a[2] * b[1],
  a[1] * b[0] + a[3] * b[1],
  a[0] * b[2] + a[2] * b[3],
  a[1] * b[2] + a[3] * b[3],
  a[0] * b[4] + a[2] * b[5] + a[4],
  a[1] * b[4] + a[3] * b[5] + a[5],
];

const parseTransform = (transform) => {
  let matrix = [1, 0, 0, 1, 0, 0];
  if (!transform) return matrix;

  for (const match of transform.matchAll(
    /(matrix|translate|scale)\(([^)]*)\)/g,
  )) {
    const values = match[2].split(/[ ,]+/).filter(Boolean).map(Number);
    const next =
      match[1] === 'matrix'
        ? values
        : match[1] === 'translate'
          ? [1, 0, 0, 1, values[0] || 0, values[1] || 0]
          : [
              values[0] || 1,
              0,
              0,
              values.length > 1 ? values[1] : values[0] || 1,
              0,
              0,
            ];
    matrix = multiply(matrix, next);
  }

  return matrix;
};

const applyMatrix = (point, matrix) => ({
  x: matrix[0] * point.x + matrix[2] * point.y + matrix[4],
  y: matrix[1] * point.x + matrix[3] * point.y + matrix[5],
});

const cubic = (p0, p1, p2, p3, t) => {
  const mt = 1 - t;
  return (
    mt ** 3 * p0 + 3 * mt ** 2 * t * p1 + 3 * mt * t ** 2 * p2 + t ** 3 * p3
  );
};

const quadratic = (p0, p1, p2, t) => {
  const mt = 1 - t;
  return mt * mt * p0 + 2 * mt * t * p1 + t * t * p2;
};

const cubicExtrema = (p0, p1, p2, p3) => {
  const ts = [0, 1];
  const a = -p0 + 3 * p1 - 3 * p2 + p3;
  const b = 2 * (p0 - 2 * p1 + p2);
  const c = -p0 + p1;

  if (Math.abs(a) < 1e-12) {
    if (Math.abs(b) > 1e-12) {
      const t = -c / b;
      if (t > 0 && t < 1) ts.push(t);
    }
    return ts;
  }

  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return ts;

  const root = Math.sqrt(discriminant);
  for (const t of [(-b + root) / (2 * a), (-b - root) / (2 * a)]) {
    if (t > 0 && t < 1) ts.push(t);
  }
  return ts;
};

const pathPoints = (d) => {
  const tokens =
    d.match(/[a-zA-Z]|[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g) || [];
  const points = [];
  let index = 0;
  let command = '';
  let x = 0;
  let y = 0;
  let startX = 0;
  let startY = 0;
  let lastCubicControl = null;
  let lastQuadraticControl = null;

  const isCommand = (token) => /^[a-zA-Z]$/.test(token);
  const nextNumber = () => Number(tokens[index++]);
  const addPoint = (point) => points.push(point);
  const lineTo = (nextX, nextY) => {
    addPoint({ x: nextX, y: nextY });
    x = nextX;
    y = nextY;
    lastCubicControl = null;
    lastQuadraticControl = null;
  };

  while (index < tokens.length) {
    if (isCommand(tokens[index])) command = tokens[index++];

    const relative = command === command.toLowerCase();
    const normalized = command.toUpperCase();

    if (normalized === 'M') {
      let first = true;
      while (index < tokens.length && !isCommand(tokens[index])) {
        let nextX = nextNumber();
        let nextY = nextNumber();
        if (relative) {
          nextX += x;
          nextY += y;
        }
        lineTo(nextX, nextY);
        if (first) {
          startX = x;
          startY = y;
          first = false;
        }
      }
    } else if (normalized === 'L') {
      while (index < tokens.length && !isCommand(tokens[index])) {
        let nextX = nextNumber();
        let nextY = nextNumber();
        if (relative) {
          nextX += x;
          nextY += y;
        }
        lineTo(nextX, nextY);
      }
    } else if (normalized === 'H') {
      while (index < tokens.length && !isCommand(tokens[index])) {
        let nextX = nextNumber();
        if (relative) nextX += x;
        lineTo(nextX, y);
      }
    } else if (normalized === 'V') {
      while (index < tokens.length && !isCommand(tokens[index])) {
        let nextY = nextNumber();
        if (relative) nextY += y;
        lineTo(x, nextY);
      }
    } else if (normalized === 'C' || normalized === 'S') {
      while (index < tokens.length && !isCommand(tokens[index])) {
        let x1;
        let y1;
        if (normalized === 'S') {
          x1 = lastCubicControl ? 2 * x - lastCubicControl.x : x;
          y1 = lastCubicControl ? 2 * y - lastCubicControl.y : y;
        } else {
          x1 = nextNumber();
          y1 = nextNumber();
        }
        let x2 = nextNumber();
        let y2 = nextNumber();
        let nextX = nextNumber();
        let nextY = nextNumber();
        if (relative) {
          x1 += normalized === 'C' ? x : 0;
          y1 += normalized === 'C' ? y : 0;
          x2 += x;
          y2 += y;
          nextX += x;
          nextY += y;
        }
        const ts = new Set([
          ...cubicExtrema(x, x1, x2, nextX),
          ...cubicExtrema(y, y1, y2, nextY),
        ]);
        for (const t of ts) {
          addPoint({
            x: cubic(x, x1, x2, nextX, t),
            y: cubic(y, y1, y2, nextY, t),
          });
        }
        x = nextX;
        y = nextY;
        lastCubicControl = { x: x2, y: y2 };
        lastQuadraticControl = null;
      }
    } else if (normalized === 'Q' || normalized === 'T') {
      while (index < tokens.length && !isCommand(tokens[index])) {
        let x1;
        let y1;
        if (normalized === 'T') {
          x1 = lastQuadraticControl ? 2 * x - lastQuadraticControl.x : x;
          y1 = lastQuadraticControl ? 2 * y - lastQuadraticControl.y : y;
        } else {
          x1 = nextNumber();
          y1 = nextNumber();
        }
        let nextX = nextNumber();
        let nextY = nextNumber();
        if (relative) {
          x1 += normalized === 'Q' ? x : 0;
          y1 += normalized === 'Q' ? y : 0;
          nextX += x;
          nextY += y;
        }
        const ts = new Set([0, 1]);
        for (const [p0, p1, p2] of [
          [x, x1, nextX],
          [y, y1, nextY],
        ]) {
          const denominator = p0 - 2 * p1 + p2;
          const t = denominator ? (p0 - p1) / denominator : Number.NaN;
          if (t > 0 && t < 1) ts.add(t);
        }
        for (const t of ts) {
          addPoint({
            x: quadratic(x, x1, nextX, t),
            y: quadratic(y, y1, nextY, t),
          });
        }
        x = nextX;
        y = nextY;
        lastQuadraticControl = { x: x1, y: y1 };
        lastCubicControl = null;
      }
    } else if (normalized === 'A') {
      while (index < tokens.length && !isCommand(tokens[index])) {
        const radiusX = nextNumber();
        const radiusY = nextNumber();
        nextNumber();
        nextNumber();
        nextNumber();
        let nextX = nextNumber();
        let nextY = nextNumber();
        if (relative) {
          nextX += x;
          nextY += y;
        }
        addPoint({ x: x - radiusX, y: y - radiusY });
        addPoint({ x: x + radiusX, y: y + radiusY });
        addPoint({ x: nextX - radiusX, y: nextY - radiusY });
        addPoint({ x: nextX + radiusX, y: nextY + radiusY });
        x = nextX;
        y = nextY;
      }
      lastCubicControl = null;
      lastQuadraticControl = null;
    } else if (normalized === 'Z') {
      lineTo(startX, startY);
    } else {
      throw new Error(`Unsupported SVG path command: ${command}`);
    }
  }

  return points;
};

const boxes = {};
const stack = [];

for (const match of svg.matchAll(/<\/?[^>]+>/g)) {
  const tag = match[0];

  if (tag.startsWith('</')) {
    const name = tag.match(/^<\/([\w:]+)/)?.[1];
    if (name === 'g' || name === 'svg') stack.pop();
    continue;
  }

  const name = tag.match(/^<([\w:]+)/)?.[1];
  const attributes = readAttributes(tag);
  const parent = stack.at(-1);
  const country = countryIds.includes(attributes.id)
    ? attributes.id
    : parent?.country;
  const matrix = multiply(
    parent?.matrix || [1, 0, 0, 1, 0, 0],
    parseTransform(attributes.transform),
  );

  if (name === 'path' && country && attributes.d) {
    for (const point of pathPoints(attributes.d).map((pathPoint) =>
      applyMatrix(pathPoint, matrix),
    )) {
      const box = (boxes[country] ??= {
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity,
      });
      box.minX = Math.min(box.minX, point.x);
      box.minY = Math.min(box.minY, point.y);
      box.maxX = Math.max(box.maxX, point.x);
      box.maxY = Math.max(box.maxY, point.y);
    }
  }

  if ((name === 'g' || name === 'svg') && !tag.endsWith('/>')) {
    stack.push({ country, matrix });
  }
}

const centers = {};
for (const id of countryIds) {
  const box = boxes[id];
  if (!box) throw new Error(`Could not find country "${id}" in SVG.`);

  centers[id] = {
    x: Number(((box.minX + box.maxX) / 2 - viewBoxX).toFixed(2)),
    y: Number(((box.minY + box.maxY) / 2 - viewBoxY).toFixed(2)),
  };
}

const body = `export const mapCenters = ${JSON.stringify(centers, null, 2)} as const;

export type MapCountryId = keyof typeof mapCenters;
`;

fs.writeFileSync('src/data/mapCenters.ts', body);
