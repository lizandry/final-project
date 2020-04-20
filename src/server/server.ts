import express = require('express');
const app: express.Application = express();
const PORT: any = process.env.PORT || 3000
const SwearDatabase = require('./entities/db');
const dbName = process.env.DB_NAME || 'swear-jar';
const db: any = new SwearDatabase(dbName);

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
    // .then(users => res.send(users))
    .catch(next)
);
// GET /user
app.get('/users/:user', (req: any, res: any, next: any) =>
    db
        // .filterBooks(req.params.selectedGenre)
        .getUser(req.params.id)
        // TODO error here
        // .then(thisUser: any=>res.send(thisUser))
        .catch(next)
);





app.listen(PORT, function () {
console.log(`find me on port ${PORT}!`);
});