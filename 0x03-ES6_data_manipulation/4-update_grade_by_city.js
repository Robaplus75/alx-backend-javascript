export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const newStudent = student;
    if (newGrades.find((g) => g.studentId === student.id)) {
      newStudent.grade = newGrades.filter((g) => g.studentId === student.id)[0].grade;
      return newStudent;
    }
    newStudent.grade = 'N/A';
    return newStudent;
  });
}
