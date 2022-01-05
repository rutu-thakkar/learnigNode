const express = require('express');
const path = require('path');

const app = express()

const port = 3000;

app.use(express.static(path.join(__dirname,'public')))


app.get('/', (req,res) => {
    // res.send("hello world!")
    // res.sendFile(path.join(__dirname, 'demosite.html'))
    // res.json({
        // rutu: "hello rutu"
    // })
});

app.get('/home/:name', (req,res) => {
    // console.log("hello " + req.params.name);
    res.send("hello "+ req.params.name)
})

app.get('/about', (req,res) => {
    res.send("Hey There!, Know more about us!!")
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})