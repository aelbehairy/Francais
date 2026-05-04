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

// ── iPad / iOS: ensure buttons respond to touch ──
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
});

// ── Scroll to nav ──
function scrollToNav(panelId){
  var nav = document.querySelector('#'+panelId+' .nav-wrap');
  if(nav){ window.scrollTo({top: nav.offsetTop - 10, behavior:'smooth'}); }
}

// ── Activate first section in a panel ──
function activateFirstSec(panelId, prefix){
  var secs = document.querySelectorAll('#'+panelId+' .sec');
  var pills = document.querySelectorAll('#'+panelId+' .pill');
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
  btn.classList.add('active');
  if(tab === 'grammaire') activateFirstSec('panel-grammaire','g-');
  else if(tab === 'temps') activateFirstSec('panel-temps','t-');
  else if(tab === 'oral') activateFirstSec('panel-oral','o-');
  else if(tab === 'phonetique') activateFirstSec('panel-phonetique','p-');
  setTimeout(function(){ scrollToNav('panel-'+tab); }, 50);
}

// ── Grammaire / Temps section switch ──
function showSec(id, btn, panel){
  var pre = panel === 'grammaire' ? 'g-' : 't-';
  document.querySelectorAll('#panel-'+panel+' .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-'+panel+' .pill').forEach(function(b){ b.classList.remove('active'); });
  var sec = document.getElementById(pre+id);
  if(sec) sec.classList.add('visible');
  btn.classList.add('active');
  scrollToNav('panel-'+panel);
}

// ── Oral section switch ──
function showOral(id, btn){
  document.querySelectorAll('#panel-oral .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-oral .pill').forEach(function(b){ b.classList.remove('active'); });
  var sec = document.getElementById('o-'+id);
  if(sec) sec.classList.add('visible');
  btn.classList.add('active');
  scrollToNav('panel-oral');
}

// ── Phonétique section switch ──
function showPhon(id, btn){
  document.querySelectorAll('#panel-phonetique .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-phonetique .pill').forEach(function(b){ b.classList.remove('active'); });
  var sec = document.getElementById('p-'+id);
  if(sec) sec.classList.add('visible');
  btn.classList.add('active');
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