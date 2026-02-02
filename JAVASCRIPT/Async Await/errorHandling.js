function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started Downloading from", url);

    setTimeout(function processDownloading() {
      let data = "Dummy Data";
      console.log("Download completed");
      reject(data);
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

    try{
        let data = await fetchData("www.google.com");
        let writing = await writeFile(data);
        let upload = await uploadFile("www.google.drive.com", writing);
    }

    catch(err) {
        console.log("error is" ,err);
    }
}

let x = processing();