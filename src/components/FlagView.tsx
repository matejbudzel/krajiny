import { type Country } from '../data/countries';

export const FlagView = ({ country, small }: { country: Country; small?: boolean }) => {
  if (country.afghanistanCustomFlag) {
    return (
      <div className={`${small ? 'h-10 w-14' : 'h-24 w-36'} flex items-center justify-center rounded bg-zinc-900`}>
        <div className="rounded bg-white px-2 py-1 text-xs font-bold text-black">افغانستان</div>
      </div>
    );
  }
  return <span className={small ? 'text-3xl' : 'text-7xl'}>{country.flag}</span>;
};
