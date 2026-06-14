console.log("=== SERVER.JS STARTED ===");

const http = require('http');
const fs = require('fs');
const path = require('path');
const translateHandler = require('./api/translate');

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const highlightsFile = path.join(root, 'data', 'highlights.json');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.mp3': 'audio/mpeg'
};

function sendJson(res, status, body){
  res.writeHead(status, {'Content-Type':'application/json; charset=utf-8'});
  res.end(JSON.stringify(body));
}

async function readBody(req){
  var chunks = [];
  for await (var chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

function highlightsHandler(req, res){
  if(req.method === 'GET'){
    fs.readFile(highlightsFile, 'utf8', function(err, data){
      var list = [];
      if(!err){ try{ list = JSON.parse(data); } catch(e){} }
      sendJson(res, 200, Array.isArray(list) ? list : []);
    });
    return;
  }
  if(req.method === 'POST'){
    readBody(req).then(function(body){
      var list;
      try{ list = JSON.parse(body); } catch(e){ sendJson(res, 400, {error:'Invalid JSON'}); return; }
      if(!Array.isArray(list)){ sendJson(res, 400, {error:'Expected array'}); return; }
      fs.mkdir(path.dirname(highlightsFile), {recursive: true}, function(mkdirErr){
        if(mkdirErr){ sendJson(res, 500, {error:'Write failed'}); return; }
        fs.writeFile(highlightsFile, JSON.stringify(list, null, 2) + '\n', 'utf8', function(err){
          if(err){ sendJson(res, 500, {error:'Write failed'}); return; }
          sendJson(res, 200, {ok: true});
        });
      });
    }).catch(function(){ sendJson(res, 500, {error:'Read error'}); });
    return;
  }
  res.setHeader('Allow', 'GET, POST');
  sendJson(res, 405, {error:'Method not allowed'});
}

function serveStatic(req, res){
  let requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
  if(requestPath === '/') requestPath = '/index.html';

  const filePath = path.normalize(path.join(root, requestPath));
  if(!filePath.startsWith(root)){
    sendJson(res, 403, {error:'Forbidden'});
    return;
  }

  fs.stat(filePath, (statError, stat) => {
    if(statError || !stat.isFile()){
      sendJson(res, 404, {error:'Not found'});
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {'Content-Type': mimeTypes[ext] || 'application/octet-stream'});
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const urlPath = (req.url || '').split('?')[0];
  if(urlPath === '/api/translate'){
    translateHandler(req, res);
    return;
  }
  if(urlPath === '/api/highlights'){
    highlightsHandler(req, res);
    return;
  }
  serveStatic(req, res);
});

server.listen(port, '127.0.0.1', () => {
  console.log('French site running at http://127.0.0.1:' + port);
  console.log('Translation endpoint ready at http://127.0.0.1:' + port + '/api/translate');
  console.log('Highlights endpoint ready at http://127.0.0.1:' + port + '/api/highlights');
});
