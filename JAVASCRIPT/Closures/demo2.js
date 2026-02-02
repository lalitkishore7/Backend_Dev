function fun(name) {
    return function todo() {
        console.log(name);
    }
}

let x = fun("Lalit");
console.log(x)
x();