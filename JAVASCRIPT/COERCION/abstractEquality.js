console.log(true == 1); // ToNumber(true) -> 1 and 1 = 1 -> true
console.log(false == 0); // ToNumber(false) -> 0 and 0 = 0 -> true

console.log(3 == { a: 10, valueOf() { return 3 } })

console.log((0.2 - 1.1) == (0.2 - 1.1))

function compute() {
    return NaN;
}

let x = compute();
if (x) console.log("x is not a NaN")
else {
    console.log("x is NaN")
}