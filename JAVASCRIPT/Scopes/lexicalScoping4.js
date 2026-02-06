var teacher = "sanket";

function fun() {
  var teacher = "singh";
  console.log(subject);
  teachingAssistant = "lalit"; // eligible for becoming autoGlobal
  var subject = "JavaScript";
  console.log(teacher);
  console.log(teachingAssistant);
}

fun();
console.log(teacher);
console.log(teachingAssistant);
