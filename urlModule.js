import url from 'url';

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);
console.log(myURL.href);
console.log(myURL.hash);
console.log(myURL.host);

const myURL1 = new URL('https://abc:xyz@example.com');
console.log(myURL1.password);
// Prints xyz

myURL1.password = 123;
console.log(myURL1.password);

