(function(){
  function initB1ModuleTabs(){
    document.querySelectorAll('.b1-module-tab').forEach(function(btn){
      if(btn.dataset.b1ModuleReady) return;
      btn.dataset.b1ModuleReady = '1';
      btn.addEventListener('click', function(){
        var module = btn.closest('.b1-module');
        if(!module) return;
        module.querySelectorAll('.b1-module-tab').forEach(function(tab){ tab.classList.remove('active'); });
        module.querySelectorAll('.b1-module-panel').forEach(function(panel){ panel.classList.remove('active'); });
        btn.classList.add('active');
        var panel = module.querySelector('#' + btn.dataset.panel);
        if(panel) panel.classList.add('active');
        var tabs = module.querySelector('.b1-module-tabs');
        if(tabs) tabs.scrollIntoView({behavior:'smooth', block:'start'});
      });
    });
  }
  function toggleOne(btn){
    var row = btn && btn.closest ? btn.closest('.ex-row') : null;
    var panel = row ? row.querySelector('.answer-panel') : null;
    if(!panel) return;
    var isOpen = panel.classList.contains('show');
    var label = btn.dataset.label || btn.textContent.replace('Γû╢ ', '').replace('Γû╝ ', '');
    btn.dataset.label = label;
    panel.classList.toggle('show', !isOpen);
    btn.classList.toggle('open', !isOpen);
    btn.textContent = (!isOpen ? 'Γû╝ ' : 'Γû╢ ') + label;
  }
  function revealAll(group){
    var rows = document.querySelectorAll('.b1-module .ex-row[data-group="' + group + '"]');
    var anyClosed = Array.prototype.some.call(rows, function(row){
      var panel = row.querySelector('.answer-panel');
      return panel && !panel.classList.contains('show');
    });
    rows.forEach(function(row){
      var panel = row.querySelector('.answer-panel');
      var btn = row.querySelector('.reveal-btn');
      if(!panel || !btn) return;
      var label = btn.dataset.label || btn.textContent.replace('Γû╢ ', '').replace('Γû╝ ', '');
      btn.dataset.label = label;
      panel.classList.toggle('show', anyClosed);
      btn.classList.toggle('open', anyClosed);
      btn.textContent = (anyClosed ? 'Γû╝ ' : 'Γû╢ ') + label;
    });
  }
  window.toggleOne = toggleOne;
  window.revealAll = revealAll;
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initB1ModuleTabs);
  } else {
    initB1ModuleTabs();
  }
})();