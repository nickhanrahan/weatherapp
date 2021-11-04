const axios = require('axios');
const fs = require('fs');

const exJSON = fs.readFileSync('city.list.partial_PE_US.json');
const exampleData = JSON.parse(exJSON);

const foreJSON = fs.readFileSync('forecast_response_ZorritosPE_28May2021.json');
const exampleFore = JSON.parse(foreJSON);

const searchName = (req, res) => {
  let searchStr = req.query.q.toLowerCase();
  let results = [];
  exampleData.forEach(city => {
    if (city.name.toLowerCase().indexOf(searchStr) > -1) {
      results.push(city);
    }
  });
  res.status(200).send(results);
}

const forecastCity = (req, res) => {
  const cityId = req.params.id;
  let start = new Date(exampleFore.list[0].dt * 1000);
  let forecastObj = {
    city: exampleFore.city,
    list: [],
  }
  let prev = start;
  let target = new Date(new Date(start).setHours(start.getHours() + 24))
  forecastObj.list.push({
    avg: exampleFore.list[0].main.temp,
    low: exampleFore.list[0].main.min,
    low: exampleFore.list[0].main.temp_max,
    date: prev,
    weather: exampleFore.list[0].weather[0],
  })
  let avg = 0;
  let low = Number.POSITIVE_INFINITY;
  let high = Number.NEGATIVE_INFINITY;
  exampleFore.list.forEach((entry) => {
    let date = new Date(entry.dt * 1000);
    if (date >= target) {
      forecastObj.list.push({
        avg, low, high, date,
        weather: entry.weather[0],
      });
      low = Number.POSITIVE_INFINITY;
      high = Number.NEGATIVE_INFINITY;
      prev = date;
      target = new Date(new Date(date).setHours(date.getHours() + 24));
    } else {
      if (avg) {
        avg = (avg + entry.main.temp) / 2;
      } else {
        avg = entry.main.temp;
      }
      low = Math.min(low, entry.main.temp_min);
      high = Math.max(high, entry.main.temp_max);
    }
  })
  forecastObj.list.push({
    avg, low, high,
    date: target,
    weather: exampleFore.list[exampleFore.list.length - 1].weather[0],
  });
  res.status(200).send(forecastObj);

}

module.exports = {
  searchName,
  forecastCity
}
