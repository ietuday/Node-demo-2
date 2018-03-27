// Require events to start using them
const EventEmitter = require('events').EventEmitter;

// Dogs have events to publish, or emit
class Dog extends EventEmitter {};

class Food {};

let myDog = new Dog();

// When myDog is chewing, run the following function
myDog.on('chew', (item) => {
    if (item instanceof Food) {
        console.log('Good dog');
    } else {
        console.log(`Time to buy another ${item}`);
    }
});

myDog.emit('chew', 'shoe'); // Will result in console.log('Time to buy another shoe')

const bacon = new Food();

myDog.emit('chew', bacon); // Will result in console.log('Good dog')
