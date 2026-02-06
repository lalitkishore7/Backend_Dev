console.log("Start of the file");

setTimeout(function timer1() {
    console.log("Timer1 is called");
}, 0);

let x = Promise.resolve("Lalit's promise");
x.then(function processPromise(value) {
    console.log(value);
})

setTimeout(function timer2() {
  console.log("Timer2 is called");
}, 0);

console.log("End of the file");
