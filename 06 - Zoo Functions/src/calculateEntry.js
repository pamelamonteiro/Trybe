const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  let countChilds = 0;
  let countAdult = 0;
  let countSenior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) countChilds += 1;
    if (element.age >= 18 && element.age < 50) countAdult += 1;
    if (element.age >= 50) countSenior += 1;
  });
  const countAll = { child: countChilds, adult: countAdult, senior: countSenior };
  return countAll;
}

// { "child": 3, "adult": 2, "senior": 1 }

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const countEntry = countEntrants(entrants);
  const sumEntry = countEntry.child * prices.child
    + countEntry.adult * prices.adult + countEntry.senior * prices.senior;
  return sumEntry;
}

module.exports = { calculateEntry, countEntrants };
