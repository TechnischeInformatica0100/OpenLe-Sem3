let students = [];
let activeGames = [];
let correctAnswers = 0;
let incorrectAnswers = 0;

const client = mqtt.connect("mqtt://192.168.1.204:8080");
// const client = mqtt.connect("mqtt://10.91.8.131:8080");

client.on("connect", () => {
    console.log("connected to broker");

    client.subscribe("/+/assignment", (err) => {
        if (err) {
            console.log("Error occurred:", err);
        }
    });
});

client.on("message", (topic, message) => {
    if (/\/.+\/assignment/.test(topic)) {
        console.log("assignment received", JSON.parse(message))
    }
})

function addStudent() {
    const name = document.getElementById('studentName').value;
    const group = document.getElementById('studentGroup').value;
    if (name && group) {
        students.push({ name, group, score: 0, time: 0, correct: 0, incorrect: 0 });
        document.getElementById('studentName').value = '';
        document.getElementById('studentGroup').value = '';
        // Update de lijst met studenten
        showStudents();
    }
}

function updateScoreAndTime() {
    const name = document.getElementById('studentNameUpdate').value;
    const score = parseInt(document.getElementById('studentScore').value, 10);
    const time = parseInt(document.getElementById('studentTime').value, 10);
    // Voeg logica toe om te bepalen of het antwoord goed of fout is
    // Voor nu nemen we aan dat elke score boven de 50 goed is
    const isCorrect = score > 50;
    const student = students.find(student => student.name === name);
    if (student) {
        student.score = score;
        student.time = time;
        if (isCorrect) {
            student.correct += 1;
            correctAnswers += 1;
        } else {
            student.incorrect += 1;
            incorrectAnswers += 1;
        }
        updateAnswers();
    }
}

function updateAnswers() {
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('incorrectAnswers').textContent = incorrectAnswers;
}

function showStudents() {
    const list = document.getElementById('students-list');
    list.innerHTML = '';
    students.forEach(student => {
        const item = document.createElement('li');
        item.textContent = `${student.name} (Group: ${student.group}) - Score: ${student.score}, Time: ${student.time}s, Correct: ${student.correct}, Incorrect: ${student.incorrect}`;
        list.appendChild(item);
    });
}


function setMathLevel() {
    const level = parseInt(document.getElementById('mathLevel').value, 10);
    console.log(`Math level set to ${level}`);
}



function startGame() {
    const numberOfStudents = parseInt(document.getElementById('numberOfStudents').value, 10);
    const numberOfQuestions = parseInt(document.getElementById('numberOfQuestions').value, 10);
    console.log(`Game started with ${numberOfStudents} students and ${numberOfQuestions} questions`);

    const gameParameters = {
        numberOfStudents,
        numberOfQuestions
    }

    activeGames.push(gameParameters);
    updateActiveGames();

    // initialise game via control logic
    client.publish("/init", JSON.stringify(gameParameters));
}

function updateActiveGames() {
    const list = document.getElementById('activePlayersList');
    list.innerHTML = '';
    activeGames.forEach((game, index) => {
        const item = document.createElement('li');
        item.textContent = `Spel ${index + 1}: ${game.numberOfStudents} studenten, ${game.numberOfQuestions} vragen`;
        list.appendChild(item);
    });
}


function requestAssignment() {
    client.publish('/assignment-request')
}
