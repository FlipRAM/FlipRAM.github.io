const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const filterChild = (array) => array.filter(({ age }) => age < 18);
  const filterAdult = (array) => array.filter(({ age }) => age >= 18 && age < 50);
  const filterSenior = (array) => array.filter(({ age }) => age >= 50);
  const countChild = filterChild(entrants).length;
  const countAdult = filterAdult(entrants).length;
  const countSenior = filterSenior(entrants).length;
  const obj = {
    adult: countAdult,
    child: countChild,
    senior: countSenior,
  };
  return obj;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined' || Object.entries(entrants).length === 0) {
    return 0;
  }
  const objEntrantsByType = countEntrants(entrants);
  const [adultCount, childCount, seniorCount] = Object.values(objEntrantsByType);
  const [adultPrice, childPrice, seniorPrice] = [49.99, 20.99, 24.99];
  const total = (adultCount * adultPrice) + (childCount * childPrice) + (seniorCount * seniorPrice);
  return total;
}

// const pessoas = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]

// console.log(countEntrants(pessoas));
// console.log(calculateEntry(pessoas));

module.exports = { calculateEntry, countEntrants };
