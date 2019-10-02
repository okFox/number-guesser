//const correctNumber = 7;



const compareNumbers = (correctNumber, guess) => {
    if (guess === correctNumber) {
        return 0; 
    } else if (guess < correctNumber){
        return -1;
    } else {
        return 1;
    }
  
};






/* THIS WORKS
const compareNumbers = (correctNumber, guess) => {
    if (guess === 0) return true;

    return false;
};
*/
export default compareNumbers;