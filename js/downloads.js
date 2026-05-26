// ─── DOWNLOADS PAGE ───────────────────────────────────────────────────────────

// ── PDF Viewer ────────────────────────────────────────────────────────────────
function openPdf(title, url) {
  var modal      = document.getElementById('pdfModal');
  var frame      = document.getElementById('pdfFrame');
  var soon       = document.getElementById('pdfSoon');

  document.getElementById('pdfModalTitle').textContent = title;

  if (!url || url === '#') {
    frame.style.display = 'none';
    soon.style.display  = 'flex';
  } else {
    soon.style.display  = 'none';
    frame.src           = url;
    frame.style.display = 'block';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePdf() {
  var modal = document.getElementById('pdfModal');
  modal.classList.remove('open');
  document.getElementById('pdfFrame').src = '';
  document.body.style.overflow = '';
}

// ── Close PDF on ESC or backdrop click ───────────────────────────────────────
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closePdf(); }
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('pdfModal').addEventListener('click', function(e) {
    if (e.target === this) closePdf();
  });
});
