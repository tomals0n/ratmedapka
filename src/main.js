// Vanilla JS SPA logic using show/hide of sections

const sections = {
  home: document.getElementById('home'),
  meds: document.getElementById('meds'),
  medDetail: document.getElementById('medDetail'),
  protocols: document.getElementById('protocols'),
  protocolDetail: document.getElementById('protocolDetail')
};

const els = {
  goMeds: document.getElementById('goMeds'),
  goProtocols: document.getElementById('goProtocols'),
  goSymptoms: document.getElementById('goSymptoms'),
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
  protocolDetailContent: document.getElementById('protocolDetailContent')
};

function show(name) {
  Object.values(sections).forEach(s => s.classList.add('hidden'));
  sections[name].classList.remove('hidden');
}

// Home navigation
els.goMeds.addEventListener('click', () => { show('meds'); renderMeds(); });
els.goProtocols.addEventListener('click', () => { show('protocols'); renderProtocols(); });
els.goSymptoms.addEventListener('click', () => { alert('Widok Objawy dostępny w wersji rozszerzonej.'); });

// Medications view
let currentMedId = null;
function renderMeds() {
  els.medsGrid.innerHTML = '';
  const q = (els.medSearch.value || '').trim().toLowerCase();
  const list = q ? medications.filter(m => m.name.toLowerCase().includes(q)) : medications;
  list.forEach(m => {
    const card = document.createElement('div');
    card.className = 'rounded-xl border border-[#2a2e35] bg-[#14171b] p-4 shadow hover:shadow-lg transition text-center';
    card.innerHTML = `
      <i class="fa-solid fa-pills text-3xl mb-2"></i>
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
        li.innerHTML = `<span class="font-semibold">${it.label}:</span> ${it.text}`;
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
        li.innerHTML = `<span class="font-semibold">${it.label}:</span> ${it.text}`;
        ulK.appendChild(li);
      });
      container.appendChild(ulK);
    }
    if ((!med.dosesAdults || !med.dosesAdults.length) && (!med.dosesChildren || !med.dosesChildren.length) && med.doses) {
      // Heurystyczne rozbicie tekstu dawek na punkty
      const adults = extractSegment(med.doses, /Dorośli/i);
      const children = extractSegment(med.doses, /Dzieci/i);
      if (adults) {
        const adultsHeader = document.createElement('div');
        adultsHeader.className = 'text-emerald-400 font-semibold mt-2';
        adultsHeader.textContent = 'Dorośli:';
        container.appendChild(adultsHeader);
        const ulA = document.createElement('ul');
        ulA.className = 'list-disc pl-5 marker:text-emerald-400';
        toList(adults).forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ulA.appendChild(li);
        });
        container.appendChild(ulA);
      }
      if (children) {
        const kidsHeader = document.createElement('div');
        kidsHeader.className = 'text-red-400 font-semibold mt-3';
        kidsHeader.textContent = 'Dzieci:';
        container.appendChild(kidsHeader);
        const ulK = document.createElement('ul');
        ulK.className = 'list-disc pl-5 marker:text-red-400';
        toList(children).forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ulK.appendChild(li);
        });
        container.appendChild(ulK);
      }
      if (!adults && !children) {
        const p = document.createElement('div');
        p.className = 'text-white/80 mt-1';
        p.textContent = med.doses;
        container.appendChild(p);
      }
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

// Protocols view
let currentProtocolId = null;
function renderProtocols() {
  els.protocolsGrid.innerHTML = '';
  protocols.forEach(p => {
    const card = document.createElement('button');
    card.className = 'rounded-xl p-4 text-center glass hover:shadow-lg transition';
    const iconClass = faFromIconName(p.iconName || 'clipboard-list');
    card.innerHTML = `
      <i class="${iconClass} text-3xl mb-2 text-emerald-300"></i>
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
  els.protocolDetailContent.textContent = item ? item.content : '';
}
els.backProtocolDetail.addEventListener('click', () => { show('protocols'); });

// Icon mapping helper (protocol iconName -> FontAwesome class)
function faFromIconName(name) {
  const map = {
    bolt: 'fa-solid fa-bolt',
    'clipboard-list': 'fa-solid fa-clipboard-list',
    pill: 'fa-solid fa-pills',
    alert: 'fa-solid fa-exclamation-circle'
  };
  return map[name] || 'fa-solid fa-clipboard-list';
}

// Initial
show('home');
// Pre-render lists for immediate UX when entering
renderMeds();
renderProtocols();
