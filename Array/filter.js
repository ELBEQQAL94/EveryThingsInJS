//@filter method creates a new array with all elements 
// that pass the test implemented 
// by the provided function.

// examples

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

// expected output: Array ["exuberant", "destruction", "present"]

// Syntax

// filter(callback(ele, index, array, thisArg))

// Parameters

// callback: Function is a predicate, 
// to test each element of the array. 
// Return true to keep the element, 
// false otherwise. It accepts three arguments:

// ele: The current element being processed in the array.

// index (optional): The index of the current element being 
// processed in the array.

// array (optional): The array filter was called upon.

// thisArg (optional): Value to use as this when executing callback.

// return A new array with the elements that pass the test. 
// If no elements pass the test,
// an empty array will be returned.

// Examples

// Filtering out all small values

let filtered = [12, 5, 8, 130, 44].filter(ele => ele >= 10);

// filtered is [12, 130, 44]

// Filtering invalid entries from JSON

var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  var invalidEntries = 0;
  
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
  }
  
  function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true;
    } 
    invalidEntries++;
    return false; 
  }
  
  var arrByID = arr.filter(filterByID);
  
  //console.log('Filtered Array\n', arrByID); 
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  //console.log('Number of Invalid Entries = ', invalidEntries); 
  // Number of Invalid Entries = 5

// Searching in array

var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
}

// console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']

// Refrence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


