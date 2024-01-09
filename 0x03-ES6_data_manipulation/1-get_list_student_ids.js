export default function getListStudentIds(getListStudents) {
  if (getListStudents instanceof Array) {
    return getListStudents.map((student) => student.id);
  }
  return [];
}
