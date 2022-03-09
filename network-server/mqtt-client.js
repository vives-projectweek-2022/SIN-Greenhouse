// It is possible to secure this with SSL
// http://www.steves-internet-guide.com/using-node-mqtt-client/

const mqtt = require('mqtt')
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Auth
  // clientId: '',
  // username: '',
  // password: '',
}

// Establishes connection
const client  = mqtt.connect('broker-url', options);

// Handles incoming messages
client.on('message',function(topic, message, packet){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});

// Handles connection
client.on("connect",function(){	
  console.log("Connected");
});

// Handles failed connection
client.on("error",function(error){
  console.log("Can't connect" + error);
  process.exit(1);
});

client.subscribe("payload");

// This stops the connection to the broker
// client.end();
