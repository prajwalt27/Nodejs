const express= require('express')
const app= express();
const path = require('path');

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('views',path.join(__dirname));
app.set('view engine','ejs');

const comments=[
    {
        username:'Tood',
        comment:'lol hahaha!'
    },
    {
        username:'Skuli',
        comment:'euuuuu!'
    },
    {
        username:'poo',
        comment:'Kuan hai ye jisne ...'
    },
    {
        username:'Jim',
        comment:'utha utha sakal zali...'
    },
]

app.get('/comments',(req,res)=>{
    res.render('views/comments/index',{comments});
})

app.get('/comments/new',(req,res)=>{
    res.render('views/comments/new');
})

app.post('/comments',(req,res)=>{
    const {username, comment} = req.body;
    comments.push({username,comment})
    res.send("IT WORKED!")
})

app.get('/tacos',(req,res)=>{
    res.send("GET /tacos response")
})


app.post('/tacos',(req,res)=>{
    const {meat,qty} = req.body;
    res.send(`OK, here are your ${qty} ${meat}`)
    res.send("POST /tacos response")
})

app.listen(3000,()=>{
    console.log("ON PORT 3000!");
})



