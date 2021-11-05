const express = require('express');
const { searchName, forecastCity } = require('./controller.js');

const port = 3000;

const app = express();

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/search', searchName);

app.get('/forecast/:lat/:lon', forecastCity)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
