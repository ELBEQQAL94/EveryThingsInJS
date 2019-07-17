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

// run to some examples

// ** Convert string to array
const result = Array.from('foo');
// log >>> ['f', 'o', 'o']

// ** Remove repeate items
const set = new Set(['foo','bar','baz','foo']);
Array.from(set);
// >>> ['foo','bar','baz']

// ** Array from Map constructor
const map = new Map([[1,2],[2,4],[4,8]]);
Array.from(map)
// [[1,2],[2,4],[4,8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];


Array.from(mapper.keys());
// ['1', '2'];

// ** Array from an Array-like object (arguments)

function f() {
    return Array.from(arguments);
}
  
f(1, 2, 3);
  
// [ 1, 2, 3 ]

// refrence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

