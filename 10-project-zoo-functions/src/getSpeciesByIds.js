const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const speciesList = (specie) => {
    for (let index = 0; index < ids.length; index += 1) {
      if (specie.id === ids[index]) {
        return specie;
      }
    }
  };
  const speciesMatch = data.species.filter(speciesList);
  return speciesMatch;
}

module.exports = getSpeciesByIds;
