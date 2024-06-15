class MathPlayer {
    /**
     * MathPlayer constructor
     * @param {string} name name of the player
     */
    constructor(name) {
        this.name = name;
        this.assignmentsAnsweredCorrectly = 0;
        this.assignmentsAnsweredIncorrectly = 0;
        this.assignment = null;
    }

    getAssignmentsAnswered() {
        return this.assignmentsAnsweredCorrectly + this.assignmentsAnsweredIncorrectly;
    }
}

export class MathGame {
    /**
     * MathGame constructor
     * @param {number} numberOfStudents number of student
     * @param {number} numberOfQuestions number of questions
     * @param {Array[string]} espIds ids of the ESPs in the game network
     * @param {Array[string]} players names of the players playing the game
     */
    constructor(numberOfStudents, numberOfQuestions, espIds, players) {
        this.numberOfStudents = numberOfStudents;
        this.numberOfQuestions = numberOfQuestions;
        this.esps = espIds;

        this.__players = {};
        for (const player of players) {
            this.__players[player] = new MathPlayer(player, this.numberOfQuestions);
        }
    }

    /**
     * Get player from given name
     * @param {string} player player name
     * @returns {MathPlayer} player object of the named player
     */
    getPlayer(player) {
        // console.log(this.__players)
        return this.__players[player]
    }

    /**
     * Add assignment to player for later retrieval to check answers
     * @param {string} player player name
     * @param {object} assignment assignment information
     */
    addPlayerAssignment(player, assignment) {
        // Shorthand of the if statement below
        // this.__players[player]?.assignment = assignment

        if (this.__players[player]) {
            this.__players[player].assignment = assignment
        }
    }

    /**
     * Get assignment added to player and removes it from said player
     * @param {string} player player name
     * @returns assignment object
     */
    consumePlayerAssignment(player) {
        // Shorthands of the if statement below
        // return this.__players[player]?.assignment
        // return this.__players[player] ? this.__players[player].assignment : null;

        if (this.__players[player]) {
            const assignment = this.__players[player].assignment;
            this.__players[player].assignment = null;

            return assignment;
        } else {
            return null;
        }
    }

    /**
     * Update the player's assignment answered counters based on if the assignment has been answered correctly or not
     * @param {string} player player name
     * @param {boolean} answeredCorrectly predicate of whether the assignment was answered correctly
     * @returns the total number of assignment the given player has answered so far after updating its counters
     */
    updatePlayerAssignmentCounter(player, answeredCorrectly) {
        const playerObject = this.__players[player];
        if (playerObject) {
            if (answeredCorrectly) {
                playerObject.assignmentsAnsweredCorrectly++;
            } else {
                playerObject.assignmentsAnsweredIncorrectly++;
            }

            return playerObject.getAssignmentsAnswered();
        } else {
            return 0;
        }
    }
}
