export type HistoryScope =
  | 'grade2-h1'
  | 'grade2-h2'
  | 'grade3-h1'
  | 'grade3-h2'
  | 'grade4-h1'
  | 'grade4-h2'
  | 'grade5-h1'
  | 'grade5-h2';

export const historyScopeOptions: { id: HistoryScope; label: string }[] = [
  { id: 'grade2-h1', label: '2. ročník I. polrok' },
  { id: 'grade2-h2', label: '2. ročník II. polrok' },
  { id: 'grade3-h1', label: '3. ročník I. polrok' },
  { id: 'grade3-h2', label: '3. ročník II. polrok' },
  { id: 'grade4-h1', label: '4. ročník I. polrok' },
  { id: 'grade4-h2', label: '4. ročník II. polrok' },
  { id: 'grade5-h1', label: '5. ročník I. polrok' },
  { id: 'grade5-h2', label: '5. ročník II. polrok' },
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
    id: 'aeneas-romans',
    scope: 'grade2-h1',
    sentence: 'Podľa legendy je Eneas z Tróje praotcom Rimanov.',
    prompts: [
      {
        prompt: 'Kto je podľa legendy praotcom Rimanov?',
        answer: 'Eneas z Tróje',
        options: ['Eneas z Tróje', 'Romulus', 'Remus', 'Július Cézar'],
      },
    ],
  },
  {
    id: 'rome-founded',
    scope: 'grade2-h1',
    sentence:
      'Romulus a Remus založili Rím ako kráľovstvo v roku 753 pred Kristom.',
    prompts: [
      {
        prompt: 'Kto podľa tradície založil Rím?',
        answer: 'Romulus a Remus',
        options: [
          'Romulus a Remus',
          'Eneas a Hannibal',
          'Cézar a Pompeius',
          'Oktavián a Lepidus',
        ],
      },
      {
        prompt: 'V ktorom roku bol Rím založený ako kráľovstvo?',
        answer: '753 pred Kristom',
        options: [
          '753 pred Kristom',
          '509 pred Kristom',
          '390 pred Kristom',
          '272 pred Kristom',
        ],
      },
    ],
  },
  {
    id: 'rome-republic',
    scope: 'grade2-h1',
    sentence: 'Rím sa stal republikou v roku 509 pred Kristom.',
    prompts: [
      {
        prompt: 'V ktorom roku sa Rím stal republikou?',
        answer: '509 pred Kristom',
        options: [
          '753 pred Kristom',
          '509 pred Kristom',
          '390 pred Kristom',
          '27 pred Kristom',
        ],
      },
    ],
  },
  {
    id: 'rome-location',
    scope: 'grade2-h1',
    sentence: 'Rím sa nachádza na Apeninskom polostrove v Itálii.',
    prompts: [
      {
        prompt: 'Kde sa nachádza Rím?',
        answer: 'na Apeninskom polostrove v Itálii',
        options: [
          'na Apeninskom polostrove v Itálii',
          'na Pyrenejskom polostrove v Španielsku',
          'na Balkánskom polostrove v Grécku',
          'v Malej Ázii',
        ],
      },
    ],
  },
  {
    id: 'geese-save-rome',
    scope: 'grade2-h1',
    sentence:
      'V roku 390 pred Kristom podľa legendy zachránili Rím pred Galmi husi.',
    prompts: [
      {
        prompt: 'Čo podľa legendy zachránilo Rím pred Galmi?',
        answer: 'husi',
        options: ['husi', 'gladiátori', 'lode', 'orly'],
      },
      {
        prompt: 'V ktorom roku podľa legendy zachránili husi Rím pred Galmi?',
        answer: '390 pred Kristom',
        options: [
          '509 pred Kristom',
          '390 pred Kristom',
          '272 pred Kristom',
          '146 pred Kristom',
        ],
      },
    ],
  },
  {
    id: 'rome-controls-italy',
    scope: 'grade2-h1',
    sentence: 'Rím ovládol Itáliu v roku 272 pred Kristom.',
    prompts: [
      {
        prompt: 'V ktorom roku Rím ovládol Itáliu?',
        answer: '272 pred Kristom',
        options: [
          '390 pred Kristom',
          '272 pred Kristom',
          '264 pred Kristom',
          '146 pred Kristom',
        ],
      },
    ],
  },
  {
    id: 'punic-wars',
    scope: 'grade2-h1',
    sentence:
      'V púnskych vojnách Rím bojoval s Kartágom od roku 264 do roku 146.',
    prompts: [
      {
        prompt: 'S kým bojoval Rím v púnskych vojnách?',
        answer: 's Kartágom',
        options: ['s Kartágom', 's Galmi', 's Grékmi', 's Vikingami'],
      },
      {
        prompt: 'Kedy prebiehali púnske vojny?',
        answer: 'od roku 264 do roku 146',
        options: [
          'od roku 264 do roku 146',
          'od roku 390 do roku 272',
          'od roku 54 do roku 70',
          'od roku 284 do roku 313',
        ],
      },
    ],
  },
  {
    id: 'punic-commanders',
    scope: 'grade2-h1',
    sentence:
      'V púnskych vojnách bol najvýznamnejším veliteľom Ríma Scipio Africanus a Kartága Hannibal.',
    prompts: [
      {
        prompt: 'Kto bol najvýznamnejším veliteľom Ríma v púnskych vojnách?',
        answer: 'Scipio Africanus',
        options: ['Scipio Africanus', 'Hannibal', 'Spartakus', 'Pompeius'],
      },
      {
        prompt: 'Kto bol najvýznamnejším veliteľom Kartága v púnskych vojnách?',
        answer: 'Hannibal',
        options: ['Hannibal', 'Scipio Africanus', 'Július Cézar', 'Augustus'],
      },
    ],
  },
  {
    id: 'spartacus',
    scope: 'grade2-h1',
    sentence: 'Gladiátor Spartakus viedol vzburu otrokov proti Rímu.',
    prompts: [
      {
        prompt: 'Ktorý gladiátor viedol vzburu otrokov proti Rímu?',
        answer: 'Spartakus',
        options: ['Spartakus', 'Hannibal', 'Scipio Africanus', 'Lepidus'],
      },
      {
        prompt: 'Čo viedol gladiátor Spartakus?',
        answer: 'vzburu otrokov proti Rímu',
        options: [
          'vzburu otrokov proti Rímu',
          'púnske vojny',
          'druhý triumvirát',
          'Milánsky edikt',
        ],
      },
    ],
  },
  {
    id: 'caesar-triumvirate',
    scope: 'grade2-h1',
    sentence:
      'Július Cézar bol konzul Ríma, ktorý sa spojil s Pompeiom a Crassom a vytvorili triumvirát.',
    prompts: [
      {
        prompt: 'Kto sa spojil s Pompeiom a Crassom a vytvoril triumvirát?',
        answer: 'Július Cézar',
        options: ['Július Cézar', 'Augustus', 'Nero', 'Marcus Aurelius'],
      },
      {
        prompt: 'S kým vytvoril Július Cézar triumvirát?',
        answer: 's Pompeiom a Crassom',
        options: [
          's Pompeiom a Crassom',
          's Oktaviánom a Lepidom',
          's Hannibalom a Scipiom',
          's Romulom a Remom',
        ],
      },
    ],
  },
  {
    id: 'caesar-gaul',
    scope: 'grade2-h1',
    sentence: 'Cézar ako rímsky vojvodca v roku 50 pred Kristom dobyl Gáliu.',
    prompts: [
      {
        prompt: 'Čo dobyl Cézar v roku 50 pred Kristom?',
        answer: 'Gáliu',
        options: ['Gáliu', 'Kartágo', 'Jeruzalem', 'Britániu'],
      },
      {
        prompt: 'V ktorom roku Cézar dobyl Gáliu?',
        answer: '50 pred Kristom',
        options: [
          '50 pred Kristom',
          '46 pred Kristom',
          '44 pred Kristom',
          '27 pred Kristom',
        ],
      },
    ],
  },
  {
    id: 'caesar-dictator',
    scope: 'grade2-h1',
    sentence: 'Cézar sám vládol Rímu ako diktátor v roku 46 pred Kristom.',
    prompts: [
      {
        prompt: 'Ako vládol Cézar Rímu v roku 46 pred Kristom?',
        answer: 'ako diktátor',
        options: [
          'ako diktátor',
          'ako prvý cisár',
          'ako gladiátor',
          'ako pápež',
        ],
      },
      {
        prompt: 'V ktorom roku vládol Cézar Rímu ako diktátor?',
        answer: '46 pred Kristom',
        options: [
          '50 pred Kristom',
          '46 pred Kristom',
          '44 pred Kristom',
          '27 pred Kristom',
        ],
      },
    ],
  },
  {
    id: 'caesar-death',
    scope: 'grade2-h1',
    sentence: 'Cézar bol zabitý v roku 44 pred Kristom.',
    prompts: [
      {
        prompt: 'V ktorom roku bol Cézar zabitý?',
        answer: '44 pred Kristom',
        options: [
          '50 pred Kristom',
          '46 pred Kristom',
          '44 pred Kristom',
          '27 pred Kristom',
        ],
      },
    ],
  },
  {
    id: 'second-triumvirate',
    scope: 'grade2-h1',
    sentence: 'Druhý triumvirát vytvorili Oktavián, Marcus Antonius a Lepidus.',
    prompts: [
      {
        prompt: 'Kto vytvoril druhý triumvirát?',
        answer: 'Oktavián, Marcus Antonius a Lepidus',
        options: [
          'Oktavián, Marcus Antonius a Lepidus',
          'Július Cézar, Pompeius a Crassus',
          'Scipio Africanus, Hannibal a Spartakus',
          'Romulus, Remus a Eneas',
        ],
      },
    ],
  },
  {
    id: 'augustus-first-emperor',
    scope: 'grade2-h1',
    sentence: 'Augustus bol od roku 27 pred Kristom prvý rímsky cisár.',
    prompts: [
      {
        prompt: 'Kto bol prvý rímsky cisár?',
        answer: 'Augustus',
        options: ['Augustus', 'Július Cézar', 'Nero', 'Konštantín'],
      },
      {
        prompt: 'Od ktorého roku bol Augustus prvý rímsky cisár?',
        answer: '27 pred Kristom',
        options: [
          '44 pred Kristom',
          '27 pred Kristom',
          '54 po Kristovi',
          '70 po Kristovi',
        ],
      },
    ],
  },
  {
    id: 'jesus-augustus',
    scope: 'grade2-h2',
    sentence: 'Ježiš Kristus sa narodil za vlády cisára Augusta.',
    prompts: [
      {
        prompt: 'Za vlády ktorého cisára sa narodil Ježiš Kristus?',
        answer: 'cisára Augusta',
        options: [
          'cisára Augusta',
          'cisára Nera',
          'cisára Konštantína',
          'cisára Diokleciána',
        ],
      },
    ],
  },
  {
    id: 'nero',
    scope: 'grade2-h2',
    sentence:
      'Cisár Nero vládol Rímu od roku 54 po Kristovi a prenasledoval kresťanov.',
    prompts: [
      {
        prompt: 'Ktorý cisár prenasledoval kresťanov?',
        answer: 'Nero',
        options: ['Nero', 'Augustus', 'Konštantín', 'Marcus Aurelius'],
      },
      {
        prompt: 'Od ktorého roku vládol Rímu cisár Nero?',
        answer: '54 po Kristovi',
        options: [
          '27 pred Kristom',
          '54 po Kristovi',
          '70 po Kristovi',
          '313 po Kristovi',
        ],
      },
    ],
  },
  {
    id: 'jewish-war-temple',
    scope: 'grade2-h2',
    sentence: 'V Židovskej vojne bol v roku 70 zničený Jeruzalemský chrám.',
    prompts: [
      {
        prompt: 'Čo bolo zničené v roku 70 v Židovskej vojne?',
        answer: 'Jeruzalemský chrám',
        options: [
          'Jeruzalemský chrám',
          'Rímsky senát',
          'Kartágo',
          'Milánsky edikt',
        ],
      },
      {
        prompt: 'V ktorom roku bol zničený Jeruzalemský chrám?',
        answer: '70',
        options: ['54', '70', '174', '313'],
      },
    ],
  },
  {
    id: 'marcus-aurelius',
    scope: 'grade2-h2',
    sentence:
      'Rímsky cisár Marcus Aurelius bol aj filozof a bojoval okolo roku 174 na území dnešného Slovenska.',
    prompts: [
      {
        prompt: 'Ktorý rímsky cisár bol aj filozof?',
        answer: 'Marcus Aurelius',
        options: ['Marcus Aurelius', 'Nero', 'Dioklecián', 'Romulus Augustus'],
      },
      {
        prompt: 'Kde bojoval Marcus Aurelius okolo roku 174?',
        answer: 'na území dnešného Slovenska',
        options: [
          'na území dnešného Slovenska',
          'v Kartágu',
          'v Jeruzaleme',
          'v Británii',
        ],
      },
    ],
  },
  {
    id: 'diocletian',
    scope: 'grade2-h2',
    sentence:
      'Rímsky cisár Dioklecián upratal situáciu v Rímskej ríši a od roku 284 rozdelil vládu medzi štyroch vládcov.',
    prompts: [
      {
        prompt: 'Ktorý cisár rozdelil vládu medzi štyroch vládcov?',
        answer: 'Dioklecián',
        options: ['Dioklecián', 'Konštantín', 'Nero', 'Augustus'],
      },
      {
        prompt:
          'Od ktorého roku Dioklecián rozdelil vládu medzi štyroch vládcov?',
        answer: '284',
        options: ['174', '284', '313', '476'],
      },
    ],
  },
  {
    id: 'constantine-edict',
    scope: 'grade2-h2',
    sentence:
      'Rímsky cisár Konštantín dal v roku 313 Milánskym ediktom kresťanom slobodu.',
    prompts: [
      {
        prompt: 'Ktorý cisár dal kresťanom slobodu Milánskym ediktom?',
        answer: 'Konštantín',
        options: ['Konštantín', 'Dioklecián', 'Nero', 'Marcus Aurelius'],
      },
      {
        prompt: 'V ktorom roku dal Konštantín kresťanom slobodu?',
        answer: '313',
        options: ['284', '313', '476', '70'],
      },
    ],
  },
  {
    id: 'romulus-augustus',
    scope: 'grade2-h2',
    sentence:
      'Posledný cisár Západorímskej ríše bol dieťa Romulus Augustus, ktorého zvrhli v roku 476.',
    prompts: [
      {
        prompt: 'Kto bol posledný cisár Západorímskej ríše?',
        answer: 'Romulus Augustus',
        options: ['Romulus Augustus', 'Augustus', 'Konštantín', 'Nero'],
      },
      {
        prompt: 'V ktorom roku zvrhli Romula Augusta?',
        answer: '476',
        options: ['313', '390', '476', '509'],
      },
    ],
  },
  {
    id: 'roman-legacy',
    scope: 'grade2-h2',
    sentence:
      'Rimania nám zanechali napríklad latinčinu, názvy planét a názvy mesiacov v kalendári.',
    prompts: [
      {
        prompt: 'Čo nám zanechali Rimania?',
        answer: 'latinčinu, názvy planét a názvy mesiacov v kalendári',
        options: [
          'latinčinu, názvy planét a názvy mesiacov v kalendári',
          'gregoriansky chorál a regulu benediktínov',
          'papier, pušný prach a kompas',
          'vodný a veterný mlyn',
        ],
      },
    ],
  },
  {
    id: 'roman-philosophers',
    scope: 'grade2-h2',
    sentence: 'Najznámejší rímski filozofi sú Cicero a Seneca.',
    prompts: [
      {
        prompt: 'Ktorí sú najznámejší rímski filozofi?',
        answer: 'Cicero a Seneca',
        options: [
          'Cicero a Seneca',
          'Romulus a Remus',
          'Oktavián a Lepidus',
          'Scipio a Hannibal',
        ],
      },
    ],
  },
  {
    id: 'clovis',
    scope: 'grade3-h1',
    sentence: 'Chlodovik založil v 6. storočí v Západnej Európe Franskú ríšu.',
    prompts: [
      {
        prompt: 'Kto založil v 6. storočí v Západnej Európe Franskú ríšu?',
        answer: 'Chlodovik',
        options: ['Chlodovik', 'Justinián', 'Karol Veľký', 'Svätý Štefan'],
      },
      {
        prompt: 'Čo založil Chlodovik v Západnej Európe?',
        answer: 'Franskú ríšu',
        options: [
          'Franskú ríšu',
          'Byzantskú ríšu',
          'Veľkú Moravu',
          'Kyjevskú Rus',
        ],
      },
    ],
  },
  {
    id: 'justinian',
    scope: 'grade3-h1',
    sentence:
      'Byzantský cisár Justinián v 6. storočí obnovil veľkú časť Rímskej ríše.',
    prompts: [
      {
        prompt: 'Ktorý byzantský cisár obnovil veľkú časť Rímskej ríše?',
        answer: 'Justinián',
        options: ['Justinián', 'Chlodovik', 'Karol Veľký', 'Gregor Veľký'],
      },
      {
        prompt: 'Čo obnovil byzantský cisár Justinián?',
        answer: 'veľkú časť Rímskej ríše',
        options: [
          'veľkú časť Rímskej ríše',
          'Franskú ríšu',
          'gregoriansky chorál',
          '5 pilierov islamu',
        ],
      },
    ],
  },
  {
    id: 'britain-anglo-saxons',
    scope: 'grade3-h1',
    sentence: 'Britániu v 5. storočí obsadili Sasi, Anglovia a Juti.',
    prompts: [
      {
        prompt: 'Kto obsadil Britániu v 5. storočí?',
        answer: 'Sasi, Anglovia a Juti',
        options: [
          'Sasi, Anglovia a Juti',
          'Vikingovia',
          'Frankovia',
          'Mojmír, Rastislav a Svätopluk',
        ],
      },
      {
        prompt: 'Kedy obsadili Sasi, Anglovia a Juti Britániu?',
        answer: 'v 5. storočí',
        options: [
          'v 5. storočí',
          'v 6. storočí',
          'v 8. storočí',
          'v 11. storočí',
        ],
      },
    ],
  },
  {
    id: 'patrick',
    scope: 'grade3-h1',
    sentence: 'Svätý Patrik šíril kresťanstvo v Írsku.',
    prompts: [
      {
        prompt: 'Kto šíril kresťanstvo v Írsku?',
        answer: 'Svätý Patrik',
        options: ['Svätý Patrik', 'Svätý Štefan', 'Svätý Václav', 'Benedikt'],
      },
      {
        prompt: 'Kde šíril kresťanstvo Svätý Patrik?',
        answer: 'v Írsku',
        options: ['v Írsku', 'v Poľsku', 'v Byzancii', 'v Arábii'],
      },
    ],
  },
  {
    id: 'benedict-rule',
    scope: 'grade3-h1',
    sentence: 'Benedikt napísal regulu benediktínov okolo roku 529.',
    prompts: [
      {
        prompt: 'Kto napísal regulu benediktínov?',
        answer: 'Benedikt',
        options: ['Benedikt', 'Gregor Veľký', 'Mohamed', 'Svätý Patrik'],
      },
      {
        prompt: 'Okolo ktorého roku napísal Benedikt regulu benediktínov?',
        answer: '529',
        options: ['529', '590', '610', '800'],
      },
    ],
  },
  {
    id: 'gregory-great',
    scope: 'grade3-h1',
    sentence:
      'Gregor Veľký, ktorý sa stal pápežom v roku 590, vytvoril gregoriansky chorál.',
    prompts: [
      {
        prompt: 'Kto vytvoril gregoriansky chorál?',
        answer: 'Gregor Veľký',
        options: ['Gregor Veľký', 'Benedikt', 'Mohamed', 'Justinián'],
      },
      {
        prompt: 'V ktorom roku sa Gregor Veľký stal pápežom?',
        answer: '590',
        options: ['529', '590', '610', '800'],
      },
    ],
  },
  {
    id: 'islam-muhammad',
    scope: 'grade3-h1',
    sentence:
      'Druhé najväčšie náboženstvo sveta islam založil v roku 610 Mohamed.',
    prompts: [
      {
        prompt: 'Kto založil islam?',
        answer: 'Mohamed',
        options: ['Mohamed', 'Gregor Veľký', 'Karol Veľký', 'Svätý Štefan'],
      },
      {
        prompt: 'V ktorom roku založil Mohamed islam?',
        answer: '610',
        options: ['529', '590', '610', '800'],
      },
    ],
  },
  {
    id: 'islam-pillars',
    scope: 'grade3-h1',
    sentence:
      'Islam má 5 pilierov a po Mohamedovej smrti sa rozšíril z Arábie až do Španielska.',
    prompts: [
      {
        prompt: 'Koľko pilierov má islam?',
        answer: '5 pilierov',
        options: ['5 pilierov', '3 piliere', '7 pilierov', '10 pilierov'],
      },
      {
        prompt: 'Kam sa islam rozšíril po Mohamedovej smrti?',
        answer: 'z Arábie až do Španielska',
        options: [
          'z Arábie až do Španielska',
          'z Írska do Británie',
          'z Byzancie do Číny',
          'z Poľska do Uhorska',
        ],
      },
    ],
  },
  {
    id: 'charlemagne',
    scope: 'grade3-h1',
    sentence:
      'Najväčší franský panovník Karol Veľký sa stal cisárom v roku 800.',
    prompts: [
      {
        prompt: 'Ktorý franský panovník sa stal cisárom v roku 800?',
        answer: 'Karol Veľký',
        options: ['Karol Veľký', 'Chlodovik', 'Mojmír', 'Svätý Štefan'],
      },
      {
        prompt: 'V ktorom roku sa Karol Veľký stal cisárom?',
        answer: '800',
        options: ['610', '800', '1000', '1054'],
      },
    ],
  },
  {
    id: 'vikings',
    scope: 'grade3-h1',
    sentence: 'Vikingovia na lodiach drancovali Európu od konca 8. storočia.',
    prompts: [
      {
        prompt: 'Kto na lodiach drancoval Európu od konca 8. storočia?',
        answer: 'Vikingovia',
        options: ['Vikingovia', 'Sasi, Anglovia a Juti', 'Frankovia', 'Avari'],
      },
      {
        prompt: 'Odkedy Vikingovia drancovali Európu?',
        answer: 'od konca 8. storočia',
        options: [
          'od konca 8. storočia',
          'od 5. storočia',
          'od 6. storočia',
          'od 11. storočia',
        ],
      },
    ],
  },
  {
    id: 'great-moravia-rulers',
    scope: 'grade3-h1',
    sentence: 'Veľkej Morave vládli postupne Mojmír, Rastislav a Svätopluk.',
    prompts: [
      {
        prompt: 'Kto postupne vládol Veľkej Morave?',
        answer: 'Mojmír, Rastislav a Svätopluk',
        options: [
          'Mojmír, Rastislav a Svätopluk',
          'Svätý Václav, Boleslav Chrabrý a Vladimír',
          'Chlodovik, Justinián a Karol Veľký',
          'Sasi, Anglovia a Juti',
        ],
      },
    ],
  },
  {
    id: 'christian-rulers',
    scope: 'grade3-h1',
    sentence:
      'V 10. a 11. storočí vládli a šírili kresťanstvo v českých krajinách svätý Václav, v Poľsku Boleslav Chrabrý a v Kyjevskej Rusi Vladimír.',
    prompts: [
      {
        prompt: 'Kto šíril kresťanstvo v českých krajinách?',
        answer: 'svätý Václav',
        options: [
          'svätý Václav',
          'Boleslav Chrabrý',
          'Vladimír',
          'Svätý Štefan',
        ],
      },
      {
        prompt: 'Kto šíril kresťanstvo v Poľsku?',
        answer: 'Boleslav Chrabrý',
        options: [
          'Boleslav Chrabrý',
          'svätý Václav',
          'Vladimír',
          'Karol Veľký',
        ],
      },
      {
        prompt: 'Kto šíril kresťanstvo v Kyjevskej Rusi?',
        answer: 'Vladimír',
        options: ['Vladimír', 'Boleslav Chrabrý', 'svätý Václav', 'Mojmír'],
      },
    ],
  },
  {
    id: 'stephen-hungary',
    scope: 'grade3-h1',
    sentence:
      'Prvým uhorským kráľom sa stal v roku 1000 svätý Štefan, ktorý šíril kresťanstvo.',
    prompts: [
      {
        prompt: 'Kto sa stal prvým uhorským kráľom?',
        answer: 'svätý Štefan',
        options: ['svätý Štefan', 'Karol Veľký', 'Svätopluk', 'Vladimír'],
      },
      {
        prompt: 'V ktorom roku sa svätý Štefan stal prvým uhorským kráľom?',
        answer: '1000',
        options: ['800', '1000', '1054', '1095'],
      },
    ],
  },
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
  {
    id: 'route-to-india',
    scope: 'grade4-h1',
    sentence:
      'Kvôli osmanskej hrozbe v 15. storočí sa Európania snažili dostať do Indie okolo Afriky.',
    prompts: [
      {
        prompt:
          'Prečo sa Európania v 15. storočí snažili dostať do Indie okolo Afriky?',
        answer: 'kvôli osmanskej hrozbe',
        options: [
          'kvôli osmanskej hrozbe',
          'kvôli púnskym vojnám',
          'kvôli Vikingom',
          'kvôli studenej vojne',
        ],
      },
      {
        prompt: 'Kam sa Európania snažili dostať okolo Afriky?',
        answer: 'do Indie',
        options: ['do Indie', 'do Ameriky', 'do Číny', 'do Jeruzalema'],
      },
    ],
  },
  {
    id: 'columbus-america',
    scope: 'grade4-h1',
    sentence: 'Krištof Kolumbus objavil v roku 1492 Ameriku.',
    prompts: [
      {
        prompt: 'Kto objavil v roku 1492 Ameriku?',
        answer: 'Krištof Kolumbus',
        options: [
          'Krištof Kolumbus',
          'Leonardo da Vinci',
          'Martin Luther',
          'George Washington',
        ],
      },
      {
        prompt: 'V ktorom roku objavil Krištof Kolumbus Ameriku?',
        answer: '1492',
        options: ['1440', '1492', '1517', '1545'],
      },
    ],
  },
  {
    id: 'aztecs-incas',
    scope: 'grade4-h1',
    sentence: 'V strednej Amerike žili Aztékovia a v južnej Amerike Inkovia.',
    prompts: [
      {
        prompt: 'Kto žil v strednej Amerike?',
        answer: 'Aztékovia',
        options: ['Aztékovia', 'Inkovia', 'Pueblania', 'Osmani'],
      },
      {
        prompt: 'Kto žil v južnej Amerike?',
        answer: 'Inkovia',
        options: ['Inkovia', 'Aztékovia', 'Pueblania', 'Vikingovia'],
      },
    ],
  },
  {
    id: 'north-american-tribes',
    scope: 'grade4-h1',
    sentence:
      'V severnej Amerike žili stovky indiánskych kmeňov, napríklad Pueblania.',
    prompts: [
      {
        prompt: 'Kde žili stovky indiánskych kmeňov, napríklad Pueblania?',
        answer: 'v severnej Amerike',
        options: [
          'v severnej Amerike',
          'v južnej Amerike',
          'v strednej Amerike',
          'v Indii',
        ],
      },
      {
        prompt:
          'Ktorý indiánsky kmeň je uvedený ako príklad zo severnej Ameriky?',
        answer: 'Pueblania',
        options: ['Pueblania', 'Aztékovia', 'Inkovia', 'Osmani'],
      },
    ],
  },
  {
    id: 'leonardo',
    scope: 'grade4-h1',
    sentence:
      'Najznámejším predstaviteľom renesancie bol umelec a vynálezca Leonardo da Vinci, ktorý namaľoval Monu Lisu.',
    prompts: [
      {
        prompt: 'Kto bol najznámejším predstaviteľom renesancie?',
        answer: 'Leonardo da Vinci',
        options: [
          'Leonardo da Vinci',
          'Michelangelo Buonarroti',
          'Gutenberg',
          'William Shakespeare',
        ],
      },
      {
        prompt: 'Kto namaľoval Monu Lisu?',
        answer: 'Leonardo da Vinci',
        options: [
          'Leonardo da Vinci',
          'Michelangelo Buonarroti',
          'Martin Luther',
          'Ľudovít XIV.',
        ],
      },
    ],
  },
  {
    id: 'michelangelo',
    scope: 'grade4-h1',
    sentence:
      'Michelangelo Buonarroti bol umelec, ktorý vymaľoval Sixtínsku kaplnku.',
    prompts: [
      {
        prompt: 'Kto vymaľoval Sixtínsku kaplnku?',
        answer: 'Michelangelo Buonarroti',
        options: [
          'Michelangelo Buonarroti',
          'Leonardo da Vinci',
          'Gutenberg',
          'William Shakespeare',
        ],
      },
      {
        prompt: 'Čo vymaľoval Michelangelo Buonarroti?',
        answer: 'Sixtínsku kaplnku',
        options: [
          'Sixtínsku kaplnku',
          'Monu Lisu',
          'Rómea a Júliu',
          'Milánsky edikt',
        ],
      },
    ],
  },
  {
    id: 'gutenberg',
    scope: 'grade4-h1',
    sentence: 'Gutenberg vymyslel tlačiarenský stroj okolo roku 1440.',
    prompts: [
      {
        prompt: 'Kto vymyslel tlačiarenský stroj?',
        answer: 'Gutenberg',
        options: [
          'Gutenberg',
          'Leonardo da Vinci',
          'Michelangelo Buonarroti',
          'Martin Luther',
        ],
      },
      {
        prompt: 'Okolo ktorého roku vymyslel Gutenberg tlačiarenský stroj?',
        answer: '1440',
        options: ['1440', '1492', '1517', '1571'],
      },
    ],
  },
  {
    id: 'shakespeare',
    scope: 'grade4-h1',
    sentence:
      'William Shakespeare bol anglický dramatik, ktorý napísal napríklad hry Rómeo a Júlia, Hamlet alebo Sen noci svätojánskej.',
    prompts: [
      {
        prompt:
          'Kto bol anglický dramatik a napísal hry Rómeo a Júlia či Hamlet?',
        answer: 'William Shakespeare',
        options: [
          'William Shakespeare',
          'Gutenberg',
          'Martin Luther',
          'Napoleon',
        ],
      },
      {
        prompt: 'Ktorú hru napísal William Shakespeare?',
        answer: 'Hamlet',
        options: ['Hamlet', 'Mona Lisa', 'Suma teologická', 'Milánsky edikt'],
      },
    ],
  },
  {
    id: 'martin-luther',
    scope: 'grade4-h1',
    sentence:
      'Martin Luther kritizoval učenie Cirkvi o odpustkoch a kňazstve, a so svojimi stúpencami sa odtrhol od Katolíckej cirkvi v roku 1517.',
    prompts: [
      {
        prompt:
          'Kto sa so svojimi stúpencami odtrhol od Katolíckej cirkvi v roku 1517?',
        answer: 'Martin Luther',
        options: [
          'Martin Luther',
          'Gutenberg',
          'Krištof Kolumbus',
          'Ľudovít XIV.',
        ],
      },
      {
        prompt: 'V ktorom roku sa Martin Luther odtrhol od Katolíckej cirkvi?',
        answer: '1517',
        options: ['1492', '1517', '1545', '1563'],
      },
    ],
  },
  {
    id: 'trident',
    scope: 'grade4-h1',
    sentence:
      'Tridentský koncil jasne určil učenie Katolíckej cirkvi a trval od roku 1545 do roku 1563.',
    prompts: [
      {
        prompt: 'Ktorý koncil jasne určil učenie Katolíckej cirkvi?',
        answer: 'Tridentský koncil',
        options: [
          'Tridentský koncil',
          'Druhý vatikánsky koncil',
          'Milánsky edikt',
          'Svätá liga',
        ],
      },
      {
        prompt: 'V ktorých rokoch trval Tridentský koncil?',
        answer: 'od roku 1545 do roku 1563',
        options: [
          'od roku 1545 do roku 1563',
          'od roku 1517 do roku 1545',
          'od roku 1618 do roku 1648',
          'od roku 1962 do roku 1965',
        ],
      },
    ],
  },
  {
    id: 'thirty-years-war',
    scope: 'grade4-h1',
    sentence:
      'Od roku 1618 bola v Európe ničivá Tridsaťročná vojna medzi katolíkmi a protestantmi.',
    prompts: [
      {
        prompt: 'Ktorá vojna začala v Európe od roku 1618?',
        answer: 'Tridsaťročná vojna',
        options: [
          'Tridsaťročná vojna',
          'Storočná vojna',
          'Studená vojna',
          'Púnske vojny',
        ],
      },
      {
        prompt: 'Medzi kým bola Tridsaťročná vojna?',
        answer: 'medzi katolíkmi a protestantmi',
        options: [
          'medzi katolíkmi a protestantmi',
          'medzi Rímom a Kartágom',
          'medzi USA a Sovietskym zväzom',
          'medzi Anglickom a USA',
        ],
      },
    ],
  },
  {
    id: 'lepanto',
    scope: 'grade4-h1',
    sentence:
      'Svätá liga porazila Osmanov v námornej bitke pri Lepante v roku 1571.',
    prompts: [
      {
        prompt: 'Kto porazil Osmanov v námornej bitke pri Lepante?',
        answer: 'Svätá liga',
        options: ['Svätá liga', 'Tridentský koncil', 'Pueblania', 'Inkovia'],
      },
      {
        prompt: 'V ktorom roku bola námorná bitka pri Lepante?',
        answer: '1571',
        options: ['1517', '1545', '1571', '1683'],
      },
    ],
  },
  {
    id: 'vienna-1683',
    scope: 'grade4-h1',
    sentence: 'Bitka pri Viedni v roku 1683 zastavila osmanské útoky v Európe.',
    prompts: [
      {
        prompt: 'Ktorá bitka zastavila osmanské útoky v Európe?',
        answer: 'Bitka pri Viedni',
        options: [
          'Bitka pri Viedni',
          'Bitka pri Lepante',
          'Tridsaťročná vojna',
          'Storočná vojna',
        ],
      },
      {
        prompt: 'V ktorom roku bola bitka pri Viedni?',
        answer: '1683',
        options: ['1571', '1618', '1683', '1776'],
      },
    ],
  },
  {
    id: 'america-colonization',
    scope: 'grade4-h2',
    sentence:
      'Ameriku kolonizovali postupne Španieli, Portugalci, Holanďania, Francúzi a Angličania.',
    prompts: [
      {
        prompt: 'Kto postupne kolonizoval Ameriku?',
        answer: 'Španieli, Portugalci, Holanďania, Francúzi a Angličania',
        options: [
          'Španieli, Portugalci, Holanďania, Francúzi a Angličania',
          'Aztékovia, Inkovia a Pueblania',
          'Osmani a Svätá liga',
          'Rimania a Kartáginci',
        ],
      },
    ],
  },
  {
    id: 'peter-great',
    scope: 'grade4-h2',
    sentence: 'Cár Peter Veľký na konci 17. storočia modernizoval Rusko.',
    prompts: [
      {
        prompt: 'Ktorý cár modernizoval Rusko na konci 17. storočia?',
        answer: 'Peter Veľký',
        options: [
          'Peter Veľký',
          'Ľudovít XIV.',
          'Napoleon',
          'George Washington',
        ],
      },
      {
        prompt: 'Čo modernizoval Peter Veľký?',
        answer: 'Rusko',
        options: ['Rusko', 'Francúzsko', 'Ameriku', 'Španielsko'],
      },
    ],
  },
  {
    id: 'louis-xiv',
    scope: 'grade4-h2',
    sentence:
      'Francúzsky kráľ Ľudovít XIV., prezývaný kráľ Slnko, vládol v 17. storočí ako neobmedzený vládca Francúzska.',
    prompts: [
      {
        prompt: 'Ktorý francúzsky kráľ bol prezývaný kráľ Slnko?',
        answer: 'Ľudovít XIV.',
        options: ['Ľudovít XIV.', 'Napoleon', 'Peter Veľký', 'Karol Veľký'],
      },
      {
        prompt: 'Ako bol prezývaný Ľudovít XIV.?',
        answer: 'kráľ Slnko',
        options: [
          'kráľ Slnko',
          'pán Váhu a Tatier',
          'otec vlasti',
          'prvý cisár',
        ],
      },
    ],
  },
  {
    id: 'usa-1776',
    scope: 'grade4-h2',
    sentence:
      'Američania pod vedením Georgea Washingtona porazili Angličanov a v roku 1776 vytvorili Spojené štáty americké.',
    prompts: [
      {
        prompt: 'Kto viedol Američanov proti Angličanom?',
        answer: 'George Washington',
        options: [
          'George Washington',
          'Napoleon',
          'Ľudovít XIV.',
          'Adolf Hitler',
        ],
      },
      {
        prompt: 'V ktorom roku vytvorili Američania Spojené štáty americké?',
        answer: '1776',
        options: ['1683', '1776', '1789', '1804'],
      },
    ],
  },
  {
    id: 'french-revolution',
    scope: 'grade4-h2',
    sentence:
      'Francúzska revolúcia v roku 1789 ukončila vládu kráľov a vo Francúzsku vytvorila republiku, v ktorej vládol teror.',
    prompts: [
      {
        prompt: 'V ktorom roku bola Francúzska revolúcia?',
        answer: '1789',
        options: ['1776', '1789', '1804', '1914'],
      },
      {
        prompt: 'Čo vytvorila Francúzska revolúcia vo Francúzsku?',
        answer: 'republiku',
        options: ['republiku', 'cisárstvo', 'kolóniu', 'Sovietsky zväz'],
      },
    ],
  },
  {
    id: 'napoleon',
    scope: 'grade4-h2',
    sentence:
      'Napoleon sa v roku 1804 vyhlásil za cisára Francúzska a takmer ovládol Európu.',
    prompts: [
      {
        prompt: 'Kto sa v roku 1804 vyhlásil za cisára Francúzska?',
        answer: 'Napoleon',
        options: [
          'Napoleon',
          'Ľudovít XIV.',
          'Peter Veľký',
          'George Washington',
        ],
      },
      {
        prompt: 'V ktorom roku sa Napoleon vyhlásil za cisára Francúzska?',
        answer: '1804',
        options: ['1776', '1789', '1804', '1914'],
      },
    ],
  },
  {
    id: 'ww1',
    scope: 'grade4-h2',
    sentence:
      'V prvej svetovej vojne v rokoch 1914 až 1918 bojovali na jednej strane hlavne Anglicko, Francúzsko, Rusko a USA proti Nemecku, Rakúsko-Uhorsku a ich spojencom.',
    prompts: [
      {
        prompt: 'V ktorých rokoch prebiehala prvá svetová vojna?',
        answer: '1914 až 1918',
        options: [
          '1914 až 1918',
          '1939 až 1945',
          '1947 až 1991',
          '1962 až 1965',
        ],
      },
      {
        prompt:
          'Proti komu bojovali v prvej svetovej vojne hlavne Anglicko, Francúzsko, Rusko a USA?',
        answer: 'proti Nemecku, Rakúsko-Uhorsku a ich spojencom',
        options: [
          'proti Nemecku, Rakúsko-Uhorsku a ich spojencom',
          'proti Anglicku a Francúzsku',
          'proti USA a Sovietskemu zväzu',
          'proti Osmanom',
        ],
      },
    ],
  },
  {
    id: 'ww2',
    scope: 'grade4-h2',
    sentence:
      'Nemecký kancelár Adolf Hitler rozpútal druhú svetovú vojnu, ktorá trvala od roku 1939 do roku 1945.',
    prompts: [
      {
        prompt: 'Kto rozpútal druhú svetovú vojnu?',
        answer: 'Adolf Hitler',
        options: [
          'Adolf Hitler',
          'Napoleon',
          'George Washington',
          'Ján Pavol II.',
        ],
      },
      {
        prompt: 'V ktorých rokoch trvala druhá svetová vojna?',
        answer: 'od roku 1939 do roku 1945',
        options: [
          'od roku 1914 do roku 1918',
          'od roku 1939 do roku 1945',
          'od roku 1947 do roku 1991',
          'od roku 1962 do roku 1965',
        ],
      },
    ],
  },
  {
    id: 'cold-war',
    scope: 'grade4-h2',
    sentence:
      'USA a Sovietsky zväz viedli od roku 1947 proti sebe studenú vojnu.',
    prompts: [
      {
        prompt: 'Kto proti sebe viedol studenú vojnu?',
        answer: 'USA a Sovietsky zväz',
        options: [
          'USA a Sovietsky zväz',
          'Anglicko a Francúzsko',
          'Rím a Kartágo',
          'katolíci a protestanti',
        ],
      },
      {
        prompt: 'Od ktorého roku viedli USA a Sovietsky zväz studenú vojnu?',
        answer: '1947',
        options: ['1939', '1945', '1947', '1991'],
      },
    ],
  },
  {
    id: 'vatican-ii',
    scope: 'grade4-h2',
    sentence: 'Druhý vatikánsky koncil sa uskutočnil v rokoch 1962 až 1965.',
    prompts: [
      {
        prompt: 'Ktorý koncil sa uskutočnil v rokoch 1962 až 1965?',
        answer: 'Druhý vatikánsky koncil',
        options: [
          'Druhý vatikánsky koncil',
          'Tridentský koncil',
          'Milánsky edikt',
          'Svätá liga',
        ],
      },
      {
        prompt: 'V ktorých rokoch sa uskutočnil Druhý vatikánsky koncil?',
        answer: '1962 až 1965',
        options: [
          '1545 až 1563',
          '1914 až 1918',
          '1962 až 1965',
          '1947 až 1991',
        ],
      },
    ],
  },
  {
    id: 'cold-war-end',
    scope: 'grade4-h2',
    sentence:
      'Studená vojna sa skončila v roku 1991 zánikom Sovietskeho zväzu.',
    prompts: [
      {
        prompt: 'V ktorom roku sa skončila studená vojna?',
        answer: '1991',
        options: ['1947', '1965', '1989', '1991'],
      },
      {
        prompt: 'Čím sa skončila studená vojna?',
        answer: 'zánikom Sovietskeho zväzu',
        options: [
          'zánikom Sovietskeho zväzu',
          'Druhým vatikánskym koncilom',
          'Francúzskou revolúciou',
          'bitkou pri Viedni',
        ],
      },
    ],
  },
  {
    id: 'john-paul-ii',
    scope: 'grade4-h2',
    sentence:
      'Ján Pavol II. bol poľský pápež, ktorý pomohol ukončiť studenú vojnu a po smrti bol vyhlásený za svätého.',
    prompts: [
      {
        prompt: 'Ktorý poľský pápež pomohol ukončiť studenú vojnu?',
        answer: 'Ján Pavol II.',
        options: [
          'Ján Pavol II.',
          'Ľudovít XIV.',
          'George Washington',
          'Adolf Hitler',
        ],
      },
      {
        prompt: 'Čím bol Ján Pavol II. vyhlásený po smrti?',
        answer: 'za svätého',
        options: ['za svätého', 'za cisára', 'za kráľa Slnko', 'za diktátora'],
      },
    ],
  },
  {
    id: 'romans-quadi-slovakia',
    scope: 'grade5-h1',
    sentence:
      'Rimania bojovali na území Slovenska proti Kvádom za cisára Marca Aurelia v rokoch 166 – 180.',
    prompts: [
      {
        prompt:
          'Proti komu bojovali Rimania na území Slovenska za cisára Marca Aurelia?',
        answer: 'proti Kvádom',
        options: [
          'proti Kvádom',
          'proti Mongolom',
          'proti Osmanom',
          'proti Keltom',
        ],
      },
      {
        prompt:
          'V ktorých rokoch bojovali Rimania na území Slovenska proti Kvádom?',
        answer: '166 – 180',
        options: ['166 – 180', '623 – 658', '871 – 894', '1077 – 1095'],
      },
    ],
  },
  {
    id: 'slavs-arrive-slovakia',
    scope: 'grade5-h1',
    sentence: 'Slovania prišli na územie Slovenska v 5. storočí.',
    prompts: [
      {
        prompt: 'Kto prišiel na územie Slovenska v 5. storočí?',
        answer: 'Slovania',
        options: ['Slovania', 'Rimania', 'Mongoli', 'Osmani'],
      },
      {
        prompt: 'Kedy prišli Slovania na územie Slovenska?',
        answer: 'v 5. storočí',
        options: [
          'v 5. storočí',
          'v 9. storočí',
          'v 13. storočí',
          'v 17. storočí',
        ],
      },
    ],
  },
  {
    id: 'samo-empire',
    scope: 'grade5-h1',
    sentence: 'Samova ríša existovala od roku 623 – 658.',
    prompts: [
      {
        prompt: 'Ktorá ríša existovala v rokoch 623 – 658?',
        answer: 'Samova ríša',
        options: ['Samova ríša', 'Veľká Morava', 'Uhorsko', 'Franská ríša'],
      },
      {
        prompt: 'V ktorých rokoch existovala Samova ríša?',
        answer: '623 – 658',
        options: ['623 – 658', '833 – 894', '1000 – 1095', '1301 – 1342'],
      },
    ],
  },
  {
    id: 'mojmir-pribina',
    scope: 'grade5-h1',
    sentence:
      'Moravské knieža Mojmír vyhnal nitrianske knieža Pribinu v roku 833.',
    prompts: [
      {
        prompt: 'Kto vyhnal nitrianske knieža Pribinu?',
        answer: 'Mojmír',
        options: ['Mojmír', 'Rastislav', 'Svätopluk', 'Svätý Štefan'],
      },
      {
        prompt: 'V ktorom roku Mojmír vyhnal Pribinu?',
        answer: '833',
        options: ['833', '863', '871', '1000'],
      },
    ],
  },
  {
    id: 'cyril-methodius',
    scope: 'grade5-h1',
    sentence:
      'Cyril a Metod prišli v roku 863 na Veľkú Moravu za vlády Rastislava.',
    prompts: [
      {
        prompt: 'Kto prišiel v roku 863 na Veľkú Moravu?',
        answer: 'Cyril a Metod',
        options: [
          'Cyril a Metod',
          'Mojmír a Pribina',
          'Svätopluk a Rastislav',
          'Štúr a Bernolák',
        ],
      },
      {
        prompt: 'Za vlády koho prišli Cyril a Metod na Veľkú Moravu?',
        answer: 'Rastislava',
        options: ['Rastislava', 'Mojmíra', 'Svätopluka', 'Svätého Štefana'],
      },
    ],
  },
  {
    id: 'svatopluk-rule',
    scope: 'grade5-h1',
    sentence: 'Svätopluk vládol na Veľkej Morave v rokoch 871 – 894.',
    prompts: [
      {
        prompt: 'Kto vládol na Veľkej Morave v rokoch 871 – 894?',
        answer: 'Svätopluk',
        options: ['Svätopluk', 'Mojmír', 'Rastislav', 'Pribina'],
      },
      {
        prompt: 'V ktorých rokoch vládol Svätopluk na Veľkej Morave?',
        answer: '871 – 894',
        options: ['623 – 658', '871 – 894', '1000 – 1095', '1301 – 1342'],
      },
    ],
  },
  {
    id: 'stephen-hungary-grade5',
    scope: 'grade5-h1',
    sentence:
      'Prvým uhorským kráľom sa stal v roku 1000 svätý Štefan, ktorý šíril kresťanstvo.',
    prompts: [
      {
        prompt: 'Kto sa stal prvým uhorským kráľom?',
        answer: 'svätý Štefan',
        options: ['svätý Štefan', 'Svätý Ladislav', 'Belo IV.', 'Karol Róbert'],
      },
      {
        prompt: 'V ktorom roku sa svätý Štefan stal prvým uhorským kráľom?',
        answer: '1000',
        options: ['863', '1000', '1077', '1241'],
      },
    ],
  },
  {
    id: 'ladislaus',
    scope: 'grade5-h1',
    sentence: 'Svätý kráľ Ladislav vládol v Uhorsku v rokoch 1077 – 1095.',
    prompts: [
      {
        prompt: 'Ktorý svätý kráľ vládol v Uhorsku v rokoch 1077 – 1095?',
        answer: 'Svätý Ladislav',
        options: ['Svätý Ladislav', 'Svätý Štefan', 'Belo IV.', 'Matej'],
      },
      {
        prompt: 'V ktorých rokoch vládol Svätý Ladislav v Uhorsku?',
        answer: '1077 – 1095',
        options: ['871 – 894', '1000 – 1038', '1077 – 1095', '1301 – 1342'],
      },
    ],
  },
  {
    id: 'bela-iv-mongols',
    scope: 'grade5-h1',
    sentence:
      'Za vlády Bela IV. v roku 1241 napadli Uhorsko Mongoli a začala sa výstavba kamenných hradov na našom území.',
    prompts: [
      {
        prompt: 'Kto napadol Uhorsko v roku 1241?',
        answer: 'Mongoli',
        options: ['Mongoli', 'Osmani', 'Kvádi', 'Rimania'],
      },
      {
        prompt: 'Čo sa začalo stavať po vpáde Mongolov za vlády Bela IV.?',
        answer: 'kamenné hrady',
        options: [
          'kamenné hrady',
          'Trnavská univerzita',
          'kremnická mincovňa',
          'Istropolitana',
        ],
      },
    ],
  },
  {
    id: 'matus-cak-karol-robert',
    scope: 'grade5-h1',
    sentence:
      'Matúš Čák bol uhorský šľachtic z Trenčína, ktorý do roku 1312 bojoval proti uhorskému kráľovi Karolovi Róbertovi.',
    prompts: [
      {
        prompt: 'Proti ktorému uhorskému kráľovi bojoval Matúš Čák?',
        answer: 'Karolovi Róbertovi',
        options: [
          'Karolovi Róbertovi',
          'Belovi IV.',
          'Matejovi',
          'Ľudovítovi Veľkému',
        ],
      },
      {
        prompt: 'Odkiaľ bol uhorský šľachtic Matúš Čák?',
        answer: 'z Trenčína',
        options: ['z Trenčína', 'z Kremnice', 'z Bratislavy', 'z Trnavy'],
      },
    ],
  },
  {
    id: 'karol-robert',
    scope: 'grade5-h1',
    sentence:
      'Uhorský kráľ Karol Róbert vládol v rokoch 1301 – 1342 a založil kremnickú mincovňu.',
    prompts: [
      {
        prompt: 'Ktorý uhorský kráľ založil kremnickú mincovňu?',
        answer: 'Karol Róbert',
        options: ['Karol Róbert', 'Ľudovít Veľký', 'Matej', 'Belo IV.'],
      },
      {
        prompt: 'V ktorých rokoch vládol Karol Róbert?',
        answer: '1301 – 1342',
        options: ['1077 – 1095', '1301 – 1342', '1342 – 1382', '1465 – 1490'],
      },
    ],
  },
  {
    id: 'louis-great',
    scope: 'grade5-h1',
    sentence:
      'Uhorský kráľ Ľudovít Veľký vládol v rokoch 1342 – 1382 a významne pozdvihol Uhorsko.',
    prompts: [
      {
        prompt:
          'Ktorý uhorský kráľ významne pozdvihol Uhorsko v rokoch 1342 – 1382?',
        answer: 'Ľudovít Veľký',
        options: ['Ľudovít Veľký', 'Karol Róbert', 'Matej', 'Svätý Ladislav'],
      },
      {
        prompt: 'V ktorých rokoch vládol Ľudovít Veľký?',
        answer: '1342 – 1382',
        options: ['1301 – 1342', '1342 – 1382', '1465 – 1490', '1740 – 1780'],
      },
    ],
  },
  {
    id: 'istropolitana',
    scope: 'grade5-h1',
    sentence:
      'Kráľ Matej založil v Bratislave v roku 1465 Istropolitanu – prvú univerzitu na území Slovenska.',
    prompts: [
      {
        prompt: 'Kto založil v Bratislave Istropolitanu?',
        answer: 'kráľ Matej',
        options: [
          'kráľ Matej',
          'Karol Róbert',
          'Ľudovít Veľký',
          'Peter Pázmaň',
        ],
      },
      {
        prompt: 'V ktorom roku bola založená Istropolitana?',
        answer: '1465',
        options: ['1241', '1312', '1465', '1526'],
      },
    ],
  },
  {
    id: 'mohac',
    scope: 'grade5-h1',
    sentence:
      'V bitke pri Moháči v roku 1526 Osmani porazili Uhrov a obsadili veľkú časť Uhorska.',
    prompts: [
      {
        prompt: 'Kto porazil Uhrov v bitke pri Moháči?',
        answer: 'Osmani',
        options: ['Osmani', 'Mongoli', 'Kvádi', 'Rimania'],
      },
      {
        prompt: 'V ktorom roku bola bitka pri Moháči?',
        answer: '1526',
        options: ['1465', '1526', '1618', '1683'],
      },
    ],
  },
  {
    id: 'pazman',
    scope: 'grade5-h2',
    sentence:
      'Jezuita Peter Pázmaň v 17. storočí pomohol obnoviť katolícku vieru v Uhorsku a založil Trnavskú univerzitu.',
    prompts: [
      {
        prompt: 'Kto založil Trnavskú univerzitu?',
        answer: 'Peter Pázmaň',
        options: [
          'Peter Pázmaň',
          'Imrich Tököli',
          'Anton Bernolák',
          'Štefan Moyzes',
        ],
      },
      {
        prompt: 'Čo pomohol obnoviť Peter Pázmaň v Uhorsku?',
        answer: 'katolícku vieru',
        options: [
          'katolícku vieru',
          'spisovnú slovenčinu',
          'kamenné hrady',
          'kremnickú mincovňu',
        ],
      },
    ],
  },
  {
    id: 'tokoli',
    scope: 'grade5-h2',
    sentence:
      'Imrich Tököli bol gróf z Kežmarku, ktorý viedol povstanie proti Habsburgovcom v Uhorsku v 17. storočí.',
    prompts: [
      {
        prompt:
          'Kto viedol povstanie proti Habsburgovcom v Uhorsku v 17. storočí?',
        answer: 'Imrich Tököli',
        options: [
          'Imrich Tököli',
          'Peter Pázmaň',
          'Andrej Hlinka',
          'Jozef Tiso',
        ],
      },
      {
        prompt: 'Odkiaľ bol gróf Imrich Tököli?',
        answer: 'z Kežmarku',
        options: ['z Kežmarku', 'z Ružomberka', 'z Trenčína', 'z Trnavy'],
      },
    ],
  },
  {
    id: 'maria-theresa',
    scope: 'grade5-h2',
    sentence:
      'Mária Terézia bola prvá žena na rakúskom tróne, ktorá vládla v rokoch 1740 – 1780.',
    prompts: [
      {
        prompt: 'Kto bola prvá žena na rakúskom tróne?',
        answer: 'Mária Terézia',
        options: [
          'Mária Terézia',
          'Ľudovít Štúr',
          'Anton Bernolák',
          'Tomáš G. Masaryk',
        ],
      },
      {
        prompt: 'V ktorých rokoch vládla Mária Terézia?',
        answer: '1740 – 1780',
        options: ['1526 – 1683', '1740 – 1780', '1787 – 1843', '1918 – 1939'],
      },
    ],
  },
  {
    id: 'bernolak',
    scope: 'grade5-h2',
    sentence:
      'Za vlády Jozefa II. Anton Bernolák v roku 1787 ako prvý uzákonil spisovnú slovenčinu inšpirovanú západoslovenčinou.',
    prompts: [
      {
        prompt: 'Kto ako prvý uzákonil spisovnú slovenčinu?',
        answer: 'Anton Bernolák',
        options: [
          'Anton Bernolák',
          'Ľudovít Štúr',
          'Štefan Moyzes',
          'Andrej Hlinka',
        ],
      },
      {
        prompt: 'V ktorom roku Anton Bernolák uzákonil spisovnú slovenčinu?',
        answer: '1787',
        options: ['1740', '1787', '1843', '1918'],
      },
    ],
  },
  {
    id: 'stur',
    scope: 'grade5-h2',
    sentence:
      'Ľudovít Štúr bol jazykovedec a politik, ktorý v roku 1843 uzákonil spisovnú slovenčinu inšpirovanú stredoslovenčinou.',
    prompts: [
      {
        prompt: 'Kto v roku 1843 uzákonil spisovnú slovenčinu?',
        answer: 'Ľudovít Štúr',
        options: [
          'Ľudovít Štúr',
          'Anton Bernolák',
          'Peter Pázmaň',
          'Tomáš G. Masaryk',
        ],
      },
      {
        prompt: 'Čím bola inšpirovaná Štúrova spisovná slovenčina?',
        answer: 'stredoslovenčinou',
        options: [
          'stredoslovenčinou',
          'západoslovenčinou',
          'latinčinou',
          'češtinou',
        ],
      },
    ],
  },
  {
    id: 'matica-ssv',
    scope: 'grade5-h2',
    sentence:
      'Slovenský biskup Moyzes a kňazi Radlinský a Palárik rozvíjali v druhej polovici 19. storočia slovenskú kultúru v Matici slovenskej a Spolku svätého Vojtecha.',
    prompts: [
      {
        prompt:
          'Kto rozvíjal slovenskú kultúru v Matici slovenskej a Spolku svätého Vojtecha?',
        answer: 'Moyzes, Radlinský a Palárik',
        options: [
          'Moyzes, Radlinský a Palárik',
          'Bernolák, Štúr a Hlinka',
          'Tiso, Korec a Mikloško',
          'Masaryk, Štefánik a Pázmaň',
        ],
      },
      {
        prompt:
          'V ktorých spolkoch rozvíjali Moyzes, Radlinský a Palárik slovenskú kultúru?',
        answer: 'v Matici slovenskej a Spolku svätého Vojtecha',
        options: [
          'v Matici slovenskej a Spolku svätého Vojtecha',
          'v Trnavskej univerzite a Istropolitane',
          'v Československej republike',
          'v tajnej Cirkvi',
        ],
      },
    ],
  },
  {
    id: 'czechoslovakia-1918',
    scope: 'grade5-h2',
    sentence:
      'Prvá československá republika vznikla v roku 1918 a prezidentom bol Tomáš G. Masaryk.',
    prompts: [
      {
        prompt: 'V ktorom roku vznikla prvá československá republika?',
        answer: '1918',
        options: ['1787', '1843', '1918', '1993'],
      },
      {
        prompt: 'Kto bol prezidentom prvej československej republiky?',
        answer: 'Tomáš G. Masaryk',
        options: [
          'Tomáš G. Masaryk',
          'M. R. Štefánik',
          'Andrej Hlinka',
          'Jozef Tiso',
        ],
      },
    ],
  },
  {
    id: 'stefanik',
    scope: 'grade5-h2',
    sentence:
      'M. R. Štefánik bol vedec, politik a generál vo francúzskej armáde, ktorý bol spoluzakladateľ Československej republiky.',
    prompts: [
      {
        prompt:
          'Kto bol vedec, politik, generál a spoluzakladateľ Československej republiky?',
        answer: 'M. R. Štefánik',
        options: [
          'M. R. Štefánik',
          'Tomáš G. Masaryk',
          'Andrej Hlinka',
          'Jozef Tiso',
        ],
      },
      {
        prompt: 'V akej armáde bol M. R. Štefánik generálom?',
        answer: 'vo francúzskej armáde',
        options: [
          'vo francúzskej armáde',
          'v rakúskej armáde',
          'v nemeckej armáde',
          'v uhorskej armáde',
        ],
      },
    ],
  },
  {
    id: 'hlinka',
    scope: 'grade5-h2',
    sentence:
      'Andrej Hlinka bol ružomberský farár a politik, ktorý bojoval za práva a autonómiu Slovákov v Uhorsku a potom aj v Československu.',
    prompts: [
      {
        prompt:
          'Ktorý ružomberský farár bojoval za práva a autonómiu Slovákov?',
        answer: 'Andrej Hlinka',
        options: [
          'Andrej Hlinka',
          'Jozef Tiso',
          'M. R. Štefánik',
          'Anton Bernolák',
        ],
      },
      {
        prompt: 'Za čo bojoval Andrej Hlinka?',
        answer: 'za práva a autonómiu Slovákov',
        options: [
          'za práva a autonómiu Slovákov',
          'za zrušenie Československa',
          'za vznik Istropolitany',
          'za kremnickú mincovňu',
        ],
      },
    ],
  },
  {
    id: 'slovak-state-tiso',
    scope: 'grade5-h2',
    sentence:
      'Slovenský štát s prezidentom Jozefom Tisom bol v 2. svetovej vojne spojencom Nemecka.',
    prompts: [
      {
        prompt:
          'Kto bol prezidentom Slovenského štátu počas 2. svetovej vojny?',
        answer: 'Jozef Tiso',
        options: [
          'Jozef Tiso',
          'Andrej Hlinka',
          'Tomáš G. Masaryk',
          'Ján Korec',
        ],
      },
      {
        prompt: 'Čím bol Slovenský štát v 2. svetovej vojne voči Nemecku?',
        answer: 'spojencom Nemecka',
        options: [
          'spojencom Nemecka',
          'nepriateľom Nemecka',
          'súčasťou Francúzska',
          'súčasťou Sovietskeho zväzu',
        ],
      },
    ],
  },
  {
    id: 'secret-church',
    scope: 'grade5-h2',
    sentence:
      'Časť Cirkvi musela počas komunizmu v Československu pôsobiť tajne a viedli ju biskup Ján Korec, Vladimír Jukl, Silvester Krčméry či František Mikloško.',
    prompts: [
      {
        prompt:
          'Ako musela pôsobiť časť Cirkvi počas komunizmu v Československu?',
        answer: 'tajne',
        options: [
          'tajne',
          'ako štátna armáda',
          'ako univerzita',
          'ako mincovňa',
        ],
      },
      {
        prompt: 'Kto patril medzi vodcov tajnej Cirkvi počas komunizmu?',
        answer: 'Ján Korec',
        options: ['Ján Korec', 'Peter Pázmaň', 'Karol Róbert', 'Belo IV.'],
      },
    ],
  },
  {
    id: 'velvet-revolution',
    scope: 'grade5-h2',
    sentence:
      'Nežná revolúcia 17. novembra 1989 bola začiatkom konca komunistickej totality v ČSR.',
    prompts: [
      {
        prompt: 'Kedy bola Nežná revolúcia?',
        answer: '17. novembra 1989',
        options: [
          '17. novembra 1989',
          '1. 1. 1993',
          'v roku 1918',
          'v roku 1843',
        ],
      },
      {
        prompt: 'Čo začala Nežná revolúcia?',
        answer: 'koniec komunistickej totality v ČSR',
        options: [
          'koniec komunistickej totality v ČSR',
          'vznik Uhorska',
          'vpád Mongolov',
          'založenie Trnavskej univerzity',
        ],
      },
    ],
  },
  {
    id: 'slovak-republic-1993',
    scope: 'grade5-h2',
    sentence: 'Slovenská republika vznikla 1. 1. 1993.',
    prompts: [
      {
        prompt: 'Kedy vznikla Slovenská republika?',
        answer: '1. 1. 1993',
        options: [
          '1. 1. 1993',
          '17. novembra 1989',
          'v roku 1918',
          'v roku 1843',
        ],
      },
    ],
  },
];
