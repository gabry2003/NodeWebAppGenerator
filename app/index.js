
/**
 * @author Gabriele Princiotta
 */

require('console-error');
require('console-info');
require('console-success');
require('console-warn');

const config = require('./config/config');
const routes = require('./server/routes/routes');
const statusColor = require('./utils/statusColor');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');

// Morgan
morgan.token('splitter', (req) => {
    return "\x1b[36m--------------------------------------------\x1b[0m\n";
});
morgan.token('statusColor', statusColor);

// Express.js
app.set('port', process.env.PORT || config.server.port);
app.set('view engine', 'pug');
app.set('views', __dirname + '/client/views');
// Per generare l'html pulito
// app.locals.pretty = true;

app.use(morgan(`:splitter\x1b[33m:method\x1b[0m \x1b[36m:url\x1b[0m :statusColor :response-time ms`)); // Logger
app.use(cors());
// Gestione richieste post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(multer().array());

// Cartella pubblica
app.use(express.static(__dirname + '/client/public'));

// Forzo l'HTTPS
/*app.use((req, res, next) => {
    if ((req.get('X-Forwarded-Proto') !== 'https')) {
        res.redirect('https://' + req.get('Host') + (req.url !=='/'?req.url:'') );
    } else {
        next();
    }
});*/

// Pagine
// Home
app.get('/', routes.get.home);

// Servizi
// Qui inserisci i servizi

// Errore 404
app.get('*', routes.notFound);

// Faccio partire il server
app.listen(app.get('port'), () => {
    console.log(`Server started at http://localhost:${app.get('port')}`);
});