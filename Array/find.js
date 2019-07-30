// find
/* The find() method returns the value 
of the first element in the array 
that satisfies the provided 
testing function. 
Otherwise undefined is returned. 
*/

// Examples
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

// console.log(found);
// expected output: 12

// Syntax
// find(callback(element,index, array), thisArg)

// callback: Function to execute on each value in the array, taking three arguments: 
       // element: The current element being processed in the array.
       // index (optional): The index of the current element being processed in the array.
       // array (optional): The array find was called upon. 
// thisArg (optional): Optional object to use as this when executing callback.

// return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

// Examples


// Find an object in an array by one of its properties

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries(fruit) { 
    return fruit.name === 'cherries';
}

// console.log(inventory.find(isCherries)); 
// { name: 'cherries', quantity: 5 }

// Find a prime number in an array

function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
// console.log([4, 6, 8, 12].find(isPrime)); 
// undefined, not found

// console.log([4, 5, 8, 12].find(isPrime)); 
// 5

// Refrence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find