function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);

      if (gradeInfo) {
        return { ...student, grade: gradeInfo.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}

module.exports = updateStudentGradeByCity;
