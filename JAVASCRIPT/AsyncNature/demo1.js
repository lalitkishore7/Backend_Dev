function process() {
    console.log("Start");
    setTimeout(function () {
        console.log("Task complete");
    }, 2000);
    for (let i = 0; i < 10000000000; i++){
        //some task
    }
    console.log("End");
}

process();