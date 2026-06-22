(function(){
  function escapeHtml(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(char){
      return {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char];
    });
  }

  function formatScore(score){
    return score == null || score === '' ? '-' : score + '/10';
  }

  function formatDate(value){
    if(!value) return '-';
    var date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
  }

  function renderContexts(items){
    var list = document.getElementById('pron-contexts-list');
    var status = document.getElementById('pron-contexts-status');
    if(!list) return;
    if(!items.length){
      list.innerHTML = '';
      if(status) status.textContent = 'No saved contexts yet.';
      return;
    }
    if(status) status.textContent = items.length + ' saved context(s).';
    list.innerHTML = items.map(function(item){
      return '<article class="pron-context-card">' +
        '<div class="pron-context-card-meta">' +
          '<span>Level: ' + escapeHtml(item.level || '-') + '</span>' +
          '<span>Score: ' + escapeHtml(formatScore(item.score)) + '</span>' +
          '<span>Date: ' + escapeHtml(formatDate(item.score_date || item.created_at)) + '</span>' +
        '</div>' +
        '<div class="pron-context-card-content">' + escapeHtml(item.content || '') + '</div>' +
      '</article>';
    }).join('');
  }

  function load(){
    var status = document.getElementById('pron-contexts-status');
    var filter = document.getElementById('pron-context-level-filter');
    if(status) status.textContent = 'Loading saved contexts...';
    if(!window.loadPronunciationContexts){
      if(status) status.textContent = 'Database helper is not ready.';
      return;
    }
    window.loadPronunciationContexts({level: filter ? filter.value : 'all'})
      .then(renderContexts)
      .catch(function(error){
        console.warn('Load pronunciation contexts failed:', error);
        if(status) status.textContent = 'Could not load saved contexts.';
      });
  }

  function initContextsSidebar(){
    var sidebar = document.getElementById('dashboard-sidebar');
    var toggle = document.getElementById('sidebar-toggle');
    var pin = document.getElementById('sidebar-pin');
    var isPinned = false;
    var mobileQuery = window.matchMedia ? window.matchMedia('(max-width: 640px)') : {matches:false};
    if(!sidebar || !toggle || !pin) return;
    sidebar.querySelectorAll('.sidebar-link').forEach(function(item){
      var text = item.querySelector('.sidebar-text');
      if(text) item.setAttribute('data-label', text.textContent.trim());
    });
    function setOpen(open){
      sidebar.classList.toggle('open', !!open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    toggle.addEventListener('click', function(){
      setOpen(!sidebar.classList.contains('open'));
      isPinned = false;
      pin.classList.remove('active');
    });
    pin.addEventListener('click', function(){
      isPinned = !isPinned;
      pin.classList.toggle('active', isPinned);
      setOpen(isPinned);
    });
    sidebar.addEventListener('mouseleave', function(){
      if(!isPinned && !mobileQuery.matches) setOpen(false);
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var filter = document.getElementById('pron-context-level-filter');
    if(filter) filter.addEventListener('change', load);
    initContextsSidebar();
    load();
  });
})();
