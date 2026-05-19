import { type Country } from '../data/countries';

const AFGHANISTAN_FLAG_URL = `${import.meta.env.BASE_URL}flag-afghanistan.svg`;

export const FlagView = ({ country, small }: { country: Country; small?: boolean }) => {
  if (country.afghanistanCustomFlag) {
    return (
      <img
        src={AFGHANISTAN_FLAG_URL}
        alt={`Vlajka: ${country.name}`}
        className={`${small ? 'h-10 w-14' : 'h-24 w-36'} rounded object-cover`}
      />
    );
  }
  return <span className={small ? 'text-3xl' : 'text-7xl'}>{country.flag}</span>;
};
