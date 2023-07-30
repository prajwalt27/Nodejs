const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   });

  const rstream = fs.createReadStream("input.txt");
  rstream.on("data", (chunkdata) => {
    res.write(chunkdata);
  });
  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", () => {
    console.log(err);
    res.end();
  });
});

server.listen(8080, "127.0.0.1", () => {
  console.log("Listening to the server 8080...");
});
