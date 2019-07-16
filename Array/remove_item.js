// To remove Item in javascript you need to use splice method

// @Array.splice()
//@ desc The splice() method changes the contents of an array 
// by removing or replacing existing elements and/or 
// adding new elements.

// simple example
const items = ["car", "jacket", "banana", "some"];

// we need to remove banana from our array or data base
// after that we should copy our array
const copy_arr = [...items];

// remove banana

// Note before you remove item from array, 

// copy this array using spread operator (...copyArray)

// simple we use our splice method

// splice(index_of_item, numbers of items we want to removed)

// that's it !!

copy_arr.splice(2,1);

// log ==> ["car", "jacket", "some"]

// @args and options
// splice(start, delete_count, items)
// @ desc

// start: The index at which to start changing the array. 
// If greater than the length of the array, 
// start will be set to the length of the array. 
// If negative, 
// it will begin that many elements from the end of the array (with origin -1, meaning -n is the index of the nth last element and is therefore equivalent to the index of array.length - n). 
// If the absolute value of start is greater than the length of the array, 
// it will begin from index 0 

// delete_count (optional): An integer indicating the number of elements in the array to remove from start. 
// If deleteCount is omitted, or if its value is equal to or larger than array.
// length - start (that is, if it is equal to or greater than the number of elements left in the array, 
// starting at start), then all the elements from start to the end of the array will be deleted.

// If deleteCount is 0 or negative, no elements are removed. 
// In this case, you should specify at least one new element.

// item1, item2 ... (optional): The elements to add to the array, beginning from start. 
// If you do not specify any elements, 
// splice() will only remove elements from the array.  

// @return value
// return array

// insert item in array

copy_arr.splice(2,0,"newItem");

// log ==> [ 'car', 'jacket', 'newItem', 'some' ]

// replace item
copy_arr.splice(2, 1, 'replaceItem');

// log ==> [ 'car', 'jacket', 'replaceItem', 'some' ]

// conclusion

// splice method give us 

// remove item
// add item
// replace item


// resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// Supported: https://caniuse.com/#search=splice
//@ end..