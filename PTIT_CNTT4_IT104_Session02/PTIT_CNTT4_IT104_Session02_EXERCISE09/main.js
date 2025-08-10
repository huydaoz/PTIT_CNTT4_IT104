const student = {
  name: "Dev",
  age: 20,
  listMonHoc: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 },
  ],
};

function getStudentSummary(student) {
  const scores = student.listMonHoc.map((m) => m.score);
  const subjects = student.listMonHoc;

  const average = (
    scores.reduce((sum, s) => sum + s, 0) / scores.length
  ).toFixed(2);

  let grade;
  const avgNum = parseFloat(average);
  if (avgNum >= 8.5) grade = "Học sinh giỏi";
  else if (avgNum >= 7) grade = "Học sinh khá";
  else if (avgNum >= 5) grade = "Học sinh trung bình";
  else grade = "Học sinh yếu";

  let best = subjects[0];
  let worst = subjects[0];
  for (let i = 1; i < subjects.length; i++) {
    if (subjects[i].score > best.score) {
      best = subjects[i];
    }
    if (subjects[i].score < worst.score) {
      worst = subjects[i];
    }
  }

  return `${student.name} is ${student.age} years old.
Average score: ${average} -> ${grade}
Best subject: ${best.subject} (${best.score})
Weakest subject: ${worst.subject} (${worst.score})`;
}

console.log(getStudentSummary(student));
