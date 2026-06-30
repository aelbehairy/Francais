(function(){
  'use strict';

  var HISTORY_KEY = 'pron_history';
  var state = {
    targetSentence:'', recognition:null, isListening:false,
    finalTranscript:'', interimTranscript:'', capturedTranscript:'', lastScore:0,
    lastComparison:null, initialized:false
  };
  var dom = {};

  function initPronunciationPage(){
    if(state.initialized) return;
    collectDom();
    var optional = { statSessions:true, statAvg:true, statBest:true };
    var missing = Object.keys(dom).filter(function(key){ return !optional[key] && !dom[key]; });
    if(missing.length){ showSetupError(missing); return; }
    initSpeechRecognition();
    loadHistory();
    updateHeroStats();
    bindEvents();
    state.initialized = true;
  }

  function collectDom(){
    dom.sentenceSelect = document.getElementById('sentence-select');
    dom.customInput = document.getElementById('custom-input');
    dom.useSentenceBtn = document.getElementById('use-sentence-btn');
    dom.targetSentence = document.getElementById('target-sentence');
    dom.listenBtn = document.getElementById('listen-btn');
    dom.micBtn = document.getElementById('mic-btn');
    dom.micStatus = document.getElementById('mic-status');
    dom.transcriptArea = document.getElementById('transcript-area');
    dom.transcriptText = document.getElementById('transcript-text');
    dom.evaluateBtn = document.getElementById('evaluate-btn');
    dom.resultsCard = document.getElementById('results-card');
    dom.scoreProgress = document.getElementById('score-progress');
    dom.scoreNumber = document.getElementById('score-number');
    dom.scoreMessage = document.getElementById('score-message');
    dom.countCorrect = document.getElementById('count-correct');
    dom.countWrong = document.getElementById('count-wrong');
    dom.countMissing = document.getElementById('count-missing');
    dom.highlightSection = document.getElementById('highlight-section');
    dom.comparisonSection = document.getElementById('comparison-section');
    dom.retryBtn = document.getElementById('retry-btn');
    dom.saveBtn = document.getElementById('save-btn');
    dom.clearHistoryBtn = document.getElementById('clear-history-btn');
    dom.historyList = document.getElementById('history-list');
    dom.statSessions = document.getElementById('pron-stat-sessions');
    dom.statAvg = document.getElementById('pron-stat-avg');
    dom.statBest = document.getElementById('pron-stat-best');
  }

  function showSetupError(missing){
    var panel = document.getElementById('panel-pronunciation');
    if(!panel) return;
    var error = document.createElement('div');
    error.style.cssText = 'margin:20px auto;max-width:880px;padding:14px 16px;border-radius:8px;background:#fdecea;color:#991b1b;font-weight:700';
    error.textContent = 'Pronunciation setup error: missing ' + missing.join(', ');
    panel.prepend(error);
  }

  function initSpeechRecognition(){
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition){
      dom.micStatus.textContent = 'La reconnaissance vocale nest pas disponible. Utilisez Chrome ou Edge.';
      dom.micBtn.disabled = true;
      return;
    }
    var rec = new SpeechRecognition();
    rec.lang = 'fr-FR';
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.onresult = function(event){
      var interim = '';
      for(var i = event.resultIndex; i < event.results.length; i++){
        var text = event.results[i][0].transcript;
        if(event.results[i].isFinal) state.finalTranscript += text + ' ';
        else interim += text;
      }
      state.interimTranscript = interim;
      state.capturedTranscript = (state.finalTranscript + ' ' + state.interimTranscript).trim();
      renderTranscript();
    };
    rec.onend = function(){ if(state.isListening) stopListening(true); };
    rec.onerror = function(event){
      var messages = { 'no-speech':'Aucune voix detectee. Reessayez.', 'audio-capture':'Microphone indisponible.', 'not-allowed':'Autorisez le microphone pour pratiquer.' };
      dom.micStatus.textContent = messages[event.error] || 'Erreur de reconnaissance vocale.';
      stopListening(false);
    };
    state.recognition = rec;
  }

  function bindEvents(){
    dom.sentenceSelect.addEventListener('change', function(){ dom.customInput.value = ''; });
    dom.customInput.addEventListener('input', function(){ dom.sentenceSelect.value = ''; });
    dom.useSentenceBtn.addEventListener('click', function(){
      var sentence = (dom.customInput.value || dom.sentenceSelect.value || '').trim();
      if(!sentence){ flashError(dom.useSentenceBtn, 'Choisissez une phrase'); return; }
      setTargetSentence(sentence);
    });
    dom.listenBtn.addEventListener('click', function(){ speakText(state.targetSentence); });
    dom.micBtn.addEventListener('click', function(){ state.isListening ? stopListening(true) : startListening(); });
    dom.evaluateBtn.addEventListener('click', function(){ showResults(state.capturedTranscript); });
    dom.retryBtn.addEventListener('click', resetForRetry);
    dom.saveBtn.addEventListener('click', saveCurrentResult);
    dom.clearHistoryBtn.addEventListener('click', function(){
      if(window.confirm('Effacer tout lhistorique de pratique ?')){
        localStorage.removeItem(HISTORY_KEY); loadHistory(); updateHeroStats();
      }
    });
  }

  function setTargetSentence(sentence){
    stopListening(false);
    state.targetSentence = sentence;
    state.finalTranscript = ''; state.interimTranscript = ''; state.capturedTranscript = ''; state.lastScore = 0; state.lastComparison = null;
    dom.targetSentence.textContent = sentence;
    dom.listenBtn.disabled = false;
    dom.transcriptArea.hidden = true;
    dom.transcriptText.textContent = '';
    dom.evaluateBtn.hidden = true;
    dom.resultsCard.hidden = true;
    dom.micStatus.textContent = 'Appuyez sur le micro et repetez la phrase.';
  }

  function speakText(text){
    if(!text || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR'; utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  }

  function startListening(){
    if(!state.targetSentence){ flashError(dom.useSentenceBtn, 'Choisissez une phrase'); return; }
    if(!state.recognition) return;
    state.finalTranscript = ''; state.interimTranscript = ''; state.capturedTranscript = '';
    renderTranscript();
    dom.transcriptArea.hidden = false;
    dom.evaluateBtn.hidden = true;
    state.isListening = true;
    dom.micBtn.classList.add('listening');
    dom.micStatus.textContent = 'Ecoute... parlez en francais.';
    try { state.recognition.start(); }
    catch(error){ dom.micStatus.textContent = 'Le micro est deja actif.'; }
  }

  function stopListening(allowEvaluate){
    if(state.recognition && state.isListening){ try { state.recognition.stop(); } catch(error){} }
    state.isListening = false;
    dom.micBtn.classList.remove('listening');
    state.capturedTranscript = (state.finalTranscript + ' ' + state.interimTranscript).trim();
    if(allowEvaluate && state.capturedTranscript){
      dom.micStatus.textContent = 'Voix capturee. Vous pouvez evaluer.';
      dom.evaluateBtn.hidden = false;
    } else if(!state.capturedTranscript) {
      dom.micStatus.textContent = 'Aucune phrase capturee. Reessayez.';
    }
    renderTranscript();
  }

  function renderTranscript(){
    var finalText = escapeHtml(state.finalTranscript.trim());
    var interim = escapeHtml(state.interimTranscript.trim());
    dom.transcriptText.innerHTML = finalText + (interim ? ' <span class="transcript-interim">' + interim + '</span>' : '');
  }

  function tokenize(text){
    return String(text || '').split(/\s+/).filter(Boolean).map(function(word){
      return { original: word, norm: normalizeWord(word) };
    }).filter(function(item){ return item.norm; });
  }

  function normalizeWord(word){
    return String(word || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[']/g,'').replace(/[^a-z0-9]/g,'');
  }

  function compareWords(target, spoken){
    var a = tokenize(target), b = tokenize(spoken), m = a.length, n = b.length;
    var dp = Array.from({length:m+1}, function(){ return Array(n+1).fill(0); });
    for(var i=0;i<=m;i++) dp[i][0]=i;
    for(var j=0;j<=n;j++) dp[0][j]=j;
    for(i=1;i<=m;i++){
      for(j=1;j<=n;j++){
        var cost = a[i-1].norm === b[j-1].norm ? 0 : 1;
        dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost);
      }
    }
    var result = [];
    i=m; j=n;
    while(i>0 || j>0){
      if(i>0 && j>0 && dp[i][j] === dp[i-1][j-1] + (a[i-1].norm === b[j-1].norm ? 0 : 1)){
        result.unshift({target:a[i-1].original, spoken:b[j-1].original, status:a[i-1].norm === b[j-1].norm ? 'correct' : 'wrong'}); i--; j--;
      } else if(i>0 && dp[i][j] === dp[i-1][j] + 1){
        result.unshift({target:a[i-1].original, spoken:'', status:'missing'}); i--;
      } else { j--; }
    }
    return result;
  }

  function showResults(spoken){
    if(!state.targetSentence){ return; }
    if(!spoken){ flashError(dom.evaluateBtn, 'Parlez dabord'); return; }
    var comparison = compareWords(state.targetSentence, spoken);
    var total = comparison.length || 1;
    var correct = comparison.filter(function(x){ return x.status === 'correct'; }).length;
    var wrong = comparison.filter(function(x){ return x.status === 'wrong'; }).length;
    var missing = comparison.filter(function(x){ return x.status === 'missing'; }).length;
    var score = Math.round((correct / total) * 100);
    state.lastScore = score;
    state.lastComparison = comparison;
    dom.countCorrect.textContent = correct;
    dom.countWrong.textContent = wrong;
    dom.countMissing.textContent = missing;
    dom.scoreNumber.textContent = score;
    dom.scoreMessage.textContent = getScoreMessage(score);
    setScoreClass(score);
    dom.highlightSection.innerHTML = comparison.map(function(item){
      var spokenLabel = item.status === 'wrong' ? '<span class="hl-spoken">→ ' + escapeHtml(item.spoken) + '</span>' : '';
      return '<span class="hl-word ' + item.status + '">' + escapeHtml(item.target) + spokenLabel + '</span>';
    }).join('');
    dom.comparisonSection.innerHTML = comparison.map(function(item){
      var sub = item.status === 'wrong' ? '<span class="spoken-word">' + escapeHtml(item.spoken) + '</span>' : '';
      return '<span class="word-chip ' + item.status + '">' + escapeHtml(item.target) + sub + '</span>';
    }).join('');
    dom.resultsCard.hidden = false;
    requestAnimationFrame(function(){ dom.resultsCard.scrollIntoView({behavior:'smooth', block:'start'}); });
  }

  function setScoreClass(score){
    var className = score < 40 ? 'clr-poor' : score < 60 ? 'clr-fair' : score < 75 ? 'clr-good' : score < 90 ? 'clr-great' : 'clr-perfect';
    dom.scoreProgress.setAttribute('class', className);
    dom.scoreProgress.style.strokeDashoffset = '264';
    dom.scoreProgress.getBoundingClientRect();
    dom.scoreProgress.style.strokeDashoffset = String(264 - (score / 100 * 264));
    dom.scoreNumber.className = className;
  }

  function getScoreMessage(score){
    if(score < 40) return 'Continuez, vous allez progresser.';
    if(score < 60) return 'Pas mal, retravaillez les mots rouges.';
    if(score < 75) return 'Bon effort, la phrase est presque claire.';
    if(score < 90) return 'Tres bonne prononciation.';
    return 'Excellent, prononciation tres precise.';
  }

  function resetForRetry(){
    state.finalTranscript = ''; state.interimTranscript = ''; state.capturedTranscript = '';
    dom.transcriptArea.hidden = true; dom.evaluateBtn.hidden = true; dom.resultsCard.hidden = true;
    dom.transcriptText.textContent = '';
    dom.micStatus.textContent = 'Appuyez sur le micro et repetez la phrase.';
  }

  function readHistory(){
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
    catch(error){ return []; }
  }

  function saveCurrentResult(){
    if(!state.targetSentence || !state.lastComparison){ flashError(dom.saveBtn, 'Rien a enregistrer'); return; }
    var history = readHistory();
    history.unshift({sentence:state.targetSentence, score:state.lastScore, date:new Date().toISOString()});
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0,10)));
    loadHistory(); updateHeroStats(); flashSaved(dom.saveBtn);
  }

  function loadHistory(){
    if(!dom.historyList) return;
    var history = readHistory();
    if(!history.length){ dom.historyList.innerHTML = '<div class="empty-history">Aucune session enregistree pour le moment.</div>'; return; }
    dom.historyList.innerHTML = history.slice(0,10).map(function(item, index){
      var cls = item.score < 40 ? 'clr-poor' : item.score < 60 ? 'clr-fair' : item.score < 75 ? 'clr-good' : item.score < 90 ? 'clr-great' : 'clr-perfect';
      return '<button class="history-item" type="button" data-index="' + index + '"><span class="history-score ' + cls + '">' + item.score + '%</span><span><span class="history-sentence">' + escapeHtml(item.sentence) + '</span><span class="history-date">' + new Date(item.date).toLocaleString() + '</span></span><span class="replay">↺</span></button>';
    }).join('');
    dom.historyList.querySelectorAll('.history-item').forEach(function(row){
      row.addEventListener('click', function(){
        var item = history[Number(row.dataset.index)];
        if(item) setTargetSentence(item.sentence);
      });
    });
  }

  function updateHeroStats(){
    if(!dom.statSessions) return;
    var history = readHistory();
    var sessions = history.length;
    var avg = sessions ? Math.round(history.reduce(function(sum, item){ return sum + Number(item.score || 0); }, 0) / sessions) : 0;
    var best = sessions ? Math.max.apply(null, history.map(function(item){ return Number(item.score || 0); })) : 0;
    animateCounter(dom.statSessions, sessions, ''); animateCounter(dom.statAvg, avg, '%'); animateCounter(dom.statBest, best, '%');
  }

  function animateCounter(el, target, suffix){
    var start = performance.now();
    function tick(now){
      var t = Math.min(1, (now - start) / 700);
      var eased = 1 - Math.pow(1 - t, 2);
      el.textContent = Math.round(target * eased) + suffix;
      if(t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function flashError(btn, msg){
    if(!btn) return;
    var old = btn.innerHTML;
    btn.innerHTML = msg;
    btn.style.background = 'linear-gradient(135deg,#c0392b,#e11d48)';
    setTimeout(function(){ btn.innerHTML = old; btn.style.background = ''; }, 1800);
  }

  function flashSaved(btn){
    var old = btn.innerHTML;
    btn.innerHTML = '✓ Enregistre';
    setTimeout(function(){ btn.innerHTML = old; }, 1200);
  }

  function escapeHtml(str){
    return String(str || '').replace(/[&<>"]/g, function(ch){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]; });
  }

  window.initPronunciationPage = initPronunciationPage;
  document.addEventListener('DOMContentLoaded', function(){
    if(document.getElementById('panel-pronunciation')) initPronunciationPage();
  });
})();