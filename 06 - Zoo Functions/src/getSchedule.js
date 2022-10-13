const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allDays = Object.keys(hours);
const allAnimals = species.map((animal) => animal.name);

const noParameter = () => {
  const allExhibition = {};
  allDays.forEach((day) => {
    const speciesFound = species.filter((animal) => animal.availability
      .find((schedule) => schedule === day)).map((animal) => animal.name);
    if (speciesFound.length === 0) {
      allExhibition[day] = { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' };
    } else {
      allExhibition[day] = {
        exhibition: speciesFound,
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      };
    }
  });
  return allExhibition;
};

const filterFunction = (filterData) => {
  const allExhibition = {};
  if (allDays.includes(filterData)) {
    const speciesFound = species.filter((element) => element.availability
      .find((day) => day === filterData)).map((animal) => animal.name);
    if (speciesFound.length === 0) {
      allExhibition[filterData] = {
        exhibition: 'The zoo will be closed!',
        officeHour: 'CLOSED',
      };
    } else {
      allExhibition[filterData] = { exhibition: speciesFound,
        officeHour: `Open from ${hours[filterData].open}am until ${hours[filterData].close}pm`,
      };
    }
    return allExhibition;
  }
  const speciesFound = species.find((element) => element.name === filterData).availability;
  return speciesFound;
};

function getSchedule(scheduleTarget) {
  if (allDays.includes(scheduleTarget)
    || allAnimals.includes(scheduleTarget)) return filterFunction(scheduleTarget);
  return noParameter();
}

module.exports = getSchedule;
