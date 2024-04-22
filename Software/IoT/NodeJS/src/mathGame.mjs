export class MathGame {

    /**
     * MathGame constructor 
     * @param {number} numberOfStudents number of students  
     * @param {number} numberOfQuestions number of questions 
     * @param {Array[string]} espIds ids of the ESPs in the game network  
     */


    constructor(numberOfStudents, numberOfQuestions, espIds) {
        this.numberOfStudents = numberOfStudents;
        this.numberOfQuestions = numberOfQuestions;
        this.espIds = espIds;
    }
}
