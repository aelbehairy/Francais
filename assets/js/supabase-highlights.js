(function(){
  var fallbackKey = 'supabaseHighlightFallback';
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

  function fallbackList(){
    try{
      var list = JSON.parse(localStorage.getItem(fallbackKey) || '[]');
      return Array.isArray(list) ? list : [];
    } catch(error){
      return [];
    }
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

  window.HighlightStore = {
    currentPage: currentPage,
    saveHighlight: saveHighlight,
    loadHighlights: loadHighlights,
    removeHighlight: removeHighlight
  };
  window.saveHighlight = saveHighlight;
  window.loadHighlights = loadHighlights;
  window.removeHighlight = removeHighlight;
})();
