const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allSpecies = {};
    species.forEach((element) => {
      allSpecies[element.name] = element.residents.length;
    });
    return allSpecies;
  }
  if (animal.sex) {
    const filterBySex = species.find((element) => element.name === animal.specie).residents
      .filter((element2) => element2.sex === animal.sex);
    return filterBySex.length;
  }
  const filterBySpecie = species.find((element) => element.name === animal.specie).residents;
  return filterBySpecie.length;
}

module.exports = countAnimals;
