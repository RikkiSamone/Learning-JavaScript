/* Calculate the Average scores for the class by completing the getAverage function*/

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

/* Convert student scores to  letter grade */
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
/*Return true or false if student has a passing grade */
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}
/*Send message to students about grade*/
function studentMsg(totalScores, studentScore) {
const average = getAverage(totalScores);
const grade = getGrade(studentScore);

if (hasPassingGrade(studentScore)){
  return "Class average: " + average + ". Your grade: " + grade + ". You passed the course.";
} else { 
    return "Class average: " + average + ". Your grade: " + grade + ". You failed the course.";
}
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));