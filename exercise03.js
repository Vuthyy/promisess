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

async function processFile() {
  try {
    let data = await readFilePromise("input.txt");
    const modifiedData1 = data + "\nFirst modification";
    await writeFilePromise("output1.txt", modifiedData1);

    data = await readFilePromise("output1.txt");
    const modifiedData2 = data + "\nSecond modification";
    await writeFilePromise("output2.txt", modifiedData2);

    data = await readFilePromise("output2.txt");
    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
}

processFile();
