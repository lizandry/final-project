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
app.get('/api/teams/:team', (req, res, next) =>
    db
        .getTeam(req.params.id)
        .then(team=>res.send(team))
        .catch(next)
);





app.listen(PORT, function () {
console.log(`find me on port ${PORT}!`);
});