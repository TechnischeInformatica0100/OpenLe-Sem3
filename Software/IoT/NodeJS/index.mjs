import mqtt from "mqtt";
import express from "express";
import * as mathGame from "./src/mathGame.mjs";
import * as topics from "./src/topics.mjs"

const client = mqtt.connect("mqtt://192.168.1.204");
// const client = mqtt.connect("mqtt://10.91.8.131"); // Werk 
// const client = mqtt.connect("mqtt://10.91.8.131"); // Home

client.on("connect", () => {
    client.subscribe("/test", (err) => {
        if (err) {
            console.log("Error occurred:", err);
        }
    });

    client.subscribe("/init", (err) => {
        if (err) {
            console.log("Error occurred:", err);
        }
    });

    client.subscribe("/assignment-request", (err) => {
        if (err) {
            console.log("Error occurred:", err);
        }
    });
});

let activeGame = new mathGame.MathGame(20, 5, ["1", "2"]);

const topicCallbacks = {
    "/test": topics.onTest,
    "/init": null,
    "/assignment-request": topics.onAssignmentRequest,
}

client.on("message", (topic, message) => {
    // message is Buffer
    console.log(`${topic}: ${message.toString()}`);

    const cb = topicCallbacks[topic]
    if (cb) {
        cb(client, message, activeGame)
    } else {
        console.error(`unknown topic ${topic}`)
    }
});

// setInterval(() => {
//     client.publish("/arduino", "Hello from node");
// }, 1000);

const app = express()
app.use(express.static('public'))

// Definieer een route voor de root-URL ("/")
// app.get('/', (req, res) => {
//     res.send('Welkom bij de Rekenrace Webserver!');
// });

const port = 3000
const ip = "localhost"

app.listen(port, ip, () => {
    console.log(`Listening on ${ip}:${port}`)
})
