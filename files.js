const fs = require("fs");

// reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// writing files
fs.writeFile(
  "./docs/blog1.txt",
  "The new text, which is written by using node",
  () => {
    console.log("file was written");
  }
);

fs.writeFile("./docs/blog2.txt", "new file with text created with node", () => {
  console.log("file with context was created");
});

// directories
const isFolderImages = fs.existsSync("./images");

if (!isFolderImages) {
  fs.mkdir("./images", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./images", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder removed");
  });
}

// deleting files
if (fs.existsSync("./docs/deleteFile.txt")) {
  fs.unlink("./docs/deleteFile.txt", (err) => {
    if (err) {
      console.log(err);
    }
  });
} else {
  fs.writeFile("./docs/deleteFile.txt", "", () => {});
}
