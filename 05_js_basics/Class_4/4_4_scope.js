// var - scope in function defined or file defined
// if-else | for loop doesnt effect scope

// let - scope only in the defined code blocks

// const - scope only in the defined code blocks

{
  var a1 = 1; // def in file
  let a2 = 2;
  const a3 = 3;
}
// console.log(a1); //1
// console.log(a2); // Error
// console.log(a3); // Error

function walk() {
  var b = 10;
}
// console.log(b); //Error

const c1 = 10;
var c2 = 11;
let c3 = 12;

function cf1() {
  //   console.log(c1, c2, c3); // error
  const c1 = 20;
  var c2 = 21;
  let c3 = 22;
  console.log(c1, c2, c3);
}

function cf2() {
  console.log(c1, c2, c3);
}
// console.log(c1, c2, c3); // 10 11 12
// cf1(); //20 21 22
// cf2(); //10 11 12

if (true) {
  var d1 = 30;
  let d2 = 31; // not work outside
}
// console.log(d1); //30
