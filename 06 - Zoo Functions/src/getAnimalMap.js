const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allLocations = [];

const noParameter = () => {
  const specieByLocation = {};
  allLocations.forEach((location) => {
    const speciesFound = species.filter((specie) => specie.location === location)
      .map((specie) => specie.name);
    specieByLocation[location] = speciesFound;
  });
  return specieByLocation;
};

const withNames = (options) => {
  const specieByLocation = {};
  allLocations.forEach((location) => {
    const speciesFound = species.filter((specie) => specie.location === location)
      .map((specie) => {
        const specieName = specie.name;
        let animalName = specie.residents.map((animal) => animal.name);
        if (options.sex) {
          animalName = specie.residents.filter((animal) => animal.sex === options.sex)
            .map((animalSex) => animalSex.name);
        }
        if (options.sorted === true) {
          animalName = animalName.sort();
        }
        return { [specieName]: animalName };
      });
    specieByLocation[location] = speciesFound;
  });
  return specieByLocation;
};

function getAnimalMap(options) {
  species.forEach((elemento) => {
    if (!allLocations.includes(elemento.location)) {
      allLocations.push(elemento.location);
    }
  });
  if (!options) return noParameter();
  if (!options.includeNames) return noParameter();
  if (options.includeNames === true) return withNames(options);
}

module.exports = getAnimalMap;
