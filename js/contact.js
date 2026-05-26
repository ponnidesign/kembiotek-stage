// ─── CONTACT PAGE SCRIPTS ────────────────────────────────────────────────────

// ── FAQ accordion ─────────────────────────────────────────────────────────────
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  // Close all open items first
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  // Toggle clicked item
  if (!isOpen) item.classList.add('open');
}

// ── Contact form ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  const form    = document.getElementById('cForm');
  const success = document.getElementById('fSuccess');
  const submitBtn = form ? form.querySelector('.form-submit-btn') : null;

  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // ── Client-side validation ──
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#c0392b';
        field.focus();
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    if (!valid) return;

    // ── Loading state ──
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }

    // ── Gather form data ──
    const data = {
      name:    document.getElementById('fName')?.value.trim()    || '',
      org:     document.getElementById('fOrg')?.value.trim()     || '',
      phone:   document.getElementById('fPhone')?.value.trim()   || '',
      email:   document.getElementById('fEmail')?.value.trim()   || '',
      product: document.getElementById('fProduct')?.value.trim() || '',
      type:    document.getElementById('fType')?.value.trim()    || '',
      message: document.getElementById('fMsg')?.value.trim()     || '',
    };

    // ── POST to backend ──
    try {
      const res  = await fetch('mail.php', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.ok) {
        // Show success
        form.style.display   = 'none';
        if (success) success.style.display = 'flex';
      } else {
        showFormError(json.error || 'Something went wrong. Please try again.');
        resetSubmitBtn(submitBtn);
      }

    } catch (err) {
      showFormError('Network error. Check your connection and try again.');
      resetSubmitBtn(submitBtn);
    }
  });

  // Clear red border on input
  form.querySelectorAll('.form-input').forEach(field => {
    field.addEventListener('input', function () {
      this.style.borderColor = '';
    });
  });
});

// ── Helpers ───────────────────────────────────────────────────────────────────
function showFormError(msg) {
  let err = document.getElementById('fError');
  if (!err) {
    err = document.createElement('div');
    err.id = 'fError';
    err.style.cssText = `
      margin-top: 12px; padding: 12px 16px; border-radius: 8px;
      background: #fef2f2; border: 1px solid #fca5a5;
      color: #991b1b; font-size: 13px; font-weight: 500;
    `;
    const form = document.getElementById('cForm');
    if (form) form.appendChild(err);
  }
  err.textContent = msg;
  err.style.display = 'block';
}

function resetSubmitBtn(btn) {
  if (!btn) return;
  btn.disabled = false;
  btn.innerHTML = `Send Enquiry
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"
         stroke-linecap="round" stroke-linejoin="round"
         style="width:16px;height:16px;stroke:currentColor">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>`;
}
