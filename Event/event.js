const EventEmitter = require('node:events'); // require('events') is also valid.
const myEmitter = new EventEmitter(); // we need to create a object of EventEmitter as it is a class.

// First listener
myEmitter.on('event', function firstListener() {  // on('event-name',callbackfn(args)) is used to register listners for the event. Listners has to be registered before the emit() call.
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {   // Arguments passed as part of event triggering can be used by listeners.
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event')); // list of listeners for an event

myEmitter.emit('event', 1, 2, 3, 4, 5);   // emit('event-name',args) is used to trigger the event


// ------Note: We can extend(inherit) the class require('node:events') from another class and use it for event related tasks as shown below -----

const EventEmitter2 = require('node:events');

class MyEmitter extends EventEmitter2 {}

const emitter = new MyEmitter();
emitter.on('event', () => {
  console.log('EventEmitter2 event occurred! by extending the events class..');
});
emitter.emit('event');





