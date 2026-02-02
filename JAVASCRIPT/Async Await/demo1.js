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

async function processing() {
    let data = await fetchData("www.google.com");
    console.log(data);
    let writing = await writeFile(data);
    console.log(writing);
    let upload = await uploadFile("www.google.drive.com", writing);
    console.log(upload);
}

let x = processing();
console.log(x);