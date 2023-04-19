const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Listener function
myEmitter.on('customEvent', (firstName, lastName) => {
  console.log(`Hello from ${firstName} and ${lastName}`);
});

// Emit custom event.
myEmitter.emit('customEvent', 'Alan', 'Brown');
