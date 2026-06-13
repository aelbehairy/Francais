async function readJson(req){
  if(req.body && typeof req.body === 'object') return req.body;
  var chunks = [];
  for await (var chunk of req) chunks.push(chunk);
  var raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

async function translateWithMyMemory(text){
  var url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=fr|ar';
  var response = await fetch(url);
  if(!response.ok) throw new Error('MyMemory failed: ' + response.status);
  var data = await response.json();
  if(data && data.responseStatus === 200 && data.responseData && data.responseData.translatedText){
    return data.responseData.translatedText;
  }
  throw new Error('MyMemory returned no translation: ' + JSON.stringify(data));
}

async function translateWithAzure(text){
  var endpoint = process.env.AZURE_TRANSLATOR_ENDPOINT || 'https://api.cognitive.microsofttranslator.com';
  var key = process.env.AZURE_TRANSLATOR_KEY;
  var region = process.env.AZURE_TRANSLATOR_REGION;
  if(!key || !region) throw new Error('Missing Azure Translator environment variables');

  var response = await fetch(endpoint.replace(/\/$/, '') + '/translate?api-version=3.0&from=fr&to=ar', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Ocp-Apim-Subscription-Key':key,
      'Ocp-Apim-Subscription-Region':region
    },
    body: JSON.stringify([{Text:text}])
  });
  if(!response.ok) throw new Error('Azure Translator failed: ' + response.status + ' ' + await response.text());
  var data = await response.json();
  return data && data[0] && data[0].translations && data[0].translations[0] && data[0].translations[0].text;
}

async function translateWithLibre(text){
  var endpoint = process.env.LIBRE_TRANSLATE_ENDPOINT || 'https://libretranslate.com/translate';
  var payload = {
    q:text,
    source:'fr',
    target:'ar',
    format:'text'
  };
  if(process.env.LIBRE_TRANSLATE_API_KEY) payload.api_key = process.env.LIBRE_TRANSLATE_API_KEY;

  var response = await fetch(endpoint, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  });
  if(!response.ok) throw new Error('LibreTranslate failed: ' + response.status + ' ' + await response.text());
  var data = await response.json();
  return data.translatedText || data.translation;
}

module.exports = async function handler(req, res){
  if(req.method !== 'POST'){
    res.setHeader('Allow', 'POST');
    res.statusCode = 405;
    res.end(JSON.stringify({error:'Method not allowed'}));
    return;
  }

  try{
    var body = await readJson(req);
    var text = String(body.text || '').trim();
    if(!text){
      res.statusCode = 400;
      res.end(JSON.stringify({error:'Missing text'}));
      return;
    }

    var provider = process.env.TRANSLATION_PROVIDER || (process.env.AZURE_TRANSLATOR_KEY ? 'azure' : 'mymemory');
    var translatedText;
    if(provider === 'azure'){
      translatedText = await translateWithAzure(text);
    } else if(provider === 'libre'){
      translatedText = await translateWithLibre(text);
    } else {
      translatedText = await translateWithMyMemory(text);
    }
    if(!translatedText) throw new Error('Empty translation response');

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify({translatedText:translatedText}));
  } catch(error){
    console.error('Translation API error:', error);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 502;
    res.end(JSON.stringify({error:'Translation failed'}));
  }
};
