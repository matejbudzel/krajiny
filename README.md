# Učenie hravo

Interaktívna detská vzdelávacia aplikácia v slovenčine (React + Vite + TypeScript + Tailwind CSS).

## Spustenie lokálne

```bash
npm install
npm run dev
```

## Testy a kontrola

```bash
npm run test
npm run lint
npm run build
```

## GitHub Pages deploy

1. Pushni repozitár na GitHub.
2. V **Settings → Pages** zvoľ **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` sa postará o build aj deploy po pushi na `main`.

Aplikácia je pripravená na deploy pod subpath repozitára (`https://<user>.github.io/<repo>/`) cez automatický `base` vo `vite.config.ts`.

## Funkcie

- Predmety: krajiny, dejiny a náboženstvo.
- Režim učenia a skúšania.
- Klikateľná mapa pri krajinách.
- Rôzne typy kvízových otázok podľa predmetu.
- Okamžitá spätná väzba.
- Evidencia správnych/nesprávnych odpovedí.
- Ukladanie progresu do `localStorage`.
- Tlačidlo **Precvičiť chyby**.
- Špeciálna vlajka Afganistanu (custom render, nie emoji).
