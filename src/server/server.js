const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const SwearDatabase = require('./entities/db');
const dbName = process.env.DB_NAME || 'swear-jar';
const db = new SwearDatabase(dbName);

app.use(express.json());

    // index.js here
app.get('/', function (req, res) {
res.send('Hello World!');
});



// IN PROGRESS: learning how to handle this in typescript
// ie i think i need to make interfaces?
app.get('/users', (_unused, res, next) =>
db
    .getAllUsers()
// what type is users?
    .then((users) => res.send(users))
    .catch(next)
);
// GET /user
app.get('/users/:user', (req, res, next) =>
    db
        // .filterBooks(req.params.selectedGenre)
        .getUser(req.params.id)
        // TODO error here
        // .then(thisUser=>res.send(thisUser))
        .catch(next)
);





app.listen(PORT, function () {
console.log(`find me on port ${PORT}!`);
});