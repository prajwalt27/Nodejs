const path = require("path");

console.log(path.dirname("F:/web/Node/thapa/pathmodule/path.js"));
console.log(path.extname("F:/web/Node/thapa/pathmodule/path.js"));
console.log(path.basename("F:/web/Node/thapa/pathmodule/path.js"));

console.log(path.parse("F:/web/Node/thapa/pathmodule/path.js"));

const myPath = path.parse("F:/web/Node/thapa/pathmodule/path.js");
console.log(myPath.name);
