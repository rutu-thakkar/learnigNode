const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
    console.log('Turn off the motor');

    setTimeout(() => {
        console.log('Its time to turn off the motor')
    }, 6000)

});

// myEmitter.emit();

console.log("script is running");

myEmitter.emit('waterfull');
console.log("script is still running");
myEmitter.emit('waterfull');
// myEmitter.emit('waterfull');
// myEmitter.emit('waterfull');
// myEmitter.emit('waterfull');
// myEmitter.emit('waterfull');
