function todo(task) {
    console.log("todo start")
  setTimeout(function fun() {
    console.log("Completed", task);
  }, 5000);
    task = "task2"
    console.log("todo end")

}

console.log("Start");
todo("assignments");
console.log("End");
