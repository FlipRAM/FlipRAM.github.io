const data = require('../data/zoo_data');

function getAnimals(array, type) {
  const listNameAnimal = [];
  const listLocationAnimal = [];
  for (let index = 0; index < array.length; index += 1) {
    const animal = data.species.find((element) => element.id === array[index]);
    listNameAnimal.push(animal.name);
  }
  for (let index = 0; index < array.length; index += 1) {
    const animal = data.species.find((element) => element.id === array[index]);
    listLocationAnimal.push(animal.location);
  }
  if (type === 'name') {
    return listNameAnimal;
  } if (type === 'location') {
    return listLocationAnimal;
  }
}

function filterPropertiesNeeded(obj) {
  const newObj = {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: getAnimals(obj.responsibleFor, 'name'),
    locations: getAnimals(obj.responsibleFor, 'location'),
  };
  return newObj;
}

function getName(name, id) {
  if (name === undefined) {
    const pickName = data.employees.find((element) => element.id === id);
    if (pickName === undefined) {
      throw new Error('Informações inválidas');
    }
    return pickName.firstName;
  } if (id === undefined) {
    return name;
  }
}

function getEmployeesCoverage(options) {
  if (!options) {
    const people = data.employees.map((element) => filterPropertiesNeeded(element));
    return people;
  }
  const person = data.employees.find((each) =>
    each.firstName === getName(options.name, options.id)
     || each.lastName === getName(options.name, options.id));
  if (person === undefined) {
    throw new Error('Informações inválidas');
  }
  const personChanged = filterPropertiesNeeded(person);
  return personChanged;
}

module.exports = getEmployeesCoverage;
