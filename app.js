import compareNumbers from './compareNumbers.js';
const correctNumber = 7;

// initialize DOM elements

const currentGuess = document.getElementById('guess');
const submitButton = document.getElementById('submit-button');
const remGuesses = document.getElementById('rem-guesses');
const userReply = document.getElementById('reply-to-user');


let numGuesses = 4;







// event handling

currentGuess.addEventListener('click', () => {

// change input to integer
    let guess = parseInt(guess.value); 
   
 
// '-=' Sums up left and right operand values and assign the result to the left operand.
    numGuesses -= 1;


// messages for user
    let remGuesses = 'You have' + numGuesses + ' guesses left';
    let guessReply = '';

// comparing guesses with compareNumbers()

    if ((compareNumbers(guess, correctNumber) === 1) && (numGuesses > 0)) {
        guessReply = 'You guessed too high!';
    }
    else if ((compareNumbers(guess, correctNumber) === -1) && (numGuesses > 0)) {
        guessReply = 'You guessed too low';
    }

    else if ((compareNumbers(guess, correctNumber) === 0) && (numGuesses > 0)) {
        guessReply = 'Good Job!  You guessed correctly.';
    }
//  disables button if guessed correctly or tries limit reached
    else {
        submitButton.disabled = true;
        guessReply = 'Sorry all your guesses are used up.';
    }
// shows the user how many guesses they have left and responds to guesses.
    remGuesses.textContent = remGuesses;
    userReply.textContent = guessReply;    
});

