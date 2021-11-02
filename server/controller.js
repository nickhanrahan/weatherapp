const axios = require('axios');
const fs = require('fs');

const exJSON = fs.readFileSync('city.list.partial_PE_US.json');
const exampleData = JSON.parse(exJSON);

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

module.exports = {
  searchName,
}
