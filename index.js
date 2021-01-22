const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.use(require('./routes/routes'));

app.listen(5050, () => {
    console.log(`Listening on port 5050`);
});