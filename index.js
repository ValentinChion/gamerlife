const cors = require('cors');
const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');

const app = express();
const task = require('./router/task');
const player = require('./router/player');
const server = require('http').Server(app);

const config = require('./config');
// setup database connexion
require('./config/mongoose');

app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(bodyParser.json());

// Enable CORS
// TODO: implement corsoptions to secure the app
app.use(cors());

app.use('/tasks', task);
app.use('/player', player);
app.use(serveStatic('./build'));

server.listen(config.app.port, (err) => {
    if (err) console.error(err);
    else console.log(`Listening on port ${config.app.port}`);
});
