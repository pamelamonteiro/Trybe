const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Utilizei o find para localizar dentro da array species o elemento que possui o nome igual ao animal fornecido no parametro. Com o animal localizado, verifiquei se todos os "residents" possuiam a idade maior ou igual a fornecida no parametro.

function getAnimalsOlderThan(animal, age) {
  return species.find((element) => element.name === animal)
    .residents.every((element2) => element2.age >= age);
}

module.exports = getAnimalsOlderThan;
