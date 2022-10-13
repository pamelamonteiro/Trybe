const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalsCared = employees.find((employee) => employee.id === id).responsibleFor;
  const sortedAnimals = species.find((animal) => animalsCared[0] === animal.id).residents
    .sort((a, b) => b.age - a.age);
  return Object.values(sortedAnimals[0]);
}

module.exports = getOldestFromFirstSpecies;
