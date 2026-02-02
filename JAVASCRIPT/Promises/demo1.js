function fetch(url){
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < 1000000000; i++){
            //some task
        }

        setTimeout(function process() {
            let data = "Dummy Data";
            resolve(data);
        })
    })
}  

let x = fetch("www.graphing.com")
console.log(x);


