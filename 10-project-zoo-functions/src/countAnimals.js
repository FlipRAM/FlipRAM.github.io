const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (typeof animal === 'undefined') {
    const everyAnimal = {};
    data.species.forEach((element) => {
      everyAnimal[element.name] = element.residents.length;
    });
    return everyAnimal;
  } if (!animal.sex) {
    const animalMatch = data.species.filter((element) => element.name === animal.specie);
    const count = animalMatch[0].residents.length;
    return count;
  }
  const animalToCheck = data.species.filter((element) => element.name === animal.specie);
  const population = animalToCheck[0].residents;
  const numberOfSex = population.filter((element) => element.sex === animal.sex);
  console.log(numberOfSex);
  const count = numberOfSex.length;
  return count;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
