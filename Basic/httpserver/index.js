const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req.url);

  const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
  const objData = JSON.parse(data);

  if (req.url === "/") {
    res.end("hello from the other side");
  } else if (req.url === "/about") {
    res.end("Hello from the about side");
  } else if (req.url === "/userapi") {
    // fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
    //   console.log(data);
    //   const objData = JSON.parse(data);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[1].name);
    // });
    // res.end("Hello from the userapi side");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error pages. Page doesn't exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
