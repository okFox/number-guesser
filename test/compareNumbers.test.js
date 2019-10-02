// IMPORT MODULES under test here:
// import example from '../src/example.js';

import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

//test for correct
test('will return 0 if guess is correct ', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const guess = 7;
    const correctNumber = 7;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = compareNumbers(correctNumber, guess);
    
    
    //Assert
    // Make assertions about what is expected valid result
    
    assert.equal(result, 0);
});


//test for 1 (too high)
test('will return 1 if guess is too high ', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const guess = 13;
    const correctNumber = 7;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = compareNumbers(correctNumber, guess);
    
    
    //Assert
    // Make assertions about what is expected valid result
    
    assert.equal(result, 1);
});



//test for -1 (too low)
test('will return -1 if guess is too low ', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const guess = 3;
    const correctNumber = 7;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = compareNumbers(correctNumber, guess);
    
    
    //Assert
    // Make assertions about what is expected valid result
    
    assert.equal(result, -1);
});