/*
Events Module
nodejs has a builtin module called Events
where you can create, fire, and listen your own events

Ex1= Registering for the event to be fired only one time using outlineColor
Ex2= Crete an event emitter instance and register a couple of callbacks
Ex3= registering for the event with callback parameters

 */

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("your name is nim");
});

event.on("sayMyName", () => {
  console.log("your name is nm");
});

event.on("sayMyName", () => {
  console.log("your name is m");
});

event.emit("sayMyName");

/*
This concept is quite is simple emitter objects emit named events
that cause previously listeners to be called. So, an emitter object 
basically has two main fontFeatureSettings: 
Emitting name events.
Registering and unregistering listener functions
*/
