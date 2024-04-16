import mqtt from "mqtt";
import express from "express";
import * as mathGame from "./src/mathGame.mjs";

// const client = mqtt.connect("mqtt://192.168.178.173");
const client = mqtt.connect("mqtt://10.91.8.131"); // Werk 
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
});

let activeGame = null;

client.on("message", (topic, message) => {
    // message is Buffer
    console.log(`${topic}: ${message.toString()}`);

    switch (topic) {
        case "/init":
            const gameParameters = JSON.parse(message);
            console.log(gameParameters);

            activeGame = new mathGame.MathGame(gameParameters.numberOfStudents, gameParameters.numberOfQuestions);
            console.log(activeGame);
            break;

        default:
            console.log("unknown topic");
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
