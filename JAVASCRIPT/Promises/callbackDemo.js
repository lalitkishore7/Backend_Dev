// Task1: Write a function to download data from url
// Task2: Write a function to save that downloaded data in a file and return the filename
// Task3: Write a function to upload the file written in previous step to a newurl

function fetchCustom(url, fn) {
  // download data from the url
  // this download can take some time
  // we will download the content , and then whatever is the result, we will pass to the callback

  console.log("Starting downloading from", url);
  setTimeout(function process() {
    console.log("Download completed");
    let response = "Dummy data";
    fn(response);
  }, 3000);
}

function writeFile(data, fn) {
    // this function write data in a new file
    console.log("Start writing data");
    setTimeout(function process() {
        console.log("Writing completed");
        let filename = "output.txt";
        fn(filename);
    }, 4000);
}

function uploadFile(filename, newurl, fn) {
    console.log("Upload started");
    setTimeout(function process() {
        console.log("File", filename, "uploaded sucessfully on ", newurl);
        let uploadResponse = "SUCCESS";
        fn(uploadResponse);
    }, 2000);
}


fetchCustom("www.google.com", function downloadCallback(result) {
    console.log("User received :", result);
    writeFile(result, function writeCallback(filenameResponse) {
        console.log("new file is :", filenameResponse);
        uploadFile(filenameResponse, "www.drive.google.com", function uploadCallback(uploadResponse) {
            console.log("Successfully uploaded", uploadResponse);
        });
    });
});
