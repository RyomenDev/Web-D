
// sorting

let arr3 = [3, 5, 2, 7, 9, 8, 1, 3];
arr3.sort(); // internally string
console.log(arr3);
 
arr3.reverse();

let arr1 = [
  { id: 3, name: "c" },
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];
// console.log(arr1);

arr1.sort((a, b) => {
  return a.id - b.id;
});

console.log(arr1);
