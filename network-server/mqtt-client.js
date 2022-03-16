// It is possible to secure this with SSL
// http://www.steves-internet-guide.com/using-node-mqtt-client/
// Later this script will be placed in /javascripts to be linked with the server

const mqtt = require('mqtt');
const host = "mqtt://172.16.107.251:1883";
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Auth
  // clientId: '',
  // username: '',
  // password: '',
};

// Establishes connection
const client  = mqtt.connect(host, options);

// Handles connection and subscribes to wished topics
client.on("connect", () => {	
  console.log("Connected");
  client.subscribe("sensor/outside", { qos: 0 });
});

// Handles failed connection
client.on("error", (error) => {
  console.log("Connection error: " + error);
  client.end();
});

client.on("reconnect", () => {
  console.log("Reconnecting...");
});

// Handles incoming messages
client.on("message", (topic, message, packet) => {
  console.log("packet is "+ packet);
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});
