import { MqttClient } from "mqtt"


export function onTest(client, msg, game) {
    console.log(`test called: ${msg}`)
}

// jsdoc type /** and then enter 




/**
 * Callback to the "/assignment-request"
 * @param {MqttClient} client mqtt client 
 * @param {any} msg mqtt payload 
 * 
 */



export function onAssignmentRequest(client, msg, game) {
    console.log("Hello????")

    const assignment = {
        equation: generateRandomEquation()
    }

    // client.publish("/1");
    client.publish(`/${getRandomESP}/assignment`, JSON.stringify(assignment))  
}


function getRandomESP(esps) {
    return esps[generateInteger(0, esps.length)]
}


const operators = ["+", "-", "*", "/"]

function generateRandomEquation() {
    return `${generateInteger(1, 11)} ${operators[generateInteger(0, operators.length)]} ${generateInteger(1, 11)}`
}

function generateInteger(from, to) {
    return Math.floor(Math.random() * (to - from)) + from
}


