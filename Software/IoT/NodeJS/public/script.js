const players = ["jantje", "pietje", "burak"];
let tableRows = {}

// const client = mqtt.connect("mqtt://192.168.178.173:8080");
const client = mqtt.connect("mqtt://192.168.1.204:8080");

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

    // TODO: on assignment-result, move button to correct column
})

function requestAssignment() {
    client.publish('/assignment-request')
}

/**
 * Handler for when a button is pressed in the "Without assignment" column
 * @param {PointerEvent} event button click event object
 */
function handlePlayerButtonPressWithoutAssignment(event) {
    console.log('handlePlayerButtonPressWithoutAssignment() called');
    // console.log(event);

    // remove button out of original column
    const button = event.target;
    const originalCell = button.parentElement;
    originalCell.removeChild(button);

    // insert removed button into next column
    const row = originalCell.parentElement;
    row.getElementsByTagName('td')[1].appendChild(button);

    // replace event listener
    button.removeEventListener('click', handlePlayerButtonPressWithoutAssignment);
    // button.addEventListener('click', handlePlayerButtonPressWithAssignment, { passive: true });

    // TODO: send assignment-request message
}

// function handlePlayerButtonPressWithAssignment(event) {
//     console.log('handlePlayerButtonPressWithAssignment() called');
// }

function addPlayersToTable() {
    const tableBody = document.getElementById('player-table-body');
    tableBody.innerHTML = '';
    tableRows = {}

    for (const player of players) {
        const row = document.createElement('tr');
        tableRows[player] = row;
        
        // create/add elements using JS
        for (let i = 0; i < 3; i++) {
            const cell = document.createElement('td');
            
            if (i === 0) {
                const button = document.createElement('button');
                button.addEventListener('click', handlePlayerButtonPressWithoutAssignment, { passive: true });
                button.innerText = player;
                cell.appendChild(button);
            }

            row.appendChild(cell);
        }

        // // create/add elements using innerHTML
        // for (let i = 0; i < 3; i++) {
        //     row.innerHTML += `<td><button onclick="handlePlayerButtonPress()">${i == 0 ? player : ''}</button></td>`;
        // }

        tableBody.appendChild(row);
    }
}

//<button onclick="addStudent()">Add Student</button>