export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees); // Extracting departments

  const employees = [];
  for (const department of departments) {
    for (const employee in department) {
      employees.push({
        name: employee,
        department: department[employee],
      });
    }
  }

  let currentIndex = 0;

  // Returning an iterator object
  return {
    next() {
      if (currentIndex < employees.length) {
        return { value: employees[currentIndex++], done: false };
      }
      return { done: true };
    },
  };
}
