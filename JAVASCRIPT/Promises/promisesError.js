function fun(file) {
    return new Promise(function process(resolve, reject) {
        console.log("Data Downloading from", file);
        setTimeout(function exec() {

            let x = "dummy data";
            reject(x);
        }, 3000)
    })
}

x = fun("www.google.com");
x.then(function Success(s) {
    console.log("value is", s);
}, function reject(err) {
    console.log("error is" ,err);
})

console.log(x);
