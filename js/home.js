// ─── HOME PAGE SCRIPTS ───

function buildMarquee() {
  const track = document.getElementById('mqTrack');
  if(!track) return;
  let h='';
  for(let i=0;i<2;i++) MQ_ITEMS.forEach(t => { h+=`<div class="mq-item"><span class="mq-sep"></span>${t}</div>`; });
  track.innerHTML=h;
}

// ── Scroll-stacking offer cards ──────────────────────────────────────────────
// As cards stack up, earlier cards scale down slightly — depth/parallax effect
function initOfferStack() {
  const wraps = [...document.querySelectorAll('.offer-card-wrap')];
  if (!wraps.length) return;

  // Disable on mobile — handled by CSS (position:relative)
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const BASE_TOP    = 72;   // matches CSS calc base
  const TOP_STEP    = 24;   // matches CSS calc step
  const SCALE_STEP  = 0.018; // how much each buried card shrinks
  const MIN_SCALE   = 0.90;  // floor — never shrink past this

  function update() {
    wraps.forEach((wrap, i) => {
      const stickyTop = BASE_TOP + i * TOP_STEP;
      const rect = wrap.getBoundingClientRect();

      if (rect.top <= stickyTop + 1) {
        // Count how many later cards are ALSO stuck on top of this one
        let coveredBy = 0;
        for (let j = i + 1; j < wraps.length; j++) {
          const jTop = BASE_TOP + j * TOP_STEP;
          if (wraps[j].getBoundingClientRect().top <= jTop + 1) coveredBy++;
        }
        if (coveredBy > 0) {
          const scale = Math.max(MIN_SCALE, 1 - coveredBy * SCALE_STEP);
          wrap.style.transform = `scale(${scale.toFixed(4)})`;
        } else {
          wrap.style.transform = '';
        }
      } else {
        wrap.style.transform = '';
      }
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}

// ── Testimonials carousel ─────────────────────────────────────────────────────
function initTestimonials() {
  const track  = document.getElementById('testiTrack');
  const dotsEl = document.getElementById('testiDots');
  const outer  = document.getElementById('testiOuter');
  if (!track || !outer) return;

  const cards = [...track.querySelectorAll('.testi-card')];
  const total = cards.length;
  if (!total) return;

  let current  = 0;
  let autoTimer = null;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;

  // ── Build dots ──
  if (dotsEl) {
    dotsEl.innerHTML = cards.map((_, i) =>
      `<button class="testi-dot${i === 0 ? ' active' : ''}" aria-label="Testimonial ${i + 1}"></button>`
    ).join('');
    dotsEl.querySelectorAll('.testi-dot').forEach(function(dot, i) {
      dot.addEventListener('click', function() { goTo(i); resetTimer(); });
    });
  }

  function updateDots(idx) {
    if (!dotsEl) return;
    dotsEl.querySelectorAll('.testi-dot').forEach(function(d, i) {
      d.classList.toggle('active', i === idx);
    });
  }

  function goTo(idx) {
    current = ((idx % total) + total) % total;
    const card = cards[current];
    // Centre the card inside the outer container
    const outerW = outer.offsetWidth;
    const cardW  = card.offsetWidth;
    const cardLeft = card.offsetLeft;
    const target = cardLeft - (outerW - cardW) / 2;
    outer.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
    updateDots(current);
  }

  function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(function() { goTo(current + 1); }, 5000);
  }

  resetTimer();

  // ── Pause on hover ──
  outer.addEventListener('mouseenter', function() { clearInterval(autoTimer); });
  outer.addEventListener('mouseleave', function() { resetTimer(); });

  // ── Mouse drag ──
  outer.addEventListener('mousedown', function(e) {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartScroll = outer.scrollLeft;
    outer.classList.add('is-dragging');
    clearInterval(autoTimer);
  });
  window.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    outer.scrollLeft = dragStartScroll - (e.clientX - dragStartX);
  });
  window.addEventListener('mouseup', function(e) {
    if (!isDragging) return;
    isDragging = false;
    outer.classList.remove('is-dragging');
    var dx = e.clientX - dragStartX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
    else goTo(current);
    resetTimer();
  });

  // ── Touch swipe ──
  var touchStartX = 0;
  outer.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    clearInterval(autoTimer);
  }, { passive: true });
  outer.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
    resetTimer();
  }, { passive: true });

  // ── Detect card in view on native scroll (mobile two-finger swipe) ──
  outer.addEventListener('scroll', function() {
    var centre = outer.scrollLeft + outer.offsetWidth / 2;
    var closest = 0, closestDist = Infinity;
    cards.forEach(function(card, i) {
      var dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - centre);
      if (dist < closestDist) { closestDist = dist; closest = i; }
    });
    if (closest !== current) { current = closest; updateDots(current); }
  }, { passive: true });
}

// ── Industries reveal — chips fly in from left/right, flash highlight ─────────
function initIndustriesReveal() {
  const chips = document.querySelectorAll('.ind-chip');
  if (!chips.length) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;

      const chip = entry.target;
      chip.classList.add('ind-visible');

      // After the spring animation lands, flash the highlight then remove it
      const delayMs = parseFloat(
        chip.style.getPropertyValue('--delay') || '0'
      ) * 1000;

      setTimeout(function() {
        chip.classList.add('ind-lit');
        setTimeout(function() { chip.classList.remove('ind-lit'); }, 900);
      }, delayMs + 580);

      observer.unobserve(chip);
    });
  }, { threshold: 0.25, rootMargin: '0px 0px -60px 0px' });

  chips.forEach(function(chip) { observer.observe(chip); });
}

document.addEventListener('DOMContentLoaded', function(){
  buildMarquee();
  initOfferStack();
  initIndustriesReveal();
  initTestimonials();
});
