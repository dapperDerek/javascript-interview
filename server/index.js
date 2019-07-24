const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = process.env.PORT || 5000;

// Define Express app
const app = express();

// User bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('client'));
app.use(routes)

app.listen(port, () => console.log(`Application listening on port ${port}.`))