export type Country = {
  id: string;
  name: string;
  capital: string;
  flag: string;
  lat: number;
  lon: number;
  afghanistanCustomFlag?: boolean;
};

export const countries: Country[] = [
  { id: 'am', name: 'Arménsko', capital: 'Jerevan', flag: '🇦🇲', lat: 40.2, lon: 44.5 },
  { id: 'az', name: 'Azerbajdžan', capital: 'Baku', flag: '🇦🇿', lat: 40.4, lon: 49.9 },
  { id: 'ge', name: 'Gruzínsko', capital: 'Tbilisi', flag: '🇬🇪', lat: 41.7, lon: 44.8 },
  { id: 'tr', name: 'Turecko', capital: 'Ankara', flag: '🇹🇷', lat: 39.9, lon: 32.9 },
  { id: 'iq', name: 'Irak', capital: 'Bagdad', flag: '🇮🇶', lat: 33.3, lon: 44.4 },
  { id: 'il', name: 'Izrael', capital: 'Jeruzalem (Tel Aviv)', flag: '🇮🇱', lat: 31.8, lon: 35.2 },
  { id: 'jo', name: 'Jordánsko', capital: 'Ammán', flag: '🇯🇴', lat: 31.9, lon: 35.9 },
  { id: 'lb', name: 'Libanon', capital: 'Bejrút', flag: '🇱🇧', lat: 33.9, lon: 35.5 },
  { id: 'sy', name: 'Sýria', capital: 'Damask', flag: '🇸🇾', lat: 33.5, lon: 36.3 },
  { id: 'om', name: 'Omán', capital: 'Maskat', flag: '🇴🇲', lat: 23.6, lon: 58.4 },
  { id: 'ae', name: 'SAE', capital: 'Abú Zabí', flag: '🇦🇪', lat: 24.5, lon: 54.4 },
  { id: 'sa', name: 'Saudská Arábia', capital: 'Rijád', flag: '🇸🇦', lat: 24.7, lon: 46.7 },
  { id: 'af', name: 'Afganistan', capital: 'Kábul', flag: '', lat: 34.5, lon: 69.2, afghanistanCustomFlag: true },
  { id: 'bd', name: 'Bangladéš', capital: 'Dháka', flag: '🇧🇩', lat: 23.8, lon: 90.4 },
  { id: 'bt', name: 'Bhután', capital: 'Thimphu', flag: '🇧🇹', lat: 27.5, lon: 89.6 },
  { id: 'in', name: 'India', capital: 'Naí Dillí', flag: '🇮🇳', lat: 28.6, lon: 77.2 },
  { id: 'ir', name: 'Irán', capital: 'Teherán', flag: '🇮🇷', lat: 35.7, lon: 51.4 },
  { id: 'np', name: 'Nepál', capital: 'Káthmandu', flag: '🇳🇵', lat: 27.7, lon: 85.3 },
  { id: 'pk', name: 'Pakistan', capital: 'Islamabad', flag: '🇵🇰', lat: 33.7, lon: 73.1 }
];
