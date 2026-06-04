export type ReligionScope =
  | 'grade1-h1'
  | 'grade1-h2'
  | 'grade2-h1'
  | 'grade2-h2'
  | 'grade3-h1'
  | 'grade3-h2'
  | 'grade4-h1'
  | 'grade4-h2';

export const religionScopeOptions: { id: ReligionScope; label: string }[] = [
  { id: 'grade1-h1', label: '1. ročník I. polrok' },
  { id: 'grade1-h2', label: '1. ročník II. polrok' },
  { id: 'grade2-h1', label: '2. ročník I. polrok' },
  { id: 'grade2-h2', label: '2. ročník II. polrok' },
  { id: 'grade3-h1', label: '3. ročník I. polrok' },
  { id: 'grade3-h2', label: '3. ročník II. polrok' },
  { id: 'grade4-h1', label: '4. ročník I. polrok' },
  { id: 'grade4-h2', label: '4. ročník II. polrok' },
];

export type ReligionFact = {
  id: string;
  scope: ReligionScope;
  prompt: string;
  answer: string;
};

export const religionFacts: ReligionFact[] = [
  {
    id: 'god',
    scope: 'grade1-h1',
    prompt: 'Kto je Boh?',
    answer: 'Boh je Pán celého sveta a náš Nebeský otec.',
  },
  {
    id: 'world-created',
    scope: 'grade1-h1',
    prompt: 'Ako vznikol svet?',
    answer: 'Svet stvoril Pán Boh.',
  },
  {
    id: 'scripture',
    scope: 'grade1-h1',
    prompt: 'Čo je Sväté písmo?',
    answer:
      'Sväté Písmo (Biblia) je Božie slovo, ktoré bolo napísané z vnuknutia Ducha Svätého.',
  },
  {
    id: 'god-eternal',
    scope: 'grade1-h1',
    prompt: 'Odkedy je a dokedy bude Boh?',
    answer: 'Boh vždy bol a vždy bude. Boh je večný.',
  },
  {
    id: 'god-everywhere',
    scope: 'grade1-h1',
    prompt: 'Kde je Boh?',
    answer: 'Boh je všade: na nebi, na zemi a na každom mieste.',
  },
  {
    id: 'israelites-messiah',
    scope: 'grade1-h1',
    prompt: 'Koho očakávali Izraeliti?',
    answer: 'Izraeliti očakávali Mesiáša.',
  },
  {
    id: 'mary',
    scope: 'grade1-h1',
    prompt: 'Kto je Panna Mária?',
    answer: 'Panna Mária je Božia matka, teda mama Pána Ježiša.',
  },
  {
    id: 'world-purpose',
    scope: 'grade1-h1',
    prompt: 'Prečo Boh stvoril svet?',
    answer: 'Svet bol stvorený na Božiu slávu.',
  },
  {
    id: 'jesus-christ',
    scope: 'grade1-h2',
    prompt: 'Kto je Ježiš Kristus?',
    answer:
      'Ježiš Kristus je druhá božská osoba, jednorodený Syn Boží, ktorý sa pre nás stal človekom.',
  },
  {
    id: 'son-became-man',
    scope: 'grade1-h2',
    prompt: 'Prečo sa stal Boží Syn človekom?',
    answer: 'Syn Boží sa stal človekom, aby nás vykúpil a spasil.',
  },
  {
    id: 'human-like-god',
    scope: 'grade1-h2',
    prompt: 'V čom sa človek podobá Bohu?',
    answer:
      'Človek sa podobá Bohu tým, že má nesmrteľnú dušu, rozum a slobodnú vôľu.',
  },
  {
    id: 'jesus-teaching',
    scope: 'grade1-h2',
    prompt: 'Čo Ježiš učil?',
    answer:
      'Ježišovo učenie sa nazýva evanjelium, čo v slovenčine znamená radostná novina alebo blahozvesť.',
  },
  {
    id: 'last-supper-gift',
    scope: 'grade1-h2',
    prompt: 'Čo nám zanechal Pán Ježiš počas Poslednej večere?',
    answer: 'Svoje Telo a Krv v Eucharistii.',
  },
  {
    id: 'jesus-died',
    scope: 'grade1-h2',
    prompt: 'Prečo Pán Ježiš zomrel?',
    answer: 'Pán Ježiš za nás zomrel, aby nás spasil, čiže nám otvoril nebo.',
  },
  {
    id: 'mass',
    scope: 'grade1-h2',
    prompt: 'Čo je svätá omša?',
    answer:
      'Svätá omša je obeta, v ktorej Ježiš Kristus pod spôsobmi chleba a vína obetuje sám seba Bohu.',
  },
  {
    id: 'holy-spirit',
    scope: 'grade1-h2',
    prompt: 'Kto je Duch Svätý?',
    answer:
      'Duch Svätý je tretia božská osoba, opravdivý Boh s Otcom i so Synom.',
  },
  {
    id: 'mission',
    scope: 'grade1-h2',
    prompt:
      'Ako znie poslanie, ktoré dal Pán Ježiš svojim učeníkom pri svojom odchode k Nebeskému Otcovi?',
    answer: 'Choďte do celého sveta a hlásajte evanjelium všetkému stvoreniu.',
  },
  {
    id: 'church',
    scope: 'grade1-h2',
    prompt: 'Ako sa volá Boží ľud, ktorý Pán Ježiš založil na Zemi?',
    answer: 'Boží ľud, ktorý Pán Ježiš založil na Zemi, sa volá Cirkev.',
  },
  {
    id: 'world-purpose-human',
    scope: 'grade2-h1',
    prompt: 'Načo sme na svete?',
    answer:
      'Na svete sme na to, aby sme spoznávali Pána Boha, naučili sa Ho milovať a prišli k Nemu do neba.',
  },
  {
    id: 'salvation-first',
    scope: 'grade2-h1',
    prompt: 'Čo máme robiť v prvom rade, ak chceme byť spasení?',
    answer:
      'Ak chceme byť spasení, máme v prvom rade veriť všetko, čo Boh zjavil.',
  },
  {
    id: 'why-believe',
    scope: 'grade2-h1',
    prompt: 'Prečo veríme všetko, čo Boh zjavil?',
    answer:
      'Všetko, čo Boh zjavil, veríme. Preto, lebo svätý Boh nemôže klamať. Preto, lebo vševediaci Boh sa nemôže mýliť.',
  },
  {
    id: 'angels',
    scope: 'grade2-h1',
    prompt: 'Čo sú anjeli?',
    answer:
      'Anjeli sú duchovia, ktorí majú rozum a slobodnú vôľu, ale telo ako my nemajú.',
  },
  {
    id: 'commandments-first-five',
    scope: 'grade2-h1',
    prompt: 'Vymenuj prvých 5 Božích prikázaní z 10 Božích prikázaní.',
    answer:
      '1. Ja som Pán, tvoj Boh! Nebudeš mať okrem mňa iných bohov, ktorým by si sa klaňal.\n2. Nevezmeš Božie meno nadarmo.\n3. Pamätaj, že máš svätiť sviatočné dni.\n4. Cti svojho otca i svoju matku.\n5. Nezabiješ.',
  },
  {
    id: 'commandments-last-five',
    scope: 'grade2-h1',
    prompt: 'Vymenuj posledných 5 Božích prikázaní z 10 Božích prikázaní.',
    answer:
      '6. Nezosmilníš.\n7. Nepokradneš.\n8. Nebudeš krivo svedčiť proti svojmu blížnemu.\n9. Nebudeš žiadostivo túžiť po manželke svojho blížneho.\n10. Nebudeš túžiť po majetku svojho blížneho.',
  },
  {
    id: 'joyful-rosary',
    scope: 'grade2-h1',
    prompt: 'Aké sú tajomstvá radostného ruženca?',
    answer:
      '1. Ktorého si, Panna, z Ducha Svätého počala.\n2. Ktorého si, Panna, pri návšteve Alžbety v živote nosila.\n3. Ktorého si, Panna, v Betleheme porodila.\n4. Ktorého si, Panna, v chráme so svätým Jozefom obetovala.\n5. Ktorého si, Panna, v chráme so svätým Jozefom našla.',
  },
  {
    id: 'tribes-israel',
    scope: 'grade2-h2',
    prompt: 'Aké boli mená 12 kmeňov Izraela?',
    answer:
      'Ruben, Simeon, Júda, Dan, Neftali, Gad, Aser, Isachar, Zabulon, Efraim, Manasses, Benjamín.',
  },
  {
    id: 'levi',
    scope: 'grade2-h2',
    prompt:
      'Potomkovia ktorého Jakubovho syna nedostali žiadne územie? Aká bola ich úloha?',
    answer: 'Léviho potomstvo. Stali sa služobníkmi a kňazmi v chráme.',
  },
  {
    id: 'mark-start',
    scope: 'grade2-h2',
    prompt: 'Ako sa začína evanjelium podľa Marka?',
    answer:
      'Začiatok evanjelia Ježiša Krista, Božieho Syna. Prorok Izaiáš napísal: Hľa, posielam svojho posla pred tvojou tvárou a on ti pripraví cestu.',
  },
  {
    id: 'john-start',
    scope: 'grade2-h2',
    prompt: 'Ako sa začína evanjelium podľa Jána?',
    answer:
      'Na počiatku bolo Slovo a Slovo bolo u Boha a to Slovo bolo Boh. Ono bolo na počiatku u Boha.',
  },
  {
    id: 'sorrowful-rosary',
    scope: 'grade2-h2',
    prompt: 'Aké sú tajomstvá bolestného ruženca?',
    answer:
      '1. Ktorý sa pre nás krvou potil.\n2. Ktorý bol pre nás bičovaný.\n3. Ktorý bol pre nás tŕním korunovaný.\n4. Ktorý pre nás kríž niesol.\n5. Ktorý bol pre nás ukrižovaný.',
  },
  {
    id: 'seven-gifts',
    scope: 'grade2-h2',
    prompt: 'Vymenuj sedem darov Ducha Svätého.',
    answer:
      '1. Dar múdrosti.\n2. Dar rozumu.\n3. Dar rady.\n4. Dar sily.\n5. Dar poznania.\n6. Dar nábožnosti.\n7. Dar bázne voči Bohu.',
  },
  {
    id: 'glorious-rosary',
    scope: 'grade2-h2',
    prompt: 'Aké sú tajomstvá slávnostného ruženca?',
    answer:
      '1. Ktorý slávne vstal z mŕtvych.\n2. Ktorý slávne vystúpil do neba.\n3. Ktorý nám zoslal Ducha Svätého.\n4. Ktorý ťa, Panna, vzal do neba.\n5. Ktorý ťa, Panna, v nebi korunoval.',
  },
  {
    id: 'luminous-rosary',
    scope: 'grade3-h1',
    prompt: 'Aké sú tajomstvá ruženca svetla?',
    answer:
      '1. Ktorý bol pokrstený v Jordáne.\n2. Ktorý zjavil seba samého na svadbe v Káne.\n3. Ktorý ohlasoval Božie kráľovstvo a pokánie.\n4. Ktorý sa premenil na hore Tábor.\n5. Ktorý ustanovil Oltárnu sviatosť.',
  },
  {
    id: 'corporal-mercy',
    scope: 'grade3-h1',
    prompt: 'Vymenuj skutky telesného milosrdenstva.',
    answer:
      '1. Dávať jesť hladným.\n2. Dávať piť smädným.\n3. Prichýliť pocestných.\n4. Odievať nahých.\n5. Navštevovať chorých.\n6. Poskytovať pomoc väzňom.\n7. Pochovávať mŕtvych.',
  },
  {
    id: 'pope',
    scope: 'grade3-h2',
    prompt: 'Kto je pápež?',
    answer:
      'Pán Ježiš urobil skalou svojej Cirkvi jedine Šimona, ktorému dal meno Peter. Pápež je rímsky biskup a nástupca svätého Petra.',
  },
  {
    id: 'under-your-protection',
    scope: 'grade3-h2',
    prompt: 'Ako znie modlitba Pod tvoju ochranu?',
    answer:
      'Pod tvoju ochranu sa utiekame, svätá Božia Rodička, neodvracaj zrak od našich prosieb, pomôž nám v núdzi a z každého nebezpečenstva nás vysloboď, ty Panna slávna a požehnaná. Amen.',
  },
  {
    id: 'isaiah-servant',
    scope: 'grade3-h2',
    prompt: 'Ako chápu kresťania Pánovho služobníka z Knihy proroka Izaiáša?',
    answer:
      'Kresťania veria, že prorok Izaiáš hovorí o prisľúbenom Mesiášovi, ktorým je Ježiš Kristus.',
  },
  {
    id: 'last-supper',
    scope: 'grade3-h2',
    prompt: 'Čo sa stalo pri Poslednej večeri?',
    answer:
      'Ježiš nad darmi chleba a vína predniesol slová: Toto je moje telo, ktoré sa dáva za vás. A ustanovil tým pamiatku na svoje spásne utrpenie.',
  },
  {
    id: 'church-commandments',
    scope: 'grade3-h2',
    prompt: 'Vymenuj päť cirkevných prikázaní.',
    answer:
      '1. V nedeľu a v prikázaný sviatok sa zúčastniť na svätej omši.\n2. Zachovávať prikázané dni pokánia.\n3. Aspoň raz v roku sa vyspovedať a vo Veľkonočnom období prijať Oltárnu sviatosť.\n4. Uzatvárať manželstvo pred tvárou Cirkvi.\n5. Podporovať cirkevné ustanovizne.',
  },
  {
    id: 'scripture-start',
    scope: 'grade4-h1',
    prompt: 'Ako začína Sväté písmo?',
    answer:
      'Kniha Genezis začína: Na počiatku stvoril Boh nebo a zem. Zem však bola pustá a prázdna, tma bola nad priepasťou a Duch Boží sa vznášal nad vodami. Tu povedal Boh: Buď svetlo! a bolo svetlo. Boh videl, že svetlo je dobré; i oddelil svetlo od tmy. A Boh nazval svetlo dňom a tmu nazval nocou.',
  },
  {
    id: 'passing-faith',
    scope: 'grade4-h1',
    prompt: 'Prečo odovzdávame vieru iným ľuďom?',
    answer:
      'Vieru odovzdávame ďalej, lebo nás Ježiš vyzval: Choďte teda, učte všetky národy a krstite ich v mene Otca i Syna i Ducha Svätého. (Mt 28,19)',
  },
  {
    id: 'viaticum',
    scope: 'grade4-h1',
    prompt: 'Čo je to viatikum?',
    answer:
      'Viatikum (pokrm na cestu) je Eucharistia, ktorú prijíma ten, kto sa chystá opustiť pozemský život a prejsť do života večného.',
  },
  {
    id: 'incarnation',
    scope: 'grade4-h1',
    prompt: 'Čo je to inkarnácia Božieho Syna?',
    answer:
      'Inkarnácia je vtelenie Božieho Syna. Boh sa stal človekom v Ježišovi Kristovi. V Kristovi sa neviditeľný Boh stáva viditeľným. Stáva sa človekom, ako sme my.',
  },
  {
    id: 'paul-letters',
    scope: 'grade4-h1',
    prompt: 'Vymenuj Listy apoštola Pavla.',
    answer:
      'List Rimanom (Rim), Prvý list Korinťanom (1 Kor), Druhý list Korinťanom (2 Kor), List Galaťanom (Gal), List Efezanom (Ef), List Filipanom (Flp), List Kolosanom (Kol), Prvý list Solúnčanom (1 Sol), Druhý list Solúnčanom (2 Sol), Prvý list Timotejovi (1 Tim), Druhý list Timotejovi (2 Tim), List Títovi (Tít), List Filemonovi (Flm).',
  },
  {
    id: 'theological-virtues',
    scope: 'grade4-h2',
    prompt: 'Čo sú to božské čnosti?',
    answer:
      'Božské (teologálne) čnosti sú viera, nádej a láska. Nazývajú sa božskými, pretože majú svoj pôvod v Bohu a nám ľuďom pomáhajú žiť v dôvernom spoločenstve s Bohom.',
  },
  {
    id: 'anger',
    scope: 'grade4-h2',
    prompt: 'Ako si má kresťan počínať s hnevom?',
    answer:
      'Apoštol Pavol hovorí: Hnevajte sa, ale nehrešte! Slnko nech nezapadá nad vaším hnevom. (Ef 4, 26)',
  },
  {
    id: 'true-god-true-man',
    scope: 'grade4-h2',
    prompt: 'Čo znamená, že Ježiš Kristus je zároveň pravý Boh a pravý človek?',
    answer:
      'V Ježišovi Kristovi sa Boh stal skutočne jedným z nás a naším bratom; a predsa nikdy neprestal byť Bohom, a tým aj naším Pánom.',
  },
  {
    id: 'fruit-holy-spirit',
    scope: 'grade4-h2',
    prompt: 'Čo je ovocie Ducha Svätého?',
    answer:
      'Ovocím Ducha Svätého je láska, radosť, pokoj, trpezlivosť, zhovievavosť, dobrota, láskavosť, vľúdnosť, vernosť, skromnosť, zdržanlivosť, čistota. (Gal 5, 22-23)',
  },
  {
    id: 'holy-orders',
    scope: 'grade4-h2',
    prompt: 'Koľko stupňov má sviatosť posvätného stavu?',
    answer:
      'Sviatosť posvätného stavu má tri stupne: biskupský stav (episkopát), kňazský stav (presbyterát), diakonský stav (diakonát).',
  },
];
