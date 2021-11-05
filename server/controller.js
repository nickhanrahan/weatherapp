const axios = require('axios');
const fs = require('fs');

const exJSON = fs.readFileSync('city.list.json');
const exampleData = JSON.parse(exJSON);

const searchName = (req, res) => {
  let searchStr = req.query.q.toLowerCase();
  axios.get()
  let results = [];
  exampleData.forEach(city => {
    if (city.name.toLowerCase().indexOf(searchStr) > -1) {
      results.push(city);
    }
    if (city.state.toLowerCase().indexOf(searchStr) > -1) {
      results.push(city);
    }
    if (city.country.toLowerCase().indexOf(searchStr) > -1) {
      results.push(city);
    }
  });
  res.status(200).send(results);
}

const forecastCity = (req, res) => {
  let lat = req.params.lat;
  let lon = req.params.lon;
  console.log(lat, lon);
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units={imperial}&appid=cf53893d93414d0e98cabc620021f64f`)
    .then((weather) => {
      res.status(200).send(weather.data);
    })
    .catch((err) => {
      console.log(err);
    })


}

module.exports = {
  searchName,
  forecastCity
}
