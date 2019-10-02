import compareNumbers from './compareNumbers.js';
//const correctNumber = 7;

// initialize DOM elements

const currentGuess = document.getElementById('guess');
const submitButton = document.getElementById('submit-button');
const remGuesses = document.getElementById('rem-guesses');
const userReply = document.getElementById('reply-to-user');


let numGuesses = 4;

//random number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let correctNumber = Math.floor(Math.random() * 20) + 1;

console.log(correctNumber);





// event handling

submitButton.addEventListener('click', () => {

// change input to integer
    let guess = parseInt(currentGuess.value); 
   
 
// '-=' Sums up left and right operand values and assign the result to the left operand.
    numGuesses -= 1;


// messages for user
    let numTriesReply = 'You have ' + numGuesses + ' guesses left';
    let guessReply = '';

// comparing guesses with compareNumbers()

    if ((compareNumbers(correctNumber, guess) === 1) && (numGuesses > 0)) {
        guessReply = 'You guessed too high!';
        //trying to clear input box after incorrect entry
        
    }
    else if ((compareNumbers(correctNumber, guess) === -1) && (numGuesses > 0)) {
        guessReply = 'You guessed too low';
    }

    else if ((compareNumbers(correctNumber, guess) === 0) /*&& (numGuesses > 0)*/) {
        guessReply = 'Good Job!  You guessed correctly.';
        submitButton.disabled = true;
        document.getElementById('rem-guesses').style.opacity = 0;
      
    }
//  disables button if guessed correctly or tries limit reached
    else {
        submitButton.disabled = true;
        guessReply = 'Sorry all your guesses are used up.';
    }
// shows the user how many guesses they have left and responds to guesses.
    remGuesses.textContent = numTriesReply;
    userReply.textContent = guessReply;    
});

