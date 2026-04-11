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
  calcAPGAR: document.getElementById('calcAPGAR'),
  calcQSOFA: document.getElementById('calcQSOFA'),
  calcPain: document.getElementById('calcPain'),
  calcPedsIdeal: document.getElementById('calcPedsIdeal'),
  calcPumps: document.getElementById('calcPumps'),
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
  medDetailMenu: document.getElementById('medDetailMenu'),
  medSubSection: document.getElementById('medSubSection'),
  medSubSectionTitle: document.getElementById('medSubSectionTitle'),
  medSubSectionContent: document.getElementById('medSubSectionContent'),
  medSubSectionIcon: document.getElementById('medSubSectionIcon'),
  backToMedMenu: document.getElementById('backToMedMenu'),
  btnIndications: document.getElementById('btnIndications'),
  btnContraindications: document.getElementById('btnContraindications'),
  btnDosage: document.getElementById('btnDosage'),
  btnAdministration: document.getElementById('btnAdministration'),
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
  backCalcAPGAR: document.getElementById('backCalcAPGAR'),
  apgarBox: document.getElementById('apgarBox'),
  backCalcQSOFA: document.getElementById('backCalcQSOFA'),
  qsofaBox: document.getElementById('qsofaBox'),
  backCalcPain: document.getElementById('backCalcPain'),
  painBox: document.getElementById('painBox'),
  backCalcMAP: document.getElementById('backCalcMAP'),
  mapBox: document.getElementById('mapBox'),
  backFromALS: document.getElementById('backFromALS'),
  ALSGrid: document.getElementById('ALSGrid'),
  backFromALSDetail: document.getElementById('backFromALSDetail'),
  ALSdetailTitle: document.getElementById('ALSdetailTitle'),
  ALSdetailContent: document.getElementById('ALSdetailContent'),
  backCalcPedsIdeal: document.getElementById('backCalcPedsIdeal'),
  pedsIdealBox: document.getElementById('pedsIdealBox'),
  backCalcPumps: document.getElementById('backCalcPumps'),
  pumpsBox: document.getElementById('pumpsBox'),
  backFromQuizSetup: document.getElementById('backFromQuizSetup'),
  quizCount: document.getElementById('quizCount'),
  startQuizBtn: document.getElementById('startQuizBtn'),
  quizProgress: document.getElementById('quizProgress'),
  quizProgressBar: document.getElementById('quizProgressBar'),
  quizQuestionText: document.getElementById('quizQuestionText'),
  quizOptions: document.getElementById('quizOptions'),
  quizExplanation: document.getElementById('quizExplanation'),
  quizExplanationText: document.getElementById('quizExplanationText'),
  nextQuestionBtn: document.getElementById('nextQuestionBtn'),
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
els.goQuiz.addEventListener('click', () => { 
  selectedQuizCategory = null;
  quizTypeBtns.forEach(b => b.classList.remove('active', 'border-emerald-500', 'bg-emerald-500/5'));
  els.startQuizBtn.disabled = true;
  show('quizSetup'); 
}); 

// WIDOK LEKÓW  
let currentMedId = null;
function renderMeds() {
  els.medsGrid.innerHTML = '';
  const q = (els.medSearch.value || '').trim().toLowerCase();
  const list = q ? medications.filter(m => m.name.toLowerCase().includes(q)) : medications;
  list.forEach(m => {
    const card = document.createElement('div');
    card.className = 'rounded-xl p-4 text-center glass hover:shadow-lg transition group cursor-pointer';
    card.innerHTML = `
      <div class="w-12 h-12 mx-auto mb-2 bg-emerald-500/10 rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-emerald-500/20 transition-colors">
        <img src="./src/img/dawkaleku.png" alt="Lek" class="w-8 h-8 object-contain filter brightness-0 invert opacity-80">
      </div>
      <div class="font-semibold text-white group-hover:text-emerald-400 transition-colors">${m.name}</div>
      ${m.shortDescription ? `<div class="text-sm text-white/70 mt-1">${m.shortDescription}</div>` : ''}
      ${m.vialSize ? `<div class="mt-2 text-xs text-white/80 border border-[#2a2e35] rounded-md px-2 py-1 inline-block">${m.vialSize}</div>` : ''}
    `;
    card.addEventListener('click', () => {
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
  if (!m) return;

  els.medDetailTitle.textContent = m.name;
  
  // Reset widoku do menu głównego leku
  els.medDetailMenu.classList.remove('hidden');
  els.medSubSection.classList.add('hidden');

  // Funkcja pomocnicza do tworzenia list punktowych
  function createList(text, colorClass = 'emerald-400') {
    if (!text) return '<div class="text-white/50 italic">Brak danych</div>';
    
    // Rozbijamy tekst na punkty po przecinkach, kropkach (jeśli nie są częścią dawki), średnikach lub nowych liniach
    const items = String(text)
      .split(/(?:\n|;|•|·|\u2022)/)
      .flatMap(s => s.split(','))
      .map(s => s.trim())
      .filter(Boolean);
    
    if (items.length <= 1) return `<div class="text-white/90">${text}</div>`;
    
    return `<ul class="space-y-3">
      ${items.map(it => `
        <li class="flex items-start space-x-3">
          <div class="w-1.5 h-1.5 rounded-full bg-${colorClass} mt-2 shrink-0"></div>
          <span class="text-white/90">${it}</span>
        </li>
      `).join('')}
    </ul>`;
  }

  // Funkcja pomocnicza do rozpoznawania dróg podania i tworzenia ikon
  function createRouteIcons(adminText) {
    const routes = [
      { key: 'i.v.', label: 'dożylnie', img: 'iv.png' },
      { key: 'dożylnie', label: 'dożylnie', img: 'iv.png' },
      { key: 'i.m.', label: 'domięśniowo', img: 'im.png' },
      { key: 'domięśniowo', label: 'domięśniowo', img: 'im.png' },
      { key: 's.c.', label: 'podskórnie', img: 'sc.png' },
      { key: 'podskórnie', label: 'podskórnie', img: 'sc.png' },
      { key: 'p.o.', label: 'doustnie', img: 'po.png' },
      { key: 'doustnie', label: 'doustnie', img: 'po.png' },
      { key: 'p.r.', label: 'odbytniczo', img: 'pr.png' },
      { key: 'odbytniczo', label: 'odbytniczo', img: 'pr.png' },
      { key: 's.l.', label: 'podjęzykowo', img: 'po.png' },
      { key: 'podjęzykowo', label: 'podjęzykowo', img: 'po.png' },
      { key: 'i.o.', label: 'doszpikowo', img: 'io.png' },
      { key: 'doszpikowo', label: 'doszpikowo', img: 'io.png' },
      { key: 'nebulizacji', label: 'nebulizacja', img: 'nebu.png'},
      { key: 'nebulizacja', label: 'nebulizacja', img: 'nebu.png'}
    ];

    const foundRoutes = [];
    const lowerText = adminText.toLowerCase();
    
    // Unikalne etykiety, żeby nie powtarzać "dożylnie" jeśli w tekście jest i "i.v." i "dożylnie"
    const seenLabels = new Set();

    routes.forEach(route => {
      if (lowerText.includes(route.key) && !seenLabels.has(route.label)) {
        foundRoutes.push(route);
        seenLabels.add(route.label);
      }
    });

    if (foundRoutes.length === 0) return '';

    return `
      <div class="flex flex-wrap gap-3 mb-6">
        ${foundRoutes.map(route => `
          <div class="flex items-center space-x-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center overflow-hidden">
              <img src="./src/img/${route.img}" alt="${route.label}" class="w-6 h-6 object-contain filter brightness-0 invert opacity-80">
            </div>
            <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider">${route.label}</span>
          </div>
        `).join('')}
      </div>
      <div class="h-px w-full bg-[#2a2e35] mb-6 opacity-50"></div>
    `;
  }

  // Funkcja pomocnicza do dawkowania
  function createDosageContent(med) {
    let html = '<div class="space-y-6">';
    
    if (Array.isArray(med.dosesAdults) && med.dosesAdults.length) {
      html += `<div>
        <div class="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-3">Dorośli</div>
        <div class="space-y-2">
          ${med.dosesAdults.map(d => `
            <div class="flex items-start space-x-3">
              <span class="text-emerald-400/50 mt-1">•</span>
              <div><span class="font-bold text-emerald-400">${d.label ? d.label + ': ' : ''}</span>${d.text}</div>
            </div>
          `).join('')}
        </div>
      </div>`;
    }

    if (Array.isArray(med.dosesChildren) && med.dosesChildren.length) {
      html += `<div>
        <div class="text-red-400 font-bold uppercase text-xs tracking-widest mb-3">Dzieci</div>
        <div class="space-y-2">
          ${med.dosesChildren.map(d => `
            <div class="flex items-start space-x-3">
              <span class="text-red-400/50 mt-1">•</span>
              <div><span class="font-bold text-red-400">${d.label ? d.label + ': ' : ''}</span>${d.text}</div>
            </div>
          `).join('')}
        </div>
      </div>`;
    }

    if (!html.includes('Dorośli') && med.doses) {
      html += `<div>
        <div class="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-3">Dawkowanie ogólne</div>
        <div>${med.doses}</div>
      </div>`;
    }

    html += '</div>';
    return html;
  }

  // Obsługa kliknięć w sekcje
  const showSub = (type) => {
    els.medDetailMenu.classList.add('hidden');
    els.medSubSection.classList.remove('hidden');
    
    const iconEl = els.medSubSectionIcon.querySelector('i');
    const iconImg = els.medSubSectionIcon.querySelector('img') || document.createElement('img');
    
    // Jeśli nie było obrazka, dodaj go i usuń FontAwesome i
    if (!els.medSubSectionIcon.querySelector('img')) {
      if (iconEl) iconEl.remove();
      iconImg.className = "w-7 h-7 object-contain filter brightness-0 invert opacity-80";
      els.medSubSectionIcon.appendChild(iconImg);
    }

    els.medSubSectionIcon.className = "w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shrink-0";

    switch(type) {
      case 'indications':
        els.medSubSectionTitle.textContent = 'Wskazania';
        els.medSubSectionContent.innerHTML = createList(m.indications);
        els.medSubSectionIcon.classList.add('bg-emerald-500/20');
        iconImg.src = "./src/img/wskazania.png";
        break;
      case 'contraindications':
        els.medSubSectionTitle.textContent = 'Przeciwwskazania';
        els.medSubSectionContent.innerHTML = createList(m.contraindications, 'red-400');
        els.medSubSectionIcon.classList.add('bg-red-500/20');
        iconImg.src = "./src/img/przeciwwskazania.png";
        break;
      case 'dosage':
        els.medSubSectionTitle.textContent = 'Dawka leku';
        els.medSubSectionContent.innerHTML = createDosageContent(m);
        els.medSubSectionIcon.classList.add('bg-emerald-500/20');
        iconImg.src = "./src/img/dawkaleku.png";
        break;
      case 'administration':
        els.medSubSectionTitle.textContent = 'Sposób podania';
        const routeIconsHtml = createRouteIcons(m.administration || '');
        els.medSubSectionContent.innerHTML = `
          ${routeIconsHtml}
          <div class="text-white/90 leading-relaxed">${m.administration || 'Brak danych'}</div>
        `;
        els.medSubSectionIcon.classList.add('bg-emerald-500/20');
        iconImg.src = "./src/img/sposobpodania.png";
        break;
    }
  };

  // Event Listeners dla przycisków menu (używamy onclick lub addEventListener, tu lepiej addEventListener raz)
  els.btnIndications.onclick = () => showSub('indications');
  els.btnContraindications.onclick = () => showSub('contraindications');
  els.btnDosage.onclick = () => showSub('dosage');
  els.btnAdministration.onclick = () => showSub('administration');
  els.backToMedMenu.onclick = () => {
    els.medSubSection.classList.add('hidden');
    els.medDetailMenu.classList.remove('hidden');
  };
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
        li.innerHTML = b;
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
  
  if (item && item.isTable && item.tableData) {
    const tableContainer = document.createElement('div');
    tableContainer.className = 'overflow-x-auto rounded-xl border border-[#2a2e35] bg-[#0f1215]';
    
    let tableHtml = `<table class="w-full text-sm text-left text-white/90">
      <thead class="bg-[#14171b] text-emerald-400">
        <tr>`;
    
    item.tableData.headers.forEach(h => {
      tableHtml += `<th class="p-3 font-semibold">${h}</th>`;
    });
    
    tableHtml += `</tr></thead><tbody class="divide-y divide-[#2a2e35]">`;
    
    item.tableData.rows.forEach((row, idx) => {
      tableHtml += `<tr class="${idx % 2 === 0 ? 'bg-[#111317]/50' : ''}">`;
      row.forEach(cell => {
        tableHtml += `<td class="p-3">${cell}</td>`;
      });
      tableHtml += `</tr>`;
    });
    
    tableHtml += `</tbody></table>`;
    tableContainer.innerHTML = tableHtml;
    els.symptomDetailContent.appendChild(tableContainer);
    
    if (item.tableData.note) {
      const note = document.createElement('div');
      note.className = 'text-xs text-white/50 mt-3 italic';
      note.textContent = item.tableData.note;
      els.symptomDetailContent.appendChild(note);
    }
    return;
  }

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
          li.innerHTML = it.label;
        }
        ul.appendChild(li);
      });
      box.appendChild(ul);
      els.symptomDetailContent.appendChild(box);
    });
    if (item.note) {
      const note = document.createElement('div');
      note.className = 'text-red-400 font-semibold mt-3';
      note.innerHTML = item.note;
      els.symptomDetailContent.appendChild(note);
    }
  } else if (item && Array.isArray(item.bullets)) {
    const ul = document.createElement('ul');
    ul.className = 'list-disc pl-5 marker:text-emerald-400';
    item.bullets.forEach(b => {
      const li = document.createElement('li');
      li.innerHTML = b;
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

      if (sec.img) {
        const img = document.createElement('img');
        img.src = sec.img;
        img.className = 'w-full rounded-lg mb-2 border border-[#2a2e35] shadow-md';
        box.appendChild(img);
      }
      
      const ul = document.createElement('ul');
      ul.className = 'list-disc pl-5 marker:text-emerald-400 text-white/90';
      (sec.bullets || []).forEach(b => {
        const li = document.createElement('li');
        li.innerHTML = b;
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
    { id: 'apgar', title: 'APGAR', subtitle: 'Skala oceny noworodka', emoji: '👶' },
    { id: 'qsofa', title: 'qSOFA', subtitle: 'Szybka ocena sepsy', emoji: '🚑' },
    { id: 'pain', title: 'Ból (NRS)', subtitle: 'Kalkulator leczenia bólu', emoji: '💉' },
    { id: 'peds', title: 'Leki dla dzieci', subtitle: 'Przeliczenia dawek leków na kg/mc.', emoji: '🍼' },
    { id: 'map', title: 'MAP', subtitle: 'Średnie ciśnienie tętnicze', emoji: '🩺' },
    { id: 'peds-ideal', title: 'Należna masa ciała', subtitle: 'Wzory na masę ciała u dzieci', emoji: '⚖️' },
    { id: 'pumps', title: 'Pompy infuzyjne', subtitle: 'Dawkowanie Adrenaliny i Noradrenaliny', emoji: '💉' }
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
      console.log('Kliknięto kalkulator:', c.id);
      
      // Ukrywamy listę kalkulatorów
      show('home'); // tymczasowo, show i tak ukryje wszystko
      
      if (c.id === 'gcs') { 
        show('calcGCS'); 
        renderGCS(); 
      }
      else if (c.id === 'apgar') { 
        show('calcAPGAR'); 
        renderAPGAR(); 
      }
      else if (c.id === 'qsofa') { 
        show('calcQSOFA'); 
        renderQSOFA(); 
      }
      else if (c.id === 'pain') { 
        show('calcPain'); 
        renderPain(); 
      }
      else if (c.id === 'peds') { 
        show('calcPeds'); 
        renderPeds(); 
      }
      else if (c.id === 'map') { 
        show('calcMAP'); 
        renderMAP(); 
      }
      else if (c.id === 'peds-ideal') { 
        console.log('Pokazuję sekcję calcPedsIdeal');
        show('calcPedsIdeal'); 
        console.log('Uruchamiam renderPedsIdeal');
        renderPedsIdeal(); 
      }
      else if (c.id === 'pumps') { 
        show('calcPumps'); 
        renderPumps(); 
      }
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

function renderPedsIdeal() {
  const box = document.getElementById('pedsIdealBox');
  if (!box) {
    console.error('Błąd: Nie znaleziono elementu pedsIdealBox');
    return;
  }
  
  box.innerHTML = `
    <div class="space-y-6">
      <div class="glass p-6 rounded-2xl border border-[#2a2e35]">
        <label class="block text-sm font-medium mb-3 text-white/70">Wybierz wiek dziecka:</label>
        <div class="grid grid-cols-2 gap-3 mb-6">
          <button id="pedsAgeInfant" class="p-3 rounded-xl border border-[#2a2e35] bg-[#111317] text-xs hover:border-emerald-500 transition">Niemowlę (< 1 r.ż.)</button>
          <button id="pedsAgeChild" class="p-3 rounded-xl border border-emerald-500 bg-emerald-500/10 text-xs transition font-bold">Dziecko (1-10 lat)</button>
        </div>
        
        <div id="pedsAgeInputContainer">
          <label class="block text-sm font-medium mb-2 text-white/70">Wiek:</label>
          <div class="flex items-center space-x-3">
            <input id="pedsAgeInput" type="number" min="1" max="10" value="1" class="w-full bg-[#111317] border border-[#2a2e35] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition" />
            <span id="pedsAgeUnit" class="text-white/50 w-20">lat</span>
          </div>
        </div>
      </div>

      <div class="bg-[#0f1215] border border-[#2a2e35] rounded-2xl p-6 text-center">
        <div class="text-sm text-white/50 mb-1 uppercase tracking-wider">Należna masa ciała:</div>
        <div id="pedsIdealResult" class="text-5xl font-bold text-emerald-400">10 kg</div>
        <div id="pedsIdealFormula" class="text-xs text-white/40 mt-4 font-mono bg-black/30 py-2 px-3 rounded-lg inline-block">(2 * wiek) + 8</div>
      </div>
    </div>
  `;

  const ageInput = document.getElementById('pedsAgeInput');
  const resultBox = document.getElementById('pedsIdealResult');
  const formulaBox = document.getElementById('pedsIdealFormula');
  const ageUnit = document.getElementById('pedsAgeUnit');
  const btnInfant = document.getElementById('pedsAgeInfant');
  const btnChild = document.getElementById('pedsAgeChild');

  if (!ageInput || !resultBox) return;

  let mode = 'child'; 

  function update() {
    const age = parseFloat(ageInput.value) || 0;
    let weight = 0;
    let formula = '';

    if (mode === 'infant') {
      weight = (age + 9) / 2;
      formula = `(${age} mies. + 9) / 2`;
    } else {
      weight = (age * 2) + 8;
      formula = `(2 * ${age} lat) + 8`;
    }

    resultBox.textContent = `${weight.toFixed(1).replace('.', ',')} kg`;
    formulaBox.textContent = formula;
  }

  btnInfant.addEventListener('click', () => {
    mode = 'infant';
    ageUnit.textContent = 'miesięcy';
    ageInput.min = 1;
    ageInput.max = 11;
    ageInput.value = 6;
    btnInfant.className = 'p-3 rounded-xl border border-emerald-500 bg-emerald-500/10 text-xs transition font-bold';
    btnChild.className = 'p-3 rounded-xl border border-[#2a2e35] bg-[#111317] text-xs hover:border-emerald-500 transition';
    update();
  });

  btnChild.addEventListener('click', () => {
    mode = 'child';
    ageUnit.textContent = 'lat';
    ageInput.min = 1;
    ageInput.max = 10;
    ageInput.value = 1;
    btnChild.className = 'p-3 rounded-xl border border-emerald-500 bg-emerald-500/10 text-xs transition font-bold';
    btnInfant.className = 'p-3 rounded-xl border border-[#2a2e35] bg-[#111317] text-xs hover:border-emerald-500 transition';
    update();
  });

  ageInput.addEventListener('input', update);
  update();
}
els.backCalcPedsIdeal.addEventListener('click', () => show('calculators'));

function renderPumps() {
  els.pumpsBox.innerHTML = `
    <!-- Interaktywny Kalkulator Pomp -->
    <div class="glass p-6 rounded-2xl border border-[#2a2e35] mb-10">
      <h3 class="text-xl font-bold text-emerald-400 mb-6 flex items-center">
        <span class="mr-2">🧮</span> Kalkulator przepływu
      </h3>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <!-- Wybór leku i trybu -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-white/70">Lek i tryb:</label>
          <select id="pumpDrugSelect" class="w-full bg-[#111317] border border-[#2a2e35] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition">
            <option value="adr_shock">Adrenalina - wstrząs</option>
            <option value="adr_brady">Adrenalina - bradykardia</option>
            <option value="nor_shock">Noradrenalina - wstrząs</option>
          </select>
        </div>

        <!-- Waga pacjenta -->
        <div id="pumpWeightContainer" class="space-y-2">
          <label class="block text-sm font-medium text-white/70">Waga pacjenta [kg]:</label>
          <input id="pumpWeightInput" type="number" value="70" min="1" max="250" class="w-full bg-[#111317] border border-[#2a2e35] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition" />
        </div>

        <!-- Dawka -->
        <div class="space-y-2">
          <label id="pumpDoseLabel" class="block text-sm font-medium text-white/70">Dawka [mcg/kg/min]:</label>
          <input id="pumpDoseInput" type="number" value="0.1" step="0.01" min="0.01" max="10" class="w-full bg-[#111317] border border-[#2a2e35] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition" />
        </div>
      </div>

      <!-- Wynik -->
      <div class="bg-[#0f1215] border border-[#2a2e35] rounded-2xl p-6 text-center">
        <div class="text-sm text-white/50 mb-1">Obliczony przepływ:</div>
        <div id="pumpResultValue" class="text-4xl font-bold text-emerald-400">10,5 ml/h</div>
        <div id="pumpPreparationInfo" class="text-xs text-white/40 mt-3 font-mono">Przygotowanie: Adrenalina 1 mg / 50 ml (20 mcg/ml)</div>
      </div>
    </div>

    <!-- Tabele statyczne -->
    <div class="space-y-10">
      <div>
        <h3 class="text-lg font-semibold text-emerald-400 mb-3">Dawkowanie adrenaliny we wstrząsie</h3>
        <div class="overflow-x-auto rounded-lg border border-[#2a2e35]">
          <table class="w-full text-sm text-left text-white/90">
            <thead class="bg-[#14171b]">
              <tr>
                <th class="p-3">Waga pacjenta</th>
                <th class="p-3 bg-green-900/30">Dawka 0,05 mcg/kg/min<br><span class="font-normal text-white/70">Przepływ [ml/h]</span></th>
                <th class="p-3 bg-green-800/40">Dawka 0,1 mcg/kg/min<br><span class="font-normal text-white/70">Przepływ [ml/h]</span></th>
                <th class="p-3 bg-green-700/50">Dawka 0,5 mcg/kg/min<br><span class="font-normal text-white/70">Przepływ [ml/h]</span></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#2a2e35]">
              <tr class="bg-[#111317]/50"><td>40 kg</td><td class="bg-green-900/30">6,0 ml / h</td><td class="bg-green-800/40">12,0 ml / h</td><td class="bg-green-700/50">60 ml / h</td></tr>
              <tr><td>50 kg</td><td class="bg-green-900/30">7,5 ml / h</td><td class="bg-green-800/40">15,0 ml / h</td><td class="bg-green-700/50">75 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>60 kg</td><td class="bg-green-900/30">9,0 ml / h</td><td class="bg-green-800/40">18,0 ml / h</td><td class="bg-green-700/50">90 ml / h</td></tr>
              <tr><td>70 kg</td><td class="bg-green-900/30">10,5 ml / h</td><td class="bg-green-800/40">21,0 ml / h</td><td class="bg-green-700/50">105 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>80 kg</td><td class="bg-green-900/30">12,0 ml / h</td><td class="bg-green-800/40">24,0 ml / h</td><td class="bg-green-700/50">120 ml / h</td></tr>
              <tr><td>90 kg</td><td class="bg-green-900/30">13,5 ml / h</td><td class="bg-green-800/40">27,0 ml / h</td><td class="bg-green-700/50">135 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>100 kg</td><td class="bg-green-900/30">15,0 ml / h</td><td class="bg-green-800/40">30,0 ml / h</td><td class="bg-green-700/50">150 ml / h</td></tr>
              <tr><td>110 kg</td><td class="bg-green-900/30">16,5 ml / h</td><td class="bg-green-800/40">33,0 ml / h</td><td class="bg-green-700/50">165 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>120 kg</td><td class="bg-green-900/30">18,0 ml / h</td><td class="bg-green-800/40">36,0 ml / h</td><td class="bg-green-700/50">180 ml / h</td></tr>
            </tbody>
          </table>
        </div>
        <div class="text-xs text-white/60 mt-2 font-mono text-right">Przygotowanie: Adrenalina 1 mg / 50 ml NaCl 0,9%</div>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-sky-400 mb-3">Dawkowanie adrenaliny w bradykardii</h3>
        <div class="overflow-x-auto rounded-lg border border-[#2a2e35]">
          <table class="w-full text-sm text-left text-white/90">
            <thead class="bg-[#14171b]">
              <tr>
                <th class="p-3 w-1/2">Dawka [mcg/min]</th>
                <th class="p-3 w-1/2 bg-sky-900/40 text-center">Przepływ [ml/h]</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#2a2e35]">
              <tr class="bg-[#111317]/50"><td>2 mcg / min</td><td class="bg-sky-900/40 text-center">60,0 ml / h</td></tr>
              <tr><td>3 mcg / min</td><td class="bg-sky-900/40 text-center">90,0 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>4 mcg / min</td><td class="bg-sky-900/40 text-center">120,0 ml / h</td></tr>
              <tr><td>5 mcg / min</td><td class="bg-sky-900/40 text-center">150,0 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>6 mcg / min</td><td class="bg-sky-900/40 text-center">180,0 ml / h</td></tr>
              <tr><td>7 mcg / min</td><td class="bg-sky-900/40 text-center">210,0 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>8 mcg / min</td><td class="bg-sky-900/40 text-center">240,0 ml / h</td></tr>
              <tr><td>9 mcg / min</td><td class="bg-sky-900/40 text-center">270,0 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>10 mcg / min</td><td class="bg-sky-900/40 text-center">300,0 ml / h</td></tr>
            </tbody>
          </table>
        </div>
        <div class="text-xs text-white/60 mt-2 font-mono text-right">Przygotowanie: Adrenalina 1 mg / 500 ml NaCl 0,9%</div>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-pink-400 mb-3">Dawkowanie noradrenaliny we wstrząsie</h3>
        <div class="overflow-x-auto rounded-lg border border-[#2a2e35]">
          <table class="w-full text-sm text-left text-white/90">
            <thead class="bg-[#14171b]">
              <tr>
                <th class="p-3">Waga pacjenta</th>
                <th class="p-3 bg-pink-900/30">Dawka 0,05 mcg/kg/min<br><span class="font-normal text-white/70">Przepływ [ml/h]</span></th>
                <th class="p-3 bg-pink-800/40">Dawka 0,1 mcg/kg/min<br><span class="font-normal text-white/70">Przepływ [ml/h]</span></th>
                <th class="p-3 bg-pink-700/50">Dawka 0,5 mcg/kg/min<br><span class="font-normal text-white/70">Przepływ [ml/h]</span></th>
                <th class="p-3 bg-pink-600/60">Dawka 1,0 mcg/kg/min<br><span class="font-normal text-white/70">Przepływ [ml/h]</span></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#2a2e35]">
              <tr class="bg-[#111317]/50"><td>40 kg</td><td class="bg-pink-900/30">1,5 ml / h</td><td class="bg-pink-800/40">3,0 ml / h</td><td class="bg-pink-700/50">15 ml / h</td><td class="bg-pink-600/60">30 ml / h</td></tr>
              <tr><td>50 kg</td><td class="bg-pink-900/30">1,9 ml / h</td><td class="bg-pink-800/40">3,8 ml / h</td><td class="bg-pink-700/50">18,8 ml / h</td><td class="bg-pink-600/60">37,5 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>60 kg</td><td class="bg-pink-900/30">2,3 ml / h</td><td class="bg-pink-800/40">4,5 ml / h</td><td class="bg-pink-700/50">22,5 ml / h</td><td class="bg-pink-600/60">45 ml / h</td></tr>
              <tr><td>70 kg</td><td class="bg-pink-900/30">2,6 ml / h</td><td class="bg-pink-800/40">5,3 ml / h</td><td class="bg-pink-700/50">26,3 ml / h</td><td class="bg-pink-600/60">52,5 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>80 kg</td><td class="bg-pink-900/30">3,0 ml / h</td><td class="bg-pink-800/40">6,0 ml / h</td><td class="bg-pink-700/50">30 ml / h</td><td class="bg-pink-600/60">60 ml / h</td></tr>
              <tr><td>90 kg</td><td class="bg-pink-900/30">3,4 ml / h</td><td class="bg-pink-800/40">6,8 ml / h</td><td class="bg-pink-700/50">33,8 ml / h</td><td class="bg-pink-600/60">67,5 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>100 kg</td><td class="bg-pink-900/30">3,8 ml / h</td><td class="bg-pink-800/40">7,5 ml / h</td><td class="bg-pink-700/50">37,5 ml / h</td><td class="bg-pink-600/60">75 ml / h</td></tr>
              <tr><td>110 kg</td><td class="bg-pink-900/30">4,1 ml / h</td><td class="bg-pink-800/40">8,3 ml / h</td><td class="bg-pink-700/50">41,3 ml / h</td><td class="bg-pink-600/60">82,5 ml / h</td></tr>
              <tr class="bg-[#111317]/50"><td>120 kg</td><td class="bg-pink-900/30">4,5 ml / h</td><td class="bg-pink-800/40">9,0 ml / h</td><td class="bg-pink-700/50">45 ml / h</td><td class="bg-pink-600/60">90 ml / h</td></tr>
            </tbody>
          </table>
        </div>
        <div class="text-xs text-white/60 mt-2 font-mono text-right">Przygotowanie: Noradrenalina 4 mg / 50 ml NaCl 0,9%</div>
      </div>
    </div>
  `;

  const drugSelect = document.getElementById('pumpDrugSelect');
  const weightInput = document.getElementById('pumpWeightInput');
  const doseInput = document.getElementById('pumpDoseInput');
  const resultValue = document.getElementById('pumpResultValue');
  const prepInfo = document.getElementById('pumpPreparationInfo');
  const doseLabel = document.getElementById('pumpDoseLabel');

  function update() {
    const drug = drugSelect.value;
    const weight = parseFloat(weightInput.value) || 70;
    const dose = parseFloat(doseInput.value) || 0;
    
    let mlh = 0;
    let preparation = "";

    if (drug === 'adr_shock') {
      // 1 mg / 50 ml = 20 mcg / ml
      // ml/h = (mcg/kg/min * kg * 60) / 20
      mlh = (dose * weight * 60) / 20;
      preparation = "Adrenalina 1 mg / 50 ml NaCl 0,9% (20 mcg/ml)";
      doseLabel.textContent = "Dawka [mcg/kg/min]:";
    } else if (drug === 'adr_brady') {
      // 1 mg / 500 ml = 2 mcg / ml
      // ml/h = (mcg/min * 60) / 2
      mlh = (dose * 60) / 2;
      preparation = "Adrenalina 1 mg / 500 ml NaCl 0,9% (2 mcg/ml)";
      doseLabel.textContent = "Dawka [mcg/min]:";
    } else if (drug === 'nor_shock') {
      // 4 mg / 50 ml = 80 mcg / ml
      // ml/h = (mcg/kg/min * kg * 60) / 80
      mlh = (dose * weight * 60) / 80;
      preparation = "Noradrenalina 4 mg / 50 ml NaCl 0,9% (80 mcg/ml)";
      doseLabel.textContent = "Dawka [mcg/kg/min]:";
    }

    resultValue.textContent = `${mlh.toFixed(1)} ml/h`;
    prepInfo.textContent = `Przygotowanie: ${preparation}`;
  }

  drugSelect.addEventListener('change', () => {
    if (drugSelect.value === 'adr_brady') {
      document.getElementById('pumpWeightContainer').style.opacity = '0.3';
      doseInput.value = 2; // Default for bradycardia is 2-10 mcg/min
    } else {
      document.getElementById('pumpWeightContainer').style.opacity = '1';
      doseInput.value = 0.1; // Default for shock
    }
    update();
  });

  weightInput.addEventListener('input', update);
  doseInput.addEventListener('input', update);
  update();
}
els.backCalcPumps.addEventListener('click', () => show('calculators'));
els.backCalcAPGAR.addEventListener('click', () => show('calculators'));
els.backCalcQSOFA.addEventListener('click', () => show('calculators'));
els.backCalcPain.addEventListener('click', () => show('calculators'));

function renderAPGAR() {
  const criteria = [
    { id: 'apgarA', title: 'Akcja serca', options: ['Brak', '< 100/min', '≥ 100/min'] },
    { id: 'apgarR', title: 'Oddech', options: ['Brak', 'Zwolniony, nieregularny', 'Głośny płacz'] },
    { id: 'apgarT', title: 'Napięcie mięśni (Tonus)', options: ['Wiotkie', 'Słabe zgięcia kończyn', 'Ruchy czynne'] },
    { id: 'apgarG', title: 'Reakcja na cewnik (Grimace)', options: ['Brak', 'Grymas twarzy', 'Kaszle, kicha, płacze'] },
    { id: 'apgarS', title: 'Skóra (Skin)', options: ['Sina, blada', 'Tułów różowy, sinica obwodowa', 'Całe ciało różowe'] }
  ];

  els.apgarBox.innerHTML = `
    <div class="space-y-4">
      ${criteria.map(c => `
        <div class="space-y-2">
          <label class="block text-sm font-medium text-white/70">${c.title}:</label>
          <select id="${c.id}" class="w-full bg-[#111317] border border-[#2a2e35] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition">
            ${c.options.map((opt, i) => `<option value="${i}">${i} - ${opt}</option>`).join('')}
          </select>
        </div>
      `).join('')}
      <div class="bg-[#0f1215] border border-[#2a2e35] rounded-2xl p-6 text-center mt-6">
        <div class="text-sm text-white/50 mb-1">Wynik APGAR:</div>
        <div id="apgarResultValue" class="text-4xl font-bold text-emerald-400">0 pkt</div>
        <div id="apgarStatus" class="text-sm text-white/40 mt-3">Ciężka zamartwica</div>
      </div>
    </div>
  `;

  const selects = criteria.map(c => document.getElementById(c.id));
  const resVal = document.getElementById('apgarResultValue');
  const resStatus = document.getElementById('apgarStatus');

  function update() {
    const total = selects.reduce((acc, s) => acc + parseInt(s.value), 0);
    resVal.textContent = `${total} pkt`;
    if (total >= 8) { resStatus.textContent = 'Stan dobry'; resStatus.className = 'text-sm text-emerald-400 mt-3'; }
    else if (total >= 4) { resStatus.textContent = 'Stan średni (umiarkowana zamartwica)'; resStatus.className = 'text-sm text-yellow-400 mt-3'; }
    else { resStatus.textContent = 'Stan ciężki (ciężka zamartwica)'; resStatus.className = 'text-sm text-red-400 mt-3'; }
  }

  selects.forEach(s => s.addEventListener('change', update));
  update();
}

function renderQSOFA() {
  const criteria = [
    { id: 'qsofaSBP', title: 'Ciśnienie tętnicze skurczowe', opt1: '> 100 mmHg', opt2: '≤ 100 mmHg' },
    { id: 'qsofaRR', title: 'Liczba oddechów na minutę', opt1: '< 22', opt2: '≥ 22' },
    { id: 'qsofaGCS', title: 'Liczba punktów w skali Glasgow', opt1: '15', opt2: '3-14' }
  ];

  const state = { qsofaSBP: 0, qsofaRR: 0, qsofaGCS: 0 };

  els.qsofaBox.innerHTML = `
    <div class="space-y-4">
      <div class="glass p-1 rounded-2xl border border-[#2a2e35] overflow-hidden">
        <table class="w-full text-sm">
          <tbody class="divide-y divide-[#2a2e35]">
            ${criteria.map(c => `
              <tr>
                <td class="p-4 font-medium text-white/70 w-1/3">${c.title}</td>
                <td class="p-2 w-2/3">
                  <div class="grid grid-cols-2 gap-2">
                    <button id="${c.id}_0" class="py-3 px-2 rounded-xl border border-[#2a2e35] bg-[#111317] hover:border-emerald-500/50 transition text-xs font-semibold qsofa-btn active-q" data-val="0">${c.opt1}</button>
                    <button id="${c.id}_1" class="py-3 px-2 rounded-xl border border-[#2a2e35] bg-[#111317] hover:border-emerald-500/50 transition text-xs font-semibold qsofa-btn" data-val="1">${c.opt2}</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="glass p-6 rounded-2xl border border-[#2a2e35] bg-[#0f1215]">
        <div class="flex items-center mb-4 text-emerald-400 font-bold">
          <span class="mr-2">📋</span> Wynik
        </div>
        <div class="bg-[#14171b] border border-[#2a2e35] rounded-xl p-4">
          <div class="flex items-center mb-2">
            <div class="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
            <div class="text-xs text-white/50 uppercase tracking-wider">Skala qSOFA</div>
          </div>
          <div class="flex items-baseline space-x-2">
            <span id="qsofaResultValue" class="text-4xl font-bold text-white">0</span>
            <span class="text-xl text-white/40">pkt</span>
          </div>
          <div id="qsofaStatusBox" class="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center">
            <div class="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
            <span id="qsofaStatusText" class="text-sm font-medium text-emerald-400">Niewielkie ryzyko sepsy</span>
          </div>
        </div>
      </div>
    </div>
  `;

  const resVal = document.getElementById('qsofaResultValue');
  const statusBox = document.getElementById('qsofaStatusBox');
  const statusText = document.getElementById('qsofaStatusText');
  const statusDot = statusBox.querySelector('div');

  function update() {
    const total = Object.values(state).reduce((a, b) => a + b, 0);
    resVal.textContent = total;
    
    if (total >= 2) {
      statusBox.className = 'mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center animate-pulse';
      statusText.textContent = 'Wysokie ryzyko sepsy / zgonu!';
      statusText.className = 'text-sm font-medium text-red-400';
      statusDot.className = 'w-2 h-2 rounded-full bg-red-500 mr-3';
    } else {
      statusBox.className = 'mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center';
      statusText.textContent = 'Niewielkie ryzyko sepsy';
      statusText.className = 'text-sm font-medium text-emerald-400';
      statusDot.className = 'w-2 h-2 rounded-full bg-emerald-500 mr-3';
    }
  }

  criteria.forEach(c => {
    const btn0 = document.getElementById(`${c.id}_0`);
    const btn1 = document.getElementById(`${c.id}_1`);

    btn0.addEventListener('click', () => {
      state[c.id] = 0;
      btn0.classList.add('bg-emerald-600', 'border-emerald-500', 'active-q');
      btn0.classList.remove('bg-[#111317]', 'border-[#2a2e35]');
      btn1.classList.remove('bg-emerald-600', 'border-emerald-500', 'active-q');
      btn1.classList.add('bg-[#111317]', 'border-[#2a2e35]');
      update();
    });

    btn1.addEventListener('click', () => {
      state[c.id] = 1;
      btn1.classList.add('bg-emerald-600', 'border-emerald-500', 'active-q');
      btn1.classList.remove('bg-[#111317]', 'border-[#2a2e35]');
      btn0.classList.remove('bg-emerald-600', 'border-emerald-500', 'active-q');
      btn0.classList.add('bg-[#111317]', 'border-[#2a2e35]');
      update();
    });
    
    // Initial state visuals
    btn0.classList.add('bg-emerald-600', 'border-emerald-500');
  });

  update();
}

function renderPain() {
  els.painBox.innerHTML = `
    <div class="space-y-6">
      <!-- Skala NRS -->
      <div class="glass p-6 rounded-2xl border border-[#2a2e35]">
        <label class="block text-sm font-medium text-white/70 mb-6 text-center">Natężenie bólu (skala NRS 0-10):</label>
        <div class="relative px-2">
          <input id="painRange" type="range" min="0" max="10" step="1" value="0" class="w-full accent-emerald-500 h-2 bg-[#111317] rounded-lg appearance-none cursor-pointer">
          <div class="flex justify-between mt-4 text-[10px] font-mono text-white/40">
            <div class="flex flex-col items-center w-6"><span>0</span><span class="mt-1">BRAK</span></div>
            <div class="flex flex-col items-center w-6"><span>1</span><span class="mt-1 opacity-0">.</span></div>
            <div class="flex flex-col items-center w-6"><span>2</span><span class="mt-1 opacity-0">.</span></div>
            <div class="flex flex-col items-center w-6"><span>3</span><span class="mt-1 opacity-0">.</span></div>
            <div class="flex flex-col items-center w-6"><span>4</span><span class="mt-1 opacity-0">.</span></div>
            <div class="flex flex-col items-center w-6"><span>5</span><span class="mt-1 opacity-0">.</span></div>
            <div class="flex flex-col items-center w-6"><span>6</span><span class="mt-1 opacity-0">.</span></div>
            <div class="flex flex-col items-center w-6"><span>7</span><span class="mt-1 opacity-0">.</span></div>
            <div class="flex flex-col items-center w-6"><span>8</span><span class="mt-1 opacity-0">.</span></div>
            <div class="flex flex-col items-center w-6"><span>9</span><span class="mt-1 opacity-0">.</span></div>
            <div class="flex flex-col items-center w-6"><span>10</span><span class="mt-1">MAX</span></div>
          </div>
        </div>
        <div class="text-center mt-6">
          <span id="painValueDisplay" class="text-5xl font-bold text-emerald-400">0</span>
        </div>
      </div>

      <!-- Rodzaj bólu -->
      <div class="glass p-6 rounded-2xl border border-[#2a2e35]">
        <label class="block text-sm font-medium text-white/70 mb-4">Lokalizacja / Rodzaj bólu:</label>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button id="painTypeChest" class="pain-type-btn p-3 rounded-xl border border-[#2a2e35] bg-[#111317] text-sm hover:border-emerald-500/50 transition flex flex-col items-center">
            <span class="text-xl mb-1">🫀</span>
            <span>Klatka piersiowa</span>
          </button>
          <button id="painTypeAbdomen" class="pain-type-btn p-3 rounded-xl border border-[#2a2e35] bg-[#111317] text-sm hover:border-emerald-500/50 transition flex flex-col items-center">
            <span class="text-xl mb-1">🤢</span>
            <span>Brzuch</span>
          </button>
          <button id="painTypeHead" class="pain-type-btn p-3 rounded-xl border border-[#2a2e35] bg-[#111317] text-sm hover:border-emerald-500/50 transition flex flex-col items-center">
            <span class="text-xl mb-1">🤯</span>
            <span>Głowa</span>
          </button>
        </div>
      </div>

      <!-- Rekomendacje -->
      <div id="painRecommendation" class="hidden glass p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
        <div class="flex items-start">
          <span class="text-2xl mr-4">💊</span>
          <div class="space-y-4 w-full">
            <div id="painSpecificWarning" class="hidden bg-red-500/20 border border-red-500/40 p-4 rounded-xl text-red-200 text-sm leading-relaxed"></div>
            
            <div>
              <div class="font-bold text-emerald-400 uppercase tracking-wider text-xs mb-3">Zalecenia i farmakoterapia:</div>
              <div id="painMedList" class="text-white/90 space-y-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const range = document.getElementById('painRange');
  const valDisplay = document.getElementById('painValueDisplay');
  const recommendBox = document.getElementById('painRecommendation');
  const medList = document.getElementById('painMedList');
  const specificWarning = document.getElementById('painSpecificWarning');
  
  const typeBtns = {
    chest: document.getElementById('painTypeChest'),
    abdomen: document.getElementById('painTypeAbdomen'),
    head: document.getElementById('painTypeHead')
  };

  let selectedType = null;

  function update() {
    const val = parseInt(range.value);
    valDisplay.textContent = val;
    
    if (val === 0 && !selectedType) {
      recommendBox.classList.add('hidden');
      return;
    }

    recommendBox.classList.remove('hidden');
    
    // Warnings
    specificWarning.classList.add('hidden');
    if (selectedType === 'chest') {
      specificWarning.innerHTML = `<strong>⚠️ UWAGA OZW:</strong> Wykonaj 12-odpr EKG i teletransmisję. Monitoruj parametry (NiBP, SpO2). Wykonaj NiBP na obu kończynach (rozwarstwienie aorty)`;
      specificWarning.classList.remove('hidden');
    } else if (selectedType === 'head') {
      specificWarning.innerHTML = `<strong>⚠️ UWAGA UDAR/KRWAWIENIE:</strong> Wykonaj skalę FAST/BE-FAST. Sprawdź źrenice, glikemię i ciśnienie. Nagły "najsilniejszy w życiu" ból głowy sugeruje krwotok podpajęczynówkowy!`;
      specificWarning.classList.remove('hidden');
    } else if (selectedType === 'abdomen') {
      specificWarning.innerHTML = `<strong>⚠️ UWAGA BRZUCH:</strong> Sprawdź objawy otrzewnowe (Blumberg, Jaworski itp.).`;
      specificWarning.classList.remove('hidden');
    }

    let html = '';
    
    // Standard Analgesic Ladder based on NRS
    let ladderInfo = '';
    if (val >= 1 && val <= 3) {
      ladderInfo = `<div class="text-xs font-bold text-white/50 mb-1">I STOPIEŃ DRABINY (Lekki ból):</div>
                    <ul class="list-disc pl-5 text-sm space-y-1">
                      <li>Paracetamol 1g i.v.</li>
                      <li>NLPZ (np. Ketoprofen 100mg i.v. / Ibuprofen 400 mg p.o)</li>
                    </ul>`;
    } else if (val >= 4 && val <= 6) {
      ladderInfo = `<div class="text-xs font-bold text-white/50 mb-1">II STOPIEŃ DRABINY (Umiarkowany ból):</div>
                    <ul class="list-disc pl-5 text-sm space-y-1">
                    <li>NLPZ (Ketonal 100 mg / Ibuprofen 400 mg p.o) + Paracetamol(1 g)</li>
                    <li>Paracetamol (1 g)+ Metamizol(1-2.5 g)</li>
                    <li>NLPZ (Ketonal 100 mg / Ibuprofen 400 mg p.o) + Metamizol(1-2.5 g)</li>
                    <li>Małe dawki morfiny (np. 0.5 mg)</li>
                    </ul>`;
    } else if (val >= 7) {
      ladderInfo = `<div class="text-xs font-bold text-red-400/80 mb-1">III STOPIEŃ DRABINY (Silny ból):</div>
                    <ul class="list-disc pl-5 text-sm space-y-1">
                      <li><span class="text-red-300 font-semibold">Morfina:</span> 2-5 mg i.v. (miareczkuj co 5-10 min)</li>
                      <li><span class="text-red-300 font-semibold">Fentanyl:</span> 25-100 mcg i.v.</li>
                    </ul>`;
    }

    // Specific treatment additions
    let specificInfo = '';
    if (selectedType === 'abdomen') {
      specificInfo = `
        <div class="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <div class="text-xs font-bold text-blue-400 mb-2">SPECYFICZNE DLA BRZUCHA:</div>
          <ul class="list-disc pl-5 text-sm space-y-1">
            <li><span class="font-semibold">Rozkurczowe:</span> No-Spa (Drotaweryna) 40-80mg i.v./i.m.</li>
            <li><span class="font-semibold">Rozkurczowe:</span> Papaweryna 40-80mg i.m./s.c.</li>
            <li><span class="font-semibold">Przeciwbólowe + rozkurczowe:</span> Metamizol 1-2g i.v. (często lek 1. wyboru w kolkach)</li>
            <li><span class="font-semibold">Rozkurczowe:</span> Lignokaina 1 mg/kg  i.v.</li>
          </ul>
        </div>`;
    } else if (selectedType === 'chest') {
      specificInfo = `
        <div class="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
          <div class="text-xs font-bold text-red-400 mb-2">SPECYFICZNE DLA OZW:</div>
          <div class="text-sm">Preferowana <span class="font-bold">Morfina</span> - zmniejsza preload, zapotrzebowanie serca na tlen i lęk.</div>
        </div>`;
    }

    medList.innerHTML = ladderInfo + specificInfo;
  }

  Object.entries(typeBtns).forEach(([key, btn]) => {
    btn.addEventListener('click', () => {
      if (selectedType === key) {
        selectedType = null;
        btn.classList.remove('bg-emerald-500/20', 'border-emerald-500');
      } else {
        Object.values(typeBtns).forEach(b => b.classList.remove('bg-emerald-500/20', 'border-emerald-500'));
        selectedType = key;
        btn.classList.add('bg-emerald-500/20', 'border-emerald-500');
      }
      update();
    });
  });

  range.addEventListener('input', update);
}

// WIDOK "QUIZ"
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let quizTimerInterval = null;
let quizStartTime = 0;
let selectedQuizCategory = null;

// Obsługa wyboru kategorii
const quizTypeBtns = document.querySelectorAll('.quiz-type-btn');
quizTypeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    quizTypeBtns.forEach(b => b.classList.remove('active', 'border-emerald-500', 'bg-emerald-500/5'));
    btn.classList.add('active', 'border-emerald-500', 'bg-emerald-500/5');
    selectedQuizCategory = btn.dataset.type;
    els.startQuizBtn.disabled = false;
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  let count = parseInt(els.quizCount.value);
  if (isNaN(count) || count < 5) count = 5;
  if (count > 50) count = 50;
  
  // Filtrowanie pytań po kategorii
  let filteredQuestions = [...quizQuestions];
  if (selectedQuizCategory) {
    filteredQuestions = filteredQuestions.filter(q => q.category === selectedQuizCategory);
  }
  
  // Losowanie pytań
  shuffleArray(filteredQuestions);
  currentQuizQuestions = filteredQuestions.slice(0, Math.min(count, filteredQuestions.length));
  
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
  
  // Ukrycie wyjaśnienia i przycisku dalej
  els.quizExplanation.classList.add('hidden');
  els.nextQuestionBtn.classList.add('hidden');
  
  // Zapamiętanie poprawnej odpowiedzi (tekstowo) przed pomieszaniem
  const correctText = q.options[q.correct];
  
  // Stworzenie kopii opcji i ich pomieszanie
  const shuffledOptions = [...q.options];
  shuffleArray(shuffledOptions);
  
  // Znalezienie nowego indeksu poprawnej odpowiedzi
  const newCorrectIndex = shuffledOptions.indexOf(correctText);
  
  shuffledOptions.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'w-full p-4 text-left rounded-xl border border-[#2a2e35] bg-[#111317] hover:border-emerald-500 hover:bg-[#1a1d22] transition flex items-center group';
    btn.innerHTML = `
      <div class="w-8 h-8 rounded-full border border-[#2a2e35] flex items-center justify-center mr-4 group-hover:border-emerald-500 group-hover:text-emerald-400 transition font-mono text-sm">
        ${String.fromCharCode(65 + index)}
      </div>
      <div class="flex-1">${opt}</div>
    `;
    btn.onclick = () => handleAnswer(index, newCorrectIndex);
    els.quizOptions.appendChild(btn);
  });
}

function handleAnswer(selectedIndex, correctIndex) {
  const q = currentQuizQuestions[currentQuestionIndex];
  const buttons = els.quizOptions.querySelectorAll('button');
  
  // Wyłączenie klikania
  buttons.forEach(btn => btn.disabled = true);
  
  if (selectedIndex === correctIndex) {
    quizScore++;
    buttons[selectedIndex].classList.add('border-emerald-500', 'bg-emerald-500/10');
    buttons[selectedIndex].querySelector('div').classList.add('bg-emerald-500', 'border-emerald-500', 'text-white');
  } else {
    buttons[selectedIndex].classList.add('border-red-500', 'bg-red-500/10');
    buttons[selectedIndex].querySelector('div').classList.add('bg-red-500', 'border-red-500', 'text-white');
    // Pokazanie poprawnej
    buttons[correctIndex].classList.add('border-emerald-500', 'bg-emerald-500/5');
  }
  
  // Pokazanie wyjaśnienia
  els.quizExplanationText.textContent = q.explanation || 'Brak dodatkowego wyjaśnienia.';
  els.quizExplanation.classList.remove('hidden');
  
  // Pokazanie przycisku "Następne pytanie"
  els.nextQuestionBtn.classList.remove('hidden');
  els.nextQuestionBtn.textContent = (currentQuestionIndex + 1 < currentQuizQuestions.length) ? 'NASTĘPNE PYTANIE' : 'ZOBACZ WYNIK';
}

els.nextQuestionBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuizQuestions.length) {
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
});

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
els.backFromQuizSetup.addEventListener('click', () => {
  selectedQuizCategory = null;
  quizTypeBtns.forEach(b => b.classList.remove('active', 'border-emerald-500', 'bg-emerald-500/5'));
  els.startQuizBtn.disabled = true;
  show('home');
});
els.restartQuizBtn.addEventListener('click', () => {
  selectedQuizCategory = null;
  quizTypeBtns.forEach(b => b.classList.remove('active', 'border-emerald-500', 'bg-emerald-500/5'));
  els.startQuizBtn.disabled = true;
  show('quizSetup');
});
els.backFromQuizResult.addEventListener('click', () => {
  selectedQuizCategory = null;
  quizTypeBtns.forEach(b => b.classList.remove('active', 'border-emerald-500', 'bg-emerald-500/5'));
  els.startQuizBtn.disabled = true;
  show('home');
});

// Initial
show('home');
// Pre-render lists for immediate UX when entering
renderMeds();
renderProtocols();
renderCalculators();
renderALS();
