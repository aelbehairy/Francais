const http = require('http');
const fs = require('fs');
const path = require('path');
const translateHandler = require('./api/translate');

const root = __dirname;
const port = Number(process.env.PORT || 4173);

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
  if((req.url || '').split('?')[0] === '/api/translate'){
    translateHandler(req, res);
    return;
  }
  serveStatic(req, res);
});

server.listen(port, '127.0.0.1', () => {
  console.log('French site running at http://127.0.0.1:' + port);
  console.log('Translation endpoint ready at http://127.0.0.1:' + port + '/api/translate');
});
