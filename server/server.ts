import express = require('express');
const app: express.Application = express();
const PORT: any = process.env.PORT || 3000



app.get('/', function (req, res) {
res.send('Hello World!');
});


app.listen(PORT, function () {
console.log(`find me on port ${PORT}!`);
});