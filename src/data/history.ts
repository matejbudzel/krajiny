export type HistoryScope = 'grade3-h2';

export const historyScopeOptions: { id: HistoryScope; label: string }[] = [
  { id: 'grade3-h2', label: '3. ročník II. polrok' },
];

export type HistoryPrompt = {
  prompt: string;
  answer: string;
  options: string[];
};

export type HistoryFact = {
  id: string;
  scope: HistoryScope;
  sentence: string;
  prompts: HistoryPrompt[];
};

export const historyFacts: HistoryFact[] = [
  {
    id: 'east-west-schism',
    scope: 'grade3-h2',
    sentence: 'K rozkolu medzi Východnou a Západnou cirkvou došlo v roku 1054.',
    prompts: [
      {
        prompt:
          'V ktorom roku došlo k rozkolu medzi Východnou a Západnou cirkvou?',
        answer: '1054',
        options: ['1054', '1095', '1291', '1492'],
      },
    ],
  },
  {
    id: 'crusades',
    scope: 'grade3-h2',
    sentence:
      'Križiacke výpravy do Svätej zeme začali v roku 1095 a skončili v roku 1291.',
    prompts: [
      {
        prompt: 'V ktorom roku začali križiacke výpravy do Svätej zeme?',
        answer: '1095',
        options: ['1054', '1095', '1291', '1337'],
      },
      {
        prompt: 'V ktorom roku skončili križiacke výpravy do Svätej zeme?',
        answer: '1291',
        options: ['1095', '1291', '1453', '1492'],
      },
    ],
  },
  {
    id: 'bernard',
    scope: 'grade3-h2',
    sentence:
      'Svätý Bernard z Clairvaux bol opát, mystik a výborný kazateľ z rádu cisterciánov.',
    prompts: [
      {
        prompt: 'Kto bol opát, mystik a výborný kazateľ z rádu cisterciánov?',
        answer: 'Svätý Bernard z Clairvaux',
        options: [
          'Svätý Bernard z Clairvaux',
          'Svätý Tomáš Akvinský',
          'Marco Polo',
          'Matúš Čák',
        ],
      },
      {
        prompt: 'Z ktorého rádu bol Svätý Bernard z Clairvaux?',
        answer: 'z rádu cisterciánov',
        options: [
          'z rádu cisterciánov',
          'z rádu františkánov',
          'z dominikánskeho rádu',
          'z benediktínskeho rádu',
        ],
      },
    ],
  },
  {
    id: 'hildegard',
    scope: 'grade3-h2',
    sentence:
      'Svätá Hildegarda z Bingenu bola nemecká mystička, liečiteľka, mysliteľka a skladateľka.',
    prompts: [
      {
        prompt:
          'Kto bola nemecká mystička, liečiteľka, mysliteľka a skladateľka?',
        answer: 'Svätá Hildegarda z Bingenu',
        options: [
          'Svätá Hildegarda z Bingenu',
          'Svätý Bernard z Clairvaux',
          'Izabela Kastílska',
          'Svätý František',
        ],
      },
    ],
  },
  {
    id: 'francis',
    scope: 'grade3-h2',
    sentence: 'Svätý František založil v 13. storočí rehoľu františkánov.',
    prompts: [
      {
        prompt: 'Kto založil v 13. storočí rehoľu františkánov?',
        answer: 'Svätý František',
        options: [
          'Svätý František',
          'Svätý Tomáš Akvinský',
          'Svätý Bernard z Clairvaux',
          'Karol IV.',
        ],
      },
      {
        prompt: 'Čo založil Svätý František?',
        answer: 'rehoľu františkánov',
        options: [
          'rehoľu františkánov',
          'Karlovu univerzitu',
          'rád cisterciánov',
          'Sumu teologickú',
        ],
      },
    ],
  },
  {
    id: 'universities',
    scope: 'grade3-h2',
    sentence:
      'Stredoveké univerzity vznikajúce od 11. storočia vzdelávali v 7 slobodných umeniach, práve, medicíne a teológii.',
    prompts: [
      {
        prompt: 'Od ktorého storočia vznikali stredoveké univerzity?',
        answer: 'od 11. storočia',
        options: [
          'od 11. storočia',
          'od 13. storočia',
          'od 14. storočia',
          'od 15. storočia',
        ],
      },
      {
        prompt: 'V čom vzdelávali stredoveké univerzity?',
        answer: 'v 7 slobodných umeniach, práve, medicíne a teológii',
        options: [
          'v 7 slobodných umeniach, práve, medicíne a teológii',
          'iba v remeslách a obchode',
          'iba vo vojenstve',
          'v námorníctve a zemepise',
        ],
      },
    ],
  },
  {
    id: 'aquinas',
    scope: 'grade3-h2',
    sentence:
      'Svätý Tomáš Akvinský žil v 13. storočí a napísal Sumu teologickú.',
    prompts: [
      {
        prompt: 'Kto napísal Sumu teologickú?',
        answer: 'Svätý Tomáš Akvinský',
        options: [
          'Svätý Tomáš Akvinský',
          'Svätý František',
          'Svätý Bernard z Clairvaux',
          'Marco Polo',
        ],
      },
      {
        prompt: 'V ktorom storočí žil Svätý Tomáš Akvinský?',
        answer: 'v 13. storočí',
        options: [
          'v 11. storočí',
          'v 13. storočí',
          'v 14. storočí',
          'v 15. storočí',
        ],
      },
    ],
  },
  {
    id: 'marco-polo',
    scope: 'grade3-h2',
    sentence:
      'Benátčan Marco Polo putoval Áziou až do Číny a napísal o tom knihu.',
    prompts: [
      {
        prompt: 'Ktorý Benátčan putoval Áziou až do Číny?',
        answer: 'Marco Polo',
        options: ['Marco Polo', 'Karol IV.', 'Ferdinand', 'Matúš Čák'],
      },
      {
        prompt: 'Kam putoval Marco Polo?',
        answer: 'Áziou až do Číny',
        options: [
          'Áziou až do Číny',
          'do Svätej zeme',
          'do Anglicka',
          'do Trenčína',
        ],
      },
    ],
  },
  {
    id: 'matus-cak',
    scope: 'grade3-h2',
    sentence:
      'Matúš Čák bol trenčiansky šľachtic, prezývaný aj pán Váhu a Tatier.',
    prompts: [
      {
        prompt: 'Kto bol trenčiansky šľachtic, prezývaný aj pán Váhu a Tatier?',
        answer: 'Matúš Čák',
        options: ['Matúš Čák', 'Karol IV.', 'Marco Polo', 'Ferdinand'],
      },
      {
        prompt: 'Ako prezývali Matúša Čáka?',
        answer: 'pán Váhu a Tatier',
        options: [
          'pán Váhu a Tatier',
          'otec vlasti',
          'kráľ zjednotiteľ',
          'kazateľ cisterciánov',
        ],
      },
    ],
  },
  {
    id: 'charles-iv',
    scope: 'grade3-h2',
    sentence:
      'Karol IV. vládol v Českom kráľovstve a dodnes nesie jeho meno Karlova univerzita v Prahe.',
    prompts: [
      {
        prompt:
          'Kto vládol v Českom kráľovstve a jeho meno nesie Karlova univerzita?',
        answer: 'Karol IV.',
        options: ['Karol IV.', 'Matúš Čák', 'Ferdinand', 'Marco Polo'],
      },
      {
        prompt: 'Ktorá univerzita nesie meno Karola IV.?',
        answer: 'Karlova univerzita v Prahe',
        options: [
          'Karlova univerzita v Prahe',
          'Parížska univerzita',
          'Boloňská univerzita',
          'Krakovská univerzita',
        ],
      },
    ],
  },
  {
    id: 'china-inventions',
    scope: 'grade3-h2',
    sentence: 'Z Číny máme papier, pušný prach a kompas.',
    prompts: [
      {
        prompt: 'Čo máme z Číny?',
        answer: 'papier, pušný prach a kompas',
        options: [
          'papier, pušný prach a kompas',
          'vodný mlyn, okuliare a hodiny',
          'Sumu teologickú',
          '7 slobodných umení',
        ],
      },
    ],
  },
  {
    id: 'medieval-inventions',
    scope: 'grade3-h2',
    sentence:
      'Počas stredoveku Európania vynašli vodný a veterný mlyn, mechanické hodiny a okuliare.',
    prompts: [
      {
        prompt: 'Čo vynašli Európania počas stredoveku?',
        answer: 'vodný a veterný mlyn, mechanické hodiny a okuliare',
        options: [
          'vodný a veterný mlyn, mechanické hodiny a okuliare',
          'papier, pušný prach a kompas',
          'križiacke výpravy',
          'Sumu teologickú',
        ],
      },
    ],
  },
  {
    id: 'hundred-years-war',
    scope: 'grade3-h2',
    sentence:
      'Storočná vojna Francúzska s Anglickom sa začala v roku 1337 a skončila v roku 1453.',
    prompts: [
      {
        prompt:
          'V ktorom roku sa začala Storočná vojna Francúzska s Anglickom?',
        answer: '1337',
        options: ['1054', '1291', '1337', '1453'],
      },
      {
        prompt:
          'V ktorom roku sa skončila Storočná vojna Francúzska s Anglickom?',
        answer: '1453',
        options: ['1291', '1337', '1453', '1492'],
      },
    ],
  },
  {
    id: 'spain-1492',
    scope: 'grade3-h2',
    sentence:
      'Ferdinand a Izabela svojím sobášom zjednotili Španielsko a zbavili ho v roku 1492 moslimskej okupácie.',
    prompts: [
      {
        prompt: 'Kto svojím sobášom zjednotil Španielsko?',
        answer: 'Ferdinand a Izabela',
        options: [
          'Ferdinand a Izabela',
          'Karol IV. a Matúš Čák',
          'Marco Polo a Hildegarda',
          'František a Bernard',
        ],
      },
      {
        prompt:
          'V ktorom roku zbavili Ferdinand a Izabela Španielsko moslimskej okupácie?',
        answer: '1492',
        options: ['1337', '1453', '1492', '1291'],
      },
    ],
  },
];
