function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started Downloading from", url);

    setTimeout(function processDownloading() {
      let data = "Dummy Data";
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
  });
}

function uploadFile(url, data) {
  return new Promise(function (resolve, reject) {
    console.log("Uploading", data, "on", url);
    setTimeout(function processUploading() {
      console.log("Uploading completed");
      resolve("Success");
    }, 2000);
  });
}

let data = fetchData("www.google.com");
let writeData = writeFile("Dummy data");
let uploadData = uploadFile("www.google.drive.com", "output.txt");

Promise.all([data, writeData, uploadData]).then(function f(value) {
    console.log(value);
})