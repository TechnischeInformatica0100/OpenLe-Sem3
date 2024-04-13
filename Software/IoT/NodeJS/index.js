const mqtt = require("mqtt");
const express = require("express");
const client = mqtt.connect("mqtt://10.91.8.131"); // Werk 
// const client = mqtt.connect("mqtt://10.91.8.131"); // Home

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

const app = express()
app.use(express.static('public'))

// Definieer een route voor de root-URL ("/")
app.get('/', (req, res) => {
    res.send('Welkom bij de Rekenrace Webserver!');
});

const port = 3000
const ip = "localhost"

app.listen(port, ip, () => {
    console.log(`Listening on ${ip}:${port}`)
})
