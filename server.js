import express from 'express';
import favicon from 'express-favicon';
import path from 'path';

const port = process.env.PORT || 8080;

const app = express();
const fullPath = path.resolve(__dirname, '/public/favicon.ico');
app.use(favicon(fullPath));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', (req, res) => res.send('pong'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(port);