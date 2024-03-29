// @ Array.of
// desc

// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
// The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, 
// whereas Array(7) creates an empty array with
// a length property of 7 
// (Note: this implies an array of 7 empty slots, 
// not slots with actual undefined values).

// some examples

Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // array of 7 empty slots
Array(1, 2, 3);    // [1, 2, 3]

// Syntax
// Array.of(ele_1, ele_2, ...ele_n)

// desc
// ele: Elements of which to create the array.

// return: A new Array instance.

// examples

Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]

// refrence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of