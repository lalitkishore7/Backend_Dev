function demo(val) {
    return new Promise(function (resolve, reject) {
        setTimeout(function process() {
            if (val % 2 == 0) {
                resolve("even");
            }

            else {
                reject("odd");
            }
        }, 5000);
    })
}

a = demo();