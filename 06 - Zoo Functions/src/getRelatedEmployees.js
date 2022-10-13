const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const employee = employees.find((element) => element.managers
    .find((managerId) => managerId === id));
  if (employee !== undefined) return true;
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const hasManager = employees.filter((element) => element.managers
    .find((manager) => manager === managerId));
  return hasManager.map((element) => `${element.firstName} ${element.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
