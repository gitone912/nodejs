import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myemitter = new MyEmitter();

myemitter.on('event',() => {
    console.log('an even just accured');
})

myemitter.emit('event');