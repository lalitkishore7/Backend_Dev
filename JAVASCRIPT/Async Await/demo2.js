function fun() {
    return new Promise(function process(resolve, reject) {
        setTimeout(function f() {
            resolve(26);
        }, 7000)
    })
}

let x = fun();
x
    .then(function f1(value) {
        console.log(value);
        for (let i = 0; i < 1000000000; i++){
            
        }
        return 200;
    })

x
    .then(function f2(value) {
        console.log(value);
        return 100;
    })