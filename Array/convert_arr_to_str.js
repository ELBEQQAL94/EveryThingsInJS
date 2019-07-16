// turn string to an iterable array or copied array

// @Array.from()

// desc

// The Array.from() method creates a new, 
// shallow-copied Array instance from an array-like or 
// iterable object.

// example

const str = 'hello world!';

// Array.from(str)
// log ==> [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]

// we can also change our array using call back function

// Array.from([1,2,3], x => x + x);
// log ===> [2,4,6]

// note: you can use length to count your array

// @Array.from(arrayLike, mapFn, thisArg)
// desc

// > arrayLike: An array-like or iterable object to convert to an array.
// > mapFn (optional): Map function to call on every element of the array.
// > thisArg (optional): Value to use as this when executing mapFn.

// @return: return a new array instance.

