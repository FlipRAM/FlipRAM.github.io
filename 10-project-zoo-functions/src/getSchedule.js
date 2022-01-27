const data = require('../data/zoo_data');

function createArrayDayHour(obj) {
  const newArray = Object.entries(obj);
  return newArray;
}

function animalsOfTheDay(day) {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }
  const animalToRequirement = data.species.filter((element) =>
    element.availability.includes(day))
    .map((element) => element.name);
  return animalToRequirement;
}

function creatStringIsOpen(open, close) {
  if (open === 0 && close === 0) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close}pm`;
}

function checkIfDayOrAnimal(tocheck) {
  const hours = Object.entries(data.hours);
  let hoursTrue;
  hours.forEach((element) => {
    if (element[0] === tocheck) {
      hoursTrue = true;
    }
  });
  if (hoursTrue === true) {
    return 'day';
  }
  const animals = data.species.filter((element) => element.name === tocheck);
  if (animals.length !== 0) {
    return 'animal';
  }
}

function daysOfTheAnimal(animal) {
  const days = data.species.filter((element) => element.name === animal)
    .map((element) => element.availability);
  return days[0];
}

function getSchedule(scheduleTarget) {
  const schedule = {
    Tuesday: {}, Wednesday: {}, Thursday: {}, Friday: {}, Saturday: {}, Sunday: {}, Monday: {},
  };
  const dayAndHour = createArrayDayHour(data.hours);
  dayAndHour.forEach((element) => {
    schedule[element[0]] = {
      officeHour: creatStringIsOpen(element[1].open, element[1].close),
      exhibition: animalsOfTheDay(element[0]),
    };
  });
  if (!scheduleTarget || checkIfDayOrAnimal(scheduleTarget) === undefined) {
    return schedule;
  } if (checkIfDayOrAnimal(scheduleTarget) === 'day') {
    const daySelected = { [scheduleTarget]: schedule[scheduleTarget] };
    return daySelected;
  } if (checkIfDayOrAnimal(scheduleTarget) === 'animal') {
    return daysOfTheAnimal(scheduleTarget);
  }
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
