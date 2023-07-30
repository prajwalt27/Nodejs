const fs = require("fs");

fs.writeFile("read.txt", "today is awesome day", (err) => {
  console.log("file is created");
  console.log(err);
});

//we pass them a function as a callback
//that gets called when the task complete
//the callback has an argument that tells you whether
// the operation completed successfully
//Now we need to say what to do when fs. writeFile
//has completed (even if its nothing) and start
//checking for errors

fs.readFile("read.txt", "UTF-8", (err, data) => {
  console.log(data);
});
