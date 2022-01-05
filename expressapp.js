const express = require('express')

const app = express()

const port = 3000;

app.get('/', (req,res) => {
    res.send("hello world!")
});

app.get('/about', (req,res) => {
    res.send("Hey There!, Know more about us")
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})