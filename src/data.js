// leki
const medications = [
  {
    id: 'adenozyna',
    name: 'Adenozyna (Adenocor/Soladen)', // [cite: 1]
    shortDescription: 'Napadowe częstoskurcze nadkomorowe.', // [cite: 4]
    vialSize: 'Fiolka: 6 mg / 2 ml', // [cite: 2]
    doses: 'Dorośli: 6 mg -> 12 mg -> 18 mg (wg ChPL: 3->6->12). Dzieci: 0,1 mg/kg -> 0,2 mg/kg.', // [cite: 11, 12, 13, 14, 15, 17, 18]
    dosesAdults: [
      { label: 'I dawka', text: '6 mg i.v.' },
      { label: 'II dawka', text: '12 mg i.v.' },
      { label: 'III dawka', text: '18 mg i.v.' }
    ],
    dosesChildren: [
      { label: 'I dawka', text: '0,1 mg/kg i.v.' },
      { label: 'II dawka', text: '0,2 mg/kg i.v.' }
    ],
    indications: 'Częstoskurcze nadkomorowe, diagnozowanie i różnicowanie częstoskurczu.', // [cite: 4, 5]
    contraindications: 'Blok A-V II i III st., zespół chorego węzła, niewydolność serca, astma, długie QT.', // [cite: 7, 8, 9, 10]
    administration: 'Szybki bolus i.v. (w ciągu 2 sekund), natychmiast przepłukać solą.' // [cite: 12, 17]
  },
  {
    id: 'adrenalina',
    name: 'Adrenalina', // [cite: 19]
    shortDescription: 'NZK, wstrząs anafilaktyczny, astma.', // [cite: 22, 23, 24]
    vialSize: 'Amp.: 1 mg / 1 ml (1:1000)', // [cite: 20]
    doses: 'Dorośli NZK: 1 mg. Anafilaksja: 500 µg. Dzieci NZK: 10 µg/kg.', // [cite: 30, 31, 36]
    dosesAdults: [
      { label: 'NZK', text: '1 mg i.v./i.o. co 3–5 min' },
      { label: 'Anafilaksja', text: '0,5 mg i.m.' },
      {label: 'Napad astmy', text: '0,3 mg i.m.'},
      {label: 'Wstrząs kardiogenny', text: '0,05-0,5 mg/kg/min'},
      {label: 'Ciężka bradykardia oporna na atropinę', text: '2-10 mcg/min'},
    ],
    dosesChildren: [
      { label: 'NZK', text: '10 µg/kg i.v./i.o.' }
    ],
    indications: 'Nagłe zatrzymanie krążenia, wstrząs anafilaktyczny, napad astmy, wstrząs kardiogenny.', // [cite: 22, 23, 24, 25]
    contraindications: 'Hipowolemia bezwzględna, przełom nadciśnieniowy (Brak przeciwwskazań w stanach zagrożenia życia).', // [cite: 27, 28]
    administration: 'NZK: i.v. lub i.o. (rozc. w 10 ml 0,9% NaCl). Anafilaksja: i.m. Wlew: i.v.' // [cite: 30, 31, 33]
  },
  {
    id: 'amiodaron',
    name: 'Amiodaron (Cordarone/Amiocordin)', // [cite: 40]
    shortDescription: 'NZK (VF/pVT), komorowe zaburzenia rytmu.', // [cite: 43, 45]
    vialSize: 'Amp.: 150 mg / 3 ml', // [cite: 41]
    doses: 'Dorośli NZK: 300 mg po 3 def. -> 150 mg po 5 def. Dzieci NZK: 5 mg/kg.', // [cite: 54, 57]
    dosesAdults: [
      { label: 'NZK', text: '300 mg po 3 defibrylacjach' },
      { label: 'NZK (dalsze)', text: '150 mg po 5 defibrylacjach' }
    ],
    dosesChildren: [
      { label: 'NZK', text: '5 mg/kg' }
    ],
    indications: 'VF, pVT, VT, AF', // [cite: 43, 44, 46]
    contraindications: 'Bradykardia zatokowa, blok A-V, zaburzenia tarczycy, hipokaliemia.', // [cite: 49, 50, 51, 52]
    administration: 'NZK: i.v./i.o. z szybkiego wstrzyknięcia (rozc. w 5% glukozie). W częstoskurczu wlew w 20-60 min.' // [cite: 54, 55, 57]
  },
  {
    id: 'atropina',
    name: 'Atropina', // [cite: 58]
    shortDescription: 'Bradykardia, zatrucia (np. fosforoorganiczne).', // [cite: 62, 63]
    vialSize: 'Amp.: 0,5 mg lub 1 mg / 1 ml', // [cite: 59]
    doses: 'Dorośli NZK: 3 mg. Bradykardia: do max 3 mg. Dzieci NZK: 20 µg/kg.', // [cite: 69, 70, 72]
    dosesAdults: [
      { label: 'NZK', text: '3 mg' },
      { label: 'Bradykardia', text: 'po 0.5mg do max 3 mg' }
    ],
    dosesChildren: [
      { label: 'NZK', text: '20 µg/kg' }
    ],
    indications: 'NZK (wpływ n. błędnego), bradykardia zatokowa, zatrucia zw. fosforoorganicznymi i grzybami.', // [cite: 61, 62, 63, 64]
    contraindications: 'Zaburzenia drożności dróg moczowych/pokarmowych, pacjent po przeszczepie serca.', // [cite: 66, 67]
    administration: 'i.v. lub i.o., w zatruciach możliwe i.m.' // [cite: 69, 72, 74]
  },
  {
    id: 'budesonide',
    name: 'Budesonide (Pulmicort/Nebbud)', // [cite: 75]
    shortDescription: 'Astma oskrzelowa, krup.', // [cite: 78, 79]
    vialSize: 'Fiolka: 0,25, 0,5 lub 1 mg / 2 ml', // [cite: 76]
    doses: 'Dorośli: 1-2 mg/dobę. Dzieci: Astma - 0,25-0,5 mg/dobę. Krup - 1-2 mg.', // [cite: 83, 85, 86]
    dosesAdults: [
      { label: 'Dawka', text: '1-2 mg/dobę (nebulizacja)' }
    ],
    dosesChildren: [
      { label: 'Astma', text: '0,25-0,5 mg/dobę' },
      { label: 'Krup', text: '1-2 mg' }
    ],
    indications: 'Napad astmy oskrzelowej, zespół krupu (ostre zapalenie krtani).', // [cite: 78, 79]
    contraindications: 'Uczulenie na lek.', // [cite: 81]
    administration: 'W nebulizacji (wziewnie).' // [cite: 83, 85, 86]
  },
  {
    id: 'captopril',
    name: 'Captopril / Kaptopryl', // [cite: 87]
    shortDescription: 'Nadciśnienie tętnicze.', // [cite: 90]
    vialSize: 'Tabl. 12,5 mg, 25 mg, 50 mg', // [cite: 88]
    doses: 'Dorośli: 25-50 mg (w 2 dawkach). Dzieci: 0,3 mg/kg.', // [cite: 98, 100]
    dosesAdults: [
      { label: 'Dawka', text: '25-50 mg (w 2 dawkach)' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '0,3 mg/kg' }
    ],
    indications: 'Nadciśnienie tętnicze, niewydolność krążenia.', // [cite: 90, 91]
    contraindications: 'Obrzęk naczynioruchowy, zwężenie tętnic nerkowych, hiperkalemia, ciąża.', // [cite: 93, 94, 95, 96]
    administration: 'Podjęzykowo (p.o. - rozgryźć/rozpuścić pod językiem dla szybkiego efektu).' // [cite: 88, 98]
  },
  {
    id: 'clemastin',
    name: 'Clemastin (Klemastyna)', // [cite: 102]
    shortDescription: 'Wstrząs anafilaktyczny, alergie.', // [cite: 105]
    vialSize: 'Amp.: 2 mg / 2 ml', // [cite: 103]
    doses: 'Dorośli: 2 mg. Dzieci (>3 r.ż.): 25-50 µg/kg.', // [cite: 109, 111, 112]
    dosesAdults: [
      { label: 'Dawka', text: '2 mg' }
    ],
    dosesChildren: [
      { label: '>3 r.ż.', text: '25-50 µg/kg' }
    ],
    indications: 'Wstrząs anafilaktyczny, obrzęk naczynioruchowy.', // [cite: 105]
    contraindications: 'Nie podawać u dzieci < 3 r.ż., niezalecana < 12 r.ż.', // [cite: 107]
    administration: 'i.v. (powoli) lub i.m.' // [cite: 109, 112]
  },
  {
    id: 'clonazepam',
    name: 'Clonazepam (Rivotril)', // [cite: 113]
    shortDescription: 'Napady drgawek, epilepsja.', // [cite: 116]
    vialSize: 'Amp.: 1 mg / 1 ml', // [cite: 114]
    doses: 'Dorośli: 1 mg. Dzieci: 0,5 mg.', // [cite: 120, 122]
    dosesAdults: [
      { label: 'Dawka', text: '1 mg' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '0,5 mg' }
    ],
    indications: 'Przeciwdziałanie napadom drgawek, padaczka.', // [cite: 116]
    contraindications: 'Uczulenie na lek.', // [cite: 118]
    administration: 'i.v. (rozcieńczony, w powolnym wstrzyknięciu) lub i.m.' // [cite: 120, 122]
  },
  {
    id: 'clopidogrel',
    name: 'Clopidogrelum (Plavix)', // [cite: 123]
    shortDescription: 'Ostry zespół wieńcowy (OZW).', // [cite: 126]
    vialSize: 'Tabl. 75 mg', // [cite: 124]
    doses: 'Dorośli: 300 mg (dawka nasycająca w OZW). Dzieci: brak danych.', // [cite: 132, 134]
    dosesAdults: [
      { label: 'Dawka nasycająca', text: '300 mg p.o.' }
    ],
    dosesChildren: [],
    indications: 'Ostry zespół wieńcowy, miażdżyca.', // [cite: 126, 127]
    contraindications: 'Ciężka choroba wątroby, czynne krwawienie.', // [cite: 129, 130]
    administration: 'Doustnie (p.o.).' // [cite: 132]
  },
  {
    id: 'deksametazon',
    name: 'Deksametazon (Dexaven)', // [cite: 135]
    shortDescription: 'Ostre odczyny uczuleniowe, obrzęki.', // [cite: 138, 142]
    vialSize: 'Amp.: 4 mg / 1 ml, 8 mg / 2 ml', // [cite: 136]
    doses: 'Dorośli: 4-8 mg (można zwiększyć). Dzieci: 0,2-0,4 mg/kg.', // [cite: 147, 149]
    dosesAdults: [
      { label: 'Dawka', text: '4-8 mg i.v. (można zwiększyć)' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '0,2-0,4 mg/kg' }
    ],
    indications: 'Alergie, stany spastyczne oskrzeli, obrzęk mózgu/głośni, wstrząs.', // [cite: 138, 140, 141, 142, 143]
    contraindications: 'W ostrych stanach zagrażających życiu brak istotnych przeciwwskazań.', // [cite: 145]
    administration: 'i.v. (powoli).' // [cite: 147, 149]
  },
  {
    id: 'diazepam',
    name: 'Diazepam (Relanium/Relsed)',
    shortDescription: 'Drgawki, ostre stany lękowe.',
    vialSize: 'Amp.: 5 mg lub 10 mg / 2 ml',
    doses: 'Dorośli: 5-10 mg. Dzieci: 200-300 µg/kg (lub 1 mg/rok życia).',
    dosesAdults: [
      { label: 'Dawka', text: '5-10 mg' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '200-300 µg/kg (lub 1 mg/rok życia)' }
    ],
    indications: 'Napad drgawek, stan padaczkowy, pobudzenie ruchowe, agresja.',
    contraindications: 'Ostra niewydolność oddechowa.',
    administration: 'i.v., i.o., i.m., p.r.'
  },
  {
    id: 'fentanyl',
    name: 'Fentanyl',
    shortDescription: 'Silny ból (np. uraz, OZW).',
    vialSize: 'Amp.: 100 µg / 2 ml',
    doses: 'Dorośli (spontaniczny oddech): 50-200 µg. Dzieci: 1-3 µg/kg.',
    dosesAdults: [
      { label: 'Spontaniczny oddech', text: '50-200 µg' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '1-3 µg/kg' }
    ],
    indications: 'Leczenie silnych bólów, hamowanie oddechu (oddech wspomagany).',
    contraindications: 'Choroby zatorowe płuc, depresja ośrodka oddechowego.',
    administration: 'i.v.'
  },
  {
    id: 'flumazenil',
    name: 'Flumazenil (Anexate)',
    shortDescription: 'Zatrucie benzodiazepinami (odtrutka).',
    vialSize: 'Amp.: 0,5 mg / 5 ml',
    doses: 'Dorośli: 0,2 mg co 60s (max 1 mg). Dzieci: 0,01 mg/kg (max 0,2 mg).',
    dosesAdults: [
      { label: 'Dawka', text: '0,2 mg co 60 s (max 1 mg)' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '0,01 mg/kg (max 0,2 mg)' }
    ],
    indications: 'Znoszenie działania benzodiazepin.',
    contraindications: 'Stan padaczkowy leczony benzodiazepinami, zatrucia mieszane (z antydepresantami).',
    administration: 'i.v. (w ciągu 15s).'
  },
  {
    id: 'furosemid',
    name: 'Furosemid',
    shortDescription: 'Obrzęki (np. płuc), przełom nadciśnieniowy.',
    vialSize: 'Amp.: 20 mg / 2 ml',
    doses: 'Dorośli: 20-40 mg. Dzieci (<15 r.ż.): 0,5-1,5 mg/kg (max 20 mg).',
    dosesAdults: [
      { label: 'Dawka', text: '20-40 mg' }
    ],
    dosesChildren: [
      { label: '<15 r.ż.', text: '0,5-1,5 mg/kg (max 20 mg)' }
    ],
    indications: 'Obrzęk płuc, zastoinowa niewydolność krążenia, przełom nadciśnieniowy.',
    contraindications: 'Bezmocz, hipowolemia, odwodnienie, zaburzenia wodno-elektrolitowe.',
    administration: 'i.v.'
  },
  {
    id: 'gelofusine',
    name: 'Gelofusine',
    shortDescription: 'Wstrząs (płynoterapia).',
    vialSize: 'Worek: 1000 ml (40 g żelatyny)',
    doses: 'Dorośli i Dzieci: do 0,8 g (20 ml)/kg m.c./h.',
    dosesAdults: [
      { label: 'Wlew', text: 'do 0,8 g (20 ml)/kg m.c./h' }
    ],
    dosesChildren: [
      { label: 'Wlew', text: 'do 0,8 g (20 ml)/kg m.c./h' }
    ],
    indications: 'Wstrząs (hipowolemia bezwzględna).',
    contraindications: 'Ciężka niewydolność serca, przewodnienie, zaburzenia krzepnięcia, hipernatremia.',
    administration: 'i.v.'
  },
  {
    id: 'glukagon',
    name: 'Glukagon',
    shortDescription: 'Hipoglikemia, zatrucie beta-blokerami.',
    vialSize: 'Ampułkostrzykawka: 1 mg',
    doses: 'Dorośli i >25 kg: 1 mg. Dzieci <25 kg: 0,5 mg. Zatrucie b-blokerami: 50-150 µg/kg.',
    dosesAdults: [
      { label: '>25 kg', text: '1 mg' },
      { label: 'Zatrucie beta-blokerami', text: '50-150 µg/kg' }
    ],
    dosesChildren: [
      { label: '<25 kg', text: '0,5 mg' }
    ],
    indications: 'Hipoglikemia, ostre zatrucie beta-blokerami.',
    contraindications: 'Guz chromochłonny nadnerczy.',
    administration: 'i.m. lub s.c.'
  },
  {
    id: 'glukoza',
    name: 'Glukoza',
    shortDescription: 'Hipoglikemia.',
    vialSize: 'Amp. 20% (10 ml = 2 g). Worki 20% lub 5%',
    doses: 'Dorośli hipoglikemia: 200 mg/kg (NZK: 400 mg/kg). Dzieci: 0,3 g/kg.',
    dosesAdults: [
      { label: 'Hipoglikemia', text: '200 mg/kg' },
      { label: 'NZK', text: '400 mg/kg' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '0,3 g/kg' }
    ],
    indications: 'Hipoglikemia, żywienie pozajelitowe.',
    contraindications: 'Hiperglikemia, przewodnienie, hipokaliemia.',
    administration: 'i.v.'
  },
  {
    id: 'haes',
    name: 'Haes (Voluven 6%, 10%)',
    shortDescription: 'Wstrząs, hipowolemia.',
    vialSize: 'Worek: 1000 ml (60 lub 100 mg skrobi)',
    doses: 'Dorośli: Do 1,8 mg (18 ml)/kg m.c. Dzieci: nie zaleca się.',
    dosesAdults: [
      { label: 'Wlew', text: 'do 1,8 mg (18 ml)/kg m.c.' }
    ],
    dosesChildren: [
      { label: 'Dzieci', text: 'nie zaleca się' }
    ],
    indications: 'Wstrząs (hipowolemia bezwzględna).',
    contraindications: 'Sepsa, oparzenia, niewydolność narządowa, obrzęk płuc, krwawienie.',
    administration: 'i.v.'
  },
  {
    id: 'heparyna',
    name: 'Heparyna',
    shortDescription: 'OZW, zatorowość płucna.',
    vialSize: 'Fiolka: 25000 j.m. / 5 ml. Amp.: 5000 j.m. / 1 ml',
    doses: 'Dorośli: 5000 j.m. Dzieci: 50 j.m./kg.',
    dosesAdults: [
      { label: 'Dawka', text: '5000 j.m.' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '50 j.m./kg' }
    ],
    indications: 'Niestabilna dławica piersiowa (OZW), zator tętnicy płucnej, zakrzepica, DIC.',
    contraindications: 'Czynne krwawienia, krwotok śródczaszkowy, skazy krwotoczne, hemofilia.',
    administration: 'i.v. (lub s.c. dla mniejszych dawek).'
  },
  {
    id: 'hydrokortyzon',
    name: 'Hydrokortyzon (Corhydron)',
    shortDescription: 'Wstrząs, astma, ostre alergie.',
    vialSize: 'Fiolka: 25, 100, 250, 500 mg',
    doses: 'Dorośli: 100-250 mg (w stanach zagrożenia do 500 mg). Dzieci: 4-10 mg/kg.',
    dosesAdults: [
      { label: 'Dawka', text: '100-250 mg (do 500 mg w stanach zagrożenia)' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '4-10 mg/kg' }
    ],
    indications: 'Stany wstrząsowe (anafilaksja), stan astmatyczny, niedomoga nadnerczy.',
    contraindications: 'Grzybica układowa.',
    administration: 'i.v. (powoli) lub i.m.'
  },
  {
    id: 'hydroksyzyna',
    name: 'Hydroksyzyna',
    shortDescription: 'Lęk, pobudzenie ruchowe.',
    vialSize: 'Amp.: 100 mg',
    doses: 'Dorośli: 50-100 mg. Dzieci (>40 kg): 50-100 mg; (<40 kg): 1-2 mg/kg.',
    dosesAdults: [
      { label: 'Dawka', text: '50-100 mg' }
    ],
    dosesChildren: [
      { label: '>40 kg', text: '50-100 mg' },
      { label: '<40 kg', text: '1-2 mg/kg' }
    ],
    indications: 'Objawowe leczenie lęku, pobudzenia, świądu, premedykacja.',
    contraindications: 'Zesp. wydłużonego QT, porfiria, bradykardia, hipokaliemia.',
    administration: 'i.m.'
  },
  {
    id: 'ibuprofen',
    name: 'Ibuprofen',
    shortDescription: 'Ból, gorączka.',
    vialSize: 'Tabl.: 200 lub 400 mg',
    doses: 'Dorośli: 200-400 mg. Dzieci (>6 r.ż./20kg): 20-30 mg/kg na dobę.',
    dosesAdults: [
      { label: 'Dawka', text: '200-400 mg' }
    ],
    dosesChildren: [
      { label: '>6 r.ż./>20 kg', text: '20-30 mg/kg na dobę' }
    ],
    indications: 'Bóle o słabym do umiarkowanego nasileniu, gorączka.',
    contraindications: 'Niewydolność nerek/wątroby/serca, choroba wrzodowa, czynne krwawienie.',
    administration: 'i.v., p.o.'
  },
  {
    id: 'isosorbidi',
    name: 'Isosorbidi Mononitras (Sorbonit)',
    shortDescription: 'Dławica piersiowa.',
    vialSize: 'Tabl.: 10, 20 lub 40 mg',
    doses: 'Dorośli: 10-20 mg (2-3 razy na dobę). Dzieci: nie stosować.',
    dosesAdults: [
      { label: 'Dawka', text: '10-20 mg (2-3 razy na dobę)' }
    ],
    dosesChildren: [
      { label: 'Dzieci', text: 'nie stosować' }
    ],
    indications: 'Leczenie i zapobieganie napadom dławicy piersiowej.',
    contraindications: 'Hipotonia (<90 mmHg), wstrząs, tamponada serca, leki na erekcję.',
    administration: 'p.o.'
  },
  {
    id: 'ketonal',
    name: 'Ketonal (Ketoprofen)',
    shortDescription: 'Bóle pourazowe, pooperacyjne.',
    vialSize: 'Amp.: 100 mg / 2 ml',
    doses: 'Dorośli: 100-200 mg. Dzieci: nie wolno < 15 r.ż.!',
    dosesAdults: [
      { label: 'Dawka', text: '100-200 mg' }
    ],
    dosesChildren: [
      { label: 'Dzieci', text: 'nie wolno < 15 r.ż.' }
    ],
    indications: 'Bóle, RZS, choroba zwyrodnieniowa stawów.',
    contraindications: 'Uczulenie na lek.',
    administration: 'i.v. (duże rozcieńczenie: min. 100 ml 0,9% NaCl).'
  },
  {
    id: 'asa',
    name: 'Kwas acetylosalicylowy (ASA/Aspiryna)',
    shortDescription: 'Ostry zespół wieńcowy (OZW).',
    vialSize: 'Tabl.: 300 mg lub 500 mg',
    doses: 'Dorośli w OZW: 160-325 mg. Dzieci: brak danych.',
    dosesAdults: [
      { label: 'OZW', text: '160-325 mg' }
    ],
    dosesChildren: [],
    indications: 'OZW, zapobieganie zakrzepicy, stany gorączkowe.',
    contraindications: 'Czynna choroba wrzodowa, skazy krwotoczne.',
    administration: 'Doustnie (p.o.).'
  },
  {
    id: 'exacyl',
    name: 'Kwas traneksamowy (Exacyl)',
    shortDescription: 'Krwotoki, urazy.',
    vialSize: 'Amp.: 500 mg / 5 ml',
    doses: 'Dorośli: 1 g (i.v.). Dzieci (>1 r.ż.): 20 mg/kg.',
    dosesAdults: [
      { label: 'Dawka', text: '1 g i.v.' }
    ],
    dosesChildren: [
      { label: '>1 r.ż.', text: '20 mg/kg' }
    ],
    indications: 'Krwawienie po urazie, z dróg rodnych, z przewodu pokarmowego.',
    contraindications: 'Ostra zakrzepica, ciężka niewydolność nerek, krwiomocz.',
    administration: 'i.v. lub i.m. (podzielić dawkę).'
  },
  {
    id: 'lignocaina',
    name: 'Lignocaina (Lidocaina)',
    shortDescription: 'Komorowe zaburzenia rytmu (VF/pVT).',
    vialSize: 'Fiolka 10 ml: 100 mg (1%) lub 200 mg (2%)',
    doses: 'Dorośli: 100 mg (opcjonalny bolus 50 mg). Dzieci: 0,8-1 mg/kg.',
    dosesAdults: [
      { label: 'Bolus', text: '100 mg' },
      { label: 'Dodatkowo', text: 'opcjonalnie 50 mg' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '0,8-1 mg/kg' }
    ],
    indications: 'VF/pVT (gdy brak amiodaronu), znieczulenie miejscowe.',
    contraindications: 'Wstrząs, blok A-V II i III st., uszkodzenie wątroby.',
    administration: 'i.v., i.o.'
  },
  {
    id: 'magnez',
    name: 'Magnez (MgSO4 20%)',
    shortDescription: 'Torsade de pointes, astma.',
    vialSize: 'Amp.: 2 g / 10 ml',
    doses: 'Dorośli (Torsade): 2 g w 1-2 min. Astma: 1,2-2 g w 20 min. Dzieci: 50 mg/kg (max 2g).',
    dosesAdults: [
      { label: 'Torsade', text: '2 g w 1-2 min' },
      { label: 'Astma', text: '1,2-2 g w 20 min' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '50 mg/kg (max 2 g)' }
    ],
    indications: 'Torsade de pointes, hipomagnezemia, oporna obturacja oskrzeli.',
    contraindications: 'Hipermagnezemia, blok serca, uszkodzenie mięśnia sercowego.',
    administration: 'i.v., i.o. (zależnie od wskazań szybkość wlewu).'
  },
  {
    id: 'mannitol',
    name: 'Mannitol 15%',
    shortDescription: 'Obrzęk mózgu, uraz głowy.',
    vialSize: 'Flakony: 100ml (15g), 250ml (37,5g), 500ml (75g)',
    doses: 'Dawka testowa (dorośli i dzieci): 200 mg/kg.',
    dosesAdults: [
      { label: 'Dawka testowa', text: '200 mg/kg' }
    ],
    dosesChildren: [
      { label: 'Dawka testowa', text: '200 mg/kg' }
    ],
    indications: 'Zmniejszenie ciśnienia wewnątrzczaszkowego, zwiększanie diurezy.',
    contraindications: 'Zastoinowa niewydolność krążenia (obrzęk płuc), bezmocz, krwawienie wewnątrzczaszkowe.',
    administration: 'i.v.'
  },
  {
    id: 'metoclopramid',
    name: 'Metoclopramid',
    shortDescription: 'Nudności, wymioty.',
    vialSize: 'Amp.: 10 mg / 2 ml',
    doses: 'Dorośli: 10 mg. Dzieci: 0,15 mg/kg.',
    dosesAdults: [
      { label: 'Dawka', text: '10 mg' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '0,15 mg/kg' }
    ],
    indications: 'Nudności, wymioty różnego pochodzenia, refluks.',
    contraindications: 'Ostre choroby jamy brzusznej, niedrożność, padaczka, guz chromochłonny.',
    administration: 'i.v. (powoli).'
  },
  {
    id: 'metoprolol',
    name: 'Metoprolol',
    shortDescription: 'Nadciśnienie, zaburzenia rytmu serca.',
    vialSize: 'Fiolka: 5 mg / 5 ml',
    doses: 'Dorośli: 5 mg (powtarzać co 5 min, max 20 mg). Dzieci: brak inf.',
    dosesAdults: [
      { label: 'Dawka', text: '5 mg (powtarzać co 5 min, max 20 mg)' }
    ],
    dosesChildren: [],
    indications: 'Nadciśnienie tętnicze, zaburzenia rytmu, dławica piersiowa.',
    contraindications: 'Blok A-V II i III st., niewyrównana niewydolność serca, bradykardia zatokowa.',
    administration: 'i.v. (wolno 1-2 mg/min).'
  },
  {
    id: 'midazolam',
    name: 'Midanium (Midazolam)',
    shortDescription: 'Sedacja, drgawki.',
    vialSize: 'Amp.: 5 mg / 1 ml lub 5 ml',
    doses: 'Dorośli sedacja: 2-2,5 mg (<60 lat), 0,5-1 mg (>60 lat). Dzieci: 0,05-0,2 mg/kg.',
    dosesAdults: [
      { label: '<60 lat', text: '2-2,5 mg' },
      { label: '>60 lat', text: '0,5-1 mg' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '0,05-0,2 mg/kg' }
    ],
    indications: 'Sedacja z zachowaniem świadomości, premedykacja, znieczulenie.',
    contraindications: 'Ostra niewydolność oddechowa, ostre zatrucie alkoholem.',
    administration: 'i.v.'
  },
  {
    id: 'morfina',
    name: 'Morfina',
    shortDescription: 'Silny ból, OZW, obrzęk płuc.',
    vialSize: 'Amp.: 10 mg lub 20 mg / 1 ml',
    doses: 'Dorośli: 3-5 mg (frakcjonowanie). Dzieci: 100-200 µg/kg.',
    dosesAdults: [
      { label: 'Dawka', text: '3-5 mg (frakcjonowanie)' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '100-200 µg/kg' }
    ],
    indications: 'OZW, obrzęk płuc, umiarkowane do bardzo silnych bólów.',
    contraindications: 'Urazy głowy, nadciśnienie śródczaszkowe, upośledzenie oddychania, zatrucie alkoholem.',
    administration: 'i.v., i.o., i.m.'
  },
  {
    id: 'naloxon',
    name: 'Naloxon (Narcan)',
    shortDescription: 'Zatrucie opioidami (odtrutka).',
    vialSize: 'Amp.: 400 µg (0,4 mg) / 1 ml',
    doses: 'Dorośli: 0,4-2 mg. Dzieci (<20kg): 0,01 mg/kg (NZK: 0,1 mg/kg).',
    dosesAdults: [
      { label: 'Dawka', text: '0,4-2 mg' }
    ],
    dosesChildren: [
      { label: '<20 kg', text: '0,01 mg/kg (NZK: 0,1 mg/kg)' }
    ],
    indications: 'Zatrucie opioidami, wyprowadzenie ze znieczulenia.',
    contraindications: 'Ostrożnie u osób uzależnionych od opioidów.',
    administration: 'i.v., i.o., i.m.'
  },
  {
    id: 'nitrogliceryna',
    name: 'Nitrogliceryna (Nitromint)',
    shortDescription: 'OZW, ból dławicowy, obrzęk płuc.',
    vialSize: 'Aerozol/Tabl.: 400 µg (0,4 mg)',
    doses: 'Dorośli: 400 µg co 5 min (max 3 dawki).',
    dosesAdults: [
      { label: 'Dawka', text: '400 µg co 5 min (max 3 dawki)' }
    ],
    dosesChildren: [],
    indications: 'Doraźne leczenie bólu dławicowego, OZW, obrzęk płuc.',
    contraindications: 'Ciśnienie skurczowe < 90 mmHg, uraz czaszkowo-mózgowy.',
    administration: 'Podjęzykowo (s.l).'
  },
  {
    id: 'nospa',
    name: 'Drotaweryna (No-Spa)',
    shortDescription: 'Skurcze (np. kolki).',
    vialSize: 'Amp.: 40 mg / 2 ml',
    doses: 'Dorośli: 40-80 mg. Dzieci: 20 mg.',
    dosesAdults: [
      { label: 'Dawka', text: '40-80 mg' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: '20 mg' }
    ],
    indications: 'Skurcze mięśni gładkich, kolki, bolesne skurcze w p. pok.',
    contraindications: 'Uczulenie na lek.',
    administration: 'i.v.'
  },
  {
    id: 'noradrenalina',
    name: 'Noradrenalina (Levonor)',
    shortDescription: 'Niedociśnienie (wstrząs).',
    vialSize: 'Amp.: 1 mg',
    doses: 'Dorośli: Wlew 0,05-1,5 µg/kg/min (zwykle start 0,4-0,8 mg/h).',
    dosesAdults: [
      { label: 'Wlew', text: '0,05-1,5 µg/kg/min (zwykle start 0,4-0,8 mg/h)' }
    ],
    dosesChildren: [],
    indications: 'Niedociśnienie tętnicze.',
    contraindications: 'Niedociśnienie po zawale (w stanach zagrożenia życia brak p/wskazań).',
    administration: 'Wlew i.v.'
  },
  {
    id: 'papaweryna',
    name: 'Papaweryna',
    shortDescription: 'Stany spastyczne (kolki).',
    vialSize: 'Amp.: 40 mg / 2 ml',
    doses: 'Dorośli: 40-120 mg. Dzieci: nie stosować.',
    dosesAdults: [
      { label: 'Dawka', text: '40-120 mg' }
    ],
    dosesChildren: [
      { label: 'Dzieci', text: 'nie stosować' }
    ],
    indications: 'Stany spastyczne mięśni gładkich (kolka żółciowa, jelitowa, nerkowa).',
    contraindications: 'Zaburzenia przewodnictwa w mięśniu sercowym.',
    administration: 'i.m., s.c.'
  },
  {
    id: 'paracetamol',
    name: 'Paracetamol',
    shortDescription: 'Ból, gorączka.',
    vialSize: 'Fiolka: 1000 mg / 100 ml',
    doses: 'Dorośli: 1 g (i.v.) lub 0,5-1 g (p.o.). Dzieci (>33kg): 10-15 mg/kg (i.v.).',
    dosesAdults: [
      { label: 'i.v.', text: '1 g' },
      { label: 'p.o.', text: '0,5-1 g' }
    ],
    dosesChildren: [
      { label: '>33 kg', text: '10-15 mg/kg i.v.' }
    ],
    indications: 'Leczenie umiarkowanego bólu i gorączki.',
    contraindications: 'Ciężka choroba wątroby i nerek, choroba alkoholowa.',
    administration: 'i.v., p.o., p.r.'
  },
  {
    id: 'prasugrel',
    name: 'Prasugrel (Efient)',
    shortDescription: 'OZW.',
    vialSize: 'Tabl.: 5 mg, 10 mg',
    doses: 'Dorośli: 60 mg p.o. (często z ASA).',
    dosesAdults: [
      { label: 'Dawka', text: '60 mg p.o.' }
    ],
    dosesChildren: [],
    indications: 'Zawał mięśnia sercowego (OZW), udar niedokrwienny.',
    contraindications: 'Ciężka niewydolność wątroby, czynne krwawienia.',
    administration: 'p.o.'
  },
  {
    id: 'pwe',
    name: 'Płyn wieloelektrolitowy (PWE)',
    shortDescription: 'Odwodnienie, płynoterapia.',
    vialSize: 'Worki infuzyjne',
    doses: 'Dorośli i dzieci: Bolus 10 ml/kg w hipotensji.',
    dosesAdults: [
      { label: 'Bolus', text: '10 ml/kg w hipotensji' }
    ],
    dosesChildren: [
      { label: 'Bolus', text: '10 ml/kg w hipotensji' }
    ],
    indications: 'Wyrównanie zaburzeń wodno-elektrolitowych.',
    contraindications: 'Niewydolność nerek, hipernatremia/kaliemia/kalcemia, hiperwolemia.',
    administration: 'Wlew i.v.'
  },
  {
    id: 'pyralgina',
    name: 'Metamizol (Pyralgina)',
    shortDescription: 'Silny ból, gorączka, skurcze.',
    vialSize: 'Amp.: 1 g / 2 ml, 2,5 g / 5 ml',
    doses: 'Dorośli: 0,5-1 g. Dzieci (zależnie od wagi np. 9-15kg: 100-250 mg).',
    dosesAdults: [
      { label: 'Dawka', text: '0,5-1 g' }
    ],
    dosesChildren: [
      { label: 'wg wagi', text: 'np. 9–15 kg: 100–250 mg' }
    ],
    indications: 'Silne bóle, gorączka, bóle mięśniówki gładkiej (spazmolityczne).',
    contraindications: 'Ciężka niewydolność nerek/wątroby, hipotensja.',
    administration: 'i.v., i.m.'
  },
  {
    id: 'salbutamol',
    name: 'Salbutamol (Ventolin)',
    shortDescription: 'Obturacja oskrzeli (astma).',
    vialSize: 'Fiolka: 2,5 mg lub 5 mg / 2,5 ml',
    doses: 'Dorośli i Dzieci >2 r.ż.: 5 mg. Dzieci <2 r.ż.: 2,5 mg.',
    dosesAdults: [
      { label: '>2 r.ż.', text: '5 mg' }
    ],
    dosesChildren: [
      { label: '>2 r.ż.', text: '5 mg' },
      { label: '<2 r.ż.', text: '2,5 mg' }
    ],
    indications: 'Odwracalna obturacja oskrzeli (astma, POChP).',
    contraindications: 'Brak (w nebulizacji).',
    administration: 'Nebulizacja (wziewnie).'
  },
  {
    id: 'nacl',
    name: 'Sól fizjologiczna (NaCl 0.9%)',
    shortDescription: 'Rozpuszczalnik, wstrząs, płynoterapia.',
    vialSize: 'Różne pojemności (amp, worki)',
    doses: 'Dorośli i Dzieci: Bolus 10 ml/kg w hipotensji.',
    dosesAdults: [
      { label: 'Bolus', text: '10 ml/kg w hipotensji' }
    ],
    dosesChildren: [
      { label: 'Bolus', text: '10 ml/kg w hipotensji' }
    ],
    indications: 'Odwodnienie, wstrząs, rozpuszczalnik do leków.',
    contraindications: 'Przewodnienie, niewydolność nerek i krążenia.',
    administration: 'i.v.'
  },
  {
    id: 'ringer',
    name: 'Solutio Ringeri',
    shortDescription: 'Hipowolemia, oparzenia.',
    vialSize: 'Worki infuzyjne',
    doses: 'Dorośli i Dzieci: Bolus 10 ml/kg w hipotensji.',
    dosesAdults: [
      { label: 'Bolus', text: '10 ml/kg w hipotensji' }
    ],
    dosesChildren: [
      { label: 'Bolus', text: '10 ml/kg w hipotensji' }
    ],
    indications: 'Hipowolemia (oparzenia), odwodnienie, niedobory elektrolitów.',
    contraindications: 'Niewydolność nerek, przewodnienie, obrzęk płuc, hiper-elektrolitemie.',
    administration: 'i.v.'
  },
  {
    id: 'ticagrelor',
    name: 'Ticagrelor (Brilique)',
    shortDescription: 'OZW.',
    vialSize: 'Tabl.: 90 mg',
    doses: 'Dorośli: 180 mg (z ASA).',
    dosesAdults: [
      { label: 'Dawka', text: '180 mg (z ASA)' }
    ],
    dosesChildren: [],
    indications: 'Zawał mięśnia sercowego (OZW), udar niedokrwienny.',
    contraindications: 'Choroba wątroby umiarkowana/ciężka, czynne krwawienia.',
    administration: 'p.o.'
  },
  {
    id: 'tlen',
    name: 'Tlen medyczny (O2)',
    shortDescription: 'Hipoksja.',
    vialSize: 'Butla',
    doses: 'Dorośli i Dzieci: Indywidualnie w zależności od stanu pacjenta.',
    dosesAdults: [
      { label: 'Dawka', text: 'Indywidualnie wg stanu pacjenta' }
    ],
    dosesChildren: [
      { label: 'Dawka', text: 'Indywidualnie wg stanu pacjenta' }
    ],
    indications: 'Hipoksja, zatrucie CO, urazy, NZK, schorzenia układu oddechowego.',
    contraindications: 'Hipoksja histotoksyczna, ostrożnie w hiperkarbii.',
    administration: 'Wziewnie (maska, wąsy itp.).'
  },
  {
    id: 'torecan',
    name: 'Thiethylperazine (Torecan)',
    shortDescription: 'Nudności, zawroty głowy.',
    vialSize: 'Czopek: 6,5 mg. Amp.: 6,5 mg/ml',
    doses: 'Dorośli: 6,5-19,5 mg (max dobowa 19,5 mg). Dzieci <15 r.ż.: P/Wskazane.',
    dosesAdults: [
      { label: 'Dawka', text: '6,5-19,5 mg (max dobowa 19,5 mg)' }
    ],
    dosesChildren: [
      { label: '<15 r.ż.', text: 'przeciwwskazane' }
    ],
    indications: 'Leczenie i zapobieganie nudnościom, wymiotom i zawrotom głowy.',
    contraindications: 'Zaburzenia świadomości, istotna hipotensja, depresja OUN.',
    administration: 'p.r., i.m., i.v.'
  },
  {
    id: 'urapidil',
    name: 'Urapidil (Ebrantil)',
    shortDescription: 'Nagłe nadciśnienie, udar mózgu.',
    vialSize: 'Amp.: 25, 50 lub 100 mg',
    doses: 'Dorośli: 10-50 mg (max dobowa 100 mg). Dzieci <18 r.ż.: nie zaleca się.',
    dosesAdults: [
      { label: 'Dawka', text: '10-50 mg (max dobowa 100 mg)' }
    ],
    dosesChildren: [
      { label: '<18 r.ż.', text: 'nie zaleca się' }
    ],
    indications: 'Znaczne nadciśnienie tętnicze, udar mózgu.',
    contraindications: 'Stenoza aortalna, przetoki naczyniowe.',
    administration: 'i.v.'
  },
  {
    id: 'wodoroweglan',
    name: 'Wodorowęglan Sodu (8,4%)',
    shortDescription: 'Kwasica, zatrucia.',
    vialSize: 'Amp.: 20 ml (1 ml = 1 mEq)',
    doses: 'Dorośli i Dzieci: 1 mEq/kg (u dzieci <2 lat powoli).',
    dosesAdults: [
      { label: 'Dawka', text: '1 mEq/kg' }
    ],
    dosesChildren: [
      { label: '<2 lata', text: '1 mEq/kg (podawać powoli)' },
      { label: '≥2 lata', text: '1 mEq/kg' }
    ],
    indications: 'Kwasica metaboliczna, zatrucia (TCA, salicylany).',
    contraindications: 'Zasadowica, hipowentylacja, hipokalcemia, niewydolność krążenia.',
    administration: 'i.v.'
  },
    
];

// Schematy
const protocols = [
  {
    id: 'abcde',
    title: 'Badanie pacjenta',
    iconName: 'stethoscope',
    subtitle: 'Ocena wg. schematu ABCDE',
    sections: [
      {
        key: 'A',
        title: 'drogi oddechowe',
        bullets: [
          'Sprawdź drożność dróg oddechowych i oceń czy są zagrożone',
          'Odpowiada? drożność zachowana',
          'Nieprzytomny? czoło–żuchwa, wysunięcie żuchwy',
          'Rozważ przyrządowe udrożnienie dróg oddechowych'
        ]
      },
      {
        key: 'B',
        title: 'oddech',
        bullets: [
          'Sprawdź oddech wg schematu RTWO',
          'R – respiratory rate: ilość oddechów/min',
          'T – tidal volume: objętość oddechowa',
          'W – work of breathing: wysiłek oddechowy',
          'O – oxygenation: podłącz SpO₂ (pulsoksymetr)'
        ]
      },
      {
        key: 'C',
        title: 'krążenie',
        bullets: [
          'Sprawdź tętno na tt. promieniowej i szyjnej; oceń miarowość i napięcie',
          'Podłącz mankiet i sprawdź NiBP (ew. Korotkow i manualne BP)',
          'Oceń tętno (HR)',
          'Sprawdź CRT (ocena pod kątem wstrząsu)',
          'Podłącz 4‑odpr. EKG lub wykonaj 12‑odpr. EKG',
          'Skóra: zimna? spocona? blada?'
        ]
      },
      {
        key: 'D',
        title: 'ocena neurologiczna',
        bullets: [
          'Oznacz poziom glikemii',
          'Sprawdź źrenice',
          'Jeżeli są przesłanki – sprawdź objawy oponowe',
          'Sprawdź orientację auto‑ i allopsychiczną',
          'Oceń obustronną siłę mięśniową'
        ]
      },
      {
        key: 'E',
        title: 'ekspozycja',
        bullets: [
          'Sprawdź nogi: obrzęki? ucieplenie prawidłowe?',
          'Czy są przesłanki urazu?',
          'Jeżeli nieprzytomny – sprawdź, czy nie ma plastra z morfiną/fentanylem'
        ]
      }
    ]
  },
  {
    id: 'wywiad-sample',
    title: 'Wywiad z pacjentem',
    iconName: 'clipboard-list',
    subtitle: 'Wywiad wg. schematu SAMPLE',
    sections: [
      {
        key: 'S',
        title: 'ymptoms: symptomy',
        bullets: [
          'Co się dzieje?',
          'Od kiedy to się dzieje?',
          'Gdzie boli? Skala bólu NRS? (jeżeli boli)'
        ]
      },
      {
        key: 'A',
        title: 'llergies: alergie',
        bullets: [
          'Głównie alergie na leki',
          'Przy podejrzeniu anafilaksji pytanie o alergen (alergie pokarmowe etc.)'
        ]
      },
      {
        key: 'M',
        title: 'edications: przyjmowane leki',
        bullets: [
          'Jakie leki stosuje?',
          'Czy bierze je regularnie?',
          'Jakie dawki, w których godzinach?',
          'Czy przyjął je przed przybyciem?'
        ]
      },
      {
        key: 'P',
        title: 'ast medical history: przeszłość chorobowa',
        bullets: [
          'Czy na coś choruje?',
          'Przebyte operacje?',
          'Czy jest w ciąży (jeżeli kobieta)'
        ]
      },
      {
        key: 'L',
        title: 'unch: posiłek',
        bullets: [
          'Kiedy był ostatnio spożywany posiłek?',
          'Co to było?'
        ]
      },
      {
        key: 'E',
        title: 'vents prior to injury: wydarzenia/ewentualności',
        bullets: [
          'Czy wie co się wydarzyło?',
          'Czy niepokoi coś więcej?',
          'Co było robione gdy nastąpiło pogorszenie stanu?'
        ]
      }
    ]
  },
  {
    id: 'intubacja',
    title: 'Intubacja',
    iconName: 'clipboard-list',
    subtitle: 'Check lista wg. schematu SPEED-BOMB',
    sections: [
    {
      key: 'S',
      title: 'uction',
      bullets: [
        'ssak',
        'cewniki do odsysania'
      ]
    },
    {
      key: 'P',
      title: 'ositioning',
      bullets: [
        'odpowiednia pozycja ciała i głowy'
      ]
    },
    {
      key: 'E',
      title: 'quipment for intubation',
      bullets: [
        'laryngoskop i łyżki w różnych rozmiarach',
        '3 rurki intubacyjne jedna docelowy rozmiar, 2 +- 0,5 rozmiaru',
        'prowadnice, zwykła i bougie'
      ]
    },
    {
      key: 'E',
      title: 'nd-tidal CO2',
      bullets: [
        'czujnik pomiaru EtCO2'
      ]
    },
    {
      key: 'D',
      title: 'rugs and IV access',
      bullets: [
        'leki (sedacja,analgezja,zwiotczenie)',
        'dostęp donaczyniowy: 2x i.v lub i.o'
      ]
    },
    {
      key: 'B',
      title: 'ack up airway ready',
      bullets: [
        'alternatywy dla intubacji',
        'iGel, maska krtaniowa, zestaw do konikopunkcji/konikotomii'
      ]
    },
    {
      key: 'O',
      title: 'xygen',
      bullets: [
        'tlen z przepływem 15l/min'
      ]
    },
    {
      key: 'M',
      title: 'onitoring minimum',
      bullets: [
        'EKG',
        'NiBP',
        'HR',
        'SpO2',
        'EtCO2'
      ]
    },
    {
      key: 'B',
      title: 'riefing',
      bullets: [
        'omówienie/podział ról w zespole'
      ]
    }
    ]
  },
  {
    id: 'intubacja-pogorszenie',
    title: 'Pogorszenie stanu pacjenta zaintubowanego',
    iconName: 'clipboard-list',
    subtitle: 'Kontrola wg. schematu DOPES',
    sections: [
      {
        key: 'D',
        title: 'isplacement',
        bullets: [
          'ekstubacja',
          'przemieszczenie się rurki intubacyjnej'
        ]
      },
      {
        key: 'O',
        title: 'bstruction',
        bullets: [
          'zatkanie',
          'zagięcie rurki intubacyjnej'
        ]
      },
      {
        key: 'P',
        title: 'atient',
        bullets: [
          'odma prężna',
          'skurcz oskrzeli'
        ]
      },
      {
        key: 'E',
        title: 'quipment',
        bullets: [
          'uszkodzenie/awaria/rozłączenie sprzętu',
          'brak tlenu'
        ]
      },
      {
        key: 'S',
        title: 'tomach',
        bullets: [
          'intubacja przełyku'
        ]
      }
    ]
  },
    {
    id: 'ocena-bolu',
    title: 'Ocena bólu',
    iconName: 'clipboard-list',
    subtitle: 'ocena bólu wg. schematu OLDCART',
    sections: 
    [
      {
        key: 'O',
        title: 'kreślenie czasu',
        bullets: [
          'Od kiedy boli?'
        ]
      },
      {
        key: 'L',
        title: 'okalizacja',
        bullets: [
          'Jaka jest lokalizacja bólu?'
        ]
      },
      {
        key: 'D',
        title: 'ynamika',
        bullets: [
          'Jaka jest dynamika bólu wg. skali NRS?'
        ]
      },
      {
        key: 'C',
        title: 'harakter',
        bullets: [
          'Jaki jest charakter bólu?'
        ]
      },
      {
        key: 'A',
        title: 'gresywność / Czynniki nasilające',
        bullets: [
          'W jakich okolicznościach ból zwiększa swoje nasilenie?'
        ]
      },
      {
        key: 'R',
        title: 'elaksacja / Czynniki zmniejszające ból',
        bullets: [
          'W jakich okolicznościach ból zmniejsza swoje nasilenie?'
        ]
      },
      {
        key: 'T',
        title: 'owarzyszące objawy',
        bullets: [
          'Jakie są dodatkowe objawy, występujące łącznie z bólem?'
        ]
      }
    ]
  },
];

// Objawy
const symptoms = [
  {
    id: 'oponowe',
    title: 'Objawy oponowe',
    sections: [
      {
        title: 'Objaw Brudzińskiego',
        items: [
          { label: 'Karkowy', children: [
            'przyciągnięcie brody pacjenta do kl.p. powoduje <span class="text-red-400 font-semibold">reakcję zgięciową nóg</span>'
          ]},
          { label: 'Policzkowy', children: [
            'uciśnięcie z obydwu stron miejsca pod kością jarzmową powoduje <span class="text-red-400 font-semibold">reakcję zgięciową rąk</span>'
          ]},
          { label: 'Dolny', children: [
            'uciśnięcie spojenia łonowego powoduje <span class="text-red-400 font-semibold">reakcję zgięciową nóg</span>'
          ]}
        ]
      },
      {
        title: 'Objaw Kerniga',
        items: [
          { label: 'Górny', children: [
            'zgięcie w tułowiu pacjenta powoduje <span class="text-red-400 font-semibold">reakcję zgięciową nóg</span>'
          ]},
          { label: 'Dolny', children: [
            'zgięcie kończyny dolnej w stawie biodrowym oraz kolanowym, następnie próba wyprostu w stawie kolanowym, <span class="text-red-400 font-semibold">opór znaczy o obecnym objawie</span>'
          ]}
        ]
      },
      {
        title: 'Objaw Flataua',
        items: [
          { label: 'Górny', children: [
            'Zgięcie pacjenta w tułowiu/przyciąganie głowy do kl.p. powoduje <span class="text-red-400 font-semibold">odruchowe powiększenie się źrenic</span>'
          ]},
          { label: 'Dolny (erekcyjny)', children: [
            'U małych chłopców podczas wielokrotnego pochylania może <span class="text-red-400 font-semibold">dojść do erekcji</span>'
          ]}
        ]
      },
      {
        title: 'Dodatkowe objawy',
        items: [
          {label: 'Gorączka'},
          {label: 'Zaburzenia świadomości'},
          {label: 'Silny ból głowy'},
          {label: 'Wymioty'}
        ]
      }
    ],
    note: 'Wystąpienie objawów, które są wytłuszczone i na czerwono świadczą o obecnym objawie!'
  },
  {
    id: 'otrzewnowe',
    title: 'Objawy otrzewnowe',
    sections: [
      {
        title: 'Objaw Blumberga',
        items: [
          { label: 'Jak robimy', children: [
            'Uciskamy powłoki brzuszne i szybko puszczamy'
          ]},
          { label: 'Obecny świadczy o czym?', children: [
            '<span class="text-red-400 font-semibold">Ból wywołany podczas puszczenia oznacza objaw obecny i świadczy o rozlanym zapaleniu otrzewnej</span>'
          ]}
        ]
      },
      {
        title: 'Objaw Jaworskiego',
        items: [
          { label: 'Jak robimy', children: [
            'Unosimy wyprostowaną prawą kończynę dolną i powoli opuszczamy, uciskając okolicę kąta pępkowo‑biodrowego'
          ]},
          { label: 'Obecny świadczy o czym?', children: [
            '<span class="text-red-400 font-semibold">Dodatni objaw sugeruje zapalenie wyrostka robaczkowego</span>'
          ]}
        ]
      },
      {
        title: 'Objaw Murphy’ego',
        items: [
          { label: 'Jak robimy', children: [
            'Ucisk pod prawym łukiem żebrowym podczas głębokiego wdechu'
          ]},
          { label: 'Obecny świadczy o czym?', children: [
            '<span class="text-red-400 font-semibold">Nagły ból i zatrzymanie wdechu wskazują ostre zapalenie pęcherzyka żółciowego</span>'
          ]}
        ]
      },
      {
        title: 'Objaw Chełmońskiego',
        items: [
          { label: 'Jak robimy', children: [
            'Delikatne wstrząsanie/uderzenie pod prawym łukiem żebrowym'
          ]},
          { label: 'Obecny świadczy o czym?', children: [
            '<span class="text-red-400 font-semibold">Ból świadczy o drażnieniu wątroby lub pęcherzyka żółciowego</span>'
          ]}
        ]
      },
      {
        title: 'Objaw Rovsinga',
        items: [
          { label: 'Jak robimy', children: [
            'Ucisk lewego dołu biodrowego z przesuwaniem gazów jelitowych ku kątnicy'
          ]},
          { label: 'Obecny świadczy o czym?', children: [
            '<span class="text-red-400 font-semibold">Ból w prawym dole biodrowym sugeruje zapalenie wyrostka robaczkowego</span>'
          ]}
        ]
      },
      {
        title: 'Objaw Goldflama',
        items: [
          { label: 'Jak robimy', children: [
            'Uderzenie/opukiwanie w okolicy kąta żebrowo‑kręgosłupowego'
          ]},
          { label: 'Obecny świadczy o czym?', children: [
            '<span class="text-red-400 font-semibold">Ból świadczy o podrażnieniu nerki (kolka nerkowa, odmiedniczkowe zapalenie)</span>'
          ]}
        ]
      }
    ]
  }
];
