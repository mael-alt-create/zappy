const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT || '8080', 10);
const DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';

  const fullPath = path.join(DIR, reqPath);

  // Sécurité traversée de dossier
  if (!fullPath.startsWith(DIR)) {
    res.writeHead(403);
    res.end('Accès interdit');
    return;
  }

  fs.stat(fullPath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Fichier non trouvé');
      return;
    }

    const ext = path.extname(fullPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });

    fs.createReadStream(fullPath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Portail Communes du Bénin disponible sur http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const ALT_PORT = 8088;
    console.log(`Port ${PORT} déjà occupé, bascule sur http://localhost:${ALT_PORT}`);
    server.listen(ALT_PORT, '0.0.0.0');
  } else {
    console.error('Erreur serveur:', err);
  }
});
