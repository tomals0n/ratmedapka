// pokaz/ukryj sekcje
  
const sections = {
  home: document.getElementById('home'),
  meds: document.getElementById('meds'),
  medDetail: document.getElementById('medDetail'),
  protocols: document.getElementById('protocols'),
  protocolDetail: document.getElementById('protocolDetail'),
  symptoms: document.getElementById('symptoms'),
  symptomDetail: document.getElementById('symptomDetail'),
  calculators: document.getElementById('calculators'),
  ALS: document.getElementById('ALS'),  
  ALSdetail: document.getElementById('ALSdetail'),
  calcGCS: document.getElementById('calcGCS'),
  calcPeds: document.getElementById('calcPeds'),
  calcMAP: document.getElementById('calcMAP'),
  quizSetup: document.getElementById('quizSetup'),
  quizPlay: document.getElementById('quizPlay'),
  quizResult: document.getElementById('quizResult')
};    

const els = {
  goMeds: document.getElementById('goMeds'),
  goProtocols: document.getElementById('goProtocols'),
  goSymptoms: document.getElementById('goSymptoms'),
  goCalculators: document.getElementById('goCalculators'),
  goALS: document.getElementById('goALS'),
  goQuiz: document.getElementById('goQuiz'),
  backFromMeds: document.getElementById('backFromMeds'),
  medSearch: document.getElementById('medSearch'),
  medsGrid: document.getElementById('medsGrid'),
  backMedDetail: document.getElementById('backMedDetail'),
  medDetailTitle: document.getElementById('medDetailTitle'),
  medDetailContent: document.getElementById('medDetailContent'),
  backFromProtocols: document.getElementById('backFromProtocols'),
  protocolsGrid: document.getElementById('protocolsGrid'),
  backProtocolDetail: document.getElementById('backProtocolDetail'),
  protocolDetailTitle: document.getElementById('protocolDetailTitle'),
  protocolDetailContent: document.getElementById('protocolDetailContent'),
  backFromSymptoms: document.getElementById('backFromSymptoms'),
  symptomsGrid: document.getElementById('symptomsGrid'),
  backSymptomDetail: document.getElementById('backSymptomDetail'),
  symptomDetailTitle: document.getElementById('symptomDetailTitle'),
  symptomDetailContent: document.getElementById('symptomDetailContent'),
  backFromCalculators: document.getElementById('backFromCalculators'),
  calculatorsGrid: document.getElementById('calculatorsGrid'),
  backCalcGCS: document.getElementById('backCalcGCS'),
  gcsBox: document.getElementById('gcsBox'),
  backCalcPeds: document.getElementById('backCalcPeds'),
  pedsBox: document.getElementById('pedsBox'),
  backCalcMAP: document.getElementById('backCalcMAP'),
  mapBox: document.getElementById('mapBox'),
  backFromALS: document.getElementById('backFromALS'),
  ALSGrid: document.getElementById('ALSGrid'),
  backFromALSDetail: document.getElementById('backFromALSDetail'),
  ALSdetailTitle: document.getElementById('ALSdetailTitle'),
  ALSdetailContent: document.getElementById('ALSdetailContent'),
  backFromQuizSetup: document.getElementById('backFromQuizSetup'),
  quizCount: document.getElementById('quizCount'),
  startQuizBtn: document.getElementById('startQuizBtn'),
  quizProgress: document.getElementById('quizProgress'),
  quizProgressBar: document.getElementById('quizProgressBar'),
  quizQuestionText: document.getElementById('quizQuestionText'),
  quizOptions: document.getElementById('quizOptions'),
  quizResultEmoji: document.getElementById('quizResultEmoji'),
  quizScoreText: document.getElementById('quizScoreText'),
  quizPercentText: document.getElementById('quizPercentText'),
  restartQuizBtn: document.getElementById('restartQuizBtn'),
  backFromQuizResult: document.getElementById('backFromQuizResult'),
  quizTimer: document.getElementById('quizTimer')
};

// Data-driven rendering: no normalization — rely on dosesAdults/dosesChildren in data.js

function show(name) {
  Object.values(sections).forEach(s => s.classList.add('hidden'));
  sections[name].classList.remove('hidden');
}

// NAWIGACJA "HOME"
els.goMeds.addEventListener('click', () => { show('meds'); renderMeds(); });
els.goProtocols.addEventListener('click', () => { show('protocols'); renderProtocols(); });
els.goSymptoms.addEventListener('click', () => { show('symptoms'); renderSymptoms(); });
els.goCalculators.addEventListener('click', () => { show('calculators'); renderCalculators(); });
els.goALS.addEventListener('click', () => { show('ALS'); renderALS(); }); 
els.goQuiz.addEventListener('click', () => { show('quizSetup'); }); 

// WIDOK LEKÓW  
let currentMedId = null;
function renderMeds() {
  els.medsGrid.innerHTML = '';
  const q = (els.medSearch.value || '').trim().toLowerCase();
  const list = q ? medications.filter(m => m.name.toLowerCase().includes(q)) : medications;
  list.forEach(m => {
    const card = document.createElement('div');
    card.className = 'rounded-xl p-4 text-center glass hover:shadow-lg transition';
    card.innerHTML = `
      <span class="tile-emoji">💊</span>
      <div class="font-semibold">${m.name}</div>
      ${m.shortDescription ? `<div class="text-sm text-white/70 mt-1">${m.shortDescription}</div>` : ''}
      ${m.vialSize ? `<div class="mt-2 text-xs text-white/80 border border-[#2a2e35] rounded-md px-2 py-1 inline-block">${m.vialSize}</div>` : ''}
      <div class="mt-3">
        <button class="px-3 py-2 bg-[#14171b] border border-[#2a2e35] rounded-md text-sm">Wejdź</button>
      </div>
    `;
    card.querySelector('button').addEventListener('click', () => {
      currentMedId = m.id;
      renderMedDetail();
      show('medDetail');
    });
    els.medsGrid.appendChild(card);
  });
}
els.medSearch.addEventListener('input', renderMeds);
els.backFromMeds.addEventListener('click', () => show('home'));

function renderMedDetail() {
  const m = medications.find(x => x.id === currentMedId);
  els.medDetailTitle.textContent = m ? m.name : 'Brak danych';
  els.medDetailContent.innerHTML = '';
  function addSection(title, text) {
    if (!text) return;
    const d = document.createElement('div');
    d.className = 'mb-3';
    d.innerHTML = `<div class="font-semibold">${title}</div><div class="text-white/80 mt-1">${text}</div>`;
    els.medDetailContent.appendChild(d);
  }
  function addDosesList(med) {
    const container = document.createElement('div');
    container.className = 'mb-3';
    const title = document.createElement('div');
    title.className = 'font-semibold';
    title.textContent = 'Dawki';
    container.appendChild(title);
    if (Array.isArray(med.dosesAdults) && med.dosesAdults.length) {
      const adultsHeader = document.createElement('div');
      adultsHeader.className = 'text-emerald-400 font-semibold mt-2';
      adultsHeader.textContent = 'Dorośli:';
      container.appendChild(adultsHeader);
      const ulA = document.createElement('ul');
      ulA.className = 'list-disc pl-5 marker:text-emerald-400';
      med.dosesAdults.forEach(it => {
        const li = document.createElement('li');
        li.innerHTML = it.label
          ? `<span class="font-semibold">${it.label}:</span> ${it.text}`
          : `${it.text}`;
        ulA.appendChild(li);
      });
      container.appendChild(ulA);
    }
    if (Array.isArray(med.dosesChildren) && med.dosesChildren.length) {
      const kidsHeader = document.createElement('div');
      kidsHeader.className = 'text-red-400 font-semibold mt-3';
      kidsHeader.textContent = 'Dzieci:';
      container.appendChild(kidsHeader);
      const ulK = document.createElement('ul');
      ulK.className = 'list-disc pl-5 marker:text-red-400';
      med.dosesChildren.forEach(it => {
        const li = document.createElement('li');
        li.innerHTML = it.label
          ? `<span class="font-semibold">${it.label}:</span> ${it.text}`
          : `${it.text}`;
        ulK.appendChild(li);
      });
      container.appendChild(ulK);
    }
    if ((!med.dosesAdults || !med.dosesAdults.length) && med.doses) {
      const adultsHeader = document.createElement('div');
      adultsHeader.className = 'text-emerald-400 font-semibold mt-2';
      adultsHeader.textContent = 'Dorośli:';
      container.appendChild(adultsHeader);
      const ulA = document.createElement('ul');
      ulA.className = 'list-disc pl-5 marker:text-emerald-400';
      const li = document.createElement('li');
      li.textContent = String(med.doses).trim();
      ulA.appendChild(li);
      container.appendChild(ulA);
    }
    els.medDetailContent.appendChild(container);
  }
  function addBulleted(title, text, color) {
    if (!text) return;
    const items = toList(text);
    if (!items.length) return;
    const box = document.createElement('div');
    box.className = 'mb-3';
    const header = document.createElement('div');
    header.className = color === 'red' ? 'text-red-400 font-semibold' : 'text-emerald-400 font-semibold';
    header.textContent = title;
    box.appendChild(header);
    const ul = document.createElement('ul');
    ul.className = `list-disc pl-5 ${color === 'red' ? 'marker:text-red-400' : 'marker:text-emerald-400'}`;
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    box.appendChild(ul);
    els.medDetailContent.appendChild(box);
  }
  function addSingleBullet(title, text, color) {
    if (!text) return;
    const box = document.createElement('div');
    box.className = 'mb-3';
    const header = document.createElement('div');
    header.className = color === 'red' ? 'text-red-400 font-semibold' : 'text-emerald-400 font-semibold';
    header.textContent = title;
    box.appendChild(header);
    const ul = document.createElement('ul');
    ul.className = `list-disc pl-5 ${color === 'red' ? 'marker:text-red-400' : 'marker:text-emerald-400'}`;
    const li = document.createElement('li');
    li.textContent = String(text).trim();
    ul.appendChild(li);
    box.appendChild(ul);
    els.medDetailContent.appendChild(box);
  }
  function toList(text) {
    const baseSplit = String(text)
      .split(/(?:\n|;|•|·|\u2022)/)
      .flatMap(s => s.split(','))
      .map(s => s.trim())
      .filter(Boolean);
    if (!baseSplit.length) return [String(text).trim()];
    return baseSplit;
  }
  function toListDoses(text) {
    const parts = String(text)
      .split(/(?:\n|;|->)/) // dawki dzielone strzałkami i średnikami
      .map(s => s.trim())
      .filter(Boolean);
    if (parts.length > 1) return parts;
    // dodatkowo dziel po konstrukcjach typu "I dawka:", "II dawka:", "NZK:", "Anafilaksja:"
    const byLabels = String(text)
      .split(/(?=(?:I{1,3}\s*dawka|NZK|Anafilaksja|Bradykardia|Astma|Krup|Wstrząs|AF|VF|VT|pVT)\s*:)/i)
      .map(s => s.trim())
      .filter(Boolean);
    return byLabels.length > 1 ? byLabels : [String(text).trim()];
  }
  function parseDoses(text) {
    const s = String(text);
    const adultsMatch = s.match(/Dorośli[^:]*:\s*([\s\S]*?)(?:Dzieci[^:]*:|$)/i);
    const childrenMatch = s.match(/Dzieci[^:]*:\s*([\s\S]*?)(?:Dorośli[^:]*:|$)/i);
    const adultsSeg = adultsMatch ? adultsMatch[1].trim() : null;
    const childrenSeg = childrenMatch ? childrenMatch[1].trim() : null;
    function bullets(seg) {
      if (!seg) return [];
      let parts = seg.split(/(?:\n|;|->)/).map(t => t.trim()).filter(Boolean);
      parts = parts.flatMap(p => p.split(/(?=(?:I{1,3}\s*dawka|NZK|Anafilaksja|Bradykardia|Astma|Krup|Wstrząs|AF|VF|VT|pVT)\s*:)/i)).map(t => t.trim()).filter(Boolean);
      return parts.map(part => {
        const m = part.match(/^((?:I{1,3}\s*dawka|NZK|Anafilaksja|Bradykardia|Astma|Krup|Wstrząs|AF|VF|VT|pVT)\s*):\s*(.*)$/i);
        if (m) return { label: m[1].trim(), text: m[2].trim() };
        return { label: null, text: part };
      });
    }
    return { adults: bullets(adultsSeg), children: bullets(childrenSeg) };
  }
  function extractSegment(text, headingRegex) {
    const m = String(text).match(new RegExp(`${headingRegex.source}\\s*:\\s*([\\s\\S]*?)(?:Dzieci|DOROŚLI|$)`, 'i'));
    if (m && m[1]) return m[1];
    return null;
  }
  if (m) {
    addDosesList(m);
    addBulleted('Wskazania', m.indications, 'green');
    addBulleted('Przeciwwskazania', m.contraindications, 'red');
    addSingleBullet('Jak podawać', m.administration, 'green');
  }
}
els.backMedDetail.addEventListener('click', () => { show('meds'); });

// WIDOK "AKRONIMY"
let currentProtocolId = null;
function renderProtocols() {
  els.protocolsGrid.innerHTML = '';
  protocols.forEach(p => {
    const card = document.createElement('button');
    card.className = 'rounded-xl p-5 text-center glass hover:shadow-lg transition';
    card.innerHTML = `
      <span class="tile-emoji">📜</span>
      <div class="font-semibold">${p.title}</div>
      ${p.subtitle ? `<div class="text-sm text-white/70 mt-1">${p.subtitle}</div>` : ''}
    `;
    card.addEventListener('click', () => {
      currentProtocolId = p.id;
      renderProtocolDetail();
      show('protocolDetail');
    });
    els.protocolsGrid.appendChild(card);
  });
}
els.backFromProtocols.addEventListener('click', () => show('home'));

function renderProtocolDetail() {
  const item = protocols.find(p => p.id === currentProtocolId);
  els.protocolDetailTitle.textContent = item ? item.title : 'Brak danych';
  els.protocolDetailContent.innerHTML = '';
  if (item && Array.isArray(item.sections)) {
    item.sections.forEach(sec => {
      const box = document.createElement('div');
      box.className = 'mb-4';
      const header = document.createElement('div');
      header.className = 'font-semibold';
      header.innerHTML = `<span class="text-emerald-400 font-extrabold text-xl">${sec.key}</span>: ${sec.title}`;
      box.appendChild(header);
      const ul = document.createElement('ul');
      ul.className = 'list-disc pl-5 marker:text-emerald-400';
      (sec.bullets || []).forEach(b => {
        const li = document.createElement('li');
        li.textContent = b;
        ul.appendChild(li);
      });
      box.appendChild(ul);
      els.protocolDetailContent.appendChild(box);
    });
  } else {
    els.protocolDetailContent.textContent = item ? (item.content || '') : '';
  }
}
els.backProtocolDetail.addEventListener('click', () => { show('protocols'); });

// Icon mapping helper (protocol iconName -> FontAwesome class)
function faFromIconName(name) {
  const map = {
    bolt: 'fa-solid fa-bolt',
    'clipboard-list': 'fa-solid fa-clipboard-list',
    pill: 'fa-solid fa-pills',
    alert: 'fa-solid fa-exclamation-circle',
    stethoscope: 'fa-solid fa-stethoscope'
  };
  return map[name] || 'fa-solid fa-clipboard-list';
}

// WIDOK "SYMPTOMY"
let currentSymptomId = null;
function renderSymptoms() {
  els.symptomsGrid.innerHTML = '';
  (symptoms || []).forEach(s => {
    const card = document.createElement('button');
    card.className = 'rounded-xl p-5 text-center glass hover:shadow-lg transition';
    card.innerHTML = `
      <span class="tile-emoji">❗</span>
      <div class="font-semibold">${s.title}</div>
    `;
    card.addEventListener('click', () => {
      currentSymptomId = s.id;
      renderSymptomDetail();
      show('symptomDetail');
    });
    els.symptomsGrid.appendChild(card);
  });
}
els.backFromSymptoms.addEventListener('click', () => show('home'));

function renderSymptomDetail() {
  const item = (symptoms || []).find(x => x.id === currentSymptomId);
  els.symptomDetailTitle.textContent = item ? item.title : 'Brak danych';
  els.symptomDetailContent.innerHTML = '';
  if (item && Array.isArray(item.sections)) {
    item.sections.forEach(sec => {
      const box = document.createElement('div');
      box.className = 'mb-4';
      const header = document.createElement('div');
      header.className = 'text-emerald-400 font-semibold';
      header.textContent = sec.title;
      box.appendChild(header);
      const ul = document.createElement('ul');
      ul.className = 'list-disc pl-5 marker:text-emerald-400';
      (sec.items || []).forEach(it => {
        const li = document.createElement('li');
        if (Array.isArray(it.children) && it.children.length) {
          li.innerHTML = `<span class="font-semibold">${it.label}:</span>`;
          const ul2 = document.createElement('ul');
          ul2.className = 'list-disc pl-5 marker:text-emerald-400';
          it.children.forEach(txt => {
            const li2 = document.createElement('li');
            li2.innerHTML = txt;
            ul2.appendChild(li2);
          });
          li.appendChild(ul2);
        } else {
          li.textContent = it.label;
        }
        ul.appendChild(li);
      });
      box.appendChild(ul);
      els.symptomDetailContent.appendChild(box);
    });
    if (item.note) {
      const note = document.createElement('div');
      note.className = 'text-red-400 font-semibold mt-3';
      note.textContent = item.note;
      els.symptomDetailContent.appendChild(note);
    }
  } else if (item && Array.isArray(item.bullets)) {
    const ul = document.createElement('ul');
    ul.className = 'list-disc pl-5 marker:text-emerald-400';
    item.bullets.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      ul.appendChild(li);
    });
    els.symptomDetailContent.appendChild(ul);
  }
}
els.backSymptomDetail.addEventListener('click', () => { show('symptoms'); });

// WIDOK "ALS"
let currentALSId = null;
function renderALS() {
  els.ALSGrid.innerHTML = '';
  ALSData.forEach(a => {  
    const card = document.createElement('button');
    card.className = 'rounded-xl p-5 text-center glass hover:shadow-lg transition';
    card.innerHTML = `
      <span class="tile-emoji">${a.emoji || '🚑'}</span>
      <div class="font-semibold">${a.title}</div>
      ${a.subtitle ? `<div class="text-sm text-white/70 mt-1">${a.subtitle}</div>` : ''}
    `;
    card.addEventListener('click', () => {
      currentALSId = a.id;
      renderALSDetail();
      show('ALSdetail');
    });
    els.ALSGrid.appendChild(card);  
  });
}
els.backFromALS.addEventListener('click', () => show('home'));

function renderALSDetail() {
  const item = ALSData.find(x => x.id === currentALSId);
  els.ALSdetailTitle.textContent = item ? item.title : 'Brak danych';
  els.ALSdetailContent.innerHTML = '';
  if (item && Array.isArray(item.sections)) {
    item.sections.forEach(sec => {
      const box = document.createElement('div');
      box.className = 'mb-4';
      const header = document.createElement('div');
      header.className = 'text-emerald-400 font-semibold mb-1';
      header.textContent = sec.title;
      box.appendChild(header);
      const ul = document.createElement('ul');
      ul.className = 'list-disc pl-5 marker:text-emerald-400 text-white/90';
      (sec.bullets || []).forEach(b => {
        const li = document.createElement('li');
        li.textContent = b;
        ul.appendChild(li);
      });
      box.appendChild(ul);
      els.ALSdetailContent.appendChild(box);
    });
  } else if (item && item.content) {
    const box = document.createElement('div');
    box.className = 'mb-4';
    box.innerHTML = item.content;
    els.ALSdetailContent.appendChild(box);
  }
}
els.backFromALSDetail.addEventListener('click', () => { show('ALS'); });

// WIDOK "KALKULATORY"
function renderCalculators() {
  els.calculatorsGrid.innerHTML = '';
  const data = [
    { id: 'gcs', title: 'GCS', subtitle: 'Glasgow Coma Scale', emoji: '🧠' },
    { id: 'peds', title: 'Leki dla dzieci', subtitle: 'Przeliczenia dawek leków na kg/mc.', emoji: '👶' },
    { id: 'map', title: 'MAP', subtitle: 'Średnie ciśnienie tętnicze', emoji: '🩺' }
  ];
  data.forEach(c => {
    const card = document.createElement('button');
    card.className = 'rounded-xl p-5 text-center glass hover:shadow-lg transition';
    card.innerHTML = `
      <span class="tile-emoji">${c.emoji}</span>
      <div class="font-semibold">${c.title}</div>
      <div class="text-sm text-white/70 mt-1">${c.subtitle}</div>
    `;
    card.addEventListener('click', () => {
      if (c.id === 'gcs') { renderGCS(); show('calcGCS'); }
      else if (c.id === 'peds') { renderPeds(); show('calcPeds'); }
      else if (c.id === 'map') { renderMAP(); show('calcMAP'); }
    });
    els.calculatorsGrid.appendChild(card);
  });
}
els.backFromCalculators.addEventListener('click', () => show('home'));

let gcsMode = 'adult';
function renderGCS() {
  els.gcsBox.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="flex items-center justify-between mb-3">
      <div id="gcsHeaderTitle" class="text-xl font-semibold">Glasgow Coma Scale (GCS)</div>
      <div class="inline-flex rounded-md border border-[#2a2e35] overflow-hidden">
        <button id="gcsAdultBtn" class="px-3 py-2 text-sm ${gcsMode==='adult'?'bg-[#14171b]':'bg-transparent'}">Dorośli</button>
        <button id="gcsChildBtn" class="px-3 py-2 text-sm ${gcsMode==='peds'?'bg-[#14171b]':'bg-transparent'} border-l border-[#2a2e35]">Dzieci</button>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div class="space-y-2">
        <div class="font-semibold">Otwieranie oczu (E)</div>
        <select id="gcsE" class="w-full bg-[#111317] border border-[#2a2e35] rounded-md px-3 py-2 text-sm">
          
        </select>
      </div>
      <div class="space-y-2">
        <div class="font-semibold">Odpowiedź słowna (V)</div>
        <select id="gcsV" class="w-full bg-[#111317] border border-[#2a2e35] rounded-md px-3 py-2 text-sm">
          
        </select>
      </div>
      <div class="space-y-2">
        <div class="font-semibold">Reakcja ruchowa (M)</div>
        <select id="gcsM" class="w-full bg-[#111317] border border-[#2a2e35] rounded-md px-3 py-2 text-sm">
          
        </select>
      </div>
    </div>
    <div id="gcsResult" class="mt-4 rounded-md border border-[#2a2e35] bg-[#0f1215] p-3 text-center"></div>
  `;
  els.gcsBox.appendChild(wrapper);
  function setOptions() {
    const eSel = document.getElementById('gcsE');
    const vSel = document.getElementById('gcsV');
    const mSel = document.getElementById('gcsM');
    const optsE = [
      { v: 4, t: '4 – spontaniczne' },
      { v: 3, t: '3 – na głos' },
      { v: 2, t: '2 – na ból' },
      { v: 1, t: '1 – brak' }
    ];
    const optsVAdult = [
      { v: 5, t: '5 – zorientowany' },
      { v: 4, t: '4 – splątany' },
      { v: 3, t: '3 – nieadekwatny' },
      { v: 2, t: '2 – niezrozumiały' },
      { v: 1, t: '1 – brak' }
    ];
    const optsVPeds = [
      { v: 5, t: '5 – gaworzy/śmieje się, adekwatnie reaguje' },
      { v: 4, t: '4 – płacze, daje się uspokoić' },
      { v: 3, t: '3 – płacz nieutulony' },
      { v: 2, t: '2 – jęki na ból' },
      { v: 1, t: '1 – brak' }
    ];
    const optsM = [
      { v: 6, t: '6 – wykonuje polecenia' },
      { v: 5, t: '5 – lokalizuje ból' },
      { v: 4, t: '4 – ucieka przed bólem' },
      { v: 3, t: '3 – zgięciowa na ból' },
      { v: 2, t: '2 – wyprostna na ból' },
      { v: 1, t: '1 – brak' }
    ];
    function fill(sel, arr) {
      if (!sel) return;
      sel.innerHTML = arr.map(o => `<option value="${o.v}">${o.t}</option>`).join('');
    }
    fill(eSel, optsE);
    fill(vSel, gcsMode === 'adult' ? optsVAdult : optsVPeds);
    fill(mSel, optsM);
    const header = document.getElementById('gcsHeaderTitle');
    if (header) header.textContent = gcsMode === 'adult' ? 'Glasgow Coma Scale (GCS)' : 'Pediatryczna Skala Glasgow (PGCS)';
  }
  function update() {
    const e = Number((document.getElementById('gcsE') || {}).value || 4);
    const v = Number((document.getElementById('gcsV') || {}).value || 5);
    const m = Number((document.getElementById('gcsM') || {}).value || 6);
    const total = e + v + m;
    let interp = '';
    if (total >= 13) interp = 'Łagodne';
    else if (total >= 9) interp = 'Umiarkowane';
    else interp = 'Ciężkie';
    const res = document.getElementById('gcsResult');
    if (res) res.innerHTML = `<div class="font-semibold text-xl">${total} / 15</div><div class="text-white/70 mt-1">Interpretacja: ${interp}</div>`;
  }
  setOptions();
  ['gcsE','gcsV','gcsM'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', update);
  });
  const btnA = document.getElementById('gcsAdultBtn');
  const btnC = document.getElementById('gcsChildBtn');
  if (btnA) btnA.addEventListener('click', () => { gcsMode = 'adult'; renderGCS(); });
  if (btnC) btnC.addEventListener('click', () => { gcsMode = 'peds'; renderGCS(); });
  update();
}
els.backCalcGCS.addEventListener('click', () => show('calculators'));

function renderPeds() {
  els.pedsBox.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div class="space-y-2">
        <div class="font-semibold">Masa ciała (kg)</div>
        <input id="pedsWeight" type="number" step="0.1" class="w-full bg-[#111317] border border-[#2a2e35] rounded-md px-3 py-2 text-sm" />
      </div>
      <div class="space-y-2">
        <div class="font-semibold">Dawka na kg</div>
        <input id="pedsPerKg" type="number" step="0.01" class="w-full bg-[#111317] border border-[#2a2e35] rounded-md px-3 py-2 text-sm" placeholder="np. 0.1" />
      </div>
      <div class="space-y-2">
        <div class="font-semibold">Jednostka</div>
        <select id="pedsUnit" class="w-full bg-[#111317] border border-[#2a2e35] rounded-md px-3 py-2 text-sm">
          <option value="mg">mg</option>
          <option value="µg">µg</option>
        </select>
      </div>
    </div>
    <div id="pedsResult" class="mt-4 rounded-md border border-[#2a2e35] bg-[#0f1215] p-3 text-center"></div>
  `;
  els.pedsBox.appendChild(wrapper);
  function update() {
    const w = Number((document.getElementById('pedsWeight') || {}).value || 0);
    const dpk = Number((document.getElementById('pedsPerKg') || {}).value || 0);
    const unit = String((document.getElementById('pedsUnit') || {}).value || 'mg');
    const dose = w * dpk;
    const res = document.getElementById('pedsResult');
    if (res) res.innerHTML = `<div class="font-semibold text-xl">${dose ? dose.toFixed(2) : '0.00'} ${unit}</div><div class="text-white/70 mt-1">Dawka całkowita</div>`;
  }
  ['pedsWeight','pedsPerKg','pedsUnit'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', update);
  });
  update();
}
els.backCalcPeds.addEventListener('click', () => show('calculators'));

function renderMAP() {
  els.mapBox.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="space-y-2">
        <div class="font-semibold">SBP (skurczowe)</div>
        <input id="sbp" type="number" step="1" class="w-full bg-[#111317] border border-[#2a2e35] rounded-md px-3 py-2 text-sm" />
      </div>
      <div class="space-y-2">
        <div class="font-semibold">DBP (rozkurczowe)</div>
        <input id="dbp" type="number" step="1" class="w-full bg-[#111317] border border-[#2a2e35] rounded-md px-3 py-2 text-sm" />
      </div>
    </div>
    <div id="mapResult" class="mt-4 rounded-md border border-[#2a2e35] bg-[#0f1215] p-3 text-center"></div>
  `;
  els.mapBox.appendChild(wrapper);
  function update() {
    const s = Number((document.getElementById('sbp') || {}).value || 0);
    const d = Number((document.getElementById('dbp') || {}).value || 0);
    const map = (s && d) ? (s + 2 * d) / 3 : 0;
    const res = document.getElementById('mapResult');
    if (res) res.innerHTML = `<div class="font-semibold text-xl">${map ? map.toFixed(1) : '0.0'} mmHg</div><div class="text-white/70 mt-1">MAP = (SBP + 2·DBP) / 3</div>`;
  }
  ['sbp','dbp'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', update);
  });
  update();
}
els.backCalcMAP.addEventListener('click', () => show('calculators'));

// WIDOK "QUIZ"
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let quizTimerInterval = null;
let quizStartTime = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  let count = parseInt(els.quizCount.value);
  if (isNaN(count) || count < 20) count = 20;
  if (count > 50) count = 50;
  
  // Losowanie pytań
  const allQuestions = [...quizQuestions];
  shuffleArray(allQuestions);
  currentQuizQuestions = allQuestions.slice(0, Math.min(count, allQuestions.length));
  
  currentQuestionIndex = 0;
  quizScore = 0;
  
  show('quizPlay');
  startTimer();
  renderQuizQuestion();
}

function startTimer() {
  quizStartTime = Date.now();
  if (quizTimerInterval) clearInterval(quizTimerInterval);
  quizTimerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
    const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const secs = (elapsed % 60).toString().padStart(2, '0');
    els.quizTimer.textContent = `${mins}:${secs}`;
  }, 1000);
}

function renderQuizQuestion() {
  const q = currentQuizQuestions[currentQuestionIndex];
  els.quizProgress.textContent = `Pytanie ${currentQuestionIndex + 1} / ${currentQuizQuestions.length}`;
  els.quizProgressBar.style.width = `${((currentQuestionIndex) / currentQuizQuestions.length) * 100}%`;
  
  els.quizQuestionText.textContent = q.question;
  els.quizOptions.innerHTML = '';
  
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'w-full p-4 text-left rounded-xl border border-[#2a2e35] bg-[#111317] hover:border-emerald-500 hover:bg-[#1a1d22] transition flex items-center group';
    btn.innerHTML = `
      <div class="w-8 h-8 rounded-full border border-[#2a2e35] flex items-center justify-center mr-4 group-hover:border-emerald-500 group-hover:text-emerald-400 transition font-mono text-sm">
        ${String.fromCharCode(65 + index)}
      </div>
      <div class="flex-1">${opt.replace(/^[A-D]\.\s*/, '')}</div>
    `;
    btn.onclick = () => handleAnswer(index);
    els.quizOptions.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  const q = currentQuizQuestions[currentQuestionIndex];
  const buttons = els.quizOptions.querySelectorAll('button');
  
  // Wyłączenie klikania
  buttons.forEach(btn => btn.disabled = true);
  
  if (selectedIndex === q.correct) {
    quizScore++;
    buttons[selectedIndex].classList.add('border-emerald-500', 'bg-emerald-500/10');
    buttons[selectedIndex].querySelector('div').classList.add('bg-emerald-500', 'border-emerald-500', 'text-white');
  } else {
    buttons[selectedIndex].classList.add('border-red-500', 'bg-red-500/10');
    buttons[selectedIndex].querySelector('div').classList.add('bg-red-500', 'border-red-500', 'text-white');
    // Pokazanie poprawnej
    buttons[q.correct].classList.add('border-emerald-500', 'bg-emerald-500/5');
  }
  
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizQuestions.length) {
      renderQuizQuestion();
    } else {
      finishQuiz();
    }
  }, 600);
}

function finishQuiz() {
  clearInterval(quizTimerInterval);
  const percent = Math.round((quizScore / currentQuizQuestions.length) * 100);
  els.quizScoreText.textContent = `${quizScore} / ${currentQuizQuestions.length}`;
  els.quizPercentText.textContent = `${percent}%`;
  
  let emoji = '🏆';
  if (percent < 50) emoji = '📉';
  else if (percent < 75) emoji = '🥉';
  else if (percent < 90) emoji = '🥈';
  els.quizResultEmoji.textContent = emoji;
  
  show('quizResult');
}

els.startQuizBtn.addEventListener('click', startQuiz);
els.backFromQuizSetup.addEventListener('click', () => show('home'));
els.restartQuizBtn.addEventListener('click', () => show('quizSetup'));
els.backFromQuizResult.addEventListener('click', () => show('home'));

// Initial
show('home');
// Pre-render lists for immediate UX when entering
renderMeds();
renderProtocols();
renderCalculators();
renderALS();
