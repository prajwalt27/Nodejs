
const express = require("express");
const app = express();

// app.use((req,res)=>{
//     console.log("We got new request")
//    // res.send("Hello we got your request!")
//   res.send("<h1>This is my webpage!</h1>")
// })

app.get('/', (req, res) => {
    res.send("Home page !!!");
  });

app.get('/search',(req,res)=>{
    const {q}=req.query;
    if(!q){
        req.send('NOTHING FOUND IF NOTHING SEARCH')
    }
    res.send(`<h1>Search results for : ${q}</h1>`)
})

app.get('/r/:subreddit/:postId',(req,res)=>{
  const {subreddit}=req.params;
  res.send(`<h1>Veiwing the post Id: ${postId} on the ${subreddit} subreddit</h1>`)
})


// app.get('*',(req,res)=>{
//     res.send("I dont know the path!");
// })

app.get('/cats', (req, res) => {
  res.send("Meow!");
});

app.get('/dogs', (req, res) => {
  res.send("Bhouuuu...!");
});

app.listen(8080, () => {
  console.log("Listeninng on port 8080");
});
