//@ Array.concat()
// The concat() method is used to merge two or more arrays. 
// This method does not change the existing arrays, 
// but instead returns a new array.

// examples

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

// expected output: Array ["a", "b", "c", "d", "e", "f"]

// Syntaxe Array.contact(value_1, ... value_n);

// desc

// value(optional): Arrays and/or values to concatenate into a new array. 
// If all valueN parameters are omitted, 
// concat returns a shallow copy of the existing array on which it is called. 

// return a new array instance

// Note: Concatenating array(s)/value(s) 
// will leave the originals untouched. 
// Furthermore, 
// any operation on the new array 
// (except operations on elements which are object references) 
// will have no effect on the original arrays, 
// and vice versa.

// Examples

// Concatenating two arrays

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

letters.concat(numbers);

// result in ['a', 'b', 'c', 1, 2, 3]

// Concatenating three arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Concatenating values to an array

const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, [2, 3]);

// results in ['a', 'b', 'c', 1, 2, 3]

// Concatenating nested arrays

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

// results in [[1, 4], 2, [3]]

// refrence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat