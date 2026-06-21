(function(){
  var fallbackKey = 'supabaseHighlightFallback';
  var dictionaryFallbackKey = 'supabaseDictionaryFallback';
  var pronunciationContextFallbackKey = 'supabasePronunciationContextFallback';
  var warnedMissingConfig = false;
  var configPromise = null;

  function currentPage(){
    var path = window.location && window.location.pathname ? window.location.pathname : 'index.html';
    return path === '/' ? '/index.html' : path;
  }

  function encode(value){
    return encodeURIComponent(String(value == null ? '' : value));
  }

  function cleanRecord(record){
    record = record || {};
    return {
      user_id: record.user_id || null,
      page: record.page || currentPage(),
      section: record.section || 'default',
      item_text: String(record.item_text || record.text || '').trim(),
      item_type: record.item_type || record.type || 'word',
      arabic_translation: record.arabic_translation || null,
      french_text: record.french_text || record.item_text || record.text || null
    };
  }

  function cleanDictionaryRecord(record){
    record = record || {};
    return {
      user_id: record.user_id || 'default_user',
      source_page: record.source_page || record.page || currentPage(),
      source_section: record.source_section || record.section || 'default',
      item_text: String(record.item_text || record.text || record.french_text || '').trim(),
      item_type: normalizeDictionaryType(record.item_type || record.type || 'word'),
      arabic_translation: record.arabic_translation || null,
      english_translation: record.english_translation || null,
      notes: record.notes || null
    };
  }

  function normalizeDictionaryType(type){
    type = String(type || 'word').toLowerCase();
    if(['word', 'phrase', 'sentence', 'statement', 'card'].indexOf(type) !== -1) return type;
    return 'word';
  }

  function fallbackList(){
    try{
      var list = JSON.parse(localStorage.getItem(fallbackKey) || '[]');
      return Array.isArray(list) ? list : [];
    } catch(error){
      return [];
    }
  }

  function dictionaryFallbackList(){
    try{
      var list = JSON.parse(localStorage.getItem(dictionaryFallbackKey) || '[]');
      return Array.isArray(list) ? list : [];
    } catch(error){
      return [];
    }
  }

  function writeDictionaryFallback(list){
    try{ localStorage.setItem(dictionaryFallbackKey, JSON.stringify(list || [])); } catch(error){}
  }
  function pronunciationContextFallbackList(){
    try{
      var list = JSON.parse(localStorage.getItem(pronunciationContextFallbackKey) || '[]');
      return Array.isArray(list) ? list : [];
    } catch(error){
      return [];
    }
  }

  function writePronunciationContextFallback(list){
    try{ localStorage.setItem(pronunciationContextFallbackKey, JSON.stringify(list || [])); } catch(error){}
  }

  function cleanPronunciationContextRecord(record){
    record = record || {};
    var score = record.score;
    if(score === '' || score == null || Number.isNaN(Number(score))) score = null;
    else score = Number(score);
    return {
      user_id: record.user_id || 'default_user',
      content: String(record.content || '').trim(),
      level: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].indexOf(record.level) !== -1 ? record.level : 'A1',
      score: score,
      score_date: record.score_date || new Date().toISOString()
    };
  }

  function pronunciationContextFallbackSave(record){
    var now = new Date().toISOString();
    var item = Object.assign({}, record, {
      id: record.id || 'local-pron-' + Date.now().toString(36),
      created_at: record.created_at || now,
      updated_at: now
    });
    var next = pronunciationContextFallbackList();
    next.unshift(item);
    writePronunciationContextFallback(next);
    return item;
  }

  function writeFallback(list){
    try{ localStorage.setItem(fallbackKey, JSON.stringify(list || [])); } catch(error){}
  }

  function fallbackSave(record){
    var next = fallbackList().filter(function(item){
      return !(item.page === record.page && item.section === record.section && item.item_text === record.item_text);
    });
    next.push(record);
    writeFallback(next);
    return record;
  }

  function fallbackRemove(record){
    writeFallback(fallbackList().filter(function(item){
      return !(item.page === record.page && item.section === record.section && item.item_text === record.item_text);
    }));
  }

  function fallbackLoad(filters){
    filters = filters || {};
    return fallbackList().filter(function(item){
      if(filters.page && item.page !== filters.page) return false;
      if(filters.section && item.section !== filters.section) return false;
      if(filters.item_type && item.item_type !== filters.item_type) return false;
      return true;
    });
  }

  function dictionaryFallbackSave(record){
    var now = new Date().toISOString();
    var next = dictionaryFallbackList().filter(function(item){
      return !(item.user_id === record.user_id && item.source_page === record.source_page && item.source_section === record.source_section && item.item_text === record.item_text);
    });
    next.push(Object.assign({}, record, {id: record.id || 'local-' + Date.now().toString(36), created_at: record.created_at || now, updated_at: now}));
    writeDictionaryFallback(next);
    return next[next.length - 1];
  }

  function dictionaryFallbackLoad(filters){
    filters = filters || {};
    return dictionaryFallbackList().filter(function(item){
      if(filters.item_type && item.item_type !== filters.item_type) return false;
      if(filters.source_page && item.source_page !== filters.source_page) return false;
      if(filters.source_section && item.source_section !== filters.source_section) return false;
      return true;
    });
  }

  function dictionaryFallbackRemove(record){
    writeDictionaryFallback(dictionaryFallbackList().filter(function(item){
      if(record.id && item.id === record.id) return false;
      return !(item.user_id === record.user_id && item.source_page === record.source_page && item.source_section === record.source_section && item.item_text === record.item_text);
    }));
  }

  function getConfig(){
    if(configPromise) return configPromise;
    configPromise = new Promise(function(resolve){
      if(window.SUPABASE_URL && window.SUPABASE_ANON_KEY){
        resolve({url: window.SUPABASE_URL, anonKey: window.SUPABASE_ANON_KEY});
        return;
      }
      if(window.location.protocol === 'file:'){
        resolve(null);
        return;
      }
      fetch('/api/supabase-config')
        .then(function(response){ return response.ok ? response.json() : null; })
        .then(function(config){
          if(config && config.SUPABASE_URL && config.SUPABASE_ANON_KEY){
            resolve({url: config.SUPABASE_URL, anonKey: config.SUPABASE_ANON_KEY});
          } else {
            resolve(null);
          }
        })
        .catch(function(){ resolve(null); });
    });
    return configPromise;
  }

  function request(path, options){
    return getConfig().then(function(config){
      if(!config){
        if(!warnedMissingConfig){
          console.warn('Supabase highlights are not configured; using localStorage fallback.');
          warnedMissingConfig = true;
        }
        return null;
      }
      var headers = {
        apikey: config.anonKey,
        Authorization: 'Bearer ' + config.anonKey,
        'Content-Type': 'application/json'
      };
      Object.keys((options && options.headers) || {}).forEach(function(key){
        headers[key] = options.headers[key];
      });
      return fetch(config.url.replace(/\/$/, '') + '/rest/v1/' + path, {
        method: options && options.method ? options.method : 'GET',
        headers: headers,
        body: options && options.body
      }).then(function(response){
        if(!response.ok){
          return response.text().then(function(text){
            throw new Error(response.status + ' ' + text);
          });
        }
        if(response.status === 204) return null;
        return response.json();
      });
    });
  }

  function saveHighlight(record){
    var cleaned = cleanRecord(record);
    if(!cleaned.item_text || !cleaned.item_type) return Promise.resolve(null);
    saveDictionaryItem({
      user_id: cleaned.user_id || 'default_user',
      source_page: cleaned.page,
      source_section: cleaned.section,
      item_text: cleaned.item_text,
      item_type: cleaned.item_type,
      arabic_translation: cleaned.arabic_translation,
      english_translation: record && record.english_translation,
      notes: record && record.notes
    });
    return request('user_highlights?on_conflict=page,section,item_text', {
      method: 'POST',
      headers: {Prefer: 'resolution=merge-duplicates,return=representation'},
      body: JSON.stringify(cleaned)
    }).then(function(result){
      fallbackSave(cleaned);
      return result && result[0] ? result[0] : cleaned;
    }).catch(function(error){
      console.warn('Supabase highlight save failed; using localStorage fallback.', error);
      return fallbackSave(cleaned);
    });
  }

  function loadHighlights(filters){
    filters = filters || {};
    var query = 'user_highlights?select=*&order=created_at.asc';
    if(filters.page) query += '&page=eq.' + encode(filters.page);
    if(filters.section) query += '&section=eq.' + encode(filters.section);
    if(filters.item_type) query += '&item_type=eq.' + encode(filters.item_type);
    return request(query).then(function(result){
      if(Array.isArray(result)) return result;
      return fallbackLoad(filters);
    }).catch(function(error){
      console.warn('Supabase highlight load failed; using localStorage fallback.', error);
      return fallbackLoad(filters);
    });
  }

  function removeHighlight(record){
    var cleaned = cleanRecord(record);
    deleteDictionaryItem({
      user_id: cleaned.user_id || 'default_user',
      source_page: cleaned.page,
      source_section: cleaned.section,
      item_text: cleaned.item_text
    });
    fallbackRemove(cleaned);
    return request(
      'user_highlights?page=eq.' + encode(cleaned.page) +
      '&section=eq.' + encode(cleaned.section) +
      '&item_text=eq.' + encode(cleaned.item_text),
      {method: 'DELETE', headers: {Prefer: 'return=minimal'}}
    ).catch(function(error){
      console.warn('Supabase highlight delete failed; local UI was already updated.', error);
      return null;
    });
  }

  function saveDictionaryItem(record){
    var cleaned = cleanDictionaryRecord(record);
    if(!cleaned.item_text || !cleaned.item_type) return Promise.resolve(null);
    return request('dictionary_items?on_conflict=user_id,source_page,source_section,item_text', {
      method: 'POST',
      headers: {Prefer: 'resolution=merge-duplicates,return=representation'},
      body: JSON.stringify(cleaned)
    }).then(function(result){
      return result && result[0] ? result[0] : dictionaryFallbackSave(cleaned);
    }).catch(function(error){
      console.warn('Supabase dictionary save failed; using localStorage fallback.', error);
      return dictionaryFallbackSave(cleaned);
    });
  }

  function loadDictionaryItems(filters){
    filters = filters || {};
    var query = 'dictionary_items?select=*&order=created_at.desc';
    if(filters.item_type && filters.item_type !== 'all') query += '&item_type=eq.' + encode(filters.item_type);
    if(filters.source_page) query += '&source_page=eq.' + encode(filters.source_page);
    if(filters.source_section) query += '&source_section=eq.' + encode(filters.source_section);
    return request(query).then(function(result){
      if(Array.isArray(result)) return result;
      return dictionaryFallbackLoad(filters);
    }).catch(function(error){
      console.warn('Supabase dictionary load failed; using localStorage fallback.', error);
      return dictionaryFallbackLoad(filters);
    });
  }

  function deleteDictionaryItem(record){
    record = record || {};
    var cleaned = cleanDictionaryRecord(record);
    dictionaryFallbackRemove(Object.assign({}, cleaned, {id: record.id || null}));
    var query;
    if(record.id){
      query = 'dictionary_items?id=eq.' + encode(record.id);
    } else {
      query = 'dictionary_items?user_id=eq.' + encode(cleaned.user_id) +
        '&source_page=eq.' + encode(cleaned.source_page) +
        '&source_section=eq.' + encode(cleaned.source_section) +
        '&item_text=eq.' + encode(cleaned.item_text);
    }
    return request(query, {method: 'DELETE', headers: {Prefer: 'return=minimal'}}).catch(function(error){
      console.warn('Supabase dictionary delete failed; local UI was already updated.', error);
      return null;
    });
  }


  function savePronunciationContext(record){
    var cleaned = cleanPronunciationContextRecord(record);
    if(!cleaned.content) return Promise.resolve(null);
    return request('pronunciation_contexts', {
      method: 'POST',
      headers: {Prefer: 'return=representation'},
      body: JSON.stringify(cleaned)
    }).then(function(result){
      return result && result[0] ? result[0] : pronunciationContextFallbackSave(cleaned);
    }).catch(function(error){
      console.warn('Supabase pronunciation context save failed; using localStorage fallback.', error);
      return pronunciationContextFallbackSave(cleaned);
    });
  }

  function loadPronunciationContexts(filters){
    filters = filters || {};
    var query = 'pronunciation_contexts?select=*&order=score_date.desc';
    if(filters.level && filters.level !== 'all') query += '&level=eq.' + encode(filters.level);
    return request(query).then(function(result){
      if(Array.isArray(result)) return result;
      var fallback = pronunciationContextFallbackList();
      if(filters.level && filters.level !== 'all') fallback = fallback.filter(function(item){ return item.level === filters.level; });
      return fallback;
    }).catch(function(error){
      console.warn('Supabase pronunciation context load failed; using localStorage fallback.', error);
      var fallback = pronunciationContextFallbackList();
      if(filters.level && filters.level !== 'all') fallback = fallback.filter(function(item){ return item.level === filters.level; });
      return fallback;
    });
  }
  window.HighlightStore = {
    currentPage: currentPage,
    saveHighlight: saveHighlight,
    loadHighlights: loadHighlights,
    removeHighlight: removeHighlight,
    saveDictionaryItem: saveDictionaryItem,
    loadDictionaryItems: loadDictionaryItems,
    deleteDictionaryItem: deleteDictionaryItem,
    savePronunciationContext: savePronunciationContext,
    loadPronunciationContexts: loadPronunciationContexts
  };
  window.saveHighlight = saveHighlight;
  window.loadHighlights = loadHighlights;
  window.removeHighlight = removeHighlight;
  window.saveDictionaryItem = saveDictionaryItem;
  window.loadDictionaryItems = loadDictionaryItems;
  window.deleteDictionaryItem = deleteDictionaryItem;
  window.savePronunciationContext = savePronunciationContext;
  window.loadPronunciationContexts = loadPronunciationContexts;
})();
