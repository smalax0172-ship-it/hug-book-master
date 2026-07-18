const levelScreen = document.querySelector('#levelScreen');
const tutorScreen = document.querySelector('#tutorScreen');
const levelBadge = document.querySelector('#levelBadge');
const transcriptEl = document.querySelector('#transcript');
const form = document.querySelector('#chatForm');
const input = document.querySelector('#studentInput');
const stuckBtn = document.querySelector('#stuckBtn');
const gotItBtn = document.querySelector('#gotItBtn');
const sendBtn = document.querySelector('#sendBtn');
const barsEl = document.querySelector('#bars');
const recordEl = document.querySelector('#record');
const stages = [...document.querySelectorAll('.progress li')];

let level = '';
let turns = [];
let attemptExists = false;
let ownershipMode = false;
let idleTimer;
const signalCounts = { STALL: 0, OFFTASK: 0, STUCK: 0 };
const sessionFlags = { strikes: [], safety: '' };

function setStage(name) {
  stages.forEach((stage) => stage.classList.toggle('active', stage.dataset.stage === name));
}

function addMessage(role, content) {
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  div.textContent = content;
  transcriptEl.appendChild(div);
  transcriptEl.scrollTop = transcriptEl.scrollHeight;
}

function addBar(kind, text, id) {
  if (id && document.querySelector(`[data-bar-id="${id}"]`)) return;
  const div = document.createElement('div');
  div.className = `bar ${kind}`;
  if (id) div.dataset.barId = id;
  div.textContent = text;
  barsEl.prepend(div);
}

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => addBar('yellow', 'Teacher needed: no typing for five minutes.', 'idle'), 5 * 60 * 1000);
}

function stripSignal(text) {
  const match = text.match(/\[SIG:([A-Z0-9]+)]\s*$/);
  return { display: text.replace(/\s*\[SIG:[A-Z0-9]+]\s*$/, '').trim(), signal: match ? match[1] : 'OK' };
}

function handleSignal(signal) {
  if (signal === 'CLEARED') addBar('green', `That clears the ${level} bar.`, 'cleared');
  if (['WARN1', 'WARN2', 'WARN3'].includes(signal)) {
    sessionFlags.strikes.push(signal);
    addBar('red', `Strike ${signal.slice(-1)} recorded.`, signal);
  }
  if (signal === 'WARN3') addBar('yellow', 'Teacher needed: third strike.', 'warn3-teacher');
  if (signal === 'URGENT' || signal === 'DISCLOSURE') {
    sessionFlags.safety = signal;
    addBar('dark-red', signal === 'DISCLOSURE' ? 'Safety flag: teacher is being notified now.' : 'Immediate safety flag: teacher is being notified now.', `safety-${signal}`);
  }
  if (signal === 'FRUSTRATED') addBar('yellow', 'Teacher needed: student seems frustrated.', 'frustrated');
  if (signalCounts[signal] !== undefined) {
    signalCounts[signal] += 1;
    if (signalCounts[signal] >= 2) addBar('yellow', `Teacher needed: repeated ${signal.toLowerCase()} signal.`, `repeat-${signal}`);
  }
}

async function modelCall(mode, modelTurns) {
  const response = await fetch('/api/model', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode, level, turns: modelTurns })
  });
  const text = await response.text();
  let data;
  try { data = JSON.parse(text); } catch { throw new Error(text); }
  if (!response.ok) throw new Error(data.error || text);
  return data.content;
}

async function sendStudentMessage(content) {
  if (!content.trim()) return;
  resetIdleTimer();
  attemptExists = true;
  gotItBtn.classList.remove('hidden');
  setStage(ownershipMode ? 'Own it' : 'Reasoning');
  const studentTurn = { role: 'user', content: content.trim() };
  turns.push(studentTurn);
  addMessage('user', studentTurn.content);
  input.value = '';
  setBusy(true);
  try {
    if (ownershipMode) await buildRecord();
    else {
      const raw = await modelCall('tutor', turns.slice(-14));
      const { display, signal } = stripSignal(raw);
      turns.push({ role: 'assistant', content: display });
      addMessage('assistant', display);
      handleSignal(signal);
    }
  } catch (error) {
    addBar('red', `Model error: ${error.message}`, 'model-error-' + Date.now());
  } finally {
    setBusy(false);
  }
}

async function buildRecord() {
  setStage('Record');
  const raw = await modelCall('record', turns.slice(-14));
  let record;
  try { record = JSON.parse(raw); } catch { throw new Error(`Record JSON parse failed: ${raw}`); }
  renderRecord(record);
  form.classList.add('hidden');
}

function renderRecord(record) {
  const verdict = String(record.ownership || 'Not met');
  const verdictClass = verdict === 'Met' ? 'met' : verdict === 'Partially met' ? 'partial' : 'not';
  recordEl.classList.remove('hidden');
  recordEl.innerHTML = `
    <h2>Reasoning Record: ${escapeHtml(level)}</h2>
    <p><span class="verdict ${verdictClass}">${escapeHtml(verdict)}</span></p>
    <dl>
      <div><dt>Start</dt><dd>${escapeHtml(record.start)}</dd></div>
      <div><dt>Gap</dt><dd>${escapeHtml(record.gap)}</dd></div>
      <div><dt>Student moves</dt><dd><ul>${(record.moves || []).map((m) => `<li>${escapeHtml(m)}</li>`).join('')}</ul></dd></div>
      <div><dt>Landed</dt><dd>${escapeHtml(record.landed)}</dd></div>
      <div><dt>Evidence</dt><dd>${escapeHtml(record.evidence)}</dd></div>
      <div><dt>Engagement</dt><dd>${escapeHtml(record.engagement)}</dd></div>
      <div><dt>Strikes</dt><dd>${sessionFlags.strikes.length ? sessionFlags.strikes.join(', ') : 'None'}</dd></div>
      <div><dt>Safety flag</dt><dd>${sessionFlags.safety || 'None'}</dd></div>
    </dl>`;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
}

function setBusy(isBusy) {
  [sendBtn, stuckBtn, gotItBtn, input].forEach((el) => { el.disabled = isBusy; });
}

document.querySelectorAll('[data-level]').forEach((button) => {
  button.addEventListener('click', () => {
    level = button.dataset.level;
    levelBadge.textContent = level;
    levelScreen.classList.add('hidden');
    tutorScreen.classList.remove('hidden');
    input.focus();
    resetIdleTimer();
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  sendStudentMessage(input.value);
});

stuckBtn.addEventListener('click', () => {
  const text = attemptExists ? "I'm stuck on the next step." : "I'm stuck before I can make a guess.";
  sendStudentMessage(text);
});

gotItBtn.addEventListener('click', () => {
  if (!attemptExists) return;
  ownershipMode = true;
  setStage('Own it');
  const prompt = 'Without scrolling up, restate the whole idea in your own words. What happened to the salt, and why?';
  turns.push({ role: 'assistant', content: prompt });
  addMessage('assistant', prompt);
  input.focus();
});

input.addEventListener('input', resetIdleTimer);
