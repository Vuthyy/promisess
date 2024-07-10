const fs = require("fs");

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFilePromise(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

readFilePromise("input.txt")
  .then((data) => {
    const modifiedData1 = data + "\nFirst modification";
    return writeFilePromise("output1.txt", modifiedData1);
  })
  .then(() => {
    return readFilePromise("output1.txt");
  })
  .then((data) => {
    const modifiedData2 = data + "\nSecond modification";
    return writeFilePromise("output2.txt", modifiedData2);
  })
  .then(() => {
    return readFilePromise("output2.txt");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:\n", error);
  });
