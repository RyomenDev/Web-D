//

// filtering in array

let arr = [1, 2, -1, 5, -3, -2, 8, 5];

let arr1 = arr.filter((val) => val > 0);
console.log(arr1);

//mapping

let arr2 = arr.map((val) => val * 2);
// console.log(arr2);

let arr3 = arr.map((val) => (val > 0 ? "student" + val : val));
console.log(arr3);

// let arr4 = arr1.map((val) => {
//   return { value: val };
// });
let arr4 = arr1.map((val) => {value: val});
console.log(arr4);
