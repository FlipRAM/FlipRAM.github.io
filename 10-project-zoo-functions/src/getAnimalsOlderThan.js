const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const speciesList = (specie) => specie.name === animal;
  const speciesMatch = data.species.find(speciesList);
  const checkAllAges = (animals) => animals.residents.every((current) => current.age >= age);
  return checkAllAges(speciesMatch);
}

module.exports = getAnimalsOlderThan;
