const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const checkPerson = (person) => person.id === id;
  const personMatch = data.employees.find(checkPerson);
  const trueOrFalse = (person) => person.managers.length <= 1;
  console.log(trueOrFalse(personMatch));
  return trueOrFalse(personMatch);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const trueOrFalse = isManager(managerId);
  if (trueOrFalse === true) {
    const filterPeople = (array) => array.filter(
      ({ managers }) =>
        managers[0] === managerId || managers[1] === managerId,
    );
    const listOfPeople = filterPeople(data.employees);
    // const { firstName, lastName } = listOfPeople;
    const response = listOfPeople.map((element) => `${element.firstName} ${element.lastName}`);
    return response;
  } if (trueOrFalse === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
