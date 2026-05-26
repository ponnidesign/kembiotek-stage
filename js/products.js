// ─── PRODUCTS PAGE SCRIPTS ───

const PROD_LB = {}; // keyed by cat.id → [{src, label}]

function openProdLB(catId, idx) {
  const imgs = PROD_LB[catId];
  if(imgs && imgs.length) openLB(imgs, Math.min(idx, imgs.length-1));
}

function buildProducts() {
  const totalItems = CAT.reduce((s,c)=>s+c.items.length,0);

  // Hero pills
  const pillsEl = document.getElementById('heroPills');
  if(pillsEl) pillsEl.innerHTML = CAT.map(c=>`<span class="prod-hero-pill">${c.label}</span>`).join('');

  // Count
  const countVal = document.querySelector('.prod-count-val');
  if(countVal) countVal.textContent = totalItems+'+';
  const heroP = document.querySelector('.prod-hero p');
  if(heroP) heroP.textContent = `Browse ${totalItems}+ products across ${CAT.length} categories. Click any product image to zoom in.`;

  // Sidebar filters
  const filterList = document.getElementById('filterList');
  if(filterList) {
    filterList.innerHTML = `<button class="filter-btn active" data-id="all" onclick="filterCat('all',this)"><div class="filter-btn-icon">${getIcon('bar')}</div><span class="filter-btn-label">All Categories</span><span class="filter-btn-count">${CAT.length}</span></button>`
      + CAT.map(c=>`<button class="filter-btn" data-id="${c.id}" onclick="filterCat('${c.id}',this)"><div class="filter-btn-icon">${getIcon(c.icon)}</div><span class="filter-btn-label">${c.label}</span><span class="filter-btn-count">${c.items.length}</span></button>`).join('');
  }

  // Also populate search select on this page
  const searchSel = document.getElementById('searchCatSelect');
  if(searchSel) {
    searchSel.innerHTML = '<option value="">All Categories</option>'
      + CAT.map(c=>`<option value="${c.id}">${c.label}</option>`).join('');
    searchSel.onchange = doSearch;
  }

  // Product sections
  const content = document.getElementById('prodContent');
  if(!content) return;

  const phIcon = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;

  content.innerHTML = CAT.map(cat => {
    const catImgs = cat.items.map(name=>({src:PIMG[name]||'',label:name})).filter(x=>x.src);
    PROD_LB[cat.id] = catImgs;

    const imgGrid = `<div class="prod-img-grid">`
      + cat.items.map((name, ii) => {
          const tid = `tile-${cat.id}-${ii}`;
          const safeName = name.replace(/"/g,'&quot;').replace(/'/g,'&#39;');
          const imgSrc = PIMG[name];
          const lbIdx = catImgs.findIndex(x=>x.label===name);
          if(imgSrc) {
            return `<div class="prod-img-tile has-img" id="${tid}" onclick="openProdLB('${cat.id}',${Math.max(0,lbIdx)})">
              <div class="prod-tile-img-wrap">
                <img src="${imgSrc}" alt="${safeName}" loading="lazy" onerror="this.parentNode.style.display='none'"/>
              </div>
              <div class="prod-tile-name">${name}</div>
            </div>`;
          } else {
            return `<div class="prod-img-tile" id="${tid}">
              <div class="ph-content">
                <div class="ph-icon">${phIcon}</div>
                <div class="ph-label">${name}</div>
              </div>
            </div>`;
          }
        }).join('')
      + `</div>`;

    return `<div class="prod-cat-block" id="sec-${cat.id}" data-catid="${cat.id}">
      <div class="prod-cat-head">
        <div class="prod-cat-head-left">
          <div class="prod-cat-icon-box">${getIcon(cat.icon)}</div>
          <h2 class="prod-cat-name">${cat.label}</h2>
        </div>
        <span class="prod-cat-meta">${cat.items.length} products</span>
      </div>
      ${imgGrid}
    </div>`;
  }).join('');
}

function filterCat(id, btn) {
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.querySelectorAll('.prod-cat-block').forEach(b=>{
    b.style.display = (id==='all'||b.dataset.catid===id) ? 'block' : 'none';
  });
  if(id!=='all') {
    const sec = document.getElementById('sec-'+id);
    if(sec) setTimeout(()=>sec.scrollIntoView({behavior:'smooth',block:'start'}),80);
  } else {
    window.scrollTo({top:0,behavior:'smooth'});
  }
}

document.addEventListener('DOMContentLoaded', function(){
  buildProducts();
  // Handle ?cat= URL param (from search redirect)
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if(cat) {
    setTimeout(()=>{
      const btn = document.querySelector('[data-id="'+cat+'"]');
      if(btn) filterCat(cat, btn);
    }, 300);
  }
});
