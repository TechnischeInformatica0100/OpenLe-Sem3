const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://192.168.1.221");

client.on("connect", () => {
    client.subscribe("/node", (err) => {
        if (err) {
            console.log("Error occurred:", err);
        }
    });
});

client.on("message", (topic, message) => {
    // message is Buffer
    console.log(`${topic}: ${message.toString()}`);
});

setInterval(() => {
    client.publish("/arduino", "Hello from node");
}, 1000);
