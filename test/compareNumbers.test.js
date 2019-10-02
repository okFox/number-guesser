// IMPORT MODULES under test here:
// import example from '../src/example.js';

import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

//test for correct
test('will return true if user input returns 0 ', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const guess = 0;
    const magicNumber = 7;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = compareNumbers(magicNumber, guess);
    
    
    //Assert
    // Make assertions about what is expected valid result
    
    assert.equal(result, true);
});


//test for 1 (too high)




//test for -1 (too low)