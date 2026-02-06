function* fetchNextElement() {
    console.log("Inside the generator function");
    // console.log("Inside the generator function");
    // console.log("Inside the generator function");

    yield 1;
    yield 2;
    console.log("lalu");
    console.log("bhalu");
    yield 3;
}

const iter = fetchNextElement();

console.log(iter.next());
console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
