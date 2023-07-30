const fs = require("fs");

const bioData = {
  name: "prajwal",
  age: 18,
};

// console.log(bioData.age);
// console.log(bioData.name);

//object-->json
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// console.log();

// const objData = JSON.parse(jsonData);

// console.log(objData);

/*
1: convert to JSON => done
2: dusre file me add krdena
3: readfile
4: again convert back to js obj ori
5: console.log
*/

const jsonData = JSON.stringify(bioData);
fs.writeFileSync("json1.json", jsonData, (err) => {
  console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
  //   console.log(data);
  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);
});
