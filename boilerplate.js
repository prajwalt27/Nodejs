const fs = require("fs");

// console.log(fs)

// fs.mkdir('Dogs',{recursivs:true},(err)=>{
//     if(err) throw err;
// });

// fs.mkdirSync('Cats');
// console.log("I Come after mkdir")

const folderName = process.argv[2] || "Project";

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`,"");
  fs.writeFileSync(`${folderName}/app.js`,"");
  fs.writeFileSync(`${folderName}/style.css`,"");
} catch (e) {
    console.log("Something went wrong");
    console.log(e);
}
