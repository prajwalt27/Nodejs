const fs = require("fs");

// fs.writeFileSync("read.txt", "hello bro how are you?");
// fs.appendFileSync("read.txt", ", im good bro!");

// fs.readFile("read.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.renameSync("read.txt", "mybio.txt");

fs.unlinkSync("mybio.txt");
