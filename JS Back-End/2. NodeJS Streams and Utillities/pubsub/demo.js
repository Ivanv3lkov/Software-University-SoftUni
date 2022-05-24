const eventBus = require('./eventBus');

let firstSayHelloUnsubscribe = eventBus.subscribe('say-hello', (name, secondName) => console.log('event say-hello executed! - ' + name + ' ' + secondName));
let secondSayHelloUnsubscribe = eventBus.subscribe('say-hello', (name, secondName) => console.log('event say-hello executed second time! - ' + name + ' ' + secondName));
eventBus.subscribe('say-bye', (name) => console.log('event say-bye executed - ' + name));

eventBus.publish('say-hello', 'Gosho', 'Ivan');

firstSayHelloUnsubscribe();
secondSayHelloUnsubscribe();

eventBus.publish('say-hello', 'Pesho');
eventBus.publish('say-bye', 'Pesho');
