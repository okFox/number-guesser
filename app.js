import compareNumbers from './compareNumbers.js';
const correctNumber = 7;

// initialize DOM elements

const currentGuess = document.getElementById('guess');



// state
//should this be a const or inside a function? check scope...
let remGuesses = document.getElementById('rem-guesses')

//you need to link id=guess with event from submit button

// event handling
currentGuess.addEventListener('click', () => {
 
    compareNumbers();



});