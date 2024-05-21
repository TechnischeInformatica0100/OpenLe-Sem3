import { MqttClient } from "mqtt"
import { MathGame } from "./mathGame.mjs"

export function onTest(client, msg, game) {
    console.log(`test called: ${msg}`)
}

/**
 * Callback to the "/asignment-request" topic
 * @param {MqttClient} client mqtt client
 * @param {any} msg mqtt payload
 * @param {MathGame} game math game instance
 */
export function onAssignmentRequest(client, msg, game) {
    const request = JSON.parse(msg)
    const random_esps = getRandomESPs(game.esps, 2)
    const equation = generateRandomEquation()

    const assignment = {
        player: request.player,
        equation: formatEquation(equation),
        answer_location: random_esps[1],
    }
    const possible_answers = {
        player: request.player,
        possible_answers: generatePossibleAnswers(equation)
    }

    client.publish(`/${random_esps[0]}/assignment`, JSON.stringify(assignment))
    client.publish(`/${random_esps[1]}/possible-answers`, JSON.stringify(possible_answers))
}

function getRandomESP(esps) {
    return esps[generateInteger(0, esps.length)]
}

function getRandomESPs(esps, count) {
    const esps_copy = Array.from(esps)
    const esps_random = []

    for (let i = 0; i < count; i++) {
        const r = generateInteger(0, esps_copy.length)

        esps_random.push(esps_copy[r])
        esps_copy.splice(r, 1)
    }

    return esps_random
}

function formatEquation(equation) {
    return `${equation.operands[0]} ${equation.operator} ${equation.operands[1]}`
}

const operators = ["+", "-", "*", "/"]

function generateRandomEquation() {
    return {
        operands: [generateInteger(1, 11), generateInteger(1, 11)],
        operator: operators[generateInteger(0, operators.length)]
    }
}

function generateInteger(from, to) {
    return Math.floor(Math.random() * (to - from)) + from
}

function getCorrectAnswer(equation) {
    switch (equation.operator) {
        case "+": return equation.operands[0] + equation.operands[1];
        case "-": return equation.operands[0] - equation.operands[1];
        case "*": return equation.operands[0] * equation.operands[1];
        case "/": return equation.operands[0] / equation.operands[1];
        default: return 0;
    }
}

function generatePossibleAnswers(equation) {
    const correct_answer = getCorrectAnswer(equation)

    return [
        correct_answer,
        correct_answer !== 10 ? 10 : 11,
        correct_answer !== 47 ? 47 : 48,
        correct_answer !== 0 ? 0 : -1
    ]
}
