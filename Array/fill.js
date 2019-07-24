// Array.fill()
// disc 
// The fill() method fills (modifies) 
// all the elements of an array from a start index 
// (default zero) to an end index 
// (default array length) with a static value. 
// It returns the modified array.

// Examples

var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
// console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

// console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

// Syntax
// arr.fill(value, start, end)

// value: Value to fill an array.
// start (optional): Start index, defaults to 0.
// end (optional): End index, defaults to this.length

// return The modified array.

// Examples

[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// refrence https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill