const fs = require("fs");

// fs.writeFileSync("bio.txt", "its challenge time");
// fs.appendFileSync("bio.txt", ", so lets start it");

// const data = fs.readFileSync("bio.txt");
// console.log(data.toString());

// fs.renameSync("bio.txt", "mybio.txt");

//to delete file
fs.unlinkSync("mybio.txt");
