export default function updateStudentGradeByCity(students, city, newGrades){
    return students.filter((student)=>student.location === city).map((student)=>{
        if (newGrades.find((g)=>g.studentId === student.id)){
            student.grade = newGrades.filter((g)=>g.studentId === student.id)[0].grade;
            return student;
        } else {
            student.grade = 'N/A';
            return student
        }
    })
}