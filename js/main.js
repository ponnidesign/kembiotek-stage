// ─── ICON MAP ───
function getIcon(name) {
  const icons = {
    flask:'<path d="M10 2v8L4.5 20.5a1 1 0 00.9 1.5h13.2a1 1 0 00.9-1.5L14 10V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/>',
    filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    sun:'<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    bar:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>',
    scale:'<line x1="12" y1="2" x2="12" y2="20"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    flame:'<path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/>',
    waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
    refresh:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>',
    circle:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>',
    pill:'<path d="M10.5 20H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h3.93a2 2 0 011.66.9l.82 1.2a2 2 0 001.66.9H20a2 2 0 012 2v2"/><circle cx="17" cy="17" r="3"/><path d="M17 14v6M14 17h6"/>',
    activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    leaf:'<path d="M2 22c5.7-4.3 12-10.3 15-16.6-5.1.9-10.9 5-13.3 9.6C1.5 20 2 22 2 22zM22 2s-7.8 3-12.2 8c3-.4 5.8-2.4 7.4-5.1C18.6 7.1 22 2 22 2z"/>',
    droplets:'<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0014 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 01-11.91 4.97"/>',
    box:'<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>',
    thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>',
    layout:'<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    tool:'<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>',
    layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
    truck:'<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[name]||''}</svg>`;
}

// ─── LIGHTBOX ───
let lbImgs=[], lbCurIdx=0;
function openLB(imgs, idx) {
  const lb = document.getElementById('lb');
  if(!lb) return;
  lbImgs=imgs; lbCurIdx=idx;
  document.getElementById('lbImg').src = imgs[idx].src;
  document.getElementById('lbImg').alt = imgs[idx].label;
  document.getElementById('lbLabel').textContent = imgs[idx].label;
  document.getElementById('lbCnt').textContent = (idx+1)+' of '+imgs.length;
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLB() {
  const lb = document.getElementById('lb');
  if(lb) lb.classList.remove('open');
  document.body.style.overflow='';
}
function lbNav(d) {
  lbCurIdx=(lbCurIdx+d+lbImgs.length)%lbImgs.length;
  document.getElementById('lbImg').src = lbImgs[lbCurIdx].src;
  document.getElementById('lbImg').alt = lbImgs[lbCurIdx].label;
  document.getElementById('lbLabel').textContent = lbImgs[lbCurIdx].label;
  document.getElementById('lbCnt').textContent = (lbCurIdx+1)+' of '+lbImgs.length;
}

// ─── SEARCH ───
function toggleSearch() {
  const ov = document.getElementById('searchOverlay');
  if(!ov) return;
  const open = ov.classList.toggle('open');
  ov.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
  if(open) {
    setTimeout(()=>{ const inp = document.getElementById('searchInput'); if(inp) inp.focus(); }, 120);
    doSearch();
  }
}

function doSearch() {
  const catId = (document.getElementById('searchCatSelect')||{}).value || '';
  const query = ((document.getElementById('searchInput')||{}).value || '').trim().toLowerCase();
  const results = document.getElementById('searchResults');
  if(!results) return;
  if(!query && !catId) {
    results.innerHTML = '<div class="search-hint">Select a category or type a product name to begin</div>';
    return;
  }
  let matches = [];
  CAT.forEach(cat => {
    if(catId && cat.id !== catId) return;
    cat.items.forEach(item => {
      if(!query || item.toLowerCase().includes(query)) matches.push({item, catLabel: cat.label, catId: cat.id});
    });
  });
  if(!matches.length) {
    results.innerHTML = `<div class="search-hint">No products found. <a class="search-enquire-link" href="contact.html">Send us an enquiry →</a></div>`;
    return;
  }
  // Determine if we're on products page — if so filter in-page, else redirect
  const isProductsPage = window.location.pathname.includes('products');
  results.innerHTML = `<div class="search-count">${matches.length} product${matches.length!==1?'s':''} found</div>`
    + `<div class="search-results-grid">`
    + matches.map(m => {
        const img = PIMG[m.item];
        const imgHtml = img
          ? `<img src="${img}" alt="${m.item}" loading="lazy" onerror="this.style.opacity='0'"/>`
          : `<div class="sr-ph">${getIcon('flask')}</div>`;
        const clickFn = isProductsPage
          ? `toggleSearch();filterCat('${m.catId}',document.querySelector('[data-id=${m.catId}]'))`
          : `window.location.href='products.html?cat=${m.catId}'`;
        return `<div class="search-result-card" onclick="${clickFn}">
          <div class="sr-img">${imgHtml}</div>
          <div class="sr-info"><div class="sr-name">${m.item}</div><div class="sr-cat">${m.catLabel}</div></div>
        </div>`;
      }).join('')
    + `</div>`;
}

// ─── ESTEEMED CUSTOMERS ───
function buildCustomers() {
  const track = document.getElementById('custTrack');
  if (!track || typeof CUSTOMERS === 'undefined') return;
  function card(c) {
    return `<div class="cust-card">
      <div class="cust-initials" style="background:${c.color}">${c.initials}</div>
      <div class="cust-name">${c.name}</div>
      <div class="cust-sector">${c.sector}</div>
    </div>`;
  }
  const h = CUSTOMERS.map(card).join('');
  track.innerHTML = h + h; // duplicate for seamless loop
}

// ─── BRANDS ───
function buildBrands() {
  function brandCard(b) {
    return `<div class="brand-card">
      <img src="${b.img}" alt="${b.name}" class="brand-img" loading="lazy" onerror="this.style.opacity='.3'"/>
      <div class="brand-name">${b.name}</div>
    </div>`;
  }
  const t1 = document.getElementById('brandsTrack1');
  const t2 = document.getElementById('brandsTrack2');
  if(t1) { const h=BRANDS_ROW1.map(brandCard).join(''); t1.innerHTML=h+h; }
  if(t2) { const h=BRANDS_ROW2.map(brandCard).join(''); t2.innerHTML=h+h; }
}

// ─── ACTIVE NAV ───
function setActiveNav() {
  const path = window.location.pathname.toLowerCase();
  let page = 'home';
  if(path.includes('products')) page = 'products';
  else if(path.includes('team'))    page = 'about';
  else if(path.includes('about'))   page = 'about';
  else if(path.includes('contact')) page = 'contact';
  document.querySelectorAll('[data-page]').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });
}

// ─── FADE-UP REVEAL ───
function initReveal() {
  document.querySelectorAll('.fade-up:not(.in)').forEach(el => {
    new IntersectionObserver((en,ob)=>{
      if(en[0].isIntersecting){ el.classList.add('in'); ob.disconnect(); }
    },{threshold:0.07,rootMargin:'0px 0px -20px 0px'}).observe(el);
  });
}

// ─── HAMBURGER ───
function initHamburger() {
  const hbg = document.getElementById('hbg');
  const links = document.getElementById('navLinks');
  if(!hbg||!links) return;
  hbg.addEventListener('click', function(e){
    e.stopPropagation();
    const open = links.classList.toggle('open');
    hbg.classList.toggle('open', open);
    hbg.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  document.addEventListener('click', function(e){
    if(!links.contains(e.target) && !hbg.contains(e.target)) {
      links.classList.remove('open');
      hbg.classList.remove('open');
      hbg.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
      // Also collapse all nav dropdowns
      document.querySelectorAll('.nav-dl-wrap.open').forEach(function(w) { w.classList.remove('open'); });
    }
  });
}

// ─── NAV DROPDOWNS (About Us + Download — unified) ──────────────────────────
// Closes every .nav-dl-wrap, then opens the one the button belongs to (toggle)
function toggleNavDrop(e) {
  e.stopPropagation();
  const wrap = e.currentTarget.closest('.nav-dl-wrap');
  if (!wrap) return;
  const wasOpen = wrap.classList.contains('open');
  // Close all open dropdowns first
  document.querySelectorAll('.nav-dl-wrap.open').forEach(function(w) {
    w.classList.remove('open');
    var b = w.querySelector('[aria-expanded]');
    if (b) b.setAttribute('aria-expanded', 'false');
  });
  // Toggle clicked one open (skip if it was already open — acts as close)
  if (!wasOpen) {
    wrap.classList.add('open');
    var btn = wrap.querySelector('[aria-expanded]');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
}

// ─── SCROLL BEHAVIOUR ───
function initScroll() {
  window.addEventListener('scroll', function(){
    const nav = document.getElementById('nav');
    const st = document.getElementById('scrollTop');
    if(nav) nav.classList.toggle('scrolled', scrollY>40);
    if(st)  st.classList.toggle('show', scrollY>400);
  }, {passive:true});
}

// ─── PAGE ENTRY ANIMATION ───
function initPageIn() {
  const main = document.querySelector('main');
  if(main) { main.classList.add('page-in'); setTimeout(()=>main.classList.remove('page-in'),400); }
}

// ─── ENQUIRY MODAL ───────────────────────────────────────────────────────────
function buildEnquiryModal() {
  if (document.getElementById('enqOverlay')) return;
  const div = document.createElement('div');
  div.innerHTML = `
<div class="enq-overlay" id="enqOverlay" aria-hidden="true">
  <div class="enq-panel" role="dialog" aria-modal="true" aria-labelledby="enqTitle">
    <div class="enq-header">
      <div>
        <div class="enq-eyebrow">Quick Enquiry</div>
        <h2 class="enq-title" id="enqTitle">Send Us a Message</h2>
      </div>
      <button class="enq-close" onclick="closeEnquiryModal()" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <form id="enqForm" class="enq-form" novalidate>
      <div class="enq-row">
        <div class="form-group">
          <label class="form-label" for="enqName">Name <span class="form-req">*</span></label>
          <input class="form-input" type="text" id="enqName" required placeholder="Your name"/>
        </div>
        <div class="form-group">
          <label class="form-label" for="enqOrg">Organisation</label>
          <input class="form-input" type="text" id="enqOrg" placeholder="Company / institute"/>
        </div>
      </div>
      <div class="enq-row">
        <div class="form-group">
          <label class="form-label" for="enqPhone">Phone <span class="form-req">*</span></label>
          <input class="form-input" type="tel" id="enqPhone" required placeholder="+91 XXXXX XXXXX"/>
        </div>
        <div class="form-group">
          <label class="form-label" for="enqEmail">Email <span class="form-req">*</span></label>
          <input class="form-input" type="email" id="enqEmail" required placeholder="you@email.com"/>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="enqProduct">Product of Interest</label>
        <input class="form-input" type="text" id="enqProduct" placeholder="e.g. HPLC Column, Spectrophotometer…"/>
      </div>
      <div class="form-group">
        <label class="form-label" for="enqMsg">Message <span class="form-req">*</span></label>
        <textarea class="form-input form-textarea" id="enqMsg" required placeholder="Describe your requirement…" rows="3"></textarea>
      </div>
      <div id="enqError"></div>
      <button type="submit" class="form-submit-btn" id="enqSubmitBtn">
        Send Enquiry
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;stroke:currentColor"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
    </form>
    <div class="enq-success" id="enqSuccess" style="display:none">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
      <strong>Enquiry sent!</strong>
      <p>Thank you — we'll respond within 1 business day.</p>
    </div>
  </div>
</div>`;
  document.body.appendChild(div.firstElementChild);

  // Overlay backdrop click to close
  document.getElementById('enqOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeEnquiryModal();
  });

  // Form submission
  document.getElementById('enqForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    let valid = true;
    this.querySelectorAll('[required]').forEach(function(f) {
      if (!f.value.trim()) { f.style.borderColor = '#c0392b'; valid = false; }
      else f.style.borderColor = '';
    });
    if (!valid) return;

    const btn = document.getElementById('enqSubmitBtn');
    const err = document.getElementById('enqError');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    if (err) err.style.display = 'none';

    const data = {
      name:    (document.getElementById('enqName')?.value    || '').trim(),
      org:     (document.getElementById('enqOrg')?.value     || '').trim(),
      phone:   (document.getElementById('enqPhone')?.value   || '').trim(),
      email:   (document.getElementById('enqEmail')?.value   || '').trim(),
      product: (document.getElementById('enqProduct')?.value || '').trim(),
      message: (document.getElementById('enqMsg')?.value     || '').trim(),
      type:    'General Enquiry',
    };

    try {
      const res  = await fetch('mail.php', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
      const json = await res.json();
      if (res.ok && json.ok) {
        const form = document.getElementById('enqForm');
        const suc  = document.getElementById('enqSuccess');
        if (form) form.style.display = 'none';
        if (suc)  suc.style.display = 'flex';
      } else {
        showEnqError(json.error || 'Something went wrong. Please try again.');
        resetEnqBtn(btn);
      }
    } catch(ex) {
      showEnqError('Network error. Check your connection and try again.');
      resetEnqBtn(btn);
    }
  });

  // Clear red border on input
  document.getElementById('enqForm').querySelectorAll('.form-input').forEach(function(f) {
    f.addEventListener('input', function() { this.style.borderColor = ''; });
  });
}

function openEnquiryModal() {
  // Close mobile nav if open
  const links = document.getElementById('navLinks');
  const hbg   = document.getElementById('hbg');
  if (links && links.classList.contains('open')) {
    links.classList.remove('open');
    if (hbg) { hbg.classList.remove('open'); hbg.setAttribute('aria-expanded','false'); }
    document.body.style.overflow = '';
  }
  // Close download dropdown
  const dlWrap = document.querySelector('.nav-download-wrap');
  if (dlWrap) dlWrap.classList.remove('open');

  const ov = document.getElementById('enqOverlay');
  if (!ov) return;

  // Reset form to clean state
  const form = document.getElementById('enqForm');
  const suc  = document.getElementById('enqSuccess');
  const err  = document.getElementById('enqError');
  if (form)  { form.reset(); form.style.display = ''; }
  if (suc)   suc.style.display = 'none';
  if (err)   err.style.display = 'none';
  const btn = document.getElementById('enqSubmitBtn');
  if (btn) {
    btn.disabled = false;
    btn.innerHTML = 'Send Enquiry <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;stroke:currentColor"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  }
  form && form.querySelectorAll('.form-input').forEach(function(f) { f.style.borderColor = ''; });

  ov.classList.add('open');
  ov.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  setTimeout(function() { const n = document.getElementById('enqName'); if(n) n.focus(); }, 160);
}

function closeEnquiryModal() {
  const ov = document.getElementById('enqOverlay');
  if (!ov) return;
  ov.classList.remove('open');
  ov.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

function showEnqError(msg) {
  const el = document.getElementById('enqError');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
}

function resetEnqBtn(btn) {
  if (!btn) return;
  btn.disabled = false;
  btn.innerHTML = 'Send Enquiry <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;stroke:currentColor"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
}

// toggleDlMenu removed — use toggleNavDrop(event) on all nav dropdowns

// ─── DOMContentLoaded ───
document.addEventListener('DOMContentLoaded', function(){
  setActiveNav();
  initHamburger();
  initScroll();
  initPageIn();
  setTimeout(initReveal, 150);

  // Build enquiry modal (works on every page)
  buildEnquiryModal();

  // ESC key closes modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const ov = document.getElementById('enqOverlay');
      if (ov && ov.classList.contains('open')) closeEnquiryModal();
    }
  });

  // Click outside any nav dropdown to close it
  document.addEventListener('click', function() {
    document.querySelectorAll('.nav-dl-wrap.open').forEach(function(w) { w.classList.remove('open'); });
  });

  // Populate search category dropdown (works on every page)
  const searchSel = document.getElementById('searchCatSelect');
  if(searchSel) {
    searchSel.innerHTML = '<option value="">All Categories</option>'
      + CAT.map(c=>`<option value="${c.id}">${c.label}</option>`).join('');
    searchSel.onchange = doSearch;
  }

  // Close search on overlay background click
  const ov = document.getElementById('searchOverlay');
  if(ov) ov.addEventListener('click', function(e){ if(e.target===this) toggleSearch(); });

  // Lightbox init (only if lightbox exists on this page)
  const lb = document.getElementById('lb');
  if(lb) {
    document.getElementById('lbClose').onclick = closeLB;
    document.getElementById('lbPrev').onclick = () => lbNav(-1);
    document.getElementById('lbNext').onclick = () => lbNav(1);
    lb.addEventListener('click', e => { if(e.target===lb) closeLB(); });
    document.addEventListener('keydown', e => {
      if(!lb.classList.contains('open')) return;
      if(e.key==='Escape') closeLB();
      if(e.key==='ArrowLeft') lbNav(-1);
      if(e.key==='ArrowRight') lbNav(1);
    });
  }

  // Customers marquee
  if(document.getElementById('custTrack')) buildCustomers();

  // Brands (only if elements exist)
  if(document.getElementById('brandsTrack1')) buildBrands();
});
