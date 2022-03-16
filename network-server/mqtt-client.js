// It is possible to secure this with SSL
// http://www.steves-internet-guide.com/using-node-mqtt-client/

const mqtt = require('mqtt');
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
const client  = mqtt.connect("mqtt://broker.hivemq.com:1883", options);

// Handles connection
client.on("connect",function(){	
  console.log("Connected");
  console.log(client.subscribe("subscriptions"));
});

// Handles failed connection
client.on("error",function(error){
  console.log("Can't connect" + error);
  process.exit(1);
});

// Handles incoming messages
client.on('message',function(topic, message, packet){
  console.log("packet is "+ packet);
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});

// This stops the connection to the broker
// client.end();
