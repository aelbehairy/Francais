// ── Wrap tables for mobile horizontal scroll ──
document.querySelectorAll('.tbl').forEach(function(t){
  if(!t.parentElement.classList.contains('tbl-wrap')){
    var wrap = document.createElement('div');
    wrap.className = 'tbl-wrap';
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
  }
});

// ── Stars ──
var sc = document.getElementById('starCanvas');
function drawStars(){
  sc.width = window.innerWidth;
  sc.height = sc.parentElement.offsetHeight;
  var ctx = sc.getContext('2d');
  for(var i=0; i<180; i++){
    ctx.beginPath();
    ctx.arc(Math.random()*sc.width, Math.random()*sc.height, Math.random()*1.4, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(255,255,255,'+(Math.random()*.6+.1)+')';
    ctx.fill();
  }
}
window.addEventListener('resize', drawStars);
drawStars();

// ── Lire facile page links ──
var lirePages = [
  {title:'Paris', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/paris-texte-francais-facile.html'},
  {title:'Mont Saint-Michel', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/mont-saint-michel-texte-fle.html'},
  {title:"La ville d'Antibes", group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/ville-antibes-texte-fle.html'},
  {title:'La Rochelle', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/la-rochelle.html'},
  {title:'Ville de Tours', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/ville-de-tours-texte-francais-facile.html'},
  {title:'Lyon', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/lyon.html'},
  {title:'Une journée en Bourgogne', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/une-journee-en-bourgogne-2.html'},
  {title:'Morbihan', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/morbihan.html'},
  {title:'Tours', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/tours.html'},
  {title:'Saint-Malo', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/saint-malo.html'},
  {title:'Le Val de Loire', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/le_val_de_loire.html'},
  {title:'Le Médoc', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/le-medoc.html'},
  {title:'Villes françaises', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/villes-francaises.html'},
  {title:'Les régions françaises', group:'facile', url:'https://www.podcastfrancaisfacile.com/culture-societe/les-regions-francaises-1.html'},
  {title:'La Louisiane et la Nouvelle-Orléans', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/la-louisiane-et-la-nouvelle-orleans.html'},
  {title:'La Sologne', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/la-sologne.html'}
];

function renderLireLinks(){
  var grid = document.getElementById('lireLinkGrid');
  if(!grid) return;
  grid.innerHTML = '';
  lirePages.forEach(function(page){
    var link = document.createElement('a');
    link.className = 'lire-link';
    link.href = page.url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.innerHTML = '<span class="lire-link-icon">🎧</span>' +
      '<span class="lire-link-title">'+escapeHtml(page.title)+'</span>' +
      '<span class="lire-link-meta">'+escapeHtml(page.group)+'</span>';
    grid.appendChild(link);
  });
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, function(ch){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
  });
}

function cleanLireTitle(title){
  return String(title).replace(/\s+-\s+Texte.*$/i, '').trim();
}

// ── iPad / iOS: ensure buttons respond to touch ──
function updateRoute(panel, section){
  if(!window.history || !window.URLSearchParams) return;
  var url = new URL(window.location.href);
  if(panel) url.searchParams.set('panel', panel);
  else url.searchParams.delete('panel');
  if(section) url.searchParams.set('section', section);
  else url.searchParams.delete('section');
  var query = url.searchParams.toString();
  window.history.replaceState({}, '', url.pathname + (query ? '?' + query : '') + url.hash);
}

function getRoute(){
  if(!window.URLSearchParams) return {panel:null, section:null};
  var params = new URLSearchParams(window.location.search);
  return {
    panel: params.get('panel'),
    section: params.get('section')
  };
}

function restoreRoute(){
  var route = getRoute();
  if(!route.panel) return;
  var topBtn = document.querySelector(".top-tab[onclick*=\"" + route.panel + "\"]");
  if(!document.getElementById('panel-' + route.panel)) return;

  if(route.panel === 'temps'){
    showGrammarChild('temps', topBtn);
    if(route.section) showSec(route.section, document.querySelector("#pills-temps .pill[onclick*=\"'" + route.section + "'\"]"), 'temps');
  } else if(route.panel === 'grammaire'){
    switchTop('grammaire', topBtn);
    if(route.section) showSec(route.section, document.querySelector("#pills-grammaire .pill[onclick*=\"'" + route.section + "'\"]"), 'grammaire');
  } else if(route.panel === 'oral'){
    switchTop('oral', topBtn);
    if(route.section) showOral(route.section, document.querySelector("#pills-mariane .pill[onclick*=\"'" + route.section + "'\"]"));
  } else if(route.panel === 'phonetique'){
    switchTop('phonetique', topBtn);
    if(route.section) showPhon(route.section, document.querySelector("#pills-phonetique .pill[onclick*=\"'" + route.section + "'\"]"));
  } else {
    switchTop(route.panel, topBtn);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  // Top tabs touch
  document.querySelectorAll('.top-tab').forEach(function(btn){
    btn.addEventListener('touchend', function(e){
      e.preventDefault();
      btn.click();
    }, {passive:false});
  });
  // Nav pills touch
  document.querySelectorAll('.pill').forEach(function(btn){
    btn.addEventListener('touchend', function(e){
      e.preventDefault();
      btn.click();
    }, {passive:false});
  });
  // Q-headers touch
  document.querySelectorAll('.q-header').forEach(function(hdr){
    hdr.addEventListener('touchend', function(e){
      e.preventDefault();
      toggleQ(hdr);
    }, {passive:false});
  });
  renderLireLinks();
  restoreRoute();
});

// ── Dashboard Sidebar ──
var sidebar = document.getElementById('dashboard-sidebar');
var sidebarToggle = document.getElementById('sidebar-toggle');
var sidebarPin = document.getElementById('sidebar-pin');
var sidebarSearch = document.getElementById('sidebar-search');
var isPinned = false;
var mobileSidebarQuery = window.matchMedia('(max-width: 640px)');

function setSidebarActive(target){
  if(!sidebar || !target) return;
  sidebar.querySelectorAll('[data-sidebar-target]').forEach(function(item){
    item.classList.toggle('active', item.getAttribute('data-sidebar-target') === target);
  });
}

function closeSidebar(){
  if(!sidebar) return;
  sidebar.classList.remove('open');
  if(sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'false');
}

function openSidebar(){
  if(!sidebar) return;
  sidebar.classList.add('open');
  if(sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'true');
}

if(sidebar && sidebarToggle && sidebarPin){
  sidebar.querySelectorAll('.sidebar-link').forEach(function(item){
    var text = item.querySelector('.sidebar-text');
    if(text) item.setAttribute('data-label', text.textContent.trim());
  });

  sidebarToggle.addEventListener('click', function() {
    if(mobileSidebarQuery.matches){
      if(sidebar.classList.contains('open')) closeSidebar();
      else openSidebar();
      return;
    }
    isPinned = !isPinned;
    if(isPinned) openSidebar();
    else closeSidebar();
  });

  sidebarPin.addEventListener('click', function() {
    isPinned = !isPinned;
    if(isPinned) openSidebar();
    else closeSidebar();
    sidebarPin.classList.toggle('active', isPinned);
  });

  sidebar.addEventListener('mouseleave', function() {
    if(!isPinned && !mobileSidebarQuery.matches) closeSidebar();
  });

  sidebar.querySelectorAll('[data-sidebar-target]').forEach(function(item){
    item.addEventListener('click', function(){
      if(mobileSidebarQuery.matches) closeSidebar();
    });
  });

  document.addEventListener('pointerdown', function(event){
    if(!mobileSidebarQuery.matches || !sidebar.classList.contains('open')) return;
    if(!sidebar.contains(event.target)) closeSidebar();
  });

  if(sidebarSearch){
    sidebarSearch.addEventListener('input', function(){
      var term = sidebarSearch.value.trim().toLowerCase();
      sidebar.querySelectorAll('.sidebar-resources .sidebar-link').forEach(function(link){
        var text = link.textContent.toLowerCase();
        link.style.display = text.indexOf(term) > -1 ? '' : 'none';
      });
    });
  }
}

// ── Scroll to nav ──
function scrollToNav(panelId){
  var nav = document.querySelector('#'+panelId+' .nav-wrap');
  if(nav){ window.scrollTo({top: nav.offsetTop - 10, behavior:'smooth'}); }
}

// ── Activate first section in a panel ──
function activateFirstSec(panelId, prefix){
  var secs = document.querySelectorAll('#'+panelId+' .sec');
  var panelKey = panelId.replace('panel-','');
  var scopedPills = document.getElementById('pills-'+panelKey);
  var pills = scopedPills ? scopedPills.querySelectorAll('.pill') : document.querySelectorAll('#'+panelId+' .pill');
  secs.forEach(function(s){ s.classList.remove('visible'); });
  pills.forEach(function(b){ b.classList.remove('active'); });
  if(secs.length > 0) secs[0].classList.add('visible');
  if(pills.length > 0) pills[0].classList.add('active');
}

// ── Top Tab switch ──
function switchTop(tab, btn){
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.top-tab').forEach(function(b){ b.classList.remove('active'); });
  var panel = document.getElementById('panel-'+tab);
  if(panel){ panel.classList.add('active'); }
  if(btn) btn.classList.add('active');
  setSidebarActive(tab);
  if(tab === 'grammaire') activateFirstSec('panel-grammaire','g-');
  else if(tab === 'oral') showMariane(document.querySelector('#pills-oral .pill'));
  else if(tab === 'phonetique') activateFirstSec('panel-phonetique','p-');
  if(tab !== 'oral') updateRoute(tab, null);
  setTimeout(function(){ scrollToNav('panel-'+tab); }, 50);
}

// ── Grammaire child panels ──
function showGrammarChild(panelName, btn){
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.top-tab').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('#pills-grammaire .pill').forEach(function(b){ b.classList.remove('active'); });
  var grammarTop = document.querySelector('.top-tab[onclick*="grammaire"]');
  if(grammarTop) grammarTop.classList.add('active');
  if(btn) btn.classList.add('active');
  setSidebarActive(panelName);
  var panel = document.getElementById('panel-'+panelName);
  if(panel) panel.classList.add('active');
  if(panel){
    panel.querySelectorAll('.first-child-tabs .pill').forEach(function(b){ b.classList.remove('active'); });
    var activeChild = panel.querySelector(".first-child-tabs .pill[onclick*=\""+panelName+"\"]");
    if(activeChild) activeChild.classList.add('active');
  }
  if(panelName === 'temps') activateFirstSec('panel-temps','t-');
  updateRoute(panelName, panelName === 'temps' ? 'present' : null);
  setTimeout(function(){ scrollToNav('panel-'+panelName); }, 50);
}

// ── Grammaire / Temps section switch ──
function showSec(id, btn, panel){
  var pre = panel === 'grammaire' ? 'g-' : 't-';
  document.querySelectorAll('#panel-'+panel+' .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-'+panel+' .pill').forEach(function(b){ b.classList.remove('active'); });
  var sec = document.getElementById(pre+id);
  if(sec) sec.classList.add('visible');
  if(btn) btn.classList.add('active');
  updateRoute(panel, id);
  scrollToNav('panel-'+panel);
}

// ── Oral section switch ──
function showOral(id, btn){
  document.querySelectorAll('#panel-oral .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-mariane .pill').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  var oralPanel = document.getElementById('panel-oral');
  if(oralPanel) oralPanel.classList.add('active');
  document.querySelectorAll('#pills-oral .pill').forEach(function(b){ b.classList.remove('active'); });
  var marianeTab = document.querySelector('#pills-oral .pill');
  if(marianeTab) marianeTab.classList.add('active');
  var sec = document.getElementById('o-'+id);
  if(sec) sec.classList.add('visible');
  if(btn) btn.classList.add('active');
  updateRoute('oral', id);
  scrollToNav('panel-oral');
}

function showMariane(btn){
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('#pills-oral .pill').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('#panel-oral .sec').forEach(function(s){ s.classList.remove('visible'); });
  var oralPanel = document.getElementById('panel-oral');
  if(oralPanel) oralPanel.classList.add('active');
  var marianeMainTab = document.querySelector('#pills-oral .pill');
  if(marianeMainTab) marianeMainTab.classList.add('active');
  if(btn && !btn.closest('#pills-oral')) btn.classList.add('active');
  var firstQuestion = document.querySelector('#pills-mariane .pill');
  document.querySelectorAll('#pills-mariane .pill').forEach(function(b){ b.classList.remove('active'); });
  if(firstQuestion) firstQuestion.classList.add('active');
  var firstSec = document.getElementById('o-routine');
  if(firstSec) firstSec.classList.add('visible');
  updateRoute('oral', 'routine');
  scrollToNav('panel-oral');
}

// ── Phonétique section switch ──
function showPhon(id, btn){
  document.querySelectorAll('#panel-phonetique .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-phonetique .pill').forEach(function(b){ b.classList.remove('active'); });
  var sec = document.getElementById('p-'+id);
  if(sec) sec.classList.add('visible');
  if(btn) btn.classList.add('active');
  updateRoute('phonetique', id);
  scrollToNav('panel-phonetique');
}

// ── Q-Card toggle ──
function toggleQ(hdr){
  hdr.closest('.q-card').classList.toggle('open');
}

// ── Card fade-in on scroll ──
if('IntersectionObserver' in window){
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('visible-anim');
        observer.unobserve(e.target);
      }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.card, .q-card, .article-card').forEach(function(el){
    observer.observe(el);
  });
} else {
  // Fallback for older browsers
  document.querySelectorAll('.card, .q-card, .article-card').forEach(function(el){
    el.classList.add('visible-anim');
  });
}
