// console.log("hello world!")
// console.log("hello from second console")
// console.log("hello from 3rd console")

// const BookDetail = require('./second')

// console.log(BookDetail)


//PATH:
const path = require('path')

console.log("dirname is", path.dirname('second.js'));
console.log("dirname is", path.dirname(__filename));
console.log("ext is:",path.extname('second.js'));
console.log("ext is:",path.extname(__filename));
console.log("parse: ",path.parse(__filename));

const arr = (__dirname.split(path.sep))
console.log(arr)




