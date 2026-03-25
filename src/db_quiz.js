const quizQuestions = [
  // ==========================================
  // KATEGORIA: ALS
  // ==========================================
  {
    id: 1,
    category: "als",
    question: "Jaka jest pierwsza dawka Adrenaliny w rytmach do defibrylacji (VF/pVT)?",
    options: ["0.5 mg", "2 mg", "1 mg", "2 mg"],
    correct: 2,
    explanation: "Adrenalinę w rytmach defibrylacyjnych podajemy po 3. nieskutecznym wyładowaniu w dawce 1 mg i.v./i.o."
  },
  {
    id: 2,
    category: "als",
    question: "Dawka Amiodaronu po 3. defibrylacji wynosi:",
    options: ["150 mg", "300 mg", "450 mg", "1 mg/kg"],
    correct: 1,
    explanation: "Pierwsza dawka Amiodaronu w NZK (rytmy do defibrylacji) to 300 mg po 3. wyładowaniu."
  },
  {
    id: 3,
    category: "als",
    question: "Jaki jest stosunek uciśnięć klatki piersiowej do oddechów u dorosłych?",
    options: ["15:2", "30:1", "30:2", "10:1"],
    correct: 2,
    explanation: "Standardowy stosunek uciśnięć do oddechów u dorosłych wynosi 30:2."
  },
  {
    id: 4,
    category: "als",
    question: "Co oznacza litera 'P' w schemacie SAMPLE?",
    options: ["Posiłek", "Przeszłość chorobowa", "Puls", "Przyjmowane leki"],
    correct: 1,
    explanation: "P w SAMPLE to 'Past medical history', czyli przeszłość chorobowa."
  },
  {
    id: 5,
    category: "als",
    question: "Docelowa wartość EtCO2 podczas RKO powinna wynosić co najmniej:",
    options: ["5 mmHg", "10 mmHg", "15 mmHg", "20 mmHg"],
    correct: 2,
    explanation: "Podczas wysokiej jakości RKO wartość EtCO2 powinna przekraczać 15 mmHg. Nagły wzrost może świadczyć o ROSC."
  },
  {
    id: 6,
    category: "als",
    question: "Jaka jest dawka Atropiny w NZK (wg ChPL)?",
    options: ["0.5 mg", "1 mg", "3 mg", "Nie stosuje się rutynowo"],
    correct: 2,
    explanation: "Chociaż wytyczne ERC jej nie zalecają, ChPL Atropiny podaje dawkę 3 mg jako lek stosowany w NZK."
  },
  {
    id: 7,
    category: "als",
    question: "Co oznacza 'D' w schemacie DOPES?",
    options: ["Drugs", "Displacement", "Defibrillation", "Death"],
    correct: 1,
    explanation: "DOPES służy do rozwiązywania problemów z rurką intubacyjną: Displacement (przemieszczenie), Obstruction, Pneumothorax, Equipment, Stomach."
  },
  {
    id: 10,
    category: "als",
    question: "Objaw Blumberga świadczy o:",
    options: ["Zapaleniu wyrostka", "Podrażnieniu otrzewnej", "Kolce nerkowej", "Niedrożności jelit"],
    correct: 1,
    explanation: "Dodatni objaw Blumberga (ból przy nagłym zwolnieniu ucisku powłok brzusznych) świadczy o zapaleniu otrzewnej."
  },
  {
    id: 13,
    category: "als",
    question: "Ile punktów w skali GCS otrzyma pacjent otwierający oczy na polecenie, splątany, lokalizujący ból?",
    options: ["10", "11", "12", "13"],
    correct: 2,
    explanation: "Oczy: na polecenie (3), Mowa: splątana (4), Ruch: lokalizuje ból (5). Suma: 12 pkt."
  },
  {
    id: 14,
    category: "als",
    question: "Co oznacza 'H' w schemacie CHAMPIT?",
    options: ["Hypoxia", "Hypovolemia", "Hypertension", "Heart failure"],
    correct: 2,
    explanation: "CHAMPIT to przyczyny Ostrej Niewydolności Serca: C (ACS), H (Hypertension), A (Arrhythmia), M (Mechanical), P (Pulmonary embolism), I (Infection), T (Tamponade)."
  },
  {
    id: 16,
    category: "als",
    question: "Nie masz Amiodaronu, pacjent zatrzymał się w mechaniźmie VF, jaką dawkę lignokainy podasz po 3. defibrylacji?",
    options: ["50 mg", "100 mg", "150 mg", "200 mg"],
    correct: 1,
    explanation: "Jeśli Amiodaron jest niedostępny, w NZK (VF/pVT) podajemy Lignokainę 100 mg (lub 1-1.5 mg/kg)."
  },
  {
    id: 17,
    category: "als",
    question: "W jakim rytmie NZK podajemy adrenalinę jak najszybciej?",
    options: ["VF", "pVT", "Asystolia", "TdP"],
    correct: 2,
    explanation: "W rytmach nie do defibrylacji (asystolia, PEA) Adrenalinę podajemy tak szybko, jak to możliwe."
  },
  {
    id: 18,
    category: "als",
    question: "Co oznacza 'E' w schemacie ABCDE?",
    options: ["ECG", "Exposure", "Eyes", "Environment"],
    correct: 1,
    explanation: "E oznacza Exposure (ekspozycja / badanie przedmiotowe) przy jednoczesnym zapewnieniu komfortu cieplnego."
  },
  {
    id: 20,
    category: "als",
    question: "Który objaw oponowy polega na zgięciu nóg przy przygięciu głowy do klatki piersiowej?",
    options: ["Kerniga", "Brudzińskiego", "Flataua", "Goldflama"],
    correct: 1,
    explanation: "To górny objaw Brudzińskiego."
  },
  {
    id: 21,
    category: "als",
    question: "Częstotliwość uciśnięć klatki piersiowej w RKO to:",
    options: ["80-100/min", "100-120/min", "120-140/min", "Jak najszybciej"],
    correct: 1,
    explanation: "Zalecane tempo uciśnięć to 100-120 na minutę."
  },
  {
    id: 23,
    category: "als",
    question: "Siła defibrylacji (3. i kolejne wyładowanie) wynosi:",
    options: ["200 J", "300 J", "360 J", "150 J"],
    correct: 2,
    explanation: "Dla defibrylatorów jednofazowych jest to 360 J. Dla dwufazowych zazwyczaj 150-360 J (zaleca się dawkę maksymalną urządzenia)."
  },
  {
    id: 24,
    category: "als",
    question: "Skrót 'O' w schemacie SPEED-BOMB oznacza:",
    options: ["Obstruction", "Oxygen", "Oropharyngeal", "Observation"],
    correct: 1,
    explanation: "O to Oxygen (tlenoterapia)."
  },
  {
    id: 27,
    category: "als",
    question: "Co badamy w punkcie 'C' schematu ABCDE?",
    options: ["Oddech", "Drożność dróg", "Układ krążenia", "Glikemię"],
    correct: 2,
    explanation: "C to Circulation (krążenie) - tętno, czas nawrotu kapilarnego, kolor skóry, ciśnienie."
  },
  {
    id: 31,
    category: "als",
    question: "Objaw Murphy'ego sprawdza się pod:",
    options: ["Lewym łukiem żebrowym", "Prawym łukiem żebrowym", "Mostkiem", "Pępkiem"],
    correct: 1,
    explanation: "Objaw Murphy'ego sprawdza się pod prawym łukiem żebrowym w celu oceny pęcherzyka żółciowego."
  },
  {
    id: 33,
    category: "als",
    question: "Co oznacza 'L' w schemacie SAMPLE?",
    options: ["Leki", "Lunch (ostatni posiłek)", "Lokalizacja", "Lista objawów"],
    correct: 1,
    explanation: "L oznacza 'Last meal' (ostatni posiłek)."
  },
  {
    id: 36,
    category: "als",
    question: "Skala NRS służy do oceny:",
    options: ["Świadomości", "Oddechu", "Natężenia bólu", "Odwodnienia"],
    correct: 2,
    explanation: "NRS (Numerical Rating Scale) to skala numeryczna bólu od 0 do 10."
  },
  {
    id: 40,
    category: "als",
    question: "Co badamy w punkcie 'D' schematu ABCDE?",
    options: ["Krążenie", "Brzuch", "Neurologię i glikemię", "Osłuchiwanie płuc"],
    correct: 2,
    explanation: "D to Disability (deficyty neurologiczne) - skala GCS, reakcja źrenic, glikemia."
  },
  {
    id: 42,
    category: "als",
    question: "Objaw Rovsinga świadczy o zapaleniu:",
    options: ["Pęcherzyka", "Wyrostka robaczkowego", "Trzustki", "Nerek"],
    correct: 1,
    explanation: "Dodatni objaw Rovsinga (ból w prawym dole biodrowym przy ucisku lewego dołu biodrowego) sugeruje zapalenie wyrostka."
  },
  {
    id: 44,
    category: "als",
    question: "Co oznacza 'S' w schemacie DOPES?",
    options: ["Sedation", "Stomach (intubacja przełyku)", "Spasm", "Suction"],
    correct: 1,
    explanation: "S w DOPES oznacza intubację przełyku lub rozdyęcie żołądka (Stomach)."
  },
  {
    id: 46,
    category: "als",
    question: "Skrót 'A' w schemacie CHAMPIT oznacza:",
    options: ["Airway", "Arrythmia", "Anaphylaxis", "Acidosis"],
    correct: 1,
    explanation: "A to Arytmia jako przyczyna ostrej niewydolności serca."
  },
  {
    id: 48,
    category: "als",
    question: "Ile punktów w skali GCS to minimum?",
    options: ["0", "1", "3", "5"],
    correct: 2,
    explanation: "Minimum w skali GCS to 3 punkty (po 1 w każdej kategorii)."
  },
  {
    id: 49,
    category: "als",
    question: "Co oznacza 'M' w schemacie SPEED-BOMB?",
    options: ["Morphine", "Monitoring", "Mask", "Muscle relaxant"],
    correct: 1,
    explanation: "M to Monitoring (EKG, SpO2, RR)."
  },
  {
    id: 63,
    category: "als",
    question: "W 12-odprowadzeniowym EKG stwierdzasz uniesienia odcinka ST w odprowadzeniach II, III oraz aVF. Świadczy to najprawdopodobniej o zawale:",
    options: ["Ściany przedniej", "Ściany dolnej", "Ściany bocznej", "Prawej komory"],
    correct: 1,
    explanation: "II, III, aVF to odprowadzenia ściany dolnej."
  },
  {
    id: 64,
    category: "als",
    question: "Całkowity brak związku między załamkami P a zespołami QRS (przedsionki i komory pracują niezależnie) to w zapisie EKG cecha:",
    options: ["Bloku AV I stopnia", "Bloku AV II stopnia typu Wenckebacha", "Bloku AV III stopnia (całkowitego)", "Migotania przedsionków"],
    correct: 2,
    explanation: "To definicja bloku przedsionkowo-komorowego III stopnia."
  },
  {
    id: 65,
    category: "als",
    question: "Miarowy rytm z szerokimi kompleksami QRS (> 0.12 s) i częstością > 100/min u pacjenta niestabilnego hemodynamicznie należy traktować z definicji jako:",
    options: ["Częstoskurcz nadkomorowy (SVT)", "Migotanie przedsionków (AF)", "Częstoskurcz komorowy (VT)", "Trzepotanie przedsionków"],
    correct: 2,
    explanation: "Każdy częstoskurcz z szerokimi QRS u pacjenta niestabilnego traktujemy jako VT do czasu udowodnienia czegoś innego."
  },
  {
    id: 68,
    category: "als",
    question: "Na Triadę Cushinga (późny objaw wzmożonego ciśnienia śródczaszkowego) składają się:",
    options: ["Hipotensja, tachykardia, przyspieszony oddech", "Nadciśnienie tętnicze, bradykardia, nieregularny oddech", "Nadciśnienie tętnicze, tachykardia, bezdech", "Hipotensja, bradykardia, oddech Cheyne'a-Stokesa"],
    correct: 1,
    explanation: "Triada Cushinga: nadciśnienie, bradykardia, nieregularny oddech."
  },
  {
    id: 69,
    category: "als",
    question: "Wskaż prawidłowy skład Triady Becka, charakterystycznej dla tamponady worka osierdziowego:",
    options: ["Głośne tony serca, hipotensja, zapadnięte żyły szyjne", "Ściszone tony serca, nadciśnienie tętnicze, poszerzone żyły szyjne", "Ściszone tony serca, hipotensja, poszerzone żyły szyjne", "Trzeszczenia nad płucami, hipotensja, poszerzone żyły szyjne"],
    correct: 2,
    explanation: "Triada Becka: ściszone tony serca, hipotensja, poszerzone żyły szyjne."
  },
  {
    id: 70,
    category: "als",
    question: "Nagła duszność, kłujący ból w klatce piersiowej, tachykardia i krwioplucie. U pacjenta po długotrwałym unieruchomieniu objawy te najbardziej sugerują:",
    options: ["Odmę prężną", "Ostry Zespół Wieńcowy (OZW)", "Zatorowość płucną (PE)", "Kardiogenny obrzęk płuc"],
    correct: 2,
    explanation: "To typowe objawy zatorowości płucnej."
  },
  {
    id: 71,
    category: "als",
    question: "Różowa, spieniona plwocina u pacjenta z ekstremalną dusznością w pozycji leżącej (ortopnoe) i trzeszczeniami nad płucami to klasyczny objaw:",
    options: ["Astmy oskrzelowej", "Zaostrzenia POChP", "Kardiogennego obrzęku płuc", "Masywnego krwotoku do dróg oddechowych"],
    correct: 2,
    explanation: "To objawy ostrej lewokomorowej niewydolności serca i obrzęku płuc."
  },
  {
    id: 72,
    category: "als",
    question: "Niedowład połowiczy (jednostronne opadanie kącika ust, osłabienie siły mięśniowej kończyn) oraz afazja to objawy Ośrodkowego Układu Nerwowego wskazujące w warunkach ZRM głównie na:",
    options: ["Udar mózgu", "Guz mózgu", "Zapalenie opon mózgowych", "Stwardnienie rozsiane"],
    correct: 0,
    explanation: "To nagłe deficyty neurologiczne sugerujące udar mózgu."
  },
  {
    id: 90,
    category: "als",
    question: "U pacjenta stwierdzasz Blok AV 2 stopnia typu 1, HR: 30/min, 3mg Atropiny nie zadziałały, co robisz dalej?:",
    options: ["Stymulacja przezskórna", "Podaję 3mg Atropiny", "Podaję Adrenalinę w pompie 2-10 mcg/min", "Podaję 1 mg Adrenaliny i.v"],
    correct: 2,
    explanation: "Jeśli Atropina jest nieskuteczna, kolejnym krokiem są leki drugiego rzutu: adrenalina w pompie 2-10 mcg/min."
  },
  {
    id: 119,
    category: "als",
    question: "Energia pierwszej i kolejnych defibrylacji u dziecka w nagłym zatrzymaniu krążenia (NZK) wynosi:",
    options: ["2 J/kg m.c.", "4 J/kg m.c.", "10 J/kg m.c.", "150 J niezależnie od masy"],
    correct: 1,
    explanation: "Standardowa energia u dzieci to 4 J/kg."
  },
  {
    id: 120,
    category: "als",
    question: "W trakcie RKO u widocznie ciężarnej kobiety, aby uniknąć zespołu ucisku żyły głównej dolnej, kluczową modyfikacją jest:",
    options: ["Ręczne przesunięcie macicy na lewą stronę", "Uniesienie prawego boku pod kątem 45 stopni", "Uciskać dolną połowę mostka", "Zmniejszyć siłę i głębokość uciśnięć"],
    correct: 0,
    explanation: "Zaleca się ręczne przesunięcie macicy w lewo."
  },
  {
    id: 121,
    category: "als",
    question: "Docelowa saturacja (SpO2) u pacjenta z ostrym zaostrzeniem POChP (Przewlekła Obturacyjna Choroba Płuc) wynosi zazwyczaj:",
    options: ["94 - 98%", "98 - 100%", "88 - 92%", "80 - 85%"],
    correct: 2,
    explanation: "U pacjentów z POChP dążymy do 88-92%."
  },
  {
    id: 124,
    category: "als",
    question: "Zgodnie z aktualnymi wytycznymi ITLS, preferowanym miejscem wykonania igłowego odbarczenia odmy prężnej u dorosłego jest:",
    options: ["2. przestrzeń międzyżebrowa w linii środkowo-obojczykowej", "3. przestrzeń międzyżebrowa w linii przymostkowej", "5. przestrzeń międzyżebrowa w linii pachowej tylnej", "4. lub 5. przestrzeń międzyżebrowa w linii pachowej przedniej/środkowej"],
    correct: 3,
    explanation: "Nowe wytyczne preferują 4-5 przestrzeń międzyżebrową w linii pachowej przedniej."
  },
  {
    id: 127,
    category: "als",
    question: "Złote okno terapeutyczne (standardowe) dla dożylnego leczenia trombolitycznego w udarze niedokrwiennym mózgu wynosi od początku objawów:",
    options: ["1 godzina", "3 godziny", "4.5 godziny", "12 godzin"],
    correct: 2,
    explanation: "Okno dla trombolizy dożylnej to 4.5 godziny."
  },
  {
    id: 128,
    category: "als",
    question: "Według 'Reguły Dziewiątek', u dorosłego pacjenta oparzenie całej przedniej powierzchni tułowia (klatka piersiowa + brzuch) stanowi około:",
    options: ["9% powierzchni ciała", "18% powierzchni ciała", "27% powierzchni ciała", "36% powierzchni ciała"],
    correct: 1,
    explanation: "Przednia powierzchnia tułowia to 18% (9% klatka, 9% brzuch)."
  },
  {
    id: 129,
    category: "als",
    question: "Poniżej jakiej głębokiej temperatury ciała u pacjenta w głębokiej hipotermii (w trakcie NZK) NIE NALEŻY podawać żadnych leków resuscytacyjnych?",
    options: ["35°C", "32°C", "30°C", "28°C"],
    correct: 2,
    explanation: "Poniżej 30°C leki są nieskuteczne i mogą być toksyczne."
  },
  {
    id: 130,
    category: "als",
    question: "Po założeniu opaski uciskowej (stazy taktycznej np. CAT) na krwawiącą kończynę, należy obowiązkowo:",
    options: ["Zapisać czas jej założenia w widocznym miejscu", "Poluzować ją na 1 minutę co każdą godzinę", "Podać profilaktycznie lidokainę i.v.", "Opatrzyć kończynę luźnym opatrunkiem osłaniającym stazę"],
    correct: 0,
    explanation: "Zapisanie czasu założenia jest kluczowe dla dalszego leczenia."
  },
  {
    id: 132,
    category: "als",
    question: "U pacjenta z niepowikłanym zawałem mięśnia sercowego (OZW), który nie zgłasza duszności, tlenoterapię wdrażamy, gdy saturacja (SpO2) spadnie poniżej:",
    options: ["98%", "95%", "90%", "85%"],
    correct: 2,
    explanation: "W OZW tlen podajemy tylko gdy SpO2 < 90%."
  },

  // ==========================================
  // KATEGORIA: FARMAKOLOGIA
  // ==========================================
  {
    id: 8,
    category: "farmakologia",
    question: "Gdzie podajemy Adrenalinę w anafilaksji u dorosłych?",
    options: ["Dożylnie (i.v.)", "Domięśniowo (i.m.)", "Podskórnie (s.c.)", "Podjęzykowo (s.l.)"],
    correct: 1,
    explanation: "W anafilaksji drogą z wyboru dla Adrenaliny jest droga domięśniowa (i.m.) w przednio-boczną powierzchnię uda."
  },
  {
    id: 9,
    category: "farmakologia",
    question: "Jaka jest standardowa dawka Aspiryny w OZW?",
    options: ["75 mg", "300 mg", "500 mg", "1000 mg"],
    correct: 1,
    explanation: "Dawka nasycająca kwasu acetylosalicylowego w OZW to zazwyczaj 150-300 mg (najczęściej 300 mg p.o. rozgryźć)."
  },
  {
    id: 11,
    category: "farmakologia",
    question: "Jaką dawkę Adenozyny podajemy jako pierwszą?",
    options: ["3 mg", "6 mg", "12 mg", "18 mg"],
    correct: 1,
    explanation: "W SVT podajemy najpierw 6 mg Adenozyny w szybkim bolusie i.v."
  },
  {
    id: 12,
    category: "farmakologia",
    question: "Przeciwwskazaniem do podania Nitrogliceryny jest BP skurczowe poniżej:",
    options: ["110 mmHg", "100 mmHg", "90 mmHg", "80 mmHg"],
    correct: 2,
    explanation: "Nitrogliceryny nie podajemy, jeśli SBP < 90 mmHg lub przy podejrzeniu zawału prawej komory."
  },
  {
    id: 15,
    category: "farmakologia",
    question: "Dawka Furosemidu w obrzęku płuc to zazwyczaj:",
    options: ["10 mg", "20-80 mg", "100 mg", "1 mg/kg"],
    correct: 1,
    explanation: "Zalecana dawka początkowa to 20-80 mg i.v. (lub 80 mg u osób stale przyjmujących leki moczopędne)."
  },
  {
    id: 19,
    category: "farmakologia",
    question: "Dawka glukozy 20% w hipoglikemii u dorosłych to:",
    options: ["1 g/kg", "2 g/kg", "0.2 ml/kg", "200 mg/kg"],
    correct: 3,
    explanation: "Standardowo podajemy 0.2 g glukozy na kg m.c., co odpowiada ok. 1 ml Glukozy 20% na kg m.c."
  },
  {
    id: 22,
    category: "farmakologia",
    question: "Morfina w OZW podawana jest głównie w celu:",
    options: ["Obniżenia ciśnienia", "Zwalczenia bólu i lęku", "Rozpuszczenia skrzepu", "Sedacji"],
    correct: 1,
    explanation: "Morfina działa przeciwbólowo i anksjolitycznie, co zmniejsza pobudzenie układu współczulnego w OZW."
  },
  {
    id: 25,
    category: "farmakologia",
    question: "Lekiem z wyboru w Torsade de Pointes jest:",
    options: ["Amiodaron", "Magnez", "Potas", "Adrenalina"],
    correct: 1,
    explanation: "W Torsade de Pointes (wielokształtny VT) lekiem z wyboru jest Siarczan Magnezu (2 g i.v.)."
  },
  {
    id: 26,
    category: "farmakologia",
    question: "Dawka Kwasu Traneksamowego (Exacyl) u dorosłych to:",
    options: ["500 mg", "1 g", "2 g", "10 mg/kg"],
    correct: 1,
    explanation: "Standardowa dawka TXA w urazach to 1 g i.v. w ciągu 10 minut."
  },
  {
    id: 28,
    category: "farmakologia",
    question: "Dawka Midazolamu w sedacji u dorosłych (<60 lat) to:",
    options: ["0.5 mg", "2-2.5 mg", "5 mg", "10 mg"],
    correct: 1,
    explanation: "Standardowa dawka miareczkowana u zdrowych dorosłych to 2-2.5 mg i.v."
  },
  {
    id: 29,
    category: "farmakologia",
    question: "Przeciwwskazaniem do podania Amiodaronu jest:",
    options: ["Tachykardia", "Migotanie komór", "Bradykardia zatokowa", "Nadciśnienie"],
    correct: 2,
    explanation: "Amiodaron może pogłębić bradykardię lub blok serca."
  },
  {
    id: 30,
    category: "farmakologia",
    question: "Ile mg adrenaliny zawiera ampułka 1 ml (1:1000)?",
    options: ["0.1 mg", "1 mg", "10 mg", "0.5 mg"],
    correct: 1,
    explanation: "Stężenie 1:1000 oznacza 1 mg leku w 1 ml roztworu."
  },
  {
    id: 32,
    category: "farmakologia",
    question: "Lek odwracający działanie Benzodiazepin to:",
    options: ["Naloxon", "Flumazenil", "Atropina", "Glukagon"],
    correct: 1,
    explanation: "Flumazenil jest specyficznym antagonistą receptorów benzodiazepinowych."
  },
  {
    id: 34,
    category: "farmakologia",
    question: "Dawka Hydrokortyzonu w anafilaksji to zazwyczaj:",
    options: ["50 mg", "100-200 mg", "500 mg", "1 g"],
    correct: 1,
    explanation: "Standardowa dawka hydrokortyzonu w anafilaksji to 100-200 mg i.v."
  },
  {
    id: 35,
    category: "farmakologia",
    question: "Płyn wieloelektrolitowy (PWE) podajemy w bolusie (hipotensja) dorosłym w dawce:",
    options: ["2 ml/kg", "5 ml/kg", "10 ml/kg", "20 ml/kg"],
    correct: 3,
    explanation: "Zgodnie z wytycznymi w bolusie podaje się 20 ml/kg m.c. płynu izotonicznego (np. 500 ml u przeciętnego dorosłego)."
  },
  {
    id: 37,
    category: "farmakologia",
    question: "Pacjent z bradykardią 35/min jaki lek podasz jako pierwszy?",
    options: ["Atropina", "Adrenalina", "Noradrenalina", "Glukagon"],
    correct: 0,
    explanation: "Lekiem pierwszego rzutu w objawowej bradykardii jest Atropina (0.5 mg i.v.)."
  },
  {
    id: 38,
    category: "farmakologia",
    question: "Dawka Heparyny w OZW (standardowo i.v.) to:",
    options: ["2500 j.m.", "5000 j.m.", "10000 j.m.", "75 j.m./kg"],
    correct: 1,
    explanation: "Standardowa dawka nasycająca heparyny niefrakcjonowanej w OZW to 5000 j.m. i.v."
  },
  {
    id: 39,
    category: "farmakologia",
    question: "Który lek podajemy w nebulizacji przy Krupie?",
    options: ["Salbutamol", "Budesonid", "Atrovent", "Adrenalina"],
    correct: 3,
    explanation: "W ciężkim krupie (podgłośniowe zapalenie krtani) podaje się Adrenalinę w nebulizacji."
  },
  {
    id: 41,
    category: "farmakologia",
    question: "Dawka Naloxonu w zatruciu opioidami (startowa) to:",
    options: ["0.1 mg", "0.4 mg", "2 mg", "4 mg"],
    correct: 1,
    explanation: "Standardowa dawka początkowa to 400 mcg (0.4 mg) i.v. / i.m."
  },
  {
    id: 43,
    category: "farmakologia",
    question: "Lekiem przeciwgorączkowym, który można podać i.v. jest:",
    options: ["Ibuprofen", "Paracetamol", "Aspiryna", "Naproksen"],
    correct: 1,
    explanation: "Paracetamol jest dostępny w formie roztworu do infuzji dożylnej."
  },
  {
    id: 45,
    category: "farmakologia",
    question: "Dawka Adrenaliny w anafilaksji u dzieci (i.m.) wynosi:",
    options: ["10 mcg/kg", "0.01 mg/kg", "0.15-0.3 mg (zależnie od wagi)", "Wszystkie powyższe są poprawne"],
    correct: 3,
    explanation: "Wszystkie te formy zapisu określają prawidłową dawkę domięśniową u dzieci (0.01 mg/kg)."
  },
  {
    id: 47,
    category: "farmakologia",
    question: "Jaki lek podajemy podjęzykowo przy nadciśnieniu?",
    options: ["Metoprolol", "Captopril", "Furosemid", "Relanium"],
    correct: 1,
    explanation: "Captopril podaje się p.o. lub s.l. (podjęzykowo - off label) w celu szybszego działania w stanach nagłych nadciśnienia."
  },
  {
    id: 50,
    category: "farmakologia",
    question: "Dawka Clemastinu u dorosłych to:",
    options: ["1 mg", "2 mg", "5 mg", "10 mg"],
    correct: 1,
    explanation: "Standardowa ampułka Clemastinu zawiera 2 mg leku."
  },
  {
    id: 51,
    category: "farmakologia",
    question: "Dawka adrenaliny w nagłym zatrzymaniu krążenia (NZK) u dziecka ważącego 20 kg wynosi (droga i.v./i.o.):",
    options: ["0.1 mg", "0.2 mg", "0.5 mg", "1.0 mg"],
    correct: 1,
    explanation: "Dawka Adrenaliny w NZK u dzieci to 10 mcg/kg. Dla 20 kg: 200 mcg = 0.2 mg."
  },
  {
    id: 52,
    category: "farmakologia",
    question: "Jaka jest dawka Fentanylu dla dzieci?:",
    options: ["1-3 mg/kg", "1-3 g/kg", "1-3 mcg/kg", "50-200 mcg/kg"],
    correct: 2,
    explanation: "Standardowa dawka przeciwbólowa Fentanylu u dzieci to 1-3 mcg/kg."
  },
  {
    id: 53,
    category: "farmakologia",
    question: "Dawka Amiodaronu w opornym na defibrylację migotaniu komór (VF) u dziecka to:",
    options: ["1 mg/kg m.c.", "3 mg/kg m.c.", "5 mg/kg m.c.", "10 mg/kg m.c."],
    correct: 2,
    explanation: "Dawka Amiodaronu w NZK u dzieci to 5 mg/kg."
  },
  {
    id: 54,
    category: "farmakologia",
    question: "Zalecana dawka midazolamu podawanego donosowo (MAD) u dziecka w przypadku drgawek to:",
    options: ["0.1 mg/kg m.c.", "0.3 mg/kg m.c.", "0.5 mg/kg m.c.", "1.0 mg/kg m.c."],
    correct: 1,
    explanation: "Dawka Midazolamu donosowo to zazwyczaj 0.2-0.3 mg/kg."
  },
  {
    id: 55,
    category: "farmakologia",
    question: "Dawka jednorazowa paracetamolu podawanego dożylnie (i.v.) u dziecka wynosi:",
    options: ["5 mg/kg m.c.", "10 mg/kg m.c.", "15 mg/kg m.c.", "20 mg/kg m.c."],
    correct: 2,
    explanation: "Dawka i.v. Paracetamolu u dzieci powyżej 10 kg to 15 mg/kg."
  },
  {
    id: 56,
    category: "farmakologia",
    question: "Pierwsza dawka adenozyny u dorosłego pacjenta w częstoskurczu nadkomorowym (SVT) wynosi:",
    options: ["3 mg", "6 mg", "12 mg", "18 mg"],
    correct: 1,
    explanation: "Standardowa pierwsza dawka Adenozyny to 6 mg."
  },
  {
    id: 57,
    category: "farmakologia",
    question: "Dawka glukagonu podawana domięśniowo u dorosłego pacjenta w ciężkiej hipoglikemii to:",
    options: ["0.5 mg", "1 mg", "2 mg", "5 mg"],
    correct: 1,
    explanation: "Standardowa dawka Glukagonu dla dorosłych to 1 mg i.m."
  },
  {
    id: 58,
    category: "farmakologia",
    question: "Dawka siarczanu magnezu w ciężkim napadzie astmy oskrzelowej u dziecka wynosi:",
    options: ["10 mg/kg m.c.", "25 mg/kg m.c.", "50 mg/kg m.c.", "100 mg/kg m.c."],
    correct: 2,
    explanation: "W astmie podaje się 40-50 mg/kg i.v. Magnezu."
  },
  {
    id: 59,
    category: "farmakologia",
    question: "Dawka jednorazowa ibuprofenu podawanego doustnie (p.o.) u dziecka wynosi zazwyczaj:",
    options: ["5 mg/kg m.c.", "10 mg/kg m.c.", "15 mg/kg m.c.", "20 mg/kg m.c."],
    correct: 1,
    explanation: "Standardowa dawka p.o. Ibuprofenu u dzieci to 10 mg/kg."
  },
  {
    id: 60,
    category: "farmakologia",
    question: "Jaką dawkę hydrokortyzonu (i.v.) podasz dorosłemu pacjentowi z ciężką anafilaksją?",
    options: ["50 mg", "100 mg", "200 mg", "500 mg"],
    correct: 2,
    explanation: "Standardowo w anafilaksji 200 mg i.v."
  },
  {
    id: 61,
    category: "farmakologia",
    question: "Dawka amiodaronu podawana w stabilnym hemodynamicznie częstoskurczu komorowym (VT) u dorosłego wynosi:",
    options: ["150 mg", "300 mg", "600 mg", "900 mg"],
    correct: 1,
    explanation: "Standardowa dawka we wlewie to 300 mg (choć często zaczyna się od 150 mg w 10 min)."
  },
  {
    id: 62,
    category: "farmakologia",
    question: "Ile miligramów kwasu traneksamowego (TXA) podasz dorosłemu pacjentowi z masywnym krwotokiem pourazowym w pierwszej dawce?",
    options: ["250 mg", "500 mg", "1000 mg (1 g)", "2000 mg (2 g)"],
    correct: 2,
    explanation: "Pierwsza dawka TXA to 1 g i.v."
  },
  {
    id: 66,
    category: "farmakologia",
    question: "Jaki lek podasz na nieurazowy obrzęk mózgu?",
    options: ["Deksametazon", "Hydrokortyzon", "Urapidyl", "Furosemid"],
    correct: 0,
    explanation: "Deksametazon jest lekiem z wyboru w nieurazowym obrzęku mózgu (np. guz)."
  },
  {
    id: 67,
    category: "farmakologia",
    question: "Flumazenil jest specyficzną odtrutką w przypadku zatrucia:",
    options: ["Opioidami", "Benzodiazepinami", "Paracetamolem", "Trójpierścieniowymi lekami przeciwdepresyjnymi (TLPD)"],
    correct: 1,
    explanation: "Flumazenil znosi działanie benzodiazepin."
  },
  {
    id: 73,
    category: "farmakologia",
    question: "Zalecana dawka początkowa Furosemidu (i.v.) w ostrym obrzęku płuc u pacjenta, który przewlekle nie stosuje leków moczopędnych, to:",
    options: ["10 mg", "20 - 80 mg", "80 - 100 mg", "200 mg"],
    correct: 1,
    explanation: "Początkowo 20-40 mg i.v."
  },
  {
    id: 74,
    category: "farmakologia",
    question: "Bezwzględnym przeciwwskazaniem do podania kwasu acetylosalicylowego (ASA) pacjentowi z podejrzeniem OZW jest:",
    options: ["Aktywna choroba wrzodowa i czynne krwawienie z przewodu pokarmowego", "Cukrzyca typu 2", "Nadciśnienie tętnicze uregulowane farmakologicznie", "Przewlekła Obturacyjna Choroba Płuc (POChP)"],
    correct: 0,
    explanation: "Czynne krwawienie z p.pok. jest bezwzględnym przeciwwskazaniem do leków antyagregacyjnych."
  },
  {
    id: 75,
    category: "farmakologia",
    question: "Poniżej jakiego wieku bezwzględnie NIE WOLNO stosować Ketoprofenu (Ketonalu)?",
    options: ["12 roku życia", "15 roku życia", "16 roku życia", "18 roku życia"],
    correct: 1,
    explanation: "Ketoprofen jest przeciwwskazany u dzieci poniżej 15 r.ż."
  },
  {
    id: 76,
    category: "farmakologia",
    question: "U jakiego pacjenta z ciężką bradykardią podanie Atropiny jest przeciwwskazane i nieskuteczne?",
    options: ["U pacjenta po zatruciu fosforoorganikami", "U pacjenta z zawałem ściany dolnej", "U pacjenta po przeszczepie serca", "U pacjenta z jaskrą z zamkniętym kątem"],
    correct: 2,
    explanation: "Serce przeszczepione jest odnerwione (brak nerwu błędnego), więc Atropina nie zadziała."
  },
  {
    id: 77,
    category: "farmakologia",
    question: "Bezwzględnym przeciwwskazaniem do podania glukagonu (w przypadku hipoglikemii) jest:",
    options: ["Guz chromochłonny nadnerczy", "Cukrzyca typu 1", "Niewydolność nerek", "Padaczka"],
    correct: 0,
    explanation: "Guz chromochłonny (Pheochromocytoma) jest przeciwwskazaniem (ryzyko wyrzutu katecholamin)."
  },
  {
    id: 78,
    category: "farmakologia",
    question: "Nitrogliceryny (Nitromintu) m.in. w ostrym zespole wieńcowym NIE podasz pacjentowi, u którego ciśnienie skurczowe wynosi poniżej:",
    options: ["110 mmHg", "100 mmHg", "90 mmHg", "80 mmHg"],
    correct: 2,
    explanation: "SBP < 90 mmHg to granica podania azotanów."
  },
  {
    id: 79,
    category: "farmakologia",
    question: "Jaką dawkę adrenaliny (i.m.) podasz we wstrząsie anafilaktycznym u 8-letniego dziecka (przedział 6-12 r.ż.)?",
    options: ["100 µg", "150 µg", "300 µg", "500 µg"],
    correct: 2,
    explanation: "Dzieci 6-12 lat: 300 mcg i.m."
  },
  {
    id: 80,
    category: "farmakologia",
    question: "Przeciwwskazaniem do podania metamizolu (Pyralginy), ze względu na ryzyko powikłań hemodynamicznych, jest m.in.:",
    options: ["Hipotensja", "Nadciśnienie tętnicze", "Gorączka pow. 39°C", "Kolka nerkowa"],
    correct: 0,
    explanation: "Pyralgina może powodować gwałtowny spadek ciśnienia tętniczego."
  },
  {
    id: 81,
    category: "farmakologia",
    question: "Kaptoprylu (Captopril) stosowanego w nadciśnieniu tętniczym nie należy podawać pacjentom z:",
    options: ["Ostrym Zespołem Wieńcowym (OZW)", "Obustronnym zwężeniem tętnic nerkowych", "Tachykardią zatokową", "Astmą oskrzelową"],
    correct: 1,
    explanation: "Obustronne zwężenie tętnic nerkowych to istotne przeciwwskazanie do inhibitorów ACE."
  },
  {
    id: 82,
    category: "farmakologia",
    question: "Co jest przeciwwskazaniem do podania Amiodaronu u pacjenta (wydolnego hemodynamicznie) z zaburzeniami rytmu serca?",
    options: ["Zaburzenia czynności tarczycy", "Cukrzyca", "Przewlekła niewydolność nerek", "Przewlekła Obturacyjna Choroba Płuc (POChP)"],
    correct: 0,
    explanation: "Amiodaron zawiera jod i może powodować nadczynność lub niedoczynność tarczycy."
  },
  {
    id: 83,
    category: "farmakologia",
    question: "Dawka drotaweryny (No-Spy) podawana dożylnie (i.v.) u dziecka wynosi:",
    options: ["10 mg", "20 mg", "40 mg", "Dzieciom nie podaje się drotaweryny i.v"],
    correct: 3,
    explanation: "Drotaweryna nie jest zalecana do podawania dożylnego u dzieci."
  },
  {
    id: 84,
    category: "farmakologia",
    question: "Urapidil (Ebrantil) stosowany inagłym, znacznym nadciśnieniu tętniczym nie jest zalecany do stosowania u pacjentów poniżej:",
    options: ["12 roku życia", "15 roku życia", "16 roku życia", "18 roku życia"],
    correct: 3,
    explanation: "Urapidil jest zarejestrowany dla dorosłych."
  },
  {
    id: 85,
    category: "farmakologia",
    question: "Klemastyny (Clemastin) bezwzględnie nie należy podawać dzieciom poniżej:",
    options: ["1 roku życia", "3 roku życia", "6 roku życia", "12 roku życia"],
    correct: 1,
    explanation: "Clemastin nie należy podawać w ogóle dzieciom(można, dawka 25-50 mcg/kg), lecz bezwzględnie unikamy poniżej 3 r.ż,"
  },
  {
    id: 86,
    category: "farmakologia",
    question: "Jaką dawkę paracetamolu podasz dożylnie (i.v.) dorosłemu pacjentowi z prawidłową czynnością nerek i wątroby w leczeniu przeciwbólowym?",
    options: ["0.5 g", "1 g", "1.5 g", "2 g"],
    correct: 1,
    explanation: "Standardowa dawka i.v. u dorosłych to 1 g."
  },
  {
    id: 87,
    category: "farmakologia",
    question: "W jakim rozpuszczalniku, należy podać Amiodaron w dawce 300 mg i.v. podczas NZK?",
    options: ["W 10 ml 0.9% NaCl", "W 5% Glukozie", "W Płynie Wieloelektrolitowym (PWE)", "W Płynie Ringera"],
    correct: 1,
    explanation: "Amiodaron jest kompatybilny tylko z 5% Glukozą."
  },
  {
    id: 88,
    category: "farmakologia",
    question: "Przeciwwskazaniem do zastosowania Płynu Wieloelektrolitowego (PWE) jest m.in.:",
    options: ["Hipowolemia i odwodnienie", "Hiponatremią i hipokaliemia", "Hiperkaliemia i hiperkalcemia", "Biegunka i wymioty"],
    correct: 2,
    explanation: "PWE zawiera potas i wapń, więc hiperkaliemia i hiperkalcemia są przeciwwskazaniami."
  },
  {
    id: 89,
    category: "farmakologia",
    question: "Dawka adrenaliny w napadzie astmy oskrzelowej (obturacja dróg oddechowych) u osoby dorosłej wynosi:",
    options: ["1 mg i.v.", "500 µg i.m.", "300 µg i.m. lub s.c.", "150 µg i.m."],
    correct: 2,
    explanation: "W ciężkiej astmie można podać 300 mcg i.m. lub s.c."
  },
  {
    id: 91,
    category: "farmakologia",
    question: "Jaką dawkę glukagonu podasz domięśniowo (i.m.) lub podskórnie (s.c.) dziecku ważącemu poniżej 25 kg w przypadku hipoglikemii?",
    options: ["0,5 mg", "1 mg", "2 mg", "5 mg"],
    correct: 0,
    explanation: "Dzieci < 25 kg: 0.5 mg."
  },
  {
    id: 92,
    category: "farmakologia",
    question: "Dawka amiodaronu w opornym na defibrylację NZK u dzieci wynosi:",
    options: ["1 mg/kg m.c.", "3 mg/kg m.c.", "5 mg/kg m.c.", "10 mg/kg m.c."],
    correct: 2,
    explanation: "NZK u dzieci: 5 mg/kg Amiodaronu."
  },
  {
    id: 93,
    category: "farmakologia",
    question: "Zalecana dawka fentanylu dla dorosłego pacjenta z zachowanym, spontanicznym oddychaniem wynosi:",
    options: ["10 - 20 µg i.v.", "50 - 200 µg i.v.", "300 - 500 µg i.v.", "1 - 3 µg/kg m.c. i.v."],
    correct: 1,
    explanation: "Zazwyczaj 1-2 mcg/kg, co daje ok. 50-200 mcg u dorosłego."
  },

  {
    id: 95,
    category: "farmakologia",
    question: "Dawka kwasu traneksamowego (Exacyl) w krwawieniu po urazie u dziecka (powyżej 1 r.ż.) to:",
    options: ["10 mg/kg m.c.", "15 mg/kg m.c.", "20 mg/kg m.c.", "30 mg/kg m.c."],
    correct: 2,
    explanation: "Zazwyczaj 15-30 mg/kg (średnio 20 mg/kg)."
  },
  {
    id: 96,
    category: "farmakologia",
    question: "Dawka Mannitolu dla dorosłych wynosi:",
    options: ["1.5-2 g/kg", "1.5-2 mg/kg", "1.5-2 mcg/kg", "500 mg/kg m.c."],
    correct: 0,
    explanation: "Standardowa dawka to 0.25-2 g/kg (średnio 1.5-2 g/kg)."
  },
  {
    id: 97,
    category: "farmakologia",
    question: "Dawka midazolamu (Midanium) w celu sedacji dorosłego pacjenta wynosi:",
    options: ["0,5 - 1 mg i.v.", "2 - 2,5 mg i.v.", "5 mg i.v.", "10 mg i.m."],
    correct: 1,
    explanation: "Standardowa dawka i.v. to 2-2.5 mg, pamiętaj, że midazolam miareczkujemy!"
  },
  {
    id: 98,
    category: "farmakologia",
    question: "Zalecany bolus PWE, 0,9% NaCl lub płynu Ringera przypadku hipotensji u dorosłych to:",
    options: ["5 ml/kg m.c.", "10 ml/kg m.c.", "20 ml/kg m.c.", "30 ml/kg m.c."],
    correct: 2,
    explanation: "Zaleca się bolus 20 ml/kg. U dzieci bolus wynosi 10 ml/kg."
  },
  {
    id: 99,
    category: "farmakologia",
    question: "Jaką dawkę naloksonu podasz dziecku o masie ciała poniżej 20 kg?",
    options: ["0,01 mg/kg m.c.", "0,1 mg/kg m.c.", "0,4 mg/kg m.c.", "2 mg"],
    correct: 0,
    explanation: "Dzieci < 20 kg: 10 mcg/kg (0.01 mg/kg)."
  },
  {
    id: 100,
    category: "farmakologia",
    question: "Dawka siarczanu atropiny w ciężkiej bradykardii u dziecka wynosi:",
    options: ["10 µg/kg m.c.", "20 µg/kg m.c.", "50 µg/kg m.c.", "100 µg/kg m.c."],
    correct: 1,
    explanation: "W przypadku ciężkiej bradykardii u dzieci: 20 mcg/kg Atropiny. (Lek pierwszego rzutu)"
  },
  {
    id: 101,
    category: "farmakologia",
    question: "Dawka siarczanu morfiny dla dziecka (i.v., i.o.) wynosi:",
    options: ["10 - 50 µg/kg m.c.", "100 - 200 µg/kg m.c.", "300 - 400 µg/kg m.c.", "0,5 - 1 mg/kg m.c."],
    correct: 1,
    explanation: "Dzieci: 0.1-0.2 mg/kg (100-200 mcg/kg)."
  },
  {
    id: 102,
    category: "farmakologia",
    question: "W przypadku ostrego zatrucia beta-blokerami, zalecana dawka glukagonu to:",
    options: ["10 - 20 µg/kg m.c.", "50 - 150 µg/kg m.c.", "200 - 300 µg/kg m.c.", "1 mg niezależnie od masy ciała"],
    correct: 1,
    explanation: "W zatruciu BB stosuje się wysokie dawki Glukagonu: 50-150 mcg/kg."
  },
  {
    id: 103,
    category: "farmakologia",
    question: "Dawka hydroksyzyny podawanej domięśniowo (i.m.) u dorosłego wynosi:",
    options: ["200 mg", "10 mg", "50-100 mg", "50-100 mcg"],
    correct: 2,
    explanation: "Dawka i.m. u dorosłych to zazwyczaj 50-100 mg."
  },
  {
    id: 104,
    category: "farmakologia",
    question: "Dawka nasycająca klopidogrelu (Areplex/Plavix) podawana doustnie (p.o.) pacjentowi z Ostrym Zespołem Wieńcowym (OZW) wynosi:",
    options: ["75 mg", "150 mg", "300 mg", "600 mg"],
    correct: 3,
    explanation: "Standardowa dawka nasycająca w OZW to 600 mg (lub 300 mg wg starszych wytycznych)."
  },
  {
    id: 105,
    category: "farmakologia",
    question: "Poniżej jakiego wieku lek przeciwwymiotny tietyloperazyna (Torecan) jest bezwzględnie przeciwwskazany?",
    options: ["15 roku życia", "12 roku życia", "6 roku życia", "18 roku życia"],
    correct: 0,
    explanation: "Torecan jest przeciwwskazany poniżej 15 r.ż."
  },
  {
    id: 106,
    category: "farmakologia",
    question: "Dawkę diazepamu (Relanium) podawanego u dzieci można obliczyć na podstawie masy ciała lub według zasady:",
    options: ["0.5 mg na każdy rok życia", "5 mg niezależnie od wieku", "2 mg na każdy rok życia dziecka", "1 mg na każdy rok życia dziecka"],
    correct: 3,
    explanation: "Jedna z uproszczonych zasad to 1 mg na każdy rok życia."
  },
  {
    id: 107,
    category: "farmakologia",
    question: "Silnym wskazaniem do podania wodorowęglanu sodu (8,4%) jest m.in.:",
    options: ["Zatrucie trójpierścieniowymi lekami przeciwdepresyjnymi (TCA)", "Zasadowica metaboliczna", "Ostre zatrucie opioidami", "Hiperwentylacja psychogenna"],
    correct: 0,
    explanation: "NaHCO3 jest odtrutką w zatruciu TCA (TLPD)."
  },
  {
    id: 108,
    category: "farmakologia",
    question: "W czym i w jakiej objętości należy rozcieńczyć Ketoprofen (Ketonal) przy podaży dożylnej (i.v.) w warunkach ZRM?",
    options: ["Nie wymaga rozcieńczenia", "Dożylnie podajemy tylko w warunkach szpitalnych", "W 10 ml 0.9% NaCl", "Wyłącznie w 5% Glukozie (10 ml)"],
    correct: 1,
    explanation: "Ketoprofenu nie należy podawać w szybkim bolusie i.v. bez rozcieńczenia."
  },
  {
    id: 109,
    category: "farmakologia",
    question: "Co jest głównym przeciwwskazaniem do podania Papaweryny?",
    options: ["Kolka nerkowa", "Kolka żółciowa", "Stany spastyczne jelit", "Zaburzenia przewodnictwa w mięśniu sercowym"],
    correct: 3,
    explanation: "Zaburzenia przewodnictwa są przeciwwskazaniem."
  },
  {
    id: 110,
    category: "farmakologia",
    question: "Wskaż bezwzględne przeciwwskazanie do podania Metoklopramidu u dorosłego pacjenta z nudnościami:",
    options: ["Nadciśnienie tętnicze", "Krwawienia z przewodu pokarmowego i niedrożność jelit", "Jaskra z otwartym kątem", "Kolka nerkowa"],
    correct: 1,
    explanation: "Niedrożność mechaniczna jelit jest bezwzględnym przeciwwskazaniem."
  },
  {
    id: 111,
    category: "farmakologia",
    question: "Zalecana dawka salbutamolu (Ventolinu) w nebulizacji u dzieci poniżej 2 roku życia wynosi:",
    options: ["1 mg", "5 mg", "2.5 mg", "10 mg"],
    correct: 2,
    explanation: "Dzieci < 2 lat: 2.5 mg."
  },
  {
    id: 112,
    category: "farmakologia",
    question: "Ile wynosi jednorazowa dawka tikagreloru (Brilique) podawana doustnie przy Ostrym Zespole Wieńcowym?",
    options: ["60 mg", "90 mg", "300 mg", "180 mg"],
    correct: 3,
    explanation: "Dawka nasycająca Tikagreloru to 180 mg."
  },
  {
    id: 113,
    category: "farmakologia",
    question: "Ile wynosi dawka leku przeciwpłytkowego prasugrel (Efient) podawana w Ostrym Zespole Wieńcowym?",
    options: ["60 mg", "10 mg", "75 mg", "180 mg"],
    correct: 0,
    explanation: "Dawka nasycająca Prasugrelu to 60 mg."
  },
  {
    id: 114,
    category: "farmakologia",
    question: "Co jest przeciwwskazaniem do podania płynów koloidowych takich jak Gelofusine?",
    options: ["Hipowolemia bezwzględna", "Masywny krwotok urazowy", "Ciężka niewydolność serca i przewodnienie organizmu", "Oparzenia powierzchowne"],
    correct: 2,
    explanation: "Przewodnienie i niewydolność serca to przeciwwskazania do koloidów."
  },
  {
    id: 115,
    category: "farmakologia",
    question: "Jakie jest dawkowanie fentanylu i.v. u dorosłego pacjenta, który wymaga oddechu wspomaganego?",
    options: ["10 - 20 µg", "300 - 3500 µg", "50 - 200 µg", "Powyżej 5000 µg"],
    correct: 1,
    explanation: "Wysokie dawki stosuje się przy intubacji i wentylacji."
  },
  {
    id: 116,
    category: "farmakologia",
    question: "Standardowa prędkość początkowa wlewu noradrenaliny (Levonoru) we wstrząsie wynosi zazwyczaj:",
    options: ["0.01 - 0.05 mg/h", "2 - 10 µg/min", "10 - 20 mg/h", "0.4 - 0.8 mg/h (lub 0.05-1.5 µg/kg/min)"],
    correct: 3,
    explanation: "Standardowa prędkość początkowa to ok. 0.4-0.8 mg/h."
  },
  {
    id: 117,
    category: "farmakologia",
    question: "W jakim czasie należy podać wlew z amiodaronu (300 mg w 5% Glukozie) w stabilnym częstoskurczu z szerokimi QRS u dorosłego pacjenta?",
    options: ["W ciągu 20 - 60 minut", "Jako szybki bolus w ciągu 2 sekund", "W ciągu 5 minut", "W ciągu 12 godzin"],
    correct: 0,
    explanation: "Amiodaron w stabilnym VT podaje się we wlewie (zazwyczaj 150-300 mg w 20-60 min)."
  },
  {
    id: 118,
    category: "farmakologia",
    question: "W przypadku zatrucia związkami fosforoorganikami u dzieci, dawka atropiny wynosi:",
    options: ["0.01 mg/kg m.c.", "0.02 mg/kg m.c.", "0.05 mg/kg m.c.", "0.1 mg/kg m.c."],
    correct: 2,
    explanation: "W zatruciu fosforoorganikami stosuje się wyższe dawki Atropiny (0.05 mg/kg)."
  },
  {
    id: 122,
    category: "farmakologia",
    question: "Maksymalna całkowita dobowa dawka Amiodaronu we wlewie dożylnym u dorosłego pacjenta z częstoskurczem wynosi:",
    options: ["300 mg", "600 mg", "900 mg", "1200 mg"],
    correct: 2,
    explanation: "Maksymalna dawka dobowa to 900-1200 mg (zazwyczaj przyjmuje się 900 mg)."
  },
  {
    id: 123,
    category: "farmakologia",
    question: "Pojedyncza dawka salbutamolu inebulizacji u dziecka powyżej 2 roku życia w napadzie astmy wynosi zazwyczaj:",
    options: ["1.25 mg", "5 mg", "2.5 mg", "10 mg"],
    correct: 1,
    explanation: "Dzieci > 2 lat: 2.5-5 mg (zazwyczaj 5 mg)."
  },
  {
    id: 125,
    category: "farmakologia",
    question: "Mechanizm działania adrenaliny we wstrząsie anafilaktycznym polega m.in. na:",
    options: ["Blokowaniu wyrzutu histaminy z komórek tucznych", "Pobudzeniu receptorów alfa (skurcz naczyń) i beta2 (rozkurcz oskrzeli)", "Wyłącznym działaniu inotropowo dodatnim na serce", "Bezpośrednim hamowaniu układu przywspółczulnego"],
    correct: 1,
    explanation: "Alfa-1 (skurcz naczyń, wzrost BP), Beta-2 (rozkurcz oskrzeli)."
  },
  {
    id: 126,
    category: "farmakologia",
    question: "Odtrutką z wyboru w przypadku ostrego zatrucia trójpierścieniowymi lekami przeciwdepresyjnymi (TLPD), przebiegającego z szerokimi zespołami QRS, jest:",
    options: ["Wodorowęglan sodu", "Flumazenil", "Siarczan magnezu", "Nalokson"],
    correct: 0,
    explanation: "NaHCO3 stabilizuje błonę komórkową kardiomiocytów w zatruciu TCA."
  },
  {
    id: 131,
    category: "farmakologia",
    question: "Glukagon podany domięśniowo w przypadku ciężkiej hipoglikemii może być całkowicie nieskuteczny u pacjentów:",
    options: ["Z cukrzycą typu 1", "Z nadciśnieniem tętniczym", "Przyjmujących na stałe leki moczopędne", "Z wyczerpanymi zapasami glikogenu w wątrobie (np. w upojeniu alkoholowym, wyniszczeniu)"],
    correct: 3,
    explanation: "Glukagon działa poprzez uwalnianie glikogenu z wątroby. Jeśli go nie ma, lek nie zadziała."
  },
  {
    id: 133,
    category: "farmakologia",
    question: "Dawka amiodaronu w opornym na defibrylację migotaniu komór (VF) u dorosłego pacjenta podawana po 5. defibrylacji wynosi:",
    options: ["150 mg", "300 mg", "450 mg", "1 mg/kg m.c."],
    correct: 0,
    explanation: "Druga dawka Amiodaronu to 150 mg."
  },
  {
    id: 134,
    category: "farmakologia",
    question: "Jaka jest dawka Adrenaliny we wstrząsie kardiogennym u dzieci?",
    options: ["2-10 mcg/min", "0,05-0,5 mcg/kg/min", "0,05-1 mcg/kg/min", "0,01-0,5 mcg/min/kg"],
    correct: 2,
    explanation: "U dzieci we wstrząsie kardiogennym jako lek drugiego rzutu podajemy Adrenalinę w dawce: 0,05-1 mcg/kg/min."
  },
  {
    id: 135,
    category: "farmakologia",
    question: "Jak rozcieńczysz i jak podasz Ketoprofen (Ketonal) w warunkach ZRM?",
    options: ["Minimum 100 ml 0.9% NaCl, wolny wlew", "10 ml 5% glukozy, bolus", "Dożylnie można podać tylko w warunkach szpitalnych", "Bez rozcieńczenia szybki bolus"],
    correct: 2,
    explanation: "Ketoprofen (Ketonal) dożylnie można podać tylko w warunkach szpitalnych wg. ChPL."
  },
    {
    id: 136,
    category: "farmakologia",
    question: "Jaki lek podasz w AF z szybką odpowiedzią komór?",
    options: ["Metoprolol", "Adenozyna", "Wodorowęglan Sodu", "Magnez"],
    correct: 0,
    explanation: "W celu zwolnienia rytmu komór podajemy 5mg metoprololu (Betaloc/Metocard) i.v"
  },
  {
    id: 172,
    category: "farmakologia",
    question: "Jaką dawkę glukozy podasz dziecku w przypadku hipoglikemii, przeliczając na gramy czystej substancji (i.v.)?",
    options: ["0.1 g/kg m.c.", "0.3 g/kg m.c.", "0.5 g/kg m.c.", "1.0 g/kg m.c."],
    correct: 1,
    explanation: "Dawka glukozy u dzieci to 0.3 g/kg m.c. i.v."
  },
  {
    id: 173,
    category: "farmakologia",
    question: "Dawka Klonazepamu w przerywaniu napadu drgawek wynosi standardowo:",
    options: ["1 mg i.v. u dorosłych i 0.5 mg i.v. u dzieci", "2 mg i.v. u dorosłych i 1 mg i.v. u dzieci", "0.5 mg i.v. niezależnie od wieku", "5 mg i.m. u dorosłych i 2 mg i.m. u dzieci"],
    correct: 0,
    explanation: "Klonazepam w drgawkach podaje się w dawce 1 mg i.v. u dorosłych oraz 0.5 mg i.v. u dzieci (bardzo powoli, po rozcieńczeniu)."
  },
  {
    id: 174,
    category: "farmakologia",
    question: "W ostrych stanach zagrażających życiu (np. ciężki skurcz oskrzeli) zalecana dawka deksametazonu podawana dożylnie (i.v.) u dzieci wynosi:",
    options: ["0.1 - 0.2 mg/kg m.c.", "0.2 - 0.4 mg/kg m.c.", "0.5 - 1.0 mg/kg m.c.", "1.5 - 2.0 mg/kg m.c."],
    correct: 1,
    explanation: "Dawka ratunkowa deksametazonu (Dexaven) i.v. u dzieci w stanach nagłych wynosi 0.2 - 0.4 mg/kg m.c."
  },
  {
    id: 175,
    category: "farmakologia",
    question: "Dawka diazepamu (Relanium) u dzieci w przypadku stanu padaczkowego wynosi (przy podaży i.v. / i.o.):",
    options: ["1 mg/kg m.c.", "100 µg/kg m.c.", "200 - 300 µg/kg m.c.", "500 µg/kg m.c."],
    correct: 2,
    explanation: "Dawka pediatryczna diazepamu to 200 - 300 µg/kg m.c. i.v./i.o. (można również przeliczać jako 1 mg na każdy rok życia)."
  },
  {
    id: 177,
    category: "farmakologia",
    question: "Jeśli w opornym na defibrylację migotaniu komór (VF) Amiodaron jest niedostępny, dawka Lignokainy podana dożylnie u dorosłego wynosi:",
    options: ["50 mg i 50 mg", "100 mg i 50 mg", "150 mg i 50 mg", "100 mg i 100 mg"],
    correct: 1,
    explanation: "Zastępczo za amiodaron stosuje się lignokainę w dawkach: po 3. defibrylacji 100 mg i.v (i.o) po 5. defibrylacji 50 mg i.v (i.o)."
  },
  {
    id: 178,
    category: "farmakologia",
    question: "Zgodnie z ChPL, bezwzględnym przeciwwskazaniem do podania dożylnego Metoprololu jest:",
    options: ["Tachykardia zatokowa 110/min", "Migotanie przedsionków z szybką czynnością komór", "Blok przedsionkowo-komorowy II lub III stopnia", "Nadciśnienie tętnicze pow. 180/100 mmHg"],
    correct: 2,
    explanation: "Metoprolol (Beta-bloker) hamuje przewodnictwo w węźle AV. Podanie go w bloku II lub III stopnia grozi asystolią."
  },
  {
    id: 179,
    category: "farmakologia",
    question: "Bezwzględnym przeciwwskazaniem do podania 15% roztworu Mannitolu z powodu ryzyka nagłego obciążenia objętościowego i pogorszenia stanu pacjenta jest:",
    options: ["Izolowany uraz czaszkowo-mózgowy", "Obrzęk mózgu o etiologii nowotworowej", "Zastoinowa niewydolność krążenia (obrzęk płuc)", "Udar niedokrwienny mózgu"],
    correct: 2,
    explanation: "Mannitol jest lekiem osmotycznie czynnym - „ściąga” wodę z tkanek do naczyń. Przy niewydolnym sercu doprowadzi to do błyskawicznego zalania płuc."
  },
  {
    id: 180,
    category: "farmakologia",
    question: "Główny mechanizm działania noradrenaliny (Levonoru) we wstrząsie polega na silnym pobudzeniu receptorów:",
    options: ["Beta-1 (silne działanie inotropowe dodatnie)", "Beta-2 (rozkurcz oskrzeli)", "Dopaminergicznych (rozszerzenie naczyń nerkowych)", "Alfa-1 (silny skurcz naczyń krwionośnych)"],
    correct: 3,
    explanation: "Noradrenalina w głównej mierze działa na receptory Alfa-1, powodując silną wazokonstrukcję (skurcz naczyń) i wzrost ciśnienia tętniczego."
  },

  {
    id: 182,
    category: "farmakologia",
    question: "Jakie groźne objawy neurologiczne (tzw. objawy pozapiramidowe) mogą wystąpić po podaniu tietyloperazyny (Torecanu) lub Metoklopramidu, szczególnie u osób młodych?",
    options: ["Porażenie wiotkie kończyn dolnych", "Nagłe skurcze mięśni karku, twarzy i prężenia", "Głęboka śpiączka i arefleksja", "Przemijająca ślepota korowa"],
    correct: 1,
    explanation: "Leki przeciwwymiotne z tej grupy mogą wywoływać ostre reakcje dystoniczne (mimowolne ruchy, sztywność karku, prężenia), które często mylone są z drgawkami lub tężcem."
  },
  {
    id: 183,
    category: "farmakologia",
    question: "Maksymalna dobowa dawka ibuprofenu podawanego doustnie u dzieci wynosi:",
    options: ["10 mg/kg m.c.", "20-30 mg/kg m.c. w dawkach podzielonych", "50 mg/kg m.c.", "100 mg/kg m.c."],
    correct: 1,
    explanation: "Jednorazowa dawka ibuprofenu to 10 mg/kg m.c., a maksymalna dawka dobowa wynosi 20-30 mg/kg m.c."
  },
  {
    id: 184,
    category: "farmakologia",
    question: "Fentanyl (silny opioid) u pacjenta z bólem pourazowym należy stosować ze szczególną ostrożnością lub zaniechać podaży i.v. w przypadku:",
    options: ["Podejrzenia złamania kości udowej", "Tachykardii zatokowej pow. 100/min", "Niekontrolowanej depresji ośrodka oddechowego (np. uraz głowy)", "Nadciśnienia tętniczego pow. 160/90"],
    correct: 2,
    explanation: "Opioidy silnie hamują ośrodek oddechowy w pniu mózgu. U pacjentów z TBI (uraz czaszkowo-mózgowy) podanie fentanylu może wywołać całkowity bezdech i wzrost ciśnienia wewnątrzczaszkowego z powodu hiperkarbii."
  },
  {
    id: 186,
    category: "farmakologia",
    question: "Oprócz czynnego krwawienia z przewodu pokarmowego, bezwzględnym przeciwwskazaniem do podania heparyny niefrakcjonowanej w OZW według ChPL jest obecność w wywiadzie:",
    options: ["Zawału serca (STEMI) w przeszłości", "Zatorowości płucnej", "Przewlekłej niewydolności nerek", "Małopłytkowości indukowanej heparyną (HIT)"],
    correct: 3,
    explanation: "Zespół HIT (Heparin-Induced Thrombocytopenia) to groźne immunologiczne powikłanie po heparynie, objawiające się paradoksalną zakrzepicą. Jego wywiad bezwzględnie wyklucza użycie heparyny."
  },
  {
    id: 187,
    category: "farmakologia",
    question: "W jaki sposób należy prawidłowo podać pierwszą dawkę Adenozyny (6 mg) u dorosłego pacjenta z częstoskurczem nadkomorowym (SVT)?",
    options: ["W powolnym wlewie kroplowym przez 10 minut", "W szybkim bolusie i.v. (w ciągu 2 sekund) z natychmiastowym przepłukaniem solą fizjologiczną", "Domięśniowo (i.m.) w ramię", "W bolusie dożylnym podawanym przez minimum 1 minutę"],
    correct: 1,
    explanation: "Adenozyna ma ekstremalnie krótki czas półtrwania (kilka sekund). Musi być podana w bardzo szybkim bolusie (1-2 sekundy) i popchnięta płynem (tzw. flush), aby dotarła do serca."
  },

  {
    id: 189,
    category: "farmakologia",
    question: "Urapidil (Ebrantil) to skuteczny lek w przełomie nadciśnieniowym, jednak posiada jedno bardzo specyficzne kardiologiczne przeciwwskazanie. Jest to:",
    options: ["Tachykardia zatokowa", "Blok AV I stopnia", "Stenoza aortalna", "Migotanie przedsionków"],
    correct: 2,
    explanation: "Zgodnie z Charakterystyką Produktu Leczniczego, stenoza aortalna (zwężenie zastawki aorty) jest przeciwwskazaniem do podania Urapidilu."
  },
  {
    id: 190,
    category: "farmakologia",
    question: "Dlaczego Metamizol (Pyralginę) w dawce 0.5-2.5 g należy podawać dożylnie we wlewie kropelkowym (rozcieńczone w 0.9% NaCl)?",
    options: ["Szybka podaż może wywołać napad drgawek", "Szybka podaż leku może wywołać hipotensję", "Szybka podaż wywołuje odruchową tachykardię i migotanie komór", "Metamizol szybko krystalizuje się we krwi"],
    correct: 1,
    explanation: "Zbyt szybkie podanie dożylne Pyralginy może spowodować gwałtowny spadek ciśnienia tętniczego."
  },
  {
    id: 192,
    category: "farmakologia",
    question: "W jakiej dawce we wlewie dożylnym podasz Adrenalinę dorosłemu pacjentowi znajdującemu się we wstrząsie kardiogennym (jako lek drugiego rzutu)?",
    options: ["0.05 - 0.5 µg/kg m.c./min", "2 - 10 µg/min", "1 mg w szybkim bolusie", "0.5 mg i.m."],
    correct: 0,
    explanation: "We wstrząsie kardiogennym dawkowanie adrenaliny w pompie to 0.05-0.5 µg/kg m.c./min. (Dawka 2-10 µg/min dotyczy leczenia ciężkiej bradykardii)."
  },
  {
    id: 193,
    category: "farmakologia",
    question: "Jeden z podanych stanów pacjenta bezwzględnie wyklucza zastosowanie diazepamu (Relanium). Wskaż który:",
    options: ["Tachykardia pow. 120/min", "Nadciśnienie tętnicze 160/90", "Ostra niewydolność oddechowa", "Stan po napadzie padaczkowym"],
    correct: 2,
    explanation: "Diazepam (benzodiazepina) silnie działa miorelaksacyjnie i depresyjnie na OUN. Ostra niewydolność oddechowa jest przeciwwskazaniem, gdyż lek może spowodować całkowity bezdech."
  },
  {
    id: 195,
    category: "farmakologia",
    question: "Jaką dawkę siarczanu atropiny przygotujesz dla dorosłego pacjenta z zatrzymaniem krążenia (w rytmie PEA/Asystolii), u którego podejrzewasz wpływ silnego napięcia nerwu błędnego?",
    options: ["0.5 mg i.v.", "1 mg i.v.", "3 mg i.v.", "Atropiny nie stosuje się w żadnym z przypadków NZK"],
    correct: 2,
    explanation: "Chociaż standardowo atropina zniknęła z rutynowego algorytmu ALS dla asystolii/PEA, podaje się jednorazową dawkę 3 mg i.v., jeśli podejrzewamy silny wpływ nerwu błędnego (odruch wazowagalny) prowadzący do zatrzymania krążenia."
  },
  {
    id: 196,
    category: "farmakologia",
    question: "Hydroksyzynę podajemy domięśniowo (i.m.). Jaka jest dawka pediatryczna dla dziecka powyżej 12 m.ż. i ważącego do 40 kg?",
    options: ["0.5 mg/kg m.c.", "1 - 2 mg/kg m.c.", "50 mg", "100 mg"],
    correct: 1,
    explanation: "Dla dzieci do 40 kg dawka hydroksyzyny i.m. wynosi 1-2 mg/kg m.c."
  },
  {
    id: 199,
    category: "farmakologia",
    question: "Czy sól fizjologiczną (0.9% NaCl) można zawsze podawać w dowolnych ilościach jako płyn obojętny?",
    options: ["Tak, to najbezpieczniejszy płyn w ratownictwie", "Nie, jest przeciwwskazana w przewodnieniu, ciężkiej niewydolności krążenia i nerek", "Nie, ponieważ wypłukuje magnez z organizmu", "Tak, o ile podgrzejemy ją do 37 stopni"],
    correct: 1,
    explanation: "Sól fizjologiczna zatrzymuje wodę w organizmie, dlatego w obrzęku płuc, niewydolności nerek czy krążenia może doprowadzić do śmiertelnego w skutkach przewodnienia."
  },
  {
    id: 201,
    category: "farmakologia",
    question: "Jaki jest główny cel zastosowania wodorowęglanu sodu (8.4%) u pacjenta, który uległ masywnemu zatruciu trójpierścieniowymi lekami przeciwdepresyjnymi (TLPD)?",
    options: ["Przyspieszenie wydalania leku z moczem", "Zapobieganie i leczenie groźnych arytmii komorowych spowodowanych kardiotoksycznością leku", "Znoszenie działania sedacyjnego leków", "Zahamowanie wchłaniania leku z przewodu pokarmowego"],
    correct: 1,
    explanation: "W zatruciu TLPD dochodzi do blokady kanałów sodowych w sercu (poszerzenie QRS, groźne arytmie). Podaż sodu w postaci hiperosmolarnego wodorowęglanu odwraca tę blokadę, stabilizując pracę mięśnia sercowego."
  }
];
