import { type Country } from '../data/countries';

export const FlagView = ({ country, small }: { country: Country; small?: boolean }) => {
  if (country.afghanistanCustomFlag) {
    return (
      <img
        src="/flag-afghanistan.svg"
        alt={`Vlajka: ${country.name}`}
        className={`${small ? 'h-10 w-14' : 'h-24 w-36'} rounded object-cover`}
      />
    );
  }
  return <span className={small ? 'text-3xl' : 'text-7xl'}>{country.flag}</span>;
};
