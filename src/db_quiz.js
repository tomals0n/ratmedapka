// correct: 0 A
// correct: 1 B
// correct: 2 C
// correct: 3 D


const quizQuestions = [
  {
    id: 1,
    question: "Jaka jest pierwsza dawka Adrenaliny w rytmach do defibrylacji (VF/pVT)?",
    options: ["A. 0.5mg", "B. 2 mg", "C. 1 mg", "D. 2 mg"],
    correct: 2 
  },
  {
    id: 2,
    question: "Dawka Amiodaronu po 3. defibrylacji wynosi:",
    options: ["A. 150 mg", "B. 300 mg", "C. 450 mg", "D. 1 mg/kg"],
    correct: 1
  },
  {
    id: 3,
    question: "Jaki jest stosunek uciśnięć klatki piersiowej do oddechów u dorosłych?",
    options: ["A. 15:2", "B. 30:1", "C. 30:2", "D. 10:1"],
    correct: 2
  },
  {
    id: 4,
    question: "Co oznacza litera 'P' w schemacie SAMPLE?",
    options: ["A. Posiłek", "B. Przeszłość chorobowa", "C. Puls", "D. Przyjmowane leki"],
    correct: 1
  },
  {
    id: 5,
    question: "Docelowa wartość EtCO2 podczas RKO powinna wynosić co najmniej:",
    options: ["A. 5 mmHg", "B. 10 mmHg", "C. 15 mmHg", "D. 20 mmHg"],
    correct: 2
  },
  {
    id: 6,
    question: "Jaka jest dawka Atropiny w NZK (wg ChPL)?",
    options: ["A. 0.5 mg", "B. 1 mg", "C. 3 mg", "D. Nie stosuje się rutynowo"],
    correct: 2
  },
  {
    id: 7,
    question: "Co oznacza 'D' w schemacie DOPES?",
    options: ["A. Drugs", "B. Displacement", "C. Defibrillation", "D. Death"],
    correct: 1
  },
  {
    id: 8,
    question: "Gdzie podajemy Adrenalinę w anafilaksji u dorosłych?",
    options: ["A. Dożylnie (i.v.)", "B. Domięśniowo (i.m.)", "C. Podskórnie (s.c.)", "D. Podjęzykowo (s.l.)"],
    correct: 1
  },
  {
    id: 9,
    question: "Jaka jest standardowa dawka Aspiryny w OZW?",
    options: ["A. 75 mg", "B. 300 mg", "C. 500 mg", "D. 1000 mg"],
    correct: 1
  },
  {
    id: 10,
    question: "Objaw Blumberga świadczy o:",
    options: ["A. Zapaleniu wyrostka", "B. Podrażnieniu otrzewnej", "C. Kolce nerkowej", "D. Niedrożności jelit"],
    correct: 1
  },
  {
    id: 11,
    question: "Jaką dawkę Adenozyny podajemy jako pierwszą?",
    options: ["A. 3 mg", "B. 6 mg", "C. 12 mg", "D. 18 mg"],
    correct: 1
  },
  {
    id: 12,
    question: "Przeciwwskazaniem do podania Nitrogliceryny jest BP skurczowe poniżej:",
    options: ["A. 110 mmHg", "B. 100 mmHg", "C. 90 mmHg", "D. 80 mmHg"],
    correct: 2
  },
  {
    id: 13,
    question: "Ile punktów w skali GCS otrzyma pacjent otwierający oczy na polecenie, splątany, lokalizujący ból?",
    options: ["A. 10", "B. 11", "C. 12", "D. 13"],
    correct: 2 // E3, V4, M5 = 12
  },
  {
    id: 14,
    question: "Co oznacza 'H' w schemacie CHAMPIT?",
    options: ["A. Hypoxia", "B. Hypovolemia", "C. Hypertension", "D. Heart failure"],
    correct: 2
  },
  {
    id: 15,
    question: "Dawka Furosemidu w obrzęku płuc to zazwyczaj:",
    options: ["A. 10 mg", "B. 20-80 mg", "C. 100 mg", "D. 1 mg/kg"],
    correct: 1
  },
  {
    id: 16,
    question: "Nie masz Amiodaronu, pacjent zatrzymał się w mechaniźmie VF, jaką dawkę lignokainy podasz po 3. defibrylacji?",
    options: ["A. 50 mg", "B. 100 mg", "C. 150 mg", "D. 200 mg"],
    correct: 1
  },
  {
    id: 17,
    question: "W jakim rytmie NZK podajemy adrenalinę jak najszybciej?",
    options: ["A. VF", "B. pVT", "C. Asystolia", "D. TdP"],
    correct: 2
  },
  {
    id: 18,
    question: "Co oznacza 'E' w schemacie ABCDE?",
    options: ["A. ECG", "B. Exposure", "C. Eyes", "D. Environment"],
    correct: 1
  },
  {
    id: 19,
    question: "Dawka glukozy 20% w hipoglikemii u dorosłych to:",
    options: ["A. 1 g/kg", "B. 2 g/kg", "C. 0.2 ml/kg", "D. 200 mg/kg"],
    correct: 3
  },
  {
    id: 20,
    question: "Który objaw oponowy polega na zgięciu nóg przy przygięciu głowy do klatki piersiowej?",
    options: ["A. Kerniga", "B. Brudzińskiego", "C. Flataua", "D. Goldflama"],
    correct: 1
  },
  {
    id: 21,
    question: "Częstotliwość uciśnięć klatki piersiowej w RKO to:",
    options: ["A. 80-100/min", "B. 100-120/min", "C. 120-140/min", "D. Jak najszybciej"],
    correct: 1
  },
  {
    id: 22,
    question: "Morfina w OZW podawana jest głównie w celu:",
    options: ["A. Obniżenia ciśnienia", "B. Zwalczenia bólu i lęku", "C. Rozpuszczenia skrzepu", "D. Sedacji"],
    correct: 1
  },
  {
    id: 23,
    question: "Siła defibrylacji (3. i kolejne wyładowanie) wynosi:",
    options: ["A. 200 J", "B. 300 J", "C. 360 J", "D. 150 J"],
    correct: 2
  },
  {
    id: 24,
    question: "Skrót 'O' w schemacie SPEED-BOMB oznacza:",
    options: ["A. Obstruction", "B. Oxygen", "C. Oropharyngeal", "D. Observation"],
    correct: 1
  },
  {
    id: 25,
    question: "Lekiem z wyboru w Torsade de Pointes jest:",
    options: ["A. Amiodaron", "B. Magnez", "C. Potas", "D. Adrenalina"],
    correct: 1
  },
  {
    id: 26,
    question: "Dawka Kwasu Traneksamowego (Exacyl) u dorosłych to:",
    options: ["A. 500 mg", "B. 1 g", "C. 2 g", "D. 10 mg/kg"],
    correct: 1
  },
  {
    id: 27,
    question: "Co badamy w punkcie 'C' schematu ABCDE?",
    options: ["A. Oddech", "B. Drożność dróg", "C. Układ krążenia", "D. Glikemię"],
    correct: 2
  },
  {
    id: 28,
    question: "Dawka Midazolamu w sedacji u dorosłych (<60 lat) to:",
    options: ["A. 0.5 mg", "B. 2-2.5 mg", "C. 5 mg", "D. 10 mg"],
    correct: 1
  },
  {
    id: 29,
    question: "Przeciwwskazaniem do podania Amiodaronu jest:",
    options: ["A. Tachykardia", "B. Migotanie komór", "C. Bradykardia zatokowa", "D. Nadciśnienie"],
    correct: 2
  },
  {
    id: 30,
    question: "Ile mg adrenaliny zawiera ampułka 1 ml (1:1000)?",
    options: ["A. 0.1 mg", "B. 1 mg", "C. 10 mg", "D. 0.5 mg"],
    correct: 1
  },
  {
    id: 31,
    question: "Objaw Murphy'ego sprawdza się pod:",
    options: ["A. Lewym łukiem żebrowym", "B. Prawym łukiem żebrowym", "C. Mostkiem", "D. Pępkiem"],
    correct: 1
  },
  {
    id: 32,
    question: "Lek odwracający działanie Benzodiazepin to:",
    options: ["A. Naloxon", "B. Flumazenil", "C. Atropina", "D. Glukagon"],
    correct: 1
  },
  {
    id: 33,
    question: "Co oznacza 'L' w schemacie SAMPLE?",
    options: ["A. Leki", "B. Lunch (ostatni posiłek)", "C. Lokalizacja", "D. Lista objawów"],
    correct: 1
  },
  {
    id: 34,
    question: "Dawka Hydrokortyzonu w anafilaksji to zazwyczaj:",
    options: ["A. 50 mg", "B. 100-200 mg", "C. 500 mg", "D. 1 g"],
    correct: 1
  },
  {
    id: 35,
    question: "Płyn wieloelektrolitowy (PWE) podajemy w bolusie (hipotensja) dorosłym w dawce:",
    options: ["A. 2 ml/kg", "B. 5 ml/kg", "C. 10 ml/kg", "D. 20 ml/kg"],
    correct: 3
  },
  {
    id: 36,
    question: "Skala NRS służy do oceny:",
    options: ["A. Świadomości", "B. Oddechu", "C. Natężenia bólu", "D. Odwodnienia"],
    correct: 2
  },
  {
    id: 37,
    question: "Pacjent z bradykardią 35/min jaki lek podasz jako pierwszy?",
    options: ["A. Atropina", "B. Adrenalina", "C. Noradrenalina", "D. Glukagon"],
    correct: 0
  },
  {
    id: 38,
    question: "Dawka Heparyny w OZW (standardowo i.v.) to:",
    options: ["A. 2500 j.m.", "B. 5000 j.m.", "C. 10000 j.m.", "D. 75 j.m./kg"],
    correct: 1
  },
  {
    id: 39,
    question: "Który lek podajemy w nebulizacji przy Krupie?",
    options: ["A. Salbutamol", "B. Budesonid", "C. Atrovent", "D. Adrenalina"],
    correct: 1
  },
  {
    id: 40,
    question: "Co badamy w punkcie 'D' schematu ABCDE?",
    options: ["A. Krążenie", "B. Brzuch", "C. Neurologię i glikemię", "D. Osłuchiwanie płuc"],
    correct: 2
  },
  {
    id: 41,
    question: "Dawka Naloxonu w zatruciu opioidami (startowa) to:",
    options: ["A. 0.1 mg", "B. 0.4 mg", "C. 2 mg", "D. 4 mg"],
    correct: 1
  },
  {
    id: 42,
    question: "Objaw Rovsinga świadczy o zapaleniu:",
    options: ["A. Pęcherzyka", "B. Wyrostka robaczkowego", "C. Trzustki", "D. Nerek"],
    correct: 1
  },
  {
    id: 43,
    question: "Lekiem przeciwgorączkowym, który można podać i.v. jest:",
    options: ["A. Ibuprofen", "B. Paracetamol", "C. Aspiryna", "D. Naproksen"],
    correct: 1
  },
  {
    id: 44,
    question: "Co oznacza 'S' w schemacie DOPES?",
    options: ["A. Sedation", "B. Stomach (intubacja przełyku)", "C. Spasm", "D. Suction"],
    correct: 1
  },
  {
    id: 45,
    question: "Dawka Adrenaliny w anafilaksji u dzieci (i.m.) wynosi:",
    options: ["A. 10 mcg/kg", "B. 0.01 mg/kg", "C. 0.15-0.3 mg (zależnie od wagi)", "D. Wszystkie powyższe są poprawne"],
    correct: 3
  },
  {
    id: 46,
    question: "Skrót 'A' w schemacie CHAMPIT oznacza:",
    options: ["A. Airway", "B. Arrythmia", "C. Anaphylaxis", "D. Acidosis"],
    correct: 1
  },
  {
    id: 47,
    question: "Jaki lek podajemy podjęzykowo przy nadciśnieniu?",
    options: ["A. Metoprolol", "B. Captopril", "C. Furosemid", "D. Relanium"],
    correct: 1
  },
  {
    id: 48,
    question: "Ile punktów w skali GCS to minimum?",
    options: ["A. 0", "B. 1", "C. 3", "D. 5"],
    correct: 2
  },
  {
    id: 49,
    question: "Co oznacza 'M' w schemacie SPEED-BOMB?",
    options: ["A. Morphine", "B. Monitoring", "C. Mask", "D. Muscle relaxant"],
    correct: 1
  },
  {
    id: 50,
    question: "Dawka Clemastinu u dorosłych to:",
    options: ["A. 1 mg", "B. 2 mg", "C. 5 mg", "D. 10 mg"],
    correct: 1
  },
  {
    id: 51,
    question: "Dawka adrenaliny w nagłym zatrzymaniu krążenia (NZK) u dziecka ważącego 20 kg wynosi (droga i.v./i.o.):",
    options: ["A. 0.1 mg", "B. 0.2 mg", "C. 0.5 mg", "D. 1.0 mg"],
    correct: 1
  },
  {
    id: 52,
    question: "Jaka jest dawka Fentanylu dla dzieci?:",
    options: ["A. 1-3 mg/kg", "B. 1-3 g/kg", "C. 1-3 mcg/kg", "D. 50-200 mcg/kg"],
    correct: 2
  },
  {
    id: 53,
    question: "Dawka Amiodaronu w opornym na defibrylację migotaniu komór (VF) u dziecka to:",
    options: ["A. 1 mg/kg m.c.", "B. 3 mg/kg m.c.", "C. 5 mg/kg m.c.", "D. 10 mg/kg m.c."],
    correct: 2
  },
  {
    id: 54,
    question: "Zalecana dawka midazolamu podawanego donosowo (MAD) u dziecka w przypadku drgawek to:",
    options: ["A. 0.1 mg/kg m.c.", "B. 0.3 mg/kg m.c.", "C. 0.5 mg/kg m.c.", "D. 1.0 mg/kg m.c."],
    correct: 1
  },
  {
    id: 55,
    question: "Dawka jednorazowa paracetamolu podawanego dożylnie (i.v.) u dziecka wynosi:",
    options: ["A. 5 mg/kg m.c.", "B. 10 mg/kg m.c.", "C. 15 mg/kg m.c.", "D. 20 mg/kg m.c."],
    correct: 2
  },
  {
    id: 56,
    question: "Pierwsza dawka adenozyny u dorosłego pacjenta w częstoskurczu nadkomorowym (SVT) wynosi:",
    options: ["A. 3 mg", "B. 6 mg", "C. 12 mg", "D. 18 mg"],
    correct: 1
  },
  {
    id: 57,
    question: "Dawka glukagonu podawana domięśniowo u dorosłego pacjenta w ciężkiej hipoglikemii to:",
    options: ["A. 0.5 mg", "B. 1 mg", "C. 2 mg", "D. 5 mg"],
    correct: 1
  },
  {
    id: 58,
    question: "Dawka siarczanu magnezu w ciężkim napadzie astmy oskrzelowej u dziecka wynosi:",
    options: ["A. 10 mg/kg m.c.", "B. 25 mg/kg m.c.", "C. 50 mg/kg m.c.", "D. 100 mg/kg m.c."],
    correct: 2
  },
  {
    id: 59,
    question: "Dawka jednorazowa ibuprofenu podawanego doustnie (p.o.) u dziecka wynosi zazwyczaj:",
    options: ["A. 5 mg/kg m.c.", "B. 10 mg/kg m.c.", "C. 15 mg/kg m.c.", "D. 20 mg/kg m.c."],
    correct: 1
  },
  {
    id: 60,
    question: "Jaką dawkę hydrokortyzonu (i.v.) podasz dorosłemu pacjentowi z ciężką anafilaksją?",
    options: ["A. 50 mg", "B. 100 mg", "C. 200 mg", "D. 500 mg"],
    correct: 2
  },
  {
    id: 61,
    question: "Dawka amiodaronu podawana w stabilnym hemodynamicznie częstoskurczu komorowym (VT) u dorosłego wynosi:",
    options: ["A. 150 mg", "B. 300 mg", "C. 600 mg", "D. 900 mg"],
    correct: 1
  },
  {
    id: 62,
    question: "Ile miligramów kwasu traneksamowego (TXA) podasz dorosłemu pacjentowi z masywnym krwotokiem pourazowym w pierwszej dawce?",
    options: ["A. 250 mg", "B. 500 mg", "C. 1000 mg (1 g)", "D. 2000 mg (2 g)"],
    correct: 2
  },
  {
    id: 63,
    question: "W 12-odprowadzeniowym EKG stwierdzasz uniesienia odcinka ST w odprowadzeniach II, III oraz aVF. Świadczy to najprawdopodobniej o zawale:",
    options: ["A. Ściany przedniej", "B. Ściany dolnej", "C. Ściany bocznej", "D. Prawej komory"],
    correct: 1
  },
  {
    id: 64,
    question: "Całkowity brak związku między załamkami P a zespołami QRS (przedsionki i komory pracują niezależnie) to w zapisie EKG cecha:",
    options: ["A. Bloku AV I stopnia", "B. Bloku AV II stopnia typu Wenckebacha", "C. Bloku AV III stopnia (całkowitego)", "D. Migotania przedsionków"],
    correct: 2
  },
  {
    id: 65,
    question: "Miarowy rytm z szerokimi kompleksami QRS (> 0.12 s) i częstością > 100/min u pacjenta niestabilnego hemodynamicznie należy traktować z definicji jako:",
    options: ["A. Częstoskurcz nadkomorowy (SVT)", "B. Migotanie przedsionków (AF)", "C. Częstoskurcz komorowy (VT)", "D. Trzepotanie przedsionków"],
    correct: 2
  },
  {
    id: 66,
    question: "Jaki lek podasz na nieurazowy obrzęk mózgu?",
    options: ["A. Deksametazon", "B. Hydrokortyzon", "C. Urapidyl", "D. Furosemid"],
    correct: 0
  },
  {
    id: 67,
    question: "Flumazenil jest specyficzną odtrutką w przypadku zatrucia:",
    options: ["A. Opioidami", "B. Benzodiazepinami", "C. Paracetamolem", "D. Trójpierścieniowymi lekami przeciwdepresyjnymi (TLPD)"],
    correct: 1
  },
  {
    id: 68,
    question: "Na Triadę Cushinga (późny objaw wzmożonego ciśnienia śródczaszkowego) składają się:",
    options: ["A. Hipotensja, tachykardia, przyspieszony oddech", "B. Nadciśnienie tętnicze, bradykardia, nieregularny oddech", "C. Nadciśnienie tętnicze, tachykardia, bezdech", "D. Hipotensja, bradykardia, oddech Cheyne'a-Stokesa"],
    correct: 1
  },
  {
    id: 69,
    question: "Wskaż prawidłowy skład Triady Becka, charakterystycznej dla tamponady worka osierdziowego:",
    options: ["A. Głośne tony serca, hipotensja, zapadnięte żyły szyjne", "B. Ściszone tony serca, nadciśnienie tętnicze, poszerzone żyły szyjne", "C. Ściszone tony serca, hipotensja, poszerzone żyły szyjne", "D. Trzeszczenia nad płucami, hipotensja, poszerzone żyły szyjne"],
    correct: 2
  },
  {
    id: 70,
    question: "Nagła duszność, kłujący ból w klatce piersiowej, tachykardia i krwioplucie. U pacjenta po długotrwałym unieruchomieniu objawy te najbardziej sugerują:",
    options: ["A. Odmę prężną", "B. Ostry Zespół Wieńcowy (OZW)", "C. Zatorowość płucną (PE)", "D. Kardiogenny obrzęk płuc"],
    correct: 2
  },
  {
    id: 71,
    question: "Różowa, spieniona plwocina u pacjenta z ekstremalną dusznością w pozycji leżącej (ortopnoe) i trzeszczeniami nad płucami to klasyczny objaw:",
    options: ["A. Astmy oskrzelowej", "B. Zaostrzenia POChP", "C. Kardiogennego obrzęku płuc", "D. Masywnego krwotoku do dróg oddechowych"],
    correct: 2
  },
  {
    id: 72,
    question: "Niedowład połowiczy (jednostronne opadanie kącika ust, osłabienie siły mięśniowej kończyn) oraz afazja to objawy Ośrodkowego Układu Nerwowego wskazujące w warunkach ZRM głównie na:",
    options: ["A. Udar mózgu", "B. Guz mózgu", "C. Zapalenie opon mózgowych", "D. Stwardnienie rozsiane"],
    correct: 0
  },
  {
    id: 73,
    question: "Zalecana dawka początkowa Furosemidu (i.v.) w ostrym obrzęku płuc u pacjenta, który przewlekle nie stosuje leków moczopędnych, to:",
    options: ["A. 10 mg", "B. 20 - 80 mg", "C. 80 - 100 mg", "D. 200 mg"],
    correct: 1
  },
  {
    id: 74,
    question: "Bezwzględnym przeciwwskazaniem do podania kwasu acetylosalicylowego (ASA) pacjentowi z podejrzeniem OZW jest:",
    options: ["A. Aktywna choroba wrzodowa i czynne krwawienie z przewodu pokarmowego", "B. Cukrzyca typu 2", "C. Nadciśnienie tętnicze uregulowane farmakologicznie", "D. Przewlekła Obturacyjna Choroba Płuc (POChP)"],
    correct: 0
  },
  {
    id: 75,
    question: "Poniżej jakiego wieku bezwzględnie NIE WOLNO stosować Ketoprofenu (Ketonalu)?",
    options: ["A. 12 roku życia", "B. 15 roku życia", "C. 16 roku życia", "D. 18 roku życia"],
    correct: 1
  },
  {
    id: 76,
    question: "U jakiego pacjenta z ciężką bradykardią podanie Atropiny jest przeciwwskazane i nieskuteczne?",
    options: ["A. U pacjenta po zatruciu fosforoorganikami", "B. U pacjenta z zawałem ściany dolnej", "C. U pacjenta po przeszczepie serca", "D. U pacjenta z jaskrą z zamkniętym kątem"],
    correct: 2
  },
  {
    id: 77,
    question: "Bezwzględnym przeciwwskazaniem do podania glukagonu (w przypadku hipoglikemii) jest:",
    options: ["A. Guz chromochłonny nadnerczy", "B. Cukrzyca typu 1", "C. Niewydolność nerek", "D. Padaczka"],
    correct: 0
  },
  {
    id: 78,
    question: "Nitrogliceryny (Nitromintu) m.in. w ostrym zespole wieńcowym NIE podasz pacjentowi, u którego ciśnienie skurczowe wynosi poniżej:",
    options: ["A. 110 mmHg", "B. 100 mmHg", "C. 90 mmHg", "D. 80 mmHg"],
    correct: 2
  },
  {
    id: 79,
    question: "Jaką dawkę adrenaliny (i.m.) podasz we wstrząsie anafilaktycznym u 8-letniego dziecka (przedział 6-12 r.ż.)?",
    options: ["A. 100 µg", "B. 150 µg", "C. 300 µg", "D. 500 µg"],
    correct: 2
  },
  {
    id: 80,
    question: "Przeciwwskazaniem do podania metamizolu (Pyralginy), ze względu na ryzyko powikłań hemodynamicznych, jest m.in.:",
    options: ["A. Hipotensja", "B. Nadciśnienie tętnicze", "C. Gorączka pow. 39°C", "D. Kolka nerkowa"],
    correct: 0
  },
  {
    id: 81,
    question: "Kaptoprylu (Captopril) stosowanego w nadciśnieniu tętniczym nie należy podawać pacjentom z:",
    options: ["A. Ostrym Zespołem Wieńcowym (OZW)", "B. Obustronnym zwężeniem tętnic nerkowych", "C. Tachykardią zatokową", "D. Astmą oskrzelową"],
    correct: 1
  },
  {
    id: 82,
    question: "Co jest przeciwwskazaniem do podania Amiodaronu u pacjenta (wydolnego hemodynamicznie) z zaburzeniami rytmu serca?",
    options: ["A. Zaburzenia czynności tarczycy", "B. Cukrzyca", "C. Przewlekła niewydolność nerek", "D. Przewlekła Obturacyjna Choroba Płuc (POChP)"],
    correct: 0
  },
  {
    id: 83,
    question: "Dawka drotaweryny (No-Spy) podawana dożylnie (i.v.) u dziecka wynosi:",
    options: ["A. 10 mg", "B. 20 mg", "C. 40 mg", "D. Dzieciom nie podaje się drotaweryny i.v"],
    correct: 3
  },
  {
    id: 84,
    question: "Urapidil (Ebrantil) stosowany w nagłym, znacznym nadciśnieniu tętniczym nie jest zalecany do stosowania u pacjentów poniżej:",
    options: ["A. 12 roku życia", "B. 15 roku życia", "C. 16 roku życia", "D. 18 roku życia"],
    correct: 3
  },
  {
    id: 85,
    question: "Klemastyny (Clemastin) bezwzględnie nie należy podawać dzieciom poniżej:",
    options: ["A. 1 roku życia", "B. 3 roku życia", "C. 6 roku życia", "D. 12 roku życia"],
    correct: 1
  },
  {
    id: 86,
    question: "Jaką dawkę paracetamolu podasz dożylnie (i.v.) dorosłemu pacjentowi z prawidłową czynnością nerek i wątroby w leczeniu przeciwbólowym?",
    options: ["A. 0.5 g", "B. 1 g", "C. 1.5 g", "D. 2 g"],
    correct: 1
  },
  {
    id: 87,
    question: "W jakim rozpuszczalniku, należy podać Amiodaron w dawce 300 mg i.v. podczas NZK?",
    options: ["A. W 10 ml 0.9% NaCl", "B. W 5% Glukozie", "C. W Płynie Wieloelektrolitowym (PWE)", "D. W Płynie Ringera"],
    correct: 1
  },
  {
    id: 88,
    question: "Przeciwwskazaniem do zastosowania Płynu Wieloelektrolitowego (PWE) jest m.in.:",
    options: ["A. Hipowolemia i odwodnienie", "B. Hiponatremią i hipokaliemia", "C. Hiperkaliemia i hiperkalcemia", "D. Biegunka i wymioty"],
    correct: 2
  },
  {
    id: 89,
    question: "Dawka adrenaliny w napadzie astmy oskrzelowej (obturacja dróg oddechowych) u osoby dorosłej wynosi:",
    options: ["A. 1 mg i.v.", "B. 500 µg i.m.", "C. 300 µg i.m. lub s.c.", "D. 150 µg i.m."],
    correct: 2
  },
  {
    id: 90,
    question: "U pacjenta stwierdzasz Blok AV 2 stopnia typu 1, HR: 30/min, 3mg Atropiny nie zadziałały, co robisz dalej?:",
    options: ["A. Stymulacja przezskórna", "B. Podaję 3mg Atropiny", "C. Podaję Adrenalinę w pompie 2-10 mcg/min", "D. Podaję 1 mg Adrenaliny i.v"],
    correct: 2
  },
  {
    id: 91,
    question: "Jaką dawkę glukagonu podasz domięśniowo (i.m.) lub podskórnie (s.c.) dziecku ważącemu poniżej 25 kg w przypadku hipoglikemii?",
    options: ["A. 0,5 mg", "B. 1 mg", "C. 2 mg", "D. 5 mg"],
    correct: 0
  },
  {
    id: 92,
    question: "Dawka amiodaronu w opornym na defibrylację NZK u dzieci wynosi:",
    options: ["A. 1 mg/kg m.c.", "B. 3 mg/kg m.c.", "C. 5 mg/kg m.c.", "D. 10 mg/kg m.c."],
    correct: 2
  },
  {
    id: 93,
    question: "Zalecana dawka fentanylu dla dorosłego pacjenta z zachowanym, spontanicznym oddychaniem wynosi:",
    options: ["A. 10 - 20 µg i.v.", "B. 50 - 200 µg i.v.", "C. 300 - 500 µg i.v.", "D. 1 - 3 µg/kg m.c. i.v."],
    correct: 1
  },
  {
    id: 94,
    question: "Dawka lignocainy (lidokainy) stosowana u dzieci (np. w NZK w rytmach defibrylacyjnych) wynosi:",
    options: ["A. 0,5 mg/kg m.c.", "B. 0,8 - 1 mg/kg m.c.", "C. 2 - 3 mg/kg m.c.", "D. 5 mg/kg m.c."],
    correct: 1
  },
  {
    id: 95,
    question: "Dawka kwasu traneksamowego (Exacyl) w krwawieniu po urazie u dziecka (powyżej 1 r.ż.) to:",
    options: ["A. 10 mg/kg m.c.", "B. 15 mg/kg m.c.", "C. 20 mg/kg m.c.", "D. 30 mg/kg m.c."],
    correct: 2
  },
  {
    id: 96,
    question: "Dawka Mannitolu dla dorosłych wynosi:",
    options: ["A. 1.5-2 g/kg", "B. 1.5-2 mg/kg", "C. 1.5-2 mcg/kg", "D. 500 mg/kg m.c."],
    correct: 0
  },
  {
    id: 97,
    question: "Dawka midazolamu (Midanium) w celu sedacji dorosłego pacjenta wynosi:",
    options: ["A. 0,5 - 1 mg i.v.", "B. 2 - 2,5 mg i.v.", "C. 5 mg i.v.", "D. 10 mg i.m."],
    correct: 1
  },
  {
    id: 98,
    question: "Zalecana dawka uderzeniowa (bolus) PWE, 0,9% NaCl lub płynu Ringera w przypadku hipotensji to:",
    options: ["A. 5 ml/kg m.c.", "B. 10 ml/kg m.c.", "C. 20 ml/kg m.c.", "D. 30 ml/kg m.c."],
    correct: 2
  },
  {
    id: 99,
    question: "Jaką dawkę naloksonu podasz dziecku o masie ciała poniżej 20 kg?",
    options: ["A. 0,01 mg/kg m.c.", "B. 0,1 mg/kg m.c.", "C. 0,4 mg/kg m.c.", "D. 2 mg"],
    correct: 0
  },
  {
    id: 100,
    question: "Dawka siarczanu atropiny w ciężkiej bradykardii u dziecka wynosi:",
    options: ["A. 10 µg/kg m.c.", "B. 20 µg/kg m.c.", "C. 50 µg/kg m.c.", "D. 100 µg/kg m.c."],
    correct: 1
  },
  {
    id: 101,
    question: "Dawka siarczanu morfiny dla dziecka (i.v., i.o.) wynosi:",
    options: ["A. 10 - 50 µg/kg m.c.", "B. 100 - 200 µg/kg m.c.", "C. 300 - 400 µg/kg m.c.", "D. 0,5 - 1 mg/kg m.c."],
    correct: 1
  },
  {
    id: 102,
    question: "W przypadku ostrego zatrucia beta-blokerami, zalecana dawka glukagonu to:",
    options: ["A. 10 - 20 µg/kg m.c.", "B. 50 - 150 µg/kg m.c.", "C. 200 - 300 µg/kg m.c.", "D. 1 mg niezależnie od masy ciała"],
    correct: 1
  },
  {
    id: 103,
    question: "Dawka hydroksyzyny podawanej domięśniowo (i.m.) u dorosłego wynosi:",
    options: ["A. 200 mg", "B. 10 mg", "C. 50-100 mg", "D. 50-100 mcg"],
    correct: 2
  },
    {
    id: 104,
    question: "Dawka nasycająca klopidogrelu (Areplex/Plavix) podawana doustnie (p.o.) pacjentowi z Ostrym Zespołem Wieńcowym (OZW) wynosi:",
    options: ["A. 75 mg", "B. 150 mg", "C. 300 mg", "D. 600 mg"],
    correct: 3
  },
  {
    id: 105,
    question: "Poniżej jakiego wieku lek przeciwwymiotny tietyloperazyna (Torecan) jest bezwzględnie przeciwwskazany?",
    options: ["A. 15 roku życia", "B. 12 roku życia", "C. 6 roku życia", "D. 18 roku życia"],
    correct: 0
  },
  {
    id: 106,
    question: "Dawkę diazepamu (Relanium) podawanego u dzieci można obliczyć na podstawie masy ciała lub według zasady:",
    options: ["A. 0.5 mg na każdy rok życia", "B. 5 mg niezależnie od wieku", "C. 2 mg na każdy rok życia dziecka", "D. 1 mg na każdy rok życia dziecka"],
    correct: 3
  },
  {
    id: 107,
    question: "Silnym wskazaniem do podania wodorowęglanu sodu (8,4%) jest m.in.:",
    options: ["A. Zatrucie trójpierścieniowymi lekami przeciwdepresyjnymi (TCA)", "B. Zasadowica metaboliczna", "C. Ostre zatrucie opioidami", "D. Hiperwentylacja psychogenna"],
    correct: 0
  },
  {
    id: 108,
    question: "W czym i w jakiej objętości należy rozcieńczyć Ketoprofen (Ketonal) przy podaży dożylnej (i.v.) w warunkach ZRM?",
    options: ["A. Nie wymaga rozcieńczenia", "B. Dożylnie podajemy tylko w warunkach szpitalnych", "C. W 10 ml 0.9% NaCl", "D. Wyłącznie w 5% Glukozie (10 ml)"],
    correct: 1
  },
  {
    id: 109,
    question: "Co jest głównym przeciwwskazaniem do podania Papaweryny?",
    options: ["A. Kolka nerkowa", "B. Kolka żółciowa", "C. Stany spastyczne jelit", "D. Zaburzenia przewodnictwa w mięśniu sercowym"],
    correct: 3
  },
  {
    id: 110,
    question: "Wskaż bezwzględne przeciwwskazanie do podania Metoklopramidu u dorosłego pacjenta z nudnościami:",
    options: ["A. Nadciśnienie tętnicze", "B. Krwawienia z przewodu pokarmowego i niedrożność jelit", "C. Jaskra z otwartym kątem", "D. Kolka nerkowa"],
    correct: 1
  },
  {
    id: 111,
    question: "Zalecana dawka salbutamolu (Ventolinu) w nebulizacji u dzieci poniżej 2 roku życia wynosi:",
    options: ["A. 1 mg", "B. 5 mg", "C. 2.5 mg", "D. 10 mg"],
    correct: 2
  },
  {
    id: 112,
    question: "Ile wynosi jednorazowa dawka tikagreloru (Brilique) podawana doustnie przy Ostrym Zespole Wieńcowym?",
    options: ["A. 60 mg", "B. 90 mg", "C. 300 mg", "D. 180 mg"],
    correct: 3
  },
  {
    id: 113,
    question: "Ile wynosi dawka leku przeciwpłytkowego prasugrel (Efient) podawana w Ostrym Zespole Wieńcowym?",
    options: ["A. 60 mg", "B. 10 mg", "C. 75 mg", "D. 180 mg"],
    correct: 0
  },
  {
    id: 114,
    question: "Co jest przeciwwskazaniem do podania płynów koloidowych takich jak Gelofusine?",
    options: ["A. Hipowolemia bezwzględna", "B. Masywny krwotok urazowy", "C. Ciężka niewydolność serca i przewodnienie organizmu", "D. Oparzenia powierzchowne"],
    correct: 2
  },
  {
    id: 115,
    question: "Jakie jest dawkowanie fentanylu i.v. u dorosłego pacjenta, który wymaga oddechu wspomaganego?",
    options: ["A. 10 - 20 µg", "B. 300 - 3500 µg", "C. 50 - 200 µg", "D. Powyżej 5000 µg"],
    correct: 1
  },
  {
    id: 116,
    question: "Standardowa prędkość początkowa wlewu noradrenaliny (Levonoru) we wstrząsie wynosi zazwyczaj:",
    options: ["A. 0.01 - 0.05 mg/h", "B. 2 - 10 µg/min", "C. 10 - 20 mg/h", "D. 0.4 - 0.8 mg/h (lub 0.05-1.5 µg/kg/min)"],
    correct: 3
  },
  {
    id: 117,
    question: "W jakim czasie należy podać wlew z amiodaronu (300 mg w 5% Glukozie) w stabilnym częstoskurczu z szerokimi QRS u dorosłego pacjenta?",
    options: ["A. W ciągu 20 - 60 minut", "B. Jako szybki bolus w ciągu 2 sekund", "C. W ciągu 5 minut", "D. W ciągu 12 godzin"],
    correct: 0
  },
  {
    id: 118,
    question: "W przypadku zatrucia związkami fosforoorganicznymi u dzieci, dawka atropiny wynosi:",
    options: ["A. 0.01 mg/kg m.c.", "B. 0.02 mg/kg m.c.", "C. 0.05 mg/kg m.c.", "D. 0.1 mg/kg m.c."],
    correct: 2
  },
  {
    id: 119,
    question: "Energia pierwszej i kolejnych defibrylacji u dziecka w nagłym zatrzymaniu krążenia (NZK) wynosi:",
    options: ["A. 2 J/kg m.c.", "B. 4 J/kg m.c.", "C. 10 J/kg m.c.", "D. 150 J niezależnie od masy"],
    correct: 1
  },
  {
    id: 120,
    question: "W trakcie RKO u widocznie ciężarnej kobiety, aby uniknąć zespołu ucisku żyły głównej dolnej, kluczową modyfikacją jest:",
    options: ["A. Ręczne przesunięcie macicy na lewą stronę", "B. Uniesienie prawego boku pod kątem 45 stopni", "C. Uciskać dolną połowę mostka", "D. Zmniejszyć siłę i głębokość uciśnięć"],
    correct: 0
  },
  {
    id: 121,
    question: "Docelowa saturacja (SpO2) u pacjenta z ostrym zaostrzeniem POChP (Przewlekła Obturacyjna Choroba Płuc) wynosi zazwyczaj:",
    options: ["A. 94 - 98%", "B. 98 - 100%", "C. 88 - 92%", "D. 80 - 85%"],
    correct: 2
  },
  {
    id: 122,
    question: "Maksymalna całkowita dobowa dawka Amiodaronu we wlewie dożylnym u dorosłego pacjenta z częstoskurczem wynosi:",
    options: ["A. 300 mg", "B. 600 mg", "C. 900 mg", "D. 1200 mg"],
    correct: 2
  },
  {
    id: 123,
    question: "Pojedyncza dawka salbutamolu w nebulizacji u dziecka powyżej 2 roku życia w napadzie astmy wynosi zazwyczaj:",
    options: ["A. 1.25 mg", "B. 5 mg", "C. 2.5 mg", "D. 10 mg"],
    correct: 1
  },
  {
    id: 124,
    question: "Zgodnie z aktualnymi wytycznymi ITLS, preferowanym miejscem wykonania igłowego odbarczenia odmy prężnej u dorosłego jest:",
    options: ["A. 2. przestrzeń międzyżebrowa w linii środkowo-obojczykowej", "B. 3. przestrzeń międzyżebrowa w linii przymostkowej", "C. 5. przestrzeń międzyżebrowa w linii pachowej tylnej", "D. 4. lub 5. przestrzeń międzyżebrowa w linii pachowej przedniej/środkowej"],
    correct: 3
  },
  {
    id: 125,
    question: "Mechanizm działania adrenaliny we wstrząsie anafilaktycznym polega m.in. na:",
    options: ["A. Blokowaniu wyrzutu histaminy z komórek tucznych", "B. Pobudzeniu receptorów alfa (skurcz naczyń) i beta2 (rozkurcz oskrzeli)", "C. Wyłącznym działaniu inotropowo dodatnim na serce", "D. Bezpośrednim hamowaniu układu przywspółczulnego"],
    correct: 1
  },
  {
    id: 126,
    question: "Odtrutką z wyboru w przypadku ostrego zatrucia trójpierścieniowymi lekami przeciwdepresyjnymi (TLPD), przebiegającego z szerokimi zespołami QRS, jest:",
    options: ["A. Wodorowęglan sodu", "B. Flumazenil", "C. Siarczan magnezu", "D. Nalokson"],
    correct: 0
  },
  {
    id: 127,
    question: "Złote okno terapeutyczne (standardowe) dla dożylnego leczenia trombolitycznego w udarze niedokrwiennym mózgu wynosi od początku objawów:",
    options: ["A. 1 godzina", "B. 3 godziny", "C. 4.5 godziny", "D. 12 godzin"],
    correct: 2
  },
  {
    id: 128,
    question: "Według 'Reguły Dziewiątek', u dorosłego pacjenta oparzenie całej przedniej powierzchni tułowia (klatka piersiowa + brzuch) stanowi około:",
    options: ["A. 9% powierzchni ciała", "B. 18% powierzchni ciała", "C. 27% powierzchni ciała", "D. 36% powierzchni ciała"],
    correct: 1
  },
  {
    id: 129,
    question: "Poniżej jakiej głębokiej temperatury ciała u pacjenta w głębokiej hipotermii (w trakcie NZK) NIE NALEŻY podawać żadnych leków resuscytacyjnych?",
    options: ["A. 35°C", "B. 32°C", "C. 30°C", "D. 28°C"],
    correct: 2
  },
  {
    id: 130,
    question: "Po założeniu opaski uciskowej (stazy taktycznej np. CAT) na krwawiącą kończynę, należy obowiązkowo:",
    options: ["A. Zapisać czas jej założenia w widocznym miejscu", "B. Poluzować ją na 1 minutę co każdą godzinę", "C. Podać profilaktycznie lidokainę i.v.", "D. Opatrzyć kończynę luźnym opatrunkiem osłaniającym stazę"],
    correct: 0
  },
  {
    id: 131,
    question: "Glukagon podany domięśniowo w przypadku ciężkiej hipoglikemii może być całkowicie nieskuteczny u pacjentów:",
    options: ["A. Z cukrzycą typu 1", "B. Z nadciśnieniem tętniczym", "C. Przyjmujących na stałe leki moczopędne", "D. Z wyczerpanymi zapasami glikogenu w wątrobie (np. w upojeniu alkoholowym, wyniszczeniu)"],
    correct: 3
  },
  {
    id: 132,
    question: "U pacjenta z niepowikłanym zawałem mięśnia sercowego (OZW), który nie zgłasza duszności, tlenoterapię wdrażamy, gdy saturacja (SpO2) spadnie poniżej:",
    options: ["A. 98%", "B. 95%", "C. 90%", "D. 85%"],
    correct: 2
  },
  {
    id: 133,
    question: "Dawka amiodaronu w opornym na defibrylację migotaniu komór (VF) u dorosłego pacjenta podawana po 5. defibrylacji wynosi:",
    options: ["A. 150 mg", "B. 300 mg", "C. 450 mg", "D. 1 mg/kg m.c."],
    correct: 0
  },

];  