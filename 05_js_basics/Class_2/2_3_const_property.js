// Constructor function

// function is also an object in js

function CreateObj(len, bre) {
  (this.length = len), (this.breath = bre);
}

let obj1 = new CreateObj(5, 6); // new create empty object
// console.log(obj1); // CreateObj { length: 5, breath: 6 }
// console.log(obj1.constructor);  // [Function: CreateObj]
// console.log(CreateObj.constructor); // [Function: Function]

let Rectangle1 = new Function(
  "length",
  "breadth",
  `
    this.length = length; 
    this.breadth = breadth;
`
);

// obj creation using Rectangle1
let rect = new Rectangle1(2, 4);
console.log(rect); //anonymous { length: 2, breadth: 4 }
console.log(rect.constructor); //[Function: anonymous]

//

//

//


