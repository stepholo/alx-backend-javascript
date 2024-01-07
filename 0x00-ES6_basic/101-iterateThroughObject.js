export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  let nextEmployee = reportWithIterator.next();
  while (!nextEmployee.done) {
    employeeNames.push(nextEmployee.value.name);
    nextEmployee = reportWithIterator.next();
  }

  return employeeNames.join('|');
}
