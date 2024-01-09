function getStudentsIdsSum(studentList) {
  if (!Array.isArray(studentList)) {
    return 0;
  }

  return studentList.reduce((acc, student) => acc + student.id, 0);
}

module.exports = getStudentsIdsSum;
