console.log("=== SERVER.JS STARTED ===");

const http = require('http');
const fs = require('fs');
const path = require('path');
const {Pool} = require('pg');
const translateHandler = require('./api/translate');

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '0.0.0.0';
const highlightsFile = path.join(root, 'data', 'highlights.json');
const databaseUrl = process.env.DATABASE_URL;
const dbPool = databaseUrl ? new Pool({
  connectionString: databaseUrl,
  ssl: {rejectUnauthorized: false}
}) : null;
let highlightsTableReady = false;

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

async function ensureHighlightsTable(){
  if(!dbPool || highlightsTableReady) return;
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS app_highlights (' +
    'id text PRIMARY KEY, ' +
    'payload jsonb NOT NULL, ' +
    'updated_at timestamptz NOT NULL DEFAULT now()' +
    ')'
  );
  highlightsTableReady = true;
}

async function checkDatabaseConnection(){
  if(!dbPool){
    console.log('Database not configured; using data/highlights.json');
    return;
  }
  try{
    await dbPool.query('SELECT 1');
    console.log('Database connected successfully');
  } catch(error){
    console.error('Database connection failed:', error);
  }
}

async function readHighlights(){
  if(dbPool){
    await ensureHighlightsTable();
    var result = await dbPool.query('SELECT payload FROM app_highlights WHERE id = $1', ['default']);
    var payload = result.rows[0] && result.rows[0].payload;
    return Array.isArray(payload) ? payload : [];
  }
  return new Promise(function(resolve){
    fs.readFile(highlightsFile, 'utf8', function(err, data){
      var list = [];
      if(!err){ try{ list = JSON.parse(data); } catch(e){} }
      resolve(Array.isArray(list) ? list : []);
    });
  });
}

async function writeHighlights(list){
  if(dbPool){
    await ensureHighlightsTable();
    await dbPool.query(
      'INSERT INTO app_highlights (id, payload, updated_at) VALUES ($1, $2::jsonb, now()) ' +
      'ON CONFLICT (id) DO UPDATE SET payload = EXCLUDED.payload, updated_at = now()',
      ['default', JSON.stringify(list)]
    );
    return;
  }
  await fs.promises.mkdir(path.dirname(highlightsFile), {recursive: true});
  await fs.promises.writeFile(highlightsFile, JSON.stringify(list, null, 2) + '\n', 'utf8');
}

function highlightsHandler(req, res){
  if(req.method === 'GET'){
    readHighlights()
      .then(function(list){ sendJson(res, 200, list); })
      .catch(function(error){
        console.error('Highlights read failed:', error);
        sendJson(res, 500, {error:'Read failed'});
      });
    return;
  }
  if(req.method === 'POST'){
    readBody(req).then(function(body){
      var list;
      try{ list = JSON.parse(body); } catch(e){ sendJson(res, 400, {error:'Invalid JSON'}); return; }
      if(!Array.isArray(list)){ sendJson(res, 400, {error:'Expected array'}); return; }
      writeHighlights(list)
        .then(function(){ sendJson(res, 200, {ok: true}); })
        .catch(function(error){
          console.error('Highlights write failed:', error);
          sendJson(res, 500, {error:'Write failed'});
        });
    }).catch(function(){ sendJson(res, 500, {error:'Read error'}); });
    return;
  }
  res.setHeader('Allow', 'GET, POST');
  sendJson(res, 405, {error:'Method not allowed'});
}

function supabaseConfigHandler(req, res){
  if(req.method !== 'GET'){
    res.setHeader('Allow', 'GET');
    sendJson(res, 405, {error:'Method not allowed'});
    return;
  }
  sendJson(res, 200, {
    SUPABASE_URL: process.env.SUPABASE_URL || '',
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || ''
  });
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
  if(urlPath === '/api/supabase-config'){
    supabaseConfigHandler(req, res);
    return;
  }
  serveStatic(req, res);
});

server.listen(port, host, () => {
  console.log('French site running on ' + host + ':' + port);
  console.log('Translation endpoint ready at /api/translate');
  console.log('Highlights endpoint ready at /api/highlights');
  console.log('Supabase browser config endpoint ready at /api/supabase-config');
  console.log('Highlights storage: ' + (dbPool ? 'PostgreSQL' : 'data/highlights.json'));
  checkDatabaseConnection();
});
