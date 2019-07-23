// @Array.entries
// desc 

// The entries() method returns a new Array Iterator object that contains 
// the key/value pairs for each index in the array.

// examples

var array1 = ['a', 'b', 'c'];

var iterator1 = array1.entries();

// expected output: Array [0, "a"]

// expected output: Array [1, "b"]

// Syntaxe
// array.entries()
// return A new Array iterator object.

// Some examples

// Iterating with index and element

const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
  // console.log(index, element);

// 0 'a' 
// 1 'b' 
// 2 'c'

// Using a for…of loop

var b = ['a', 'b', 'c'];
var iterator = b.entries();

for (let e of iterator) {
  // console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

// refrence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries