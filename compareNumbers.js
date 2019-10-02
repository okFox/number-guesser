//const correctNumber = 7;



const compareNumbers = (correctNumber, guess) => {
    if (guess === correctNumber) {
        return 0; 
    } else if (guess < correctNumber){
        return -1;
    } else {
        return 1;
    }
  
// keep track of number of guesses

};


export default compareNumbers;