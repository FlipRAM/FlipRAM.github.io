const data = require('../data/zoo_data');

function creatNameListWithSex(element, sex) {
  if (sex === undefined) {
    return element.name;
  }
  if (element.sex === sex) {
    return element.name;
  }
}

function sortNames(names, sort) {
  if (sort === true) {
    return names.sort();
  }
  return names;
}

function getAnimalMap(options) {
  const animalPerArea = { NE: [], NW: [], SE: [], SW: [] };
  if (!options || !options.includeNames) {
    data.species.forEach((element) => { animalPerArea[element.location].push(element.name); });
    return animalPerArea;
  }
  data.species.forEach((element) => {
    let names = [];
    element.residents.forEach((each) => {
      const nameToCheck = creatNameListWithSex(each, options.sex);
      if (nameToCheck !== undefined) {
        names.push(creatNameListWithSex(each, options.sex));
      }
    });
    names = sortNames(names, options.sorted);
    const typeAndName = { [element.name]: names };
    animalPerArea[element.location].push(typeAndName);
  });
  return animalPerArea;
}

console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;
