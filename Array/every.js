// @Array.every()
// desc 
// The every() method tests whether 
// all elements in the array pass 
// the test implemented by the provided function. 
// It returns a Boolean value. 

// Note:  This method returns true for any condition put on an empty array.

// Examples
function isBelowThreshold(currentValue) {
    return currentValue < 40;
}
  
var array1 = [1, 30, 39, 29, 10, 13];
  
// console.log(array1.every(isBelowThreshold));
// expected output: true

// Syntaxe
// arr.every(callback(element[, index[, array]])[, thisArg])

// Desc

// callback: A function to test for each element, taking three arguments
    // element
    // The current element being processed in the array.

    // index (Optional)
    // The index of the current element being processed in the array.
    
    // array (optional)
    // The array every was called upon.

    // thisArg (Optional)
    // A value to use as this when executing callback.

// return true if the callback function returns a truthy value for every array element. Otherwise, false

// Examples

// Testing size of all array elements

// The following example tests whether all elements in the array are bigger than 10.

function isBigEnough(element, index, array) {
    return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnough);   // false

[12, 54, 18, 130, 44].every(isBigEnough); // true

// Using arrow functions

[12, 5, 8, 130, 44].every(x => x >= 10); // false

[12, 54, 18, 130, 44].every(x => x >= 10); // true

// refrence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every