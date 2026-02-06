// Task1: Write a function to download data from url
// Task2: Write a function to save that downloaded data in a file and return the filename
// Task3: Write a function to upload the file written in previous step to a newurl


function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started Downloading from", url);

        setTimeout(function processDownloading() {
            let data = 'Dummy Data';
            console.log("Download completed");
            resolve(data);
        }, 5000);
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started Writing", data, "in a file");

        setTimeout(function processWriting() {
            let filename = "result.txt";
            console.log("Writing Completed");
            resolve(filename);
        }, 3000);
    })
}

function uploadFile(url, data) {
    return new Promise(function (resolve, reject) {
        console.log("Uploading", data, "on", url);
        setTimeout(function processUploading() {
            console.log("Uploading completed");
            resolve("Success");
        }, 2000);
    })
}

let x = fetchData("www.google.com");
x
    .then(function downloadData(value) {
        console.log("Promise Fulfiled");
        console.log(value);
        return writeFile(value);
    })

    .then(function writingData(value) {
        console.log(value);
        return uploadFile("www.drive.com", value);
    })

    .then(function uploadData(value) {
        console.log(value);
    })
