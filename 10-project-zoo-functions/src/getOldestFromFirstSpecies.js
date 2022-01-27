const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstAnimal = data.employees.filter((element) => element.id === id)
    .map((element) => element.responsibleFor[0]);
  const getAnimal = data.species.filter((element) => element.id === firstAnimal[0]);
  const getOldestAnimal = getAnimal[0].residents.sort((a, b) => b.age - a.age)[0];
  const listToReturn = [getOldestAnimal.name, getOldestAnimal.sex, getOldestAnimal.age];
  return listToReturn;
}

module.exports = getOldestFromFirstSpecies;
