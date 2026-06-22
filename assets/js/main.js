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

var youtubePlaylists = [
  {
    key:'playlist-1',
    title:'French A1',
    desc:'13 videos',
    playlistId:'PLf3rJn144wviM1xUXX-fPH88XprF82xFH',
    starterVideoId:'IIIcKcpg638',
    starterIndex:1,
    videos:[
      {id:'IIIcKcpg638', title:'French A1 - Video 1'},
      {id:'K85XpG47tfo', title:'French A1 - Video 2'},
      {id:'H6IdYAnK5iA', title:'French A1 - Video 3'},
      {id:'og6PDAv6KgY', title:'French A1 - Video 4'},
      {id:'K03HRW40MtU', title:'French A1 - Video 5'},
      {id:'i7O2fgQrbeE', title:'French A1 - Video 6'},
      {id:'gj6WubwwOts', title:'French A1 - Video 7'},
      {id:'jVrcZxcOb64', title:'French A1 - Video 8'},
      {id:'AOswvKkbkSs', title:'French A1 - Video 9'},
      {id:'ybrZIr4LgF8', title:'French A1 - Video 10'},
      {id:'zJFJlzJyjnQ', title:'French A1 - Video 11'},
      {id:'2S6nsJgejVU', title:'French A1 - Video 12'},
      {id:'bcj5FCsCCPc', title:'French A1 - Video 13'}
    ]
  },
  {
    key:'playlist-2',
    title:'French A2',
    desc:'14 videos',
    playlistId:'PLf3rJn144wvhYxvo9L74aRwBr0G7PvcMa',
    starterVideoId:'pC6KwYNW8qQ',
    starterIndex:1,
    videos:[
      {id:'pC6KwYNW8qQ', title:'French A2 - Video 1'},
      {id:'DT557F7T7GQ', title:'French A2 - Video 2'},
      {id:'C1Pgy4VOoRM', title:'French A2 - Video 3'},
      {id:'5cs7zH1KQuk', title:'French A2 - Video 4'},
      {id:'B0mPyGo_lKE', title:'French A2 - Video 5'},
      {id:'paFNRCecJQM', title:'French A2 - Video 6'},
      {id:'-xzVJ8-2bE4', title:'French A2 - Video 7'},
      {id:'ZCiBZwh6oAM', title:'French A2 - Video 8'},
      {id:'By9m3sSnHvk', title:'French A2 - Video 9'},
      {id:'1S_1OuaU0YQ', title:'French A2 - Video 10'},
      {id:'qipUiIPxU8c', title:'French A2 - Video 11'},
      {id:'C6OtIYPyJcM', title:'French A2 - Video 12'},
      {id:'vYdqteWPbN4', title:'French A2 - Video 13'},
      {id:'hajbcgS-H6Q', title:'French A2 - Video 14'}
    ]
  },
  {
    key:'playlist-3',
    title:'French B1',
    desc:'5 videos',
    playlistId:'PLf3rJn144wvj8WSt_U1TBTdjcz2difvwY',
    starterVideoId:'Aedc_XQY2aM',
    starterIndex:1,
    videos:[
      {id:'Aedc_XQY2aM', title:'French B1 - Video 1'},
      {id:'UKGOQZvZWsw', title:'French B1 - Video 2'},
      {id:'5V-685Hizl4', title:'French B1 - Video 3'},
      {id:'zinhU0N45pk', title:'French B1 - Video 4'},
      {id:'FHJx1oEQRUY', title:'French B1 - Video 5'}
    ]
  },
  {
    key:'playlist-4',
    title:'French Phonétique',
    desc:'7 videos',
    playlistId:'PLf3rJn144wviGt21nm03HAIE946y6wYyO',
    starterVideoId:'nK_Sf64C51s',
    starterIndex:1,
    videos:[
      {id:'nK_Sf64C51s', title:'French Phonétique - Video 1'},
      {id:'sw8x1HUt59Q', title:'French Phonétique - Video 2'},
      {id:'x3KUY2xQayQ', title:'French Phonétique - Video 3'},
      {id:'tTro2Oq8WVY', title:'French Phonétique - Video 4'},
      {id:'xffTqdsDDRA', title:'French Phonétique - Video 5'},
      {id:'ZPRL8YVNCcs', title:'French Phonétique - Video 6'},
      {id:'15wDDD-ELgA', title:'French Phonétique - Video 7'}
    ]
  }
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
  updateHeroStats();
}

function setHeroStat(id, value){
  var el = document.getElementById(id);
  if(el) el.textContent = String(value);
}

function updateHeroStats(){
  var sectionCount = document.querySelectorAll('.top-tabs .top-tab:not(.top-search-btn)').length;
  var excludedTemps = {'irreguliers': true, 'regles': true};
  var tempsCount = Array.prototype.slice.call(document.querySelectorAll('#pills-temps .pill')).filter(function(btn){
    var onclick = btn.getAttribute('onclick') || '';
    var match = onclick.match(/showSec\('([^']+)'/);
    return match && !excludedTemps[match[1]];
  }).length;
  var oralCount = document.querySelectorAll('#tcf-oral .tcf-oral-card').length;
  var lectureCount = document.querySelectorAll('#lireLinkGrid .lire-link').length || lirePages.length;

  setHeroStat('hero-stat-sections', sectionCount);
  setHeroStat('hero-stat-temps', tempsCount);
  setHeroStat('hero-stat-oral', oralCount);
  setHeroStat('hero-stat-lecture', lectureCount);
}

function getYoutubePlaylistUrl(item){
  return 'https://www.youtube.com/playlist?list=' + encodeURIComponent(item.playlistId);
}

function getYoutubeWatchUrl(item, video){
  var videoId = (video && video.id) || item.starterVideoId;
  if(!videoId) return getYoutubePlaylistUrl(item);
  return 'https://www.youtube.com/watch?v=' + encodeURIComponent(videoId) +
    '&list=' + encodeURIComponent(item.playlistId) +
    (video && video.index ? '&index=' + encodeURIComponent(video.index) : (item.starterIndex ? '&index=' + encodeURIComponent(item.starterIndex) : ''));
}

function getYoutubeEmbedUrl(item, video){
  var videoId = (video && video.id) || item.starterVideoId;
  if(videoId){
    return 'https://www.youtube.com/embed/' + encodeURIComponent(videoId) +
      '?list=' + encodeURIComponent(item.playlistId);
  }
  return 'https://www.youtube.com/embed/videoseries?list=' + encodeURIComponent(item.playlistId);
}

function findYoutubePlaylist(key){
  return youtubePlaylists.filter(function(item){ return item.key === key; })[0] || youtubePlaylists[0];
}

function getYoutubeVideo(item, videoId){
  if(!item || !item.videos || !item.videos.length) return null;
  var foundIndex = 0;
  var found = item.videos.filter(function(video, index){
    if(video.id === videoId){
      foundIndex = index;
      return true;
    }
    return false;
  })[0] || item.videos[0];
  return {
    id: found.id,
    title: found.title,
    index: foundIndex + 1
  };
}

function playYoutubeVideo(key, videoId, btn){
  var item = findYoutubePlaylist(key);
  if(!item) return;
  var video = getYoutubeVideo(item, videoId);
  var player = document.getElementById('youtube-video-player');
  var title = document.getElementById('youtube-video-title');
  var playlistLink = document.getElementById('youtube-open-playlist');
  var videoLink = document.getElementById('youtube-open-video');
  document.querySelectorAll('#youtube-video-cards .youtube-video-button').forEach(function(card){ card.classList.remove('active'); });
  if(btn) btn.classList.add('active');
  if(title) title.textContent = video ? video.title : item.title;
  if(player) player.setAttribute('src', getYoutubeEmbedUrl(item, video));
  if(playlistLink) playlistLink.setAttribute('href', getYoutubePlaylistUrl(item));
  if(videoLink) videoLink.setAttribute('href', getYoutubeWatchUrl(item, video));
  updateRoute('videos', item.key);
}

function sortYoutubeVideosByName(videos){
  return (videos || []).slice().sort(function(a, b){
    return String(a.title || '').localeCompare(String(b.title || ''), undefined, {numeric:true, sensitivity:'base'});
  });
}

function renderYoutubeVideoCards(item, activeVideoId){
  var grid = document.getElementById('youtube-video-cards');
  var label = document.getElementById('youtube-video-list-label');
  if(!grid || !item) return;
  var videos = sortYoutubeVideosByName(item.videos);
  if(label) label.textContent = item.title + ' - videos';
  grid.innerHTML = videos.map(function(video, index){
    var buttonTitle = video.title || (item.title + ' - Video ' + (index + 1));
    return '<button class="youtube-video-button' + (video.id === activeVideoId ? ' active' : '') + '" type="button" title="' + escapeHtml(buttonTitle) + '" aria-label="' + escapeHtml(buttonTitle) + '" data-youtube-playlist="' + escapeHtml(item.key) + '" data-youtube-video="' + escapeHtml(video.id) + '">' +
      '<span class="youtube-video-button-title">' + escapeHtml(buttonTitle) + '</span>' +
    '</button>';
  }).join('');
  grid.querySelectorAll('.youtube-video-button[data-youtube-video]').forEach(function(btn){
    btn.addEventListener('click', function(){
      playYoutubeVideo(btn.getAttribute('data-youtube-playlist'), btn.getAttribute('data-youtube-video'), btn);
    });
  });
  playYoutubeVideo(item.key, activeVideoId || (videos[0] && videos[0].id), grid.querySelector('.youtube-video-button[data-youtube-video="' + (activeVideoId || (videos[0] && videos[0].id)) + '"]'));
}

function playYoutubePlaylist(key, btn){
  var item = findYoutubePlaylist(key);
  if(!item) return;
  document.querySelectorAll('#youtube-playlist-cards .learning-card').forEach(function(card){ card.classList.remove('active'); });
  if(btn) btn.classList.add('active');
  renderYoutubeVideoCards(item, item.videos && item.videos[0] && item.videos[0].id);
}

function renderYoutubePlaylists(activeKey){
  var grid = document.getElementById('youtube-playlist-cards');
  if(!grid) return;
  var active = activeKey || (youtubePlaylists[0] && youtubePlaylists[0].key);
  grid.innerHTML = youtubePlaylists.map(function(item, index){
    return '<button class="learning-card is-lesson' + (item.key === active ? ' active' : '') + '" type="button" data-youtube-playlist="' + escapeHtml(item.key) + '">' +
      '<span class="learning-card-icon">' + (index + 1) + '</span>' +
      '<span class="learning-card-title">' + escapeHtml(item.title) + '</span>' +
      '<span class="learning-card-desc">' + escapeHtml(item.desc) + '</span>' +
      '<span class="learning-card-meta">Lire →</span>' +
    '</button>';
  }).join('');
  grid.querySelectorAll('.learning-card[data-youtube-playlist]').forEach(function(btn){
    btn.addEventListener('click', function(){
      playYoutubePlaylist(btn.getAttribute('data-youtube-playlist'), btn);
    });
  });
  playYoutubePlaylist(active, grid.querySelector('.learning-card[data-youtube-playlist="' + active + '"]'));
}

function showBookPreview(path, title, btn, hasAudio){
  var frame = document.getElementById('book-preview-frame');
  var titleEl = document.getElementById('book-preview-title');
  var link = document.getElementById('book-preview-link');
  var inlineLink = document.getElementById('book-preview-fallback-inline');
  var audioPanel = document.getElementById('book-audio-panel');
  var audioDownload = document.getElementById('book-audio-download');
  document.querySelectorAll('#book-preview-tabs .pill').forEach(function(pill){
    pill.classList.remove('active');
  });
  if(btn) btn.classList.add('active');
  if(frame) frame.setAttribute('data', path);
  if(titleEl) titleEl.textContent = title;
  if(link) link.href = path;
  if(inlineLink){
    inlineLink.href = path;
    inlineLink.textContent = title + '.pdf';
  }
  if(audioPanel) audioPanel.hidden = !hasAudio;
  if(audioDownload && hasAudio) audioDownload.href = path;
}

function showDissertation(id, btn){
  document.querySelectorAll('#vocab-sub-essay .dissertation-doc').forEach(function(doc){
    doc.classList.remove('visible');
    doc.hidden = true;
  });
  document.querySelectorAll('#dissertation-tabs .pill').forEach(function(pill){
    pill.classList.remove('active');
  });
  var doc = document.getElementById('dissertation-' + id);
  if(doc){
    doc.hidden = false;
    doc.classList.add('visible');
    setTimeout(function(){
      doc.scrollIntoView({behavior:'smooth', block:'start'});
    }, 20);
  }
  if(btn) btn.classList.add('active');
}

function showTcfVocabView(id, btn){
  document.querySelectorAll('#tcf-vocabulary .tcf-vocab-view').forEach(function(view){
    view.classList.remove('visible');
    view.hidden = true;
  });
  document.querySelectorAll('#tcf-vocab-view-tabs .pill').forEach(function(pill){
    pill.classList.remove('active');
  });
  var view = document.getElementById('tcf-vocab-' + id);
  if(view){
    view.hidden = false;
    view.classList.add('visible');
  }
  if(btn) btn.classList.add('active');
}

function initTcfVocabSelection(){
  document.querySelectorAll('#tcf-vocab-text .mini-table, #tcf-vocab-text .phrase-bank > div').forEach(function(block, index){
    if(block.querySelector('.tcf-vocab-select')) return;
    var title = block.querySelector('h5');
    if(!title) return;
    var label = document.createElement('label');
    label.className = 'tcf-vocab-select';
    label.innerHTML = '<input type="checkbox" aria-label="Select for printing"> <span>Select</span>';
    title.appendChild(label);
    block.dataset.printIndex = String(index + 1);
  });
  document.querySelectorAll('#tcf-vocab-text .mini-table table tr').forEach(function(row){
    if(row.querySelector('th') || row.querySelector('.tcf-vocab-row-check')) return;
    var firstCell = row.querySelector('td');
    if(!firstCell) return;
    var label = document.createElement('label');
    label.className = 'tcf-vocab-row-check';
    label.innerHTML = '<input type="checkbox" aria-label="Check word for printing">';
    firstCell.insertBefore(label, firstCell.firstChild);
  });
  document.querySelectorAll('#tcf-vocab-text .phrase-bank p').forEach(function(line){
    if(line.querySelector('.tcf-vocab-row-check')) return;
    var label = document.createElement('label');
    label.className = 'tcf-vocab-row-check phrase-check';
    label.innerHTML = '<input type="checkbox" aria-label="Check phrase for printing">';
    line.insertBefore(label, line.firstChild);
  });
}

function printSelectedTcfVocab(){
  initTcfVocabSelection();
  var selected = Array.from(document.querySelectorAll('#tcf-vocab-text .mini-table, #tcf-vocab-text .phrase-bank > div')).filter(function(block){
    var checkbox = block.querySelector('.tcf-vocab-select input');
    return checkbox && checkbox.checked;
  });
  if(!selected.length){
    window.alert('Please select at least one vocabulary block to print.');
    return;
  }
  var content = selected.map(function(block){
    var clone = block.cloneNode(true);
    clone.querySelectorAll('.tcf-vocab-select').forEach(function(el){ el.remove(); });
    return '<section class="print-block">' + clone.innerHTML + '</section>';
  }).join('');
  var printWindow = window.open('', '_blank');
  if(!printWindow) return;
  printWindow.document.write('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Selected TCF Vocabulary</title><style>body{font-family:Arial,sans-serif;color:#111827;margin:28px;background:#fff}h1{font-size:24px;color:#1d4ed8;margin:0 0 22px}section{break-inside:avoid;margin:0 0 22px;border:1px solid #dbeafe;border-radius:10px;overflow:hidden}h5{margin:0;padding:14px 16px;background:#eff6ff;color:#1e3a8a;font-size:18px}table{width:100%;border-collapse:collapse;font-size:14px}th,td{padding:9px 10px;border:1px solid #d1d5db;text-align:left;vertical-align:top}th{background:#f3f4f6}p{margin:0;padding:10px 14px;border-top:1px solid #e5e7eb;line-height:1.45}@page{size:A4;margin:12mm}</style></head><body><h1>Selected TCF Vocabulary</h1>' + content + '<script>window.onload=function(){window.print();};<\/script></body></html>');
  printWindow.document.close();
}

function printCheckedTcfVocab(){
  initTcfVocabSelection();
  var sections = [];
  document.querySelectorAll('#tcf-vocab-text .mini-table').forEach(function(block){
    var checkedRows = Array.from(block.querySelectorAll('tr')).filter(function(row){
      var checkbox = row.querySelector('.tcf-vocab-row-check input');
      return checkbox && checkbox.checked;
    });
    if(!checkedRows.length) return;
    var title = block.querySelector('h5') ? block.querySelector('h5').cloneNode(true) : null;
    if(title) title.querySelectorAll('.tcf-vocab-select, .tcf-vocab-row-check').forEach(function(el){ el.remove(); });
    var rows = checkedRows.map(function(row){
      var clone = row.cloneNode(true);
      clone.querySelectorAll('.tcf-vocab-row-check').forEach(function(el){ el.remove(); });
      return clone.outerHTML;
    }).join('');
    sections.push('<section><h2>' + (title ? title.textContent.trim() : 'Vocabulary') + '</h2><table><tr><th>Français</th><th>Anglais</th></tr>' + rows + '</table></section>');
  });
  document.querySelectorAll('#tcf-vocab-text .phrase-bank > div').forEach(function(block){
    var checkedPhrases = Array.from(block.querySelectorAll('p')).filter(function(line){
      var checkbox = line.querySelector('.tcf-vocab-row-check input');
      return checkbox && checkbox.checked;
    });
    if(!checkedPhrases.length) return;
    var title = block.querySelector('h5') ? block.querySelector('h5').cloneNode(true) : null;
    if(title) title.querySelectorAll('.tcf-vocab-select, .tcf-vocab-row-check').forEach(function(el){ el.remove(); });
    var phrases = checkedPhrases.map(function(line){
      var clone = line.cloneNode(true);
      clone.querySelectorAll('.tcf-vocab-row-check').forEach(function(el){ el.remove(); });
      return '<p>' + clone.textContent.trim() + '</p>';
    }).join('');
    sections.push('<section><h2>' + (title ? title.textContent.trim() : 'Phrases') + '</h2>' + phrases + '</section>');
  });
  if(!sections.length){
    window.alert('Please check at least one word or phrase to print.');
    return;
  }
  var printWindow = window.open('', '_blank');
  if(!printWindow) return;
  printWindow.document.write('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Checked TCF Vocabulary</title><style>body{font-family:Arial,sans-serif;color:#111827;margin:28px;background:#fff}h1{font-size:24px;color:#1d4ed8;margin:0 0 22px}section{break-inside:avoid;margin:0 0 22px}h2{margin:0 0 10px;padding:12px 14px;background:#eff6ff;color:#1e3a8a;border-left:5px solid #2563eb;border-radius:8px;font-size:18px}table{width:100%;border-collapse:collapse;font-size:14px;margin-bottom:8px}th,td{padding:9px 10px;border:1px solid #d1d5db;text-align:left;vertical-align:top}th{background:#f3f4f6}p{margin:0 0 8px;padding:10px 12px;border:1px solid #dbeafe;border-radius:8px;line-height:1.45}@page{size:A4;margin:12mm}</style></head><body><h1>Checked TCF Vocabulary</h1>' + sections.join('') + '<script>window.onload=function(){window.print();};<\/script></body></html>');
  printWindow.document.close();
}

document.addEventListener('DOMContentLoaded', initTcfVocabSelection);

var irregVerbData = [
  {v:'être', ar:'يكون', p:['suis','es','est','sommes','êtes','sont'], pp:'été', aux:'avoir', fut:'ser', subj:['sois','sois','soit','soyons','soyez','soient'], ps:['fus','fus','fut','fûmes','fûtes','furent'], imp:['sois','soyons','soyez']},
  {v:'avoir', ar:'يمتلك / عنده', p:['ai','as','a','avons','avez','ont'], pp:'eu', aux:'avoir', fut:'aur', subj:['aie','aies','ait','ayons','ayez','aient'], ps:['eus','eus','eut','eûmes','eûtes','eurent'], imp:['aie','ayons','ayez']},
  {v:'aller', ar:'يذهب', p:['vais','vas','va','allons','allez','vont'], pp:'allé', aux:'être', fut:'ir', subj:['aille','ailles','aille','allions','alliez','aillent'], ps:['allai','allas','alla','allâmes','allâtes','allèrent'], imp:['va','allons','allez']},
  {v:'faire', ar:'يفعل / يقوم بـ', p:['fais','fais','fait','faisons','faites','font'], pp:'fait', aux:'avoir', fut:'fer', subj:['fasse','fasses','fasse','fassions','fassiez','fassent'], ps:['fis','fis','fit','fîmes','fîtes','firent'], imp:['fais','faisons','faites']},
  {v:'pouvoir', ar:'يستطيع', p:['peux','peux','peut','pouvons','pouvez','peuvent'], pp:'pu', aux:'avoir', fut:'pourr', subj:['puisse','puisses','puisse','puissions','puissiez','puissent'], ps:['pus','pus','put','pûmes','pûtes','purent'], noImp:true},
  {v:'vouloir', ar:'يريد', p:['veux','veux','veut','voulons','voulez','veulent'], pp:'voulu', aux:'avoir', fut:'voudr', subj:['veuille','veuilles','veuille','voulions','vouliez','veuillent'], ps:['voulus','voulus','voulut','voulûmes','voulûtes','voulurent'], imp:['veuille','veuillons','veuillez']},
  {v:'devoir', ar:'يجب / ينبغي', p:['dois','dois','doit','devons','devez','doivent'], pp:'dû', aux:'avoir', fut:'devr', subj:['doive','doives','doive','devions','deviez','doivent'], ps:['dus','dus','dut','dûmes','dûtes','durent'], noImp:true},
  {v:'savoir', ar:'يعرف معلومة', p:['sais','sais','sait','savons','savez','savent'], pp:'su', aux:'avoir', fut:'saur', subj:['sache','saches','sache','sachions','sachiez','sachent'], ps:['sus','sus','sut','sûmes','sûtes','surent'], imp:['sache','sachons','sachez']},
  {v:'connaître', ar:'يعرف شخص / مكان', p:['connais','connais','connaît','connaissons','connaissez','connaissent'], pp:'connu', aux:'avoir', fut:'connaîtr', subj:['connaisse','connaisses','connaisse','connaissions','connaissiez','connaissent'], ps:['connus','connus','connut','connûmes','connûtes','connurent'], imp:['connais','connaissons','connaissez']},
  {v:'dire', ar:'يقول', p:['dis','dis','dit','disons','dites','disent'], pp:'dit', aux:'avoir', fut:'dir', subj:['dise','dises','dise','disions','disiez','disent'], ps:['dis','dis','dit','dîmes','dîtes','dirent'], imp:['dis','disons','dites']},
  {v:'prendre', ar:'يأخذ', p:['prends','prends','prend','prenons','prenez','prennent'], pp:'pris', aux:'avoir', fut:'prendr', subj:['prenne','prennes','prenne','prenions','preniez','prennent'], ps:['pris','pris','prit','prîmes','prîtes','prirent'], imp:['prends','prenons','prenez']},
  {v:'venir', ar:'يأتي', p:['viens','viens','vient','venons','venez','viennent'], pp:'venu', aux:'être', fut:'viendr', subj:['vienne','viennes','vienne','venions','veniez','viennent'], ps:['vins','vins','vint','vînmes','vîntes','vinrent'], imp:['viens','venons','venez']},
  {v:'voir', ar:'يرى', p:['vois','vois','voit','voyons','voyez','voient'], pp:'vu', aux:'avoir', fut:'verr', subj:['voie','voies','voie','voyions','voyiez','voient'], ps:['vis','vis','vit','vîmes','vîtes','virent'], imp:['vois','voyons','voyez']},
  {v:'mettre', ar:'يضع', p:['mets','mets','met','mettons','mettez','mettent'], pp:'mis', aux:'avoir', fut:'mettr', subj:['mette','mettes','mette','mettions','mettiez','mettent'], ps:['mis','mis','mit','mîmes','mîtes','mirent'], imp:['mets','mettons','mettez']},
  {v:'tenir', ar:'يمسك', p:['tiens','tiens','tient','tenons','tenez','tiennent'], pp:'tenu', aux:'avoir', fut:'tiendr', subj:['tienne','tiennes','tienne','tenions','teniez','tiennent'], ps:['tins','tins','tint','tînmes','tîntes','tinrent'], imp:['tiens','tenons','tenez']},
  {v:'lire', ar:'يقرأ', p:['lis','lis','lit','lisons','lisez','lisent'], pp:'lu', aux:'avoir', fut:'lir', subj:['lise','lises','lise','lisions','lisiez','lisent'], ps:['lus','lus','lut','lûmes','lûtes','lurent'], imp:['lis','lisons','lisez']},
  {v:'écrire', ar:'يكتب', p:['écris','écris','écrit','écrivons','écrivez','écrivent'], pp:'écrit', aux:'avoir', fut:'écrir', subj:['écrive','écrives','écrive','écrivions','écriviez','écrivent'], ps:['écrivis','écrivis','écrivit','écrivîmes','écrivîtes','écrivirent'], imp:['écris','écrivons','écrivez']},
  {v:'sortir', ar:'يخرج', p:['sors','sors','sort','sortons','sortez','sortent'], pp:'sorti', aux:'être', fut:'sortir', subj:['sorte','sortes','sorte','sortions','sortiez','sortent'], ps:['sortis','sortis','sortit','sortîmes','sortîtes','sortirent'], imp:['sors','sortons','sortez']},
  {v:'partir', ar:'يغادر', p:['pars','pars','part','partons','partez','partent'], pp:'parti', aux:'être', fut:'partir', subj:['parte','partes','parte','partions','partiez','partent'], ps:['partis','partis','partit','partîmes','partîtes','partirent'], imp:['pars','partons','partez']},
  {v:'dormir', ar:'ينام', p:['dors','dors','dort','dormons','dormez','dorment'], pp:'dormi', aux:'avoir', fut:'dormir', subj:['dorme','dormes','dorme','dormions','dormiez','dorment'], imp:['dors','dormons','dormez']},
  {v:'sentir', ar:'يشعر', p:['sens','sens','sent','sentons','sentez','sentent'], pp:'senti', aux:'avoir', fut:'sentir', subj:['sente','sentes','sente','sentions','sentiez','sentent'], imp:['sens','sentons','sentez']},
  {v:'servir', ar:'يخدم / يقدم', p:['sers','sers','sert','servons','servez','servent'], pp:'servi', aux:'avoir', fut:'servir', subj:['serve','serves','serve','servions','serviez','servent'], imp:['sers','servons','servez']},
  {v:'offrir', ar:'يقدم هدية', p:['offre','offres','offre','offrons','offrez','offrent'], pp:'offert', aux:'avoir', fut:'offrir', subj:['offre','offres','offre','offrions','offriez','offrent'], imp:['offre','offrons','offrez']},
  {v:'ouvrir', ar:'يفتح', p:['ouvre','ouvres','ouvre','ouvrons','ouvrez','ouvrent'], pp:'ouvert', aux:'avoir', fut:'ouvrir', subj:['ouvre','ouvres','ouvre','ouvrions','ouvriez','ouvrent'], imp:['ouvre','ouvrons','ouvrez']},
  {v:'couvrir', ar:'يغطي', p:['couvre','couvres','couvre','couvrons','couvrez','couvrent'], pp:'couvert', aux:'avoir', fut:'couvrir', subj:['couvre','couvres','couvre','couvrions','couvriez','couvrent'], imp:['couvre','couvrons','couvrez']},
  {v:'courir', ar:'يجري', p:['cours','cours','court','courons','courez','courent'], pp:'couru', aux:'avoir', fut:'courr', subj:['coure','coures','coure','courions','couriez','courent'], imp:['cours','courons','courez']},
  {v:'recevoir', ar:'يستقبل / يتلقى', p:['reçois','reçois','reçoit','recevons','recevez','reçoivent'], pp:'reçu', aux:'avoir', fut:'recevr', subj:['reçoive','reçoives','reçoive','recevions','receviez','reçoivent'], imp:['reçois','recevons','recevez']},
  {v:'apercevoir', ar:'يلمح', p:['aperçois','aperçois','aperçoit','apercevons','apercevez','aperçoivent'], pp:'aperçu', aux:'avoir', fut:'apercevr', subj:['aperçoive','aperçoives','aperçoive','apercevions','aperceviez','aperçoivent'], imp:['aperçois','apercevons','apercevez']},
  {v:'boire', ar:'يشرب', p:['bois','bois','boit','buvons','buvez','boivent'], pp:'bu', aux:'avoir', fut:'boir', subj:['boive','boives','boive','buvions','buviez','boivent'], imp:['bois','buvons','buvez']},
  {v:'croire', ar:'يعتقد', p:['crois','crois','croit','croyons','croyez','croient'], pp:'cru', aux:'avoir', fut:'croir', subj:['croie','croies','croie','croyions','croyiez','croient'], ps:['crus','crus','crut','crûmes','crûtes','crurent'], imp:['crois','croyons','croyez']},
  {v:'vivre', ar:'يعيش', p:['vis','vis','vit','vivons','vivez','vivent'], pp:'vécu', aux:'avoir', fut:'vivr', subj:['vive','vives','vive','vivions','viviez','vivent'], ps:['vécus','vécus','vécut','vécûmes','vécûtes','vécurent'], imp:['vis','vivons','vivez']},
  {v:'suivre', ar:'يتبع', p:['suis','suis','suit','suivons','suivez','suivent'], pp:'suivi', aux:'avoir', fut:'suivr', subj:['suive','suives','suive','suivions','suiviez','suivent'], imp:['suis','suivons','suivez']},
  {v:'conduire', ar:'يقود', p:['conduis','conduis','conduit','conduisons','conduisez','conduisent'], pp:'conduit', aux:'avoir', fut:'conduir', subj:['conduise','conduises','conduise','conduisions','conduisiez','conduisent'], imp:['conduis','conduisons','conduisez']},
  {v:'traduire', ar:'يترجم', p:['traduis','traduis','traduit','traduisons','traduisez','traduisent'], pp:'traduit', aux:'avoir', fut:'traduir', subj:['traduise','traduisses','traduise','traduisions','traduisiez','traduisent'], imp:['traduis','traduisons','traduisez']},
  {v:'construire', ar:'يبني', p:['construis','construis','construit','construisons','construisez','construisent'], pp:'construit', aux:'avoir', fut:'construir', subj:['construise','construises','construise','construisions','construisiez','construisent'], imp:['construis','construisons','construisez']},
  {v:'produire', ar:'ينتج', p:['produis','produis','produit','produisons','produisez','produisent'], pp:'produit', aux:'avoir', fut:'produir', subj:['produise','produises','produise','produisions','produisiez','produisent'], imp:['produis','produisons','produisez']},
  {v:'rire', ar:'يضحك', p:['ris','ris','rit','rions','riez','rient'], pp:'ri', aux:'avoir', fut:'rir', subj:['rie','ries','rie','riions','riiez','rient'], imp:['ris','rions','riez']},
  {v:'sourire', ar:'يبتسم', p:['souris','souris','sourit','sourions','souriez','sourient'], pp:'souri', aux:'avoir', fut:'sourir', subj:['sourie','souries','sourie','souriions','souriiez','sourient'], imp:['souris','sourions','souriez']},
  {v:'naître', ar:'يولد', p:['nais','nais','naît','naissons','naissez','naissent'], pp:'né', aux:'être', fut:'naîtr', subj:['naisse','naisses','naisse','naissions','naissiez','naissent'], imp:['nais','naissons','naissez']},
  {v:'mourir', ar:'يموت', p:['meurs','meurs','meurt','mourons','mourez','meurent'], pp:'mort', aux:'être', fut:'mourr', subj:['meure','meures','meure','mourions','mouriez','meurent'], imp:['meurs','mourons','mourez']},
  {v:'attendre', ar:'ينتظر', p:['attends','attends','attend','attendons','attendez','attendent'], pp:'attendu', aux:'avoir', fut:'attendr', subj:['attende','attendes','attende','attendions','attendiez','attendent'], ps:['attendis','attendis','attendit','attendîmes','attendîtes','attendirent'], imp:['attends','attendons','attendez']},
  {v:'entendre', ar:'يسمع', p:['entends','entends','entend','entendons','entendez','entendent'], pp:'entendu', aux:'avoir', fut:'entendr', subj:['entende','entendes','entende','entendions','entendiez','entendent'], ps:['entendis','entendis','entendit','entendîmes','entendîtes','entendirent'], imp:['entends','entendons','entendez']},
  {v:'répondre', ar:'يجيب', p:['réponds','réponds','répond','répondons','répondez','répondent'], pp:'répondu', aux:'avoir', fut:'répondr', subj:['réponde','répondes','réponde','répondions','répondiez','répondent'], ps:['répondis','répondis','répondit','répondîmes','répondîtes','répondirent'], imp:['réponds','répondons','répondez']},
  {v:'rendre', ar:'يعيد', p:['rends','rends','rend','rendons','rendez','rendent'], pp:'rendu', aux:'avoir', fut:'rendr', subj:['rende','rendes','rende','rendions','rendiez','rendent'], ps:['rendis','rendis','rendit','rendîmes','rendîtes','rendirent'], imp:['rends','rendons','rendez']},
  {v:'falloir', ar:'يجب - غير شخصي', p:['—','—','faut','—','—','—'], pp:'fallu', aux:'avoir', fut:'faudr', subj:['—','—','faille','—','—','—'], noImp:true, impersonal:true},
  {v:'pleuvoir', ar:'تمطر', p:['—','—','pleut','—','—','—'], pp:'plu', aux:'avoir', fut:'pleuvr', subj:['—','—','pleuve','—','—','—'], noImp:true, impersonal:true}
];

var irregSimplePronouns = ['je','tu','il/elle','nous','vous','ils/elles'];
var irregQuePronouns = ['que je','que tu','qu’il/elle','que nous','que vous','qu’ils/elles'];
var irregImperativePronouns = ['tu','nous','vous'];
var irregEndings = {
  imparfait:['ais','ais','ait','ions','iez','aient'],
  futur:['ai','as','a','ons','ez','ont'],
  cond:['ais','ais','ait','ions','iez','aient']
};
var irregAuxPresent = {
  avoir:['ai','as','a','avons','avez','ont'],
  être:['suis','es','est','sommes','êtes','sont']
};
var irregAuxImparfait = {
  avoir:['avais','avais','avait','avions','aviez','avaient'],
  être:['étais','étais','était','étions','étiez','étaient']
};
var irregAuxCond = {
  avoir:['aurais','aurais','aurait','aurions','auriez','auraient'],
  être:['serais','serais','serait','serions','seriez','seraient']
};

function irregImparfaitForms(verb){
  if(verb.v === 'être') return ['étais','étais','était','étions','étiez','étaient'];
  if(verb.v === 'falloir') return ['—','—','fallait','—','—','—'];
  if(verb.v === 'pleuvoir') return ['—','—','pleuvait','—','—','—'];
  var stem = verb.p[3].replace(/ons$/,'');
  return irregEndings.imparfait.map(function(end){ return stem + end; });
}

function irregFutureForms(verb, mode){
  var endings = mode === 'cond' ? irregEndings.cond : irregEndings.futur;
  if(verb.impersonal){
    var only = verb.fut + endings[2];
    return ['—','—',only,'—','—','—'];
  }
  return endings.map(function(end){ return verb.fut + end; });
}

function irregFuturProcheForms(verb){
  if(verb.impersonal) return ['—','—','va ' + verb.v,'—','—','—'];
  return ['vais','vas','va','allons','allez','vont'].map(function(aux){ return aux + ' ' + verb.v; });
}

function irregCompoundForms(verb, auxMap){
  if(verb.impersonal) return ['—','—',auxMap[verb.aux][2] + ' ' + verb.pp,'—','—','—'];
  return auxMap[verb.aux].map(function(aux, index){
    var pp = verb.pp;
    if(verb.aux === 'être'){
      pp += index < 3 ? '(e)' : '(e)(s)';
    }
    return aux + ' ' + pp;
  });
}

function irregRowsForTense(tense){
  return irregVerbData.map(function(verb){
    var forms;
    if(tense === 'present') forms = verb.p;
    else if(tense === 'imparfait') forms = irregImparfaitForms(verb);
    else if(tense === 'passe') forms = irregCompoundForms(verb, irregAuxPresent);
    else if(tense === 'ppq') forms = irregCompoundForms(verb, irregAuxImparfait);
    else if(tense === 'futur') forms = irregFutureForms(verb, 'futur');
    else if(tense === 'proche') forms = irregFuturProcheForms(verb);
    else if(tense === 'cond') forms = irregFutureForms(verb, 'cond');
    else if(tense === 'condp') forms = irregCompoundForms(verb, irregAuxCond);
    else if(tense === 'subj') forms = verb.subj;
    else if(tense === 'psimple') forms = verb.ps || ['—','—','—','—','—','—'];
    else if(tense === 'imp') forms = verb.noImp ? ['—','—','—'] : verb.imp;
    else forms = [verb.pp, verb.aux, verb.ar];
    return {verb:verb, forms:forms};
  });
}

function renderIrregTable(tense, wrapId, titleId){
  var wrap = document.getElementById(wrapId || 'irregTableWrap');
  var title = document.getElementById(titleId || 'irregTableTitle');
  if(!wrap || !title) return;
  var labels = {
    present:'Présent', imparfait:'Imparfait', passe:'Passé composé', ppq:'Plus-que-parfait',
    futur:'Futur simple', proche:'Futur proche', cond:'Conditionnel présent',
    condp:'Conditionnel passé', subj:'Subjonctif', psimple:'Passé simple',
    imp:'Impératif', part:'Participe passé'
  };
  title.textContent = labels[tense] + ' — Les verbes irréguliers';
  var headers = tense === 'subj' ? irregQuePronouns : (tense === 'imp' ? irregImperativePronouns : irregSimplePronouns);
  if(tense === 'part') headers = ['Participe passé','Auxiliaire','العربية'];
  var html = '<div class="tbl-wrap"><table class="tbl irreg-table"><tr><th>Verbe</th>';
  headers.forEach(function(head){ html += '<th>' + escapeHtml(head) + '</th>'; });
  html += '</tr>';
  irregRowsForTense(tense).forEach(function(row){
    html += '<tr><td><strong>' + escapeHtml(row.verb.v) + '</strong><small>' + escapeHtml(row.verb.ar) + '</small></td>';
    row.forms.forEach(function(form){ html += '<td>' + escapeHtml(form) + '</td>'; });
    html += '</tr>';
  });
  html += '</table></div>';
  wrap.innerHTML = html;
}

function toggleInlineIrreg(id, btn){
  var panel = document.getElementById(id);
  if(!panel) return;
  var sec = panel.closest('.sec');
  var card = panel.closest('.inline-irreg-card');
  var willOpen = !panel.classList.contains('visible');
  panel.classList.toggle('visible', willOpen);
  if(sec) sec.classList.toggle('irreg-mode', willOpen);
  if(card) card.classList.toggle('irreg-open', willOpen);
  if(btn) btn.classList.toggle('active', willOpen);
}

function initIrregTables(){
  var tabs = document.getElementById('irregTenseTabs');
  if(!tabs) return;
  tabs.querySelectorAll('[data-irreg-tense]').forEach(function(btn){
    btn.addEventListener('click', function(){
      tabs.querySelectorAll('.pill').forEach(function(pill){ pill.classList.remove('active'); });
      btn.classList.add('active');
      renderIrregTable(btn.getAttribute('data-irreg-tense'));
    });
  });
  renderIrregTable('present');
}

function initInlineIrregSections(){
  var configs = [
    ['present','Présent'], ['imparfait','Imparfait'], ['passe','Passé composé'],
    ['ppq','Plus-que-parfait'], ['futur','Futur simple'], ['proche','Futur proche'],
    ['cond','Conditionnel présent'], ['condp','Conditionnel passé'], ['subj','Subjonctif'],
    ['imp','Impératif'], ['part','Participe passé']
  ];
  configs.forEach(function(item){
    var tense = item[0];
    var label = item[1];
    var sec = document.getElementById('t-' + tense);
    if(!sec || sec.querySelector('.inline-irreg-card')) return;
    var header = sec.querySelector('.sec-header');
    var card = document.createElement('div');
    card.className = 'inline-irreg-card';
    card.innerHTML =
      '<div class="inline-irreg-top">' +
        '<button class="pill inline-irreg-btn" type="button" onclick="toggleInlineIrreg(\'inline-irreg-' + tense + '\',this)"><span class="pi">⚙️</span>Irréguliers</button>' +
      '</div>' +
      '<div class="inline-irreg-panel" id="inline-irreg-' + tense + '">' +
        '<div class="inline-irreg-return"><button class="pill" type="button" onclick="toggleInlineIrreg(\'inline-irreg-' + tense + '\',this)"><span class="pi">←</span>Retour au temps</button></div>' +
        '<div class="note" style="direction:rtl;text-align:right;margin-bottom:14px">جدول الأفعال الشاذة لهذا الزمن: الضمائر في الأعمدة، والأفعال في الصفوف.</div>' +
        '<span class="card-label" id="inline-irreg-title-' + tense + '">' + escapeHtml(label) + ' — Les verbes irréguliers</span>' +
        '<div id="inline-irreg-wrap-' + tense + '"></div>' +
      '</div>';
    if(header) sec.insertBefore(card, header);
    else sec.insertBefore(card, sec.firstChild);
    renderIrregTable(tense, 'inline-irreg-wrap-' + tense, 'inline-irreg-title-' + tense);
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

// ── Devoirs Marianne ──
var marianneDevoirs = [
  {
    "date": "Samedi 14/2",
    "question": [
      "Mettez ces mots dans une phrase (une phrase pour chaque mot) : le, la, les, je, tu, nous."
    ],
    "devoir": [
      "le → Le résultat de cette analyse scientifique est indéniablement remarquable.",
      "la → La complexité de la situation nous oblige à reconsidérer nos priorités.",
      "les → Les décisions prises lors de cette réunion auront des répercussions durables.",
      "je → Je m'efforce quotidiennement d'approfondir mes connaissances en linguistique.",
      "tu → Tu as démontré une capacité remarquable à surmonter les obstacles.",
      "nous → Nous sommes collectivement responsables de l'avenir de notre société."
    ],
    "shortDevoir": [
      "le → Le directeur a pris une décision importante.",
      "la → La réunion commence à neuf heures.",
      "les → Les résultats sont excellents cette année.",
      "je → Je travaille dans une grande entreprise.",
      "tu → Tu parles français avec beaucoup d'aisance.",
      "nous → Nous partageons les mêmes valeurs professionnelles."
    ]
  },
  {
    "date": "Dimanche 15/2",
    "question": [
      "Répondez à ces questions : Comment vous appelez-vous ? / Quel âge avez-vous ? / Quelle est votre nationalité ? / Quelle est votre profession ?"
    ],
    "devoir": [
      "Comment vous appelez-vous ? → Je me permets de me présenter : je m'appelle Marie Dupont, bien que mes collègues m'appellent affectueusement « Marie D ».",
      "Quel âge avez-vous ? → J'ai trente-cinq ans, un âge où l'expérience commence à se conjuguer harmonieusement avec l'ambition.",
      "Quelle est votre nationalité ? → Je suis française, bien qu'ayant vécu à l'étranger pendant près d'une décennie, ce qui m'a forgé une identité culturelle plurielle.",
      "Quelle est votre profession ? → J'exerce la profession d'ingénieure en systèmes d'information, une discipline à la croisée de la technologie et de la gestion de projets complexes."
    ],
    "shortDevoir": [
      "Comment vous appelez-vous ? → Je m'appelle Sophie Martin.",
      "Quel âge avez-vous ? → J'ai trente-deux ans.",
      "Quelle est votre nationalité ? → Je suis française.",
      "Quelle est votre profession ? → Je suis ingénieure en informatique."
    ]
  },
  {
    "date": "Lundi 16/2",
    "question": [
      "Mettez ces mots dans une phrase (une phrase pour chaque mot) : un, une, des, vous, ils."
    ],
    "devoir": [
      "un → Un bouleversement aussi profond que celui-là ne saurait laisser indifférent quiconque s'intéresse aux enjeux contemporains.",
      "une → Une telle opportunité ne se présente qu'une seule fois dans une carrière, il serait imprudent de la négliger.",
      "des → Des recherches approfondies ont démontré que le bilinguisme renforce considérablement les capacités cognitives.",
      "vous → Vous avez su, avec une élégance rare, concilier rigueur professionnelle et empathie humaine.",
      "ils → Ils ont collectivement contribué à l'élaboration d'une stratégie dont les effets bénéfiques se font déjà sentir."
    ],
    "shortDevoir": [
      "un → Un bon livre change souvent notre façon de penser.",
      "une → Une solution efficace a été trouvée rapidement.",
      "des → Des progrès remarquables ont été réalisés cette année.",
      "vous → Vous avez accompli un travail de grande qualité.",
      "ils → Ils voyagent régulièrement pour des raisons professionnelles."
    ]
  },
  {
    "date": "Jeudi 19/2",
    "question": [
      "Composez des phrases avec les adjectifs possessifs suivants (une phrase pour chaque mot) : mon, tes, sa, notre, vos, leurs."
    ],
    "devoir": [
      "mon → Mon engagement envers ce projet dépasse largement le cadre de mes obligations contractuelles.",
      "tes → Tes arguments, bien qu'audacieux, reposent sur une logique dont on ne saurait contester la cohérence.",
      "sa → Sa maîtrise exceptionnelle du sujet lui confère une autorité naturelle que nul ne songea jamais à remettre en question.",
      "notre → Notre responsabilité collective est d'œuvrer sans relâche à la préservation d'un environnement viable pour les générations futures.",
      "vos → Vos contributions ont indéniablement enrichi la réflexion collective et orienté nos décisions dans la bonne direction.",
      "leurs → Leurs efforts conjugués ont permis d'aboutir à un accord dont la portée historique ne fait aucun doute."
    ],
    "shortDevoir": [
      "mon → Mon collègue présente le projet ce matin.",
      "tes → Tes idées sont toujours pertinentes et bien argumentées.",
      "sa → Sa maîtrise du sujet impressionne tous ses collègues.",
      "notre → Notre objectif est d'améliorer la qualité des services.",
      "vos → Vos efforts ont largement contribué au succès du projet.",
      "leurs → Leurs décisions ont eu un impact positif sur l'équipe."
    ]
  },
  {
    "date": "Dimanche 22/2",
    "question": [
      "Écrivez 4 phrases en utilisant les expressions de salutations."
    ],
    "devoir": [
      "Bonjour, permettez-moi de vous souhaiter une excellente journée et de vous exprimer toute ma gratitude pour votre accueil chaleureux.",
      "Bonsoir, je suis ravi de vous retrouver ce soir dans un cadre aussi propice aux échanges fructueux.",
      "Salut ! Ça fait une éternité qu'on ne s'est pas vus — comment tu vas, vraiment ?",
      "Au revoir et prenez bien soin de vous ; j'espère sincèrement que nous aurons l'occasion de nous revoir prochainement."
    ],
    "shortDevoir": [
      "Bonjour, je suis ravi de vous rencontrer enfin.",
      "Bonsoir, j'espère que votre journée s'est bien passée.",
      "Salut, ça fait longtemps qu'on ne s'est pas vus !",
      "Au revoir et bonne continuation dans vos projets."
    ]
  },
  {
    "date": "Lundi 23/2",
    "question": [
      "Mettez ces verbes dans une phrase (conjuguez au présent) : travailler, manger, faire, changer, louer, penser, voyager, commencer (avec nous)."
    ],
    "devoir": [
      "travailler → Je travaille dans un environnement intellectuellement stimulant qui me pousse à me surpasser en permanence.",
      "manger → Elle mange avec discernement, privilégiant une alimentation équilibrée qui reflète ses convictions écologiques.",
      "faire → Il fait preuve d'une détermination sans faille face aux obstacles qui jalonnent son parcours.",
      "changer → Le monde change à une vitesse vertigineuse, ce qui exige une capacité d'adaptation constante.",
      "louer → Nous louons les mérites d'une approche collaborative qui favorise l'émergence de solutions innovantes.",
      "penser → Je pense qu'une réflexion approfondie est indispensable avant de prendre une décision aussi lourde de conséquences.",
      "voyager → Voyager permet d'élargir considérablement ses horizons et de remettre en perspective ses propres certitudes.",
      "commencer → Nous commençons à percevoir les premiers signes encourageants d'une transformation profonde de nos pratiques."
    ],
    "shortDevoir": [
      "travailler → Je travaille dans le secteur de la finance depuis cinq ans.",
      "manger → Elle mange équilibré pour maintenir une bonne santé.",
      "faire → Il fait preuve d'une grande rigueur dans son travail.",
      "changer → Le marché change rapidement et exige une grande adaptabilité.",
      "louer → Nous louons un appartement en plein centre-ville.",
      "penser → Je pense que cette solution est la plus appropriée.",
      "voyager → Elle voyage souvent en Europe pour ses missions professionnelles.",
      "commencer → Nous commençons la réunion à l'heure prévue."
    ]
  },
  {
    "date": "Mardi 24/2",
    "question": [
      "Mettez ces verbes dans une phrase (conjuguez au présent) : venir, aller, prendre, être, avoir, faire, finir, réussir, grandir."
    ],
    "devoir": [
      "venir → Je viens de réaliser à quel point la persévérance constitue le fondement de toute réussite durable.",
      "aller → Elle va au-delà des attentes, dépassant systématiquement les objectifs qui lui sont assignés.",
      "prendre → Il prend soin de peser chaque mot avant de s'exprimer, conscient de l'impact que ses paroles peuvent avoir.",
      "être → Nous sommes convaincus que la diversité des points de vue enrichit inévitablement la qualité des décisions collectives.",
      "avoir → J'ai la certitude que l'éducation demeure le levier le plus puissant de transformation sociale.",
      "faire → Faire preuve de créativité dans l'adversité est une compétence que peu de personnes possèdent naturellement.",
      "finir → Elle finit toujours ce qu'elle commence, une qualité rare qui force le respect de tous ses collaborateurs.",
      "réussir → Il réussit là où beaucoup échouent, non par chance, mais grâce à une discipline exemplaire.",
      "grandir → On grandit véritablement non pas dans les moments de confort, mais dans ceux qui nous confrontent à nos limites."
    ],
    "shortDevoir": [
      "venir → Je viens de terminer une formation très enrichissante.",
      "aller → Elle va au bureau à pied chaque matin.",
      "prendre → Il prend le temps d'analyser chaque situation avec soin.",
      "être → Nous sommes convaincus que ce projet va réussir.",
      "avoir → J'ai confiance en la capacité de mon équipe.",
      "faire → Elle fait du sport trois fois par semaine.",
      "finir → Il finit toujours ses tâches avant la date limite.",
      "réussir → Elle réussit grâce à sa discipline et sa persévérance.",
      "grandir → On grandit en affrontant ses difficultés avec courage."
    ]
  },
  {
    "date": "Jeudi 26/2",
    "question": [
      "Mettez ces verbes dans une phrase (conjuguez au présent) : saisir, agir, boire, sortir, croire, choisir."
    ],
    "devoir": [
      "saisir → Elle saisit chaque opportunité avec une acuité remarquable, transformant les circonstances les plus anodines en tremplins vers la réussite.",
      "agir → Il est impératif d'agir avec discernement lorsque les enjeux dépassent le seul cadre personnel.",
      "boire → Elle boit ses paroles avec une avidité qui témoigne de sa soif insatiable de connaissance.",
      "sortir → Il sort des sentiers battus avec une audace qui force l'admiration, même de ses détracteurs les plus acharnés.",
      "croire → Je crois fermement que la solidarité constitue l'une des valeurs cardinales d'une société épanouie.",
      "choisir → Choisir, c'est renoncer ; or, c'est précisément dans ce renoncement que réside la véritable liberté."
    ],
    "shortDevoir": [
      "saisir → Elle saisit chaque opportunité qui se présente à elle.",
      "agir → Il agit toujours avec prudence et discernement.",
      "boire → Elle boit du café chaque matin avant de commencer à travailler.",
      "sortir → Il sort des idées originales lors de chaque réunion créative.",
      "croire → Je crois fermement en la valeur du travail d'équipe.",
      "choisir → Elle choisit ses mots avec soin pour éviter tout malentendu."
    ]
  },
  {
    "date": "Samedi 28/2",
    "question": [
      "Mettez ces verbes dans une phrase (conjuguez au présent) : attendre, mettre, conduire, partir, vouloir."
    ],
    "devoir": [
      "attendre → J'attends avec une impatience mêlée d'appréhension les résultats de cette évaluation déterminante.",
      "mettre → Elle met un soin particulier à rédiger ses rapports, consciente que la forme conditionne souvent la réception du fond.",
      "conduire → Il conduit ses équipes avec une vision claire et une autorité bienveillante qui suscitent un engagement sincère.",
      "partir → Partir à l'aventure sans filet de sécurité requiert un courage que seuls les esprits vraiment libres sont capables de mobiliser.",
      "vouloir → Je veux croire que les efforts consentis aujourd'hui porteront leurs fruits dans un avenir que j'espère proche."
    ],
    "shortDevoir": [
      "attendre → J'attends les résultats de l'analyse avec impatience.",
      "mettre → Elle met beaucoup de soin dans la rédaction de ses rapports.",
      "conduire → Il conduit son équipe vers des objectifs ambitieux.",
      "partir → Elle part en mission à l'étranger la semaine prochaine.",
      "vouloir → Je veux améliorer mon niveau de français de façon significative."
    ]
  },
  {
    "date": "Mardi 3 mars",
    "question": [
      "Mettez ces verbes dans une phrase (conjuguez au présent) : se réveiller, se brosser, se préparer, s'habiller, se lever, se dépêcher, se laver."
    ],
    "devoir": [
      "se réveiller → Je me réveille chaque matin avec la conviction renouvelée que la journée qui commence recèle des possibilités infinies.",
      "se brosser → Elle se brosse les dents avec une minutie qui reflète l'attention qu'elle porte à chaque détail de son quotidien.",
      "se préparer → Il se prépare mentalement pendant des heures avant chaque intervention publique d'envergure.",
      "s'habiller → Elle s'habille avec un sens de l'élégance qui trahit une connaissance approfondie des codes vestimentaires.",
      "se lever → Je me lève à l'aube, persuadé que ces heures de silence sont les plus propices à la réflexion créatrice.",
      "se dépêcher → Il se dépêche sans jamais donner l'impression de précipitation, une aptitude qui force l'admiration.",
      "se laver → Se laver les mains avant de cuisiner est un geste aussi simple qu'indispensable à la préservation de la santé collective."
    ],
    "shortDevoir": [
      "se réveiller → Je me réveille à six heures chaque matin sans réveil.",
      "se brosser → Elle se brosse les dents après chaque repas.",
      "se préparer → Il se prépare la veille pour ne rien oublier le lendemain.",
      "s'habiller → Elle s'habille avec élégance pour chaque réunion importante.",
      "se lever → Je me lève tôt pour profiter du calme du matin.",
      "se dépêcher → Il se dépêche pour ne pas manquer son train.",
      "se laver → Je me lave les mains avant chaque repas."
    ]
  },
  {
    "date": "Samedi 7/3",
    "question": [
      "Écrivez 4 phrases avec : « Ne… Pas »."
    ],
    "devoir": [
      "Je ne suis pas de ceux qui capitulent face à l'adversité, aussi redoutable soit-elle.",
      "Elle ne dissimule pas ses convictions derrière un vernis de conformisme qui trahirait son intégrité.",
      "Il ne faut pas sous-estimer la capacité de l'être humain à se réinventer face aux bouleversements les plus profonds.",
      "Nous ne pouvons pas rester indifférents aux inégalités structurelles qui compromettent la cohésion de notre société."
    ],
    "shortDevoir": [
      "Je ne accepte pas les compromis qui nuisent à la qualité du travail.",
      "Elle ne révèle pas ses stratégies avant le moment opportun.",
      "Il ne faut pas négliger les détails dans un projet de cette envergure.",
      "Nous ne pouvons pas ignorer les signaux d'alerte que nous observons."
    ]
  },
  {
    "date": "Dimanche 8/3",
    "question": [
      "Écrivez 2 phrases avec un COD et 2 phrases avec un COI."
    ],
    "devoir": [
      "COD 1 → Elle rédige un rapport exhaustif qui fera office de référence pour l'ensemble des équipes impliquées dans le projet.",
      "COD 2 → Il contemple les conséquences de sa décision avec une lucidité qui témoigne d'une maturité intellectuelle peu commune.",
      "COI 1 → Je parle à mes collaborateurs avec une franchise tempérée par le respect que je leur dois en toutes circonstances.",
      "COI 2 → Elle répond à toutes les objections avec une argumentation si rigoureuse qu'elle laisse ses interlocuteurs sans voix."
    ],
    "shortDevoir": [
      "COD 1 → Elle rédige un rapport détaillé sur les résultats du trimestre.",
      "COD 2 → Il analyse les données avec une grande précision.",
      "COI 1 → Je parle à mon responsable de ce projet chaque semaine.",
      "COI 2 → Elle répond à toutes les questions avec clarté et concision."
    ]
  },
  {
    "date": "Mardi 10/3",
    "question": [
      "Écrivez 6 phrases avec les articles contractés : de, au, des, aux, de la, à la, du, à l', de l'."
    ],
    "devoir": [
      "de → La qualité de son travail dépasse largement les attentes formulées lors de sa prise de poste.",
      "au → Il s'adresse au directeur général avec une assurance tranquille qui témoigne de sa parfaite maîtrise du sujet.",
      "des → Elle tire des conclusions d'une finesse analytique remarquable à partir de données qui auraient échappé à d'autres.",
      "aux → Elle s'adresse aux membres du jury avec une éloquence naturelle qui capte instantanément leur attention.",
      "de la → Il fait preuve de la patience nécessaire pour accompagner ses équipes dans les périodes de transition les plus difficiles.",
      "à la → Elle aspire à la reconnaissance non par vanité, mais parce qu'elle y voit une validation de ses efforts constants.",
      "du → La profondeur du débat suscité par cette proposition témoigne de sa pertinence et de son caractère novateur.",
      "à l' → Elle consacre une grande partie de son temps à l'élaboration de stratégies innovantes pour les défis à venir.",
      "de l' → La qualité de l'environnement de travail influe considérablement sur la productivité et le bien-être des employés."
    ],
    "shortDevoir": [
      "de → La qualité de son travail est reconnue par tous.",
      "au → Il s'adresse au directeur avec assurance.",
      "des → Elle tire des conclusions pertinentes de ses recherches.",
      "aux → Elle parle aux membres de l'équipe avec respect.",
      "de la → Il fait preuve de la patience nécessaire dans ce rôle.",
      "à la → Elle aspire à la réussite par le mérite et l'effort.",
      "du → La profondeur du débat révèle la richesse des points de vue.",
      "à l' → Elle consacre son énergie à l'amélioration continue.",
      "de l' → La qualité de l'environnement de travail influence la productivité."
    ]
  },
  {
    "date": "Jeudi 12/3",
    "question": [
      "Écrivez 6 phrases avec : ce, cet, cette, ces."
    ],
    "devoir": [
      "ce → Ce projet ambitieux requiert une coordination sans faille entre des équipes aux compétences complémentaires.",
      "cet → Cet homme d'exception a consacré l'intégralité de sa carrière à la défense des causes les plus nobles.",
      "cette → Cette analyse rigoureuse met en lumière des failles structurelles que personne n'avait osé pointer auparavant.",
      "ces → Ces découvertes scientifiques majeures ouvrent des perspectives insoupçonnées pour la médecine de demain.",
      "ce → Ce qu'il accomplit chaque jour avec une discrétion exemplaire mérite bien davantage que la simple reconnaissance de ses pairs.",
      "cette → Cette décision, bien qu'impopulaire à court terme, s'avérera déterminante pour la pérennité de l'organisation."
    ],
    "shortDevoir": [
      "ce → Ce projet exige une coordination rigoureuse entre toutes les équipes.",
      "cet → Cet homme a consacré sa carrière au service de l'intérêt général.",
      "cette → Cette analyse révèle des tendances que peu avaient anticipées.",
      "ces → Ces résultats confirment la pertinence de notre approche.",
      "ce → Ce choix s'avérera déterminant pour l'avenir de l'entreprise.",
      "cette → Cette décision a été prise après une réflexion approfondie."
    ]
  },
  {
    "date": "Vendredi 13/3",
    "question": [
      "Écrivez des phrases avec ces verbes : savoir, conduire, pouvoir, se souvenir, se taire, s'évanouir, aimer, adorer, préférer."
    ],
    "devoir": [
      "savoir → Elle sait naviguer avec une aisance déconcertante dans les eaux troubles de la politique institutionnelle.",
      "conduire → Il conduit ses négociations avec une habileté diplomatique qui force l'admiration de ses adversaires eux-mêmes.",
      "pouvoir → La faculté de pouvoir reconnaître ses erreurs est l'une des marques les plus sûres d'une véritable maturité.",
      "se souvenir → Elle se souvient avec une précision troublante de chaque détail des conversations qui ont jalonné sa carrière.",
      "se taire → Savoir se taire au bon moment est un art que peu de personnes maîtrisent avec autant de grâce qu'elle.",
      "s'évanouir → Ses certitudes s'évanouissent progressivement au contact d'une réalité bien plus complexe qu'il ne l'avait imaginé.",
      "aimer → J'aime profondément cette langue qui me révèle chaque jour de nouvelles nuances de la pensée humaine.",
      "adorer → Elle adore les défis qui semblent insurmontables, car c'est précisément dans ces moments qu'elle se surpasse.",
      "préférer → Il préfère la sobriété à l'ostentation, convaincu que l'élégance véritable réside dans la retenue."
    ],
    "shortDevoir": [
      "savoir → Elle sait gérer les situations difficiles avec sang-froid.",
      "conduire → Il conduit ses négociations avec habileté et diplomatie.",
      "pouvoir → Je peux vous assurer que les résultats seront au rendez-vous.",
      "se souvenir → Elle se souvient de chaque détail important des réunions.",
      "se taire → Il sait se taire au bon moment, ce qui est une vraie qualité.",
      "s'évanouir → Ses doutes s'évanouissent dès qu'elle se met au travail.",
      "aimer → J'aime les défis qui poussent à se surpasser.",
      "adorer → Elle adore les projets innovants qui sortent de l'ordinaire.",
      "préférer → Il préfère la clarté à la complexité inutile."
    ]
  },
  {
    "date": "Samedi 14/3",
    "question": [
      "Conjuguez chaque verbe au futur simple ensuite mettez-le dans une phrase : savoir, venir, pleuvoir, avoir, être, aller, faire."
    ],
    "devoir": [
      "savoir (saura) → Elle saura tirer parti de chaque expérience, si éprouvante soit-elle, pour en faire une source de croissance personnelle.",
      "venir (viendra) → Il viendra le moment où nos efforts patients porteront enfin les fruits que nous espérons depuis si longtemps.",
      "pleuvoir (pleuvra) → Il pleuvra sans doute sur nos projets des critiques acerbes, mais rien ne nous détournera de notre objectif.",
      "avoir (aura) → Elle aura toujours la sagesse de consulter ceux dont l'expérience dépasse la sienne avant de trancher.",
      "être (sera) → Ce sera une épreuve redoutable, mais je suis convaincu que nous en sortirons grandis et plus solidaires.",
      "aller (ira) → Il ira jusqu'au bout de ses convictions, quels que soient les obstacles qui se dresseront sur son chemin.",
      "faire (fera) → Elle fera de ce défi apparemment insurmontable une vitrine de sa créativité et de sa résilience."
    ],
    "shortDevoir": [
      "savoir (saura) → Elle saura trouver la meilleure solution en temps voulu.",
      "venir (viendra) → Le moment viendra où nos efforts seront récompensés.",
      "pleuvoir (pleuvra) → Il pleuvra sans doute des critiques, mais notre position est solide.",
      "avoir (aura) → Elle aura toujours l'appui de son équipe dans les moments difficiles.",
      "être (sera) → Ce sera une étape décisive dans notre développement.",
      "aller (ira) → Il ira jusqu'au bout de ses engagements, quoi qu'il arrive.",
      "faire (fera) → Elle fera de ce défi une opportunité de croissance."
    ]
  },
  {
    "date": "Dimanche 15/3",
    "question": [
      "Conjuguez chaque verbe au futur simple ensuite mettez-le dans une phrase : finir, venir, tenir, devoir, voyager, pouvoir, prendre."
    ],
    "devoir": [
      "finir (finira) → Elle finira ce projet avec le même soin méticuleux qu'elle a consacré à chacune de ses étapes.",
      "venir (viendrons) → Nous viendrons à bout de ces difficultés à condition de maintenir une cohésion sans faille au sein de l'équipe.",
      "tenir (tiendra) → Il tiendra sa promesse envers et contre tout, car sa parole constitue le socle de sa crédibilité.",
      "devoir (devra) → Elle devra faire preuve d'une diplomatie exceptionnelle pour concilier des intérêts aussi divergents.",
      "voyager (voyagerons) → Nous voyagerons à travers des contrées inexplorées de la connaissance humaine au fil de cette formation remarquable.",
      "pouvoir (pourra) → Il ne pourra atteindre ses objectifs ambitieux qu'en s'entourant des compétences complémentaires aux siennes.",
      "prendre (prendront) → Ils prendront conscience, trop tardivement peut-être, de l'ampleur des conséquences de leur inaction."
    ],
    "shortDevoir": [
      "finir (finira) → Elle finira ce dossier avec le même sérieux qu'à son habitude.",
      "venir (viendrons) → Nous viendrons à bout de ces obstacles en travaillant ensemble.",
      "tenir (tiendra) → Il tiendra parole, c'est une certitude pour tous ceux qui le connaissent.",
      "devoir (devra) → Elle devra faire preuve de diplomatie dans cette négociation délicate.",
      "voyager (voyagerons) → Nous voyagerons à travers plusieurs pays lors de cette mission.",
      "pouvoir (pourra) → Il ne pourra réussir qu'en s'appuyant sur des compétences complémentaires.",
      "prendre (prendront) → Ils prendront conscience des enjeux lorsque les résultats arriveront."
    ]
  },
  {
    "date": "Mardi 17/3",
    "question": [
      "Conjuguez chaque verbe au futur proche ensuite mettez-le dans une phrase : sortir, manger, changer, aller, rencontrer."
    ],
    "devoir": [
      "sortir → Elle va sortir de sa zone de confort avec la détermination de celle qui sait que la vraie croissance exige l'inconfort.",
      "manger → Nous allons manger ensemble pour célébrer dignement la conclusion d'un partenariat qui nous tient tous à cœur.",
      "changer → Ce tournant décisif va changer la trajectoire de l'entreprise d'une manière que peu auraient osé anticiper.",
      "aller → Il va aller de l'avant, porté par une vision claire et une volonté que rien ne semble en mesure d'entamer.",
      "rencontrer → Je vais rencontrer des personnalités dont l'influence sur mon parcours sera, j'en suis persuadé, considérable."
    ],
    "shortDevoir": [
      "sortir → Elle va sortir de sa zone de confort pour développer de nouvelles compétences.",
      "manger → Nous allons manger ensemble pour fêter la fin du projet.",
      "changer → Ce plan va changer notre façon de travailler de manière positive.",
      "aller → Il va aller de l'avant avec détermination malgré les obstacles.",
      "rencontrer → Je vais rencontrer des partenaires stratégiques lors de ce salon."
    ]
  },
  {
    "date": "Lundi 23/3",
    "question": [
      "Conjuguez chaque verbe au passé composé ensuite mettez-le dans une phrase : manger, nager, changer, aller, rentrer, finir, prendre, faire."
    ],
    "devoir": [
      "manger (a mangé) → Il a mangé avec une lenteur délibérée, savourant chaque bouchée comme si c'était la dernière d'un festin mémorable.",
      "nager (a nagé) → Elle a nagé contre le courant toute sa vie, et c'est précisément ce qui l'a conduite là où elle se trouve aujourd'hui.",
      "changer (a changé) → Cette expérience fondatrice a changé sa façon d'appréhender le monde de manière irréversible.",
      "aller (est allé) → Il est allé au-delà de ce que quiconque aurait pu raisonnablement espérer de lui dans ces circonstances.",
      "rentrer (est rentrée) → Elle est rentrée transformée d'un voyage qui a bouleversé ses certitudes les plus ancrées.",
      "finir (a fini) → Il a fini par comprendre que la persévérance, bien plus que le talent brut, est le véritable moteur du succès.",
      "prendre (a pris) → Elle a pris la mesure des enjeux avec une acuité qui a impressionné jusqu'à ses interlocuteurs les plus exigeants.",
      "faire (a fait) → Il a fait preuve d'une intégrité exemplaire dans une situation où la compromission aurait été si aisée."
    ],
    "shortDevoir": [
      "manger (a mangé) → Il a mangé rapidement avant de reprendre le travail.",
      "nager (a nagé) → Elle a nagé contre le courant toute sa vie professionnelle.",
      "changer (a changé) → Cette expérience a changé sa vision du management.",
      "aller (est allé) → Il est allé au-delà des attentes lors de ce projet.",
      "rentrer (est rentrée) → Elle est rentrée transformée de ce voyage professionnel.",
      "finir (a fini) → Il a fini par trouver la solution après de longues recherches.",
      "prendre (a pris) → Elle a pris les bonnes décisions dans un contexte très difficile.",
      "faire (a fait) → Il a fait preuve d'une intégrité exemplaire tout au long du projet."
    ]
  },
  {
    "date": "Lundi 13/4",
    "question": [
      "Racontez ce que vous avez fait la semaine dernière en utilisant (4 ou 5 phrases) : le passé composé + imparfait."
    ],
    "devoir": [
      "La semaine dernière a été particulièrement riche en émotions et en apprentissages de toutes sortes.",
      "Lundi, alors que je me préparais pour une réunion cruciale, j'ai reçu une nouvelle qui a bouleversé l'ordre de mes priorités.",
      "Mercredi, j'ai assisté à une conférence sur l'intelligence artificielle qui m'a ouvert des perspectives auxquelles je n'avais jamais osé penser.",
      "Pendant que je prenais des notes, je réalisais combien notre domaine évoluait à une vitesse qui rendait toute certitude précaire.",
      "Vendredi, épuisé mais profondément enrichi, j'ai décidé de consigner toutes ces réflexions dans un carnet qui deviendra peut-être un jour la matière d'un essai."
    ],
    "shortDevoir": [
      "La semaine dernière a été très productive sur le plan professionnel.",
      "Lundi, alors que je préparais une présentation importante, j'ai reçu de très bonnes nouvelles.",
      "Mercredi, j'ai assisté à une conférence passionnante sur les nouvelles technologies.",
      "Pendant que j'écoutais les intervenants, je réalisais combien le domaine évoluait rapidement.",
      "Vendredi, j'ai décidé de noter toutes mes réflexions pour m'en inspirer dans mes prochains projets."
    ]
  },
  {
    "date": "Mercredi 15/4",
    "question": [
      "Écrivez 6 phrases au présent avec : ne… plus, ne… jamais, ne… personne, ne… rien, ne… aucun, ne… pas."
    ],
    "devoir": [
      "ne… plus → Je ne me laisse plus influencer par des opinions superficielles qui ne reposent sur aucun fondement solide.",
      "ne… jamais → Elle ne trahit jamais la confiance que ses collaborateurs ont placée en elle, quelle que soit la pression exercée.",
      "ne… personne → Dans ce vaste projet, il ne consulte personne sans s'être d'abord forgé une opinion documentée sur la question.",
      "ne… rien → Il ne laisse rien au hasard, orchestrant chaque détail avec une précision qui confine au perfectionnisme.",
      "ne… aucun → Elle n'éprouve aucune difficulté à s'adapter à des environnements radicalement différents de celui où elle a évolué.",
      "ne… pas → Nous ne saurions pas tolérer des comportements qui compromettent la cohésion et l'intégrité de notre collectif."
    ],
    "shortDevoir": [
      "ne… plus → Je ne me laisse plus influencer par des opinions sans fondement.",
      "ne… jamais → Elle ne trahit jamais la confiance que ses collègues lui accordent.",
      "ne… personne → Il ne consulte personne sans s'être d'abord bien documenté.",
      "ne… rien → Elle ne laisse rien au hasard dans l'organisation de ses projets.",
      "ne… aucun → Il n'éprouve aucune difficulté à s'adapter à de nouveaux environnements.",
      "ne… pas → Nous ne saurions pas tolérer des comportements contraires à nos valeurs."
    ]
  },
  {
    "date": "Jeudi 16/4",
    "question": [
      "Écrivez 6 phrases avec : précisément, depuis, lentement, alors, partout, tellement."
    ],
    "devoir": [
      "précisément → C'est précisément cette capacité à identifier les leviers de changement qui distingue les vrais leaders des simples gestionnaires.",
      "depuis → Depuis qu'elle a intégré cette organisation, elle n'a cessé d'insuffler une dynamique nouvelle qui a revitalisé l'ensemble des équipes.",
      "lentement → La confiance se construit lentement, au fil d'actes concrets et cohérents, et se perd en un instant d'imprudence.",
      "alors → Alors que le monde s'accélérait autour de lui, il choisissait délibérément de ralentir pour mieux appréhender l'essentiel.",
      "partout → Son influence se fait sentir partout où des décisions stratégiques sont prises, bien qu'il reste lui-même dans l'ombre.",
      "tellement → L'enjeu est tellement crucial qu'aucune approximation ne saurait être tolérée à quelque stade du processus que ce soit."
    ],
    "shortDevoir": [
      "précisément → C'est précisément cette qualité qui distingue les bons managers des grands leaders.",
      "depuis → Depuis son arrivée, elle a insufflé une nouvelle dynamique à toute l'équipe.",
      "lentement → La confiance se construit lentement mais se perd très rapidement.",
      "alors → Alors que tout semblait compromis, il a trouvé une solution inattendue.",
      "partout → Son influence positive se fait sentir partout dans l'organisation.",
      "tellement → L'enjeu est tellement crucial qu'aucune erreur ne peut être tolérée."
    ]
  },
  {
    "date": "Dimanche 19/4",
    "question": [
      "Écrivez 6 phrases avec : sérieusement, rapidement, toutefois, maintenant, fortement, totalement."
    ],
    "devoir": [
      "sérieusement → Il prend sérieusement en considération chaque objection formulée, y voyant une opportunité d'affiner sa propre réflexion.",
      "rapidement → Elle a rapidement saisi que la clé du succès résidait non dans la vitesse d'exécution, mais dans la pertinence des choix effectués.",
      "toutefois → La proposition est séduisante ; toutefois, elle mérite d'être soumise à un examen critique rigoureux avant toute validation.",
      "maintenant → Maintenant que les bases solides ont été posées, il est temps de passer à une phase d'expansion ambitieuse et maîtrisée.",
      "fortement → Je suis fortement convaincu que l'investissement dans la formation constitue le meilleur levier de performance à long terme.",
      "totalement → Elle s'est totalement réinventée au contact d'expériences qui ont radicalement transformé sa vision du monde et d'elle-même."
    ],
    "shortDevoir": [
      "sérieusement → Il prend sérieusement en compte chaque retour de ses clients.",
      "rapidement → Elle a rapidement identifié les points faibles de la stratégie.",
      "toutefois → La proposition est intéressante ; toutefois, elle nécessite un examen approfondi.",
      "maintenant → Maintenant que les bases sont posées, nous pouvons passer à l'action.",
      "fortement → Je suis fortement convaincu que la formation est un investissement essentiel.",
      "totalement → Elle s'est totalement investie dans ce projet depuis le premier jour."
    ]
  },
  {
    "date": "Mercredi 22/4",
    "question": [
      "Écrivez 5 phrases en utilisant les articles partitifs : de la, de l', du."
    ],
    "devoir": [
      "de la → Elle fait preuve de la plus grande discrétion lorsqu'il s'agit de sujets qui touchent à la sphère privée de ses collaborateurs.",
      "de la → Il faut de la persévérance, certes, mais aussi de la lucidité pour distinguer l'obstination stérile de la ténacité productive.",
      "de l' → Il dégage de l'assurance sans jamais sombrer dans l'arrogance, un équilibre subtil que peu parviennent à maintenir durablement.",
      "du → Elle a du caractère, une qualité précieuse dans un univers professionnel qui valorise trop souvent la conformité au détriment de l'authenticité.",
      "du → Il tire du sens de chacune de ses expériences, même les plus douloureuses, les transformant en socle de sa sagesse personnelle."
    ],
    "shortDevoir": [
      "de la → Elle fait preuve de la rigueur nécessaire dans chacune de ses missions.",
      "de la → Il faut de la patience pour obtenir des résultats durables.",
      "de l' → Il dégage de l'assurance sans jamais tomber dans l'arrogance.",
      "du → Elle a du talent et sait le mettre au service de son équipe.",
      "du → Il tire du sens de chaque expérience, même des plus difficiles."
    ]
  },
  {
    "date": "Jeudi 23/4",
    "question": [
      "Écrivez 5 phrases avec : propre, grand, jolie, intelligent, rouge."
    ],
    "devoir": [
      "propre → Sa réputation, longtemps ternie par des malentendus, est désormais propre de toute ambiguïté grâce à ses actes exemplaires.",
      "grand → Il nourrit de grandes ambitions, non par démesure, mais parce qu'il croit profondément en la capacité humaine à se transcender.",
      "jolie → Cette jolie formule masque une pensée d'une complexité et d'une profondeur qui ne se révèlent qu'à la relecture attentive.",
      "intelligent → Un discours intelligent ne cherche pas à éblouir mais à éclairer, à convaincre par la force de la raison plutôt que par l'éclat des mots.",
      "rouge → Son visage vira au rouge sous l'effet d'une émotion qu'il s'efforçait visiblement de contenir derrière une façade de sérénité."
    ],
    "shortDevoir": [
      "propre → Sa réputation est désormais propre de toute ambiguïté.",
      "grand → Il a de grandes ambitions et les moyens de les réaliser.",
      "jolie → Cette jolie formule résume parfaitement notre vision stratégique.",
      "intelligent → Un discours intelligent convainc par la logique, pas par l'émotion.",
      "rouge → Son visage est devenu rouge sous l'effet d'une émotion sincère."
    ]
  },
  {
    "date": "Dimanche 25/4",
    "question": [
      "Écrivez 5 phrases en utilisant 5 adjectifs de votre choix."
    ],
    "devoir": [
      "remarquable → Son parcours est remarquable à plus d'un titre, illustrant à merveille ce que la volonté peut accomplir face à l'adversité.",
      "complexe → La situation est d'une complexité telle qu'elle exige une analyse pluridisciplinaire avant toute tentative de résolution.",
      "indispensable → La confiance mutuelle est indispensable à la construction d'une collaboration durable et véritablement productive.",
      "subtil → Le message qu'il cherche à transmettre est subtil, et seuls ceux qui savent lire entre les lignes en saisissent toute la portée.",
      "déterminant → Ce choix apparemment anodin s'avérera déterminant dans la trajectoire professionnelle qui s'ouvre devant elle."
    ],
    "shortDevoir": [
      "remarquable → Son parcours est remarquable et inspire tous ses collègues.",
      "complexe → La situation est complexe et exige une analyse pluridisciplinaire.",
      "indispensable → La confiance est indispensable à toute collaboration réussie.",
      "subtil → Son message est subtil mais très efficace.",
      "déterminant → Ce choix sera déterminant pour l'avenir de l'équipe."
    ]
  },
  {
    "date": "Lundi 27/4",
    "question": [
      "Écrivez 6 phrases au passé composé avec : ne… plus, ne… nulle part, ne… personne, ne… rien, ne… aucun."
    ],
    "devoir": [
      "ne… plus → Elle n'a plus accepté les compromis qui auraient jadis sacrifié ses convictions sur l'autel de la tranquillité.",
      "ne… nulle part → Il n'a trouvé nulle part ailleurs la sérénité qu'il avait pourtant cherchée dans des contrées lointaines et méconnues.",
      "ne… personne → Pendant toute la durée de la crise, elle n'a consulté personne sans au préalable s'être assurée de la confidentialité requise.",
      "ne… rien → Il n'a rien laissé transparaître de ses doutes intérieurs, maintenant une façade impénétrable face à ses équipes désemparées.",
      "ne… aucun → Elle n'a éprouvé aucun regret face à une décision dont elle avait, en son for intérieur, mesuré toutes les implications.",
      "ne… aucun → Il n'a accordé aucun crédit aux rumeurs malveillantes qui cherchaient à ternir une réputation durement bâtie."
    ],
    "shortDevoir": [
      "ne… plus → Elle n'a plus accepté les compromis contraires à ses valeurs.",
      "ne… nulle part → Il n'a trouvé nulle part la sérénité qu'il recherchait.",
      "ne… personne → Elle n'a consulté personne sans garantir la confidentialité requise.",
      "ne… rien → Il n'a rien laissé transparaître de ses doutes face à son équipe.",
      "ne… aucun → Elle n'a éprouvé aucun regret après cette décision difficile.",
      "ne… aucun → Il n'a accordé aucun crédit aux rumeurs qui circulaient."
    ]
  },
  {
    "date": "Mercredi 29/4",
    "question": [
      "Qu'est-ce que vous comptez faire le week-end prochain ? Écrivez un petit paragraphe en utilisant le futur simple et le futur proche."
    ],
    "devoir": [
      "Le week-end prochain s'annonce comme une parenthèse bien méritée après des semaines d'une intensité remarquable.",
      "Samedi matin, je vais consacrer quelques heures à la lecture d'un essai philosophique qui me tient à cœur depuis longtemps.",
      "L'après-midi, je retrouverai des amis que je n'ai pas vus depuis des semaines et nous débattrons, comme à notre habitude, de sujets qui dépassent largement le cadre du quotidien.",
      "Dimanche, je vais profiter du silence de l'aube pour rédiger les premières lignes d'un projet d'écriture qui germait en moi depuis des mois.",
      "Ce week-end sera, je l'espère, à la hauteur de cette aspiration profonde à la reconquête de soi que le tourbillon du quotidien rend si difficile à satisfaire."
    ],
    "shortDevoir": [
      "Le week-end prochain sera une vraie pause bien méritée.",
      "Samedi matin, je vais lire un essai qui m'intéresse depuis longtemps.",
      "L'après-midi, je retrouverai des amis pour un déjeuner convivial.",
      "Dimanche, je vais profiter du calme pour avancer sur mon projet d'écriture.",
      "Ce week-end me permettra de recharger mes batteries avant la semaine suivante."
    ]
  },
  {
    "date": "Jeudi 30/4",
    "question": [
      "Donnez-moi 2 phrases avec le conditionnel présent et 2 phrases avec le conditionnel passé en exprimant une condition, un souhait, un reproche et un regret."
    ],
    "devoir": [
      "Conditionnel présent — condition → Si l'on investissait davantage dans la formation continue, les entreprises verraient leur compétitivité s'améliorer de façon spectaculaire.",
      "Conditionnel présent — souhait → Je voudrais pouvoir consacrer davantage de temps à ces échanges qui nourrissent mon intelligence autant qu'ils enrichissent mon âme.",
      "Conditionnel passé — reproche → Tu aurais dû m'informer de cette évolution bien plus tôt, ce qui nous aurait évité des semaines de malentendus coûteux.",
      "Conditionnel passé — regret → J'aurais souhaité avoir eu l'occasion de lui exprimer ma gratitude avant que les circonstances ne nous séparent définitivement."
    ],
    "shortDevoir": [
      "Conditionnel présent — condition → Si l'on investissait davantage en formation, les résultats s'amélioreraient nettement.",
      "Conditionnel présent — souhait → Je voudrais consacrer plus de temps à ces échanges si enrichissants.",
      "Conditionnel passé — reproche → Tu aurais dû m'informer plus tôt pour éviter ces semaines de malentendu.",
      "Conditionnel passé — regret → J'aurais aimé lui exprimer ma gratitude avant que nos chemins se séparent."
    ]
  },
  {
    "date": "Samedi 2/5",
    "question": [
      "Écrivez des phrases avec le pronom COD (le, la, les) et le pronom COI (lui, leur)."
    ],
    "devoir": [
      "COD — le → Ce roman, je le lis avec une lenteur volontaire, pour en savourer chaque nuance stylistique sans me laisser emporter par l'intrigue.",
      "COD — la → Cette opportunité, saisissons-la avec intelligence, car elle ne se représentera pas de sitôt dans des conditions aussi favorables.",
      "COD — les → Ces arguments, il les a pesés longuement avant de les intégrer à une démonstration dont la rigueur ne souffre aucune contestation.",
      "COI — lui → Je lui ai transmis mes observations avec toute la diplomatie requise, conscient de la sensibilité du sujet pour lui.",
      "COI — leur → Elle leur a expliqué, avec une pédagogie remarquable, des concepts que beaucoup auraient jugés inaccessibles à ce stade."
    ],
    "shortDevoir": [
      "COD — le → Ce roman, je le lis avec beaucoup de plaisir et d'attention.",
      "COD — la → Cette opportunité, saisissons-la sans hésiter.",
      "COD — les → Ces arguments, il les a bien pesés avant de les présenter.",
      "COI — lui → Je lui ai transmis mes observations avec toute la tact nécessaire.",
      "COI — leur → Elle leur a expliqué les concepts avec une grande clarté."
    ]
  },
  {
    "date": "Lundi 4/5",
    "question": [
      "Écrivez 2 phrases avec le pronom Y / 2 phrases avec le pronom EN / 2 phrases en utilisant EN et Y dans la même phrase."
    ],
    "devoir": [
      "Y — 1 → J'y pense avec une intensité qui me surprend moi-même, comme si cette idée avait pris racine dans les couches les plus profondes de ma réflexion.",
      "Y — 2 → Elle y retourne chaque année, attirée par une atmosphère qui lui rappelle les instants les plus précieux de son enfance.",
      "EN — 1 → Il en parle avec une passion communicative qui finit invariablement par convaincre même les plus sceptiques de ses interlocuteurs.",
      "EN — 2 → J'en ai tiré des enseignements qui ont durablement réorienté ma façon d'aborder les défis professionnels les plus complexes.",
      "EN + Y — 1 → Au musée, j'y ai découvert une exposition temporaire et j'en suis ressorti profondément bouleversé par la force des œuvres présentées.",
      "EN + Y — 2 → Dans cette bibliothèque où j'y passe des heures entières, j'en extrais chaque fois la matière d'une réflexion nouvelle et enrichissante."
    ],
    "shortDevoir": [
      "Y — 1 → J'y pense souvent, tant cette idée m'a marqué.",
      "Y — 2 → Elle y retourne chaque année avec le même enthousiasme.",
      "EN — 1 → Il en parle avec une passion qui convainc son entourage.",
      "EN — 2 → J'en ai tiré des leçons précieuses pour ma carrière.",
      "EN + Y — 1 → Au musée, j'y ai vu une belle exposition et j'en suis ressorti inspiré.",
      "EN + Y — 2 → Dans cette bibliothèque, j'y passe des heures et j'en rapporte toujours de bonnes idées."
    ]
  },
  {
    "date": "Mercredi 6/5",
    "question": [
      "Posez-moi des questions dans le registre formel et courant, ouvert et fermé."
    ],
    "devoir": [
      "Formel + ouvert → Pourriez-vous nous exposer les fondements théoriques sur lesquels repose votre approche pédagogique ?",
      "Formel + fermé → Avez-vous eu l'occasion de confronter vos méthodes à d'autres systèmes éducatifs au cours de votre carrière ?",
      "Courant + ouvert → Qu'est-ce qui vous a donné envie d'enseigner le français à des apprenants de niveaux si différents ?",
      "Courant + fermé → Est-ce que tu penses que la pratique orale est plus importante que la grammaire pour progresser rapidement ?"
    ],
    "shortDevoir": [
      "Formel + ouvert → Pourriez-vous nous exposer les fondements de votre approche pédagogique ?",
      "Formel + fermé → Avez-vous eu l'occasion de confronter vos méthodes à d'autres systèmes éducatifs ?",
      "Courant + ouvert → Qu'est-ce qui vous a donné envie d'enseigner le français ?",
      "Courant + fermé → Est-ce que tu penses que la pratique orale est plus importante que la grammaire ?"
    ]
  },
  {
    "date": "Vendredi 8/5",
    "question": [
      "Posez des questions avec : 1. Quel 2. Comment 3. Quand 4. Où 5. Quelle 6. De quoi 7. Qui 8. Que"
    ],
    "devoir": [
      "Quel → Quel impact les mutations technologiques auront-elles sur les métiers de demain, et comment nous y préparer dès aujourd'hui ?",
      "Comment → Comment parvient-on à maintenir une cohérence entre ses valeurs profondes et les exigences d'un environnement professionnel en perpétuelle mutation ?",
      "Quand → Quand cesserons-nous de traiter les symptômes pour enfin nous attaquer aux causes structurelles des inégalités persistantes ?",
      "Où → Où se situe la frontière entre une exigence légitime de transparence et une intrusion inacceptable dans la vie privée des individus ?",
      "Quelle → Quelle est, selon vous, la qualité la plus déterminante pour réussir dans un monde où les certitudes d'hier deviennent les illusions d'aujourd'hui ?",
      "De quoi → De quoi avons-nous véritablement besoin pour construire une société dans laquelle chacun puisse se réaliser pleinement ?",
      "Qui → Qui, parmi les penseurs contemporains, vous semble le mieux armé pour décrypter les enjeux de notre époque ?",
      "Que → Que nous révèle notre rapport au langage sur la façon dont nous construisons notre identité et notre rapport au monde ?"
    ],
    "shortDevoir": [
      "Quel → Quel impact les nouvelles technologies auront-elles sur nos métiers ?",
      "Comment → Comment maintient-on un équilibre entre ambition et bien-être au travail ?",
      "Quand → Quand cesserons-nous de traiter les symptômes plutôt que les causes ?",
      "Où → Où se situe la frontière entre exigence de performance et respect de la personne ?",
      "Quelle → Quelle est la qualité la plus importante pour réussir dans ce domaine ?",
      "De quoi → De quoi avons-nous réellement besoin pour travailler efficacement ensemble ?",
      "Qui → Qui, selon vous, incarne le mieux le leadership moderne et bienveillant ?",
      "Que → Que révèle notre façon de communiquer sur notre culture d'entreprise ?"
    ]
  },
  {
    "date": "Dimanche 10/5",
    "question": [
      "Écrivez 5 phrases au mode impératif (ordre ou conseil)."
    ],
    "devoir": [
      "Cultivez votre curiosité intellectuelle comme vous cultiveriez un jardin rare : avec patience, constance et une attention bienveillante à chaque signe de croissance.",
      "Ne renoncez jamais à questionner les évidences, car c'est précisément dans ce doute méthodique que réside la véritable pensée critique.",
      "Prenez le temps d'écouter vraiment, non pour répondre, mais pour comprendre ; c'est là l'un des actes les plus généreux que l'on puisse offrir à autrui.",
      "Osez exprimer vos convictions avec clarté et humilité, sans jamais confondre la fermeté de vos idées avec l'inflexibilité de votre jugement.",
      "Gardez toujours à l'esprit que chaque effort consenti aujourd'hui est une graine dont la germination, bien qu'invisible, n'en est pas moins certaine."
    ],
    "shortDevoir": [
      "Cultivez votre curiosité intellectuelle chaque jour sans exception.",
      "Ne renoncez jamais à questionner les évidences que l'on vous présente.",
      "Prenez le temps d'écouter vraiment avant de répondre.",
      "Osez exprimer vos convictions avec clarté et respect.",
      "Gardez toujours à l'esprit que la persévérance mène toujours à la réussite."
    ]
  }
];

var devoirAnswerMode = 'long';

function getDevoirAnswerLines(item){
  if(devoirAnswerMode === 'short') return item.shortDevoir || item.devoir;
  return item.devoir;
}

function setDevoirAnswerMode(mode, btn){
  devoirAnswerMode = mode === 'short' ? 'short' : 'long';
  document.querySelectorAll('.devoir-level-tabs .pill').forEach(function(pill){
    pill.classList.remove('active');
  });
  if(btn) btn.classList.add('active');
  updateDevoirAnswerPanels();
}

function buildDevoirCards(mode){
  return marianneDevoirs.map(function(item, index){
    var questionLines = item.question.map(function(line){
      return '<div class="fr-line">'+escapeHtml(line)+'</div>';
    }).join('');
    var previousMode = devoirAnswerMode;
    devoirAnswerMode = mode;
    var devoirLines = getDevoirAnswerLines(item).map(function(line){
      return '<div class="fr-line">'+escapeHtml(line)+'</div>';
    }).join('');
    devoirAnswerMode = previousMode;
    var num = String(index + 1).padStart(2, '0');
    return '<div class="q-card devoir-card open visible-anim">' +
      '<div class="q-header" onclick="toggleQ(this)">' +
        '<span class="q-num">'+num+'</span>' +
        '<div><div class="q-label">'+escapeHtml(item.date)+'</div><div class="q-text">Devoir '+(index + 1)+' · C1 '+(mode === 'short' ? 'Short' : 'Long')+'</div></div>' +
        '<button class="devoir-share-btn" type="button" onclick="shareDevoirWhatsApp('+index+', event, \''+mode+'\')" aria-label="Partager sur WhatsApp">WhatsApp</button>' +
        '<span class="q-arrow">▾</span>' +
      '</div>' +
      '<div class="q-body">' +
        '<div class="devoir-block-label">Question</div>' +
        '<div class="fr-text devoir-prompt">'+questionLines+'</div>' +
        '<div class="devoir-block-label">Réponse</div>' +
        '<div class="fr-text devoir-answer">'+devoirLines+'</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderDevoirs(){
  var mount = document.getElementById('marianne-devoirs');
  if(!mount) return;
  mount.innerHTML =
    '<div class="devoir-answer-panel" data-answer-mode="long">'+buildDevoirCards('long')+'</div>' +
    '<div class="devoir-answer-panel" data-answer-mode="short" hidden>'+buildDevoirCards('short')+'</div>';
  updateDevoirAnswerPanels();
}

function makeHeaderAction(label, icon, open, selector){
  return '<button class="sec-tool-btn" type="button" onclick="setQCardsOpen(\''+selector+'\', '+open+', event)" aria-label="'+label+'">' +
    '<span>'+icon+'</span>' +
    '<strong>'+label+'</strong>' +
  '</button>';
}

function initSecHeaderControls(){
  document.querySelectorAll('#panel-oral .sec').forEach(function(sec){
    var header = sec.querySelector('.sec-header');
    if(!header || sec.querySelector(':scope > .sec-header-actions')) return;
    var selector = sec.id === 'o-devoirs'
      ? '#marianne-devoirs .devoir-answer-panel:not([hidden]) .q-card'
      : '#'+sec.id+' .q-card';
    var actions = document.createElement('div');
    actions.className = 'sec-header-actions';
    actions.innerHTML =
      makeHeaderAction('Expand', '⤢', true, selector) +
      makeHeaderAction('Collapse', '⤡', false, selector);
    header.insertAdjacentElement('afterend', actions);
  });
}

function actionIcon(type){
  var icons = {
    collapse: '<span class="btn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 3v5H3"/><path d="M3 3l7 7"/><path d="M16 21v-5h5"/><path d="M21 21l-7-7"/></svg></span>',
    expand: '<span class="btn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M15 3h6v6"/><path d="M21 3l-7 7"/><path d="M9 21H3v-6"/><path d="M3 21l7-7"/></svg></span>',
    export: '<span class="btn-icon pdf-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/><path d="M8 14h1.8a1.4 1.4 0 0 0 0-2.8H8v5.6"/><path d="M12.8 11.2v5.6h1.1a2.8 2.8 0 0 0 0-5.6z"/><path d="M17.6 16.8v-5.6H21"/><path d="M17.6 14H20"/></svg></span>',
    print: '<span class="btn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></svg></span>',
    play: '<span class="btn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>',
    stop: '<span class="btn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 7h10v10H7z"/></svg></span>'
  };
  return icons[type] || '';
}

function escapeInlineArg(value){
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function makeControlAction(label, type, open, selector){
  return '<button class="sec-tool-btn" type="button" onclick="setQCardsOpen(\''+escapeInlineArg(selector)+'\', '+open+', event)" aria-label="'+label+'">' +
    actionIcon(type) +
    '<strong>'+label+'</strong>' +
  '</button>';
}

function makeExportAction(selector, title){
  return '<button class="sec-tool-btn export-pdf-btn" type="button" onclick="exportSectionToPdf(\''+escapeInlineArg(selector)+'\', \''+escapeInlineArg(title)+'\', event)" aria-label="Export PDF">' +
    actionIcon('export') +
    '<strong>Export PDF</strong>' +
  '</button>';
}

function makePrintCheckedAction(handler, label){
  return '<button class="sec-tool-btn print-checked-btn" type="button" onclick="'+handler+'" aria-label="'+label+'">' +
    actionIcon('print') +
    '<strong>Print checked</strong>' +
  '</button>';
}

function makeTcfEcritPlayAllAction(){
  return '<button class="sec-tool-btn tcf-audio-btn tcf-play-all-btn" type="button" onclick="playAllTcfEcritSujetAudio(event)" aria-label="Play all Ecrit 1 questions audio">' +
    actionIcon('play') +
    '<strong>Play all questions</strong>' +
  '</button>';
}

function makeTcfEcritPlayAllAnswersAction(){
  return '<button class="sec-tool-btn tcf-audio-btn tcf-play-all-answers-btn" type="button" onclick="playAllTcfEcritAnswerSpeech(event)" aria-label="Play all Ecrit 1 answers">' +
    actionIcon('play') +
    '<strong>Play all answers</strong>' +
  '</button>';
}

function makeTcfOralReadAction(){
  return '<button class="sec-tool-btn tcf-audio-btn tcf-oral-read-btn" type="button" onclick="toggleTcfOralTask1Speech(event)" aria-label="Read TCF Oral Task 1 questions and answers">' +
    actionIcon('play') +
    '<strong>Play all</strong>' +
  '</button>';
}

function getPrintCheckedAction(sec){
  if(sec.id === 'vocabulary-main'){
    return makePrintCheckedAction('printCheckedVocabulary(event)', 'Print checked words');
  }
  if(sec.id === 'tcf-oral'){
    return makePrintCheckedAction("printCheckedTcf('oral', event)", 'Print checked statements');
  }
  if(sec.id === 'tcf-vocabulary'){
    return makePrintCheckedAction('showTcfVocabView(\'text\', document.querySelector(\'#tcf-vocab-view-tabs .pill[onclick*=text]\')); printCheckedTcfVocab()', 'Print checked words');
  }
  if(sec.classList.contains('tcf-ecrit-sub') || sec.id === 'tcf-invitation'){
    return makePrintCheckedAction("printCheckedTcf('ecrit', event)", 'Print checked statements');
  }
  return '';
}

function makePrintAction(selector, title){
  return '<button class="sec-tool-btn summary-print-btn" type="button" onclick="exportSectionToPdf(\''+escapeInlineArg(selector)+'\', \''+escapeInlineArg(title)+'\', event)" aria-label="Print">' +
    actionIcon('print') +
  '</button>';
}

function initSecHeaderControls(){
  document.querySelectorAll('.panel .sec, .tcf-ecrit-sub').forEach(function(sec){
    var header = sec.querySelector(':scope > .sec-header');
    if(!header || !sec.id) return;
    var selector = sec.id === 'o-devoirs'
      ? '#marianne-devoirs .devoir-answer-panel:not([hidden]) .q-card'
      : '#'+sec.id+' .q-card';
    var exportSelector = '#'+sec.id;
    var titleNode = header.querySelector('.sec-title');
    var exportTitle = titleNode ? titleNode.textContent.trim() : sec.id;
    var actions = sec.querySelector(':scope > .sec-header-actions');
    var hasQCards = !!document.querySelector(selector);
    var extraTopActions = '';
    if(sec.id === 'tcf-oral') extraTopActions += makeTcfOralReadAction();
    if(sec.id === 'tcf-ecrit-ecrit1') extraTopActions += makeTcfEcritPlayAllAction() + makeTcfEcritPlayAllAnswersAction();
    if(!sec.querySelector(':scope > .sec-export-top-left')){
      header.insertAdjacentHTML('beforebegin', '<div class="sec-export-top-left">'+extraTopActions+getPrintCheckedAction(sec)+makeExportAction(exportSelector, exportTitle)+'</div>');
    } else {
      var exportTopLeft = sec.querySelector(':scope > .sec-export-top-left');
      if(exportTopLeft && sec.id === 'tcf-oral' && !exportTopLeft.querySelector('.tcf-oral-read-btn')){
        exportTopLeft.insertAdjacentHTML('afterbegin', makeTcfOralReadAction());
      }
      if(exportTopLeft && sec.id === 'tcf-ecrit-ecrit1'){
        if(!exportTopLeft.querySelector('.tcf-play-all-btn')){
          exportTopLeft.insertAdjacentHTML('afterbegin', makeTcfEcritPlayAllAction());
        }
        if(!exportTopLeft.querySelector('.tcf-play-all-answers-btn')){
          var questionButton = exportTopLeft.querySelector('.tcf-play-all-btn');
          if(questionButton) questionButton.insertAdjacentHTML('afterend', makeTcfEcritPlayAllAnswersAction());
          else exportTopLeft.insertAdjacentHTML('afterbegin', makeTcfEcritPlayAllAnswersAction());
        }
      }
      if(exportTopLeft && !exportTopLeft.querySelector('.print-checked-btn')){
        exportTopLeft.insertAdjacentHTML('beforeend', getPrintCheckedAction(sec));
      }
    }
    if(actions){
      actions.querySelectorAll(':scope > .export-pdf-btn').forEach(function(btn){
        btn.remove();
      });
    }
    if(!actions && hasQCards){
      actions = document.createElement('div');
      actions.className = 'sec-header-actions';
      actions.innerHTML = makeControlAction('Collapse', 'collapse', false, selector) + makeControlAction('Expand', 'expand', true, selector);
      header.insertAdjacentElement('afterend', actions);
      return;
    }
  });
}

function updateDevoirAnswerPanels(){
  document.querySelectorAll('.devoir-answer-panel').forEach(function(panel){
    panel.hidden = panel.getAttribute('data-answer-mode') !== devoirAnswerMode;
  });
}

function shareDevoirWhatsApp(index, event, mode){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  var item = marianneDevoirs[index];
  if(!item) return;
  var previousMode = devoirAnswerMode;
  devoirAnswerMode = mode === 'short' ? 'short' : 'long';
  var lines = getDevoirAnswerLines(item);
  devoirAnswerMode = previousMode;
  var text = [
    'Devoir '+(index + 1)+' - '+item.date+' - C1 '+(mode === 'short' ? 'Short' : 'Long'),
    '',
    'Question :',
    item.question.join('\n'),
    '',
    'Réponse :',
    lines.join('\n')
  ].join('\n');
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank', 'noopener');
}

// ── iPad / iOS: ensure buttons respond to touch ──
function writeRoute(panel, section){
  if(!window.history || !window.URLSearchParams) return;
  var url = new URL(window.location.href);
  if(panel) url.searchParams.set('panel', panel);
  else url.searchParams.delete('panel');
  if(section) url.searchParams.set('section', section);
  else url.searchParams.delete('section');
  var query = url.searchParams.toString();
  window.history.replaceState({}, '', url.pathname + (query ? '?' + query : '') + url.hash);
}

function updateRoute(panel, section){
  writeRoute(panel, section);
  syncLearningExplorer(panel, section);
}

function getRoute(){
  if(!window.URLSearchParams) return {panel:null, section:null};
  var params = new URLSearchParams(window.location.search);
  return {
    panel: params.get('panel'),
    section: params.get('section')
  };
}

// ── Card navigation explorer: reuses the existing tab/pill actions as card actions. ──
var learningExplorer = {
  root:null,
  grid:null,
  breadcrumb:null,
  back:null,
  main:null,
  group:null,
  lesson:null,
  contentVisible:false
};

var learningMainCards = [
  {key:'grammaire', icon:'📚', title:'Grammaire', desc:'Rôles, livres, temps et niveaux B1/B2'},
  {key:'books', icon:'📘', title:'Books', desc:'PDF et ressources de grammaire'},
  {key:'oral', icon:'🎤', title:'Oral', desc:'Questions, devoirs et entraînement oral'},
  {key:'phonetique', icon:'🔊', title:'Phonétique', desc:'Accents, sons, liaison et prononciation'},
  {key:'lire', icon:'📖', title:'Lire', desc:'Textes faciles et liens de lecture'},
  {key:'vocabulary', icon:'🗂️', title:'Vocabulary', desc:'Mots A1, verbes et dissertations'},
  {key:'videos', icon:'▶', title:'Videos', desc:'Playlists YouTube et lecteur intégré'},
  {key:'tcf', icon:'📝', title:'Pre TCF', desc:'Écrit, oral et vocabulaire Pre TCF'}
];

var learningDescriptions = {
  books:'Livres PDF et ressources de grammaire',
  roles:'Pronoms, articles, structure et règles utiles',
  temps:'Présent, passé, futur et modes',
  b1:'Leçons de niveau B1',
  b2:'Leçons de niveau B2',
  devoirs:'Devoirs Mariane et réponses préparées',
  ferial:'Oral Ferial',
  mariane:'Questions orales Mariane et Linda',
  ecrit:'Production écrite et modèles',
  oral:'Expression orale TCF',
  vocabulary:'Vocabulaire thématique',
  videos:'Playlists YouTube et lecteur intégré'
};

learningMainCards.push({key:'dictionary', icon:'Dict', title:'Dictionary', desc:'Saved highlighted words and statements'});
learningDescriptions.dictionary = 'Saved highlighted words and statements';

function cleanCardText(text){
  return String(text || '').replace(/\s+/g, ' ').trim();
}

function getButtonParts(btn){
  var icon = btn && btn.querySelector('.pi, .ti') ? btn.querySelector('.pi, .ti').textContent.trim() : '•';
  var clone = btn ? btn.cloneNode(true) : null;
  if(clone) clone.querySelectorAll('.pi, .ti').forEach(function(node){ node.remove(); });
  return {
    icon: icon || '•',
    title: cleanCardText(clone ? clone.textContent : ''),
    onclick: btn ? btn.getAttribute('onclick') || '' : ''
  };
}

function keyFromOnclick(onclick){
  var match = String(onclick || '').match(/'([^']+)'/);
  return match ? match[1] : '';
}

function buttonCards(selector, options){
  options = options || {};
  return Array.prototype.slice.call(document.querySelectorAll(selector)).filter(function(btn){
    var onclick = btn.getAttribute('onclick') || '';
    return !options.exclude || !options.exclude(btn, onclick);
  }).map(function(btn){
    var parts = getButtonParts(btn);
    var explicitKey = btn.getAttribute('data-learning-key') || '';
    var key = explicitKey || (options.key ? options.key(btn, parts.onclick) : keyFromOnclick(parts.onclick));
    return {
      key:key,
      icon:parts.icon,
      title:parts.title,
      desc:options.desc ? options.desc(key, parts.title) : (learningDescriptions[key] || 'Ouvrir cette leçon'),
      action:function(){ btn.click(); },
      source:btn
    };
  });
}

function bookKeyFromTitle(title){
  return cleanCardText(title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'library';
}

function getBookCards(){
  return buttonCards('#book-preview-tabs .pill', {
    key:function(btn){
      return bookKeyFromTitle(getButtonParts(btn).title);
    },
    desc:function(){
      return 'Ouvrir ce PDF dans la bibliothèque';
    }
  }).map(function(card){
    var sourceAction = card.action;
    card.action = function(){
      showBooks(card.key, document.querySelector('.top-tab[onclick*="books"]'));
      sourceAction();
    };
    return card;
  });
}

function getGrammarCategories(){
  return [
    {key:'roles', icon:'📚', title:'Autres rôles', desc:learningDescriptions.roles, action:function(){
      switchTop('grammaire', document.querySelector('.top-tab'));
    }},
    {key:'temps', icon:'⏱', title:'Temps', desc:learningDescriptions.temps, action:function(){
      showGrammarChild('temps', document.querySelector('.grammar-mode-tabs .pill[data-grammar-mode="temps"]'));
    }},
    {key:'b1', icon:'B1', title:'B1', desc:learningDescriptions.b1, action:function(){
      showGrammarChild('b1', document.querySelector('.grammar-mode-tabs .pill[data-grammar-mode="b1"]'));
    }},
    {key:'b2', icon:'B2', title:'B2', desc:learningDescriptions.b2, action:function(){
      showGrammarChild('b2', document.querySelector('.grammar-mode-tabs .pill[data-grammar-mode="b2"]'));
    }}
  ];
}

function getCardsForMain(mainKey){
  if(mainKey === 'grammaire') return getGrammarCategories();
  if(mainKey === 'books') return getBookCards();
  if(mainKey === 'oral') {
    return [
      {key:'devoirs', icon:'📝', title:'Devoirs Mariane', desc:learningDescriptions.devoirs, action:function(){
        var btn = document.querySelector('#pills-oral .pill[onclick*="devoirs"]');
        if(btn) btn.click();
      }},
      {key:'mariane', icon:'🎤', title:'Oral Mariane et Linda', desc:learningDescriptions.mariane, action:function(){
        var btn = document.querySelector('#pills-oral .pill[onclick*="showMariane"]');
        if(btn) btn.click();
      }},
      {key:'ferial', icon:'🎙', title:'Ferial', desc:learningDescriptions.ferial, action:function(){
        var btn = document.querySelector('#pills-oral .pill[onclick*="ferial"]');
        if(btn) btn.click();
      }},
      {key:'prononciation', icon:'🎧', title:'Prononciation', desc:'Micro, speech to text et correction', action:function(){
        var btn = document.querySelector('#pills-oral .pill[onclick*="prononciation"]');
        if(btn) btn.click();
      }}
    ];
  }
  if(mainKey === 'phonetique') return buttonCards('#pills-phonetique .pill', {
    exclude:function(btn, onclick){ return onclick.indexOf('books') !== -1; }
  });
  if(mainKey === 'lire') {
    return [{key:'textes', icon:'📖', title:'Textes faciles', desc:'Liens de lecture et écoute', action:function(){
      switchTop('lire', document.querySelector('.top-tab[onclick*="lire"]'));
    }}];
  }
  if(mainKey === 'vocabulary') return buttonCards('.vocab-subtabs .pill');
  if(mainKey === 'videos') {
    return youtubePlaylists.map(function(item, index){
      return {
        key:item.key,
        icon:String(index + 1),
        title:item.title,
        desc:item.desc,
        action:function(){
          switchTop('videos', document.querySelector('.top-tab[onclick*="videos"]'));
          renderYoutubePlaylists(item.key);
          setLearningContentVisible(true);
        }
      };
    });
  }
  if(mainKey === 'tcf') return buttonCards('#pills-tcf .pill', {
    exclude:function(btn, onclick){ return onclick.indexOf('books') !== -1; }
  });
  return [];
}

function getFerialLessonCards(){
  return Array.prototype.slice.call(document.querySelectorAll('#o-ferial .ferial-lesson-tabs .pill')).map(function(btn){
    var id = btn.getAttribute('data-ferial-lesson');
    var num = String(id || '').replace('lecon', '');
    var strong = btn.querySelector('strong');
    var title = strong ? strong.textContent.trim() : ('Leçon ' + num);
    return {
      key: id,
      icon: num,
      title: title,
      desc: 'Ouvrir cette leçon',
      action: function(){ showFerialLesson(id, btn); },
      source: btn
    };
  });
}

function getTcfEcritTaskCards(){
  return [
    {
      key:'ecrit1',
      icon:'1',
      title:'Tache 1',
      desc:'Ouvrir cette leçon',
      action:function(){ showTcfEcritSub('ecrit1'); }
    },
    {
      key:'tache2',
      icon:'2',
      title:'Tache 2',
      desc:'Ouvrir cette leçon',
      action:function(){ showTcfEcritSub('tache2'); }
    },
    {
      key:'tache3',
      icon:'3',
      title:'Tache 3',
      desc:'Ouvrir cette leçon',
      action:function(){ showTcfEcritSub('tache3'); }
    }
  ];
}

function getLessonCards(mainKey, groupKey){
  if(mainKey === 'grammaire'){
    if(groupKey === 'roles') {
      return buttonCards('#pills-grammaire .pill', {
        exclude:function(btn, onclick){
          return onclick.indexOf('showGrammarChild') !== -1 || onclick.indexOf('books') !== -1;
        }
      });
    }
    if(groupKey === 'temps') return buttonCards('#pills-temps .pill');
    if(groupKey === 'b1') return buttonCards('#pills-b1 .pill');
    if(groupKey === 'b2') return buttonCards('#pills-b2 .pill');
  }
  if(mainKey === 'oral' && groupKey === 'mariane') return buttonCards('#pills-mariane .pill');
  if(mainKey === 'oral' && groupKey === 'ferial') return getFerialLessonCards();
  if(mainKey === 'tcf' && groupKey === 'ecrit') {
    return getTcfEcritTaskCards();
  }
  return [];
}

function findLearningMain(key){
  return learningMainCards.filter(function(item){ return item.key === key; })[0] || null;
}

function inferLearningState(panel, section){
  var state = {main:null, group:null, lesson:null};
  if(panel === 'books'){
    state.main = 'books';
    state.group = section || null;
  } else if(panel === 'temps' || panel === 'b1' || panel === 'b2'){
    state.main = 'grammaire';
    state.group = panel;
    state.lesson = section || null;
  } else if(panel === 'grammaire'){
    state.main = 'grammaire';
    state.group = 'roles';
    state.lesson = section && section !== 'books' ? section : null;
  } else if(panel === 'oral'){
    state.main = 'oral';
    state.group = section === 'devoirs' || section === 'ferial' || section === 'prononciation' ? section : 'mariane';
    state.lesson = section && section !== 'devoirs' && section !== 'ferial' && section !== 'prononciation' ? section : null;
  } else if(panel === 'phonetique'){
    state.main = 'phonetique';
    state.group = section || null;
  } else if(panel === 'vocabulary'){
    state.main = 'vocabulary';
  } else if(panel === 'videos'){
    state.main = 'videos';
    state.group = section || null;
  } else if(panel === 'dictionary'){
    state.main = 'dictionary';
  } else if(panel === 'tcf'){
    state.main = 'tcf';
    if(section && document.getElementById('tcf-ecrit-' + section)){
      state.group = 'ecrit';
      state.lesson = section;
    } else {
      state.group = section || 'ecrit';
    }
  } else if(panel === 'lire'){
    state.main = 'lire';
  }
  return state;
}

function setLearningState(state){
  learningExplorer.main = state.main || null;
  learningExplorer.group = state.group || null;
  learningExplorer.lesson = state.lesson || null;
}

// Parent-card navigation hides the lesson area; final-card navigation reveals it.
function setLearningContentVisible(isVisible){
  learningExplorer.contentVisible = !!isVisible;
  if(document.body) document.body.classList.toggle('learning-content-hidden', !learningExplorer.contentVisible);
}

function updateParentCardRoute(mainKey, groupKey){
  if(mainKey === 'grammaire' && (groupKey === 'temps' || groupKey === 'b1' || groupKey === 'b2')) updateRoute(groupKey, null);
  else if(mainKey === 'grammaire') updateRoute('grammaire', null);
  else if(mainKey === 'oral' && groupKey === 'ferial') updateRoute('oral', 'ferial');
  else if(mainKey === 'oral') updateRoute('oral', null);
  else if(mainKey === 'videos') updateRoute('videos', groupKey || null);
  else if(mainKey === 'tcf') updateRoute('tcf', null);
}

function updateFinalCardRoute(mainKey, key){
  if(mainKey === 'vocabulary') updateRoute('vocabulary', key);
  else if(mainKey === 'lire') updateRoute('lire', key);
  else if(mainKey === 'videos') updateRoute('videos', key);
}

function updateLessonCardRoute(mainKey, groupKey, key){
  if(mainKey === 'tcf' && groupKey === 'ecrit') updateRoute('tcf', key);
}

function routeHasFinalContent(panel, section){
  if(panel === 'dictionary') return true;
  if(panel === 'videos') return true;
  if(!section) return false;
  if(panel === 'tcf' && section === 'ecrit') return false;
  if(panel === 'oral' && section === 'ferial') return false;
  return true;
}

function updateRouteForLearningState(){
  if(!learningExplorer.main){
    writeRoute(null, null);
  } else if(learningExplorer.main === 'grammaire' && (learningExplorer.group === 'temps' || learningExplorer.group === 'b1' || learningExplorer.group === 'b2')){
    writeRoute(learningExplorer.group, null);
  } else if(learningExplorer.main === 'oral' && learningExplorer.group === 'ferial'){
    writeRoute('oral', 'ferial');
  } else {
    writeRoute(learningExplorer.main, null);
  }
}

function renderLearningBreadcrumb(){
  if(!learningExplorer.breadcrumb) return;
  var main = findLearningMain(learningExplorer.main);
  var groupTitle = learningExplorer.group;
  var lessonTitle = learningExplorer.lesson;
  getCardsForMain(learningExplorer.main).forEach(function(card){
    if(card.key === learningExplorer.group) groupTitle = card.title;
  });
  getLessonCards(learningExplorer.main, learningExplorer.group).forEach(function(card){
    if(card.key === learningExplorer.lesson) lessonTitle = card.title;
  });
  var crumbs = [{label:'Home', action:function(){ setLearningState({}); setLearningContentVisible(false); updateRouteForLearningState(); renderLearningExplorer(); }}];
  if(main) crumbs.push({label:main.title, action:function(){ setLearningState({main:main.key}); setLearningContentVisible(false); updateRouteForLearningState(); renderLearningExplorer(); }});
  if(groupTitle) crumbs.push({label:groupTitle, action:function(){ setLearningState({main:learningExplorer.main, group:learningExplorer.group}); setLearningContentVisible(false); updateRouteForLearningState(); renderLearningExplorer(); }});
  if(lessonTitle && lessonTitle !== groupTitle) crumbs.push({label:lessonTitle});
  learningExplorer.breadcrumb.innerHTML = crumbs.map(function(crumb, index){
    var current = index === crumbs.length - 1;
    var label = escapeHtml(crumb.label);
    return (index ? '<span class="crumb-sep">&gt;</span>' : '') +
      (current ? '<span class="crumb-current">' + label + '</span>' : '<button type="button" data-crumb="' + index + '">' + label + '</button>');
  }).join('');
  learningExplorer.breadcrumb._crumbActions = crumbs.map(function(crumb){ return crumb.action || null; });
}

function renderLearningCards(cards, level){
  if(!learningExplorer.grid) return;
  learningExplorer.grid.innerHTML = cards.map(function(card){
    var active = (level === 'main' && card.key === learningExplorer.main) ||
      (level === 'group' && card.key === learningExplorer.group) ||
      (level === 'lesson' && card.key === learningExplorer.lesson);
    var sizeClass = level === 'lesson' ? ' is-lesson' : (level === 'group' ? ' is-medium' : '');
    return '<button class="learning-card' + sizeClass + (active ? ' active' : '') + '" type="button" data-learning-key="' + escapeHtml(card.key) + '">' +
      '<span class="learning-card-icon">' + escapeHtml(card.icon || '•') + '</span>' +
      '<span class="learning-card-title">' + escapeHtml(card.title) + '</span>' +
      '<span class="learning-card-desc">' + escapeHtml(card.desc || '') + '</span>' +
      '<span class="learning-card-meta">Ouvrir →</span>' +
    '</button>';
  }).join('');
  learningExplorer.grid.querySelectorAll('.learning-card').forEach(function(btn){
    btn.addEventListener('click', function(){
      var key = btn.getAttribute('data-learning-key');
      var card = cards.filter(function(item){ return item.key === key; })[0];
      if(!card) return;
      if(level === 'main'){
        setLearningState({main:key});
        setLearningContentVisible(false);
        card.action();
        setLearningState({main:key});
        if(key === 'dictionary'){
          setLearningContentVisible(true);
          loadDictionaryPageItems();
        }
      } else if(level === 'group'){
        var childCards = getLessonCards(learningExplorer.main, key);
        var isFinalCard = !childCards.length;
        setLearningState({main:learningExplorer.main, group:key});
        setLearningContentVisible(isFinalCard);
        card.action();
        if(isFinalCard) updateFinalCardRoute(learningExplorer.main, key);
        else updateParentCardRoute(learningExplorer.main, key);
        setLearningState({main:learningExplorer.main, group:key});
        setLearningContentVisible(isFinalCard);
      } else {
        learningExplorer.lesson = key;
        setLearningContentVisible(true);
        card.action();
        updateLessonCardRoute(learningExplorer.main, learningExplorer.group, key);
      }
      renderLearningExplorer();
    });
  });
}

function renderLearningExplorer(){
  if(!learningExplorer.root) return;
  renderLearningBreadcrumb();
  if(learningExplorer.back){
    learningExplorer.back.hidden = !learningExplorer.main;
  }
  var hideCardGrid = learningExplorer.contentVisible &&
    learningExplorer.main === 'oral' &&
    learningExplorer.group === 'prononciation';
  learningExplorer.root.classList.toggle('learning-explorer-grid-hidden', hideCardGrid);
  if(hideCardGrid){
    if(learningExplorer.grid) learningExplorer.grid.innerHTML = '';
    return;
  }
  if(!learningExplorer.main){
    renderLearningCards(learningMainCards.map(function(card){
      return Object.assign({}, card, {action:function(){
        if(card.key === 'grammaire') switchTop('grammaire', document.querySelector('.top-tab'));
        else switchTop(card.key, document.querySelector('.top-tab[onclick*="' + card.key + '"]'));
      }});
    }), 'main');
    return;
  }
  var lessonCards = getLessonCards(learningExplorer.main, learningExplorer.group);
  if(learningExplorer.group && lessonCards.length){
    renderLearningCards(lessonCards, 'lesson');
    return;
  }
  renderLearningCards(getCardsForMain(learningExplorer.main), 'group');
}

function syncLearningExplorer(panel, section){
  if(!learningExplorer.root) return;
  setLearningState(inferLearningState(panel, section));
  setLearningContentVisible(routeHasFinalContent(panel, section));
  renderLearningExplorer();
}

function initLearningExplorer(){
  learningExplorer.root = document.getElementById('learning-explorer');
  learningExplorer.grid = document.getElementById('learning-card-grid');
  learningExplorer.breadcrumb = document.getElementById('learning-breadcrumb');
  learningExplorer.back = document.getElementById('learning-back');
  document.querySelectorAll('.panel > .nav-wrap').forEach(function(nav){
    nav.classList.add('card-nav-replaced');
  });
  if(learningExplorer.breadcrumb){
    learningExplorer.breadcrumb.addEventListener('click', function(event){
      var btn = event.target.closest ? event.target.closest('[data-crumb]') : null;
      if(!btn || !learningExplorer.breadcrumb.contains(btn)) return;
      var index = Number(btn.getAttribute('data-crumb'));
      var action = learningExplorer.breadcrumb._crumbActions && learningExplorer.breadcrumb._crumbActions[index];
      if(action) action();
    });
  }
  if(learningExplorer.back){
    learningExplorer.back.addEventListener('click', function(){
      if(learningExplorer.lesson){
        learningExplorer.lesson = null;
      } else if(learningExplorer.group){
        learningExplorer.group = null;
      } else {
        learningExplorer.main = null;
      }
      setLearningContentVisible(false);
      updateRouteForLearningState();
      renderLearningExplorer();
    });
  }
  var route = getRoute();
  if(route.panel) syncLearningExplorer(route.panel, route.section);
  else {
    setLearningState({});
    setLearningContentVisible(false);
    renderLearningExplorer();
  }
}

var dictionaryPage = {
  items: [],
  initialized: false
};

function getDictionarySearchTerm(){
  var input = document.getElementById('dictionary-search');
  return input ? input.value.trim().toLowerCase() : '';
}

function getDictionaryTypeFilter(){
  var select = document.getElementById('dictionary-type-filter');
  return select ? select.value : 'all';
}

function formatDictionaryDate(value){
  if(!value) return '';
  var date = new Date(value);
  if(isNaN(date.getTime())) return '';
  return date.toLocaleDateString(undefined, {year:'numeric', month:'short', day:'2-digit'});
}

function dictionaryMatchesSearch(item, term){
  if(!term) return true;
  return [
    item.item_text,
    item.arabic_translation,
    item.english_translation,
    item.item_type,
    item.source_page,
    item.source_section
  ].join(' ').toLowerCase().indexOf(term) !== -1;
}

function filteredDictionaryItems(){
  var term = getDictionarySearchTerm();
  var type = getDictionaryTypeFilter();
  return dictionaryPage.items.filter(function(item){
    if(type !== 'all' && item.item_type !== type) return false;
    return dictionaryMatchesSearch(item, term);
  });
}

function renderDictionaryPage(){
  var list = document.getElementById('dictionary-list');
  var status = document.getElementById('dictionary-status');
  if(!list || !status) return;
  var items = filteredDictionaryItems();
  status.textContent = items.length ? (items.length + ' saved item' + (items.length === 1 ? '' : 's')) : 'No saved dictionary items yet.';
  list.innerHTML = items.map(function(item){
    var id = escapeHtml(item.id || '');
    var text = escapeHtml(item.item_text || '');
    var ar = escapeHtml(item.arabic_translation || '—');
    var en = escapeHtml(item.english_translation || '—');
    var type = escapeHtml(item.item_type || 'word');
    var source = escapeHtml([item.source_page || '', item.source_section || ''].filter(Boolean).join(' · ') || '—');
    var date = escapeHtml(formatDictionaryDate(item.created_at || item.updated_at));
    return '<article class="dictionary-item" data-dictionary-id="' + id + '">' +
      '<div><div class="dictionary-item-title">' + text + '</div><div class="dictionary-item-meta">' + date + '</div></div>' +
      '<div class="dictionary-item-translation"><strong>Arabic</strong>' + ar + '</div>' +
      '<div class="dictionary-item-translation"><strong>English</strong>' + en + '</div>' +
      '<div><span class="dictionary-type">' + type + '</span></div>' +
      '<div class="dictionary-item-source"><strong>Source</strong>' + source + '</div>' +
      '<div class="dictionary-actions">' +
        '<button class="dictionary-speak" type="button" data-dictionary-speak="' + id + '" aria-label="Pronounce ' + text + '">🔊</button>' +
        '<button class="dictionary-delete" type="button" data-dictionary-delete="' + id + '">Delete</button>' +
      '</div>' +
    '</article>';
  }).join('');
}

function loadDictionaryPageItems(){
  var status = document.getElementById('dictionary-status');
  if(status) status.textContent = 'Loading saved items...';
  if(!window.loadDictionaryItems){
    dictionaryPage.items = [];
    renderDictionaryPage();
    return;
  }
  window.loadDictionaryItems().then(function(items){
    dictionaryPage.items = Array.isArray(items) ? items : [];
    renderDictionaryPage();
  });
}

function speakDictionaryText(text){
  if(!text || !('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return;
  window.speechSynthesis.cancel();
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

function deleteDictionaryPageItem(id){
  var item = dictionaryPage.items.filter(function(row){ return String(row.id) === String(id); })[0];
  if(!item) return;
  dictionaryPage.items = dictionaryPage.items.filter(function(row){ return String(row.id) !== String(id); });
  renderDictionaryPage();
  if(window.deleteDictionaryItem) window.deleteDictionaryItem(item);
}

function initDictionaryPage(){
  if(dictionaryPage.initialized) return;
  dictionaryPage.initialized = true;
  var search = document.getElementById('dictionary-search');
  var filter = document.getElementById('dictionary-type-filter');
  var refresh = document.getElementById('dictionary-refresh');
  var list = document.getElementById('dictionary-list');
  if(search) search.addEventListener('input', renderDictionaryPage);
  if(filter) filter.addEventListener('change', renderDictionaryPage);
  if(refresh) refresh.addEventListener('click', loadDictionaryPageItems);
  if(list){
    list.addEventListener('click', function(event){
      var speak = event.target.closest && event.target.closest('[data-dictionary-speak]');
      var del = event.target.closest && event.target.closest('[data-dictionary-delete]');
      if(speak){
        var speakItem = dictionaryPage.items.filter(function(row){ return String(row.id) === String(speak.getAttribute('data-dictionary-speak')); })[0];
        if(speakItem) speakDictionaryText(speakItem.item_text);
      }
      if(del) deleteDictionaryPageItem(del.getAttribute('data-dictionary-delete'));
    });
  }
}

function dictionaryTranslateText(text, target){
  text = String(text || '').trim();
  target = target === 'en' ? 'en' : 'ar';
  if(!text) return Promise.resolve('');
  var override = getDictionaryTranslationOverride(text, target);
  if(override) return Promise.resolve(override);
  if(target === 'ar' && typeof translateSelectedTextAsync === 'function'){
    return translateSelectedTextAsync(text).then(extractDictionaryArabicTranslation);
  }
  if(window.location.protocol === 'file:'){
    return Promise.reject(new Error('Dictionary translation API is unavailable from file://'));
  }
  return fetch('/api/translate', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({text:text, target:target})
  }).then(function(response){
    if(!response.ok) throw new Error('Translation failed: ' + response.status);
    return response.json();
  }).then(function(data){
    return String(data && data.translatedText || '').trim();
  });
}

function normalizeDictionaryOverrideKey(text){
  return String(text || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/\s*([:;.!?؟،,])\s*/g, '$1 ')
    .trim();
}

var dictionaryTranslationOverrides = {
  ar: {}
};

dictionaryTranslationOverrides.ar[normalizeDictionaryOverrideKey('Sujet 1 : Votre ami Mehdi vient de déménager dans votre ville et cherche des renseignements sur les moyens de transports. Écrivez un message en lui donnant les informations nécessaires.')] =
  'الموضوع 1: صديقك مهدي انتقل حديثًا إلى مدينتك ويبحث عن معلومات حول وسائل النقل. اكتب رسالة تعطيه فيها المعلومات الضرورية.';

function getDictionaryTranslationOverride(text, target){
  var map = dictionaryTranslationOverrides[target] || {};
  return map[normalizeDictionaryOverrideKey(text)] || '';
}

function itemNeedsDictionarySave(item){
  return !!(item && !item._dictionarySaving && (item._dictionaryArabicChanged || item._dictionaryEnglishChanged));
}

function saveTranslatedDictionaryItem(item){
  if(!window.saveDictionaryItem || !itemNeedsDictionarySave(item)) return;
  item._dictionarySaving = true;
  window.saveDictionaryItem(item).then(function(){
    item._dictionaryArabicChanged = false;
    item._dictionaryEnglishChanged = false;
    item._dictionarySaving = false;
  }).catch(function(error){
    item._dictionarySaving = false;
    console.warn('Dictionary translation save failed:', error);
  });
}

function ensureDictionaryItemTranslations(){
  dictionaryPage.items.forEach(function(item){
    var cleanText = cleanDictionaryItemText(item.item_text);
    if(!String(item.arabic_translation || '').trim() && !item._dictionaryArabicLoading){
      item._dictionaryArabicLoading = true;
      dictionaryTranslateText(cleanText, 'ar').then(function(translated){
        item._dictionaryArabicLoading = false;
        item.arabic_translation = translated || 'Translation unavailable';
        item._dictionaryArabicChanged = true;
        renderDictionaryPage();
        saveTranslatedDictionaryItem(item);
      }).catch(function(error){
        console.warn('Dictionary Arabic translation failed:', error);
        item._dictionaryArabicLoading = false;
        item.arabic_translation = 'Translation unavailable';
        item._dictionaryArabicChanged = true;
        renderDictionaryPage();
        saveTranslatedDictionaryItem(item);
      });
    }
    if(!String(item.english_translation || '').trim() && !item._dictionaryEnglishLoading){
      item._dictionaryEnglishLoading = true;
      dictionaryTranslateText(cleanText, 'en').then(function(translated){
        item._dictionaryEnglishLoading = false;
        item.english_translation = translated || 'Translation unavailable';
        item._dictionaryEnglishChanged = true;
        renderDictionaryPage();
        saveTranslatedDictionaryItem(item);
      }).catch(function(error){
        console.warn('Dictionary English translation failed:', error);
        item._dictionaryEnglishLoading = false;
        item.english_translation = 'Translation unavailable';
        item._dictionaryEnglishChanged = true;
        renderDictionaryPage();
        saveTranslatedDictionaryItem(item);
      });
    }
  });
}

function renderDictionaryPage(){
  var list = document.getElementById('dictionary-list');
  var status = document.getElementById('dictionary-status');
  if(!list || !status) return;
  var items = filteredDictionaryItems();
  status.textContent = items.length ? (items.length + ' saved item' + (items.length === 1 ? '' : 's')) : 'No saved dictionary items yet.';
  list.innerHTML = items.map(function(item){
    var id = escapeHtml(item.id || '');
    var cleanText = cleanDictionaryItemText(item.item_text);
    var text = escapeHtml(cleanText);
    var ar = String(item.arabic_translation || '').trim();
    var en = String(item.english_translation || '').trim();
    var date = escapeHtml(formatDictionaryDate(item.created_at || item.updated_at));
    var arHtml = item._dictionaryArabicLoading
      ? '<div class="dictionary-en dictionary-loading" dir="rtl">Translating...</div>'
      : '<div class="dictionary-en" dir="rtl">' + escapeHtml(ar || 'Translation unavailable') + '</div>';
    var enHtml = item._dictionaryEnglishLoading
      ? '<div class="dictionary-en dictionary-loading">Translating...</div>'
      : (en ? '<div class="dictionary-en">' + escapeHtml(en) + '</div>' : '');
    return '<article class="dictionary-item" data-dictionary-id="' + id + '">' +
      '<div class="dictionary-copy">' +
        '<div class="dictionary-item-title">' + text + '</div>' +
        arHtml +
        enHtml +
        '<div class="dictionary-item-meta">' + date + '</div>' +
      '</div>' +
      '<div class="dictionary-actions">' +
        '<button class="dictionary-icon-btn dictionary-speak" type="button" data-dictionary-speak="' + id + '" aria-label="Play pronunciation" title="Play pronunciation">▶</button>' +
        '<button class="dictionary-icon-btn dictionary-delete" type="button" data-dictionary-delete="' + id + '" aria-label="Delete item" title="Delete item">🗑</button>' +
      '</div>' +
    '</article>';
  }).join('');
}

function loadDictionaryPageItems(){
  var status = document.getElementById('dictionary-status');
  if(status) status.textContent = 'Loading saved items...';
  if(!window.loadDictionaryItems){
    dictionaryPage.items = [];
    renderDictionaryPage();
    return;
  }
  window.loadDictionaryItems().then(function(items){
    dictionaryPage.items = Array.isArray(items) ? items : [];
    ensureDictionaryItemTranslations();
    renderDictionaryPage();
  });
}

function cleanDictionaryItemText(text){
  return String(text || '').replace(/^.*::\s*/, '').trim();
}

function dictionaryMatchesSearch(item, term){
  if(!term) return true;
  return [
    cleanDictionaryItemText(item.item_text),
    item.arabic_translation,
    item.english_translation
  ].join(' ').toLowerCase().indexOf(term) !== -1;
}

function renderDictionaryPage(){
  var list = document.getElementById('dictionary-list');
  var status = document.getElementById('dictionary-status');
  if(!list || !status) return;
  var items = filteredDictionaryItems();
  status.textContent = items.length ? (items.length + ' saved item' + (items.length === 1 ? '' : 's')) : 'No saved dictionary items yet.';
  list.innerHTML = items.map(function(item){
    var id = escapeHtml(item.id || '');
    var cleanText = cleanDictionaryItemText(item.item_text);
    var text = escapeHtml(cleanText);
    var ar = String(item.arabic_translation || '').trim();
    var en = String(item.english_translation || '').trim();
    var date = escapeHtml(formatDictionaryDate(item.created_at || item.updated_at));
    return '<article class="dictionary-item" data-dictionary-id="' + id + '">' +
      '<div class="dictionary-copy">' +
        '<div class="dictionary-item-title">' + text + '</div>' +
        (ar ? '<div class="dictionary-en" dir="rtl">' + escapeHtml(ar) + '</div>' : '<button class="dictionary-translate" type="button" data-dictionary-translate="' + id + '">Add translation</button>') +
        (en ? '<div class="dictionary-en">' + escapeHtml(en) + '</div>' : '') +
        '<div class="dictionary-item-meta">' + date + '</div>' +
      '</div>' +
      '<div class="dictionary-actions">' +
        '<button class="dictionary-speak" type="button" data-dictionary-speak="' + id + '" aria-label="Pronounce ' + text + '">Speaker</button>' +
        '<button class="dictionary-delete" type="button" data-dictionary-delete="' + id + '">Delete</button>' +
      '</div>' +
    '</article>';
  }).join('');
}

function extractDictionaryArabicTranslation(result){
  if(!result) return '';
  if(result.type === 'single') return String(result.text || '').trim();
  if(result.type === 'list') return (result.lines || []).join('\n').trim();
  return String(result || '').trim();
}

function addDictionaryArabicTranslation(id){
  var item = dictionaryPage.items.filter(function(row){ return String(row.id) === String(id); })[0];
  if(!item) return;
  var cleanText = cleanDictionaryItemText(item.item_text);
  var selector = '[data-dictionary-translate="' + String(id).replace(/"/g, '\\"') + '"]';
  var button = document.querySelector(selector);
  if(button) button.textContent = 'Translating...';
  var translatePromise = typeof translateSelectedTextAsync === 'function'
    ? translateSelectedTextAsync(cleanText)
    : Promise.resolve('');
  translatePromise.then(function(result){
    var translated = extractDictionaryArabicTranslation(result);
    if(!translated) translated = 'Translation unavailable';
    item.arabic_translation = translated;
    renderDictionaryPage();
    if(window.saveDictionaryItem) window.saveDictionaryItem(item);
  }).catch(function(error){
    console.warn('Dictionary translation failed:', error);
    if(button) button.textContent = 'Add translation';
  });
}

function initDictionaryPage(){
  if(dictionaryPage.initialized) return;
  dictionaryPage.initialized = true;
  var search = document.getElementById('dictionary-search');
  var filter = document.getElementById('dictionary-type-filter');
  var refresh = document.getElementById('dictionary-refresh');
  var list = document.getElementById('dictionary-list');
  if(search) search.addEventListener('input', renderDictionaryPage);
  if(filter) filter.addEventListener('change', renderDictionaryPage);
  if(refresh) refresh.addEventListener('click', loadDictionaryPageItems);
  if(list){
    list.addEventListener('click', function(event){
      var speak = event.target.closest && event.target.closest('[data-dictionary-speak]');
      var del = event.target.closest && event.target.closest('[data-dictionary-delete]');
      var translate = event.target.closest && event.target.closest('[data-dictionary-translate]');
      if(speak){
        var speakItem = dictionaryPage.items.filter(function(row){ return String(row.id) === String(speak.getAttribute('data-dictionary-speak')); })[0];
        if(speakItem) speakDictionaryText(cleanDictionaryItemText(speakItem.item_text));
      }
      if(translate) addDictionaryArabicTranslation(translate.getAttribute('data-dictionary-translate'));
      if(del) deleteDictionaryPageItem(del.getAttribute('data-dictionary-delete'));
    });
  }
}

function getFrenchTextOnly(text) {
  if (!text) return "";

  let cleaned = text.replace(/^.*?::/, "").trim();

  if (cleaned.includes("|")) {
    cleaned = cleaned.split("|")[0].trim();
  }

  cleaned = cleaned.replace(/^Sujet\s+\d+\s*:\s*/i, "").trim();

  return cleaned;
}

function hasArabicText(text){
  return /[\u0600-\u06FF]/.test(String(text || ''));
}

function normalizeDictionaryTranslationText(text){
  return String(text || '').replace(/\s+/g, ' ').trim().toLowerCase();
}

function cleanDictionaryItemText(text){
  return getFrenchTextOnly(String(text || ''));
}

function dictionaryMatchesSearch(item, term){
  if(!term) return true;
  return [
    getFrenchTextOnly(item.item_text),
    item.arabic_translation,
    item.english_translation
  ].join(' ').toLowerCase().indexOf(term) !== -1;
}

function ensureDictionaryItemTranslations(){
  dictionaryPage.items.forEach(function(item){
    var frenchText = getFrenchTextOnly(item.item_text);
    var currentArabic = String(item.arabic_translation || '').trim();
    var arabicOverride = getDictionaryTranslationOverride(frenchText, 'ar');
    var shouldRefreshArabic = !currentArabic || (arabicOverride && normalizeDictionaryTranslationText(currentArabic) !== normalizeDictionaryTranslationText(arabicOverride));
    if(shouldRefreshArabic && !item._dictionaryArabicLoading){
      item._dictionaryArabicLoading = true;
      dictionaryTranslateText(frenchText, 'ar').then(function(translated){
        item._dictionaryArabicLoading = false;
        item.arabic_translation = translated || 'Translation unavailable';
        item._dictionaryArabicChanged = true;
        setDictionaryArabicLineText(item.id, item.arabic_translation);
        renderDictionaryPage();
        saveTranslatedDictionaryItem(item);
      }).catch(function(error){
        console.warn('Dictionary Arabic translation failed:', error);
        item._dictionaryArabicLoading = false;
        item.arabic_translation = 'Translation unavailable';
        item._dictionaryArabicChanged = true;
        setDictionaryArabicLineText(item.id, item.arabic_translation);
        renderDictionaryPage();
        saveTranslatedDictionaryItem(item);
      });
    }
    if(!String(item.english_translation || '').trim() && !item._dictionaryEnglishLoading){
      item._dictionaryEnglishLoading = true;
      dictionaryTranslateText(frenchText, 'en').then(function(translated){
        item._dictionaryEnglishLoading = false;
        item.english_translation = translated || '';
        item._dictionaryEnglishChanged = !!translated;
        renderDictionaryPage();
        saveTranslatedDictionaryItem(item);
      }).catch(function(error){
        console.warn('Dictionary English translation failed:', error);
        item._dictionaryEnglishLoading = false;
        item.english_translation = '';
        renderDictionaryPage();
      });
    }
  });
}

function setDictionaryArabicLineText(id, text){
  var node = document.querySelector('[data-dictionary-translation="' + String(id).replace(/"/g, '\\"') + '"]');
  if(node) node.textContent = text || 'Translation unavailable';
}

function renderDictionaryPage(){
  var list = document.getElementById('dictionary-list');
  var status = document.getElementById('dictionary-status');
  if(!list || !status) return;
  var items = filteredDictionaryItems();
  status.textContent = items.length ? (items.length + ' saved item' + (items.length === 1 ? '' : 's')) : 'No saved dictionary items yet.';
  list.innerHTML = items.map(function(item){
    var id = escapeHtml(item.id || '');
    var frenchText = getFrenchTextOnly(item.item_text);
    var text = escapeHtml(frenchText);
    var ar = String(item.arabic_translation || '').trim();
    var en = String(item.english_translation || '').trim();
    var showEnglish = en && normalizeDictionaryTranslationText(en) !== normalizeDictionaryTranslationText(ar) && !hasArabicText(en);
    var date = escapeHtml(formatDictionaryDate(item.created_at || item.updated_at));
    var arHtml = item._dictionaryArabicLoading
      ? '<div class="dictionary-en dictionary-loading" dir="rtl" data-dictionary-translation="' + id + '">Translating...</div>'
      : '<div class="dictionary-en" dir="rtl" data-dictionary-translation="' + id + '">' + escapeHtml(ar || 'Translation unavailable') + '</div>';
    var enHtml = item._dictionaryEnglishLoading
      ? '<div class="dictionary-en dictionary-loading">Translating...</div>'
      : (showEnglish ? '<div class="dictionary-en dictionary-en-secondary">' + escapeHtml(en) + '</div>' : '');
    return '<article class="dictionary-item" data-dictionary-id="' + id + '">' +
      '<div class="dictionary-copy">' +
        '<div class="dictionary-item-title">' + text + '</div>' +
        arHtml +
        enHtml +
        '<div class="dictionary-item-meta">' + date + '</div>' +
      '</div>' +
      '<div class="dictionary-actions">' +
        '<button class="tcf-sujet-play-btn dictionary-play-btn" type="button" data-dictionary-speak="' + id + '" aria-label="Play dictionary audio">' +
          '<span class="btn-icon" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>' +
          '</span>' +
          '<strong>Play</strong>' +
        '</button>' +
        '<button class="dictionary-delete dictionary-delete-icon" type="button" data-dictionary-delete="' + id + '" aria-label="Delete dictionary item">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true">' +
            '<path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v9h-2V9zm4 0h2v9h-2V9zM7 9h2v11h6V9h2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9z"></path>' +
          '</svg>' +
        '</button>' +
      '</div>' +
    '</article>';
  }).join('');
}

function initDictionaryPage(){
  if(dictionaryPage.initialized) return;
  dictionaryPage.initialized = true;
  var search = document.getElementById('dictionary-search');
  var filter = document.getElementById('dictionary-type-filter');
  var refresh = document.getElementById('dictionary-refresh');
  var list = document.getElementById('dictionary-list');
  if(search) search.addEventListener('input', renderDictionaryPage);
  if(filter) filter.addEventListener('change', renderDictionaryPage);
  if(refresh) refresh.addEventListener('click', loadDictionaryPageItems);
  if(list){
    list.addEventListener('click', function(event){
      var speak = event.target.closest && event.target.closest('[data-dictionary-speak]');
      var del = event.target.closest && event.target.closest('[data-dictionary-delete]');
      if(speak){
        var speakItem = dictionaryPage.items.filter(function(row){ return String(row.id) === String(speak.getAttribute('data-dictionary-speak')); })[0];
        if(speakItem) speakDictionaryText(getFrenchTextOnly(speakItem.item_text));
      }
      if(del) deleteDictionaryPageItem(del.getAttribute('data-dictionary-delete'));
    });
  }
}

function restoreRoute(){
  var route = getRoute();
  if(!route.panel && window.location.pathname && /\/dictionary\/?$/.test(window.location.pathname)){
    route = {panel:'dictionary', section:null};
  }
  if(!route.panel) return;
  if(route.panel === 'grammaire' && route.section === 'books'){
    showBooks('library', document.querySelector('.top-tab[onclick*="books"]'));
    setLearningContentVisible(true);
    return;
  }
  if(route.panel === 'books'){
    var bookBtn = document.querySelector('.top-tab[onclick*="books"]');
    showBooks(route.section || null, bookBtn);
    if(route.section){
      getBookCards().forEach(function(card){
        if(card.key === route.section && card.source) card.source.click();
      });
      setLearningContentVisible(true);
    } else {
      setLearningContentVisible(false);
    }
    return;
  }
  if(route.panel === 'tcf' && route.section === 'videos'){
    route = {panel:'videos', section:(youtubePlaylists[0] && youtubePlaylists[0].key)};
  }
  var topBtn = document.querySelector(".top-tab[onclick*=\"" + route.panel + "\"]");
  if(!document.getElementById('panel-' + route.panel)) return;

  if(route.panel === 'temps'){
    showGrammarChild('temps', topBtn);
    if(route.section) showSec(route.section, document.querySelector("#pills-temps .pill[onclick*=\"'" + route.section + "'\"]"), 'temps');
    else {
      updateRoute('temps', null);
      setLearningState({main:'grammaire', group:'temps'});
      setLearningContentVisible(false);
      renderLearningExplorer();
    }
  } else if(route.panel === 'b1' || route.panel === 'b2'){
    showGrammarChild(route.panel, topBtn);
    if(route.section) showSec(route.section, document.querySelector("#pills-" + route.panel + " .pill[onclick*=\"'" + route.section + "'\"]"), route.panel);
    else {
      updateRoute(route.panel, null);
      setLearningState({main:'grammaire', group:route.panel});
      setLearningContentVisible(false);
      renderLearningExplorer();
    }
  } else if(route.panel === 'grammaire'){
    switchTop('grammaire', topBtn);
    if(route.section) showSec(route.section, document.querySelector("#pills-grammaire .pill[onclick*=\"'" + route.section + "'\"]"), 'grammaire');
  } else if(route.panel === 'oral'){
    switchTop('oral', topBtn);
    if(route.section) showOral(route.section, document.querySelector("#pills-mariane .pill[onclick*=\"'" + route.section + "'\"]") || document.querySelector("#pills-oral .pill[onclick*=\"'" + route.section + "'\"]"));
    else {
      updateRoute('oral', null);
      setLearningState({main:'oral'});
      setLearningContentVisible(false);
      renderLearningExplorer();
    }
  } else if(route.panel === 'phonetique'){
    switchTop('phonetique', topBtn);
    if(route.section) showPhon(route.section, document.querySelector("#pills-phonetique .pill[onclick*=\"'" + route.section + "'\"]"));
  } else if(route.panel === 'tcf'){
    switchTop('tcf', topBtn);
    if(route.section && document.getElementById('tcf-ecrit-' + route.section)){
      showTcf('ecrit', document.querySelector("#pills-tcf .pill[onclick*=\"'ecrit'\"]"));
      showTcfEcritSub(route.section, document.querySelector('#learning-card-grid .learning-card[data-learning-key="' + route.section + '"]') || document.querySelector('#tcf-ecrit .tcf-tache1-tabs .learning-card[data-learning-key="' + route.section + '"]'));
      updateRoute('tcf', route.section);
      setLearningContentVisible(true);
    } else if(route.section) showTcf(route.section, document.querySelector("#pills-tcf .pill[onclick*=\"'" + route.section + "'\"]"));
  } else if(route.panel === 'videos'){
    switchTop('videos', topBtn);
    renderYoutubePlaylists(route.section || (youtubePlaylists[0] && youtubePlaylists[0].key));
    setLearningState({main:'videos', group:route.section || null});
    setLearningContentVisible(true);
    renderLearningExplorer();
  } else if(route.panel === 'dictionary'){
    switchTop('dictionary', topBtn);
    setLearningState({main:'dictionary'});
    setLearningContentVisible(true);
    loadDictionaryPageItems();
    renderLearningExplorer();
  } else {
    switchTop(route.panel, topBtn);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  renderDevoirs();
  initSecHeaderControls();
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
  updateHeroStats();
  initIrregTables();
  initInlineIrregSections();
  initLearningExplorer();
  initDictionaryPage();
  initPronunciationTextSizing();
  restoreRoute();
});

// ── Dashboard Sidebar ──
var sidebar = document.getElementById('dashboard-sidebar');
var sidebarToggle = document.getElementById('sidebar-toggle');
var sidebarPin = document.getElementById('sidebar-pin');
var globalSearchOpen = document.getElementById('global-search-open');
var globalSearchModal = document.getElementById('global-search-modal');
var globalSearchClose = document.getElementById('global-search-close');
var globalSearchInput = document.getElementById('global-search-input');
var globalSearchResults = document.getElementById('global-search-results');
var globalSearchFlashTimer = null;
var globalSearchHighlightTimer = null;
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
    if(sidebar.classList.contains('open')){
      closeSidebar();
    } else {
      openSidebar();
    }
    isPinned = false;
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
      closeSidebar();
    });
  });

  document.addEventListener('pointerdown', function(event){
    if(!sidebar.classList.contains('open')) return;
    if(!sidebar.contains(event.target)) closeSidebar();
  });

}

function openGlobalSearch(){
  if(!globalSearchModal || !globalSearchInput) return;
  globalSearchModal.hidden = false;
  globalSearchInput.focus();
  globalSearchInput.select();
}

function closeGlobalSearch(){
  if(!globalSearchModal) return;
  globalSearchModal.hidden = true;
}

if(globalSearchOpen && globalSearchModal && globalSearchInput){
  globalSearchOpen.addEventListener('click', function(){
    openGlobalSearch();
  });
  if(globalSearchClose){
    globalSearchClose.addEventListener('click', closeGlobalSearch);
  }
  globalSearchModal.addEventListener('pointerdown', function(event){
    if(event.target === globalSearchModal) closeGlobalSearch();
  });
  globalSearchInput.addEventListener('input', function(){
    runGlobalSearch(globalSearchInput.value);
  });
  globalSearchInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
      var first = globalSearchResults && globalSearchResults.querySelector('.global-search-result');
      if(first){
        event.preventDefault();
        first.click();
      }
    } else if(event.key === 'Escape'){
      closeGlobalSearch();
    }
  });
  document.addEventListener('keydown', function(event){
    if(event.key === 'Escape' && globalSearchModal && !globalSearchModal.hidden){
      closeGlobalSearch();
    }
  });
}

function normalizeSearchText(text){
  return (text || '').toString().toLowerCase().replace(/\s+/g, ' ').trim();
}

function escapeHtml(text){
  return (text || '').toString().replace(/[&<>"']/g, function(ch){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
  });
}

function getSearchTitle(node){
  var card = node.closest('.card, .q-card, .sec') || node;
  var title = card.querySelector('.card-label, .q-label, .sec-title');
  if(title) return title.textContent.trim();
  var section = node.closest('.sec');
  if(section){
    var sectionTitle = section.querySelector('.sec-title');
    if(sectionTitle) return sectionTitle.textContent.trim();
  }
  return 'Résultat';
}

function getSearchScopeLabel(node){
  var panel = node.closest('.panel');
  var sec = node.closest('.sec');
  var parts = [];
  if(panel) parts.push(panel.id.replace('panel-', '').replace(/-/g, ' '));
  if(sec){
    var secTitle = sec.querySelector('.sec-title, .card-label');
    if(secTitle) parts.push(secTitle.textContent.trim());
  }
  return parts.join(' · ');
}

function getSearchSnippet(text, term){
  var clean = (text || '').replace(/\s+/g, ' ').trim();
  var lower = clean.toLowerCase();
  var index = lower.indexOf(term.toLowerCase());
  if(index < 0) return escapeHtml(clean.slice(0, 150));
  var start = Math.max(0, index - 55);
  var end = Math.min(clean.length, index + term.length + 75);
  var before = clean.slice(start, index);
  var match = clean.slice(index, index + term.length);
  var after = clean.slice(index + term.length, end);
  return (start ? '...' : '') + escapeHtml(before) + '<mark>' + escapeHtml(match) + '</mark>' + escapeHtml(after) + (end < clean.length ? '...' : '');
}

function getPanelKeyFromElement(node){
  var panel = node.closest('.panel');
  return panel ? panel.id.replace('panel-', '') : null;
}

function getSectionKeyFromElement(node){
  var sec = node.closest('.sec');
  if(!sec || !sec.id) return null;
  return sec.id.replace(/^(g-|t-|p-|tcf-|b1-|b2-|oral-|m-|lire-|videos-)/, '');
}

function activateSearchTarget(target){
  if(!target) return;
  var panelKey = getPanelKeyFromElement(target);
  var sectionKey = getSectionKeyFromElement(target);
  var topBtn = panelKey ? document.querySelector(".top-tab[onclick*=\"" + panelKey + "\"]") : null;

  if(panelKey === 'phonetique'){
    switchTop('phonetique', topBtn);
    if(sectionKey) showPhon(sectionKey, document.querySelector("#pills-phonetique .pill[onclick*=\"'" + sectionKey + "'\"]"));
  } else if(panelKey === 'tcf'){
    switchTop('tcf', topBtn);
    if(sectionKey) showTcf(sectionKey, document.querySelector("#pills-tcf .pill[onclick*=\"'" + sectionKey + "'\"]"));
  } else if(panelKey === 'oral'){
    switchTop('oral', topBtn);
    if(sectionKey) showOral(sectionKey, document.querySelector("#pills-mariane .pill[onclick*=\"'" + sectionKey + "'\"]") || document.querySelector("#pills-oral .pill[onclick*=\"'" + sectionKey + "'\"]"));
  } else if(panelKey === 'vocabulary'){
    switchTop('vocabulary', topBtn);
    var subview = target.closest('.vocab-subview');
    if(subview && subview.id){
      var vocabKey = subview.id.replace('vocab-sub-', '');
      showVocabularySub(vocabKey, document.querySelector(".vocab-subtabs .pill[onclick*=\"'" + vocabKey + "'\"]"));
    }
  } else if(panelKey === 'videos'){
    switchTop('videos', topBtn);
    renderYoutubePlaylists();
  } else if(panelKey === 'grammaire'){
    switchTop('grammaire', topBtn);
    if(sectionKey) showSec(sectionKey, document.querySelector("#pills-grammaire .pill[onclick*=\"'" + sectionKey + "'\"]"), 'grammaire');
  } else if(panelKey === 'temps' || panelKey === 'b1' || panelKey === 'b2'){
    showGrammarChild(panelKey, topBtn);
    if(sectionKey) showSec(sectionKey, document.querySelector("#pills-" + panelKey + " .pill[onclick*=\"'" + sectionKey + "'\"]"), panelKey);
  } else if(panelKey){
    switchTop(panelKey, topBtn);
  }

  var card = target.closest('.card, .q-card, .sec') || target;
  setTimeout(function(){
    var qCard = target.closest('.q-card');
    if(qCard) qCard.classList.add('open');
    card.scrollIntoView({behavior:'smooth', block:'center'});
    if(globalSearchFlashTimer) clearTimeout(globalSearchFlashTimer);
    if(globalSearchHighlightTimer) clearTimeout(globalSearchHighlightTimer);
    document.querySelectorAll('.search-hit-flash').forEach(function(node){
      node.classList.remove('search-hit-flash');
    });
    document.querySelectorAll('.search-hit-active').forEach(function(node){
      node.classList.remove('search-hit-active');
    });
    void card.offsetWidth;
    card.classList.add('search-hit-flash');
    card.classList.add('search-hit-active');
    globalSearchFlashTimer = setTimeout(function(){
      card.classList.remove('search-hit-flash');
      globalSearchFlashTimer = null;
    }, 1400);
    globalSearchHighlightTimer = setTimeout(function(){
      card.classList.remove('search-hit-active');
      globalSearchHighlightTimer = null;
    }, 10000);
  }, 80);
}

function getSearchableBlocks(){
  return Array.prototype.slice.call(document.querySelectorAll('.sec .card, .sec .q-card, .sec table, .sec .note, .sec .fr-line, .sec .ex-row')).filter(function(node){
    return !node.closest('.global-search-results') && node.textContent.trim().length > 2;
  });
}

function runGlobalSearch(value){
  if(!globalSearchResults) return;
  var term = normalizeSearchText(value);
  if(!term){
    globalSearchResults.hidden = true;
    globalSearchResults.innerHTML = '';
    return;
  }

  var seen = {};
  var results = [];
  getSearchableBlocks().forEach(function(node){
    var text = node.textContent.replace(/\s+/g, ' ').trim();
    var haystack = normalizeSearchText(text);
    if(haystack.indexOf(term) === -1) return;
    var key = (node.closest('.card, .q-card, .sec') || node).outerHTML.slice(0, 120) + '|' + haystack.slice(0, 80);
    if(seen[key]) return;
    seen[key] = true;
    results.push({
      node: node,
      title: getSearchTitle(node),
      scope: getSearchScopeLabel(node),
      snippet: getSearchSnippet(text, term)
    });
  });

  globalSearchResults.hidden = false;
  if(!results.length){
    globalSearchResults.innerHTML = '<div class="global-search-empty">No exact text found</div>';
    return;
  }

  globalSearchResults.innerHTML = results.slice(0, 30).map(function(result, index){
    return '<button class="global-search-result" type="button" data-search-index="' + index + '"><strong>' + escapeHtml(result.title) + '</strong><span>' + escapeHtml(result.scope) + '</span><span>' + result.snippet + '</span></button>';
  }).join('');

  globalSearchResults.querySelectorAll('.global-search-result').forEach(function(btn){
    btn.addEventListener('click', function(){
      var index = Number(btn.getAttribute('data-search-index'));
      activateSearchTarget(results[index] && results[index].node);
      closeGlobalSearch();
    });
  });
}

// ── Scroll to nav ──
function scrollToNav(panelId){
  var nav = document.querySelector('#'+panelId+' .nav-wrap');
  var explorer = document.getElementById('learning-explorer');
  if(nav && !nav.classList.contains('card-nav-replaced')){
    window.scrollTo({top: nav.offsetTop - 10, behavior:'smooth'});
  } else if(explorer){
    window.scrollTo({top: explorer.offsetTop - 10, behavior:'smooth'});
  }
}

// ── Activate first section in a panel ──
function activateFirstSec(panelId, prefix){
  var secs = document.querySelectorAll('#'+panelId+' .sec');
  var panelKey = panelId.replace('panel-','');
  var scopedPills = document.getElementById('pills-'+panelKey);
  var pills = scopedPills ? scopedPills.querySelectorAll('.pill') : document.querySelectorAll('#'+panelId+' .pill');
  secs.forEach(function(s){ s.classList.remove('visible'); });
  pills.forEach(function(b){ b.classList.remove('active'); });
  if(secs.length > 0) {
    var firstSec = secs[0];
    var firstId = firstSec.id.replace(prefix, '');
    var matchingPill = null;
    pills.forEach(function(b){
      if(!matchingPill && (b.getAttribute('onclick') || '').indexOf("'" + firstId + "'") !== -1) matchingPill = b;
    });
    firstSec.classList.add('visible');
    if(matchingPill) matchingPill.classList.add('active');
    else if(pills.length > 0) pills[0].classList.add('active');
  } else if(pills.length > 0) {
    pills[0].classList.add('active');
  }
}

// ── Top Tab switch ──
function setGrammarModeActive(mode){
  document.querySelectorAll('.grammar-mode-tabs .pill').forEach(function(b){ b.classList.remove('active'); });
  var match = mode === 'temps' || mode === 'b1' || mode === 'b2' ? mode : 'roles';
  document.querySelectorAll('.grammar-mode-tabs .pill[data-grammar-mode="'+match+'"]').forEach(function(b){ b.classList.add('active'); });
}

// Books still reuses the original #g-books content, but it has its own public route.
function showBooks(section, btn){
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.top-tab').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('#panel-grammaire .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-grammaire .pill').forEach(function(b){ b.classList.remove('active'); });
  var panel = document.getElementById('panel-grammaire');
  var books = document.getElementById('g-books');
  var topBtn = btn || document.querySelector('.top-tab[onclick*="books"]');
  if(panel) panel.classList.add('active');
  if(books) books.classList.add('visible');
  if(topBtn) topBtn.classList.add('active');
  setGrammarModeActive('roles');
  setSidebarActive('books');
  updateRoute('books', section || null);
  setTimeout(function(){ scrollToNav('panel-grammaire'); }, 50);
}

function showMainCardsFor(tab, btn){
  switchTop(tab, btn);
  if(tab === 'dictionary'){
    setLearningState({main:'dictionary'});
    setLearningContentVisible(true);
    loadDictionaryPageItems();
    renderLearningExplorer();
    return;
  }
  setLearningState({main:tab});
  setLearningContentVisible(false);
  renderLearningExplorer();
}

function showGrammarGroupCardsFor(group, btn){
  showGrammarChild(group, btn);
  updateParentCardRoute('grammaire', group);
  setLearningState({main:'grammaire', group:group});
  setLearningContentVisible(false);
  renderLearningExplorer();
}

function switchTop(tab, btn){
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.top-tab').forEach(function(b){ b.classList.remove('active'); });
  if(tab === 'books'){
    showBooks(null, btn);
    return;
  }
  var panel = document.getElementById('panel-'+tab);
  if(panel){ panel.classList.add('active'); }
  if(btn) btn.classList.add('active');
  setSidebarActive(tab);
  if(tab === 'grammaire') {
    activateFirstSec('panel-grammaire','g-');
    setGrammarModeActive('roles');
  }
  else if(tab === 'oral') {
    var activeOralPill = document.querySelector('#pills-oral .pill.active') || document.querySelector('#pills-oral .pill');
    if(activeOralPill && activeOralPill.getAttribute('onclick') && activeOralPill.getAttribute('onclick').indexOf("showOral('devoirs'") !== -1){
      showOral('devoirs', activeOralPill);
    } else {
      showMariane(activeOralPill);
    }
  }
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
  setGrammarModeActive(panelName);
  if(panelName === 'temps') activateFirstSec('panel-temps','t-');
  else if(panelName === 'b1' || panelName === 'b2') activateFirstSec('panel-'+panelName,panelName+'-');
  updateRoute(panelName, panelName === 'temps' ? 'present' : (panelName === 'b1' || panelName === 'b2' ? 'lecon1' : null));
  setTimeout(function(){ scrollToNav('panel-'+panelName); }, 50);
}

// ── Grammaire / Temps section switch ──
function showSec(id, btn, panel){
  if(panel === 'grammaire' && id === 'books'){
    showBooks('library', document.querySelector('.top-tab[onclick*="books"]'));
    setLearningContentVisible(true);
    return;
  }
  var pre = panel === 'grammaire' ? 'g-' : (panel === 'temps' ? 't-' : panel + '-');
  document.querySelectorAll('#panel-'+panel+' .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-'+panel+' .pill').forEach(function(b){ b.classList.remove('active'); });
  var sec = document.getElementById(pre+id);
  if(sec) sec.classList.add('visible');
  if(btn) btn.classList.add('active');
  if(panel === 'grammaire') setGrammarModeActive(id === 'books' ? 'books' : 'roles');
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
  var marianeQuestionNav = document.getElementById('mariane-question-nav');
  if(marianeQuestionNav) marianeQuestionNav.hidden = id === 'devoirs' || id === 'ferial' || id === 'prononciation';
  document.querySelectorAll('#pills-oral .pill').forEach(function(b){ b.classList.remove('active'); });
  var isTopOralPill = btn && btn.closest && btn.closest('#pills-oral');
  var marianeTab = document.querySelector('#pills-oral .pill[onclick*="showMariane"]');
  if(isTopOralPill) btn.classList.add('active');
  else if(marianeTab) marianeTab.classList.add('active');
  var sec = document.getElementById('o-'+id);
  if(sec) sec.classList.add('visible');
  if(btn && !isTopOralPill) btn.classList.add('active');
  if(id === 'prononciation') initPronunciationPractice();
  updateRoute('oral', id);
  if(learningExplorer.root){
    if(id === 'devoirs' || id === 'prononciation'){
      setLearningState({main:'oral', group:id});
      setLearningContentVisible(true);
    } else if(id === 'ferial'){
      setLearningState({main:'oral', group:'ferial'});
      setLearningContentVisible(false);
    } else {
      setLearningState({main:'oral', group:'mariane', lesson:id});
      setLearningContentVisible(true);
    }
    renderLearningExplorer();
  }
  scrollToNav('panel-oral');
}

function showMariane(btn){
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('#pills-oral .pill').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('#panel-oral .sec').forEach(function(s){ s.classList.remove('visible'); });
  var oralPanel = document.getElementById('panel-oral');
  if(oralPanel) oralPanel.classList.add('active');
  var marianeQuestionNav = document.getElementById('mariane-question-nav');
  if(marianeQuestionNav) marianeQuestionNav.hidden = false;
  var marianeMainTab = document.querySelector('#pills-oral .pill');
  if(marianeMainTab) marianeMainTab.classList.add('active');
  if(btn && !btn.closest('#pills-oral')) btn.classList.add('active');
  var firstQuestion = document.querySelector('#pills-mariane .pill');
  document.querySelectorAll('#pills-mariane .pill').forEach(function(b){ b.classList.remove('active'); });
  if(firstQuestion) firstQuestion.classList.add('active');
  var firstSec = document.getElementById('o-all-questions');
  if(firstSec) firstSec.classList.add('visible');
  updateRoute('oral', 'all-questions');
  scrollToNav('panel-oral');
}

function showFerialLesson(id, btn){
  var selectedPanel = null;
  document.querySelectorAll('#o-ferial .ferial-lesson-panel').forEach(function(panel){
    var active = panel.id === 'ferial-' + id;
    panel.hidden = !active;
    panel.classList.toggle('active', active);
    if(active) selectedPanel = panel;
  });
  document.querySelectorAll('#o-ferial .ferial-lesson-tabs .pill').forEach(function(pill){
    var active = pill === btn || pill.getAttribute('data-ferial-lesson') === id;
    pill.classList.toggle('active', active);
    pill.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  if(selectedPanel){
    setTimeout(function(){
      selectedPanel.scrollIntoView({behavior:'smooth', block:'start'});
    }, 20);
  }
}

var pronunciationRecognition = null;
var pronunciationStoppedByUser = false;
var pronunciationMediaRecorder = null;
var pronunciationRecordingStream = null;
var pronunciationRecordingChunks = [];
var pronunciationRecordingMimeType = '';
var pronunciationPendingSaveHandle = null;
var pronunciationRecordingStartedAt = null;

function getPronunciationRecognition(){
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition) return null;
  var recognition = new SpeechRecognition();
  recognition.lang = 'fr-FR';
  recognition.interimResults = false;
  recognition.continuous = true;
  recognition.maxAlternatives = 1;
  recognition.onresult = function(event){
    var transcript = '';
    for(var i = 0; i < event.results.length; i++){
      transcript += (event.results[i][0] && event.results[i][0].transcript ? event.results[i][0].transcript : '') + ' ';
    }
    var output = document.getElementById('pron-recognized-text');
    if(output){
      output.value = transcript.trim();
      resizePronunciationTextarea(output);
      setPronunciationWritingStatus(!!output.value.trim());
    }
  };
  recognition.onerror = function(event){
    setPronunciationStatus('Mic error: ' + (event.error || 'unknown'));
    if(event.error === 'not-allowed' || event.error === 'service-not-allowed'){
      pronunciationStoppedByUser = true;
      setPronunciationMicState('stopped');
      pronunciationRecognition = null;
    }
  };
  recognition.onend = function(){
    if(pronunciationStoppedByUser){
      setPronunciationStatus('Mic stopped. You can correct the text now.');
      pronunciationRecognition = null;
      pronunciationStoppedByUser = false;
      return;
    }
    setPronunciationStatus('Mic paused, restarting automatically...');
    try {
      recognition.start();
    } catch(e) {
      setPronunciationStatus('Mic restart failed. Press Start again.');
      pronunciationRecognition = null;
      setPronunciationMicState('stopped');
    }
  };
  pronunciationRecognition = recognition;
  return pronunciationRecognition;
}

function setPronunciationStatus(message){
  var status = document.getElementById('pron-status');
  if(status) status.textContent = message;
}

function getPronunciationRecordingType(){
  if(!window.MediaRecorder) return null;
  var types = [
    { mime: 'audio/mpeg', ext: 'mp3' },
    { mime: 'audio/mp3', ext: 'mp3' },
    { mime: 'audio/webm;codecs=opus', ext: 'webm' },
    { mime: 'audio/webm', ext: 'webm' },
    { mime: 'audio/ogg;codecs=opus', ext: 'ogg' },
    { mime: 'audio/ogg', ext: 'ogg' },
    { mime: '', ext: 'webm' }
  ];
  for(var i = 0; i < types.length; i++){
    if(!types[i].mime || MediaRecorder.isTypeSupported(types[i].mime)) return types[i];
  }
  return null;
}

function getPronunciationRecordingFileName(ext){
  var stamp = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '_').slice(0, 19);
  return 'pronunciation-recording-' + stamp + '.' + ext;
}

function canEncodePronunciationMp3(){
  return !!(window.lamejs && window.lamejs.Mp3Encoder && (window.AudioContext || window.webkitAudioContext));
}

function floatToPronunciationMp3Sample(floatSamples, start, length){
  var output = new Int16Array(length);
  for(var i = 0; i < length; i++){
    var sample = Math.max(-1, Math.min(1, floatSamples[start + i] || 0));
    output[i] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
  }
  return output;
}

async function convertPronunciationAudioToMp3(sourceBlob){
  if(!canEncodePronunciationMp3()) throw new Error('MP3 encoder is not available');
  var AudioContextClass = window.AudioContext || window.webkitAudioContext;
  var audioContext = new AudioContextClass();
  try {
    var arrayBuffer = await sourceBlob.arrayBuffer();
    var audioBuffer = await audioContext.decodeAudioData(arrayBuffer.slice(0));
    var channels = Math.min(2, audioBuffer.numberOfChannels || 1);
    var sampleRate = audioBuffer.sampleRate || 44100;
    var encoder = new lamejs.Mp3Encoder(channels, sampleRate, 128);
    var left = audioBuffer.getChannelData(0);
    var right = channels > 1 ? audioBuffer.getChannelData(1) : left;
    var blockSize = 1152;
    var mp3Parts = [];
    for(var start = 0; start < left.length; start += blockSize){
      var length = Math.min(blockSize, left.length - start);
      var leftChunk = floatToPronunciationMp3Sample(left, start, length);
      var mp3Buffer;
      if(channels > 1){
        var rightChunk = floatToPronunciationMp3Sample(right, start, length);
        mp3Buffer = encoder.encodeBuffer(leftChunk, rightChunk);
      } else {
        mp3Buffer = encoder.encodeBuffer(leftChunk);
      }
      if(mp3Buffer.length) mp3Parts.push(mp3Buffer);
    }
    var flush = encoder.flush();
    if(flush.length) mp3Parts.push(flush);
    return new Blob(mp3Parts, { type: 'audio/mpeg' });
  } finally {
    if(audioContext.close) audioContext.close();
  }
}

function stopPronunciationRecordingStream(){
  if(pronunciationRecordingStream){
    pronunciationRecordingStream.getTracks().forEach(function(track){ track.stop(); });
    pronunciationRecordingStream = null;
  }
}

async function startPronunciationAudioRecording(){
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder){
    setPronunciationStatus('Listening... Audio recording is not supported in this browser.');
    return false;
  }
  var type = getPronunciationRecordingType();
  if(!type){
    setPronunciationStatus('Listening... Audio recording format is not supported in this browser.');
    return false;
  }
  stopPronunciationAudioRecording(false);
  pronunciationRecordingChunks = [];
  pronunciationRecordingMimeType = type.mime || '';
  pronunciationPendingSaveHandle = null;
  pronunciationRecordingStartedAt = new Date();
  try {
    pronunciationRecordingStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    var options = type.mime ? { mimeType: type.mime } : undefined;
    pronunciationMediaRecorder = new MediaRecorder(pronunciationRecordingStream, options);
    pronunciationMediaRecorder.ondataavailable = function(event){
      if(event.data && event.data.size) pronunciationRecordingChunks.push(event.data);
    };
    pronunciationMediaRecorder.onerror = function(error){
      console.warn('Pronunciation audio recording failed:', error);
      setPronunciationStatus('Listening... Audio recording failed, transcript still works.');
    };
    pronunciationMediaRecorder.onstop = function(){
      stopPronunciationRecordingStream();
      if(pronunciationPendingSaveHandle) savePronunciationAudioBlob();
    };
    pronunciationMediaRecorder.start();
    if(type.ext !== 'mp3'){
      setPronunciationStatus('Listening... MP3 is not supported by this browser, recording as .' + type.ext + '.');
    }
    return true;
  } catch(error) {
    console.warn('Pronunciation audio recording could not start:', error);
    stopPronunciationRecordingStream();
    pronunciationMediaRecorder = null;
    setPronunciationStatus('Listening... Recording permission was not granted, transcript still works.');
    return false;
  }
}

async function requestPronunciationRecordingSaveHandle(){
  var type = getPronunciationRecordingType() || { mime: 'audio/webm', ext: 'webm' };
  var canSaveMp3 = canEncodePronunciationMp3();
  var ext = canSaveMp3 ? 'mp3' : type.ext;
  var mime = canSaveMp3 ? 'audio/mpeg' : (type.mime || pronunciationRecordingMimeType || 'audio/webm');
  var acceptMime = String(mime || '').split(';')[0] || (ext === 'mp3' ? 'audio/mpeg' : 'audio/webm');
  if(!window.showSaveFilePicker){
    return { fallbackDownload: true, ext: ext, mime: acceptMime, encodeMp3: canSaveMp3 };
  }
  try {
    var handle = await window.showSaveFilePicker({
      suggestedName: getPronunciationRecordingFileName(ext),
      types: [{
        description: ext === 'mp3' ? 'MP3 audio' : 'Audio recording',
        accept: (function(){
          var accept = {};
          accept[acceptMime] = ['.' + ext];
          return accept;
        })()
      }]
    });
    return { handle: handle, ext: ext, mime: acceptMime, encodeMp3: canSaveMp3 };
  } catch(error) {
    if(error && error.name !== 'AbortError') console.warn('Save picker failed:', error);
    return null;
  }
}

async function savePronunciationAudioBlob(){
  var saveTarget = pronunciationPendingSaveHandle;
  pronunciationPendingSaveHandle = null;
  if(!saveTarget || !pronunciationRecordingChunks.length) return;
  var sourceMime = pronunciationRecordingMimeType || 'audio/webm';
  var blob = new Blob(pronunciationRecordingChunks, { type: sourceMime });
  var ext = saveTarget.ext || 'webm';
  try {
    if(saveTarget.encodeMp3){
      setPronunciationStatus('Mic stopped. Converting recording to MP3...');
      blob = await convertPronunciationAudioToMp3(blob);
      ext = 'mp3';
    }
    if(saveTarget.handle){
      var writable = await saveTarget.handle.createWritable();
      await writable.write(blob);
      await writable.close();
      setPronunciationStatus('Mic stopped. MP3 recording saved. You can correct the text now.');
      return;
    }
    if(saveTarget.fallbackDownload){
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = getPronunciationRecordingFileName(ext);
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
      setPronunciationStatus('Mic stopped. MP3 recording download started. You can correct the text now.');
    }
  } catch(error) {
    console.warn('Pronunciation recording save failed:', error);
    setPronunciationStatus('Mic stopped. Could not convert/save MP3 recording.');
  }
}

function stopPronunciationAudioRecording(shouldSave){
  if(!pronunciationMediaRecorder){
    stopPronunciationRecordingStream();
    return;
  }
  try {
    if(pronunciationMediaRecorder.state !== 'inactive'){
      pronunciationMediaRecorder.stop();
    } else if(shouldSave && pronunciationPendingSaveHandle){
      savePronunciationAudioBlob();
    }
  } catch(error) {
    console.warn('Pronunciation audio recorder could not stop:', error);
    stopPronunciationRecordingStream();
  }
  pronunciationMediaRecorder = null;
}

function getPronunciationOriginalTextValue(){
  var original = document.getElementById('pron-original-text');
  return original && original.value.trim() ? original.value.trim() : 'Bonjour';
}

function syncPronunciationListeningText(){
  var listeningText = document.getElementById('pron-listening-text');
  if(listeningText) listeningText.textContent = getPronunciationOriginalTextValue();
}

var pronunciationTranslationTimer = null;
var pronunciationTranslationRequestId = 0;

function getPronunciationTranslationText(result){
  if(!result) return '';
  if(result.type === 'single') return result.text || '';
  if(result.type === 'list') return (result.lines || []).join('\n');
  return String(result || '');
}

function setPronunciationArabicTranslation(text, isLoading){
  var target = document.getElementById('pron-arabic-translation');
  if(!target) return;
  target.classList.toggle('is-loading', !!isLoading);
  target.textContent = text;
}

function updatePronunciationArabicTranslation(){
  var original = document.getElementById('pron-original-text');
  if(!original) return;
  var text = original.value.trim();
  var requestId = ++pronunciationTranslationRequestId;
  if(!text){
    setPronunciationArabicTranslation('الترجمة العربية تظهر هنا.', false);
    return;
  }
  setPronunciationArabicTranslation('جارٍ الترجمة...', true);
  var translatePromise = typeof translateSelectedTextAsync === 'function'
    ? translateSelectedTextAsync(text)
    : Promise.reject(new Error('Translation service is unavailable'));
  translatePromise.then(function(result){
    if(requestId !== pronunciationTranslationRequestId) return;
    var translated = getPronunciationTranslationText(result).trim();
    setPronunciationArabicTranslation(translated || 'الترجمة غير متوفرة حاليًا.', false);
  }).catch(function(error){
    if(requestId !== pronunciationTranslationRequestId) return;
    console.warn('Pronunciation Arabic translation failed:', error);
    setPronunciationArabicTranslation('تعذر الاتصال بخدمة الترجمة.', false);
  });
}

function schedulePronunciationArabicTranslation(delay){
  clearTimeout(pronunciationTranslationTimer);
  pronunciationTranslationTimer = setTimeout(updatePronunciationArabicTranslation, delay == null ? 500 : delay);
}

function setPronunciationWritingStatus(isVisible){
  var writing = document.getElementById('pron-listening-writing');
  if(writing) writing.hidden = !isVisible;
}

function removePronunciationParagraphGaps(text){
  return String(text || '').replace(/\r\n?/g, '\n').replace(/\n[ \t]*\n+/g, '\n').replace(/^\n+|\n+$/g, '');
}

function cleanPronunciationOriginalText(textarea){
  if(!textarea) return;
  var cleaned = removePronunciationParagraphGaps(textarea.value);
  if(cleaned === textarea.value) return;
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;
  var removedBeforeCursor = textarea.value.slice(0, start).length - removePronunciationParagraphGaps(textarea.value.slice(0, start)).length;
  textarea.value = cleaned;
  var nextStart = Math.max(0, start - removedBeforeCursor);
  var nextEnd = Math.max(nextStart, end - removedBeforeCursor);
  textarea.setSelectionRange(nextStart, nextEnd);
}
function resizePronunciationTextarea(textarea){
  if(!textarea) return;
  textarea.style.height = 'auto';
  var minHeight = parseFloat(window.getComputedStyle(textarea).minHeight) || 0;
  textarea.style.height = Math.max(textarea.scrollHeight, minHeight) + 'px';
}

function resizePronunciationTextareas(){
  document.querySelectorAll('#pron-original-text, #pron-recognized-text').forEach(resizePronunciationTextarea);
}

function initPronunciationTextSizing(){
  var original = document.getElementById('pron-original-text');
  var recognized = document.getElementById('pron-recognized-text');
  [original, recognized].forEach(function(textarea){
    if(!textarea || textarea.dataset.pronAutoFit === 'ready') return;
    textarea.dataset.pronAutoFit = 'ready';
    textarea.addEventListener('input', function(){
      if(textarea === original) cleanPronunciationOriginalText(textarea);
      resizePronunciationTextarea(textarea);
      if(textarea === original){
        syncPronunciationListeningText();
        schedulePronunciationArabicTranslation();
      }
    });
    textarea.addEventListener('paste', function(){
      setTimeout(function(){
        if(textarea === original) cleanPronunciationOriginalText(textarea);
        resizePronunciationTextarea(textarea);
        if(textarea === original){
          syncPronunciationListeningText();
          schedulePronunciationArabicTranslation(150);
        }
      }, 0);
    });
  });
  syncPronunciationListeningText();
  schedulePronunciationArabicTranslation(0);
  resizePronunciationTextareas();
}
function setPronunciationListeningPopup(isVisible){
  var modal = document.getElementById('pron-listening-modal');
  if(!modal) return;
  modal.hidden = !isVisible;
  if(isVisible) syncPronunciationListeningText();
  document.body.classList.toggle('pron-listening-open', !!isVisible);
}

function setPronunciationMicState(state){
  var startBtn = document.getElementById('pron-start-btn');
  setPronunciationListeningPopup(state === 'listening');
  if(!startBtn) return;
  startBtn.classList.toggle('sec-tool-btn-success', state === 'listening');
  startBtn.classList.toggle('sec-tool-btn-warning', false);
  if(state === 'listening'){
    startBtn.querySelector('strong').textContent = 'Listening';
  } else {
    startBtn.querySelector('strong').textContent = 'Start mic';
  }
}

async function startPronunciationMic(event){
  if(event) event.preventDefault();
  pronunciationStoppedByUser = false;
  if(pronunciationRecognition){
    try { pronunciationRecognition.stop(); } catch(e) {}
    pronunciationRecognition = null;
  }
  var recognition = getPronunciationRecognition();
  if(!recognition){
    setPronunciationStatus('Speech recognition is not supported in this browser. Use Chrome or Edge.');
    setPronunciationMicState('stopped');
    return;
  }
  var output = document.getElementById('pron-recognized-text');
  if(output){
    output.value = '';
    resizePronunciationTextarea(output);
  }
  setPronunciationWritingStatus(false);
  try {
    await startPronunciationAudioRecording();
    recognition.start();
    if(pronunciationMediaRecorder && pronunciationMediaRecorder.state === 'recording'){
      setPronunciationStatus('Listening... speak in French. Recording audio too.');
    } else {
      setPronunciationStatus('Listening... speak in French.');
    }
    setPronunciationMicState('listening');
  } catch(error) {
    stopPronunciationAudioRecording(false);
    setPronunciationStatus('Mic could not start. Please try again.');
    setPronunciationMicState('stopped');
  }
}

async function askToSavePronunciationRecording(){
  if(window.Swal && typeof window.Swal.fire === 'function'){
    var result = await window.Swal.fire({
      title: 'Save MP3 recording?',
      text: 'Do you want to save this voice recording as an MP3 file?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Save MP3',
      cancelButtonText: 'No, thanks',
      reverseButtons: true,
      focusConfirm: false
    });
    return !!result.isConfirmed;
  }
  return window.confirm('Save this voice recording?');
}

async function stopPronunciationMic(event){
  if(event) event.preventDefault();
  var shouldAskToSave = !!event && pronunciationMediaRecorder && pronunciationMediaRecorder.state === 'recording';
  if(shouldAskToSave && await askToSavePronunciationRecording()){
    pronunciationPendingSaveHandle = await requestPronunciationRecordingSaveHandle();
  } else {
    pronunciationPendingSaveHandle = null;
  }
  if(pronunciationRecognition){
    pronunciationStoppedByUser = true;
    try { pronunciationRecognition.stop(); } catch(e) {}
  }
  stopPronunciationAudioRecording(!!pronunciationPendingSaveHandle);
  setPronunciationMicState('stopped');
}

function normalizePronunciationText(text){
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .replace(/[^a-z0-9àâçéèêëîïôûùüÿñæœ\s-]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function comparePronunciationText(){
  stopPronunciationMic();
  comparePronunciationTextWithScore();
}

// ── Pronunciation practice words with 0-10 scoring ──
var pronunciationWords = [
  {word:'Bonjour', ipa:'bɔ̃ʒuʁ', desc:'Hello'},
  {word:'Au revoir', ipa:'o ʁəvwaʁ', desc:'Goodbye'},
  {word:'S\'il vous plaît', ipa:'sil vu plɛ', desc:'Please'},
  {word:'Merci', ipa:'meʁsi', desc:'Thank you'},
  {word:'Excusez-moi', ipa:'ɛkskyze mwa', desc:'Excuse me'},
  {word:'Je ne comprends pas', ipa:'ʒə nə kɔ̃pʁɑ̃ pa', desc:'I don\'t understand'},
  {word:'Parlez plus lentement', ipa:'paʁle ply lɑ̃təmɑ̃', desc:'Speak more slowly'},
  {word:'Enchantée', ipa:'ɑ̃ʃɑ̃te', desc:'Nice to meet you'},
  {word:'Oui', ipa:'wi', desc:'Yes'},
  {word:'Non', ipa:'nɔ̃', desc:'No'}
];

var currentPronunciationIndex = 0;
var pronunciationScores = {};

function initPronunciationPractice(){
  pronunciationScores = {};
  renderPronunciationWords();
  loadFirstWord();
}

function renderPronunciationWords(){
  var grid = document.getElementById('pron-practice-words');
  if(!grid) return;
  grid.innerHTML = pronunciationWords.map(function(word, index){
    var score = pronunciationScores[index];
    var scoreClass = score !== undefined ? (score >= 7 ? 'good' : score >= 4 ? 'medium' : 'poor') : '';
    return '<button class="pron-word-btn ' + scoreClass + '" onclick="selectPronunciationWord(' + index + ', this)" data-index="' + index + '">' +
      '<span class="pron-word-text">' + escapeHtml(word.word) + '</span>' +
      (score !== undefined ? '<span class="pron-word-score">' + score + '/10</span>' : '<span class="pron-word-score">-</span>') +
    '</button>';
  }).join('');
}

function selectPronunciationWord(index, btn){
  currentPronunciationIndex = index;
  document.querySelectorAll('#pron-practice-words .pron-word-btn').forEach(function(b){ b.classList.remove('active'); });
  if(btn) btn.classList.add('active');
  loadPronunciationWord(index);
}

function loadFirstWord(){
  var firstActive = document.querySelector('#pron-practice-words .pron-word-btn');
  if(firstActive) firstActive.classList.add('active');
  loadPronunciationWord(0);
}

function loadPronunciationWord(index){
  if(index < 0 || index >= pronunciationWords.length) return;
  currentPronunciationIndex = index;
  var word = pronunciationWords[index];
  var original = document.getElementById('pron-original-text');
  var recognized = document.getElementById('pron-recognized-text');
  if(original) original.value = word.word;
  if(recognized) recognized.value = '';
  syncPronunciationListeningText();
  schedulePronunciationArabicTranslation(0);
  resizePronunciationTextareas();
  updatePronunciationIPAReference(word);
}

var currentSynthUtterance = null;


function playPronunciationText(){
  if(!('speechSynthesis' in window)){
    alert('Speech synthesis is not supported in this browser.');
    return;
  }
  var original = document.getElementById('pron-original-text');
  if(!original || !original.value.trim()){
    alert('Please add text to play.');
    return;
  }
  if(window.speechSynthesis.paused){
    window.speechSynthesis.resume();
    setPronunciationButtonState('playing');
    return;
  }
  stopPronunciationText();
  var utterance = new SpeechSynthesisUtterance(original.value);
  utterance.lang = 'fr-FR';
  utterance.rate = parseFloat(document.getElementById('pron-speed').value) || 1;
  utterance.onend = function(){ setPronunciationButtonState('stopped'); };
  utterance.onerror = function(){ setPronunciationButtonState('stopped'); };
  currentSynthUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  setPronunciationButtonState('playing');
}

function pausePronunciationText(){
  if(!('speechSynthesis' in window)) return;
  if(window.speechSynthesis.speaking && !window.speechSynthesis.paused){
    window.speechSynthesis.pause();
    setPronunciationButtonState('paused');
  }
}

function stopPronunciationText(){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  currentSynthUtterance = null;
  setPronunciationButtonState('stopped');
}

function updatePronunciationSpeed(){
  var speed = parseFloat(document.getElementById('pron-speed').value) || 1;
  if(currentSynthUtterance){
    currentSynthUtterance.rate = speed;
  }
}

function setPronunciationButtonState(state){
  var playBtn = document.getElementById('pron-play-btn');
  var pauseBtn = document.getElementById('pron-pause-btn');
  var stopBtn = document.getElementById('pron-text-stop-btn');
  if(!playBtn || !pauseBtn || !stopBtn) return;
  playBtn.classList.toggle('sec-tool-btn-success', state === 'playing');
  playBtn.classList.toggle('sec-tool-btn-warning', state === 'paused');
  if(state === 'playing'){
    playBtn.querySelector('strong').textContent = 'Playing';
  } else if(state === 'paused'){
    playBtn.querySelector('strong').textContent = 'Resume';
  } else {
    playBtn.querySelector('strong').textContent = 'Play';
  }
}


function updatePronunciationIPAReference(word){
  var ref = document.getElementById('pron-ipa-reference');
  if(!ref) return;
  ref.innerHTML = '<div style="padding:16px;background:var(--surface-secondary);border-radius:8px">' +
    '<div style="font-size:24px;color:var(--primary);margin-bottom:8px;font-weight:bold">' + escapeHtml(word.word) + '</div>' +
    '<div style="font-size:18px;color:#666;font-family:\'Courier New\',monospace;margin:8px 0">' + escapeHtml(word.ipa) + '</div>' +
    '<div style="font-size:14px;color:#999;margin-top:8px">' + escapeHtml(word.desc) + '</div>' +
  '</div>';
}

function calculatePronunciationScore(original, spoken){
  var origWords = normalizePronunciationText(original).split(' ').filter(Boolean);
  var spokenWords = normalizePronunciationText(spoken).split(' ').filter(Boolean);
  if(origWords.length === 0) return 0;
  var matched = 0;
  var spokenCounts = {};
  spokenWords.forEach(function(word){ spokenCounts[word] = (spokenCounts[word] || 0) + 1; });
  origWords.forEach(function(word){
    if(spokenCounts[word] > 0){
      spokenCounts[word]--;
      matched++;
    }
  });
  var percentage = (matched / origWords.length) * 100;
  return Math.round((percentage / 100) * 10 * 10) / 10;
}

function isPronunciationVowelStart(word){
  return /^[aeiouyh]/.test(word || '');
}

function isPronunciationLiaisonPair(first, second){
  if(!first || !second || !isPronunciationVowelStart(second)) return false;
  if(/^(et|oui|onze|onzieme)$/.test(first)) return false;
  return (first.length > 1 && /[sxztdnrp]$/.test(first)) || /^(les|des|mes|tes|ses|nos|vos|leurs|aux|deux|trois|six|dix|un|mon|ton|son|en|on|nous|vous|ils|elles|est|sont|ont|tres|plus|chez)$/.test(first);
}

function buildPronunciationCorrectionHtml(origWords, spokenWords){
  var spokenCounts = {};
  spokenWords.forEach(function(word){ spokenCounts[word] = (spokenCounts[word] || 0) + 1; });
  var wordStates = origWords.map(function(word){
    if(spokenCounts[word] > 0){
      spokenCounts[word]--;
      return { word: word, status: 'ok' };
    }
    return { word: word, status: 'miss' };
  });
  var html = '';
  for(var i = 0; i < wordStates.length; i++){
    var current = wordStates[i];
    var next = wordStates[i + 1];
    if(next && isPronunciationLiaisonPair(current.word, next.word) && (current.status === 'miss' || next.status === 'miss')){
      html += '<span class="pron-word liaison" title="Liaison pronunciation needs attention"><span class="pron-liaison-icon" aria-hidden="true">🔗</span>' + escapeHtml(current.word + ' ' + next.word) + '</span>';
      i++;
    } else {
      html += '<span class="pron-word ' + current.status + '">' + escapeHtml(current.word) + '</span>';
    }
  }
  var extras = [];
  Object.keys(spokenCounts).forEach(function(word){
    for(var i = 0; i < spokenCounts[word]; i++) extras.push(word);
  });
  if(extras.length){
    html += extras.map(function(word){ return '<span class="pron-word extra">+' + escapeHtml(word) + '</span>'; }).join('');
  }
  return html;
}

function comparePronunciationTextWithScore(){
  var original = document.getElementById('pron-original-text');
  var spoken = document.getElementById('pron-recognized-text');
  var correction = document.getElementById('pron-correction');
  var score = document.getElementById('pron-score');
  if(!original || !spoken || !correction || !score) return;
  var score10 = calculatePronunciationScore(original.value, spoken.value);
  pronunciationScores[currentPronunciationIndex] = Math.round(score10);
  var origWords = normalizePronunciationText(original.value).split(' ').filter(Boolean);
  var spokenWords = normalizePronunciationText(spoken.value).split(' ').filter(Boolean);
  var html = buildPronunciationCorrectionHtml(origWords, spokenWords);
  score.textContent = 'Score: ' + Math.round(score10) + '/10';
  correction.innerHTML = html || '<div class="note">Add original text and record your speech first.</div>';
  renderPronunciationWords();
}

function setPronunciationMode(mode, btn){
  document.querySelectorAll('#o-prononciation .nav-pills .pill').forEach(function(b){ b.classList.remove('active'); });
  if(btn) btn.classList.add('active');
  var practiceSection = document.querySelector('#o-prononciation .pron-practice-grid').parentElement;
  var recordSection = document.querySelectorAll('#o-prononciation .grid-2, #o-prononciation .pron-score, #o-prononciation .pron-ipa-reference').forEach(function(s){
    if(mode === 'practice'){
      s.style.display = 'block';
    } else {
      s.style.display = 'none';
    }
  });
  if(mode === 'reference'){
    showPronunciationReference();
  }
}

function showPronunciationReference(){
  var ref = document.getElementById('pron-ipa-reference');
  if(!ref) return;
  ref.innerHTML = '<div class="pron-reference-list">' + pronunciationWords.map(function(word){
    return '<div class="pron-ref-item">' +
      '<span class="pron-ref-word">' + escapeHtml(word.word) + '</span>' +
      '<span class="pron-ref-ipa">' + escapeHtml(word.ipa) + '</span>' +
      '<span class="pron-ref-desc">' + escapeHtml(word.desc) + '</span>' +
    '</div>';
  }).join('') + '</div>';
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

function showTcf(id, btn){
  document.querySelectorAll('#panel-tcf .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-tcf .pill').forEach(function(b){ b.classList.remove('active'); });
  var sec = document.getElementById('tcf-'+id);
  if(sec) sec.classList.add('visible');
  if(btn) btn.classList.add('active');
  updateRoute('tcf', id);
  scrollToNav('panel-tcf');
}

function showTcfEcritSub(id, btn){
  document.querySelectorAll('#tcf-ecrit .tcf-ecrit-sub').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#tcf-ecrit .tcf-tache1-tabs .pill, #tcf-ecrit .tcf-tache1-tabs .learning-card').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('#learning-card-grid .learning-card[data-learning-key="ecrit1"], #learning-card-grid .learning-card[data-learning-key="tache2"], #learning-card-grid .learning-card[data-learning-key="tache3"]').forEach(function(b){ b.classList.remove('active'); });
  var invitation = document.getElementById('tcf-invitation');
  if(invitation) invitation.classList.remove('visible');
  var sec = document.getElementById('tcf-ecrit-'+id);
  if(sec) sec.classList.add('visible');
  if(id === 'invitation' && invitation) invitation.classList.add('visible');
  if(['expliquer','comparer','structure','invitation','videos'].indexOf(id) !== -1){
    var tache1Btn = document.querySelector('#learning-card-grid .learning-card[data-learning-key="ecrit1"]');
    var toolBtn = btn || document.querySelector('#tcf-ecrit .tcf-tache1-tabs .learning-card[data-learning-key="' + id + '"]');
    if(tache1Btn) tache1Btn.classList.add('active');
    if(toolBtn) toolBtn.classList.add('active');
  } else {
    var taskBtn = document.querySelector('#learning-card-grid .learning-card[data-learning-key="' + id + '"]');
    if(taskBtn) taskBtn.classList.add('active');
  }
  if(btn) btn.classList.add('active');
  updateRoute('tcf', id);
}

function playTcfTacheVideo(src, title, btn){
  var player = document.getElementById('tcf-tache-video-player');
  var label = document.getElementById('tcf-video-title');
  document.querySelectorAll('#tcf-ecrit-videos .tcf-video-list .learning-card').forEach(function(card){ card.classList.remove('active'); });
  if(btn) btn.classList.add('active');
  if(label) label.textContent = title || 'Video';
  if(player && src){
    player.setAttribute('src', src);
  }
}

// ── Q-Card toggle ──
function toggleQ(hdr){
  hdr.closest('.q-card').classList.toggle('open');
}

function toggleTcfConsignesCard(control){
  var card = control && control.closest('.tcf-consignes-card');
  if(!card) return;
  var isCollapsed = card.classList.toggle('tcf-consignes-collapsed');
  control.setAttribute('aria-expanded', String(!isCollapsed));
  control.setAttribute('aria-label', isCollapsed ? 'Show consignes' : 'Hide consignes');
}

function initTcfConsignesCardToggle(){
  document.querySelectorAll('.tcf-consignes-arrow').forEach(function(arrow){
    if(arrow.dataset.toggleReady === 'true') return;
    arrow.dataset.toggleReady = 'true';
    arrow.addEventListener('keydown', function(event){
      if(event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      toggleTcfConsignesCard(arrow);
    });
  });
}

function toggleEngagingAnswer(btn){
  var answer = btn.nextElementSibling;
  if(!answer) return;
  var visible = answer.classList.toggle('visible');
  btn.textContent = visible ? 'Masquer la réponse' : 'Afficher la réponse';
}

var tcfExpliquerStatements = [
  { title:"Les formules d'ouverture - formel", arTitle:'عبارات الافتتاح - رسمي', className:'is-primary', rows:[
    ['Bonjour Madame,','صباح الخير سيدتي'],
    ['Bonjour Monsieur,','صباح الخير سيدي'],
    ['Bonsoir,','مساء الخير'],
    ["J'espère que vous allez bien.",'أتمنى أن تكون بخير'],
    ["J'espère que tout va bien pour vous.",'أتمنى أن يكون كل شيء بخير لديك']
  ]},
  { title:"Les formules d'ouverture - avec un ami", arTitle:'عبارات الافتتاح - مع صديق', rows:[
    ['Salut !','هاي'],
    ['Coucou !','أهلا'],
    ['Salut, comment vas-tu ?','مرحبا، كيف حالك؟'],
    ["Bonjour Linda, j'espère que vous allez bien.",'مرحبًا ليندا، أتمنى أن تكوني بخير.']
  ]},
  { title:'Demander des nouvelles', arTitle:'السؤال عن الأخبار', rows:[
    ['Comment allez-vous ?','كيف حالك؟ رسمي'],
    ['Comment vas-tu ?','كيف حالك؟ غير رسمي'],
    ['Comment vont vos parents ?','كيف حال والديك؟'],
    ['Est-ce que tout va bien ?','هل كل شيء بخير؟'],
    ['Quoi de neuf ?','ما الجديد؟'],
    ['Comment vont votre père et votre mère ?','كيف حال والدك ووالدتك؟']
  ]},
  { title:'Contextualiser votre message', arTitle:'وضع الرسالة في سياق', rows:[
    ['Je vous écris pour...','أكتب لك من أجل...'],
    ['Je voulais vous demander...','أردت أن أسألك...'],
    ['Je vous contacte au sujet de...','أتواصل معك بخصوص...'],
    ['Je voulais prendre de vos nouvelles.','أردت الاطمئنان عليك'],
    ["Je vous écris pour vous demander l'heure de l'examen.",'أكتب إليك لأسألك عن موعد الامتحان.']
  ]},
  { title:'Encourager à répondre ou à participer', arTitle:'تشجيع الرد أو المشاركة', rows:[
    ["J'attends ta réponse.",'أنا في انتظار ردك.'],
    ["Dis-moi si tu es d'accord.",'قل لي إذا كنت موافقًا.'],
    ["Qu'en penses-tu ?",'ما رأيك؟']
  ]},
  { title:'Motiver le destinataire', arTitle:'تحفيز المرسل إليه', rows:[
    ["Ne rate pas l'occasion.",'لا تفوّت الفرصة.'],
    ['Ce serait super de partager cela avec toi.','سيكون رائعًا أن أشارك هذا معك.'],
    ['Je suis sûr(e) que tu vas adorer !','أنا متأكد أنك ستحب ذلك جدًا!'],
    ["C'est une opportunité en or, ne la laisse pas filer !",'إنها فرصة ذهبية، لا تدعها تضيع!'],
    ["Je t'attends, ce sera une belle aventure !",'أنا في انتظارك، ستكون مغامرة جميلة!'],
    ['Je suis convaincu(e) que ça va te plaire.','أنا مقتنع أن هذا سيعجبك.'],
    ['Fais-moi confiance, ça vaut vraiment le coup !','ثق بي، الأمر يستحق فعلًا!']
  ]},
  { title:'Encourager une réponse', arTitle:'تشجيع الرد', rows:[
    ["Qu'en penses-tu ?",'ما رأيك في ذلك؟'],
    ["Dis-moi si tu es d'accord.",'قل لي إذا كنت موافقًا.'],
    ["J'attends ton avis avec impatience !",'أنتظر رأيك بفارغ الصبر!'],
    ['Fais-moi savoir ce que tu en penses.','أخبرني برأيك في ذلك.'],
    ["J'aimerais bien connaître ton point de vue.",'أود معرفة وجهة نظرك.'],
    ["Hâte d'avoir ton retour !",'متشوق لسماع ردك!']
  ]},
  { title:'Formuler une demande', arTitle:'صياغة طلب', rows:[
    ["Peux-tu m'accompagner au cinéma ?",'هل يمكنك أن ترافقني إلى السينما؟'],
    ["Dis-moi si ça te convient d'aller avec moi au parc.",'أخبرني إذا كان يناسبك الذهاب معي إلى الحديقة.'],
    ["Est-ce que ça t'irait de faire du sport ensemble ?",'هل سيكون مناسبًا لك أن نمارس الرياضة معًا؟'],
    ["Aurais-tu un moment pour m'aider à décorer ma maison ?",'هل سيكون لديك وقت لمساعدتي في تزيين منزلي؟'],
    ["Peux-tu m'aider ?",'هل يمكنك مساعدتي؟'],
    ["Est-ce que ça t'irait de venir avec moi ?",'هل يناسبك أن تأتي معي؟'],
    ["Auriez-vous un moment pour m'aider ?",'هل لديكم وقت لمساعدتي؟'],
    ["Pouvez-vous m'aider, s'il vous plaît ?",'هل يمكنك مساعدتي من فضلك؟']
  ]},
  { title:'Donner des détails', arTitle:'إعطاء التفاصيل', rows:[
    ['Peux-tu aller avec moi au cinéma samedi prochain à 18h ?','هل يمكنك الذهاب معي إلى السينما السبت القادم الساعة السادسة؟'],
    ['Peux-tu aller avec moi au cinéma Vox, qui se trouve au centre commercial ?','هل يمكنك الذهاب معي إلى سينما فوكس الموجودة في المركز التجاري؟'],
    ["J'ai acheté deux tickets pour samedi prochain à 18 h.",'لقد اشتريت تذكرتين للسبت القادم الساعة السادسة مساءً.'],
    ['Peux-tu venir chez moi demain soir à 20h pour regarder un film ?','هل يمكنك المجيء إلى منزلي غدًا الساعة 8 مساءً لمشاهدة فيلم؟']
  ]},
  { title:'Modèles à mémoriser', arTitle:'قوالب للحفظ', rows:[
    ['Peux-tu venir avec moi au restaurant demain à 19h ?','هل يمكنك أن تأتي معي إلى المطعم غدًا الساعة السابعة مساءً؟'],
    ["J'aimerais passer un bon moment avec toi.",'أود أن أقضي وقتًا جميلًا معك.'],
    ["Aurais-tu un moment pour m'aider ce soir chez moi ?",'هل سيكون لديك وقت لمساعدتي هذا المساء في منزلي؟'],
    ["J'ai besoin de déplacer quelques meubles.",'أحتاج إلى نقل بعض الأثاث.'],
    ["Est-ce que ça t'irait de faire du sport avec moi au gym samedi matin ?",'هل يناسبك أن تمارس الرياضة معي في النادي الرياضي صباح السبت؟']
  ]}
];

function renderTcfExpliquerStatements(){
  var container = document.getElementById('tcf-expliquer-statements');
  if(!container || container.dataset.ready === 'true') return;
  container.innerHTML =
    '<div class="tcf-statement-summary-head">' +
      '<div>' +
        '<h2>All Statements</h2>' +
        '<div class="tcf-statement-summary-ar">كل الجمل</div>' +
      '</div>' +
      makePrintAction('#tcf-expliquer-statements', 'TCF Écrit Expliquer - All Statements') +
    '</div>' +
    tcfExpliquerStatements.map(function(group){
    return '<section class="tcf-statement-group '+(group.className || '')+'">' +
      '<h3><span>'+group.title+'</span><small>'+group.arTitle+'</small></h3>' +
      group.rows.map(function(row){
        return '<div class="ex-row"><span class="ex-fr">'+row[0]+'</span><span class="ex-ar">'+row[1]+'</span></div>';
      }).join('') +
    '</section>';
  }).join('');
  container.dataset.ready = 'true';
}

function toggleTcfExpliquerStatements(event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  renderTcfExpliquerStatements();
  var container = document.getElementById('tcf-expliquer-statements');
  var button = event && event.currentTarget;
  if(!container) return;
  var willShow = container.hidden;
  container.hidden = !willShow;
  if(button){
    button.setAttribute('aria-expanded', String(willShow));
  }
}

function addTcfResponseWordCounts(){
  document.querySelectorAll('#tcf-ecrit-ecrit1 .tcf-sujet-card .fr-text').forEach(function(response){
    var text = Array.prototype.map.call(response.querySelectorAll('.fr-line'), function(line){
      return line.textContent.trim();
    }).join(' ');
    var words = text.match(/[A-Za-zÀ-ÖØ-öø-ÿ]+(?:['’-][A-Za-zÀ-ÖØ-öø-ÿ]+)*/g) || [];
    var badge = document.createElement('span');
    badge.className = 'tcf-response-word-count';
    badge.textContent = '(' + words.length + ' mots)';
    response.classList.add('has-word-count');
    response.appendChild(badge);
  });
}

addTcfResponseWordCounts();

function addTcfEcritAnswerSpeechButtons(){
  document.querySelectorAll('#tcf-ecrit-ecrit1 .tcf-sujet-card').forEach(function(card){
    var response = card.querySelector('.fr-text.has-word-count, .tcf-invitation-model');
    var badge = response && response.querySelector('.tcf-response-word-count');
    var num = card.querySelector('.q-num');
    if(!response || !badge || !num || response.querySelector('.tcf-answer-play-btn')) return;
    var sujetNumber = Number(num.textContent.trim());
    if(!sujetNumber) return;
    response.classList.add('has-answer-speech');
    var answerButton = document.createElement('button');
    answerButton.className = 'tcf-sujet-play-btn tcf-answer-play-btn';
    answerButton.type = 'button';
    answerButton.setAttribute('data-answer-sujet', String(sujetNumber));
    answerButton.setAttribute('aria-label', 'Play Sujet ' + sujetNumber + ' answer');
    answerButton.innerHTML = actionIcon('play') + '<strong>Play answer</strong>';
    answerButton.addEventListener('click', function(event){
      playTcfEcritAnswerSpeech(sujetNumber, event);
    });
    answerButton.addEventListener('touchend', function(event){
      playTcfEcritAnswerSpeech(sujetNumber, event);
    }, {passive:false});
    badge.insertAdjacentElement('afterend', answerButton);
  });
}

addTcfEcritAnswerSpeechButtons();

var tcfEcritAnswerSpeech = {
  activeButton: null,
  utterance: null
};

function getTcfEcritAnswerText(sujetNumber){
  var card = Array.prototype.find.call(document.querySelectorAll('#tcf-ecrit-ecrit1 .tcf-sujet-card'), function(item){
    var num = item.querySelector('.q-num');
    return num && Number(num.textContent.trim()) === Number(sujetNumber);
  });
  if(!card) return '';
  var response = card.querySelector('.tcf-invitation-model, .fr-text.has-word-count');
  if(!response) return '';
  var lines = response.querySelectorAll('.fr-line').length ?
    response.querySelectorAll('.fr-line') :
    response.querySelectorAll(':scope > p');
  return Array.prototype.map.call(lines, function(line){
    return line.textContent.replace(/\s+/g, ' ').trim();
  }).filter(Boolean).join(' ');
}

function updateTcfEcritAnswerSpeechButtons(){
  document.querySelectorAll('.tcf-answer-play-btn').forEach(function(button){
    var isActive = button === tcfEcritAnswerSpeech.activeButton;
    button.classList.toggle('is-playing', isActive);
    button.setAttribute('aria-label', (isActive ? 'Stop' : 'Play') + ' Sujet ' + button.getAttribute('data-answer-sujet') + ' answer');
    button.innerHTML = actionIcon(isActive ? 'stop' : 'play') + '<strong>' + (isActive ? 'Stop answer' : 'Play answer') + '</strong>';
  });
}

function stopTcfEcritAnswerSpeech(){
  if(window.speechSynthesis){
    window.speechSynthesis.cancel();
  }
  tcfEcritAnswerSpeech.activeButton = null;
  tcfEcritAnswerSpeech.utterance = null;
  updateTcfEcritAnswerSpeechButtons();
}

function playTcfEcritAnswerSpeech(sujetNumber, event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)){
    window.alert('Speech reading is not supported in this browser.');
    return;
  }
  var button = document.querySelector('.tcf-answer-play-btn[data-answer-sujet="' + sujetNumber + '"]');
  if(button && button === tcfEcritAnswerSpeech.activeButton){
    stopTcfEcritAnswerSpeech();
    return;
  }
  var answerText = getTcfEcritAnswerText(sujetNumber);
  if(!answerText) return;
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  var utterance = new SpeechSynthesisUtterance(answerText);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.75;
  utterance.pitch = 1.08;
  var frenchVoice = getTcfEcritFrenchVoice();
  if(frenchVoice) utterance.voice = frenchVoice;
  utterance.onend = stopTcfEcritAnswerSpeech;
  utterance.onerror = stopTcfEcritAnswerSpeech;
  tcfEcritAnswerSpeech.activeButton = button;
  tcfEcritAnswerSpeech.utterance = utterance;
  updateTcfEcritAnswerSpeechButtons();
  window.speechSynthesis.speak(utterance);
}

var tcfOralSpeech = {
  active: false,
  queue: [],
  index: 0,
  current: null
};

function getTcfOralTask1SpeechQueue(){
  return Array.prototype.map.call(document.querySelectorAll('#tcf-oral .tcf-oral-card'), function(card){
    var num = card.querySelector('.q-num');
    var question = card.querySelector('.q-text');
    var answerLines = Array.prototype.map.call(card.querySelectorAll('.q-body .fr-line'), function(line){
      return line.textContent.trim();
    }).filter(Boolean);
    var number = num ? num.textContent.trim() : '';
    var questionText = question ? question.textContent.trim() : '';
    return [
      number ? 'Question ' + number + '.' : 'Question.',
      questionText,
      'Réponse.',
      answerLines.join(' ')
    ].filter(Boolean).join(' ');
  }).filter(Boolean);
}

function updateTcfOralSpeechButtons(){
  document.querySelectorAll('.tcf-oral-read-btn').forEach(function(btn){
    btn.classList.toggle('is-playing', tcfOralSpeech.active);
    btn.setAttribute('aria-label', tcfOralSpeech.active ? 'Stop reading TCF Oral Task 1' : 'Read TCF Oral Task 1 questions and answers');
    var label = btn.querySelector('strong');
    if(label) label.textContent = tcfOralSpeech.active ? 'Stop reading' : 'Read Task 1';
  });
}

function stopTcfOralTask1Speech(){
  if(window.speechSynthesis){
    window.speechSynthesis.cancel();
  }
  tcfOralSpeech.active = false;
  tcfOralSpeech.queue = [];
  tcfOralSpeech.index = 0;
  tcfOralSpeech.current = null;
  updateTcfOralSpeechButtons();
}

function speakNextTcfOralTask1(){
  if(!tcfOralSpeech.active) return;
  if(tcfOralSpeech.index >= tcfOralSpeech.queue.length){
    stopTcfOralTask1Speech();
    return;
  }
  var text = tcfOralSpeech.queue[tcfOralSpeech.index];
  tcfOralSpeech.index += 1;
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.92;
  utterance.pitch = 1;
  var _v1 = getTcfEcritFrenchVoice(); if(_v1) utterance.voice = _v1;
  utterance.onend = speakNextTcfOralTask1;
  utterance.onerror = speakNextTcfOralTask1;
  tcfOralSpeech.current = utterance;
  window.speechSynthesis.speak(utterance);
  updateTcfOralSpeechButtons();
}

function toggleTcfOralTask1Speech(event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)){
    window.alert('Speech reading is not supported in this browser.');
    return;
  }
  if(tcfOralSpeech.active){
    stopTcfOralTask1Speech();
    return;
  }
  tcfOralSpeech.queue = getTcfOralTask1SpeechQueue();
  if(!tcfOralSpeech.queue.length) return;
  tcfOralSpeech.active = true;
  tcfOralSpeech.index = 0;
  window.speechSynthesis.cancel();
  speakNextTcfOralTask1();
}

function getTcfOralTask1SpeechItems(){
  var frenchNumbers = {
    1:'un',
    2:'deux',
    3:'trois',
    4:'quatre',
    5:'cinq',
    6:'six',
    7:'sept',
    8:'huit',
    9:'neuf',
    10:'dix',
    11:'onze',
    12:'douze',
    13:'treize',
    14:'quatorze',
    15:'quinze',
    16:'seize',
    17:'dix-sept',
    18:'dix-huit',
    19:'dix-neuf',
    20:'vingt'
  };
  return Array.prototype.map.call(document.querySelectorAll('#tcf-oral .tcf-oral-card'), function(card, index){
    var num = card.querySelector('.q-num');
    var question = card.querySelector('.q-text');
    var answerLines = Array.prototype.map.call(card.querySelectorAll('.q-body .fr-line'), function(line){
      return line.textContent.trim();
    }).filter(Boolean);
    var number = num ? num.textContent.trim() : String(index + 1).padStart(2, '0');
    var spokenNumber = frenchNumbers[index + 1] || String(index + 1);
    var questionText = question ? question.textContent.trim() : '';
    var answerText = answerLines.join(' ');
    return {
      number: number,
      question: questionText,
      answer: answerText,
      text: ['Question numéro ' + spokenNumber + '.', questionText, 'Réponse.', answerText].filter(Boolean).join(' ')
    };
  }).filter(function(item){ return !!item.text; });
}

function ensureTcfOralSpeechState(){
  if(typeof tcfOralSpeech.playingAll !== 'boolean') tcfOralSpeech.playingAll = false;
  if(!tcfOralSpeech.speed) tcfOralSpeech.speed = 0.92;
  if(typeof tcfOralSpeech.popup === 'undefined') tcfOralSpeech.popup = null;
  if(typeof tcfOralSpeech.token !== 'number') tcfOralSpeech.token = 0;
  if(typeof tcfOralSpeech.currentOffset !== 'number') tcfOralSpeech.currentOffset = 0;
  if(typeof tcfOralSpeech.currentLength !== 'number') tcfOralSpeech.currentLength = 1;
}

function ensureTcfOralSpeechPopup(){
  ensureTcfOralSpeechState();
  if(tcfOralSpeech.popup) return tcfOralSpeech.popup;
  var popup = document.createElement('div');
  popup.className = 'tcf-audio-popup tcf-oral-speech-popup';
  popup.hidden = true;
  popup.innerHTML =
    '<div class="tcf-audio-panel" role="dialog" aria-modal="true" aria-label="TCF Oral speech player">' +
      '<div class="tcf-audio-panel-head">' +
        '<div><div class="tcf-audio-kicker">TCF Oral</div><div class="tcf-audio-title">Task 1</div></div>' +
        '<button class="tcf-audio-close" type="button" aria-label="Close speech popup">Close</button>' +
      '</div>' +
      '<div class="tcf-audio-now">Ready</div>' +
      '<div class="tcf-audio-progress-row">' +
        '<span class="tcf-oral-current-step">0%</span>' +
        '<input class="tcf-oral-progress" type="range" min="0" max="100" value="0" step="1" aria-label="Current question progress">' +
        '<span class="tcf-oral-total-steps">100%</span>' +
      '</div>' +
      '<div class="tcf-audio-controls">' +
        '<button class="tcf-audio-control tcf-oral-prev" type="button">Prev</button>' +
        '<button class="tcf-audio-control tcf-oral-repeat" type="button">Repeat</button>' +
        '<button class="tcf-audio-control tcf-oral-play-pause" type="button">Pause</button>' +
        '<button class="tcf-audio-control tcf-oral-next" type="button">Next</button>' +
        '<button class="tcf-audio-control tcf-oral-stop" type="button">Stop</button>' +
      '</div>' +
      '<div class="tcf-audio-speed" aria-label="Speech speed">' +
        '<span>Speed</span>' +
        '<button class="tcf-oral-speed-btn" type="button" data-speed="0.6">0.6x</button>' +
        '<button class="tcf-oral-speed-btn active" type="button" data-speed="0.92">1x</button>' +
        '<button class="tcf-oral-speed-btn" type="button" data-speed="1.15">1.25x</button>' +
        '<button class="tcf-oral-speed-btn" type="button" data-speed="1.35">1.5x</button>' +
        '<button class="tcf-oral-speed-btn" type="button" data-speed="1.6">2x</button>' +
      '</div>' +
      '<div class="tcf-audio-playlist"><div class="tcf-audio-playlist-title">Questions & réponses</div><div class="tcf-oral-playlist-items"></div></div>' +
    '</div>';
  document.body.appendChild(popup);
  popup.addEventListener('click', function(event){
    if(event.target === popup) hideTcfOralSpeechPopup();
  });
  popup.querySelector('.tcf-audio-close').addEventListener('click', hideTcfOralSpeechPopup);
  popup.querySelector('.tcf-oral-prev').addEventListener('click', playPreviousTcfOralSpeech);
  popup.querySelector('.tcf-oral-repeat').addEventListener('click', function(){ speakTcfOralAtIndex(tcfOralSpeech.index, true); });
  popup.querySelector('.tcf-oral-play-pause').addEventListener('click', toggleTcfOralSpeechPause);
  popup.querySelector('.tcf-oral-next').addEventListener('click', function(){ speakTcfOralAtIndex(tcfOralSpeech.index + 1, true); });
  popup.querySelector('.tcf-oral-stop').addEventListener('click', stopTcfOralTask1Speech);
  popup.querySelector('.tcf-oral-progress').addEventListener('input', function(event){
    seekTcfOralSpeechProgress(Number(event.target.value));
  });
  popup.querySelectorAll('.tcf-oral-speed-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      setTcfOralSpeechSpeed(Number(btn.getAttribute('data-speed')));
    });
  });
  tcfOralSpeech.popup = popup;
  return popup;
}

function showTcfOralSpeechPopup(){
  var popup = ensureTcfOralSpeechPopup();
  popup.hidden = false;
  updateTcfOralSpeechButtons();
}

function hideTcfOralSpeechPopup(){
  if(tcfOralSpeech.popup) tcfOralSpeech.popup.hidden = true;
}

function updateTcfOralSpeechPopup(){
  var popup = ensureTcfOralSpeechPopup();
  var total = tcfOralSpeech.queue.length || 1;
  var item = tcfOralSpeech.queue[tcfOralSpeech.index];
  var percent = tcfOralSpeech.currentLength ? Math.min(100, Math.max(0, Math.round((tcfOralSpeech.currentOffset / tcfOralSpeech.currentLength) * 100))) : 0;
  popup.querySelector('.tcf-audio-title').textContent = item ? 'Question ' + item.number : 'Task 1';
  popup.querySelector('.tcf-audio-now').textContent = item ? item.question : 'Ready';
  popup.querySelector('.tcf-oral-current-step').textContent = percent + '%';
  popup.querySelector('.tcf-oral-total-steps').textContent = 'Q ' + Math.min(tcfOralSpeech.index + 1, total) + '/' + total;
  var progress = popup.querySelector('.tcf-oral-progress');
  progress.max = 100;
  progress.value = percent;
  popup.querySelector('.tcf-oral-play-pause').textContent = window.speechSynthesis && window.speechSynthesis.paused ? 'Play' : 'Pause';
  popup.querySelector('.tcf-oral-prev').disabled = tcfOralSpeech.index <= 0;
  popup.querySelector('.tcf-oral-next').disabled = tcfOralSpeech.index >= total - 1;
  popup.querySelectorAll('.tcf-oral-speed-btn').forEach(function(btn){
    btn.classList.toggle('active', Number(btn.getAttribute('data-speed')) === tcfOralSpeech.speed);
  });
  var playlist = popup.querySelector('.tcf-oral-playlist-items');
  playlist.innerHTML = tcfOralSpeech.queue.map(function(row, index){
    var active = index === tcfOralSpeech.index ? ' active' : '';
    return '<button class="tcf-audio-playlist-item'+active+'" type="button" data-index="'+index+'"><span>Question '+row.number+'</span><small>'+(index + 1)+' / '+total+'</small></button>';
  }).join('');
  playlist.querySelectorAll('.tcf-audio-playlist-item').forEach(function(btn){
    btn.addEventListener('click', function(){
      speakTcfOralAtIndex(Number(btn.getAttribute('data-index')), true);
    });
  });
}

function updateTcfOralSpeechButtons(){
  ensureTcfOralSpeechState();
  document.querySelectorAll('.tcf-oral-read-btn').forEach(function(btn){
    btn.classList.toggle('is-playing', tcfOralSpeech.active && tcfOralSpeech.playingAll);
    btn.setAttribute('aria-label', tcfOralSpeech.active ? 'Open TCF Oral Task 1 player' : 'Play all TCF Oral Task 1 questions and answers');
    var label = btn.querySelector('strong');
    if(label) label.textContent = tcfOralSpeech.active && tcfOralSpeech.playingAll ? 'Playing all' : 'Play all';
  });
  document.querySelectorAll('.tcf-oral-play-btn').forEach(function(btn){
    var index = Number(btn.getAttribute('data-oral-index'));
    var isActive = tcfOralSpeech.active && tcfOralSpeech.index === index;
    btn.classList.toggle('is-playing', isActive);
    btn.setAttribute('aria-label', (isActive ? 'Open' : 'Play') + ' oral question ' + (index + 1));
    var label = btn.querySelector('strong');
    if(label) label.textContent = isActive ? 'Playing' : 'Play';
  });
  if(tcfOralSpeech.popup && !tcfOralSpeech.popup.hidden) updateTcfOralSpeechPopup();
}

function stopTcfOralTask1Speech(){
  ensureTcfOralSpeechState();
  tcfOralSpeech.active = false;
  tcfOralSpeech.playingAll = false;
  tcfOralSpeech.queue = [];
  tcfOralSpeech.index = 0;
  tcfOralSpeech.current = null;
  tcfOralSpeech.token += 1;
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  updateTcfOralSpeechButtons();
}

function getTcfOralSpeechSeekOffset(text, percent){
  var offset = Math.floor((text.length * Math.min(Math.max(percent, 0), 100)) / 100);
  if(offset <= 0) return 0;
  if(offset >= text.length) return text.length - 1;
  var previousSpace = text.lastIndexOf(' ', offset);
  return previousSpace > 0 ? previousSpace + 1 : offset;
}

function seekTcfOralSpeechProgress(percent){
  var item = tcfOralSpeech.queue[tcfOralSpeech.index];
  if(!item) return;
  speakTcfOralAtIndex(tcfOralSpeech.index, true, getTcfOralSpeechSeekOffset(item.text, percent));
}

function speakTcfOralAtIndex(index, restart, offset){
  ensureTcfOralSpeechState();
  if(!tcfOralSpeech.active) return;
  if(index < 0) index = 0;
  if(index >= tcfOralSpeech.queue.length){
    stopTcfOralTask1Speech();
    return;
  }
  tcfOralSpeech.token += 1;
  var token = tcfOralSpeech.token;
  if(restart) window.speechSynthesis.cancel();
  var item = tcfOralSpeech.queue[index];
  var startOffset = Math.min(Math.max(Number(offset) || 0, 0), Math.max(item.text.length - 1, 0));
  tcfOralSpeech.index = index;
  tcfOralSpeech.currentOffset = startOffset;
  tcfOralSpeech.currentLength = Math.max(item.text.length, 1);
  var utterance = new SpeechSynthesisUtterance(item.text.slice(startOffset));
  utterance.lang = 'fr-FR';
  utterance.rate = tcfOralSpeech.speed;
  utterance.pitch = 1;
  var _v2 = getTcfEcritFrenchVoice(); if(_v2) utterance.voice = _v2;
  utterance.onboundary = function(event){
    if(token !== tcfOralSpeech.token) return;
    if(typeof event.charIndex === 'number'){
      tcfOralSpeech.currentOffset = Math.min(startOffset + event.charIndex, tcfOralSpeech.currentLength);
      updateTcfOralSpeechButtons();
    }
  };
  utterance.onend = function(){
    if(token !== tcfOralSpeech.token) return;
    tcfOralSpeech.currentOffset = tcfOralSpeech.currentLength;
    if(tcfOralSpeech.active && tcfOralSpeech.index < tcfOralSpeech.queue.length - 1) speakTcfOralAtIndex(tcfOralSpeech.index + 1, false);
    else stopTcfOralTask1Speech();
  };
  utterance.onerror = function(){
    if(token !== tcfOralSpeech.token) return;
    if(tcfOralSpeech.active && tcfOralSpeech.index < tcfOralSpeech.queue.length - 1) speakTcfOralAtIndex(tcfOralSpeech.index + 1, false);
    else stopTcfOralTask1Speech();
  };
  tcfOralSpeech.current = utterance;
  showTcfOralSpeechPopup();
  window.speechSynthesis.speak(utterance);
  updateTcfOralSpeechButtons();
}

function playPreviousTcfOralSpeech(){
  speakTcfOralAtIndex(tcfOralSpeech.index - 1, true);
}

function toggleTcfOralSpeechPause(){
  if(!window.speechSynthesis) return;
  if(window.speechSynthesis.paused) window.speechSynthesis.resume();
  else window.speechSynthesis.pause();
  updateTcfOralSpeechButtons();
}

function setTcfOralSpeechSpeed(speed){
  ensureTcfOralSpeechState();
  if([0.6, 0.92, 1.15, 1.35, 1.6].indexOf(speed) === -1) return;
  tcfOralSpeech.speed = speed;
  if(tcfOralSpeech.active) speakTcfOralAtIndex(tcfOralSpeech.index, true, tcfOralSpeech.currentOffset);
  else updateTcfOralSpeechButtons();
}

function startTcfOralTask1Speech(index, playAll){
  if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)){
    window.alert('Speech reading is not supported in this browser.');
    return;
  }
  if(typeof stopTcfEcritAudio === 'function' && tcfEcritAudio && tcfEcritAudio.current){
    stopTcfEcritAudio();
  }
  ensureTcfOralSpeechState();
  tcfOralSpeech.queue = getTcfOralTask1SpeechItems();
  if(!tcfOralSpeech.queue.length) return;
  tcfOralSpeech.token += 1;
  window.speechSynthesis.cancel();
  tcfOralSpeech.active = true;
  tcfOralSpeech.playingAll = !!playAll;
  speakTcfOralAtIndex(index || 0, false);
}

function playTcfOralQuestion(index, event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  if(tcfOralSpeech.active && tcfOralSpeech.index === index){
    showTcfOralSpeechPopup();
    return;
  }
  startTcfOralTask1Speech(index, false);
}

function toggleTcfOralTask1Speech(event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  if(tcfOralSpeech.active){
    if(!tcfOralSpeech.playingAll){
      startTcfOralTask1Speech(0, true);
      return;
    }
    showTcfOralSpeechPopup();
    return;
  }
  startTcfOralTask1Speech(0, true);
}

function addTcfOralSpeechButtons(){
  document.querySelectorAll('#tcf-oral .tcf-oral-card').forEach(function(card, index){
    var header = card.querySelector('.q-header');
    if(!header || header.querySelector('.tcf-oral-play-btn')) return;
    card.setAttribute('data-oral-index', String(index));
    var button = document.createElement('button');
    button.className = 'tcf-sujet-play-btn tcf-oral-play-btn';
    button.type = 'button';
    button.setAttribute('data-oral-index', String(index));
    button.setAttribute('aria-label', 'Play oral question ' + (index + 1));
    button.innerHTML = actionIcon('play') + '<strong>Play</strong>';
    button.addEventListener('click', function(event){
      playTcfOralQuestion(index, event);
    });
    button.addEventListener('touchend', function(event){
      playTcfOralQuestion(index, event);
    }, {passive:false});
    var arrow = header.querySelector('.q-arrow');
    if(arrow) arrow.insertAdjacentElement('beforebegin', button);
    else header.appendChild(button);
  });
  updateTcfOralSpeechButtons();
}

var tcfEcritAudio = {
  current: null,
  currentSpeech: null,
  currentSujet: null,
  playlist: [],
  playlistIndex: 0,
  playingAll: false,
  playingAllAnswers: false,
  repeatCurrent: false,
  speed: 1,
  mode: 'audio',
  speechPaused: false,
  speechStartedAt: 0,
  speechElapsed: 0,
  speechDuration: 0,
  speechOffset: 0,
  speechFullText: '',
  speechFullDuration: 0,
  speechTimer: null,
  speechToken: 0,
  voiceURI: '',
  popup: null
};

function getTcfEcritSujetAudioPath(sujetNumber){
  var number = Number(sujetNumber);
  if(number < 1 || number > 10) return '';
  return 'assets/Mp3/Sujet ' + number + ' (mp3cut.net).mp3';
}

function getTcfEcritSujetDetails(sujetNumber){
  var card = Array.prototype.find.call(document.querySelectorAll('#tcf-ecrit-ecrit1 .tcf-sujet-card'), function(item){
    var num = item.querySelector('.q-num');
    return num && Number(num.textContent.trim()) === Number(sujetNumber);
  });
  if(!card) return null;
  var label = card.querySelector('.q-label');
  var question = card.querySelector('.q-text');
  return {
    label: label ? label.textContent.trim() : '',
    question: question ? question.textContent.trim() : '',
    answerLines: getTcfEcritAnswerLines(sujetNumber)
  };
}

function getTcfEcritAnswerLines(sujetNumber){
  var card = Array.prototype.find.call(document.querySelectorAll('#tcf-ecrit-ecrit1 .tcf-sujet-card'), function(item){
    var num = item.querySelector('.q-num');
    return num && Number(num.textContent.trim()) === Number(sujetNumber);
  });
  if(!card) return [];
  var response = card.querySelector('.tcf-invitation-model, .fr-text.has-word-count, .q-body');
  if(!response) return [];
  var lineNodes = response.querySelectorAll('.fr-line').length ?
    response.querySelectorAll('.fr-line') :
    response.querySelectorAll('.tcf-invitation-model > p, :scope > p');
  return Array.prototype.map.call(lineNodes, function(line){
    return line.textContent.replace(/\s+/g, ' ').trim();
  }).filter(Boolean);
}

function renderTcfEcritSujetText(sujetNumber, answerOnly){
  var details = getTcfEcritSujetDetails(sujetNumber);
  if(!details) return '<div class="tcf-audio-read-text" hidden></div>';
  var answer = details.answerLines.map(function(line){
    return '<div class="tcf-audio-read-line">' + escapeHtml(line) + '</div>';
  }).join('');
  return '<div class="tcf-audio-read-text">' +
    '<div class="tcf-audio-read-title">' + escapeHtml(details.label || ('Sujet ' + sujetNumber)) + '</div>' +
    (answerOnly ? '' : '<div class="tcf-audio-read-question">' + escapeHtml(details.question) + '</div>') +
    '<div class="tcf-audio-read-answer">' + answer + '</div>' +
  '</div>';
}

function formatTcfEcritAudioTime(value){
  if(!isFinite(value) || value < 0) value = 0;
  var minutes = Math.floor(value / 60);
  var seconds = Math.floor(value % 60);
  return minutes + ':' + String(seconds).padStart(2, '0');
}

function ensureTcfEcritAudioPopup(){
  if(tcfEcritAudio.popup) return tcfEcritAudio.popup;
  var popup = document.createElement('div');
  popup.className = 'tcf-audio-popup';
  popup.hidden = true;
  popup.innerHTML =
    '<div class="tcf-audio-panel" role="dialog" aria-modal="true" aria-label="TCF Ecrit audio player">' +
      '<div class="tcf-audio-panel-head">' +
        '<div><div class="tcf-audio-kicker">TCF Ecrit 1</div><div class="tcf-audio-title">Sujet audio</div></div>' +
        '<button class="tcf-audio-close" type="button" aria-label="Close audio popup">Close</button>' +
      '</div>' +
      '<div class="tcf-audio-now">Ready</div>' +
      '<div class="tcf-audio-progress-row">' +
        '<span class="tcf-audio-current-time">0:00</span>' +
        '<input class="tcf-audio-progress" type="range" min="0" max="100" value="0" step="0.1" aria-label="Audio progress">' +
        '<label class="tcf-audio-speed-select-label"><span>Speed</span><select class="tcf-audio-speed-select" aria-label="Playback speed">' +
          '<option value="0.25">0.25x</option>' +
          '<option value="0.5">0.5x</option>' +
          '<option value="0.75">0.75x</option>' +
          '<option value="1" selected>1x</option>' +
          '<option value="1.5">1.5x</option>' +
          '<option value="2">2x</option>' +
        '</select></label>' +
        '<label class="tcf-audio-voice-select-label" hidden><span>Voice</span><select class="tcf-audio-voice-select" aria-label="Speech voice"></select></label>' +
        '<span class="tcf-audio-duration">0:00</span>' +
      '</div>' +
      '<div class="tcf-audio-controls">' +
        '<button class="tcf-audio-control tcf-audio-prev" type="button" aria-label="Previous sujet" title="Previous"><span aria-hidden="true">‹</span></button>' +
        '<button class="tcf-audio-control tcf-audio-skip-back" type="button" aria-label="Skip back 10 seconds" title="Back 10 seconds"><span aria-hidden="true">-10</span></button>' +
        '<button class="tcf-audio-control tcf-audio-play-pause" type="button" aria-label="Pause" title="Pause"><span aria-hidden="true">❚❚</span></button>' +
        '<button class="tcf-audio-control tcf-audio-skip-forward" type="button" aria-label="Skip forward 10 seconds" title="Forward 10 seconds"><span aria-hidden="true">+10</span></button>' +
        '<button class="tcf-audio-control tcf-audio-next" type="button" aria-label="Next sujet" title="Next"><span aria-hidden="true">›</span></button>' +
        '<button class="tcf-audio-control tcf-audio-repeat" type="button" aria-label="Repeat current sujet off" title="Repeat"><span aria-hidden="true">↻</span></button>' +
      '</div>' +
      '<div class="tcf-audio-read-mount"></div>' +
      '<div class="tcf-audio-playlist" hidden><div class="tcf-audio-playlist-title">Playlist</div><div class="tcf-audio-playlist-items"></div></div>' +
    '</div>';
  document.body.appendChild(popup);
  popup.addEventListener('click', function(event){
    if(event.target === popup) hideTcfEcritAudioPopup();
  });
  popup.querySelector('.tcf-audio-close').addEventListener('click', hideTcfEcritAudioPopup);
  popup.querySelector('.tcf-audio-play-pause').addEventListener('click', toggleTcfEcritAudioPlayPause);
  popup.querySelector('.tcf-audio-skip-back').addEventListener('click', function(){ skipTcfEcritAudio(-10); });
  popup.querySelector('.tcf-audio-skip-forward').addEventListener('click', function(){ skipTcfEcritAudio(10); });
  popup.querySelector('.tcf-audio-prev').addEventListener('click', playPreviousTcfEcritSujetAudio);
  popup.querySelector('.tcf-audio-next').addEventListener('click', function(){ playNextTcfEcritSujetAudio(true); });
  popup.querySelector('.tcf-audio-repeat').addEventListener('click', toggleTcfEcritAudioRepeat);
  popup.querySelector('.tcf-audio-speed-select').addEventListener('change', function(event){
    setTcfEcritAudioSpeed(Number(event.target.value));
  });
  popup.querySelector('.tcf-audio-voice-select').addEventListener('change', function(event){
    tcfEcritAudio.voiceURI = event.target.value;
    if(tcfEcritAudio.playingAllAnswers && tcfEcritAudio.currentSujet){
      playTcfEcritAnswerSpeechItem(tcfEcritAudio.currentSujet, true);
    }
  });
  if(window.speechSynthesis && window.speechSynthesis.addEventListener){
    window.speechSynthesis.addEventListener('voiceschanged', function(){
      if(tcfEcritAudio.popup && !tcfEcritAudio.popup.hidden){
        updateTcfEcritVoiceSelect(tcfEcritAudio.popup);
      }
    });
  }
  popup.querySelector('.tcf-audio-progress').addEventListener('input', function(event){
    if(tcfEcritAudio.mode === 'answers'){
      seekTcfEcritAnswerSpeech(Number(event.target.value));
      return;
    }
    var audio = tcfEcritAudio.current;
    if(!audio || !isFinite(audio.duration)) return;
    audio.currentTime = Number(event.target.value);
    updateTcfEcritAudioPopup();
  });
  tcfEcritAudio.popup = popup;
  return popup;
}

function showTcfEcritAudioPopup(){
  var popup = ensureTcfEcritAudioPopup();
  popup.hidden = false;
  updateTcfEcritAudioPopup();
}

function hideTcfEcritAudioPopup(){
  if(tcfEcritAudio.mode === 'answers' || tcfEcritAudio.current){
    stopTcfEcritAudio();
  }
  if(tcfEcritAudio.popup) tcfEcritAudio.popup.hidden = true;
}

function updateTcfEcritAudioPopup(){
  var popup = ensureTcfEcritAudioPopup();
  var isAnswerMode = tcfEcritAudio.mode === 'answers';
  var audio = tcfEcritAudio.current;
  var sujet = tcfEcritAudio.currentSujet;
  var duration = isAnswerMode ? (tcfEcritAudio.speechFullDuration || tcfEcritAudio.speechDuration) : (audio && isFinite(audio.duration) ? audio.duration : 0);
  var currentTime = isAnswerMode ? getTcfEcritAnswerSpeechElapsed() : (audio ? audio.currentTime : 0);
  var isPlaying = isAnswerMode ? !!tcfEcritAudio.currentSpeech && !tcfEcritAudio.speechPaused : (audio && !audio.paused);
  var hasPlaylist = tcfEcritAudio.playlist.length > 1;
  popup.classList.toggle('tcf-answer-speech-mode', isAnswerMode);
  popup.querySelector('.tcf-audio-title').textContent = sujet ? 'Sujet ' + sujet : (isAnswerMode ? 'Answers' : 'Sujet audio');
  popup.querySelector('.tcf-audio-now').textContent = hasPlaylist ? (isAnswerMode ? 'Play all answers - Sujet ' : 'Play all questions - Sujet ') + (sujet || '-') + ' of ' + tcfEcritAudio.playlist.length : (isAnswerMode ? 'Single answer' : 'Single audio');
  var progress = popup.querySelector('.tcf-audio-progress');
  progress.max = duration || 100;
  progress.value = duration ? Math.min(currentTime, duration) : 0;
  progress.disabled = false;
  popup.querySelector('.tcf-audio-current-time').textContent = formatTcfEcritAudioTime(currentTime);
  popup.querySelector('.tcf-audio-duration').textContent = formatTcfEcritAudioTime(duration);
  var playPause = popup.querySelector('.tcf-audio-play-pause');
  playPause.innerHTML = isPlaying ? '<span aria-hidden="true">❚❚</span>' : '<span aria-hidden="true">▶</span>';
  playPause.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
  playPause.setAttribute('title', isPlaying ? 'Pause' : 'Play');
  var repeat = popup.querySelector('.tcf-audio-repeat');
  repeat.setAttribute('aria-label', tcfEcritAudio.repeatCurrent ? 'Repeat current sujet on' : 'Repeat current sujet off');
  repeat.setAttribute('title', tcfEcritAudio.repeatCurrent ? 'Repeat on' : 'Repeat off');
  popup.querySelector('.tcf-audio-repeat').classList.toggle('active', tcfEcritAudio.repeatCurrent);
  popup.querySelector('.tcf-audio-prev').disabled = !hasPlaylist || tcfEcritAudio.playlistIndex <= 1;
  popup.querySelector('.tcf-audio-next').disabled = !hasPlaylist || tcfEcritAudio.playlistIndex >= tcfEcritAudio.playlist.length;
  popup.querySelector('.tcf-audio-skip-back').disabled = isAnswerMode;
  popup.querySelector('.tcf-audio-skip-forward').disabled = isAnswerMode;
  popup.querySelector('.tcf-audio-read-mount').innerHTML = sujet ? renderTcfEcritSujetText(sujet, isAnswerMode) : '';
  popup.querySelector('.tcf-audio-speed-select').value = String(tcfEcritAudio.speed);
  updateTcfEcritVoiceSelect(popup);
  var playlist = popup.querySelector('.tcf-audio-playlist');
  var playlistItems = popup.querySelector('.tcf-audio-playlist-items');
  playlist.hidden = !hasPlaylist;
  if(hasPlaylist){
    playlistItems.innerHTML = tcfEcritAudio.playlist.map(function(item, index){
      var active = item === sujet ? ' active' : '';
      return '<button class="tcf-audio-playlist-item'+active+'" type="button" data-sujet="'+item+'"><span>Sujet '+item+'</span><small>'+(index + 1)+' / '+tcfEcritAudio.playlist.length+'</small></button>';
    }).join('');
    playlistItems.querySelectorAll('.tcf-audio-playlist-item').forEach(function(btn){
      btn.addEventListener('click', function(){
        var item = Number(btn.getAttribute('data-sujet'));
        tcfEcritAudio.playlistIndex = tcfEcritAudio.playlist.indexOf(item) + 1;
        if(tcfEcritAudio.mode === 'answers'){
          playTcfEcritAnswerSpeechItem(item, true);
        } else {
          playTcfEcritAudioItem(item, true);
        }
      });
    });
  }
}

function updateTcfEcritAudioButtons(){
  document.querySelectorAll('#tcf-ecrit-ecrit1 .tcf-sujet-play-btn[data-sujet]').forEach(function(btn){
    var sujet = Number(btn.getAttribute('data-sujet'));
    var isActive = tcfEcritAudio.currentSujet === sujet && tcfEcritAudio.current && !tcfEcritAudio.current.paused;
    btn.classList.toggle('is-playing', isActive);
    btn.setAttribute('aria-label', (isActive ? 'Open' : 'Play') + ' Sujet ' + sujet + ' question audio');
    var label = btn.querySelector('strong');
    if(label) label.textContent = isActive ? 'Playing' : 'Play question';
  });
  document.querySelectorAll('.tcf-play-all-btn').forEach(function(btn){
    var isQuestionPlaylist = tcfEcritAudio.playingAll && tcfEcritAudio.mode === 'audio';
    btn.classList.toggle('is-playing', isQuestionPlaylist);
    btn.setAttribute('aria-label', isQuestionPlaylist ? 'Open Ecrit 1 question audio playlist' : 'Play all Ecrit 1 questions audio');
    var label = btn.querySelector('strong');
    if(label) label.textContent = isQuestionPlaylist ? 'Playing questions' : 'Play all questions';
  });
  document.querySelectorAll('.tcf-play-all-answers-btn').forEach(function(btn){
    var isAnswerPlaylist = tcfEcritAudio.playingAllAnswers && tcfEcritAudio.mode === 'answers';
    btn.classList.toggle('is-playing', isAnswerPlaylist);
    btn.setAttribute('aria-label', isAnswerPlaylist ? 'Open Ecrit 1 answer speech playlist' : 'Play all Ecrit 1 answers');
    var label = btn.querySelector('strong');
    if(label) label.textContent = isAnswerPlaylist ? 'Playing answers' : 'Play all answers';
  });
  if(tcfEcritAudio.popup && !tcfEcritAudio.popup.hidden) updateTcfEcritAudioPopup();
}

function stopTcfEcritAudio(){
  tcfEcritAudio.playingAll = false;
  tcfEcritAudio.playingAllAnswers = false;
  tcfEcritAudio.playlist = [];
  tcfEcritAudio.playlistIndex = 0;
  if(tcfEcritAudio.current){
    tcfEcritAudio.current.pause();
    tcfEcritAudio.current.currentTime = 0;
  }
  stopTcfEcritAnswerSpeechTimer();
  tcfEcritAudio.speechToken += 1;
  if(window.speechSynthesis){
    window.speechSynthesis.cancel();
  }
  tcfEcritAudio.current = null;
  tcfEcritAudio.currentSpeech = null;
  tcfEcritAudio.currentSujet = null;
  tcfEcritAudio.speechPaused = false;
  tcfEcritAudio.speechElapsed = 0;
  tcfEcritAudio.speechDuration = 0;
  tcfEcritAudio.speechOffset = 0;
  tcfEcritAudio.speechFullText = '';
  tcfEcritAudio.speechFullDuration = 0;
  tcfEcritAudio.mode = 'audio';
  updateTcfEcritAudioButtons();
}

function getTcfEcritSpeechVoices(){
  if(!('speechSynthesis' in window) || !window.speechSynthesis.getVoices) return [];
  return (window.speechSynthesis.getVoices() || []).filter(function(voice){
    var lang = String(voice.lang || '').toLowerCase();
    var name = String(voice.name || '').toLowerCase();
    return lang.indexOf('fr') === 0 || name.indexOf('french') !== -1 || name.indexOf('francais') !== -1 || name.indexOf('français') !== -1;
  });
}

function getTcfEcritSelectedSpeechVoice(){
  var voices = getTcfEcritSpeechVoices();
  if(tcfEcritAudio.voiceURI){
    var selected = voices.find(function(voice){ return voice.voiceURI === tcfEcritAudio.voiceURI; });
    if(selected) return selected;
  }
  var female = getTcfEcritFrenchVoice();
  if(female){
    tcfEcritAudio.voiceURI = female.voiceURI;
    return female;
  }
  if(voices[0]) tcfEcritAudio.voiceURI = voices[0].voiceURI;
  return voices[0] || null;
}

function updateTcfEcritVoiceSelect(popup){
  var label = popup.querySelector('.tcf-audio-voice-select-label');
  var select = popup.querySelector('.tcf-audio-voice-select');
  if(!label || !select) return;
  var isAnswerMode = tcfEcritAudio.mode === 'answers';
  label.hidden = !isAnswerMode;
  if(!isAnswerMode) return;
  var voices = getTcfEcritSpeechVoices();
  var selectedVoice = getTcfEcritSelectedSpeechVoice();
  var signature = voices.map(function(voice){ return voice.voiceURI; }).join('|') || 'default';
  if(select.dataset.voiceSignature !== signature){
    select.innerHTML = voices.length ? voices.map(function(voice){
      return '<option value="' + escapeHtml(voice.voiceURI) + '">' + escapeHtml(voice.name + (voice.lang ? ' - ' + voice.lang : '')) + '</option>';
    }).join('') : '<option value="">Browser default voice</option>';
    select.dataset.voiceSignature = signature;
  }
  select.value = selectedVoice ? selectedVoice.voiceURI : '';
}

function getTcfEcritAnswerSpeechElapsed(){
  if(tcfEcritAudio.mode !== 'answers') return 0;
  var base = tcfEcritAudio.speechOffset || 0;
  if(tcfEcritAudio.speechPaused) return base + tcfEcritAudio.speechElapsed;
  if(!tcfEcritAudio.currentSpeech) return base + (tcfEcritAudio.speechElapsed || 0);
  return base + tcfEcritAudio.speechElapsed + ((Date.now() - tcfEcritAudio.speechStartedAt) / 1000);
}

function stopTcfEcritAnswerSpeechTimer(){
  if(tcfEcritAudio.speechTimer){
    clearInterval(tcfEcritAudio.speechTimer);
    tcfEcritAudio.speechTimer = null;
  }
}

function startTcfEcritAnswerSpeechTimer(){
  stopTcfEcritAnswerSpeechTimer();
  tcfEcritAudio.speechTimer = setInterval(function(){
    if(tcfEcritAudio.mode === 'answers' && tcfEcritAudio.popup && !tcfEcritAudio.popup.hidden){
      updateTcfEcritAudioPopup();
    }
  }, 250);
}

function estimateTcfEcritSpeechDuration(text){
  var words = (text.match(/[A-Za-zÀ-ÖØ-öø-ÿ]+(?:['’-][A-Za-zÀ-ÖØ-öø-ÿ]+)*/g) || []).length;
  var wordsPerSecond = 2.35 * Math.max(tcfEcritAudio.speed || 1, 0.25);
  return Math.max(6, Math.ceil(words / wordsPerSecond));
}

function getTcfEcritSpeechTextFromTime(text, targetTime, fullDuration){
  var source = String(text || '').replace(/\s+/g, ' ').trim();
  if(!source) return '';
  if(!fullDuration || targetTime <= 0) return source;
  var words = source.split(' ');
  var ratio = Math.min(Math.max(targetTime / fullDuration, 0), 0.98);
  var startIndex = Math.min(Math.floor(words.length * ratio), Math.max(words.length - 1, 0));
  return words.slice(startIndex).join(' ');
}

function seekTcfEcritAnswerSpeech(targetTime){
  if(tcfEcritAudio.mode !== 'answers' || !tcfEcritAudio.currentSujet) return;
  if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return;
  var fullText = tcfEcritAudio.speechFullText || getTcfEcritAnswerLines(tcfEcritAudio.currentSujet).join(' ');
  var fullDuration = tcfEcritAudio.speechFullDuration || estimateTcfEcritSpeechDuration(fullText);
  var nextOffset = Math.min(Math.max(Number(targetTime) || 0, 0), fullDuration);
  var textFromOffset = getTcfEcritSpeechTextFromTime(fullText, nextOffset, fullDuration);
  if(!textFromOffset) return;
  var token = tcfEcritAudio.speechToken + 1;
  tcfEcritAudio.speechToken = token;
  window.speechSynthesis.cancel();
  stopTcfEcritAnswerSpeechTimer();
  var utterance = new SpeechSynthesisUtterance(textFromOffset);
  utterance.lang = 'fr-FR';
  utterance.rate = tcfEcritAudio.speed;
  utterance.pitch = 1.08;
  var voice = getTcfEcritSelectedSpeechVoice();
  if(voice) utterance.voice = voice;
  utterance.onend = function(){
    if(token !== tcfEcritAudio.speechToken) return;
    stopTcfEcritAnswerSpeechTimer();
    tcfEcritAudio.currentSpeech = null;
    tcfEcritAudio.speechPaused = false;
    tcfEcritAudio.speechElapsed = 0;
    tcfEcritAudio.speechOffset = 0;
    if(tcfEcritAudio.repeatCurrent){
      playTcfEcritAnswerSpeechItem(tcfEcritAudio.currentSujet, true);
      return;
    }
    if(tcfEcritAudio.playingAllAnswers){
      playNextTcfEcritSujetAudio(false);
    } else {
      updateTcfEcritAudioButtons();
    }
  };
  utterance.onerror = function(){
    if(token !== tcfEcritAudio.speechToken) return;
    stopTcfEcritAnswerSpeechTimer();
    tcfEcritAudio.currentSpeech = null;
    updateTcfEcritAudioButtons();
  };
  tcfEcritAudio.currentSpeech = utterance;
  tcfEcritAudio.speechPaused = false;
  tcfEcritAudio.speechElapsed = 0;
  tcfEcritAudio.speechOffset = nextOffset;
  tcfEcritAudio.speechStartedAt = Date.now();
  tcfEcritAudio.speechDuration = Math.max(1, fullDuration - nextOffset);
  tcfEcritAudio.speechFullText = fullText;
  tcfEcritAudio.speechFullDuration = fullDuration;
  startTcfEcritAnswerSpeechTimer();
  window.speechSynthesis.speak(utterance);
  updateTcfEcritAudioButtons();
}

function attachTcfEcritAudioEvents(audio){
  audio.addEventListener('loadedmetadata', function(){
    if(audio === tcfEcritAudio.current) updateTcfEcritAudioButtons();
  });
  audio.addEventListener('timeupdate', function(){
    if(audio === tcfEcritAudio.current) updateTcfEcritAudioButtons();
  });
  audio.addEventListener('play', function(){
    if(audio === tcfEcritAudio.current) updateTcfEcritAudioButtons();
  });
  audio.addEventListener('pause', function(){
    if(audio === tcfEcritAudio.current) updateTcfEcritAudioButtons();
  });
  audio.addEventListener('ended', function(){
    if(audio !== tcfEcritAudio.current) return;
    if(tcfEcritAudio.repeatCurrent){
      audio.currentTime = 0;
      audio.play().then(updateTcfEcritAudioButtons).catch(function(){});
      return;
    }
    if(tcfEcritAudio.playingAll){
      playNextTcfEcritSujetAudio(false);
    } else {
      updateTcfEcritAudioButtons();
    }
  });
  audio.addEventListener('error', function(){
    if(audio !== tcfEcritAudio.current) return;
    if(tcfEcritAudio.playingAll){
      playNextTcfEcritSujetAudio(false);
    } else {
      stopTcfEcritAudio();
    }
  });
}

function playTcfEcritAudioItem(sujetNumber, keepPlaylist){
  var src = getTcfEcritSujetAudioPath(sujetNumber);
  if(!src) return;
  if(typeof stopTcfOralTask1Speech === 'function' && tcfOralSpeech && tcfOralSpeech.active){
    stopTcfOralTask1Speech();
  }
  stopTcfEcritAnswerSpeechTimer();
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  if(tcfEcritAudio.current){
    tcfEcritAudio.current.pause();
  }
  if(!keepPlaylist){
    tcfEcritAudio.playingAll = false;
    tcfEcritAudio.playingAllAnswers = false;
    tcfEcritAudio.playlist = [];
    tcfEcritAudio.playlistIndex = 0;
  }
  tcfEcritAudio.mode = 'audio';
  tcfEcritAudio.currentSpeech = null;
  tcfEcritAudio.speechPaused = false;
  var audio = new Audio(src);
  audio.playbackRate = tcfEcritAudio.speed;
  tcfEcritAudio.current = audio;
  tcfEcritAudio.currentSujet = Number(sujetNumber);
  attachTcfEcritAudioEvents(audio);
  showTcfEcritAudioPopup();
  audio.play().then(updateTcfEcritAudioButtons).catch(function(){
    stopTcfEcritAudio();
  });
}

function playTcfEcritAnswerSpeechItem(sujetNumber, keepPlaylist){
  if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)){
    window.alert('Speech reading is not supported in this browser.');
    return;
  }
  if(typeof stopTcfOralTask1Speech === 'function' && tcfOralSpeech && tcfOralSpeech.active){
    stopTcfOralTask1Speech();
  }
  if(tcfEcritAudio.current){
    tcfEcritAudio.current.pause();
    tcfEcritAudio.current = null;
  }
  if(!keepPlaylist){
    tcfEcritAudio.playingAll = false;
    tcfEcritAudio.playingAllAnswers = false;
    tcfEcritAudio.playlist = [];
    tcfEcritAudio.playlistIndex = 0;
  }
  var lines = getTcfEcritAnswerLines(sujetNumber);
  var answerText = lines.join(' ');
  if(!answerText) return;
  var token = tcfEcritAudio.speechToken + 1;
  tcfEcritAudio.speechToken = token;
  window.speechSynthesis.cancel();
  stopTcfEcritAnswerSpeechTimer();
  var utterance = new SpeechSynthesisUtterance(answerText);
  utterance.lang = 'fr-FR';
  utterance.rate = tcfEcritAudio.speed;
  utterance.pitch = 1.08;
  var voice = getTcfEcritSelectedSpeechVoice();
  if(voice) utterance.voice = voice;
  utterance.onend = function(){
    if(token !== tcfEcritAudio.speechToken) return;
    stopTcfEcritAnswerSpeechTimer();
    tcfEcritAudio.currentSpeech = null;
    tcfEcritAudio.speechPaused = false;
    tcfEcritAudio.speechElapsed = 0;
    if(tcfEcritAudio.repeatCurrent){
      playTcfEcritAnswerSpeechItem(sujetNumber, true);
      return;
    }
    if(tcfEcritAudio.playingAllAnswers){
      playNextTcfEcritSujetAudio(false);
    } else {
      updateTcfEcritAudioButtons();
    }
  };
  utterance.onerror = function(){
    if(token !== tcfEcritAudio.speechToken) return;
    stopTcfEcritAnswerSpeechTimer();
    tcfEcritAudio.currentSpeech = null;
    if(tcfEcritAudio.playingAllAnswers){
      playNextTcfEcritSujetAudio(false);
    } else {
      updateTcfEcritAudioButtons();
    }
  };
  tcfEcritAudio.mode = 'answers';
  tcfEcritAudio.currentSpeech = utterance;
  tcfEcritAudio.currentSujet = Number(sujetNumber);
  tcfEcritAudio.speechPaused = false;
  tcfEcritAudio.speechElapsed = 0;
  tcfEcritAudio.speechOffset = 0;
  tcfEcritAudio.speechStartedAt = Date.now();
  tcfEcritAudio.speechDuration = estimateTcfEcritSpeechDuration(answerText);
  tcfEcritAudio.speechFullText = answerText;
  tcfEcritAudio.speechFullDuration = tcfEcritAudio.speechDuration;
  showTcfEcritAudioPopup();
  startTcfEcritAnswerSpeechTimer();
  window.speechSynthesis.speak(utterance);
  updateTcfEcritAudioButtons();
}

function playTcfEcritSujetAudio(sujetNumber, event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  var number = Number(sujetNumber);
  if(tcfEcritAudio.currentSujet === number && tcfEcritAudio.current && !tcfEcritAudio.current.paused){
    showTcfEcritAudioPopup();
    return;
  }
  playTcfEcritAudioItem(number, false);
}

function playNextTcfEcritSujetAudio(fromButton){
  if(!tcfEcritAudio.playingAll && !tcfEcritAudio.playingAllAnswers) return;
  if(tcfEcritAudio.playlistIndex >= tcfEcritAudio.playlist.length){
    if(!fromButton) stopTcfEcritAudio();
    return;
  }
  var sujet = tcfEcritAudio.playlist[tcfEcritAudio.playlistIndex];
  tcfEcritAudio.playlistIndex += 1;
  if(tcfEcritAudio.mode === 'answers' || tcfEcritAudio.playingAllAnswers){
    playTcfEcritAnswerSpeechItem(sujet, true);
  } else {
    playTcfEcritAudioItem(sujet, true);
  }
}

function playPreviousTcfEcritSujetAudio(){
  if((!tcfEcritAudio.playingAll && !tcfEcritAudio.playingAllAnswers) || tcfEcritAudio.playlistIndex <= 1) return;
  tcfEcritAudio.playlistIndex -= 2;
  if(tcfEcritAudio.playlistIndex < 0) tcfEcritAudio.playlistIndex = 0;
  playNextTcfEcritSujetAudio(true);
}

function skipTcfEcritAudio(seconds){
  if(tcfEcritAudio.mode === 'answers') return;
  var audio = tcfEcritAudio.current;
  if(!audio) return;
  var duration = isFinite(audio.duration) ? audio.duration : audio.currentTime + seconds;
  audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), duration);
  updateTcfEcritAudioButtons();
}

function setTcfEcritAudioSpeed(speed){
  if([0.25, 0.5, 0.75, 1, 1.5, 2].indexOf(speed) === -1) return;
  tcfEcritAudio.speed = speed;
  if(tcfEcritAudio.current){
    tcfEcritAudio.current.playbackRate = speed;
  }
  if(tcfEcritAudio.mode === 'answers' && tcfEcritAudio.currentSujet && tcfEcritAudio.currentSpeech){
    playTcfEcritAnswerSpeechItem(tcfEcritAudio.currentSujet, true);
    return;
  }
  updateTcfEcritAudioButtons();
}

function toggleTcfEcritAudioRepeat(){
  tcfEcritAudio.repeatCurrent = !tcfEcritAudio.repeatCurrent;
  updateTcfEcritAudioButtons();
}

function toggleTcfEcritAudioPlayPause(){
  if(tcfEcritAudio.mode === 'answers'){
    if(!window.speechSynthesis || !tcfEcritAudio.currentSpeech) return;
    if(tcfEcritAudio.speechPaused){
      tcfEcritAudio.speechStartedAt = Date.now();
      tcfEcritAudio.speechPaused = false;
      window.speechSynthesis.resume();
      startTcfEcritAnswerSpeechTimer();
    } else {
      tcfEcritAudio.speechElapsed = Math.max(0, getTcfEcritAnswerSpeechElapsed() - (tcfEcritAudio.speechOffset || 0));
      tcfEcritAudio.speechPaused = true;
      window.speechSynthesis.pause();
      stopTcfEcritAnswerSpeechTimer();
    }
    updateTcfEcritAudioButtons();
    return;
  }
  var audio = tcfEcritAudio.current;
  if(!audio) return;
  if(audio.paused){
    audio.play().then(updateTcfEcritAudioButtons).catch(function(){});
  } else {
    audio.pause();
  }
  updateTcfEcritAudioButtons();
}

function playAllTcfEcritSujetAudio(event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  if(tcfEcritAudio.playingAll){
    showTcfEcritAudioPopup();
    return;
  }
  tcfEcritAudio.playingAll = true;
  tcfEcritAudio.playingAllAnswers = false;
  tcfEcritAudio.mode = 'audio';
  tcfEcritAudio.playlist = [1,2,3,4,5,6,7,8,9,10];
  tcfEcritAudio.playlistIndex = 0;
  playNextTcfEcritSujetAudio(true);
}

function playAllTcfEcritAnswerSpeech(event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  if(tcfEcritAudio.playingAllAnswers && tcfEcritAudio.mode === 'answers'){
    showTcfEcritAudioPopup();
    return;
  }
  tcfEcritAudio.playingAll = false;
  tcfEcritAudio.playingAllAnswers = true;
  tcfEcritAudio.mode = 'answers';
  tcfEcritAudio.speed = 0.75;
  tcfEcritAudio.playlist = [1,2,3,4,5,6,7,8,9,10];
  tcfEcritAudio.playlistIndex = 0;
  playNextTcfEcritSujetAudio(true);
}

function addTcfEcritAudioButtons(){
  document.querySelectorAll('#tcf-ecrit-ecrit1 .tcf-sujet-card').forEach(function(card){
    var num = card.querySelector('.q-num');
    var header = card.querySelector('.q-header');
    if(!num || !header || header.querySelector('.tcf-sujet-play-btn')) return;
    var sujetNumber = Number(num.textContent.trim());
    if(!getTcfEcritSujetAudioPath(sujetNumber)) return;
    var button = document.createElement('button');
    button.className = 'tcf-sujet-play-btn';
    button.type = 'button';
    button.setAttribute('data-sujet', String(sujetNumber));
    button.setAttribute('aria-label', 'Play Sujet ' + sujetNumber + ' question audio');
    button.innerHTML = actionIcon('play') + '<strong>Play question</strong>';
    button.addEventListener('click', function(event){
      playTcfEcritSujetAudio(sujetNumber, event);
    });
    button.addEventListener('touchend', function(event){
      playTcfEcritSujetAudio(sujetNumber, event);
    }, {passive:false});
    var arrow = header.querySelector('.q-arrow');
    if(arrow){
      arrow.insertAdjacentElement('beforebegin', button);
    } else {
      header.appendChild(button);
    }
  });
  updateTcfEcritAudioButtons();
}

function collapseTcfConsignesQuestionsByDefault(){
  document.querySelectorAll('#tcf-ecrit-ecrit1 .tcf-consignes-card + .card .q-card').forEach(function(card){
    card.classList.remove('open');
  });
}

var grammarSpeech = {
  activeButton: null,
  activeTarget: null,
  utterance: null,
  speed: 0.9
};

function getGrammarSpeechText(target){
  if(!target) return '';
  if(target.dataset && target.dataset.speechText) return target.dataset.speechText;
  var clone = target.cloneNode(true);
  clone.querySelectorAll('button, .grammar-speech-toolbar, .b1-lesson-ar, .ar-text, .ex-ar, [dir="rtl"]').forEach(function(node){
    node.remove();
  });
  return clone.textContent.replace(/\s+/g, ' ').trim();
}

function updateGrammarSpeechButtons(){
  document.querySelectorAll('.grammar-speech-btn').forEach(function(button){
    var isActive = button === grammarSpeech.activeButton;
    button.classList.toggle('is-playing', isActive);
    button.setAttribute('aria-label', isActive ? 'Stop reading this text' : 'Play this text');
    button.setAttribute('title', isActive ? 'Stop' : 'Play');
    button.innerHTML = actionIcon(isActive ? 'stop' : 'play') + '<strong>' + (isActive ? 'Stop' : 'Play') + '</strong>';
  });
  document.querySelectorAll('.grammar-speech-speed').forEach(function(select){
    var isActive = select.closest('.grammar-speech-toolbar') && select.closest('.grammar-speech-toolbar').querySelector('.grammar-speech-btn') === grammarSpeech.activeButton;
    select.hidden = !isActive;
    select.value = String(grammarSpeech.speed);
  });
}

function stopGrammarSpeech(){
  grammarSpeech.utterance = null;
  grammarSpeech.activeButton = null;
  grammarSpeech.activeTarget = null;
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  updateGrammarSpeechButtons();
}

function speakGrammarText(target, button, event, keepActive){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)){
    window.alert('Speech reading is not supported in this browser.');
    return;
  }
  if(grammarSpeech.activeButton === button && !keepActive){
    stopGrammarSpeech();
    return;
  }
  if(typeof stopTcfEcritAudio === 'function') stopTcfEcritAudio();
  if(typeof stopTcfOralTask1Speech === 'function' && tcfOralSpeech && tcfOralSpeech.active) stopTcfOralTask1Speech();
  var text = getGrammarSpeechText(target);
  if(!text) return;
  window.speechSynthesis.cancel();
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = grammarSpeech.speed;
  utterance.pitch = 1;
  var frenchVoice = typeof getTcfEcritFrenchVoice === 'function' ? getTcfEcritFrenchVoice() : null;
  if(frenchVoice) utterance.voice = frenchVoice;
  utterance.onend = function(){
    if(grammarSpeech.utterance === utterance) stopGrammarSpeech();
  };
  utterance.onerror = function(){
    if(grammarSpeech.utterance === utterance) stopGrammarSpeech();
  };
  grammarSpeech.utterance = utterance;
  grammarSpeech.activeButton = button;
  grammarSpeech.activeTarget = target;
  updateGrammarSpeechButtons();
  window.speechSynthesis.speak(utterance);
}

function setGrammarSpeechSpeed(speed, target, button, event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  var value = Number(speed);
  if([0.6, 0.75, 0.9, 1, 1.25, 1.5].indexOf(value) === -1) return;
  grammarSpeech.speed = value;
  updateGrammarSpeechButtons();
  if(grammarSpeech.activeButton === button && grammarSpeech.activeTarget === target){
    speakGrammarText(target, button, null, true);
  }
}

function addGrammarSpeechButtons(){
  document.querySelectorAll('#panel-b1 .b1-lesson-text, #panel-b1 .fr-text, #panel-b2 .b1-lesson-text, #panel-b2 .fr-text').forEach(function(textBlock, index){
    if(textBlock.previousElementSibling && textBlock.previousElementSibling.classList.contains('grammar-speech-toolbar')) return;
    if(!getGrammarSpeechText(textBlock)) return;
    var toolbar = document.createElement('div');
    toolbar.className = 'grammar-speech-toolbar';
    var button = document.createElement('button');
    button.className = 'tcf-sujet-play-btn grammar-speech-btn';
    button.type = 'button';
    button.setAttribute('data-grammar-speech-index', String(index));
    button.setAttribute('aria-label', 'Play this text');
    button.setAttribute('title', 'Play');
    button.innerHTML = actionIcon('play') + '<strong>Play</strong>';
    button.addEventListener('click', function(event){
      speakGrammarText(textBlock, button, event);
    });
    button.addEventListener('touchend', function(event){
      speakGrammarText(textBlock, button, event);
    }, {passive:false});
    var speedSelect = document.createElement('select');
    speedSelect.className = 'grammar-speech-speed';
    speedSelect.hidden = true;
    speedSelect.setAttribute('aria-label', 'Speech speed');
    speedSelect.innerHTML =
      '<option value="0.6">0.6x</option>' +
      '<option value="0.75">0.75x</option>' +
      '<option value="0.9">0.9x</option>' +
      '<option value="1">1x</option>' +
      '<option value="1.25">1.25x</option>' +
      '<option value="1.5">1.5x</option>';
    speedSelect.value = String(grammarSpeech.speed);
    speedSelect.addEventListener('click', function(event){
      event.stopPropagation();
    });
    speedSelect.addEventListener('change', function(event){
      setGrammarSpeechSpeed(event.target.value, textBlock, button, event);
    });
    toolbar.appendChild(button);
    toolbar.appendChild(speedSelect);
    textBlock.insertAdjacentElement('beforebegin', toolbar);
  });
  updateGrammarSpeechButtons();
}

function initFerialSpeechLines(){
  document.querySelectorAll('#o-ferial .fr-text').forEach(function(block){
    var speechLines = [];
    Array.prototype.slice.call(block.querySelectorAll(':scope > .fr-line')).forEach(function(line, index){
      if(line.dataset.ferialSpeechReady === 'true') return;
      var text = line.textContent.replace(/\s+/g, ' ').trim();
      if(!text) return;
      speechLines.push(text);
      line.dataset.speechText = text;
      line.dataset.ferialSpeechReady = 'true';
      line.classList.add('ferial-speech-line');

      var role = document.createElement('span');
      role.className = 'ferial-line-role';
      role.textContent = index % 2 === 0 ? 'Q:' : 'A:';

      var content = document.createElement('span');
      content.className = 'ferial-line-text';
      content.textContent = text;

      line.textContent = '';
      line.appendChild(role);
      line.appendChild(content);
    });
    if(speechLines.length) block.dataset.speechText = speechLines.join('. ');
    if(!block.previousElementSibling || !block.previousElementSibling.classList.contains('ferial-speech-toolbar')){
      var toolbar = document.createElement('div');
      toolbar.className = 'grammar-speech-toolbar ferial-speech-toolbar';
      var button = document.createElement('button');
      button.className = 'tcf-sujet-play-btn grammar-speech-btn ferial-conversation-play';
      button.type = 'button';
      button.setAttribute('aria-label', 'Play conversation');
      button.setAttribute('title', 'Play');
      button.innerHTML = actionIcon('play') + '<strong>Play conversation</strong>';
      button.addEventListener('click', function(event){
        speakGrammarText(block, button, event);
      });
      button.addEventListener('touchend', function(event){
        speakGrammarText(block, button, event);
      }, {passive:false});
      toolbar.appendChild(button);
      block.insertAdjacentElement('beforebegin', toolbar);
    }
  });
  updateGrammarSpeechButtons();
}

addTcfOralSpeechButtons();
addTcfEcritAudioButtons();
collapseTcfConsignesQuestionsByDefault();
initTcfConsignesCardToggle();
addGrammarSpeechButtons();
initFerialSpeechLines();

function stopAllPageVoices(){
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  if(typeof stopTcfEcritAudio === 'function'){
    stopTcfEcritAudio();
  }
  if(typeof stopTcfOralTask1Speech === 'function' && tcfOralSpeech && tcfOralSpeech.active){
    stopTcfOralTask1Speech();
  }
  if(typeof stopGrammarSpeech === 'function'){
    stopGrammarSpeech();
  }
  document.querySelectorAll('audio').forEach(function(audio){
    audio.pause();
    audio.currentTime = 0;
  });
}

stopAllPageVoices();

window.addEventListener('DOMContentLoaded', stopAllPageVoices);
window.addEventListener('load', stopAllPageVoices);
window.addEventListener('pageshow', stopAllPageVoices);
window.addEventListener('pagehide', function(){
  stopAllPageVoices();
});
window.addEventListener('beforeunload', function(){
  stopAllPageVoices();
});

function addTcfTranslations(){
  var ecritTranslations = [
    {
      question:'صديقك مهدي انتقل حديثًا إلى مدينتك ويبحث عن معلومات حول وسائل النقل. اكتب له رسالة تعطيه فيها المعلومات اللازمة.',
      answer:'مرحبًا مهدي، أهلاً بك في المدينة! للتنقل لديك عدة خيارات: المترو والحافلات والترام. توجد اشتراكات شهرية بحوالي 70 يورو، لكن إذا كنت لا تتنقل كثيرًا يمكنك شراء تذاكر منفردة أو دفتر تذاكر. تعمل وسائل النقل من الخامسة صباحًا حتى منتصف الليل، وبعض خطوط الحافلات تعمل ليلًا. وإذا كنت تفضل الدراجة، فهناك أيضًا خدمة تأجير. أخبرني إذا أردت أن نستكشف المدينة معًا! إلى اللقاء قريبًا!'
    },
    {
      question:'لقد دعوت صديقك سيدريك إلى زفافك في قصر شامبون، وأجابك بأنه لا يعرف هذا القصر. صف له المكان والموقع ووسائل النقل.',
      answer:'مرحبًا سيدريك، أنا سعيد لأنك ستأتي إلى زفافي! قصر شامبون مكان رائع يقع على بعد حوالي 30 كم من المدينة وسط الطبيعة. يمكنك الذهاب بالسيارة أو بالقطار إلى أقرب محطة، ثم أخذ سيارة أجرة. يعود تاريخ القصر إلى القرن السابع عشر ويوفر إطلالة جميلة. أنا متأكد أنك ستحبه! أخبرني إذا احتجت إلى مساعدة في تنظيم الرحلة. أراك قريبًا جدًا!'
    },
    {
      question:'ستنتقل قريبًا إلى منزل جديد. اكتب رسالة إلى صديقك لطلب مساعدته مع ذكر التاريخ والمكان ووسائل النقل.',
      answer:'مرحبًا، أتمنى أن تكون بخير! أردت أن أطلب مساعدتك في انتقالي. سأغادر شقتي في اليوم الخامس عشر من الشهر القادم، وأحتاج إلى مساعدة في نقل أغراضي. استأجرت شاحنة وسيكون كل شيء جاهزًا من الساعة التاسعة صباحًا. سيكون هناك أيضًا بعض الأصدقاء، وبالطبع سأجهز ما نأكله ونشربه لتحفيزنا! أخبرني إذا كنت متاحًا. شكرًا مقدمًا!'
    },
    {
      question:'ادعُ أصدقاءك للاحتفال بعيد ميلادك واطلب دعمهم للمساعدة في تنظيم الحفل.',
      answer:'مرحبًا جميعًا، اقترب عيد ميلادي وأود الاحتفال به معكم! أدعوكم يوم السبت 20 إلى المنزل لقضاء أمسية رائعة. ولكي يكون كل شيء مثاليًا، أحتاج إلى بعض المساعدة في الزينة والطعام. إذا استطاع أحد إحضار مشروبات أو حلوى فسيكون ذلك رائعًا! أكدوا حضوركم وأخبروني إن كان بإمكانكم المساعدة. متشوق لرؤيتكم!'
    },
    {
      question:'سيقام حدث رياضي قريبًا في مدينتك. أرسل رسالة إلى أصدقائك لدعوتهم مع ذكر التاريخ والمكان والتسجيل.',
      answer:'مرحبًا يا أصدقاء، سيقام حدث رياضي كبير في مدينتنا يوم 15 من الشهر القادم! ستكون هناك سباقات وبطولات كرة قدم وحتى تحديات لياقة بدنية. التسجيل مجاني، لكن يجب القيام به قبل يوم 10. سيكون من الجميل جدًا أن نشارك معًا! أخبروني إذا أعجبتكم الفكرة وسنستطيع التنظيم معًا. إلى اللقاء قريبًا!'
    },
    {
      question:'تريد الذهاب في عطلة نهاية أسبوع مع أصدقائك الشهر القادم. اكتب لهم رسالة تصف فيها المشروع: المكان ووسيلة النقل والأنشطة.',
      answer:'مرحبًا جميعًا، أود تنظيم عطلة نهاية أسبوع مع الأصدقاء الشهر القادم! أفكر في رحلة صغيرة إلى الجبل للاستمتاع بالطبيعة والقيام بالمشي والاسترخاء. يمكننا الذهاب بالسيارة أو القطار حسب عدد المشاركين. أخبروني إذا كنتم موافقين وما التواريخ التي تناسبكم! متشوق لرؤيتكم!'
    },
    {
      question:'انتقلت إلى مدينة جديدة منذ شهر. اكتب بريدًا إلى صديقك ليو لتخبره بأخبارك: الشقة والحي والمدينة والأنشطة التي اكتشفتها.',
      answer:'مرحبًا ليو، مضى شهر منذ انتقلت وأردت أن أخبرك بأخباري! شقتي جميلة وبها إطلالة رائعة على حديقة. الحي حيوي وفيه الكثير من المقاهي والمتاجر الصغيرة. المدينة ممتعة، وقد اكتشفت بالفعل بعض الأنشطة: يوجد نادٍ رياضي لطيف وسوق محلي كل عطلة أسبوع. أتمنى أن يكون كل شيء بخير عندك! إلى اللقاء قريبًا!'
    },
    {
      question:'ستحتفل بعيد ميلادك، وأصدقاؤك يسألونك ماذا تريد كهدايا. تريد ملابس، فاكتب لهم رسالة تصف فيها الملابس التي ترغب في الحصول عليها.',
      answer:'مرحبًا يا أصدقاء، شكرًا لتفكيركم في عيد ميلادي! إذا أردتم إسعادي، فأود تلقي بعض الملابس. أحب السترات الصوفية والقمصان الأنيقة، خاصة باللون الأزرق أو الرمادي. وإلا فإن قميصًا جميلًا أو وشاحًا سيسعدني أيضًا! لا يهم كثيرًا، فالأهم أن نقضي وقتًا جميلًا معًا. متشوق لرؤيتكم!'
    },
    {
      question:'قرأت إعلانًا يساعد الأشخاص الذين يريدون تعلم الفرنسية وممارستها مع آخرين. أرسل بريدًا للرد على الإعلان، قدم نفسك واشرح لماذا تريد ممارسة هذه اللغة.',
      answer:'الموضوع: طلب المشاركة في برنامج تعلم الفرنسية. مرحبًا، أنا مهتم جدًا ببرنامجكم لمساعدة الأشخاص الذين يرغبون في ممارسة الفرنسية. أتعلم هذه اللغة منذ مدة وأود تحسين مستواي من خلال التبادل مع متحدثين أصليين. سأكون سعيدًا بالمناقشة والتبادل حول مواضيع مختلفة للتقدم. هل يمكنكم إخباري بكيفية الانضمام إلى برنامجكم؟ شكرًا مقدمًا على ردكم! مع خالص التحية، سارة.'
    },
    {
      question:'تعرف كامي أنك تمارس الرياضة منذ الشهر الماضي وتريد المجيء معك. أجبها بوصف نشاطك الرياضي وإعطاء معلومات مفيدة: المكان والمدة والسعر.',
      answer:'مرحبًا كامي، أنا سعيد جدًا لأن هذا يهمك! أمارس اللياقة البدنية في صالة قرب وسط المدينة. تستغرق الحصص ساعة واحدة وتكلف 30 يورو شهريًا. توجد أيضًا حصص جماعية، وهذا محفز! إذا أردت التجربة، تعالي معي الأسبوع القادم وسأريك كل شيء. إلى اللقاء قريبًا!'
    }
  ];
  document.querySelectorAll('#tcf-ecrit-ecrit1 .tcf-sujet-card').forEach(function(card, index){
    var item = ecritTranslations[index];
    if(!item) return;
    var headerCopy = card.querySelector('.q-header > div');
    var body = card.querySelector('.q-body');
    if(headerCopy){
      var qTranslation = document.createElement('div');
      qTranslation.className = 'tcf-sujet-translation';
      qTranslation.textContent = item.question;
      headerCopy.appendChild(qTranslation);
    }
    if(body){
      var aTranslation = document.createElement('div');
      aTranslation.className = 'ar-text';
      aTranslation.textContent = item.answer;
      body.appendChild(aTranslation);
    }
  });

  var invitationTranslations = [
    {
      question:'ستتزوج قريبًا وتريد دعوة أصدقائك إلى الحفل. اكتب رسالة دعوة ترسلها إلى أصدقائك.',
      answer:'أصدقائي الأعزاء، بكل فرح كبير ندعوكم للاحتفال بزواجنا يوم السبت 10 أغسطس، ابتداءً من الساعة الخامسة مساءً، في قاعة إيميرود في مونتريال. بعد المراسم، ستقام حفلة كبيرة مع عشاء وموسيقى والكثير من المفاجآت! وجودكم سيجعل هذه اللحظة أكثر خصوصية بالنسبة لنا. تعالوا لتشاركوا سعادتنا ونرقص ونضحك ونصنع ذكريات رائعة معًا. يرجى تأكيد حضوركم قبل 25 يوليو. نحن متحمسون جدًا لرؤيتكم في هذا اليوم الفريد الذي لا ينسى. إلى اللقاء قريبًا جدًا!'
    },
    {
      question:'تريد دعوة أصدقائك إلى حفلة عيد ميلادك. اكتب رسالة دعوة ترسلها إلى أصدقائك.',
      answer:'أصدقائي الأعزاء، أتمنى أن تكونوا بخير. أكتب إليكم بسعادة كبيرة لأدعوكم إلى حفلة عيد ميلادي التي ستقام يوم السبت 15 يونيو ابتداءً من الساعة السابعة مساءً في منزلي في مونتريال. سنقضي أمسية ممتعة مع الموسيقى وعشاء لذيذ وكعكة عيد ميلاد كبيرة وعدة ألعاب مسلية. ستكون فرصة ممتازة لنجتمع ونضحك ونصنع ذكريات جميلة معًا. وجودكم سيسعدني كثيرًا لأن عيد الميلاد يصبح أكثر خصوصية عندما نحتفل به مع من نحب. يرجى تأكيد حضوركم قبل 10 يونيو. أنا متحمس لرؤيتكم ومشاركة هذه اللحظة الرائعة معكم! إلى اللقاء قريبًا جدًا!'
    },
    {
      question:'تريد دعوة أصدقائك إلى عطلة نهاية أسبوع رياضية ستنظمها. اكتب رسالة دعوة ترسلها إلى أصدقائك.',
      answer:'مرحبًا يا أصدقاء، أتمنى أن تكونوا بخير. أود تنظيم عطلة نهاية أسبوع رياضية ويسعدني جدًا أن أدعوكم للمشاركة معي! سيقام الحدث يومي السبت 22 والأحد 23 يوليو في مركز رياضي قرب مونتريال. سنمارس عدة أنشطة مثل كرة القدم والسباحة والجري وبعض تمارين اللياقة. ستكون هناك أيضًا لحظات استرخاء وغداء جماعي وأجواء إيجابية كثيرة. أعتقد أنها ستكون فرصة ممتازة لممارسة الرياضة وتحسين صحتنا وقضاء وقت ممتع معًا. لا تفوتوا هذه الفرصة الجميلة! مشاركتكم ستسعدني كثيرًا. يرجى تأكيد حضوركم بسرعة. أنتظر ردكم بفارغ الصبر!'
    }
  ];
  document.querySelectorAll('#tcf-invitation .card > .tcf-sujet-card').forEach(function(card, index){
    var item = invitationTranslations[index];
    if(!item) return;
    var headerCopy = card.querySelector('.q-header > div');
    var model = card.querySelector('.tcf-invitation-model');
    if(headerCopy){
      var qTranslation = document.createElement('div');
      qTranslation.className = 'tcf-sujet-translation';
      qTranslation.textContent = item.question;
      headerCopy.appendChild(qTranslation);
    }
    if(model){
      var aTranslation = document.createElement('div');
      aTranslation.className = 'ar-text';
      aTranslation.textContent = item.answer;
      model.insertAdjacentElement('afterend', aTranslation);
    }
  });
}

addTcfTranslations();

var tcfEcritWordHelper = {
  storageKey: 'tcfEcritHighlightedWords',
  menu: null,
  current: null,
  highlights: [],
  initialized: false,
  lastTouchAt: 0,
  voiceLoadTimer: null
};

var tcfEcritWordTranslations = {
  'aide':'مساعدة',
  'aider':'يساعد',
  'ami':'صديق',
  'amis':'أصدقاء',
  'anniversaire':'عيد ميلاد',
  'appartement':'شقة',
  'apprendre':'يتعلم',
  'arrive':'يصل',
  'arrivé':'وصل',
  'aujourd\'hui':'اليوم',
  'avenir':'مستقبل',
  'besoin':'حاجة',
  'bien':'جيد',
  'billets':'تذاكر',
  'bonjour':'مرحبا',
  'cadeaux':'هدايا',
  'centre':'مركز',
  'chambon':'شامبون',
  'château':'قصر',
  'cher':'عزيزي',
  'chère':'عزيزتي',
  'cinéma':'سينما',
  'commencer':'يبدأ',
  'comment':'كيف',
  'confirmer':'يؤكد',
  'connais':'أعرف',
  'connaître':'يعرف',
  'content':'سعيد',
  'coûte':'يكلف',
  'demander':'يطلب',
  'déménager':'ينتقل من السكن',
  'déménagé':'انتقل من السكن',
  'de':'من / لـ',
  'décrire':'يصف',
  'déplacements':'تنقلات',
  'difficile':'صعب',
  'dimanche':'الأحد',
  'dire':'يقول',
  'dis':'قل',
  'donner':'يعطي',
  'écrire':'يكتب',
  'écris':'اكتب',
  'email':'بريد إلكتروني',
  'ensemble':'معا',
  'envoyer':'يرسل',
  'espère':'أتمنى',
  'est':'هو / يكون',
  'études':'دراسات',
  'explore':'نستكشف',
  'faire':'يفعل',
  'famille':'عائلة',
  'fais':'افعل / أعطني',
  'fais-moi':'أخبرني / أعطني إشارة',
  'fais-moi signe':'أخبرني / أعطني إشارة',
  "fais-moi signe si tu veux qu'on explore la ville ensemble":"أخبرني إذا أردت أن نستكشف المدينة معًا",
  'fête':'حفلة',
  'français':'الفرنسية',
  'gratuit':'مجاني',
  'heure':'ساعة',
  'informations':'معلومات',
  'inscription':'تسجيل',
  'inviter':'يدعو',
  'invite':'يدعو',
  'j\'aimerais':'أود',
  'j\'attends':'أنتظر',
  'j\'espère':'أتمنى',
  'j\'invite':'أدعو',
  'je':'أنا',
  'la':'الـ',
  'le':'الـ',
  'les':'الـ / جمع',
  'lieu':'مكان',
  'location':'تأجير',
  'logement':'سكن',
  'maison':'منزل',
  'mariage':'زفاف',
  'merci':'شكرا',
  'message':'رسالة',
  'métro':'مترو',
  'mois':'شهر',
  'moment':'لحظة / وقت',
  'nature':'طبيعة',
  'nécessaires':'ضرورية',
  'nouvelle':'جديدة',
  'organiser':'ينظم',
  'parc':'حديقة',
  'partir':'يغادر',
  'participer':'يشارك',
  'peux':'تستطيع',
  'plaisir':'سرور',
  'pourquoi':'لماذا',
  'pratiquer':'يمارس',
  'présence':'حضور',
  'présenter':'يقدم',
  'prix':'سعر',
  'prochain':'القادم',
  'projet':'مشروع',
  'quartier':'حي',
  'répondre':'يرد',
  'réponse':'رد',
  'renseignements':'معلومات',
  'restaurant':'مطعم',
  'salut':'مرحبا',
  'samedi':'السبت',
  'si':'إذا',
  'signe':'إشارة',
  'sport':'رياضة',
  'sujet':'موضوع',
  'temps':'وقت',
  'transport':'نقل',
  'transports':'وسائل النقل',
  'travail':'عمل',
  'trouver':'يجد',
  'unité':'الوحدة / مفرد',
  'ville':'مدينة',
  'vêtements':'ملابس',
  'voir':'يرى',
  'veux':'تريد',
  'voiture':'سيارة',
  'voulez':'تريدون',
  'vous':'أنتم / حضرتك',
  'week-end':'نهاية الأسبوع'
};

var tcfEcritPhraseTranslations = {
  'tu as plusieurs options':'لديك عدة خيارات',
  'pour tes déplacements':'من أجل تنقلاتك',
  'bienvenue dans la ville':'أهلاً بك في المدينة',
  'les moyens de transports':'وسائل النقل',
  'des abonnements mensuels':'اشتراكات شهرية',
  'à environ 70 €':'بحوالي 70 يورو',
  'tu peux acheter':'يمكنك شراء',
  "des tickets à l'unité":'تذاكر مفردة',
  'en carnet':'في دفتر تذاكر',
  'les transports fonctionnent':'وسائل النقل تعمل',
  'de 5 h à minuit':'من الساعة الخامسة إلى منتصف الليل',
  'certaines lignes de bus':'بعض خطوط الحافلات',
  'circulent la nuit':'تعمل ليلاً',
  'si tu préfères le vélo':'إذا كنت تفضل الدراجة',
  'un service de location':'خدمة تأجير',
  'fais-moi signe':'أخبرني / راسلني',
  'explore la ville ensemble':'نستكشف المدينة معًا',
  'tu as plusieurs options : le métro, les bus et les tramways':'لديك عدة خيارات: المترو، الحافلات والترامواي',
  'il existe des abonnements mensuels à environ 70 €':'توجد اشتراكات شهرية بحوالي 70 يورو',
  'mais si tu ne te déplaces pas souvent':'ولكن إذا كنت لا تتنقل كثيرًا',
  "tu peux acheter des tickets à l'unité ou en carnet":'يمكنك شراء تذاكر مفردة أو دفتر تذاكر',
  'les transports fonctionnent de 5 h à minuit':'تعمل وسائل النقل من الخامسة صباحًا حتى منتصف الليل',
  'certaines lignes de bus circulent la nuit':'بعض خطوط الحافلات تعمل ليلًا',
  'il y a aussi un service de location':'توجد أيضًا خدمة تأجير',
  "fais-moi signe si tu veux qu'on explore la ville ensemble":"أخبرني إذا أردت أن نستكشف المدينة معًا"
};
var tcfTranslationService = window.TranslationService ? new window.TranslationService({
  translationMap:function(){
    return tcfEcritPhraseTranslations;
  }
}) : null;

function normalizeTcfEcritWord(word){
  return String(word || '')
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[‐‑‒–—―]/g, '-')
    .replace(/^[^a-zà-öø-ÿœæ']+|[^a-zà-öø-ÿœæ']+$/gi, '')
    .trim();
}

function normalizeTcfEcritPhrase(text){
  return String(text || '')
    .trim()
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[‐‑‒–—―]/g, '-')
    .replace(/\s+/g, ' ')
    .replace(/\s*([:;.!؟?،,])\s*/g, '$1 ')
    .replace(/^[\s"'“”«»()[\].,!؟?،;:]+|[\s"'“”«»()[\].,!؟?،;:]+$/g, '')
    .trim();
}

function renderTcfEcritTranslation(target, translation){
  if(!target) return;
  if(translation && translation.type === 'list'){
    target.innerHTML =
      '<div class="tcf-word-translation-title">الترجمة العربية</div>' +
      '<ul class="tcf-word-translation-list">' +
        translation.lines.map(function(line){
          return '<li>' + escapeHtml(line) + '</li>';
        }).join('') +
      '</ul>';
  } else if(translation && translation.type === 'single'){
    target.innerHTML =
      '<div class="tcf-word-translation-title">الترجمة العربية</div>' +
      '<div class="tcf-word-translation-single">' + escapeHtml(translation.text) + '</div>';
  } else {
    target.textContent = String(translation || '');
  }
  target.hidden = false;
}

function renderTcfEcritTranslationLoading(target){
  if(!target) return;
  target.textContent = '⏳ جاري الترجمة...';
  target.hidden = false;
}

function requestTcfEcritTranslation(target, selectedText){
  renderTcfEcritTranslationLoading(target);
  translateSelectedTextAsync(selectedText).then(function(translation){
    renderTcfEcritTranslation(target, translation);
  });
}

function getTcfEcritWordPattern(){
  return /[A-Za-zÀ-ÖØ-öø-ÿŒœÆæ]+(?:[’'][A-Za-zÀ-ÖØ-öø-ÿŒœÆæ]+)*(?:[-‐‑‒–—―][A-Za-zÀ-ÖØ-öø-ÿŒœÆæ]+)*/g;
}

function escapeTcfEcritRegExp(value){
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isTcfEcritLetter(char){
  return !!char && char.toLowerCase() !== char.toUpperCase();
}

function getTcfEcritWordScope(node){
  if(!node) return null;
  var element = node.nodeType === 1 ? node : node.parentElement;
  return element && element.closest('.main');
}

function isTcfEcritWordExcludedSurface(node){
  if(!node) return true;
  var element = node.nodeType === 1 ? node : node.parentElement;
  if(!element) return true;
  return !!element.closest(
    '.tcf-word-menu, button, input, textarea, select, label, .pill, .sec-tool-btn, .top-tabs, .global-search-modal, .global-search-panel, .ex-ar, .ar-text, .b1-lesson-ar, .sec-ar, [dir="rtl"], .note[dir="rtl"]'
  );
}

function isTcfEcritWordSurface(node){
  if(!node || node.nodeType !== 1) return false;
  if(isTcfEcritWordExcludedSurface(node)) return false;
  return !!node.closest('.main');
}

var TCFECRIT_CONTAINER_SEL = [
  '.main .fr-line',
  '.main .ex-fr',
  '.main .q-text',
  '.main .formula',
  '.main .tcf-category-title',
  '.main .detail-copy strong',
  '.main .article-fr',
  '.main .phrase-bank',
  '.main .mini-table',
  '.main .q-card',
  '.main .card'
].join(', ');

function getTcfEcritHighlightContainer(node){
  var el = node && (node.nodeType === 1 ? node : node.parentElement);
  if(!el) return null;
  return el.closest(TCFECRIT_CONTAINER_SEL) || null;
}

function ensureTcfEcritContainerId(el){
  if(!el) return null;
  var id = el.getAttribute('data-highlight-container-id');
  if(id) return id;
  var all = Array.prototype.slice.call(document.querySelectorAll(TCFECRIT_CONTAINER_SEL));
  var index = all.indexOf(el);
  id = index >= 0 ? 'hc-' + index : 'hc-x-' + Date.now().toString(36);
  el.setAttribute('data-highlight-container-id', id);
  return id;
}

function initAllTcfEcritContainerIds(){
  Array.prototype.forEach.call(document.querySelectorAll(TCFECRIT_CONTAINER_SEL), function(el, i){
    if(!el.getAttribute('data-highlight-container-id')){
      el.setAttribute('data-highlight-container-id', 'hc-' + i);
    }
  });
}

function getTcfEcritTextOffset(container, targetNode, targetOffset){
  var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node){
      if(node.parentElement && isTcfEcritWordExcludedSurface(node.parentElement)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  var accumulated = 0;
  while(walker.nextNode()){
    var node = walker.currentNode;
    if(node === targetNode) return accumulated + targetOffset;
    accumulated += node.nodeValue.length;
  }
  return -1;
}

function getTcfEcritWordOffsets(container, textNode, wordInfo){
  if(!container || !textNode || !wordInfo) return null;
  var baseOffset = getTcfEcritTextOffset(container, textNode, 0);
  if(baseOffset < 0) return null;
  return {
    startOffset: baseOffset + wordInfo.start,
    endOffset: baseOffset + wordInfo.end
  };
}

function applyHighlightAtOffset(container, startOff, endOff, highlightId, normalized){
  if(startOff < 0 || endOff <= startOff) return;
  var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node){
      if(node.parentElement && (node.parentElement.closest('.tcf-word-kept') || isTcfEcritWordExcludedSurface(node.parentElement))) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  var accumulated = 0;
  while(walker.nextNode()){
    var node = walker.currentNode;
    var len = node.nodeValue.length;
    var nodeStart = accumulated;
    var nodeEnd = accumulated + len;
    if(startOff < nodeEnd && endOff > nodeStart){
      var localStart = Math.max(startOff - nodeStart, 0);
      var localEnd = Math.min(endOff - nodeStart, len);
      var text = node.nodeValue;
      var frag = document.createDocumentFragment();
      if(localStart > 0) frag.appendChild(document.createTextNode(text.slice(0, localStart)));
      var span = document.createElement('span');
      span.className = 'tcf-word-kept';
      span.setAttribute('data-tcf-word', normalized);
      span.setAttribute('data-tcf-highlight-id', highlightId);
      span.textContent = text.slice(localStart, localEnd);
      frag.appendChild(span);
      if(localEnd < len) frag.appendChild(document.createTextNode(text.slice(localEnd)));
      node.parentNode.replaceChild(frag, node);
      return;
    }
    accumulated += len;
  }
}

function getTcfEcritHighlightWords(){
  try{
    var raw = JSON.parse(localStorage.getItem(tcfEcritWordHelper.storageKey) || '[]');
    if(!Array.isArray(raw)) return [];
    return raw.filter(Boolean).filter(function(item){ return typeof item === 'object' && item.normalized && item.containerId && typeof item.startOffset === 'number' && typeof item.endOffset === 'number'; });
  } catch(err){
    return [];
  }
}

function loadTcfEcritHighlightsFromServer(){
  if(!window.loadHighlights) return Promise.resolve(null);
  return window.loadHighlights({page: window.HighlightStore && window.HighlightStore.currentPage ? window.HighlightStore.currentPage() : window.location.pathname}).then(function(rows){
    if(!Array.isArray(rows)) return [];
    return rows.filter(function(row){
      var section = row && (row.section || row.source_section);
      return row && (row.item_type === 'word' || row.item_type === 'phrase') && section && row.item_text;
    }).map(function(row){
      return makeTcfEcritEntryFromSavedHighlight(row);
    }).filter(Boolean);
  });
}

function getTcfEcritHighlightPage(){
  return window.HighlightStore && window.HighlightStore.currentPage ? window.HighlightStore.currentPage() : (window.location.pathname || '/index.html');
}

function getTcfEcritTranslationText(text){
  var translation = translateSelectedText(text);
  if(translation && translation.type === 'single') return translation.text;
  if(translation && translation.type === 'list') return translation.lines.join('\n');
  return typeof translation === 'string' ? translation : null;
}

function makeSavedHighlightFromTcfEcritEntry(entry){
  return {
    page: getTcfEcritHighlightPage(),
    section: getTcfEcritHighlightSectionKey(entry),
    item_text: entry.text || entry.normalized,
    item_type: /\s/.test(entry.text || entry.normalized || '') ? 'phrase' : 'word',
    arabic_translation: getTcfEcritTranslationText(entry.text || entry.normalized),
    english_translation: entry.english_translation || null,
    french_text: entry.text || entry.normalized
  };
}

function getTcfEcritHighlightSectionKey(entry){
  if(!entry) return 'default';
  var containerId = entry.containerId || 'default';
  if(typeof entry.startOffset === 'number' && typeof entry.endOffset === 'number'){
    return containerId + '::' + entry.startOffset + '-' + entry.endOffset;
  }
  return containerId;
}

function parseTcfEcritHighlightSectionKey(section){
  var value = String(section || '');
  var match = value.match(/^(.*)::(\d+)-(\d+)$/);
  if(!match) return {containerId:value, startOffset:null, endOffset:null};
  return {
    containerId: match[1],
    startOffset: Number(match[2]),
    endOffset: Number(match[3])
  };
}

function getTcfEcritEntryKey(entry){
  if(!entry) return '';
  return [
    entry.normalized || normalizeTcfEcritWord(entry.text),
    entry.containerId || '',
    typeof entry.startOffset === 'number' ? entry.startOffset : '',
    typeof entry.endOffset === 'number' ? entry.endOffset : ''
  ].join('|');
}

function getTcfEcritWordKey(entry){
  return entry ? (entry.normalized || normalizeTcfEcritWord(entry.text)) : '';
}

function mergeTcfEcritHighlightEntries(existingEntries, newEntries){
  var seen = {};
  var merged = [];
  (existingEntries || []).concat(newEntries || []).forEach(function(entry){
    var key = getTcfEcritWordKey(entry);
    if(!key) return;
    var current = seen[key];
    if(!current){
      seen[key] = entry;
      merged.push(entry);
      return;
    }
    if(!current.id && entry.id){
      seen[key] = entry;
      for(var i = 0; i < merged.length; i++){
        if(getTcfEcritWordKey(merged[i]) === key){
          merged[i] = entry;
          break;
        }
      }
    }
  });
  return merged;
}

function isSameTcfEcritOccurrence(a, b){
  if(!a || !b) return false;
  var aNormalized = a.normalized || normalizeTcfEcritWord(a.text);
  var bNormalized = b.normalized || normalizeTcfEcritWord(b.text);
  if(aNormalized !== bNormalized) return false;
  if((a.containerId || '') !== (b.containerId || '')) return false;
  var aHasOffsets = typeof a.startOffset === 'number' && typeof a.endOffset === 'number';
  var bHasOffsets = typeof b.startOffset === 'number' && typeof b.endOffset === 'number';
  if(aHasOffsets && bHasOffsets){
    return !(a.endOffset <= b.startOffset || b.endOffset <= a.startOffset);
  }
  return true;
}

function normalizeTcfEcritSearchText(text){
  return String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .replace(/[^a-z0-9\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function buildNormalizedIndexMap(text){
  var normalized = '';
  var indexMap = [];
  for(var i = 0; i < text.length; i++){
    var ch = text.charAt(i);
    var norm = String(ch).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if(/['’]/.test(norm)) norm = ' ';
    norm = norm.replace(/[^a-z0-9\s]/gi, ' ');
    for(var j = 0; j < norm.length; j++){
      var c = norm.charAt(j);
      if(c === ' ' && normalized.slice(-1) === ' ') continue;
      normalized += c;
      indexMap.push(i);
    }
  }
  normalized = normalized.trim();
  return {normalized: normalized, indexMap: indexMap};
}

function findTextOffsetsInContainer(container, text){
  if(!container || !text) return null;
  var haystack = container.textContent || '';
  var exactIndex = haystack.toLowerCase().indexOf(String(text).toLowerCase());
  if(exactIndex >= 0){
    return {startOffset: exactIndex, endOffset: exactIndex + String(text).length};
  }
  var haystackMap = buildNormalizedIndexMap(haystack);
  var needleMap = buildNormalizedIndexMap(text);
  if(!needleMap.normalized) return null;
  var fuzzyIndex = haystackMap.normalized.indexOf(needleMap.normalized);
  if(fuzzyIndex < 0) return null;
  var start = haystackMap.indexMap[fuzzyIndex];
  var end = haystackMap.indexMap[fuzzyIndex + needleMap.normalized.length - 1] + 1;
  return {startOffset: start, endOffset: end};
}

function findTcfEcritContainerByText(text){
  if(!text) return null;
  var needle = normalizeTcfEcritSearchText(text);
  if(!needle) return null;
  return Array.prototype.slice.call(document.querySelectorAll(TCFECRIT_CONTAINER_SEL)).find(function(root){
    var rootNormalized = normalizeTcfEcritSearchText(root.textContent || '');
    return rootNormalized.indexOf(needle) >= 0;
  }) || null;
}

function makeTcfEcritEntryFromSavedHighlight(row){
  var section = row.section || row.source_section;
  var parsedSection = parseTcfEcritHighlightSectionKey(section);
  var container = document.querySelector('[data-highlight-container-id="' + parsedSection.containerId + '"]');
  if(!container){
    var fallbackContainer = findTcfEcritContainerByText(row.french_text || row.item_text);
    if(fallbackContainer){
      container = fallbackContainer;
      parsedSection.containerId = ensureTcfEcritContainerId(container);
    }
  }
  if(!container) return null;
  var offsets = typeof parsedSection.startOffset === 'number' && typeof parsedSection.endOffset === 'number'
    ? {startOffset:parsedSection.startOffset, endOffset:parsedSection.endOffset}
    : findTextOffsetsInContainer(container, row.french_text || row.item_text);
  if(!offsets && row.french_text){
    offsets = findTextOffsetsInContainer(container, row.french_text || row.item_text);
  }
  if(!offsets) return null;
  var text = row.french_text || row.item_text;
  return {
    id: row.id || ('hl-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7)),
    normalized: normalizeTcfEcritWord(text),
    text: text,
    containerId: parsedSection.containerId,
    startOffset: offsets.startOffset,
    endOffset: offsets.endOffset
  };
}

function saveTcfEcritHighlightToSupabase(entry){
  if(!window.saveHighlight || !entry) return;
  window.saveHighlight(makeSavedHighlightFromTcfEcritEntry(entry));
}

function removeTcfEcritHighlightFromSupabase(entry){
  if(!window.removeHighlight || !entry) return;
  window.removeHighlight(makeSavedHighlightFromTcfEcritEntry(entry));
}

function saveTcfEcritHighlightWords(entries){
  var seen = {};
  var unique = (entries || []).filter(function(e){
    if(!e || !e.normalized || !e.containerId) return false;
    var key = getTcfEcritWordKey(e);
    if(seen[key]) return false;
    seen[key] = true;
    return true;
  });
  tcfEcritWordHelper.highlights = unique;
  try{ localStorage.setItem(tcfEcritWordHelper.storageKey, JSON.stringify(unique)); } catch(err){}
}

function unwrapTcfEcritWordHighlights(){
  document.querySelectorAll('.main .tcf-word-kept').forEach(function(node){
    var parent = node.parentNode;
    if(!parent) return;
    parent.replaceChild(document.createTextNode(node.textContent), node);
    parent.normalize();
  });
}

function getTcfEcritWordRoots(){
  return Array.prototype.slice.call(document.querySelectorAll(TCFECRIT_CONTAINER_SEL)).filter(function(root){
    return !isTcfEcritWordExcludedSurface(root);
  });
}

function wrapTcfEcritWordsInTextNode(textNode, words, entriesMap){
  var text = textNode.nodeValue;
  var lowerText = text.toLowerCase().replace(/[â€™]/g, "'");
  var items = words.slice().sort(function(a, b){ return b.length - a.length; });
  var matches = [];
  items.forEach(function(item){
    var normalized = normalizeTcfEcritWord(item);
    if(!normalized) return;
    var phrasePattern = new RegExp(escapeTcfEcritRegExp(normalized).replace(/\s+/g, '\\s+'), 'g');
    var match;
    while((match = phrasePattern.exec(lowerText))){
      var start = match.index;
      var end = start + match[0].length;
      if(isTcfEcritLetter(lowerText.charAt(start - 1)) || isTcfEcritLetter(lowerText.charAt(end))) continue;
      matches.push({start:start, end:end, normalized:normalized});
    }
  });
  if(!matches.length) return;
  matches.sort(function(a, b){
    if(a.start !== b.start) return a.start - b.start;
    return (b.end - b.start) - (a.end - a.start);
  });
  var selected = [];
  matches.forEach(function(match){
    var overlaps = selected.some(function(item){
      return match.start < item.end && match.end > item.start;
    });
    if(!overlaps) selected.push(match);
  });
  selected.sort(function(a, b){ return a.start - b.start; });

  var fragment = document.createDocumentFragment();
  var lastIndex = 0;
  selected.forEach(function(match){
    if(match.start > lastIndex) fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.start)));
    var span = document.createElement('span');
    span.className = 'tcf-word-kept';
    span.setAttribute('data-tcf-word', match.normalized);
    if(entriesMap && entriesMap[match.normalized]) span.setAttribute('data-tcf-highlight-id', entriesMap[match.normalized]);
    span.textContent = text.slice(match.start, match.end);
    fragment.appendChild(span);
    lastIndex = match.end;
  });
  if(lastIndex < text.length) fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
  textNode.parentNode.replaceChild(fragment, textNode);
}

function renderTcfEcritWordHighlights(){
  unwrapTcfEcritWordHighlights();
  var entries = tcfEcritWordHelper.highlights;
  if(!entries.length) return;
  var byContainer = {};
  entries.forEach(function(e){
    if(!e.containerId) return;
    if(!byContainer[e.containerId]) byContainer[e.containerId] = [];
    byContainer[e.containerId].push(e);
  });
  Object.keys(byContainer).forEach(function(containerId){
    var container = document.querySelector('[data-highlight-container-id="' + containerId + '"]');
    if(!container) return;
    var group = byContainer[containerId];
    // Apply in descending offset order so earlier replacements don't shift later offsets
    group.slice().sort(function(a, b){ return (b.startOffset || 0) - (a.startOffset || 0); }).forEach(function(e){
      if(typeof e.startOffset === 'number' && typeof e.endOffset === 'number' && e.startOffset >= 0){
        applyHighlightAtOffset(container, e.startOffset, e.endOffset, e.id, e.normalized);
      }
    });
  });
}

function getTcfEcritWordFromText(text, offset){
  var pattern = getTcfEcritWordPattern();
  var match;
  var nearest = null;
  while((match = pattern.exec(text))){
    var start = match.index;
    var end = start + match[0].length;
    if(offset >= start && offset <= end){
      return {word:match[0], start:start, end:end};
    }
    var distance = 0;
    if(offset < start){
      distance = start - offset;
    } else if(offset > end){
      distance = offset - end;
    } else {
      distance = 0;
    }
    if(nearest === null || distance < nearest.distance){
      nearest = {word:match[0], start:start, end:end, distance:distance};
    }
  }
  if(nearest && nearest.distance <= 1){
    return {word: nearest.word, start: nearest.start, end: nearest.end};
  }
  return null;
}

function getTcfEcritSelectionInfo(){
  var selection = window.getSelection && window.getSelection();
  if(!selection || selection.isCollapsed || !selection.rangeCount) return null;
  var rawText = selection.toString().replace(/\s+/g, ' ').trim();
  var leadTrim = 0;
  while(leadTrim < rawText.length && !/[a-zà-öø-ÿœæ']/i.test(rawText.charAt(leadTrim))) leadTrim++;
  var tailTrim = 0;
  while(tailTrim < rawText.length - leadTrim && !/[a-zà-öø-ÿœæ']/i.test(rawText.charAt(rawText.length - 1 - tailTrim))) tailTrim++;
  var text = leadTrim || tailTrim ? rawText.slice(leadTrim, tailTrim ? -tailTrim : undefined) : rawText;
  var normalized = normalizeTcfEcritWord(text);
  if(!normalized || normalized.length < 2) return null;
  var range = selection.getRangeAt(0);
  var common = range.commonAncestorContainer.nodeType === 1 ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
  var startElement = range.startContainer.nodeType === 1 ? range.startContainer : range.startContainer.parentElement;
  var endElement = range.endContainer.nodeType === 1 ? range.endContainer : range.endContainer.parentElement;
  if(!common || !getTcfEcritWordScope(common) || (!isTcfEcritWordSurface(common) && !isTcfEcritWordSurface(startElement) && !isTcfEcritWordSurface(endElement))) return null;
  var rect = range.getBoundingClientRect();
  if(!rect || (!rect.width && !rect.height)) return null;
  var selContainer = getTcfEcritHighlightContainer(range.startContainer);
  var selContainerId = selContainer ? ensureTcfEcritContainerId(selContainer) : null;
  var startOff = selContainer ? getTcfEcritTextOffset(selContainer, range.startContainer, range.startOffset) : -1;
  var endOff = selContainer ? getTcfEcritTextOffset(selContainer, range.endContainer, range.endOffset) : -1;
  if(startOff >= 0) startOff += leadTrim;
  if(endOff >= 0) endOff -= tailTrim;
  var startParent = range.startContainer.nodeType === 3 ? range.startContainer.parentElement : range.startContainer;
  var keptSpan = startParent && startParent.closest && startParent.closest('.tcf-word-kept');
  var highlightId = keptSpan ? (keptSpan.getAttribute('data-tcf-highlight-id') || null) : null;
  return {
    word: text,
    normalized: normalized,
    rect: rect,
    containerId: selContainerId,
    startOffset: startOff,
    endOffset: endOff,
    highlightId: highlightId
  };
}

function getTcfEcritWordInfoFromPoint(event){
  var highlighted = event.target.closest && event.target.closest('.tcf-word-kept');
  if(highlighted){
    var hContainer = highlighted.closest('[data-highlight-container-id]');
    return {
      word: highlighted.textContent,
      normalized: highlighted.getAttribute('data-tcf-word') || normalizeTcfEcritWord(highlighted.textContent),
      rect: highlighted.getBoundingClientRect(),
      highlightId: highlighted.getAttribute('data-tcf-highlight-id') || null,
      containerId: hContainer ? hContainer.getAttribute('data-highlight-container-id') : null
    };
  }

  var formField = event.target.closest && event.target.closest('#tcf-ecrit textarea, #tcf-ecrit input[type="text"]');
  if(formField){
    var value = formField.value || '';
    var host = formField.closest('.card') || formField.closest('.main') || document.body;
    if(formField.selectionStart !== formField.selectionEnd){
      var selectedText = value.slice(formField.selectionStart, formField.selectionEnd).replace(/\s+/g, ' ').trim();
      var selectedNormalized = normalizeTcfEcritWord(selectedText);
      if(selectedNormalized){
        return {
          word: selectedText,
          normalized: selectedNormalized,
          rect: formField.getBoundingClientRect(),
          host: host
        };
      }
    }
    var caret = typeof formField.selectionStart === 'number' ? formField.selectionStart : 0;
    var formWord = getTcfEcritWordFromText(value, caret);
    if(!formWord) return null;
    return {
      word: formWord.word,
      normalized: normalizeTcfEcritWord(formWord.word),
      rect: formField.getBoundingClientRect(),
      host: host
    };
  }

  var direct = getTcfEcritWordInfoFromPointCoordinates(event);
  if(direct) return direct;

  return getTcfEcritSelectionInfo();
}

function getTcfEcritWordInfoFromPointCoordinates(event){
  var range = null;
  if(document.caretPositionFromPoint){
    var pos = document.caretPositionFromPoint(event.clientX, event.clientY);
    if(pos){
      range = document.createRange();
      range.setStart(pos.offsetNode, pos.offset);
      range.collapse(true);
    }
  } else if(document.caretRangeFromPoint){
    range = document.caretRangeFromPoint(event.clientX, event.clientY);
  }
  if(!range || !range.startContainer || range.startContainer.nodeType !== 3) return null;
  var targetNode = range.startContainer;
  if(!isTcfEcritWordSurface(targetNode.parentElement)) return null;
  var info = getTcfEcritWordFromText(targetNode.nodeValue, range.startOffset);
  if(!info) return null;
  var wordRange = document.createRange();
  wordRange.setStart(targetNode, info.start);
  wordRange.setEnd(targetNode, info.end);
  var rect = wordRange.getBoundingClientRect();
  wordRange.detach();
  var caretContainer = getTcfEcritHighlightContainer(targetNode);
  var offsets = caretContainer ? getTcfEcritWordOffsets(caretContainer, targetNode, info) : null;
  return {
    word: info.word,
    normalized: normalizeTcfEcritWord(info.word),
    rect: rect,
    containerId: caretContainer ? ensureTcfEcritContainerId(caretContainer) : null,
    startOffset: offsets ? offsets.startOffset : undefined,
    endOffset: offsets ? offsets.endOffset : undefined
  };
}

function translateSelectedText(selectedText){
  selectedText = String(selectedText || '').trim();
  var normalized = normalizeTcfEcritPhrase(selectedText);
  var normalizedMap = {};
  Object.keys(tcfEcritPhraseTranslations).forEach(function(key){
    normalizedMap[normalizeTcfEcritPhrase(key)] = tcfEcritPhraseTranslations[key];
  });
  if(normalizedMap[normalized]) return {type:'single', text:normalizedMap[normalized]};

  var matchedKeys = Object.keys(normalizedMap).filter(function(key){
    return normalized.indexOf(key) !== -1;
  }).sort(function(a, b){
    return b.length - a.length;
  }).filter(function(key, index, keys){
    return !keys.slice(0, index).some(function(longerKey){
      return longerKey.indexOf(key) !== -1;
    });
  }).sort(function(a, b){
    return normalized.indexOf(a) - normalized.indexOf(b);
  });
  var seenTranslations = {};
  var matches = matchedKeys.map(function(key){
    return normalizedMap[key];
  }).filter(function(translation){
    if(seenTranslations[translation]) return false;
    seenTranslations[translation] = true;
    return true;
  });
  if(matches.length) return {type:'list', lines:matches};

  if(/\s/.test(normalized)) return 'الترجمة غير متوفرة لهذه الجملة حاليًا';

  var normalizedWord = normalizeTcfEcritWord(selectedText);
  var wordTranslation = tcfEcritWordTranslations[normalizedWord];
  if(wordTranslation) return {type:'single', text:wordTranslation};
  return 'الترجمة غير متوفرة لهذه الكلمة حاليًا';
}

function translateTcfEcritWord(word){
  return translateSelectedText(word);
}

function translateSelectedTextAsync(selectedText){
  selectedText = String(selectedText || '').trim();
  var localTranslation = translateSelectedText(selectedText);
  if(localTranslation && typeof localTranslation !== 'string') return Promise.resolve(localTranslation);
  if(!tcfTranslationService) return Promise.resolve('تعذر الاتصال بخدمة الترجمة');
  return tcfTranslationService.translate(selectedText).then(function(translated){
    return {type:'single', text:translated};
  }).catch(function(error){
    console.error('Translation popup failed for selected text:', selectedText, error);
    return 'تعذر الاتصال بخدمة الترجمة';
  });
}

function getTcfEcritFrenchVoice(){
  if(!('speechSynthesis' in window) || !window.speechSynthesis.getVoices) return null;
  var voices = window.speechSynthesis.getVoices() || [];
  var femaleNames = ['lea','léa','amelie','amélie','virginie','hortense','julie','claire','alice','marie','camille','elsa','audrey','florence','sophie'];
  var maleNames = ['thomas','pierre','nicolas','paul','jean','luca'];
  function isFemale(v){ var n = String(v.name || '').toLowerCase(); return femaleNames.some(function(f){ return n.indexOf(f) !== -1; }); }
  function isMale(v){ var n = String(v.name || '').toLowerCase(); return maleNames.some(function(m){ return n.indexOf(m) !== -1; }); }
  var frFR = voices.filter(function(v){ return String(v.lang || '').toLowerCase() === 'fr-fr'; });
  var frAny = voices.filter(function(v){ return String(v.lang || '').toLowerCase().indexOf('fr') === 0; });
  var frNamed = voices.filter(function(v){ var n = String(v.name || '').toLowerCase(); return n.indexOf('french') !== -1 || n.indexOf('français') !== -1; });
  return frFR.find(isFemale) || frAny.find(isFemale) || frNamed.find(isFemale) ||
    frFR.find(function(v){ return !isMale(v); }) || frFR[0] ||
    frAny.find(function(v){ return !isMale(v); }) || frAny[0] ||
    frNamed[0] || null;
}

function speakTcfEcritWordWithVoice(word){
  if(!word || !('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return;
  window.speechSynthesis.cancel();
  var utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'fr-FR';
  var frenchVoice = getTcfEcritFrenchVoice();
  if(frenchVoice) utterance.voice = frenchVoice;
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function speakTcfEcritWord(word){
  if(!word || !('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return;
  if(getTcfEcritFrenchVoice()){
    speakTcfEcritWordWithVoice(word);
    return;
  }
  if(tcfEcritWordHelper.voiceLoadTimer) clearTimeout(tcfEcritWordHelper.voiceLoadTimer);
  window.speechSynthesis.onvoiceschanged = function(){
    window.speechSynthesis.onvoiceschanged = null;
    if(tcfEcritWordHelper.voiceLoadTimer) clearTimeout(tcfEcritWordHelper.voiceLoadTimer);
    tcfEcritWordHelper.voiceLoadTimer = null;
    speakTcfEcritWordWithVoice(word);
  };
  tcfEcritWordHelper.voiceLoadTimer = setTimeout(function(){
    window.speechSynthesis.onvoiceschanged = null;
    tcfEcritWordHelper.voiceLoadTimer = null;
    speakTcfEcritWordWithVoice(word);
  }, 450);
  window.speechSynthesis.getVoices();
}

function keepTcfEcritWordHighlighted(info){
  var normalized = typeof info === 'string' ? normalizeTcfEcritWord(info) : (info && info.normalized);
  if(!normalized) return;
  var existing = tcfEcritWordHelper.highlights.filter(function(e){
    return getTcfEcritWordKey(e) === normalized;
  })[0] || null;
  if(existing) return existing.id;
  var containerId = typeof info === 'object' ? (info.containerId || null) : null;
  if(!containerId) return;
  if(typeof info.startOffset !== 'number' || typeof info.endOffset !== 'number' || info.endOffset <= info.startOffset) return;
  var id = 'hl-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  var entry = {id: id, normalized: normalized, text: typeof info === 'object' ? (info.word || normalized) : normalized, containerId: containerId, startOffset: typeof info === 'object' ? info.startOffset : undefined, endOffset: typeof info === 'object' ? info.endOffset : undefined};
  var entries = tcfEcritWordHelper.highlights.filter(function(e){
    return !isSameTcfEcritOccurrence(e, entry);
  });
  entries.push(entry);
  saveTcfEcritHighlightWords(entries);
  saveTcfEcritHighlightToSupabase(entry);
  renderTcfEcritWordHighlights();
  if(window.getSelection){
    var selection = window.getSelection();
    if(selection && selection.removeAllRanges) selection.removeAllRanges();
  }
  return id;
}

function removeTcfEcritWordHighlight(idOrWord){
  var normalized = normalizeTcfEcritWord(idOrWord);
  var idText = String(idOrWord || '');
  var looksLikeHighlightId = idText.indexOf('hl-') === 0 || /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idText);
  var removed = tcfEcritWordHelper.highlights.filter(function(e){
    return e.id === idOrWord || (!looksLikeHighlightId && e.normalized === normalized);
  });
  saveTcfEcritHighlightWords(tcfEcritWordHelper.highlights.filter(function(e){
    return !removed.some(function(item){ return item.id === e.id; });
  }));
  removed.forEach(removeTcfEcritHighlightFromSupabase);
  renderTcfEcritWordHighlights();
}

function renderTcfEcritRememberedWords(menu){
  var panel = menu.querySelector('.tcf-word-saved');
  var list = menu.querySelector('.tcf-word-saved-list');
  if(!panel || !list) return;
  if(!tcfEcritWordHelper.highlights.length){
    panel.hidden = true;
    list.innerHTML = '';
    return;
  }
  panel.hidden = false;
  list.innerHTML = tcfEcritWordHelper.highlights.map(function(entry){
    var word = escapeHtml(entry.text || entry.normalized);
    var id = escapeHtml(entry.id);
    return '<span class="tcf-word-chip" data-highlight-id="' + id + '">' +
      '<button class="tcf-word-chip-label" type="button" data-word="' + word + '">' + word + '</button>' +
      '<button class="tcf-word-chip-speak" type="button" data-word="' + word + '" aria-label="Prononcer ' + word + '">🔊</button>' +
      '<button class="tcf-word-chip-remove" type="button" data-highlight-id="' + id + '" aria-label="Supprimer ' + word + '">×</button>' +
    '</span>';
  }).join('');
}

function ensureTcfEcritWordMenu(){
  if(tcfEcritWordHelper.menu) return tcfEcritWordHelper.menu;
  var menu = document.createElement('div');
  menu.className = 'tcf-word-menu';
  menu.hidden = true;
  menu.innerHTML =
    '<div class="tcf-word-menu-title"></div>' +
    '<div class="tcf-word-menu-actions">' +
      '<button class="tcf-word-keep" type="button">Garder surligné</button>' +
      '<button class="tcf-word-speak" type="button" aria-label="Prononcer en français" title="Prononcer en français">🔊</button>' +
      '<button class="tcf-word-translate" type="button">Traduction</button>' +
      '<button class="tcf-word-remove" type="button">Supprimer</button>' +
    '</div>' +
    '<div class="tcf-word-translation" dir="rtl" hidden></div>' +
    '<div class="tcf-word-saved" hidden>' +
      '<div class="tcf-word-saved-title">Mots retenus</div>' +
      '<div class="tcf-word-saved-list"></div>' +
    '</div>';
  document.body.appendChild(menu);
  menu.addEventListener('click', function(event){
    event.stopPropagation();
    var listRemove = event.target.closest('.tcf-word-chip-remove');
    if(listRemove){
      var highlightId = listRemove.getAttribute('data-highlight-id');
      if(highlightId){
        removeTcfEcritWordHighlight(highlightId);
        renderTcfEcritRememberedWords(menu);
        return;
      }
    }
    var listSpeak = event.target.closest('.tcf-word-chip-speak');
    if(listSpeak){
      var word = listSpeak.getAttribute('data-word');
      if(word) speakTcfEcritWord(word);
      return;
    }
    var listLabel = event.target.closest('.tcf-word-chip-label');
    if(listLabel){
      var word = listLabel.getAttribute('data-word');
      if(word){
        speakTcfEcritWord(word);
      }
      return;
    }
    var current = tcfEcritWordHelper.current;
    if(!current) return;
    if(event.target.closest('.tcf-word-keep')){
      var keptId = keepTcfEcritWordHighlighted(current);
      if(keptId) current.highlightId = keptId;
      showTcfEcritWordMenu(current);
    } else if(event.target.closest('.tcf-word-speak')){
      speakTcfEcritWord(current.word);
    } else if(event.target.closest('.tcf-word-translate')){
      var translation = menu.querySelector('.tcf-word-translation');
      requestTcfEcritTranslation(translation, current.word);
    } else if(event.target.closest('.tcf-word-remove')){
      removeTcfEcritWordHighlight(current.highlightId || current.normalized);
      showTcfEcritWordMenu(current);
    }
  });
  tcfEcritWordHelper.menu = menu;
  return menu;
}

function positionTcfEcritWordMenu(menu, rect, host){
  var gap = 8;
  var width = menu.offsetWidth || 260;
  var left = rect.left + (rect.width / 2) - (width / 2);
  var top = rect.bottom + gap;
  var containerWidth = window.innerWidth;
  var containerHeight = window.innerHeight;
  var offsetLeft = 0;
  var offsetTop = 0;
  if(host && host !== document.body){
    var hostRect = host.getBoundingClientRect();
    offsetLeft = hostRect.left;
    offsetTop = hostRect.top;
    containerWidth = host.clientWidth;
    containerHeight = host.clientHeight;
    if(getComputedStyle(host).position === 'static'){
      host.style.position = 'relative';
    }
  }
  left = left - offsetLeft;
  top = top - offsetTop;
  left = Math.max(10, Math.min(left, containerWidth - width - 10));
  if(top + menu.offsetHeight > containerHeight - 10){
    top = Math.max(10, rect.top - menu.offsetHeight - gap - offsetTop);
  }
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';
  if(!host || host === document.body){
    menu.style.top = (top + window.scrollY) + 'px';
  }
}

function showTcfEcritWordMenu(info){
  if(!info || !info.normalized) return;
  tcfEcritWordHelper.current = info;
  var menu = ensureTcfEcritWordMenu();
  var host = info.host || document.body;
  if(menu.parentElement !== host){
    host.appendChild(menu);
  }
  var existingEntry = tcfEcritWordHelper.highlights.filter(function(e){
    if(info.highlightId && e.id === info.highlightId) return true;
    if(getTcfEcritWordKey(e) === info.normalized) return true;
    return isSameTcfEcritOccurrence(e, info);
  })[0] || null;
  if(existingEntry && !info.highlightId) info.highlightId = existingEntry.id;
  menu.querySelector('.tcf-word-menu-title').textContent = info.word;
  var keepBtn = menu.querySelector('.tcf-word-keep');
  var removeBtn = menu.querySelector('.tcf-word-remove');
  if(keepBtn) keepBtn.disabled = !!existingEntry;
  if(removeBtn) removeBtn.hidden = !existingEntry;
  var translation = menu.querySelector('.tcf-word-translation');
  if(translation) translation.hidden = true;
  renderTcfEcritRememberedWords(menu);
  menu.hidden = false;
  positionTcfEcritWordMenu(menu, info.rect, host);
}

function hideTcfEcritWordMenu(){
  if(tcfEcritWordHelper.menu) tcfEcritWordHelper.menu.hidden = true;
  tcfEcritWordHelper.current = null;
}

function handleTcfEcritWordPointer(event){
  var isFormField = event.target.closest && event.target.closest('#tcf-ecrit textarea, #tcf-ecrit input[type="text"]');
  if(!isFormField && !isTcfEcritWordSurface(event.target)) return false;
  var info = getTcfEcritWordInfoFromPoint(event);
  if(!info || !info.normalized) return false;
  event.preventDefault();
  event.stopPropagation();
  showTcfEcritWordMenu(info);
  return true;
}

function initTcfEcritWordHelper(){
  if(tcfEcritWordHelper.initialized) return;
  var roots = Array.prototype.slice.call(document.querySelectorAll('.main'));
  if(!roots.length) return;
  tcfEcritWordHelper.initialized = true;
  initAllTcfEcritContainerIds();
  var loaded = getTcfEcritHighlightWords();
  var withContainer = loaded.filter(function(e){ return !!document.querySelector('[data-highlight-container-id="' + e.containerId + '"]'); });
  saveTcfEcritHighlightWords(withContainer);
  renderTcfEcritWordHighlights();
  loadTcfEcritHighlightsFromServer().then(function(serverEntries){
    if(!Array.isArray(serverEntries) || !serverEntries.length) return;
    var valid = serverEntries.filter(function(e){
      return e && e.normalized && e.containerId && typeof e.startOffset === 'number' && typeof e.endOffset === 'number' && !!document.querySelector('[data-highlight-container-id="' + e.containerId + '"]');
    });
    if(!valid.length) return;
    var merged = mergeTcfEcritHighlightEntries(tcfEcritWordHelper.highlights, valid);
    saveTcfEcritHighlightWords(merged);
    renderTcfEcritWordHighlights();
  });
  roots.forEach(function(root){
    root.addEventListener('touchend', function(event){
      var touch = event.changedTouches && event.changedTouches[0];
      if(!touch) return;
      var touchEvent = {
        target: event.target,
        clientX: touch.clientX,
        clientY: touch.clientY,
        preventDefault: function(){ event.preventDefault(); },
        stopPropagation: function(){ event.stopPropagation(); }
      };
      if(handleTcfEcritWordPointer(touchEvent)){
        tcfEcritWordHelper.lastTouchAt = Date.now();
      }
    }, {passive:false, capture:true});
    root.addEventListener('click', function(event){
      if(Date.now() - tcfEcritWordHelper.lastTouchAt < 500) return;
      handleTcfEcritWordPointer(event);
    });
    root.addEventListener('mouseup', function(){
      setTimeout(function(){
        var info = getTcfEcritSelectionInfo();
        if(info) showTcfEcritWordMenu(info);
      }, 0);
    });
    root.addEventListener('keyup', function(){
      var info = getTcfEcritSelectionInfo();
      if(info) showTcfEcritWordMenu(info);
    });
  });
  document.addEventListener('click', function(event){
    if(tcfEcritWordHelper.menu && !tcfEcritWordHelper.menu.hidden && !event.target.closest('.tcf-word-menu')){
      hideTcfEcritWordMenu();
    }
  });
  document.addEventListener('keydown', function(event){
    if(event.key === 'Escape') hideTcfEcritWordMenu();
  });
  window.addEventListener('resize', hideTcfEcritWordMenu);
  window.addEventListener('scroll', hideTcfEcritWordMenu, true);
}

initTcfEcritWordHelper();

function getTcfReviewMarks(){
  try{
    return JSON.parse(localStorage.getItem('tcfReviewMarks') || '{}');
  } catch(err){
    return {};
  }
}

function saveTcfReviewMarks(marks){
  try{
    localStorage.setItem('tcfReviewMarks', JSON.stringify(marks));
  } catch(err){
    // Ignore storage failures so the page still works in private browsing modes.
  }
}

function makeTcfReviewHighlight(row){
  return {
    page: window.HighlightStore && window.HighlightStore.currentPage ? window.HighlightStore.currentPage() : (window.location.pathname || '/index.html'),
    section: row.closest('.tcf-ecrit-sub, #tcf-oral, #tcf-vocabulary, #tcf-invitation') && row.closest('.tcf-ecrit-sub, #tcf-oral, #tcf-vocabulary, #tcf-invitation').id || 'tcf',
    item_text: getTcfReviewKey(row),
    item_type: 'statement',
    french_text: row.querySelector('.ex-fr') ? row.querySelector('.ex-fr').textContent.trim() : row.textContent.trim(),
    arabic_translation: row.querySelector('.ex-ar') ? row.querySelector('.ex-ar').textContent.trim() : null
  };
}

function syncTcfReviewMark(row, checked){
  if(!window.saveHighlight || !window.removeHighlight) return;
  var record = makeTcfReviewHighlight(row);
  if(checked) window.saveHighlight(record);
  else window.removeHighlight(record);
}

function loadTcfReviewMarksFromSupabase(){
  if(!window.loadHighlights) return;
  window.loadHighlights({
    page: window.HighlightStore && window.HighlightStore.currentPage ? window.HighlightStore.currentPage() : (window.location.pathname || '/index.html'),
    item_type: 'statement'
  }).then(function(rows){
    if(!Array.isArray(rows) || !rows.length) return;
    var marks = getTcfReviewMarks();
    rows.forEach(function(row){
      if(row && row.item_text) marks[row.item_text] = true;
    });
    saveTcfReviewMarks(marks);
    document.querySelectorAll('#panel-tcf .ex-row').forEach(function(exRow){
      var checkbox = exRow.querySelector('.tcf-review-check input');
      if(!checkbox) return;
      var checked = !!marks[getTcfReviewKey(exRow)];
      checkbox.checked = checked;
      exRow.classList.toggle('needs-review', checked);
    });
  });
}

function getTcfReviewKey(row){
  var section = row.closest('.tcf-ecrit-sub, #tcf-oral, #tcf-vocabulary, #tcf-invitation');
  var scope = section && section.id ? section.id : 'tcf';
  var text = Array.prototype.map.call(row.querySelectorAll('.ex-fr, .ex-ar'), function(node){
    return node.textContent.trim();
  }).join('|');
  return scope + '::' + text;
}

function addTcfReviewCheckboxes(){
  var marks = getTcfReviewMarks();
  document.querySelectorAll('#panel-tcf .ex-row').forEach(function(row){
    if(row.querySelector('.tcf-review-check') || !row.querySelector('.ex-fr')) return;

    var key = getTcfReviewKey(row);
    var label = document.createElement('label');
    label.className = 'tcf-review-check';
    label.title = 'Mark this sentence to review again';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!marks[key];
    checkbox.setAttribute('aria-label', 'Mark this sentence to review again');

    var visual = document.createElement('span');
    visual.setAttribute('aria-hidden', 'true');

    var marker = document.createElement('em');
    marker.className = 'tcf-review-marker';
    marker.textContent = '↺';
    marker.setAttribute('aria-hidden', 'true');

    label.appendChild(checkbox);
    label.appendChild(visual);
    row.insertBefore(label, row.firstChild);
    row.insertBefore(marker, label.nextSibling);
    row.classList.toggle('needs-review', checkbox.checked);

    checkbox.addEventListener('change', function(){
      row.classList.toggle('needs-review', checkbox.checked);
      if(checkbox.checked){
        marks[key] = true;
      } else {
        delete marks[key];
      }
      saveTcfReviewMarks(marks);
      syncTcfReviewMark(row, checkbox.checked);
    });
  });
  loadTcfReviewMarksFromSupabase();
}

addTcfReviewCheckboxes();

function printCheckedTcf(area, event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }

  var root;
  var title;
  if(area === 'oral'){
    root = document.getElementById('tcf-oral');
    title = 'TCF Oral - Checked Statements';
  } else {
    root = document.querySelector('#tcf-ecrit .tcf-ecrit-sub.visible');
    if(!root && document.getElementById('tcf-invitation').classList.contains('visible')){
      root = document.getElementById('tcf-invitation');
    }
    title = 'TCF Ecrit - Checked Statements';
  }
  if(!root) return;

  var checkedRows = Array.prototype.filter.call(root.querySelectorAll('.ex-row'), function(row){
    var checkbox = row.querySelector('.tcf-review-check input[type="checkbox"]');
    return checkbox && checkbox.checked;
  });

  if(!checkedRows.length){
    window.alert('No checked statements on this page yet.');
    return;
  }

  var groups = [];
  checkedRows.forEach(function(row){
    var card = row.closest('.card');
    var label = card && card.querySelector('.card-label');
    var groupTitle = label ? label.textContent.trim() : 'Statements';
    var group = groups.find(function(item){ return item.title === groupTitle; });
    if(!group){
      group = {title:groupTitle, rows:[]};
      groups.push(group);
    }
    group.rows.push({
      fr: Array.prototype.map.call(row.querySelectorAll('.ex-fr'), function(node){
        return node.textContent.trim();
      }).join(' / '),
      ar: Array.prototype.map.call(row.querySelectorAll('.ex-ar'), function(node){
        return node.textContent.trim();
      }).join(' / ')
    });
  });

  var printWindow = window.open('', '_blank');
  if(!printWindow) return;

  var content = groups.map(function(group){
    var rows = group.rows.map(function(row){
      return '<tr><td>'+escapePrintHtml(row.fr)+'</td><td>'+escapePrintHtml(row.ar)+'</td></tr>';
    }).join('');
    return '<section><h2>'+escapePrintHtml(group.title)+'</h2><table><thead><tr><th>Français</th><th>العربية</th></tr></thead><tbody>'+rows+'</tbody></table></section>';
  }).join('');

  printWindow.document.open();
  printWindow.document.write('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escapePrintHtml(title)+'</title><style>body{font-family:Arial,sans-serif;color:#111827;margin:28px}h1{font-size:24px;margin:0 0 20px}h2{font-size:16px;margin:24px 0 10px;color:#1d4ed8}section{break-inside:avoid;margin-bottom:18px}table{width:100%;border-collapse:collapse;font-size:14px}th,td{padding:9px 10px;border:1px solid #d1d5db;text-align:left}th{background:#eff6ff}td:last-child,th:last-child{direction:rtl;text-align:right}@page{size:A4;margin:12mm}</style></head><body><h1>'+escapePrintHtml(title)+'</h1>'+content+'</body></html>');
  printWindow.document.close();
  printWindow.focus();
  setTimeout(function(){ printWindow.print(); }, 300);
}

function escapePrintHtml(value){
  return String(value || '').replace(/[&<>"']/g, function(char){
    return {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&#39;'
    }[char];
  });
}

function setQCardsOpen(selector, open, event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  document.querySelectorAll(selector).forEach(function(card){
    card.classList.toggle('open', open);
  });
}

function exportSectionToPdf(selector, title, event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  var section = document.querySelector(selector);
  if(!section) return;
  var printable = section.cloneNode(true);
  printable.querySelectorAll('.q-card').forEach(function(card){
    card.classList.add('open');
  });
  printable.querySelectorAll('.card, .q-card, .article-card, .sec').forEach(function(el){
    el.classList.add('visible-anim');
  });
  printable.querySelectorAll('.sec-export-top-left, .sec-header-actions, button, .q-arrow').forEach(function(el){
    el.remove();
  });
  var printWindow = window.open('', '_blank');
  if(!printWindow){
    window.print();
    return;
  }
  var styles = Array.prototype.map.call(document.querySelectorAll('link[rel="stylesheet"], style'), function(node){
    return node.outerHTML;
  }).join('\n');
  printWindow.document.open();
  printWindow.document.write('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+title+'</title>'+styles+'<style>body{background:#fff!important;padding:24px!important}.sec,.card,.q-card,.article-card{display:block!important;opacity:1!important;transform:none!important}.q-body{display:block!important}.card,.q-card,.sec-header{box-shadow:none!important}.sec-header{padding:28px 32px!important}.q-card{margin-bottom:14px!important;break-inside:auto!important;page-break-inside:auto!important}.fr-text,.ar-text,.sec-header{break-inside:avoid;page-break-inside:avoid}.q-header{cursor:default!important}@page{size:A4;margin:12mm}</style></head><body>'+printable.outerHTML+'</body></html>');
  printWindow.document.close();
  printWindow.focus();
  setTimeout(function(){
    if(printWindow.document.body){
      printWindow.document.body.querySelectorAll('.card, .q-card, .article-card, .sec').forEach(function(el){
        el.classList.add('visible-anim');
      });
    }
    printWindow.print();
  }, 750);
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

function getPronunciationScoreValue(){
  var score = document.getElementById('pron-score');
  if(!score) return null;
  var match = score.textContent.match(/Score:\s*([0-9]+(?:\.[0-9]+)?)/i);
  return match ? Number(match[1]) : null;
}

function openPronunciationSavePopup(){
  var original = document.getElementById('pron-original-text');
  var modal = document.getElementById('pron-save-modal');
  var preview = document.getElementById('pron-save-content-preview');
  var status = document.getElementById('pron-save-status');
  var scorePreview = document.getElementById('pron-save-score-preview');
  var datePreview = document.getElementById('pron-save-date-preview');
  if(!original || !modal) return;
  var content = original.value.trim();
  if(!content){
    alert('Please add text before saving.');
    return;
  }
  if(preview) preview.textContent = content;
  if(status){
    status.textContent = '';
    status.classList.remove('error');
  }
  var score = getPronunciationScoreValue();
  if(scorePreview) scorePreview.textContent = 'Score: ' + (score == null ? '-' : score + '/10');
  if(datePreview) datePreview.textContent = 'Date: ' + new Date().toLocaleString();
  modal.hidden = false;
}

function closePronunciationSavePopup(){
  var modal = document.getElementById('pron-save-modal');
  if(modal) modal.hidden = true;
}

function savePronunciationContextToDatabase(){
  var original = document.getElementById('pron-original-text');
  var level = document.getElementById('pron-save-level');
  var status = document.getElementById('pron-save-status');
  if(!original || !original.value.trim()){
    if(status){
      status.textContent = 'No pronunciation text to save.';
      status.classList.add('error');
    }
    return;
  }
  if(!window.savePronunciationContext){
    if(status){
      status.textContent = 'Database helper is not ready.';
      status.classList.add('error');
    }
    return;
  }
  if(status){
    status.textContent = 'Saving...';
    status.classList.remove('error');
  }
  window.savePronunciationContext({
    content: original.value.trim(),
    level: level ? level.value : 'A1',
    score: getPronunciationScoreValue(),
    score_date: new Date().toISOString()
  }).then(function(saved){
    if(status) status.textContent = saved ? 'Saved successfully.' : 'Nothing was saved.';
    setTimeout(closePronunciationSavePopup, 700);
  }).catch(function(error){
    if(status){
      status.textContent = 'Save failed. Please try again.';
      status.classList.add('error');
    }
    console.warn('Pronunciation context save failed:', error);
  });
}
