// array is an object / reference type
// can store difffernt types of data

let array = [1, 4, 5, 7];

array.push(9); // insertion at end
array.unshift(8); // insertion at start

// splice(index,del,elements to add)
array.splice(2, 0, 3, "a"); // in between
array.splice(5, 1, "b"); // with deletion
console.log(array);

//

if (array.indexOf(8) != -1) console.log("present");
console.log(array.includes(8));

console.log(array.indexOf(8, 3)); // search 8 from index 3  //-1

// Array of objects
let courses = [
  { no: 1, name: "a" },
  { no: 2, name: "b" },
];

// console.log(courses.indexOf({no:1,name:'a'}));// -1

/*
Callback function --> function passed in a  function as an argument, ehich is invoked inside the outer function to complete some kind of routine or action.
*/

// callback function for array of objects
let course = courses.find(function (course) {
  return course.name == "a";
}); // return object
console.log(course); //{ no: 1, name: 'a' }

//

let course1 = courses.find((course) => {
  return course.name == "a";
});
console.log(course1); //{ no: 1, name: 'a' }

//

let course2 = courses.find((c) => c.name == "a");
console.log(course2); //{ no: 1, name: 'a' }
