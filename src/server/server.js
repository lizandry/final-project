const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const SwearDatabase = require('./db');
const dbName = process.env.DB_NAME || 'swear-jar';
const db = new SwearDatabase(dbName);

app.use(express.json());

    // index.js here
app.get('/', function (req, res) {
res.send('Hello World!');
});


app.get('/api/users', (_unused, res, next) =>
db
    .getAllUsers()
    .then((users) => res.send(users))
    .catch(next)
);
// REFACTOR probably don't need this
app.get('/api/teams', (_unused, res, next) =>
db
    .getAllTeams()
    .then((teams) => res.send(teams))
    .catch(next)
);



app.get('/api/users/:user', (req, res, next) =>
    db
        .getUser(req.params.id)
        .then(user=>res.send(user))
        .catch(next)
);
app.get('/api/users/:userTeams', (req, res, next) =>
    db
        .getUserTeams(req.params.id)
        .then(teams=>res.send(teams))
        .catch(next)
);

app.get('/api/teams/:team', (req, res, next) =>
    db
        .getTeam(req.params.team)
        .then(team=>res.send(team))
        // .then(console.log('req.params', req.params))
        .catch(next)
);




app.listen(PORT, function () {
console.log(`find me on port ${PORT}!`);
});