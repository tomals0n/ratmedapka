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
    id: 1,
    category: "farmakologia",
    question: "Jaka jest dawka Klopidogrelu (Plavix) w OZW?",
    options: ["300 mg", "600 mg", "90 mg", "180 mg"],
    correct: 1,
    explanation: "600 mg to dawka nasycająca organizm, którą podajemy w zawałach mięśnia sercowego po teletransmisji."
  },
  {
    id: 2,
    category: "farmakologia",
    question: "Na co stosujemy lek Klopidogrel (Plavix)?",
    options: ["Zawał mięśnia sercowego", "Krwawienia wewnętrzne", "Obrzęk płuc", "Dławica Piersiowa"],
    correct: 0,
    explanation: "Klopidogrel stosujemy w zawale mięśnia sercowego jako terapia przeciwpłytkowa."
  },
  {
    id: 3,
    category: "farmakologia",
    question: "W jakiej dawce występuje Klopidogrel i jak się go podaje?",
    options: ["75 mg p.o.", "75 mg i.v.", "300 mg p.o.", "300 mg i.v."],
    correct: 0,
    explanation: "Klopidogrel (Plavix) występuje w postaci tabletek w dawce 75 mg (1 tabletka), podaje się go p.o."
  },
  {
    id: 4,
    category: "farmakologia",
    question: "Jakie jest główne zastosowanie ASA (Kwas acetylosalicylowy) w ZRM?",
    options: ["Zawał mięśnia sercowego", "Gorączka", "Bóle mięśni", "Ból głowy"],
    correct: 0,
    explanation: "ASA stosujemy jedynie w OZW, z perspektywy ZRM mamy lepsze leki do gorączki, bólów mięśniowych oraz bólów głowy."
  },
  {
    id: 5,
    category: "farmakologia",
    question: "Jaka jest dawka ASA (Kwas acetylosalicylowy) w OZW?",
    options: ["300 mg", "150 mg", "400 mg", "100 mg"],
    correct: 0,
    explanation: "W OZW stosujemy 300 mg ASA, dajemy pacjentowi do rozgryzienia. Celem podaży jest działanie przeciwpłytkowe ASA należącego do NLPZ."
  },
  {
    id: 6,
    category: "farmakologia",
    question: "Jaka jest dawka TXA (Kwasu traneksamowego) u dorosłych?",
    options: ["1000 mg", "2000 mg", "500 mg", "1500 mg"],
    correct: 0,
    explanation: "Dawka TXA dla dorosłych wynosi 1 g (1000 mg)."
  },
  {
    id: 7,
    category: "farmakologia",
    question: "Jaka jest dawka TXA (Kwasu traneksamowego) u dzieci?",
    options: ["20 mg/kg", "30 mg/kg", "15 mg/kg", "10 mg/kg"],
    correct: 0,
    explanation: "20 mg/kg masy ciała to dawka TXA dla dzieci, tym samym jest to maksymalna dawka dobowa wg. ChPL."
  },
  {
    id: 8,
    category: "farmakologia",
    question: "Jakie jest wskazanie do użycia TXA (Kwas traneksamowy)?",
    options: ["Zakrzepica żył", "Aktywne krwotoki", "Niedrożność mechaniczna jelit", "Zaburzenia czynności nerek"],
    correct: 1,
    explanation: "TXA używamy przy wszelkiego rodzaju krwotokach, podajemy głównie i.v. we wlewie trwającym 10 minut."
  },
  {
    id: 9,
    category: "farmakologia",
    question: "Jaka jest dawka lignokainy po 3. defibrylacji rytmu VF/pVT?",
    options: ["150 mg", "200 mg", "100 mg", "50 mg"],
    correct: 2,
    explanation: "W VF/pVT możemy użyć lignokainy zamiast amiodaronu w dawce 100 mg po 3. defibrylacji wg. wytycznych ERC 2025."
  },
  {
    id: 10,
    category: "farmakologia",
    question: "Jaka jest dawka lignokainy po 5. defibrylacji rytmu VF/pVT?",
    options: ["100 mg", "200 mg", "50 mg", "25 mg"],
    correct: 2,
    explanation: "W VF/pVT możemy użyć lignokainy zamiast amiodaronu w dawce 50 mg po 5. defibrylacji wg. wytycznych ERC 2025."
  },
  {
    id: 11,
    category: "farmakologia",
    question: "Jakie jest inne zastosowanie lignokainy w ZRM oprócz NZK?",
    options: ["Ból zęba", "Ból głowy", "Bóle mięśniówki gładkiej", "Bóle stawów"],
    correct: 2,
    explanation: "Lignokaina wykazuje działanie rozkurczowe na mięśnie gładkie, co pomaga w uśmierzaniu bólu spastycznego. Dawka ok. 1 mg/kg."
  },
  {
    id: 12,
    category: "farmakologia",
    question: "Które z poniższych jest przeciwwskazaniem do zastosowania lignokainy?",
    options: ["Zakrzepica żył i tętnic", "Blok AV II i III stopnia", "Częstoskurcz komorowy", "Migotanie przedsionków"],
    correct: 1,
    explanation: "Przeciwwskazaniem do zastosowania lignokainy są bloki AV 2 i 3 stopnia, a wskazaniem częstoskurcze komorowe."
  },
  {
    id: 13,
    category: "farmakologia",
    question: "Jaka jest dawka lignokainy dla dzieci wg. ChPL?",
    options: ["0.5 mg/kg", "1.5 mg/kg", "1 mg/kg", "2 mg/kg"],
    correct: 2,
    explanation: "American Heart Association w swoich standardach zaleca podawanie lignokainy w stanach nagłych w dawce 1 mg/kg."
  },
  {
    id: 14,
    category: "farmakologia",
    question: "Jaka jest dawka magnezu w Torsade de Pointes?",
    options: ["2 g i.v.", "1.2 g i.v.", "2 mg i.v.", "1.2 mg i.v."],
    correct: 0,
    explanation: "W TdP podajemy 2 g magnezu dożylnie (bolus 2-3 min)."
  },
  {
    id: 15,
    category: "farmakologia",
    question: "Jaka jest dawka magnezu w ciężkim stanie przedrzucawkowym lub rzucawce?",
    options: ["4 g i.v. we wlewie", "2 g i.v. we wlewie", "4 mg i.v. we wlewie", "2 mg i.v. we wlewie"],
    correct: 0,
    explanation: "Podajemy 4 g magnezu we wlewie dożylnym rozcieńczony w 250 ml 0.9% NaCl lub 5% glukozie."
  },
  {
    id: 16,
    category: "farmakologia",
    question: "Jakie wskazanie jest do użycia Mannitolu?",
    options: ["Bezmocz", "Nadciśnienie tętnicze", "Wzrost ciśnienia śródczaszkowego", "Obrzęk płuc"],
    correct: 2,
    explanation: "Mannitol to diuretyk osmotyczny, który zmniejsza ciśnienie śródczaszkowe i obrzęk mózgu."
  },
  {
    id: 17,
    category: "farmakologia",
    question: "Jaka jest dawka Mannitolu u dorosłych?",
    options: ["1.5-2 g/kg", "0.15-0.2 g/kg", "0.5-1.5 g/kg", "1 g/kg"],
    correct: 0,
    explanation: "Zazwyczaj podawana dawka Mannitolu to 1.5-2 g/kg (10-13 ml/kg) we wlewie trwającym 30-60 min."
  },
  {
    id: 18,
    category: "farmakologia",
    question: "Jaka jest dawka Mannitolu u dzieci?",
    options: ["Nie stosuje się tego leku u dzieci", "2 g/kg", "0.5-1.5 g/kg", "0.5-1.5 mg/kg"],
    correct: 2,
    explanation: "Mannitol stosuje się u dzieci w dawce 0.5-1.5 g/kg w celu zmniejszenia ciśnienia śródczaszkowego i obrzęku mózgu."
  },
  {
    id: 19,
    category: "farmakologia",
    question: "Który z podanych poniżej jest przeciwwskazaniem do użycia Mannitolu?",
    options: ["Obrzęk mózgu", "Wzrost ciśnienia śródczaszkowego", "Obrzęk płuc", "Nadciśnienie tętnicze"],
    correct: 2,
    explanation: "W przypadku kardiogennego obrzęku płuc, jeżeli podamy pacjentowi Mannitol to pogorszymy stan, ponieważ zwiększymy objętość płynu w naczyniach, którego niewydolne serce nie może przepompować."
  },
  {
    id: 20,
    category: "farmakologia",
    question: "Jaka jest dawka metamizolu u dorosłych?",
    options: ["5 mg/kg", "100-500 mg", "250 mg", "0.5-2.5 g"],
    correct: 3,
    explanation: "Podane dawki metamizolu mogą okazać się za małe, przyjmuje się dawki ogólne 0.5-2.5 g w rozcieńczeniu minimum 100 ml."
  },
  {
    id: 21,
    category: "farmakologia",
    question: "Jaka jest dawka metamizolu u dzieci?",
    options: ["2 mg/kg", "5 mg/kg", "8-16 mg/kg", "16-30 mg/kg"],
    correct: 2,
    explanation: "Wg. ChPL dawka metamizolu dla dzieci to 8-16 mg/kg (często przyjmuje się dawkę 10 mg/kg)."
  },
  {
    id: 22,
    category: "farmakologia",
    question: "Po co w ZRM używamy metamizolu?",
    options: ["Nadciśnienie tętnicze", "Wzrost ciśnienia śródgałkowego", "Bóle oraz gorączka", "Zaburzenia czynności nerek"],
    correct: 2,
    explanation: "Metamizol to silny lek przeciwbólowy oraz przeciwgorączkowy, wykazuje dodatkowe działanie spazmolityczne (rozkurczowe)."
  },
  {
    id: 23,
    category: "farmakologia",
    question: "Jakie dodatkowe działanie prezentuje metamizol?",
    options: ["Rozkurczowe", "Skurczowe", "Przeciwdrgawkowe", "Obniżające tętno"],
    correct: 0,
    explanation: "Metamizol to silny lek przeciwbólowy oraz przeciwgorączkowy, wykazuje dodatkowe działanie spazmolityczne (rozkurczowe)."
  },
  {
    id: 24,
    category: "farmakologia",
    question: "Czy metamizol jest bezpieczny dla kobiet w ciąży?",
    options: ["Tak", "Nie", "Tak, ale tylko w małych dawkach", "Tak, ale tylko w pierwszym trymestrze"],
    correct: 1,
    explanation: "Wg. ChPL ciąża jest przeciwwskazaniem do podaży leku."
  },
  {
    id: 25,
    category: "farmakologia",
    question: "Jaka jest dawka metoklopramidu dla dorosłych?",
    options: ["10 mg i.v.", "20 mg i.v.", "30 mg i.v.", "5 mg i.v."],
    correct: 0,
    explanation: "Jednorazowa dawka metoklopramidu wynosi 10 mg."
  },
  {
    id: 26,
    category: "farmakologia",
    question: "Jaka jest dawka metoklopramidu dla dzieci?",
    options: ["0.3 mg/kg", "0.5 mg/kg", "1 mg/kg", "0.15 mg/kg"],
    correct: 3,
    explanation: "Dawka dla dzieci to 0.15 mg/kg, lecz pamiętaj o działaniu niepożądanym leku - ryzyko wystąpienia zaburzeń pozapiramidowych. Stosujemy u dzieci głównie zwalczając wymioty po zabiegach chirurgicznych lub chemioterapii."
  },
  {
    id: 27,
    category: "farmakologia",
    question: "Jakie jest wskazanie do podaży metoklopramidu?",
    options: ["Wymioty", "Zawroty głowy", "Ból głowy", "Obrzęk mózgu"],
    correct: 0,
    explanation: "Metoklopramid jest lekiem przeciwwymiotnym."
  },
  {
    id: 28,
    category: "farmakologia",
    question: "Jaka jest dawka metoprololu?",
    options: ["5 mg", "10 mg", "15 mg", "20 mg"],
    correct: 0,
    explanation: "Dawka metoprololu to 5 mg podawana z szybkością 1 do 2 mg na minutę."
  },
  {
    id: 29,
    category: "farmakologia",
    question: "Do jakiej maksymalnej dawki możesz podać metoprolol?",
    options: ["20 mg", "30 mg", "40 mg", "50 mg"],
    correct: 0,
    explanation: "Zwykle wystarcza do 15 mg, lecz można podać 20 mg - ChPL mówi o tym, że dawki 20 mg i powyżej nie spowodują większej korzyści klinicznej dla pacjenta."
  },
  {
    id: 30,
    category: "farmakologia",
    question: "Z jakiej grupy leków jest metoprolol?",
    options: ["Diuretyk", "Inhibitor konwertazy angiotensyny", "Bloker Kanału Wapniowego", "Beta-Bloker"],
    correct: 3,
    explanation: "Metoprolol należy do grupy beta-blokerów (beta-adrenolityki) – zmniejsza akcję serca, zmniejsza siłę skurczu i tym samym obniża ciśnienie tętnicze krwi."
  },
  {
    id: 31,
    category: "farmakologia",
    question: "Jakie jest wskazanie do użycia metoprololu?",
    options: ["Leczenie częstoskurczów", "Zespół Brugadów", "Blok AV", "Bradykardia zatokowa"],
    correct: 0,
    explanation: "Metoprolol używamy do leczenia częstoskurczów (głównie nadkomorowych) np. AF z szybką odpowiedzią komór - zwolni rytm komór i obniży tętno."
  },
  {
    id: 32,
    category: "farmakologia",
    question: "Jaka jest dawka midazolamu dla dorosłych?",
    options: ["10 mg", "5-15 mg", "2-2.5 mg", "1 mg/kg"],
    correct: 2,
    explanation: "Midazolam podajemy w dawkach frakcjonowanych z kontrolą sedacji pacjenta. Pamiętaj o mniejszej dawce dla osób starszych - są podatniejsi na benzodiazepiny."
  },
  {
    id: 33,
    category: "farmakologia",
    question: "Jaka jest dawka midazolamu dla dzieci?",
    options: ["0.05-0.1 mg/kg", "0.05-0.1 mcg/kg", "2-2.5 mg/kg", "0.5-1 mg/kg"],
    correct: 0,
    explanation: "Midazolam dla dzieci podajemy w dawce 0.05-0.1 mg/kg. Dawka całkowita dla dzieci 6 msc - 5 r.ż. to < 6 mg, a dla dzieci 6 - 12 r.ż. to < 10 mg."
  },
  {
    id: 34,
    category: "farmakologia",
    question: "Jaka jest dawka midazolamu podawanego donosowo dla dzieci w celu przerwania drgawek?",
    options: ["Nie podajemy dzieciom midazolamu", "0.3 mg/kg", "0.05-0.1 mg/kg", "Midazolamu nie możemy podać donosowo"],
    correct: 1,
    explanation: "Wytyczne ERC 2025 wskazują na to, że midazolam jest lekiem pierwszego rzutu w celu przerwania drgawek. Wykorzystujemy końcówkę MAD do podaży leków donosowo w dawce 0.3 mg/kg (maksymalnie 10 mg)."
  },
  // --- MORFINA ---
  {
    id: 35,
    category: "farmakologia",
    question: "Jaka jest początkowa dawka siarczanu morfiny podawana frakcjonowanie (i.v./i.o.) u dorosłego pacjenta w silnym bólu lub OZW?",
    options: ["1 - 2 mg", "3 - 5 mg", "10 - 15 mg", "20 mg"],
    correct: 1,
    explanation: "U dorosłych podajemy zazwyczaj 3-5 mg i.v. w dawkach frakcjonowanych, obserwując reakcję pacjenta."
  },
  {
    id: 36,
    category: "farmakologia",
    question: "Jaką dawkę siarczanu morfiny podasz dziecku w celu zniesienia silnego bólu?",
    options: ["10 - 20 µg/kg m.c.", "50 - 100 µg/kg m.c.", "100 - 200 µg/kg m.c.", "0.5 - 1 mg/kg m.c."],
    correct: 2,
    explanation: "Dawka morfiny dla dzieci to 100-200 µg/kg m.c. i.v./i.o."
  },
  {
    id: 37,
    category: "farmakologia",
    question: "Wskaż bezwzględne przeciwwskazanie do podania morfiny u pacjenta po wypadku komunikacyjnym:",
    options: ["Złamanie otwarte uda", "Amputacja urazowa", "Uraz głowy / OUN z podejrzeniem nadciśnienia śródczaszkowego", "Uraz miednicy"],
    correct: 2,
    explanation: "Morfina hamuje ośrodek oddechowy, prowadząc do wzrostu CO2, co drastycznie podnosi ciśnienie wewnątrzczaszkowe, dlatego jest przeciwwskazana w urazach TBI."
  },

  // --- NALOKSON ---
  {
    id: 38,
    category: "farmakologia",
    question: "Standardowa dawka początkowa Naloksonu (Narcan) u dorosłego pacjenta z depresją oddechową po opioidach wynosi:",
    options: ["0.1 mg", "0.4 mg", "1 mg", "2 mg"],
    correct: 1,
    explanation: "Standardowo podaje się 0.4 mg (jedna ampułka) i miareczkuje do powrotu prawidłowego oddechu."
  },
  {
    id: 39,
    category: "farmakologia",
    question: "Jaką dawkę Naloksonu podasz dziecku ważącemu poniżej 20 kg (poza NZK)?",
    options: ["0.01 mg/kg m.c.", "0.1 mg/kg m.c.", "0.4 mg/kg m.c.", "2 mg niezależnie od masy"],
    correct: 0,
    explanation: "Dawka dla dzieci poniżej 20 kg to 0.01 mg/kg (w przypadku NZK podaje się dawkę wyższą: 0.1 mg/kg)."
  },
  {
    id: 40,
    category: "farmakologia",
    question: "U jakiej grupy pacjentów podanie Naloksonu wymaga szczególnej ostrożności ze względu na ryzyko ostrego zespołu abstynencyjnego i agresji?",
    options: ["U chorych na astmę", "U chorych na cukrzycę", "U osób przewlekle uzależnionych od opioidów", "U pacjentów po urazie czaszkowo-mózgowym"],
    correct: 2,
    explanation: "Szybkie odwrócenie działania opioidów u osoby uzależnionej wywołuje natychmiastowy głód narkotyczny, pobudzenie i agresję."
  },

  // --- NITROGLICERYNA ---
  {
    id: 41,
    category: "farmakologia",
    question: "Jaką dawkę nitrogliceryny podaje się podjęzykowo jednorazowo u dorosłego?",
    options: ["100 µg", "400 µg (0.4 mg)", "800 µg", "1 mg"],
    correct: 1,
    explanation: "Jedna dawka (tabletka lub wziew z aerozolu) zawiera najczęściej 400 µg nitrogliceryny."
  },
  {
    id: 42,
    category: "farmakologia",
    question: "Nitroglicerynę stosujemy m.in. w kardiogennym obrzęku płuc u dorosłych. Czy lek ten stosuje się w rutynowych dawkach u dzieci?",
    options: ["Tak, w dawce 10 µg/kg", "Tak, w dawce 400 µg niezależnie od wieku", "Nie, brak danych dotyczących stosowania w pediatrii w warunkach ZRM", "Tak, w dawce o połowę mniejszej niż u dorosłych"],
    correct: 2,
    explanation: "Nitrogliceryna w postaci podjęzykowej nie jest przeznaczona do rutynowego stosowania u dzieci."
  },
  {
    id: 43,
    category: "farmakologia",
    question: "Bezwzględnym przeciwwskazaniem do podania nitrogliceryny u dorosłego pacjenta z bólem w klatce piersiowej jest:",
    options: ["Tachykardia pow. 100/min", "Nadciśnienie tętnicze 180/100", "Ciśnienie skurczowe poniżej 90 mmHg", "Duszność i spadek SpO2 do 92%"],
    correct: 2,
    explanation: "Nitrogliceryna rozszerza łożysko żylne, co przy SBP < 90 mmHg doprowadzi do zagrażającego życiu wstrząsu."
  },

  // --- NORADRENALINA ---
  {
    id: 44,
    category: "farmakologia",
    question: "Zalecana początkowa dawka noradrenaliny (Levonoru) we wlewie ciągłym u dorosłego we wstrząsie to:",
    options: ["0.01 - 0.05 mg/h", "0.4 - 0.8 mg/h (0.05 - 1.5 µg/kg/min)", "2 - 10 µg/min", "10 - 20 mg/h"],
    correct: 1,
    explanation: "Startowa dawka we wstrząsie to 0.4 - 0.8 mg/h, aby obkurczyć naczynia obwodowe."
  },
  {
    id: 45,
    category: "farmakologia",
    question: "Noradrenalina w warunkach ZRM u pacjentów pediatrycznych:",
    options: ["Jest lekiem pierwszego rzutu, dawka to 1 µg/kg/min", "Nie ustalono bezpieczeństwa stosowania u dzieci (brak danych w standardowej liście ZRM)", "Podaje się ją domięśniowo w dawce 0.1 mg", "Zastępuje adrenalinę w NZK"],
    correct: 1,
    explanation: "Zgodnie z ChPL, bezpieczeństwo stosowania noradrenaliny u dzieci nie jest w pełni ustalone (zazwyczaj preferuje się adrenalinę)."
  },
  {
    id: 46,
    category: "farmakologia",
    question: "Kiedy podaż noradrenaliny jest przeciwwskazana u pacjenta wydolnego hemodynamicznie (poza stanem bezpośredniego zagrożenia życia)?",
    options: ["W chorobach zakrzepowych i niedociśnieniu bezpośrednio po zawale mięśnia sercowego", "W cukrzycy typu 2", "W Przewlekłej Obturacyjnej Chorobie Płuc", "W obrzęku mózgu"],
    correct: 0,
    explanation: "Noradrenalina silnie kurczy naczynia, co w stanach zakrzepowych lub niedokrwieniu serca może pogorszyć perfuzję (w stanie zagrożenia życia przeciwwskazania te pomijamy)."
  },

  // --- PAPAWERYNA ---
  {
    id: 47,
    category: "farmakologia",
    question: "Standardowa dawka spazmolityczna papaweryny u osoby dorosłej (i.m. lub s.c.) wynosi:",
    options: ["10 - 20 mg", "40 - 120 mg", "200 - 300 mg", "500 mg"],
    correct: 1,
    explanation: "Dawka papaweryny dla osoby dorosłej wynosi 40-120 mg."
  },
  {
    id: 48,
    category: "farmakologia",
    question: "Jaka jest dawka papaweryny dla dziecka w przypadku silnej kolki jelitowej?",
    options: ["10 mg/kg m.c.", "1 mg/kg m.c.", "40 mg w bolusie", "Leku nie należy stosować u dzieci"],
    correct: 3,
    explanation: "Papaweryna nie jest przeznaczona do stosowania w pediatrii."
  },
  {
    id: 49,
    category: "farmakologia",
    question: "Głównym przeciwwskazaniem kardiologicznym do zastosowania papaweryny jest:",
    options: ["Niedociśnienie tętnicze", "Zaburzenia przewodnictwa w mięśniu sercowym", "Migotanie przedsionków", "Obrzęk płuc"],
    correct: 1,
    explanation: "Papaweryna wywiera bezpośredni, depresyjny wpływ na układ przewodzący serca i może wywołać bloki."
  },

  // --- PARACETAMOL ---
  {
    id: 50,
    category: "farmakologia",
    question: "Standardowa dawka dożylna paracetamolu u osoby dorosłej w leczeniu bólu wynosi:",
    options: ["0.5 g", "1 g", "1.5 g", "2 g"],
    correct: 1,
    explanation: "Jednorazowa dawka i.v. z gotowego flakonu to zazwyczaj 1 g (1000 mg)."
  },
  {
    id: 51,
    category: "farmakologia",
    question: "Dawka i.v. paracetamolu dla dziecka powyżej 6 roku życia (lub > 33 kg) wynosi:",
    options: ["5 mg/kg m.c.", "10 - 15 mg/kg m.c.", "20 - 30 mg/kg m.c.", "50 mg/kg m.c."],
    correct: 1,
    explanation: "U starszych dzieci dawka to 10-15 mg/kg m.c."
  },
  {
    id: 52,
    category: "farmakologia",
    question: "Paracetamol, w przeciwieństwie do NLPZ (np. Ketonal, Ibuprofen), jest lekiem pierwszego wyboru m.in. w krwawieniach, ale jest bezwzględnie przeciwwskazany w:",
    options: ["Ciężkiej niewydolności wątroby i chorobie alkoholowej", "Chorobie wrzodowej żołądka", "Astmie oskrzelowej", "Zaburzeniach krzepnięcia krwi"],
    correct: 0,
    explanation: "Paracetamol jest silnie hepatotoksyczny w przedawkowaniu, a u osób z uszkodzoną wątrobą ryzyko to drastycznie rośnie."
  },

  // --- PWE & PŁYN RINGERA ---
  {
    id: 53,
    category: "farmakologia",
    question: "Standardowy uderzeniowy bolus Płynu Wieloelektrolitowego (PWE) lub Ringera we wstrząsie (hipotensji) u osoby dorosłej i u dziecka to zazwyczaj:",
    options: ["1 ml/kg m.c.", "10 ml/kg m.c.", "30 ml/kg m.c.", "50 ml/kg m.c."],
    correct: 1,
    explanation: "Uśredniony bolus w hipotensji wynosi 10 ml/kg (często powtarzany lub stosowany jako 20 ml/kg u dorosłych wg ALS.)."
  },
  {
    id: 54,
    category: "farmakologia",
    question: "W jakim stanie klinicznym pacjenta PWE oraz Płyn Ringera będą przeciwwskazane z uwagi na ryzyko pogorszenia wydolności oddechowej?",
    options: ["We wstrząsie anafilaktycznym", "W przewodnieniu i obrzęku płuc", "W odwodnieniu z powodu wymiotów", "W masywnych oparzeniach"],
    correct: 1,
    explanation: "Każdy płyn infuzyjny u pacjenta z obrzękiem płuc lub niewydolnością serca może doprowadzić do śmiertelnego zalania pęcherzyków płucnych."
  },

  // --- PRASUGREL & TIKAGRELOR ---
  {
    id: 55,
    category: "farmakologia",
    question: "Dawka nasycająca Prasugrelu (Efient) u dorosłego w OZW to:",
    options: ["10 mg", "60 mg", "75 mg", "180 mg"],
    correct: 1,
    explanation: "Prasugrel podajemy w dawce 60 mg p.o."
  },
  {
    id: 56,
    category: "farmakologia",
    question: "Dawka nasycająca Tikagreloru (Brilique) u dorosłego w OZW to:",
    options: ["60 mg", "90 mg", "180 mg", "300 mg"],
    correct: 2,
    explanation: "Tikagrelor stosujemy w dawce 180 mg p.o."
  },
  {
    id: 57,
    category: "farmakologia",
    question: "Głównym przeciwwskazaniem do zastosowania Prasugrelu lub Tikagreloru u pacjenta z zawałem (OZW) jest:",
    options: ["Tachykardia", "Nadciśnienie tętnicze pow. 160/90 mmHg", "Czynne, aktywne krwawienie (np. z przewodu pokarmowego)", "Cukrzyca typu 2"],
    correct: 2,
    explanation: "Jako leki silnie przeciwpłytkowe, mogą one doprowadzić do niemożliwego do opanowania krwotoku u pacjentów z czynnym krwawieniem."
  },

  // --- SALBUTAMOL ---
  {
    id: 58,
    category: "farmakologia",
    question: "Standardowa dawka salbutamolu (Ventolin) w nebulizacji w ataku duszności u osoby dorosłej i pacjentów pow. 2 roku życia wynosi:",
    options: ["1 mg", "2.5 mg", "5 mg", "10 mg"],
    correct: 2,
    explanation: "Dorośli i starsze dzieci otrzymują 5 mg salbutamolu w nebulizacji."
  },
  {
    id: 59,
    category: "farmakologia",
    question: "Jaką dawkę salbutamolu w nebulizacji podasz dziecku poniżej 2 roku życia z dusznością (obturacją)?",
    options: ["1.25 mg", "2.5 mg", "5 mg", "Salbutamolu nie stosuje się poniżej 2 r.ż."],
    correct: 1,
    explanation: "Zalecana dawka dla małych dzieci (< 2 r.ż.) to 2.5 mg w nebulizacji."
  },

  // --- NaCl 0.9% ---
  {
    id: 60,
    category: "farmakologia",
    question: "Sól fizjologiczna (0.9% NaCl) jest najpopularniejszym roztworem. Czy u dorosłego pacjenta z bezmoczem i niewydolnością nerek należy toczyć ten płyn bez ograniczeń?",
    options: ["Tak, aby 'przepłukać' nerki", "Nie, ponieważ pacjent jest narażony na natychmiastowe przewodnienie i obrzęk płuc", "Tak, o ile podamy go z Furosemidem", "Tak, NaCl 0.9% nie ma przeciwwskazań"],
    correct: 1,
    explanation: "Niewydolność nerek i bezmocz to bezwzględne przeciwwskazanie do swobodnej podaży płynów – organizm pacjenta nie pozbędzie się podanej wody."
  },

  // --- TORECAN (THIETHYLPERAZINE) ---
  {
    id: 61,
    category: "farmakologia",
    question: "Standardowa jednorazowa dawka leku Torecan u dorosłych wynosi:",
    options: ["1 mg", "6.5 mg", "10 mg", "19.5 mg"],
    correct: 1,
    explanation: "Zazwyczaj podaje się 6.5 mg (p.r., i.m., i.v.), z maksymalną dobową dawką do 19.5 mg."
  },
  {
    id: 62,
    category: "farmakologia",
    question: "Jakie ograniczenie wiekowe (wg ChPL) dotyczy leku Torecan?",
    options: ["Przeciwwskazany u dzieci poniżej 2 roku życia", "Przeciwwskazany u dzieci poniżej 6 roku życia", "Przeciwwskazany poniżej 15 roku życia", "Przeciwwskazany u osób powyżej 65 roku życia"],
    correct: 2,
    explanation: "Lek jest bezwzględnie przeciwwskazany do 15 roku życia ze względu na ryzyko silnych objawów pozapiramidowych."
  },
  {
    id: 63,
    category: "farmakologia",
    question: "Bezwzględnym przeciwwskazaniem do podania Torecanu (Tietyloperazyny) dorosłemu pacjentowi z wymiotami/zawrotami głowy jest:",
    options: ["Zaburzenia świadomości i ciężka depresja OUN", "Hipotensja 110/70", "Częstoskurcz nadkomorowy", "Ostre zatrucie pokarmowe"],
    correct: 0,
    explanation: "Torecan działa hamująco na ośrodkowy układ nerwowy, w stanach depresji OUN może doprowadzić do śpiączki lub bezdechu."
  },

  // --- URAPIDIL ---
  {
    id: 64,
    category: "farmakologia",
    question: "W jakich dawkach dożylnie u dorosłego miareczkuje się Urapidil (Ebrantil) w celu zbicia nagłego nadciśnienia tętniczego?",
    options: ["1 - 5 mg", "10 - 50 mg", "100 - 200 mg", "250 mg"],
    correct: 1,
    explanation: "Standardowo dawkuje się 10-50 mg i.v., zachowując limit 100 mg jako dawkę dobową."
  },
  {
    id: 65,
    category: "farmakologia",
    question: "Czy Urapidil w postaci ampułek z ZRM jest zarejestrowany do standardowego obniżania ciśnienia u dzieci?",
    options: ["Tak, w dawce 1 mg/kg m.c.", "Nie, nie zaleca się stosowania poniżej 18 roku życia", "Tak, w dawce o połowę mniejszej niż u dorosłych", "Tak, ale tylko we wlewie ciągłym"],
    correct: 1,
    explanation: "Zgodnie ze standardową wiedzą ratowniczą, leku tego nie stosuje się w pediatrii (< 18 r.ż.)."
  },
  {
    id: 66,
    category: "farmakologia",
    question: "Która z wad serca stanowi wprost przeciwwskazanie do podania Urapidilu?",
    options: ["Niedomykalność zastawki mitralnej", "Ubytek przegrody międzyprzedsionkowej", "Stenoza aortalna", "Zespół wypadania płatka zastawki mitralnej"],
    correct: 2,
    explanation: "Zwężenie zastawki aortalnej (stenoza aortalna) znacznie upośledza rzut serca, nagłe rozszerzenie naczyń Urapidilem doprowadzi do gwałtownego niedokrwienia."
  },

  // --- WODOROWĘGLAN SODU ---
  {
    id: 67,
    category: "farmakologia",
    question: "Jaka jest dawka i.v. wodorowęglanu sodu (Natrium Bicarbonicum 8,4%) u dorosłych i dzieci m.in. w ciężkiej kwasicy metabolicznej?",
    options: ["0.5 mEq/kg m.c.", "1 mEq/kg m.c.", "2 mEq/kg m.c.", "5 mEq/kg m.c."],
    correct: 1,
    explanation: "Podaż wynosi 1 mEq/kg masy ciała (1 ml roztworu 8.4% to 1 mEq)."
  },
  {
    id: 68,
    category: "farmakologia",
    question: "Podaż wodorowęglanu sodu u dzieci (zwłaszcza u niemowląt) musi być wolna i bardzo ostrożna. Dlaczego?",
    options: ["Szybki bolus hiperosmolarny grozi krwawieniem do komór mózgu", "Powoduje obrzęk głośni", "Wywołuje natychmiastowy spadek glukozy we krwi", "Wywołuje trwały blok serca"],
    correct: 0,
    explanation: "Zbyt szybkie podanie silnie hiperosmolarnego roztworu wodorowęglanu sodu uszkadza naczynia mózgowe u niemowląt i może doprowadzić do wylewów krwawych."
  },
  {
    id: 69,
    category: "farmakologia",
    question: "Kiedy podaż wodorowęglanu sodu (jako buforu) jest absolutnie przeciwwskazana i nieskuteczna w ratownictwie?",
    options: ["W kwasicy hiperchloremicznej", "W zatruciu aspiryną", "W zasadowicy oraz przy głębokiej hipowentylacji (retencji CO2)", "W zatruciu trójpierścieniowymi lekami przeciwdepresyjnymi (TLPD)"],
    correct: 2,
    explanation: "Podanie buforu osobie, która nie wentyluje (nie wydycha CO2), tylko drastycznie pogorszy jej stan (wodorowęglan we krwi rozkłada się do CO2, który pacjent musi wydmuchać)."
  }
];
