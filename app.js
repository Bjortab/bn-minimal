let currentLevel = 1;

function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)); }

qsa('.chip').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    qsa('.chip').forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected');
    currentLevel = Number(btn.dataset.level);
  });
});

qs('#btn-intro').addEventListener('click', ()=>{
  const out = qs('#output');
  out.textContent = `▶️ Spelar introduktion för nivå ${currentLevel} (demo).`;
});

qs('#btn-generate').addEventListener('click', async ()=>{
  const idea = qs('#idea').value.trim();
  const out = qs('#output');
  if(!idea){ out.textContent = 'Skriv en idé först.'; return; }
  out.textContent = '⏳ Skickar till backend...';
  try {
    const res = await fetch('/api/hello', { method: 'POST', body: idea });
    const text = await res.text();
    out.textContent = `✅ Backend svar:\n${text}`;
  } catch (e) {
    out.textContent = `❌ Fel: ${e.message}`;
  }
});

qs('#btn-ping').addEventListener('click', async ()=>{
  const out = qs('#output');
  out.textContent = '⏳ Pingar backend...';
  try {
    const res = await fetch('/api/ping');
    const data = await res.json();
    out.textContent = `✅ /api/ping OK\n${JSON.stringify(data, null, 2)}`;
  } catch (e) {
    out.textContent = `❌ Fel: ${e.message}`;
  }
});
