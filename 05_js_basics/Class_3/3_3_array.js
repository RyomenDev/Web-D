// removing elements from array

let array = [1, 2, 3, 4, 5, 6, 7, 8];

// .. remove from any index
array.splice(4, 1); //(index , no. of ele to del)

// .. removing from end
array.pop(); // 7

// .. remove from begin
array.shift(); // 1

// console.log(array);

// .. Emptying an array

let numbers = array;
// array=[]; // only it erase not its copies (obj)
array.length = 0; // erase all ref
// array.splice(0,array.length); // empty all ref
console.log(array);
console.log(numbers);

// combining & slicing Arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = arr3.slice(2, 5); // index(2,3,4)
// slice (2) from 2 to end
//  slice()  copy of orginal array
console.log(arr4);

//

// spread  operator to combine
let arr5 = [...arr1, "a", ...arr2];
console.log(arr5);
