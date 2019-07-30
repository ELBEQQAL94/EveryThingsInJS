// @Array.findIndex()

// The findIndex() method returns the index of 
// the first element in the array 
// that satisfies the provided testing function. 
// Otherwise, it returns -1, 
// indicating that no element passed the test.

// examples

var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

// console.log(array1.findIndex(isLargeNumber));

// Syntax

// findIndex(callback(element, index, array), thisArg)

// callback: A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found. It takes three arguments: 

   // element: The current element being processed in the array.
   // index (optional): The index of the current element being processed in the array.
   // array (optional): The array findIndex was called upon.
// thisArg: Optional object to use as this when executing callback.

// return: The index of the first element in the array that passes the test. Otherwise, -1.

// Examples

// Find the index of a prime number in an array

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start < 1) {
        return false;
      } else {
        start++;
      }
    }
    return element > 2;
  }
  
// console.log([4, 6, 8, 12].findIndex(isPrime)); 
// -1, not found
// console.log([4, 6, 7, 12].findIndex(isPrime)); 
// 2 (array[2] is 7)

// Find index using arrow function

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

// console.log(index); // 3
// console.log(fruits[index]); 
// blueberries

// refrence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex