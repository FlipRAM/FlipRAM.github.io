const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employee = (self) => self.firstName === employeeName || self.lastName === employeeName;
  const employeeMatch = data.employees.find(employee);
  if (typeof employeeMatch === 'undefined') {
    return {};
  }
  return employeeMatch;
}

module.exports = getEmployeeByName;
