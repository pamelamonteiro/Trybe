const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((element) => species.find((element2) => element === element2.id));
}

module.exports = getSpeciesByIds;
