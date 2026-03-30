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
  },
  {
    id: 70,
    category: "farmakologia",
    question: "Ile adenozyny mieści się w fiolce 2ml ?",
    options: ["6mg", "6 mcg", "3mg", "2mg"],
    correct: 0,
    explanation: "Standardowa ampułka adenozyny o pojemności 2 ml ma stężenie 3 mg/ml, co daje łącznie 6 mg substancji czynnej."
  },
  {
    id: 71,
    category: "farmakologia",
    question: "W czym rozcieńczamy adenozyne ?",
    options: ["Glukagon", "Glukoza 5 %", "Glukoza 10%", "Nie rozcieńczamy"],
    correct: 3,
    explanation: "Adenozyny nie rozcieńczamy. Lek ten podajemy w czystej postaci, a dopiero za nim 'popychamy' go dużą ilością soli fizjologicznej (tzw. flush)."
  },
  {
    id: 72,
    category: "farmakologia",
    question: "Jak podajemy adenozyne ?",
    options: ["I.V szybki bolus popchnięty NaCl", "I.V pompa w 2 min", "I.V szybki bolus", "I.M szybki bolus"],
    correct: 0,
    explanation: "Czas półtrwania adenozyny we krwi wynosi dosłownie kilka sekund. Musi być podana jako strzał (1-2 sekundy) z natychmiastowym popchnięciem 20 ml NaCl i uniesieniem kończyny, aby dotarła do serca."
  },
  {
    id: 73,
    category: "farmakologia",
    question: "Jakie są wskazania do podania Adenozyny ?",
    options: ["WPW i SVT", "AF i WPW", "POCHp", "Hipotensja"],
    correct: 0,
    explanation: "Adenozynę podajemy m.in. w częstoskurczu nadkomorowym (SVT) oraz w niektórych, wąskich postaciach częstoskurczu z zespołem WPW (AVRT). Uwaga: WPW w połączeniu z migotaniem przedsionków (AF) jest bezwzględnym przeciwwskazaniem!"
  },
  {
    id: 74,
    category: "farmakologia",
    question: "Jak dawkujemy adenozyne u dzieci ?",
    options: ["0.1 mg następne 0.2 mg", "0.1 mcg w każdej dawce", "1mg następnie 2 mg", "Nie podajemy dzieciom"],
    correct: 0,
    explanation: "W pediatrii pierwsza dawka wynosi 0.1 mg/kg m.c. (maks. 6 mg), a w przypadku braku reakcji kolejna dawka to 0.2 mg/kg m.c. (maks. 12 mg)."
  },
  {
    id: 75,
    category: "farmakologia",
    question: "Jakie są przeciwskazania do podania adrenaliny ?",
    options: ["Hipowolemia", "Bradykardia", "Anafilaksja", "Obturacja oskrzeli"],
    correct: 0,
    explanation: "Niewyrównana hipowolemia jest silnym przeciwwskazaniem do stosowania adrenaliny we wlewie ciągłym – najpierw należy napełnić pacjenta płynami, a dopiero potem obkurczać mu naczynia aminami presyjnymi."
  },
  {
    id: 76,
    category: "farmakologia",
    question: "Dawkowanie adrenaliny w NZK ?",
    options: ["1000 mcg", "500 mcg", "300 mcg", "2-10 mcg"],
    correct: 0,
    explanation: "Standardowa uderzeniowa dawka w rutynowym zatrzymaniu krążenia u osoby dorosłej to 1 mg, czyli 1000 mcg."
  },
  {
    id: 77,
    category: "farmakologia",
    question: "Dawkowanie adrenaliny we wstrząsie anafilaktycznym ?",
    options: ["1000 mcg", "500 mcg", "2-10 mcg", "300 mcg"],
    correct: 1,
    explanation: "W leczeniu dorosłych we wstrząsie anafilaktycznym lek podaje się w jednorazowej dawce 0.5 mg, czyli 500 mcg."
  },
  {
    id: 78,
    category: "farmakologia",
    question: "Dawkowanie adrenaliny w napadzie astmy oskrzelowej ?",
    options: ["1mg", "2-10 mcg", "0.5mcg do 10 mcg", "300 mcg"],
    correct: 3,
    explanation: "W ciężkim, opornym na inne leki napadzie astmy, w ramach ratownictwa podaje się 0.3 mg (300 mcg) adrenaliny s.c. lub i.m."
  },
  {
    id: 79,
    category: "farmakologia",
    question: "W przypadku anafilaksji jak podajemy epiferyne ?",
    options: ["I.M", "I.V", "P.R", "P.O"],
    correct: 0,
    explanation: "Drogą pierwszego wyboru i najbardziej bezpieczną w anafilaksji jest podanie I.M. (domięśniowo), najczęściej w przednio-boczną powierzchnię uda."
  },
  {
    id: 80,
    category: "farmakologia",
    question: "Jaka jest dawka adrenaliny we wstrząsie kardiogennym u dzieci?",
    options: ["2-10 mcg/min", "0.05-0.5 mcg/kg/min", "0.05-1 mcg/kg/min", "0.01-0.5 mcg/kg/min"],
    correct: 2,
    explanation: "Podaż ciągła we wlewie u dzieci we wstrząsie mieści się w granicach od 0.05 do 1 mcg/kg/min w zależności od wymaganego efektu (inotropowego czy wazopresyjnego)."
  },
  {
    id: 81,
    category: "farmakologia",
    question: "Jaka jest dawka adrenaliny w ciężkiej bradykardii opornej na atropinę u dzieci?",
    options: ["1 mg i.v", "2-10 mcg/min", "0.05-0.5 mcg/kg/min", "0.05-1 mcg/kg/min"],
    correct: 3,
    explanation: "Analogicznie jak we wstrząsie, w ciężkiej bradykardii u dzieci podtrzymuje się rzut serca i tętno wlewem z dawkowaniem 0.05-1 mcg/kg/min."
  },
  {
    id: 82,
    category: "farmakologia",
    question: "Dawkowanie atropiny u dzieci w zatruciu ?",
    options: ["10 mcg", "50 mcg", "20mcg", "1 mg"],
    correct: 1,
    explanation: "W zatruciach np. związkami fosforoorganicznymi stosuje się podwyższone dawki rzędu 0.05 mg/kg m.c., czyli 50 mcg/kg m.c."
  },
  {
    id: 83,
    category: "farmakologia",
    question: "Dawkowanie atropiny u dzieci w NZK ?",
    options: ["20 mcg", "10mcg", "100mcg", "30 mcg"],
    correct: 0,
    explanation: "W specyficznych wskazaniach bradykardii/NZK o podłożu wagotonicznym u dzieci podaje się dawkę 0.02 mg/kg, czyli 20 mcg/kg."
  },
  {
    id: 84,
    category: "farmakologia",
    question: "Dawkowanie atropimy u dorosłych w NZK  ?",
    options: ["3mg", "1 mg", "50 mcg", "1-2 mg"],
    correct: 0,
    explanation: "Jeśli decydujemy się na Atropinę w asystolii/PEA (podejrzenie podwyższonego napięcia nerwu błędnego), podaje się jednorazowy duży bolus rzędu 3 mg."
  },
  {
    id: 85,
    category: "farmakologia",
    question: "Dawkowanie atropiny u dorosłych w braykardii zatokowej ?",
    options: ["Frakcjonowane 3 mg", "Bolus 3 mg", "3 mg/ min pompa", "3mg w niskim rozcieńczeniu w NaCl"],
    correct: 0,
    explanation: "W objawowej bradykardii atropinę podaje się miareczkowo po 0.5 mg i.v. do maksymalnej dawki całkowitej 3 mg."
  },
  {
    id: 86,
    category: "farmakologia",
    question: "Przeciwskazania do podania atropiny ?",
    options: ["Zaburzenia drożności dróg moczowych i przewodu pokarmowego", "Hipokalemia", "Zespół wydłużonego odcinka QT", "Blok AV"],
    correct: 0,
    explanation: "Atropina działa cholinolitycznie. Wyłączenie nerwu błędnego powoduje m.in. osłabienie perystaltyki i zatrzymanie moczu, dlatego stany niedrożności są przeciwwskazaniem."
  },
  {
    id: 87,
    category: "farmakologia",
    question: "W jakim bloku AV atropina nie zadziała najprawdopodobniej?",
    options: ["Blok AV III stopnia", "Blok AV II Mobitz I", "Blok AV II Mobitz II", "Blok AV I"],
    correct: [0, 2],
    explanation: "Zarówno Blok AV III stopnia, jak i Blok AV II typu Mobitz II to uszkodzenia na poziomie poniżej węzła AV, na które atropina po prostu nie reaguje."
  },
  {
    id: 88,
    category: "farmakologia",
    question: "Dawkowanie amiodaronu u dorosłego w NZK ?",
    options: ["300 mg , 150 mg w 20 ml 5% glukozie", "150 mg, 50 mg w 20 ml 5% glukozie", "900 mg w 20 ml 5% glukozy", "150 mg w 20 ml 5% glukozy"],
    correct: 0,
    explanation: "Zgodnie z wytycznymi w NZK podajemy 300 mg po 3. defibrylacji oraz dodatkowe 150 mg po 5. defibrylacji. Lek należy podać w glukozie 5%."
  },
  {
    id: 89,
    category: "farmakologia",
    question: "Wskazania do użycia amiodaronu ?",
    options: ["VF VT pVT", "WPW", "Torsade de pointes", "Asystolia"],
    correct: 0,
    explanation: "Głównym wskazaniem do stosowania Amiodaronu w zatrzymaniu krążenia są rytmy defibrylacyjne, czyli Migotanie Komór (VF) oraz Częstoskurcz Komorowy bez tętna (pVT)."
  },
  {
    id: 90,
    category: "farmakologia",
    question: "Dlaczego nie podajemy amiodaronu w bloku AV ?",
    options: ["Blokuje kanały potasowe", "Ponieważ skraca okres refrakcji w komórkach", "Zwiększa napięcie mięśni gładkich", "Zwalnia czynność węzła zatokowego i przewodzenie w węźle AV"],
    correct: 3,
    explanation: "Amiodaron m.in. wykazuje cechy beta-blokera, przez co zwalnia rytm i w przypadku bloków przedsionkowo-komorowych mógłby doprowadzić do asystolii."
  },
  {
    id: 91,
    category: "farmakologia",
    question: "Dawkowanie amiodaronu w NZK u dzieci ?",
    options: ["5mg/kg mc i.v w 5% glukozie", "5mg/kg mc i.v w 10% glukozie", "5mg/ kg mc i.m w 5 % glukozie", "5mg/ kg mc i.v w bolusie"],
    correct: 0,
    explanation: "U dzieci w NZK stosujemy dawkę pojedynczą 5 mg/kg m.c. i.v. rozcieńczoną koniecznie w 5% roztworze Glukozy."
  },
  {
    id: 92,
    category: "farmakologia",
    question: "Jaka jest dawka amiodaronu w VT u dorosłych?",
    options: ["500 mg i.v", "300 mg i.v", "150 mg i.v", "50 mg i.v"],
    correct: 1,
    explanation: "U stabilnego hemodynamicznie dorosłego pacjenta z częstoskurczem komorowym podajemy najczęściej 300 mg we wlewie trwającym ok. 20-60 minut."
  },
  {
    id: 93,
    category: "farmakologia",
    question: "Jak podajemy budesonid ?",
    options: ["S.L", "E.T", "S.C", "Nebulizacja"],
    correct: 3,
    explanation: "Budesonid z ampułek podaje się wyłącznie drogą wziewną, z wykorzystaniem maski i nebulizatora."
  },
  {
    id: 94,
    category: "farmakologia",
    question: "Dawka budesonidu u dzieci w astmie oskrzelowej ?",
    options: ["250 mcg - 500 mcg", "300 mcg - 600 mcg", "50 mcg - 80 mcg", "400 mcg - 1 mg"],
    correct: 0,
    explanation: "W opanowywaniu zaostrzeń astmy u dzieci w ZRM dawka wynosi od 250 do 500 mikrogramów na nebulizację."
  },
  {
    id: 95,
    category: "farmakologia",
    question: "Jaka jest dawka budesonidu u dzieci w zespole krupu?",
    options: ["1-2 mg", "2-5 mg", "0.25-0.5 mg", "0.01-0.1 mg"],
    correct: 0,
    explanation: "Ponieważ podgłośniowe zapalenie krtani stanowi bezpośrednie zagrożenie zamknięcia dróg oddechowych, ładujemy duże dawki rzędu 1-2 mg od razu."
  },
  {
    id: 96,
    category: "farmakologia",
    question: "Jaka jest dawka standardowa budesonidu u dorosłych?",
    options: ["1-2 mg", "2-5 mg", "0.25-0.5 mg", "0.01-0.1 mg"],
    correct: 0,
    explanation: "W zaostrzeniach oddechowych u pacjentów dorosłych podaje się zazwyczaj dawki 1 mg lub 2 mg w inhalacji."
  },
  {
    id: 97,
    category: "farmakologia",
    question: "Ile w ampułce 1 ml mieści się dexavenu ?",
    options: ["2, 4, 8 mg", "1, 2, 4 mg", "6, 12, 18 mg", "3, 6, 12 mg"],
    correct: 0,
    explanation: "Deksametazon najczęściej występuje na rynku w ampułkach o zawartości 4 mg oraz 8 mg substancji."
  },
  {
    id: 98,
    category: "farmakologia",
    question: "Dawkowanie deksametazonu u dorosłych ?",
    options: ["4-8 mg", "2-4 mg", "12-18 mg", "3-6 mg"],
    correct: 0,
    explanation: "W ostrych stanach zagrażających życiu podaje się zazwyczaj od 4 do 8 mg i.v. u osoby dorosłej."
  },
  {
    id: 99,
    category: "farmakologia",
    question: "Dawkowanie dexavenu u dzieci ?",
    options: ["0.2 - 0.4 mg/kg mc", "0.1-0.3 mg/kg mc", "10mcg-30 mcg/kg mc", "4mcg- 8 mcg/kg mc"],
    correct: 0,
    explanation: "Dawka uśredniona dla ratownictwa przy podaży u dzieci to 0.2 - 0.4 mg/kg masy ciała."
  },
  {
    id: 100,
    category: "farmakologia",
    question: "Ile mieści się diazepamu w 2 ml ampułce ?",
    options: ["5 lub 10 mg", "1 lub 2 mg", "4 lub 8 mg", "1 mg"],
    correct: 0,
    explanation: "W standardowych karetkowych aptekach ampułka Relanium o pojemności 2 ml posiada 10 mg diazepamu."
  },
  {
    id: 101,
    category: "farmakologia",
    question: "Z jakiej grupy leków jest diazepam ?",
    options: ["Beta-bloker", "Benzodiazepina", "Siarczany", "Tiazydowe"],
    correct: 1,
    explanation: "Diazepam (Relanium) należy do benzodiazepin - leków nasennych, uspokajających, przeciwlękowych i przeciwdrgawkowych."
  },
  {
    id: 102,
    category: "farmakologia",
    question: "Wskazania do użycia diazepamu ?",
    options: ["Drgawki i lęki", "Obrzęki i ciśnienie wśród-czaszkowe", "Niewydolność oddechowa", "Rozkurcz mięśni gładkich"],
    correct: 0,
    explanation: "Jako typowa benzodiazepina, lek ten jest używany do znoszenia stanów lękowych oraz zwalczania stanów padaczkowych."
  },
  {
    id: 103,
    category: "farmakologia",
    question: "Dawkowanie diazepamu u dorosłych ?",
    options: ["5-10 mg", "1-2 mg", "4-8 mg", "1 mg"],
    correct: 0,
    explanation: "W drgawkach lub silnym pobudzeniu dorosły pacjent otrzymuje zazwyczaj 5 do 10 mg dożylnie."
  },
  {
    id: 104,
    category: "farmakologia",
    question: "Dawkowanie diazepamu u dzieci ?",
    options: ["0,2 do 0,3 mg/kg mc i.v i.o", "1mg na rok życia", "5-10 mg", "Diazepamu nie podajemy dzieciom"],
    correct: [0, 1],
    explanation: "Poprawny z wytycznymi jest wzór z masą (0.2-0.3 mg/kg), jak i prosta uliczna reguła ratownicza (1 mg na każdy rok życia)."
  },
  {
    id: 105,
    category: "farmakologia",
    question: "Ile drotaweryny mieści się w ampułce 2ml ?",
    options: ["40 mg", "80 mg", "10 mg", "50 mg"],
    correct: 0,
    explanation: "Klasyczna ampułka No-Spy wykorzystywana do i.v./i.m. to 40 mg leku w rozpuszczalniku 2 ml."
  },
  {
    id: 106,
    category: "farmakologia",
    question: "Jakie jest wskazanie do podania no-spy?",
    options: ["Skurcz mięśni gładkich", "Ból umiarkowany NRS do 3", "Ból NRS między 3 a 6", "Bóle ostre pow. 7 NRS"],
    correct: 0,
    explanation: "No-Spa działa stricte na mięśniówkę gładką, stąd podajemy ją na stany spastyczne (np. kolka nerkowa, żółciowa)."
  },
  {
    id: 107,
    category: "farmakologia",
    question: "Dawkowanie drotaweryny u dorosłych ?",
    options: ["40-80 mg", "10-50 mg", "30-70 mg", "60- 100 mg"],
    correct: 0,
    explanation: "Pojedyncza dawka dla osoby dorosłej w silnej kolce wynosi od 40 do 80 mg."
  },
  {
    id: 108,
    category: "farmakologia",
    question: "Dawkowanie drotaweryny u dzieci ?",
    options: ["20 mg", "10 mg", "30 mg", "40 mg"],
    correct: 0,
    explanation: "U dzieci (powyżej 6 lat) dawką stosowaną domięśniowo jest około 20 mg."
  },
  {
    id: 109,
    category: "farmakologia",
    question: "Wskazania do użycia fentanylu ?",
    options: ["Leczenie silnych bólów", "Sedacja", "Hamowanie oddychania u osób wymagających oddechu wspomagającego", "Wszystkie wymienione"],
    correct: 3,
    explanation: "Zależnie od podanej dawki, fentanyl może służyć jako rewelacyjny przeciwbólowiec, a w większych dawkach służy przy intubacji lub sedacji."
  },
  {
    id: 110,
    category: "farmakologia",
    question: "Przeciwskazania do użycia fentanylu ?",
    options: ["Choroby zatorowe płuc", "Bradykardia", "Masywne krwotoki", "Tachykardia"],
    correct: 0,
    explanation: "Fentanyl jest przeciwwskazany w chorobie zatorowej ze względu na spadek powrotu krwiobiegu z powodu wyrzutu i obciążenia układu oddechowego prawego serca."
  },
  {
    id: 111,
    category: "farmakologia",
    question: "Dawkowanie fentanylu u dorosłych bez wspomagania oddechowego ?",
    options: ["50-200 mcg", "300- 1200 mcg", "100 - 400 mcg", "60 - 250 mcg"],
    correct: 0,
    explanation: "Dawka 50-200 mcg pozwala opanować ból na oddychającym pacjencie."
  },
  {
    id: 112,
    category: "farmakologia",
    question: "Dawkowanie fentanylu u dzieci ?",
    options: ["1-3 mcg/ kg mc", "10-30 mcg/ kg mc", "50-200 mcg/ kg mc", "100 mcg"],
    correct: 0,
    explanation: "Dziecięcy standard podaży fentanylu to ostrożne 1 do 3 mcg na każdy kilogram masy."
  },
  {
    id: 113,
    category: "farmakologia",
    question: "Jak działa fentanyl ?",
    options: ["Szybko i krótko", "Szybko i długo", "Wolno i Krótko", "Wolno i długo"],
    correct: 0,
    explanation: "Ze względu na dużą lipofilność, Fentanyl działa od razu (ok. minuty po I.V.) i utrzymuje działanie maksymalnie do kilkudziesięciu minut."
  },
  {
    id: 114,
    category: "farmakologia",
    question: "Czego działania znosi flumazenil ?",
    options: ["Benzodiazepin", "Beta- Blokerów", "Opioidów", "Antyarytmików"],
    correct: 0,
    explanation: "Flumazenil (Anexate) to specyficzna odtrutka kompetycyjna działająca tylko na receptory dla Benzodiazepin."
  },
  {
    id: 115,
    category: "farmakologia",
    question: "Dawkowanie flumazenilu u dorosłych ?",
    options: ["0,2 mg", "0,2 mg/ kg mc", "1mg", "1 mg/kg mc"],
    correct: 0,
    explanation: "Początkowa dawka do wybudzenia pacjenta wynosi 0.2 mg i w razie potrzeby jest miareczkowana po 0.2 mg w odstępach minuty do maksymalnej dawki 1 mg."
  },
  {
    id: 116,
    category: "farmakologia",
    question: "Dawkowanie flumazenilu u dzieci ?",
    options: ["10 mcg/ kg mc", "100 mcg/ kg mc", "10 mcg", "100 mcg"],
    correct: 0,
    explanation: "U dzieci wybudzanie startuje z pułapu 10 mcg/kg m.c., aby uniknąć groźnych odruchów i pobudzenia."
  },
  {
    id: 117,
    category: "farmakologia",
    question: "Kiedy nie należy podawać flumazenilu ?",
    options: ["Drgawki występujące w wyniku antydepresantów", "Zatrucie benzodiazepinami", "Zniesienie sedacji spowodowanej benzo", "Upojenie alkoholowe bez innych leków"],
    correct: 0,
    explanation: "Zniesienie działania sedacyjnego wywoła u takiego pacjenta potężny rzut opornych drgawek (np. w zatruciu TLPD), doprowadzając do stanu padaczkowego na własne życzenie."
  },
  // --- FUROSEMID ---
  {
    id: 118,
    category: "farmakologia",
    question: "Transport jakich pierwiastków hamuje furosemid ?",
    options: ["Wapnia", "Potasu", "Sodu", "Żelaza"],
    correct: 2,
    explanation: "Furosemid to silny diuretyk pętlowy, który hamuje zwrotne wchłanianie sodu (i chloru) w pętli Henlego, co 'pociąga' za sobą wodę i zmusza nerki do produkcji moczu."
  },
  {
    id: 119,
    category: "farmakologia",
    question: "Wskazania do użycia furosemidu ?",
    options: ["Obrzęki związane z zastoinową niewydolnością krążenia", "Zaburzenia równowagi wodno-elektrolitowej", "Hipowolemia", "Bezmocz"],
    correct: 0,
    explanation: "Furosemid zdejmuje nadmiar wody, dlatego jest lekiem ratującym życie w obrzęku płuc spowodowanym ostrą, zastoinową niewydolnością lewej komory."
  },
  {
    id: 120,
    category: "farmakologia",
    question: "Przeciwskazania do użycia furosemidu ?",
    options: ["Obrzęki związane z zastoinową niewydolnością krążenia", "Zaburzenia równowagi wodno-elektrolitowej (hipokaliemia/hiponatremia)", "Hipertensja (Nadciśnienie)", "Masywne zatory płucne"],
    correct: 1,
    explanation: "Furosemid 'wypłukuje' z organizmu sód i potas. Podanie go u pacjenta z już istniejącymi, ciężkimi niedoborami elektrolitów (hipokaliemia, hiponatremia) lub hipowolemią i bezmoczem jest bezwzględnie przeciwwskazane."
  },
  {
    id: 121,
    category: "farmakologia",
    question: "Dawkowanie furosemidu dla dorosłych ?",
    options: ["20 - 80 mg", "10 - 20 mg", "30 - 60 mg", "4 - 8 mg"],
    correct: 0,
    explanation: "Standardowa dawka u dorosłego to 20 do 40 mg i.v., ale u pacjentów przewlekle przyjmujących diuretyki dawkę ratunkową często podwaja się, startując od 80 mg."
  },
  {
    id: 122,
    category: "farmakologia",
    question: "Dawkowanie furosemidu u dzieci ?",
    options: ["0,5 - 1,5 mg/ kg mc", "10 - 20 mg", "0,1 - 1 mg/ kg mc", "10 mcg/ kg mc"],
    correct: 0,
    explanation: "W pediatrii furosemid dawkuje się ostrożnie w przedziale 0.5 do 1.5 mg na każdy kilogram masy ciała. Maksymalna dawka to 20mg."
  },
  {
    id: 123,
    category: "farmakologia",
    question: "Ile furosemidu mieści się w ampułce 2 ml?",
    options: ["20 mg", "10 mg", "5 mg", "40 mg"],
    correct: 0,
    explanation: "Standardowa ampułka wykorzystywana w torbie R1/R2 to 20 mg leku w 2 ml płynu (10 mg/ml)."
  },

  // --- GELOFUSINE (KOLOID) ---
  {
    id: 124,
    category: "farmakologia",
    question: "Wskazania do użycia gelofusine ?",
    options: ["Wstrząs hipowolemiczny", "Ciężka niewydolność serca", "Zaburzenia krzepnięcia krwi", "Hiperchloremia"],
    correct: 0,
    explanation: "Gelofusine to koloid (roztwór żelatyny), który świetnie 'trzyma się' w naczyniach. Jest wykorzystywany do szybkiego uzupełniania łożyska we wstrząsie z utraty krwi lub płynów."
  },
  {
    id: 125,
    category: "farmakologia",
    question: "Dawkowanie gelofusine (dla wszystkich tak samo) ?",
    options: ["20 ml / kg mc", "10 ml / kg mc", "18 ml / kg mc", "30 ml / kg mc"],
    correct: 0,
    explanation: "Podobnie jak krystaloidy, bolus startowy tego koloidu w stanach wstrząsu to zazwyczaj 20 ml/kg masy ciała."
  },
  {
    id: 126,
    category: "farmakologia",
    question: "Ile w 1000 ml znajduje się gelofusine (żelatyny) ?",
    options: ["40 g", "40mg", "40 mcg", "10 g"],
    correct: 0,
    explanation: "Gelofusine to roztwór 4%, co oznacza, że w 1000 ml znajduje się 40 gramów substancji (w standardowej butelce 500 ml jest jej 20 gramów)."
  },

  // --- GLUKAGON ---
  {
    id: 127,
    category: "farmakologia",
    question: "Wskazania do użycia glukagonu ?",
    options: ["Zatrucie beta-blockerami", "Zatrucie Benzodiazepinami", "Zatrucie Muskaryną", "Hipowolemia"],
    correct: 0,
    explanation: "Oprócz ratowania z głębokiej hipoglikemii, Glukagon w gigantycznych dawkach jest używany jako specyficzna odtrutka stymulująca serce w przedawkowaniu Beta-blokerów (oraz blokerów kanału wapniowego)."
  },
  {
    id: 128,
    category: "farmakologia",
    question: "Dawkowanie glukagonu u dzieci poniżej 25 kg ?",
    options: ["0,5 mg", "1 mg", "2 mg", "3mg"],
    correct: 0,
    explanation: "U dzieci o masie poniżej 25 kg podaje się domięśniowo połowę standardowej, dorosłej dawki glukagonu, czyli 0.5 mg."
  },
  {
    id: 129,
    category: "farmakologia",
    question: "Dawkowanie glukagonu u dzieci powyżej 25 kg ?",
    options: ["0,5 mg", "1 mg", "2 mg", "3 mg"],
    correct: 1,
    explanation: "Dzieci ważące powyżej 25 kg (lub starsze niż 6-8 lat) traktuje się dawkowaniem jak dorosłych, czyli ładuje się pełny 1 mg leku domięśniowo."
  },
  {
    id: 130,
    category: "farmakologia",
    question: "Dawkowanie glukagonu u dorosłych w hipoglikemii?",
    options: ["1mg", "2mg", "3mg", "4mg"],
    correct: 0,
    explanation: "Dla dorosłego w stanie niedocukrzenia (i przy braku możliwości założenia wkłucia dożylnego) podaje się i.m. / s.c. 1 mg Glukagonu."
  },

  // --- GLUKOZA ---
  {
    id: 131,
    category: "farmakologia",
    question: "Dawkowanie glukozy u dorosłych w hipoglikemii ?",
    options: ["200 mg/ kg mc", "100 mg/ kg mc", "50 mg/ kg mc", "400 mg/ kg mc"],
    correct: 0,
    explanation: "Dawkę wylicza się jako 0.2 grama na kilogram (200 mg/kg), co dla dorosłego 75 kg oznacza podanie np. 75 ml 20% glukozy w szybkim bolusie."
  },
  {
    id: 132,
    category: "farmakologia",
    question: "Dawkowanie glukozy u dzieci w hipoglikemii?",
    options: ["200 mg/ kg mc (0.2 g/kg)", "500 mg/ kg mc (0.5 g/kg)", "50 mg/ kg mc", "400 mg/ kg mc"],
    correct: [0, 1],
    explanation: "Według starych algorytmów stosowano 0.5 g/kg u dzieci, nowe wytyczne ERC ujednolicają dawkę często do 0.2 g/kg (200 mg/kg), aby uniknąć groźnego 'przestrzeliwania' poziomu cukru i uszkodzenia żył."
  },

  // --- HAES / VOLUVEN (KOLOIDY) ---
  {
    id: 133,
    category: "farmakologia",
    question: "Ile voluvenu (skrobi) znajduje się w 1000 ml roztworu 6%?",
    options: ["60 g", "100 g", "20 g", "200 g"],
    correct: 0,
    explanation: "Roztwór 6% (najpopularniejszy) to 6 gramów substancji na 100 ml, więc w jednym litrze znajduje się 60 gramów (w butelce 500ml jest 30g)."
  },
  {
    id: 134,
    category: "farmakologia",
    question: "Wskazania do użycia HAES (Voluven) ?",
    options: ["Wstrząs hipowolemiczny spowodowany utratą krwi", "Hiperchloremia", "Sepsa", "Oparzenie"],
    correct: 0,
    explanation: "HAES to koloid sztuczny. Ostatnie badania zakazały go używać w sepsie i oparzeniach ze względu na toksyczność dla nerek! Zostało tylko jedno wąskie wskazanie: ostry krwotok i utrata krwi, jeśli nie ma innych płynów."
  },
  {
    id: 135,
    category: "farmakologia",
    question: "Dawkowanie u dorosłych HAES (Voluven 6%) ?",
    options: ["18 ml/ kg mc", "30 ml/ kg mc", "50 ml/ kg mc", "10 ml/ kg mc"],
    correct: 1,
    explanation: "Maksymalna dobowa dawka dla 6% roztworu HAES wynosi najczęściej 30 ml na kilogram masy ciała."
  },
  {
    id: 136,
    category: "farmakologia",
    question: "Dawkowanie HAES (Voluven) u dzieci ?",
    options: ["10 ml/ kg mc", "5 ml/ kg mc", "15 ml/ kg mc", "Przeciwskazane"],
    correct: 3,
    explanation: "Z powodu wysokiego profilu powikłań i braku wystarczających badań bezpieczeństwa, HAES jest przeciwwskazany w rutynowym leczeniu ZRM u dzieci (używa się krystaloidów)."
  },

  // --- HEPARYNA ---
  {
    id: 137,
    category: "farmakologia",
    question: "Ile jednostek Heparyny mieści się w 5 ml fiolce ?",
    options: ["25 000 j.m", "5 000 j.m", "25 g", "1000 j.m"],
    correct: 0,
    explanation: "Standardowa fiolka heparyny niefrakcjonowanej w ZRM ma bardzo wysokie stężenie: 5000 j.m. w 1 ml, co w 5 ml daje aż 25 000 j.m. (Należy bardzo uważać przy nabieraniu!)."
  },
  {
    id: 138,
    category: "farmakologia",
    question: "Standardowe dawkowanie heparyny u dorosłego (np. w OZW po konsultacji) ?",
    options: ["5000 jm", "25 000 jm", "1000 jm", "2000 jm"],
    correct: 0,
    explanation: "Dawka nasycająca w Ostrym Zespole Wieńcowym to najczęściej szybki bolus i.v. wynoszący 5000 jednostek międzynarodowych (czyli pobieramy zaledwie 1 ml leku z fiolki!)."
  },
  {
    id: 139,
    category: "farmakologia",
    question: "Dawkowanie heparyny u dzieci ?",
    options: ["50 jm/ kg mc", "100 jm/ kg mc", "10 jm/ kg mc", "5000 jm"],
    correct: 0,
    explanation: "U dzieci dawkowanie jest rygorystyczne i wyliczane na masę ciała – wynosi 50 jednostek na każdy kilogram masy."
  },
  {
    id: 140,
    category: "farmakologia",
    question: "W jaki sposób podajemy heparyne w warunkach ZRM?",
    options: ["I.V (Dożylnie)", "S.C (Podskórnie jako lek długotrwały na krzepnięcie)", "P.O (Doustnie)", "I.M (Domięśniowo)"],
    correct: 0,
    explanation: "W ZRM walcząc z zawałem (OZW) zależy nam na natychmiastowym efekcie rozrzedzenia krwi, dlatego podajemy ją dożylnie."
  },
  {
    id: 141,
    category: "farmakologia",
    question: "Jaka jest opcjonalna dawka w przeliczeniu na kilogram masy ciała heparyny dla dorosłych w specyficznych protokołach (jeśli nie stosujemy ryczałtu 5000 j.m.)?",
    options: ["80 j.m/kg", "40 j.m/kg", "60 j.m/kg (maks do 4000-5000 j.m.)", "10 j.m/kg"],
    correct: 2,
    explanation: "Niektóre kardiologiczne wytyczne (OZW) zalecają u dorosłych dawkę od 60 do 70 j.m/kg, jednak w praktyce ZRM najczęściej podaje się ryczałtowe 5000 j.m."
  },

  // --- HYDROKORTYZON (STERYD) ---
  {
    id: 142,
    category: "farmakologia",
    question: "Dawkowanie Hydrokortyzonu (Corhydron) u dorosłych w anafilaksji / astmie ?",
    options: ["100 - 250 mg", "50 -100 mg", "40 - 80 mg", "4- 8 mg"],
    correct: 0,
    explanation: "Uderzeniowa, dożylna dawka ratunkowa (podawana już po adrenalinie) wynosi dla dorosłych od 100 do 200/250 mg (najczęściej proszek rozpuszcza się w dedykowanym rozpuszczalniku)."
  },
  {
    id: 143,
    category: "farmakologia",
    question: "Dawkowanie hydrokortyzonu u dzieci ?",
    options: ["8-10 mg/kg mc", "2-5 mg/kg mc", "4-10 mg/kg mc", "1-20 mg/kg mc"],
    correct: 2,
    explanation: "Dawkowanie sterydu ratunkowego u dzieci wylicza się ze wzoru 4-10 mg na każdy kilogram masy ciała."
  },

  // --- HYDROKSYZYNA ---
  {
    id: 144,
    category: "farmakologia",
    question: "W jaki sposób najczęściej podajemy hydroksyzynę w warunkach ZRM?",
    options: ["I.M (Głęboko domięśniowo)", "I.V (Szybki bolus)", "P.R", "S.L"],
    correct: 0,
    explanation: "Hydroksyzynę w ampułkach podaje się niemal wyłącznie głęboko domięśniowo w duży mięsień (np. pośladek), aby uniknąć groźnych powikłań zakrzepowych i arytmii przy podaży I.V."
  },
  {
    id: 145,
    category: "farmakologia",
    question: "Dawkowanie hydroksyzyny u dorosłych ?",
    options: ["50 -100 mg", "100 - 200 mg", "1-10 mg", "20 -50 mg"],
    correct: 0,
    explanation: "Zastrzyk uspokajający dla osoby dorosłej (w silnym pobudzeniu bez drgawek) wynosi od 50 do 100 mg (1-2 ampułki)."
  },
  {
    id: 146,
    category: "farmakologia",
    question: "Dawkowanie hydroksyzyny u dzieci ?",
    options: ["1-2 mg/ kg mc", "50 -100 mg", "100 - 200 mg", "0.1 mg/kg mc"],
    correct: 0,
    explanation: "U dzieci (zwykle powyżej 1 r.ż.) domięśniowa dawka wynosi od 1 do maksymalnie 2 mg na kilogram masy ciała."
  },
  {
    id: 147,
    category: "farmakologia",
    question: "Jakie jest rzadkie, ale bezwzględne przeciwwskazanie kardiologiczne do użycia hydroksyzyny ?",
    options: ["Leczenie lęku, zmniejszenie napięcia mięśniowego", "Porfiria oraz Zespół wydłużonego QT w EKG", "Hipokalemia i hipermagnezemia", "Bradykardia zatokowa"],
    correct: 1,
    explanation: "Hydroksyzyna jest znanym lekiem wydłużającym odstęp QT w sercu. U osób z już istniejącym wydłużeniem (lub porfirią) może wywołać śmiertelną arytmię Torsade de Pointes!"
  },

  // --- IBUPROFEN ---
  {
    id: 148,
    category: "farmakologia",
    question: "Wskazania dla ibuprofenu z tabletek w ZRM?",
    options: ["Bóle słabe i umiarkowane oraz stany gorączkowe", "Bóle bardzo silne pourazowe", "Bóle pochodzenia nerwowego z GCS 8", "Skurcze mięśni gładkich i kolki"],
    correct: 0,
    explanation: "To klasyczny lek z grupy NLPZ, doskonały do obniżania gorączki oraz uśmierzania bólu od 1 do 4 w skali NRS u wydolnych oddechowo pacjentów."
  },
  {
    id: 149,
    category: "farmakologia",
    question: "Dawkowanie ibuprofenu dla dorosłych jednorazowo ?",
    options: ["200 - 400 mg (do 600 mg w ostrym bólu)", "100 - 300 mg", "1000 mg", "50 mg"],
    correct: 0,
    explanation: "Dorośli przyjmują jednorazowo od 200 do 400 mg (maks. do 600 mg, a dobowo max 1200 mg bez recepty)."
  },
  {
    id: 150,
    category: "farmakologia",
    question: "Ile ibuprofenu mieści się w standardowej, ogólnodostępnej tabletce?",
    options: ["200 lub 400 mg", "2 lub 4 g", "100 lub 200 mg", "50 lub 100 mg"],
    correct: 0,
    explanation: "Najczęściej spotykane 'zwykłe' tabletki to 200 mg, a wersje 'Forte/Max' mają po 400 mg leku."
  },
  {
    id: 151,
    category: "farmakologia",
    question: "Dawkowanie jednorazowe ibuprofenu u dzieci ?",
    options: ["10 mg/ kg mc", "20 mg/ kg mc", "5 mg/ kg mc", "15 mg/ kg mc"],
    correct: 0,
    explanation: "Dawka ratunkowa (przeciwgorączkowa/przeciwbólowa) dla malucha to twarde 10 mg/kg m.c. w jednym podaniu (można powtarzać po kilku godzinach)."
  },

  // --- AZOTANY (ISOSORBID / MONOSAN / EFFOX) ---
  {
    id: 152,
    category: "farmakologia",
    question: "Wskazania do użycia azotanów (Isosorbid / Monosan) ?",
    options: ["Dławica piersiowa i OZW (oraz kardiogenny obrzęk płuc)", "Hipotonia i wstrząs", "Ostra niewydolność krążenia z BP 70/40", "Zawał prawej komory"],
    correct: 0,
    explanation: "Leki te rozszerzają żyły (zmniejszają obciążenie wstępne), dając odpocząć mięśniowi sercowemu – leczą ból z niedokrwienia i usuwają płyn z płuc przy wysokim ciśnieniu."
  },
  {
    id: 153,
    category: "farmakologia",
    question: "Jakie jest najczęstsze dawkowanie azotanów (np. Isosorbid) stosowanych w napadach dławicy u dorosłych?",
    options: ["10 - 20 mg", "1 - 10 mg", "20 - 40 mg", "100 mg"],
    correct: 0,
    explanation: "Standardowa pojedyncza dawka stosowana u dorosłych w ataku bólowym to od 10 do 20 mg zgniecionych i zaaplikowanych pod język."
  },
  {
    id: 154,
    category: "farmakologia",
    question: "W jakich wielkościach mogą być konfekcjonowane tabletki Monosanu/Effoxu?",
    options: ["Tabletki 10 mg", "Tabletki 20 mg", "Tabletki 40 mg", "Wszystkie z powyższych (często 20 i 40mg z opcją łamania)"],
    correct: 3,
    explanation: "Na rynku azotanów występuje sporo stężeń dla pacjentów, a ZRM najczęściej posługuje się połówką lub całą tabletką np. 20 mg."
  },
  {
    id: 155,
    category: "farmakologia",
    question: "Jak podajemy azotany (np. Isosorbid) w Ostrym Zespole Wieńcowym?",
    options: ["P.O (Doustnie do połykania)", "I.V (Szybki bolus dożylny)", "S.L (Podjęzykowo - rozkruszone na błonę śluzową)", "I.M (Domięśniowo)"],
    correct: 2,
    explanation: "Aby minąć efekt 'pierwszego przejścia przez wątrobę' i zadziałać w kilkanaście sekund, tabletkę należy pogryźć (lub rozkruszyć przez ratownika) i wsypać pod język (S.L)."
  },

  // --- KAPTOPRYL ---
  {
    id: 156,
    category: "farmakologia",
    question: "Ile kaptoprylu zawiera jedna tabletka (zazwyczaj występująca w torbie ratunkowej)?",
    options: ["12.5 mg, 25 mg lub 50 mg", "Tylko 10 mg", "Wyłącznie 100 mg", "20 mg i 40 mg"],
    correct: 0,
    explanation: "W Polsce najczęściej stosuje się z dawkami Captoprilu: 12.5, 25 mg i 50 mg, łamiąc je na pół w razie potrzeby."
  },
  {
    id: 157,
    category: "farmakologia",
    question: "Wskazania do użycia kaptoprylu (Inhibitora ACE) przez ZRM?",
    options: ["Nadciśnienie tętnicze (przełom) oraz niewydolność krążenia", "Obrzęk naczynioworuchowy i anafilaksja", "Bradykardia zatokowa", "Zatrzymanie krążenia w PEA"],
    correct: 0,
    explanation: "Kaptopryl jest idealny do stabilnego i w miarę szybkiego obniżenia wysokiego ciśnienia (zdejmuje opór naczyń obwodowych). Uwaga: może wywołać obrzęk naczynioworuchowy u alergików!"
  },
  {
    id: 158,
    category: "farmakologia",
    question: "Dawkowanie Captoprilu w nagłym skoku ciśnienia u dorosłych?",
    options: ["25 - 50 mg", "100 - 150 mg", "10 - 15 mg", "0.5 - 1 g"],
    correct: 0,
    explanation: "Pacjent otrzymuje do rozpuszczenia od jednej do dwóch tabletek 25mg (łącznie 25-50 mg)."
  },
  {
    id: 159,
    category: "farmakologia",
    question: "Dawkowanie kaptoprylu (doustnie) w nagłym nadciśnieniu u dzieci?",
    options: ["0.3 mg/ kg mc", "0.5 mg/ kg mc", "1 mg / kg mc", "2 mg/ kg mc"],
    correct: 0,
    explanation: "Jeśli musimy obniżać patologiczne ciśnienie dzieciom, dawka wynosi ok. 0.3 mg/kg masy ciała w przeliczeniu (ostrożnie!)."
  },
  {
    id: 160,
    category: "farmakologia",
    question: "Sposób podaży kaptoprylu dla osiągnięcia najszybszego efektu w przełomie nadciśnieniowym?",
    options: ["P.O (do połknięcia)", "S.L (Podjęzykowo na śluzówkę)", "I.V (Dożylnie jako roztwór z tabletek)", "I.M (Domięśniowo)"],
    correct: 1,
    explanation: "Chociaż na ulotce jest to lek P.O. (doustny), ratownicy medyczni stosują go 'off-label' S.L. (podjęzykowo) po rozkruszeniu, aby błyskawicznie wchłonął się do krwi z ominięciem żołądka."
  },

  // --- KETOPROFEN (KETONAL) ---
  {
    id: 161,
    category: "farmakologia",
    question: "Ile leku zawiera jedna ampułka 2 ml iniekcyjnego Ketoprofenu (Ketonalu)?",
    options: ["100 mg", "200 mg", "10 mg", "50 mg"],
    correct: 0,
    explanation: "Standardowa szpitalna/karetkowa ampułka to zawsze 100 mg Ketoprofenu rozpuszczonego w 2 ml płynu."
  },
  {
    id: 162,
    category: "farmakologia",
    question: "Dawkowanie Ketonalu w urazach u dorosłego i.m. / i.v.?",
    options: ["100 - 200 mg", "200 - 500 mg", "50 - 100 mg", "1 - 10 mg"],
    correct: 0,
    explanation: "Jednorazowo podaje się 1 ampułkę (100 mg). Maksymalna dawka dobowa w bólach wynosi 200 mg."
  },
  {
    id: 163,
    category: "farmakologia",
    question: "Czy zgodnie z polskimi przepisami dla ratowników i ChPL, wolno nam podawać roztwór Ketonalu nierozcieńczony w szybkim strzale I.V (do żyły) poza warunkami szpitalnymi?",
    options: ["Tak, jak każdy NLPZ", "Nie, Ketoprofen poza szpitalem można podać głęboko I.M. (Domięśniowo) lub w kroplówce powyżej 100 ml", "Tak, ale tylko jeśli popchniemy solą", "Nie, Ketonal podajemy tylko w tabletkach"],
    correct: 1,
    explanation: "Czysty Ketoprofen i.v. bez solidnego rozcieńczenia z solą fizjologiczną (min. 100ml we wlewie wolnym) drastycznie niszczy naczynia krwionośne, dlatego w karetce najbezpieczniej uderzyć nim głęboko w pośladek (I.M)."
  },

  // --- KLEMASTYNA (LEK PRZECIWHISTAMINOWY) ---
  {
    id: 164,
    category: "farmakologia",
    question: "Główne wskazania z ulicy do użycia Klemastyny (Clemastinum)?",
    options: ["Anafilaksja i obrzęk naczynioworuchowy", "Przełom nadciśnieniowy z ciśnieniem 220/120", "Zawał OZW", "Bradykardia zatokowa"],
    correct: 0,
    explanation: "Jest to silny lek z grupy leków antyhistaminowych. Blokuje receptory wywołujące pokrzywkę, świąd, stany zapalne po użądleniach i w reakcjach alergicznych po podaniu adrenaliny."
  },
  {
    id: 165,
    category: "farmakologia",
    question: "Dawkowanie w uderzeniu po użądleniu owada dla dorosłych?",
    options: ["2 mg i.v / i.m", "5 mg i.v / i.m", "20 mg i.v / i.m", "10 mg i.v / i.m"],
    correct: 0,
    explanation: "Ampułki klemastyny posiadają stężenie 2 mg w 2 ml roztworu i u dorosłych podajemy całość (1 ampułka)."
  },
  {
    id: 166,
    category: "farmakologia",
    question: "Dawkowanie klemastyny u starszych dzieci powyżej 12 r.ż.?",
    options: ["25 - 50 mcg/kg mc (0.025 - 0.05 mg/kg)", "25 - 50 mg/kg mc", "25 - 50 g/kg mc", "10 - 20 mcg/kg mc"],
    correct: 0,
    explanation: "U dzieci wylicza się to ze wskaźnika 25 do 50 mikrogramów (0.025 mg do 0.05 mg) na każdy kilogram. Poniżej 1 r.ż. lek ten jest bezwzględnie zakazany."
  },

  // --- KLONAZEPAM ---
  {
    id: 167,
    category: "farmakologia",
    question: "W jakim stanie u pacjenta powinieneś użyć ampułki klonazepamu (Rivotril)?",
    options: ["Przeciwdziałanie napadom drgawek i przerywanie stanu padaczkowego", "Jako lek przeciwwymiotny przy nudnościach", "Antyarytmicznie w bradykardii", "Przeciwgorączkowo u niemowląt"],
    correct: 0,
    explanation: "Podobnie jak Relanium, jest to bardzo silna benzodiazepina, stosowana jako linia pierwszego lub drugiego rzutu podczas agresywnych napadów padaczkowych."
  },
  {
    id: 168,
    category: "farmakologia",
    question: "Dawkowanie klonazepamu w drgawkach u dorosłych?",
    options: ["1 mg", "2 mg", "10 mg", "100 mg"],
    correct: 0,
    explanation: "Dorosłym z padaczką przerywamy drgawki dawką 1 mg i.v. podaną bardzo wolno po uprzednim rozcieńczeniu."
  },
  {
    id: 169,
    category: "farmakologia",
    question: "Dawkowanie klonazepamu dla dziecka walczącego z padaczką?",
    options: ["500 mcg (0.5 mg)", "10 mcg/ kg mc", "30 mcg/ kg mc", "100 mcg"],
    correct: 0,
    explanation: "Zgodnie z wytycznymi w ratownictwie u dzieci (często niemowląt i przedszkolaków) stosuje się dawkę ratunkową wynoszącą 0.5 mg z ampułki."
  },
  {
    id: 170,
    category: "farmakologia",
    question: "Ile miligramów klonazepamu mieści się w małej, szpitalnej ampułce 1 ml?",
    options: ["1 mg", "1 mcg", "1 g", "2 mg"],
    correct: 0,
    explanation: "Ampułka 1 ml zawiera 1 mg leku, a ampułka wymaga bezwzględnego zmieszania z dostarczonym w opakowaniu czystym rozpuszczalnikiem, aby mogła trafić do krwi."
  }
];
