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
  {
    id: 133,
    category: "als",
    question: "U pacjenta z częstoskurczem z tętnem, który jest niestabilny hemodynamicznie, wykonujesz kardiowersję elektryczną. Wyładowanie musi być zsynchronizowane na monitorze z:",
    options: ["Załamkiem P", "Załamkiem T", "Załamkiem R", "Odcinkiem ST"],
    correct: 2,
    explanation: "Synchronizacja z załamkiem R pozwala uniknąć trafienia wyładowaniem w fazę relatywnej refrakcji (szczyt załamka T), co mogłoby wywołać śmiertelne migotanie komór (zjawisko R na T)."
  },
  {
    id: 134,
    category: "als",
    question: "Pacjent od 2 godzin ma przygniecione obie nogi przez zawał gruzu. Zanim straż pożarna podniesie ciężar (uwolnienie), ratownik powinien w pierwszej kolejności:",
    options: ["Założyć stazy taktyczne na obie nogi", "Rozpocząć agresywną płynoterapię (np. 1-2 litry krystaloidów i.v.)", "Podać profilaktycznie amiodaron", "Podać wodorowęglan sodu dożylnie"],
    correct: 1,
    explanation: "W zespole zmiażdżenia (crush syndrome) agresywna płynoterapia wdrożona JESZCZE PRZED uwolnieniem ucisku zapobiega ciężkiemu wstrząsowi z reperfuzji i uszkodzeniu nerek przez uwalnianą mioglobinę."
  },
  {
    id: 135,
    category: "als",
    question: "Które z poniższych parametrów wchodzą w skład przedszpitalnej skali oceny udaru mózgu CPSS (Cincinnati Prehospital Stroke Scale)?",
    options: ["Opadanie kącika ust, niedowład kończyny górnej, zaburzenia mowy", "Reakcja źrenic, siła mięśniowa kończyn dolnych, splątanie", "Asymetria twarzy, zaburzenia połykania, oczopląs", "Ból głowy, niedowład połowiczy, afazja"],
    correct: 0,
    explanation: "CPSS ocenia 3 główne elementy (podobne do FAST): asymetrię twarzy (opadający kącik ust przy uśmiechu), opadanie kończyny górnej (próba Barrego) oraz zaburzenia mowy (powtarzanie prostego zdania)."
  },
  {
    id: 136,
    category: "als",
    question: "Pacjent po tępym urazie klatki prezentuje narastającą duszność, poszerzenie żył szyjnych, przesunięcie tchawicy na stronę lewą oraz brak szmeru pęcherzykowego po stronie prawej. Wskazuje to na:",
    options: ["Tamponadę worka osierdziowego", "Masywny krwiak opłucnej po stronie lewej", "Odmę prężną prawostronną", "Pęknięcie przepony"],
    correct: 2,
    explanation: "Odma prężna prawostronna powoduje wzrost ciśnienia w prawej opłucnej, znosząc szmer oddechowy, wypełniając żyły szyjne i spychając śródpiersie (w tym tchawicę) na stronę przeciwną (zdrową)."
  },
  {
    id: 137,
    category: "als",
    question: "Wstrząs neurogenny (np. po urazie rdzenia w odcinku szyjnym) różni się klasycznie od wstrząsu hipowolemicznego tym, że pacjent wykazuje:",
    options: ["Hipotensję, ale skóra jest ciepła, różowa, a tętno zazwyczaj wolne (bradykardia/normokardia)", "Ciężką tachykardię i zlewne poty", "Wzrost ciśnienia tętniczego i bradykardię", "Prawidłowe ciśnienie tętnicze, ale niemiarowe tętno"],
    correct: 0,
    explanation: "We wstrząsie neurogennym dochodzi do utraty napięcia współczulnego. Naczynia rozszerzają się (skóra jest ciepła), ciśnienie spada, ale brakuje odruchowej tachykardii (serce nie przyspiesza)."
  },
  {
    id: 138,
    category: "als",
    question: "Które z poniższych parametrów oceniamy w szybkiej skali qSOFA służącej do przedszpitalnej identyfikacji pacjentów z podejrzeniem sepsy?",
    options: ["Temperatura, tętno, saturacja", "Skurczowe ciśnienie krwi ≤ 100 mmHg, częstość oddechów ≥ 22/min, zmieniony stan świadomości", "Glikemia, diureza, poziom mleczanów", "Czas nawrotu kapilarnego, tętno, temperatura > 38°C"],
    correct: 1,
    explanation: "Skala qSOFA (quick SOFA) obejmuje 3 kliniczne kryteria: ciśnienie skurczowe (SBP) ≤ 100 mmHg, oddechy ≥ 22/min oraz zmieniony stan świadomości. Spełnienie ≥2 punktów świadczy o wysokim ryzyku zgonu."
  },
  {
    id: 139,
    category: "als",
    question: "U pacjenta z niestabilną bradykardią zdecydowałeś się na przezskórną stymulację serca (TCP). W jaki sposób dobierasz natężenie prądu (mA)?",
    options: ["Zaczynam od maksymalnego natężenia (130 mA) i po uzyskaniu przechwycenia zmniejszam", "Zaczynam od 10-20 mA i stopniowo zwiększam, aż do momentu zaobserwowania elektrycznego i mechanicznego przechwycenia", "Ustawiam sztywno na 50 mA i zmieniam tylko częstotliwość stymulacji", "Ustawiam na tryb 'na żądanie' z prądem 150 J"],
    correct: 1,
    explanation: "Elektrostymulację zaczyna się od niskich wartości natężenia prądu (mA) i stopniowo zwiększa, aż na monitorze EKG po piku stymulatora pojawi się szeroki QRS (przechwycenie elektryczne), a na tętnicy udowej wyczuwalne będzie tętno."
  },
  {
    id: 140,
    category: "als",
    question: "Wyjeżdżasz do młodego, nieprzytomnego mężczyzny. Oddech 6/min, płytki. Na ramionach widoczne stare ślady po wkłuciach. Źrenice pacjenta są najprawdopodobniej:",
    options: ["Maksymalnie rozszerzone", "Szpilkowate (bardzo wąskie)", "Nierówne (anizokoria)", "Prawidłowej wielkości, ale nie reagują na światło"],
    correct: 1,
    explanation: "Klasyczna triada objawów ostrego zatrucia opioidami (np. heroiną, fentanylem) to: zaburzenia świadomości (śpiączka), głęboka depresja oddechowa oraz szpilkowate (mioza) źrenice."
  },
  {
    id: 141,
    category: "als",
    question: "W jakiej konkretnej sytuacji u pacjenta po ciężkim urazie czaszkowo-mózgowym dopuszcza się krótkotrwałą hiperwentylację (utrzymywanie EtCO2 ok. 30-35 mmHg)?",
    options: ["Rutynowo u każdego pacjenta z GCS < 8", "Tylko u pacjentów ze współistniejącą odmą prężną", "Tylko w przypadku wystąpienia objawów ostrego wgłabiania pnia mózgu (np. poszerzenie jednej źrenicy, nagły spadek GCS, prężenia)", "Hiperwentylacja jest bezwzględnie zakazana w każdym urazie głowy"],
    correct: 2,
    explanation: "Rutynowa hiperwentylacja jest szkodliwa, bo nadmiernie obkurcza naczynia i pogłębia niedokrwienie mózgu. Stosuje się ją wyłącznie jako ostateczność ratującą życie, gdy pacjent wgłabia się (by szybko obniżyć ICP)."
  },
  {
    id: 142,
    category: "als",
    question: "Pacjent wydobyty z zimnej wody, temperatura głęboka 29°C. Jest nieprzytomny, ale ma zachowane wolne tętno i oddech. Podczas przenoszenia do karetki należy pamiętać, aby:",
    options: ["Masować energicznie jego kończyny, aby przywrócić krążenie obwodowe", "Podać mu gorące płyny doustnie", "Utrzymywać pozycję poziomą i przenosić go z maksymalną ostrożnością (minimalizować wstrząsy)", "Szybko pionizować pacjenta w celu ułatwienia pracy płuc"],
    correct: 2,
    explanation: "U pacjenta w głębokiej hipotermii serce jest skrajnie wrażliwe. Gwałtowne ruchy, pionizacja, a zwłaszcza masaż (przepychanie zimnej krwi z obwodu do rdzenia - afterdrop) mogą natychmiast wywołać oporne migotanie komór (VF)."
  },
  {
    id: 143,
    category: "als",
    question: "Wykonujesz EKG u pacjenta z bólem w klatce piersiowej. Uniesienia odcinka ST w odprowadzeniach V1, V2, V3 i V4 świadczą o świeżym niedokrwieniu:",
    options: ["Ściany bocznej lewej komory", "Ściany dolnej", "Przegrody i ściany przedniej lewej komory", "Prawej komory serca"],
    correct: 2,
    explanation: "Odprowadzenia V1 i V2 obrazują przegrodę międzykomorową, a V3 i V4 ścianę przednią. Wskazuje to zazwyczaj na proksymalne zamknięcie gałęzi międzykomorowej przedniej (LAD)."
  },
  {
    id: 144,
    category: "als",
    question: "Szacując powierzchnię oparzeń, należy pamiętać, że proporcje ciała małego dziecka różnią się od dorosłego. U niemowląt znacznie większy procent powierzchni ciała (aż ok. 18%) stanowi:",
    options: ["Klatka piersiowa", "Głowa", "Kończyny dolne", "Kończyny górne"],
    correct: 1,
    explanation: "U dorosłych głowa stanowi ok. 9% powierzchni ciała, natomiast u noworodków i niemowląt głowa jest proporcjonalnie znacznie większa i stanowi około 18% (Reguła Lunda i Browdera)."
  },
  {
    id: 145,
    category: "als",
    question: "Nagły, rwący ból w klatce piersiowej promieniujący do międzyłopacia, któremu towarzyszy asymetria tętna i ciśnienia na kończynach górnych, to obraz kliniczny typowy dla:",
    options: ["Ostrego Zespołu Wieńcowego (OZW)", "Rozwarstwienia aorty", "Zatorowości płucnej", "Tamponady osierdzia"],
    correct: 1,
    explanation: "To klasyczne objawy rozwarstwienia aorty. Asymetria ciśnień wynika z zamykania światła tętnic odchodzących od łuku aorty. Podanie w tym stanie ASA (jak w zawałach) jest śmiertelnie niebezpieczne!"
  },
  {
    id: 146,
    category: "als",
    question: "Zapis kapnografii (EtCO2) u pacjenta z ciężkim atakiem astmy oskrzelowej (silna obturacja) przypomina kształtem:",
    options: ["Płetwę rekina (brak fazy plateau)", "Idealne prostokąty", "Odwrócone trójkąty", "Linię izoelektryczną"],
    correct: 0,
    explanation: "Z powodu skurczu oskrzeli faza wydechu jest znacznie wydłużona i opóźniona, co daje charakterystyczny obraz 'płetwy rekina' (shark fin) bez płaskiego, stabilnego plateau na monitorze."
  },
  {
    id: 147,
    category: "als",
    question: "Czym charakteryzuje się tzw. wiotka klatka piersiowa (flail chest)?",
    options: ["Płynem w worku osierdziowym po tępym urazie", "Jednostronnym ściszeniem szmerów pęcherzykowych", "Paradoksalnym ruchem wyłamanego fragmentu klatki podczas oddychania", "Zapadnięciem całego mostka do wewnątrz"],
    correct: 2,
    explanation: "Wiotka klatka powstaje przy złamaniu co najmniej 3 sąsiednich żeber w 2 miejscach. Podczas wdechu uwolniony fragment zapada się, a przy wydechu uwypukla (ruch paradoksalny)."
  },
  {
    id: 148,
    category: "als",
    question: "W skład Trójkąta Oceny Pediatrycznej (PAT) wchodzą trzy elementy pozwalające na błyskawiczną ocenę dziecka z dystansu. Są to:",
    options: ["Wygląd, Praca oddechowa, Krążenie skórne", "Tętno, Oddech, Ciśnienie krwi", "Świadomość (GCS), Źrenice, Tonus mięśniowy", "Zapis EKG, SpO2, EtCO2"],
    correct: 0,
    explanation: "PAT (Pediatric Assessment Triangle) pozwala ocenić krytycznie chore dziecko w kilka sekund z 'progu drzwi', bez dotykania. Oceniamy: Appearance (wygląd), Work of Breathing (oddychanie) i Circulation to skin (krążenie - barwa skóry)."
  },
  {
    id: 149,
    category: "als",
    question: "Dlaczego u pacjenta z podejrzeniem zatrucia tlenkiem węgla (CO) standardowy pulsoksymetr (SpO2) wskazuje fałszywie prawidłowe wartości (np. 100%)?",
    options: ["CO blokuje całkowicie emisję światła czerwonego w czujniku", "Karboksyhemoglobina pochłania światło w sposób zbliżony do hemoglobiny utlenowanej", "Tlenek węgla uszkadza naczynia włosowate na palcach", "Pacjenci z zatruciem CO wydzielają poty, które zaburzają odczyt fal"],
    correct: 1,
    explanation: "Zwykły pulsoksymetr dwufalowy nie odróżnia hemoglobiny połączonej z tlenem (oksyhemoglobina) od tej połączonej z czadem (karboksyhemoglobina). Może wskazywać 100% u pacjenta umierającego z głębokiego niedotlenienia tkankowego."
  },
  {
    id: 150,
    category: "als",
    question: "Głęboki, przyspieszony oddech (oddech Kussmaula) oraz zapach zgniłych jabłek (acetonu) z ust to klasyczne objawy:",
    options: ["Głębokiej hipoglikemii", "Kwasicy ketonowej (DKA) w przebiegu cukrzycy", "Krwiaka nadtwardówkowego", "Ostrej niewydolności nerek"],
    correct: 1,
    explanation: "Oddech Kussmaula to mechanizm kompensacyjny – organizm głębokimi oddechami próbuje pozbyć się nadmiaru kwasów (wydychając CO2) w przebiegu groźnej dla życia kwasicy ketonowej."
  },
  {
    id: 151,
    category: "als",
    question: "Skrócenie odstępu PQ (< 0.12 s) oraz obecność tzw. 'fali delta' na ramieniu wstępującym zespołu QRS to w EKG cechy charakterystyczne dla:",
    options: ["Zespołu Wolffa-Parkinsona-White'a (WPW)", "Bloku prawej odnogi pęczka Hisa (RBBB)", "Ostrego zawału ściany przedniej", "Zatorowości płucnej"],
    correct: 0,
    explanation: "Fala delta i krótki odstęp PQ świadczą o obecności dodatkowej, patologicznej drogi przewodzenia (pęczka Kenta), która jest podstawą zespołu preekscytacji (WPW)."
  },
  {
    id: 152,
    category: "als",
    question: "Objaw Kehra, czyli silny ból rzutowany promieniujący do lewego barku, u pacjenta po tępym urazie brzucha najczęściej wskazuje na:",
    options: ["Pęknięcie wątroby", "Pęknięcie śledziony", "Pęknięcie pęcherza moczowego", "Odmę opłucnową prawostronną"],
    correct: 1,
    explanation: "Krew gromadząca się pod lewą kopułą przepony w wyniku pęknięcia śledziony podrażnia nerw przeponowy, co pacjent odczuwa jako ból w lewym barku (objaw Kehra)."
  },
  {
    id: 153,
    category: "als",
    question: "W porażeniu prądem elektrycznym o wysokim napięciu, oprócz bezpośredniego zatrzymania krążenia (VF/Asystolia), największym ogólnoustrojowym zagrożeniem dla pacjenta jest:",
    options: ["Ostra niewydolność wątroby", "Masywna rabdomioliza (rozpad mięśni) prowadząca do uszkodzenia nerek", "Spontaniczna odma prężna", "Zakażenie septyczne w pierwszych 2 godzinach"],
    correct: 1,
    explanation: "Prąd, szukając najkrótszej drogi ujścia, przepływa przez mięśnie, 'gotując' je od środka (często bez zewnętrznych oparzeń). Rozpad mięśni uwalnia mioglobinę, która zatyka cewki nerkowe. Wymaga to bardzo agresywnej płynoterapii."
  },
  {
    id: 154,
    category: "als",
    question: "Nagły, ostry ból w dole brzucha u kobiety w wieku rozrodczym, któremu towarzyszą objawy rozwijającego się wstrząsu hipowolemicznego (tachykardia, hipotensja, bladość), to w warunkach ZRM w pierwszej kolejności podejrzenie:",
    options: ["Ostrego zapalenia wyrostka robaczkowego", "Kolki nerkowej", "Pękniętej ciąży pozamacicznej (ektopowej)", "Zakażenia układu moczowego"],
    correct: 2,
    explanation: "Każda kobieta w wieku rozrodczym we wstrząsie krwotocznym z bólem podbrzusza to ciąża ektopowa do czasu udowodnienia (np. przez USG w szpitalu) że jest inaczej. To stan bezpośredniego zagrożenia życia z masywnym krwotokiem wewnętrznym."
  },
  {
    id: 155,
    category: "als",
    question: "Wysokie, spiczaste, symetryczne załamki T ('namiotowate'), poszerzenie zespołów QRS i stopniowy zanik załamków P to w zapisie EKG klasyczny obraz postępującej:",
    options: ["Hipokaliemii", "Hiperkaliemii (podwyższonego potasu we krwi)", "Ostrej zatorowości płucnej", "Zawału ściany bocznej"],
    correct: 1,
    explanation: "Hiperkaliemia (np. u pacjentów dializowanych) prowadzi do drastycznych zmian w przewodnictwie. 'Namiotowate' T i poszerzone QRS to stan alarmowy tuż przed zatrzymaniem krążenia. Lekiem ratującym życie, stabilizującym serce jest podaż wapnia (Calcium Chloride)."
  },
  {
    id: 156,
    category: "als",
    question: "U pacjenta rozpoznajesz zawał ściany dolnej (uniesienia ST w II, III, aVF). Pacjent ma ciśnienie 90/60 mmHg i czyste pola płucne. Czego BEZWZGLĘDNIE NIE WOLNO mu podać?",
    options: ["Kwasu acetylosalicylowego (ASA)", "Nitrogliceryny podjęzykowo", "Heparyny", "Fentanylu"],
    correct: 1,
    explanation: "Zawał ściany dolnej często wiąże się z zawałem prawej komory, która staje się krytycznie zależna od obciążenia wstępnego (preload). Podanie nitrogliceryny (która rozszerza żyły) odetnie powrót krwi do serca i pacjent wpadnie w głęboki, śmiertelny wstrząs."
  },
  {
    id: 157,
    category: "als",
    question: "Wyjeżdżasz do pacjenta po próbie samobójczej, który połknął garść tabletek Amitryptyliny (Trójpierścieniowe Leki Przeciwdepresyjne - TLPD). W EKG widzisz skrajnie szerokie zespoły QRS (>120 ms). Jaki lek ratuje tu życie?",
    options: ["Flumazenil (Anexate)", "Wodorowęglan sodu (8.4% NaHCO3)", "Siarczan magnezu", "Glukagon"],
    correct: 1,
    explanation: "TLPD blokują kanały sodowe w sercu, co prowadzi do poszerzenia QRS i śmiertelnych arytmii. Uderzeniowa dawka Wodorowęglanu Sodu 'przełamuje' tę blokadę ładunkiem sodu i alkalizacją krwi, zawężając QRS."
  },
  {
    id: 158,
    category: "als",
    question: "Masz pacjenta z krwotokiem wewnętrznym po wypadku drogowym (bez poważnego urazu głowy). Zgodnie ze strategią 'hipotensji dopuszczalnej' (permissive hypotension), do jakiego ciśnienia skurczowego (SBP) dążysz podczas płynoterapii?",
    options: ["120 - 130 mmHg", "100 - 110 mmHg", "80 - 90 mmHg", "60 - 70 mmHg"],
    correct: 2,
    explanation: "Lanie płynów 'pod kurek' rozcieńczy krew, wychłodzi pacjenta i 'zdmuchnie' (wypłucze) nowo powstałe skrzepy. Dążymy do SBP ok. 80-90 mmHg – ma być tętno na promieniowej i zachowana świadomość. Wyższe ciśnienie tylko nasili krwotok."
  },
  {
    id: 159,
    category: "als",
    question: "Zgodnie z najnowszymi wytycznymi ERC (2025) dotyczącymi 'Świadomości Indukowanej RKO' (CPR-induced consciousness), jeśli pacjent z NZK podczas uciśnięć klatki otwiera oczy i odpycha ręce ratownika, należy:",
    options: ["Natychmiast przerwać RKO, bo to oznacza ROSC", "Wyłączyć LUCASa i poczekać na zatrzymanie krążenia", "Nie przerywać uciśnięć, rozważyć zastosowanie fizycznego skrępowania (pasy)", "Nie przerywać uciśnięć i podać leki sedacyjne/przeciwbólowe (np. Ketaminę/Midazolam)"],
    correct: 3,
    explanation: "To zjawisko oznacza, że uciśnięcia (szczególnie urządzenia mechaniczne) dają świetny przepływ mózgowy, ale pacjent nadal nie ma WŁASNEGO tętna. Przerwanie RKO zabije pacjenta. Należy go farmakologicznie uśpić i kontynuować RKO."
  },
  {
    id: 160,
    category: "als",
    question: "Transportujesz zintubowanego pacjenta. Nagle na monitorze zapis kapnografii (EtCO2) z wartości 35 mmHg spada płasko do zera, a pacjent zaczyna sinieć. Jaka jest najbardziej prawdopodobna przyczyna, którą musisz od razu sprawdzić?",
    options: ["Rurka intubacyjna wysunęła się z tchawicy (ekstubacja do przełyku)", "Pacjent ma napad astmy", "Aparat tlenowy zepsuł się", "Spadło ciśnienie krwi"],
    correct: 0,
    explanation: "Nagły spadek EtCO2 do absolutnego zera to niemal zawsze problem mechaniczny z rurką (wysunięcie, zatkanie) lub rozłączenie sprzętu. Gdy nie ma wentylacji płuc (lub rurka jest w żołądku), nie ma CO2 na wylocie."
  },
  {
    id: 161,
    category: "als",
    question: "Dziecko (3 lata), nagły początek, bardzo wysoka gorączka, ślinienie się, pozycja 'tripod' (siedząca z podparciem rąk), brak kaszlu. Podejrzewasz ostre zapalenie nagłośni (Epiglottitis). Czego KATEGORYCZNIE NIE WOLNO Ci zrobić?",
    options: ["Podać tlenu", "Zajrzeć do gardła z użyciem szpatułki", "Podać leków przeciwgorączkowych p.r.", "Przewieźć w pozycji siedzącej"],
    correct: 1,
    explanation: "Zapalenie nagłośni to tykająca bomba. Próba zajrzenia do gardła (drażnienie szpatułką) wyzwala odruchowy, śmiertelny skurcz krtani, całkowicie zamykając drogi oddechowe dziecka. Dziecka nie stresujemy, tlen podajemy z dystansu."
  },
  {
    id: 162,
    category: "als",
    question: "Jaka jest wartość energii do pierwszej kardiowersji elektrycznej (zsynchronizowanej) u dziecka z niestabilnym częstoskurczem (SVT lub VT z tętnem)?",
    options: ["1 J/kg m.c.", "4 J/kg m.c.", "10 J/kg m.c.", "50 J niezależnie od masy"],
    correct: 0,
    explanation: "Do pierwszej kardiowersji (gdzie chcemy 'zresetować' rytm bez uszkadzania serca) używamy mniejszej energii niż do defibrylacji: 1 J/kg. Jeśli jest nieskuteczna, zwiększamy do 2 J/kg."
  },
  {
    id: 165,
    category: "als",
    question: "Rozpoznanie kliniczne odmy prężnej (wymagającej natychmiastowego odbarczenia igłowego lub torakostomii palcowej) opiera się przede wszystkim na wystąpieniu asymetrii szmerów oddechowych ORAZ:",
    options: ["Silnego bólu w klatce piersiowej przy wdechu", "Krwioplucia", "Niestabilności hemodynamicznej (np. głęboki spadek ciśnienia / ciężki wstrząs)", "Odmy podskórnej wyczuwalnej przy badaniu palpacją"],
    correct: 2,
    explanation: "Samo ściszenie szmerów czy ból to może być zwykła odma prosta (której w ZRM się nie kłuje). Wskazaniem do wbicia igły/palca jest odma PRĘŻNA, czyli taka, która uciska serce i naczynia, powodując drastyczny spadek ciśnienia i narastający wstrząs."
  },
  {
    id: 166,
    category: "als",
    question: "Zaawansowane wytyczne ALS zalecają wykonanie tzw. Ratunkowego Cięcia Cesarskiego (Perimortem Cesarean Section - PMCS) u ciężarnej kobiety w NZK (jeśli RKO nie przynosi skutku), najlepiej w czasie:",
    options: ["W ciągu pierwszych 5 minut od zatrzymania krążenia", "Po 15 minutach RKO", "Po 30 minutach na SOR", "Nie wykonuje się tego u kobiet z widoczną ciążą"],
    correct: 0,
    explanation: "Zasada 4-5 minut. Jeśli po 4 minutach resuscytacji ciężarnej nie ma ROSC, wdrożenie PMCS (wydobycie dziecka w 5. minucie) drastycznie zwiększa szanse na przeżycie matki (odbarcza żyłę główną i przywraca rzut serca) oraz ratuje niemowlę."
  },
  {
    id: 167,
    category: "als",
    question: "Badając źrenice u pacjenta po ciężkim urazie czaszkowo-mózgowym, zauważasz anizokorię (jedna źrenica szeroka, sztywna, brak reakcji na światło, druga w normie). Jest to klasyczny zwiastun:",
    options: ["Wstrząsu neurogennego", "Śmierci pnia mózgu", "Wgłobienia mózgu (ucisk na nerw okoruchowy III)", "Zatrucia opiatami"],
    correct: 2,
    explanation: "Jednostronnie poszerzona i sztywna źrenica to późny i bardzo groźny objaw ciasnoty śródczaszkowej. Obrzęknięty mózg (lub krwiak) przesuwa się (wgłabia), uciskając bezpośrednio na nerw okoruchowy (CN III)."
  },
  {
    id: 168,
    category: "als",
    question: "Zgodnie z wytycznymi ERC 2025, jeśli po 3 kolejnych wyładowaniach u pacjenta nadal utrzymuje się oporne migotanie komór (Refractory VF), należy w pierwszej kolejności:",
    options: ["Podać wodorowęglan sodu (8.4%)", "Zmienić ułożenie elektrod defibrylacyjnych na przednio-tylne (Vector Change)", "Podać podwójną dawkę Amiodaronu (600 mg)", "Zaintubować pacjenta przed kolejną defibrylacją"],
    correct: 1,
    explanation: "ERC 2025 kładzie ogromny nacisk na 'Vector Change Defibrillation'. Zmiana ułożenia elektrod ze standardowego na przednio-tylne (AP) zmienia oś przepływu prądu i drastycznie zwiększa szanse na przełamanie opornego migotania komór."
  },
  {
    id: 169,
    category: "als",
    question: "Wytyczne ERC 2025 definitywnie rozstrzygają spór między dostępem dożylnym (I.V.) a doszpikowym (I.O.) w NZK. Zgodnie z nimi:",
    options: ["Dostęp I.O. jest preferowany jako pierwszy rzut ze względu na szybkość", "Dostęp I.V. jest nadrzędny, a I.O. stosuje się tylko, gdy założenie I.V. zawiedzie", "Oba dostępy są równorzędne w dystrybucji leków", "Dostęp I.O. rezerwuje się wyłącznie dla dzieci"],
    correct: 1,
    explanation: "Badania (w tym badanie PARAMEDIC3) udowodniły, że leki (szczególnie amiodaron i adrenalina) podawane doszpikowo w NZK docierają do serca w niższych stężeniach. ERC 2025 mówi wprost: 'Intravenous access is superior'."
  },
  {
    id: 170,
    category: "als",
    question: "U dorosłego pacjenta doszło do wstrząsu anafilaktycznego. Podałeś Adrenalinę I.M. Co wytyczne ERC 2025 mówią o podaży sterydów (np. Deksametazon) w ostrej fazie anafilaksji?",
    options: ["Są lekami pierwszego rzutu, podawanymi równocześnie z adrenaliną", "Zaleca się je rutynowo, aby zapobiec reakcji dwufazowej", "Wydano silną rekomendację przeciwko ich rutynowemu stosowaniu w ostrej fazie", "Podaje się je tylko w przypadku wystąpienia drgawek"],
    correct: 2,
    explanation: "To największa rewolucja w farmakologii ERC 2025. Ze względu na brak dowodów na poprawę przeżywalności tu i teraz, wytyczne stanowczo odradzają rutynowe stosowanie kortykosteroidów i leków przeciwhistaminowych w ostrej anafilaksji, stawiając 100% na Adrenalinę i płyny."
  },
  {
    id: 171,
    category: "als",
    question: "Według najnowszych wytycznych urazowych (m.in. ITLS 9th Ed / ATLS 11th Ed), preferowanym, najbardziej skutecznym miejscem igłowego odbarczenia odmy prężnej u dorosłego jest:",
    options: ["2. przestrzeń międzyżebrowa w linii środkowo-obojczykowej", "4. lub 5. przestrzeń międzyżebrowa w linii pachowej przedniej", "5. przestrzeń międzyżebrowa w linii pachowej tylnej", "Przestrzeń pod wyrostkiem mieczykowatym"],
    correct: 1,
    explanation: "Tradycyjne kłucie w 2. przestrzeni u dorosłych często kończyło się wbiciem igły w mięsień piersiowy lub tłuszcz (igła 50mm jest często za krótka). 4/5 przestrzeń w linii pachowej przedniej jest cieńsza i gwarantuje wyższy wskaźnik sukcesu wejścia do opłucnej."
  },
  {
    id: 172,
    category: "als",
    question: "Wyjeżdżasz na budowę. Nogi pracownika od 3 godzin przygniecione są betonową płytą (zespół zmiażdżenia - Crush Syndrome). Pacjent jest przytomny. Kluczowym krokiem ratunkowym, KTÓRY MUSISZ WYKONAĆ JESZCZE PRZED PODNIESIENIEM PŁYTY, jest:",
    options: ["Podanie wodorowęglanu sodu dożylnie", "Założenie dwóch opasek uciskowych na uda", "Rozpoczęcie bardzo agresywnej płynoterapii (min. 1-2 litry) krystaloidami", "Podanie dużej dawki adrenaliny I.M."],
    correct: 2,
    explanation: "Zmiażdżone mięśnie gromadzą potas i mioglobinę. Podniesienie ciężaru bez 'wypełnienia' pacjenta płynami spowoduje natychmiastowy wstrząs z reperfuzji, zatrzymanie nerek i serca. Agresywną infuzję płynów startuje się na uwięzionym pacjencie!"
  },

  {
    id: 174,
    category: "als",
    question: "Udzielasz pomocy 20-letniemu mężczyźnie dźgniętemu nożem w udo. Tętnica udowa uszkodzona, krwotok jest masywny i pulsujący. Twoim pierwszym i najważniejszym krokiem (zgodnie z wytycznymi TCCC/TECC i ERC 2025) jest:",
    options: ["Natychmiastowe założenie stazy taktycznej (tourniqueta) 'High and Tight' na udo", "Udrożnienie dróg oddechowych z kontrolą odcinka szyjnego", "Ucisk bezpośredni rany gazą przez 10 minut", "Podanie kwasu traneksamowego (TXA) i.v."],
    correct: 0,
    explanation: "W protokołach urazowych (MARCH / cABC) Masywne Krwotoki z kończyn mają absolutny priorytet przed drogami oddechowymi. Jeśli krew sika, staza ląduje od razu, wysoko i ciasno, bez tracenia czasu na inne procedury."
  },
  {
    id: 175,
    category: "als",
    question: "Pacjent w Nagłym Zatrzymaniu Krążenia (NZK). Urządzenie do mechanicznej kompresji klatki (np. LUCAS) jest włączone. Zgodnie z wytycznymi ERC 2025, defibrylację należy wykonać:",
    options: ["Po zatrzymaniu urządzenia, ocenie rytmu i naładowaniu defibrylatora", "Podczas trwającej kompresji klatki piersiowej, bez zatrzymywania urządzenia na czas wyładowania", "Zatrzymując urządzenie na max 5 sekund podczas oceny rytmu, a wyładowanie i ładowanie wykonać w trakcie uciskania", "Zdejmując urządzenie z klatki na czas wyładowania"],
    correct: 2,
    explanation: "Wytyczne minimalizują przerwy. Zatrzymujesz kompresję tylko na 2-5 sekund, aby upewnić się, że to VF/pVT. Odpalasz maszynę z powrotem, w trakcie uciskania ładujesz defibrylator i oddajesz strzał BEZ ponownego zatrzymywania kompresji."
  },
  {
    id: 176,
    category: "als",
    question: "Kalkulacja płynoterapii dla rozległych oparzeń u dorosłych przeszła modyfikację. Zgodnie z najnowszą zaktualizowaną formułą (dawne Parkland), ile płynów krystaloidowych przetoczysz w ciągu pierwszych 24h?",
    options: ["4 ml x kg m.c. x % TBSA", "2 ml x kg m.c. x % TBSA", "10 ml x kg m.c. x % TBSA", "1000 ml sztywno dla każdego"],
    correct: 1,
    explanation: "Aby uniknąć zjawiska 'fluid creep' (groźnego przewodnienia prowadzącego do ciasnoty przedziałów powięziowych i obrzęku płuc), standardowa formuła dla oparzeń termicznych u dorosłych została zmniejszona z 4 ml do 2 ml. Formułę 4 ml rezerwuje się dla oparzeń elektrycznych."
  },
  {
    id: 177,
    category: "als",
    question: "Wystąpienie objawu 'Świadomości indukowanej RKO' (CPR-induced consciousness) nakazuje ratownikom:",
    options: ["Rozpoznanie ROSC i odstawienie kompresji klatki", "Błyskawiczne zaintubowanie pacjenta bez leków", "Kontynuację RKO oraz wdrożenie protokołu sedacji (np. małymi dawkami midazolamu) i analgezji", "Podanie 3 mg Atropiny w celu stabilizacji pnia mózgu"],
    correct: 2,
    explanation: "ERC 2025 oficjalnie reguluje ten fenomen. Skuteczne RKO potrafi wybudzić niedotleniony mózg (pacjent walczy, otwiera oczy, jęczy), podczas gdy jego serce nadal stoi. Przerywanie uciśnięć go zabije. Należy go farmakologicznie 'uśpić' w trakcie trwającej resuscytacji."
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
    question: "Jaka jest dawka lignokainy po 3. defibrylacji rytmu VF/pVT u dorosłych?",
    options: ["150 mg", "200 mg", "100 mg", "50 mg"],
    correct: 2,
    explanation: "W VF/pVT możemy użyć lignokainy zamiast amiodaronu w dawce 100 mg po 3. defibrylacji wg. wytycznych ERC 2025."
  },
  {
    id: 10,
    category: "farmakologia",
    question: "Jaka jest dawka lignokainy po 5. defibrylacji rytmu VF/pVT u dorosłych?",
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
    category: 'farmakologia',
    question: 'Jaka jest dawka adenozyny w SVT dla dorosłych?',
    options: ["6 mg -> 12 mg -> 18 mg", "2 mg -> 4 mg -> 6 mg", "6 mg -> 6 mg -> 8 mg", "3 mg -> 12 mg -> 18 mg"],
    correct: 0,
    explanation: "Poprawna dawka adenozyny w SVT wg. ChPL to: 3 mg -> 6 mg -> 12 mg, lecz bazujemy na wytycznych ERC 2025, które mówią o dawce 6 mg -> 12 mg -> 18 mg."
  },
  {
    id: 71,
    category: 'farmakologia',
    question: 'Jaka jest dawka adenozyny w SVT dla dzieci?',
    options: ['6 mg -> 12 mg -> 18 mg', "3 mg -> 6 mg -> 12 mg", "0.1 mg/kg -> 0.2 mg/kg", "0.2 mg/kg -> 0.3 mg/kg"],
    correct: 2,
    explanation: "Poprawna dawka adenozyny w SVT u dzieci to: 0.1 mg/kg -> 0.2 mg/kg + rozważyć można jeszcze dawkę 0.3 mg/kg."
  },
  {
    id: 72,
    category: "farmakologia",
    question: "Jaka jest dawka atropiny w objawowej bradykardii dla dorosłych?",
    options: ['2 mg', '0.2 mg', '0.5 mg', '5 mg'],
    correct: 2,
    explanation: 'W objawowej bradykardii u dorosłych stosujemy atropinę w dawce 0.5 mg i miareczkujemy do całkowitej dawki 3 mg.'
  },
  {
    id: 73,
    category: 'farmakologia',
    question: "Jaka jest dawka atropiny w objawowej bradykardii dla dzieci?",
    options: ['30 mcg/kg', '20 mcg/kg', '35 mcg/kg', '25 mcg/kg'],
    correct: 1,
    explanation: 'Poprawne przeliczenie dawki atropiny dla dzieci w objawowej bradykardii to 20 mcg/kg masy ciała.'
  },
  {
    id: 74,
    category: 'farmakologia',
    question: "Jaka jest dawka atropiny w zatruciach środkami fosfoorganicznymi, muskarynami, cholinomimetykami dla dorosłych?",
    options: ['1-2 mg miareczkujemy do max. 100 mg całkowitej dawki', '0.5-1 mg miareczkujemy do max. 20 mg całkowitej dawki', '1-2 mg miareczkujemy do max. 100 mg całkowitej dawki', '0.5-1mg miareczkujemy do max. 100 mg całkowitej dawki'],
    correct: 0,
    explanation: 'W zatruciach atropinę podajemy w dawce 1-2 mg do całkowitej dawki 100 mg co 5-60 min. (dla dorosłych)'
  },
  {
    id: 75,
    category: 'farmakologia',
    question: "Jaka jest dawka atropiny w zatruciach środkami fosfoorganicznymi, muskarynami, cholinomimetykami dla dzieci?",
    options: ['20 mcg/kg', '0.05 mcg/kg', '30 mcg/kg', '0.03 mcg/kg'],
    correct: 1,
    explanation: 'W zatruciach u dzieci atropinę podajemy w dawce 0.05 mcg/kg masy ciała do zaniku objawów co 10-30 min do zaniku objawów.'
  },
  {
    id: 76,
    category: 'farmakologia',
    question: 'Jaka jest dawka amiodaronu w VT u dorosłych?',
    options: ['50 mg w 250 ml 5% glukozy', '150 mg w 250 ml 5% glukozy', '300 mg w 250 ml 5% glukozy', '600 mg w 250 ml 5% glukozy'],
    correct: 2,
    explanation: 'W częstoskurczu komorowym u dorosłych podajemy 300 mg amiodaronu w 250 ml 5% glukozy kontrolując rytm.'
  },
  {
    id: 77,
    category: 'farmakologia',
    question: 'Jakie dawki amiodaronu stosujemy w rytmach pVT/VF u dorosłych?',
    options: ['150 mg po III defibrylacji -> 300 mg po V defibrylacji', '300 mg po III defibrylacji -> 150 mg po V defibrylacji', '150 mg po III defibrylacji -> 150 mg po V defibrylacji', 'Amiodaron jest przeciwwskazany'],
    correct: 1,
    explanation: 'W NZK w rytmach pVT/VF stosujemy 300 mg amiodaronu po III defibrylacji i 150 mg po V defibrylacji.',
  },
  {
    id: 78,
    category: 'farmakologia',
    question: 'Jakie dawki amiodaronu stosujemy w VT u dzieci?',
    options: ['5 mg/kg', '150 mg', '2.5 mg/kg', '3 mg/kg'],
    correct: 0,
    explanation: 'W VT u dzieci stosujemy przeliczenie 5 mg/kg masy ciała (max 300mg)'
  },
  {
    id: 79,
    category: 'farmakologia',
    question: 'Jakie dawki amiodaronu stosujemy w pVT/VF u dzieci?',
    options: ['Nie stosujemy tego leku u dzieci', '5 mg/kg', '300 mg po III defibrylacji -> 150 mg po V defibrylacji', '300 mg'],
    correct: 1,
    explanation: 'W pVT/VF u dzieci stosujemy przeliczenie 5 mg/kg (max 300 mg po III defibrylacji -> max 150 mg po V defibrylacji)',
  },
  {
    id: 80,
    category: 'farmakologia',
    question: 'Jaką dawke budesonide podasz dziecku w zaostrzeniu astmy?',
    options: ['1-2 mg', '0.25-0.5 mg', '1 mg', '0.1-0.2 mg'],
    correct: 1,
    explanation: 'W zaostrzeniu astmy u dzieci podajemy budesonide w dawce 0.25-0.5 mg'
  },
  {
    id: 81, 
    category: 'farmakologia',
    question: 'Jaką dawkę budesonide podasz dorosłemu z zaostrzeniem astmy?',
    options: ['1-2 mg', '0.25-0.5 mg', 'Budesonide nie podajemy dorosłym z astmą', '0.5-1 mg'],
    correct: 0,
    explanation: 'W zaostrzeniu astmy u dorosłych podajemy budesonide w dawce 1-2 mg.'
  },
  {
    id: 82,
    category: 'farmakologia',
    question: 'Jaką dawkę budesonide podasz dziecku z zespołem krupu?',
    options: ['1-2 mg', '0.25-0.5 mg', 'Zespół krupu jest przeciwwskazaniem do podaży leku', '4-8 mg'],
    correct: 0,
    explanation: 'W zespole krupu podajemy dziecku 1-2 mg budesonide (po 1 mg)',
  },
  {
    id: 83,
    category: 'farmakologia',
    question: 'Jaką dawkę kaptoprilu podasz dorosłemu z nadciśnieniem tętniczym?',
    options: ['100-200 mg', '10-20 mg', '80-100 mg', '25-50 mg'],
    correct: 3,
    explanation: 'Dawka kaptoprilu dla dorosłych to 25-50 mg.'    
  },
  {
    id: 84,
    category: 'farmakologia',
    question: 'Jaką dawkę klemastyny (Clemastin) podasz dorosłemu pomocniczo przy anafilaksji?',
    options: ['0.5 mg', '4 mg', '2 mg', '1.5 mg'],
    correct: 2,
    explanation: 'Prawidłowa dawka klemastyny to 2 mg.'
  },
  {
    id: 85, 
    category: 'farmakologia',
    question: 'Jaką dawkę klonazepamu (Clonazepam) podasz dorosłemu z drgawkami toniczno-klonicznymi?',
    options: ['1 mg', '5 mg', '3 mg', '10 mg'],
    correct: 0,
    explanation: 'Dorosłemu podajemy 1 mg powoli dożylnie nie przekraczając 20 mg/doba.'
  },
  {
    id: 86,
    category: 'farmakologia',
    question: 'Jaką dawkę klonazepamu (Clonazepam) podasz dziecku z drawkami toniczno-klonicznymi?',
    options: ['0.1-0.5 mcg/kg', '0.1-0.5 mg/kg', '1-2 mg/kg', '0.5-0.8 mg/kg'],
    correct: 0,
    explanation: 'Dziecku podajemy klonazepam w przeliczeniu 0.1-0.5 mcg/kg.'
  },
  {
    id: 87,
    category: 'farmakologia',
    question: 'Jaką dawkę deksametazonu podasz dorosłemu z anafilaksją?',
    options: ['4-8 mg', '40-80 mg', '1-2 mg', '10-20 mg'],
    correct: 0,
    explanation: 'Dawkujemy deksametazon 4-8 mg.',
  },
  {
    id: 88,
    category: 'farmakologia',
    question: 'Jaką dawkę deksametazonu podasz dziecku z zespołem krupu?',
    options: ['0.2-0.4 mg/kg', '4-8 mg', '10 mg', '0.4-0.8 mg/kg'],
    correct: 0,
    explanation: 'Poprawne przeliczenie deksametazonu na kilogram masy ciała dla dzieci to 0.2-0.4 mg.'
  },
  {
    id: 89,
    category: "farmakologia",
    question: "Jaka jest dawka adrenaliny (epinefryny) podawana we wstrząsie anafilaktycznym u dorosłych?",
    options: ["1 mg i.v.", "0.5 mg i.m.", "0.3 mg s.c.", "2-10 mcg/min"],
    correct: 1,
    explanation: "Standardowa dawka we wstrząsie anafilaktycznym u dorosłych to 0.5 mg podawana domięśniowo (i.m.) w przednio-boczną powierzchnię uda."
  },
  {
    id: 90,
    category: "farmakologia",
    question: "Jaka jest dawka adrenaliny (epinefryny) u dorosłych w Nagłym Zatrzymaniu Krążenia (NZK)?",
    options: ["1 mg i.v./i.o.", "0.5 mg i.m.", "3 mg i.v.", "10 mg i.v."],
    correct: 0,
    explanation: "W rutynowym NZK u dorosłych podaje się 1 mg adrenaliny (najczęściej po rozcieńczeniu w 10 ml 0.9% NaCl) w szybkim bolusie dożylnym lub doszpikowym."
  },
  {
    id: 91,
    category: "farmakologia",
    question: "Jaka jest zalecana dawka adrenaliny we wlewie ciągłym we wstrząsie kardiogennym lub ciężkiej bradykardii u dzieci?",
    options: ["1 mg w bolusie", "0.05 - 1 mcg/kg/min", "2 - 10 mcg/min", "0.01 mg/kg m.c. w bolusie"],
    correct: 1,
    explanation: "U dzieci w celu podtrzymania rzutu serca we wstrząsie stosuje się wlew ciągły adrenaliny w dawce od 0.05 do 1 mcg/kg/min."
  },
  {
    id: 92,
    category: "farmakologia",
    question: "Jaką dawkę diazepamu (Relanium) podasz dorosłemu w celu przerwania napadu drgawek?",
    options: ["1 - 2 mg i.v.", "5 - 10 mg i.v.", "15 - 20 mg i.v.", "0.5 mg i.v."],
    correct: 1,
    explanation: "W celu przerwania drgawek u dorosłego podaje się powoli dożylnie od 5 do 10 mg diazepamu."
  },
  {
    id: 93,
    category: "farmakologia",
    question: "Jaka jest dawka diazepamu (Relanium) stosowana u dzieci w stanie padaczkowym?",
    options: ["0.2 - 0.3 mg/kg m.c.", "1 mg/kg m.c.", "5 mg niezależnie od wagi", "10 - 20 mcg/kg m.c."],
    correct: 0,
    explanation: "Dawka pediatryczna diazepamu wynosi 0.2 do 0.3 mg/kg m.c. podawana powoli dożylnie lub doszpikowo."
  },
  {
    id: 94,
    category: "farmakologia",
    question: "W jakiej dawce podasz drotawerynę (No-Spę) dorosłemu pacjentowi z kolką nerkową?",
    options: ["10 - 20 mg", "40 - 80 mg i.m./i.v.", "100 - 150 mg i.m.", "200 mg p.o."],
    correct: 1,
    explanation: "Jednorazowa dawka rozkurczowa drotaweryny dla osoby dorosłej wynosi od 40 do 80 mg (1-2 ampułki)."
  },
  {
    id: 95,
    category: "farmakologia",
    question: "Jaka jest dawka fentanylu dla dorosłego pacjenta z silnym bólem urazowym (bez intubacji)?",
    options: ["10 - 20 mcg", "50 - 200 mcg ", "300 - 500 mcg", "1 mg"],
    correct: 1,
    explanation: "Dawka przeciwbólowa fentanylu dla wydolnego oddechowo dorosłego to zazwyczaj 50-200 mcg  miareczkowana dożylnie."
  },
  {
    id: 96,
    category: "farmakologia",
    question: "Jak dawkujemy fentanyl u dzieci w celu zniesienia silnego bólu?",
    options: ["10 - 20 mcg/kg m.c.", "1 - 3 mcg/kg m.c.", "0.1 mg/kg m.c.", "Dzieciom nie podajemy fentanylu"],
    correct: 1,
    explanation: "U dzieci fentanyl miarekuje się ostrożnie w dawce od 1 do 3 mikrogramów (mcg) na każdy kilogram masy ciała."
  },
  {
    id: 97,
    category: "farmakologia",
    question: "Jaką początkową dawkę flumazenilu (Anexate) zastosujesz u dorosłego pacjenta w celu odwrócenia działania benzodiazepin?",
    options: ["1 mg i.v.", "2 mg i.v.", "0.2 mg i.v.", "0.5 mg/kg m.c."],
    correct: 2,
    explanation: "Dawka startowa wybudzająca dla dorosłego to 0.2 mg i.v. podana w ciągu 15 sekund, w razie potrzeby powtarzana po minucie."
  },
  {
    id: 98,
    category: "farmakologia",
    question: "Kiedy podanie flumazenilu jest bezwzględnie przeciwwskazane u zatrutego pacjenta?",
    options: ["W upojeniu alkoholowym", "W zatruciu paracetamolem", "W zatruciu trójpierścieniowymi lekami przeciwdepresyjnymi (TLPD)", "W nadciśnieniu tętniczym"],
    correct: 2,
    explanation: "Zniesienie działania przeciwdrgawkowego benzodiazepin u pacjenta zatrutego TLPD (lub leczącego się na padaczkę) może wywołać niemożliwy do opanowania stan padaczkowy."
  },
  {
    id: 99,
    category: "farmakologia",
    question: "Jaka jest dawka początkowa furosemidu u dorosłego pacjenta z obrzękiem płuc?",
    options: ["5 - 10 mg i.v.", "20 - 80 mg i.v. (lub dwukrotność dawki domowej)", "100 - 200 mg i.v.", "0.5 mg/kg m.c."],
    correct: 1,
    explanation: "Standardowo podaje się 20-80 mg i.v. Jeśli pacjent przewlekle przyjmuje diuretyki, dawkę można zwiększyć."
  },
  {
    id: 100,
    category: "farmakologia",
    question: "Wskaż bezwzględne przeciwwskazanie do podania furosemidu:",
    options: ["Obrzęk płuc", "Niewydolność serca", "Hipowolemia (np. masywny krwotok, odwodnienie)", "Nadciśnienie tętnicze"],
    correct: 2,
    explanation: "Furosemid to silny diuretyk wymuszający wydalanie wody. W hipowolemii doprowadzi to do natychmiastowego załamania ciśnienia krwi."
  },
  {
    id: 101,
    category: "farmakologia",
    question: "Jaką dawkę glukagonu podasz domięśniowo dziecku o masie ciała poniżej 25 kg w ciężkiej hipoglikemii?",
    options: ["0.25 mg", "0.5 mg", "1 mg", "2 mg"],
    correct: 1,
    explanation: "Dzieciom o masie poniżej 25 kg podaje się połowę dawki dorosłej, czyli 0.5 mg glukagonu."
  },
  {
    id: 102,
    category: "farmakologia",
    question: "Jakie jest specyficzne kardiologiczne wskazanie (poza hipoglikemią) do podania dużych dawek glukagonu?",
    options: ["Zatrucie opioidami", "Zatrucie beta-blokerami", "Częstoskurcz komorowy (VT)", "Blok AV I stopnia"],
    correct: 1,
    explanation: "Glukagon stymuluje mięsień sercowy z pominięciem zablokowanych receptorów beta, będąc odtrutką w przedawkowaniu beta-blokerów."
  },
  {
    id: 103,
    category: "farmakologia",
    question: "Jaka jest dawka i.v. glukozy podawana pacjentom (zarówno dzieciom, jak i dorosłym) w przypadku hipoglikemii wg wytycznych ERC?",
    options: ["100 mg/kg m.c.", "200 mg/kg m.c. (0.2 g/kg)", "500 mg/kg m.c.", "1 g/kg m.c."],
    correct: 1,
    explanation: "ERC zaleca podawanie glukozy w dawce ok. 0.2 g/kg (200 mg/kg m.c.), np. w postaci roztworu 10% lub 20%."
  },
  {
    id: 104,
    category: "farmakologia",
    question: "Jaka jest dawka nasycająca heparyny niefrakcjonowanej podawana dożylnie dorosłemu w Ostrym Zespole Wieńcowym?",
    options: ["1000 j.m.", "2000 j.m.", "5000 j.m.", "10000 j.m."],
    correct: 2,
    explanation: "Standardowa dawka nasycająca w OZW (zwykle po konsultacji z kardiologiem) to 5000 j.m. w szybkim bolusie i.v."
  },
  {
    id: 105,
    category: "farmakologia",
    question: "Jak dawkujemy hydrokortyzon u dzieci w stanach nagłych (np. anafilaksja, zaostrzenie astmy)?",
    options: ["1 - 2 mg/kg m.c.", "4 - 10 mg/kg m.c.", "20 - 30 mg/kg m.c.", "50 mg sztywno"],
    correct: 1,
    explanation: "Dawka sterydu ratunkowego dla dzieci wynosi od 4 do 10 mg na każdy kilogram masy ciała."
  },
  {
    id: 106,
    category: "farmakologia",
    question: "Jaka jest standardowa dawka hydroksyzyny podawanej domięśniowo u dorosłego pacjenta (np. w ostrej reakcji lękowej)?",
    options: ["10 - 20 mg", "50 - 100 mg", "200 mg", "1 - 5 mg"],
    correct: 1,
    explanation: "Dorośli przyjmują głęboko domięśniowo dawkę w granicach od 50 do 100 mg (1 do 2 ampułek)."
  },
  {
    id: 107,
    category: "farmakologia",
    question: "Jaka jest jednorazowa dawka ibuprofenu (p.o.) dla dzieci w celu obniżenia gorączki lub uśmierzenia bólu?",
    options: ["5 mg/kg m.c.", "10 mg/kg m.c.", "20 mg/kg m.c.", "30 mg/kg m.c."],
    correct: 1,
    explanation: "Pojedyncza dawka ibuprofenu to 10 mg/kg m.c., którą można powtarzać co 6-8 godzin (maks. 30 mg/kg/dobę)."
  },
  {
    id: 108,
    category: "farmakologia",
    question: "Jak podajemy Isosorbid (np. Monosan, Effox) w napadzie dławicy piersiowej u dorosłego?",
    options: ["10 - 20 mg podjęzykowo (po rozkruszeniu tabletki)", "40 mg połykane w całości", "1 - 5 mg dożylnie", "100 mg domięśniowo"],
    correct: 0,
    explanation: "W stanach nagłych azotany podajemy w dawce 10-20 mg podjęzykowo (S.L.), aby błyskawicznie wchłonęły się przez śluzówkę."
  },
  {
    id: 109,
    category: "farmakologia",
    question: "Ile mg leku zawiera klasyczna, iniekcyjna ampułka ketoprofenu (Ketonalu) stosowana w ZRM?",
    options: ["10 mg", "50 mg", "100 mg", "200 mg"],
    correct: 2,
    explanation: "Ampułka ketoprofenu o pojemności 2 ml zawsze zawiera 100 mg substancji czynnej."
  },
  {
    id: 110,
    category: "farmakologia",
    question: "Jaką uderzeniową dawkę koloidów (np. Gelofusine) podasz dorosłemu we wstrząsie hipowolemicznym z utraty krwi?",
    options: ["5 ml/kg m.c.", "10 ml/kg m.c.", "20 ml/kg m.c.", "50 ml/kg m.c."],
    correct: 2,
    explanation: "Zarówno dla płynów krystaloidowych, jak i koloidów (o ile stosowane wg zaleceń), początkowy bolus we wstrząsie wynosi u dorosłego do 20 ml/kg m.c."
  }
];
