function todo(task) {
    setTimeout(function fun() {
        console.log("Completed", task);
    }, 5000);
}

console.log("Start")
todo("assignments");
console.log("End");