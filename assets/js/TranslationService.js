async function myMemoryTranslate(text){
  var url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=fr|ar';
  var response = await fetch(url);
  if(!response.ok) throw new Error('MyMemory request failed: ' + response.status);
  var data = await response.json();
  if(data && data.responseStatus === 200 && data.responseData && data.responseData.translatedText){
    var result = data.responseData.translatedText;
    if(result && result.toLowerCase() !== text.toLowerCase()) return result;
  }
  throw new Error('MyMemory returned no translation');
}

class TranslationService {
  constructor(config){
    this.config = config || {};
    this.translationMap = this.config.translationMap || function(){ return {}; };
    this.inflight = {};
  }

  normalize(text){
    return String(text || '')
      .trim()
      .toLowerCase()
      .replace(/[']/g, "'")
      .replace(/[‐‑‒–—―]/g, '-')
      .replace(/\s+/g, ' ')
      .replace(/\s*([:;.!؟?،,])\s*/g, '$1 ')
      .replace(/^[\s"'""«»()[\].,!؟?،;:]+|[\s"'""«»()[\].,!؟?،;:]+$/g, '')
      .trim();
  }

  hash(text){
    var hash = 2166136261;
    var value = String(text || '');
    for(var i = 0; i < value.length; i++){
      hash ^= value.charCodeAt(i);
      hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    }
    return (hash >>> 0).toString(16);
  }

  cacheKey(text){
    return 'translation_fr_ar_' + this.hash(this.normalize(text));
  }

  readCache(text){
    try{
      var cached = JSON.parse(localStorage.getItem(this.cacheKey(text)) || 'null');
      return cached && cached.translated ? cached.translated : null;
    } catch(err){
      return null;
    }
  }

  writeCache(text, translated){
    try{
      localStorage.setItem(this.cacheKey(text), JSON.stringify({
        source: text,
        translated: translated,
        createdAt: Date.now()
      }));
    } catch(err){}
  }

  mapLookup(text){
    var normalized = this.normalize(text);
    var map = this.translationMap() || {};
    var normalizedMap = {};
    Object.keys(map).forEach(function(key){
      normalizedMap[this.normalize(key)] = map[key];
    }, this);
    return normalizedMap[normalized] || null;
  }

  async _fetchTranslation(text){
    if(window.location.protocol !== 'file:'){
      try{
        var response = await fetch('/api/translate', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({text:text})
        });
        if(response.ok){
          var data = await response.json();
          if(data.translatedText) return data.translatedText;
        }
      } catch(err){
        console.warn('Backend translation unavailable, falling back to MyMemory', err);
      }
    }
    return myMemoryTranslate(text);
  }

  async translate(text){
    text = String(text || '').trim();
    if(!text) return '';
    var mapped = this.mapLookup(text);
    if(mapped) return mapped;
    var cached = this.readCache(text);
    if(cached) return cached;
    var key = this.cacheKey(text);
    if(this.inflight[key]) return this.inflight[key];

    this.inflight[key] = this._fetchTranslation(text).then(function(translated){
      if(!translated) throw new Error('Empty translation response');
      this.writeCache(text, translated);
      delete this.inflight[key];
      return translated;
    }.bind(this)).catch(function(err){
      delete this.inflight[key];
      console.error('French to Arabic translation failed', err);
      throw err;
    }.bind(this));
    return this.inflight[key];
  }
}

window.TranslationService = TranslationService;
