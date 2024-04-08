// function :
// hoisting : function are put on top - Automatically by js engine - only for function declartion

// function declaration
function run1(val) {
  console.log(`running ${val}`);
}
// run1(2);

//Named function assignment  -> hoisting not work
let fun = function walk(val) {
  console.log(`walking ${val}`);
};
// walk(4); // not work
// fun(3);
let fun1 = fun;
// fun1(6);

// anonymous function assignment -> no hoisting
let fun2 = function () {
  console.log("fun2 ////");
};
// fun2();

let run2 = (val) => {
  console.log(`arrow function ${val}`);
};
// run2(4);

//19:00
function sum(a, b) {
  console.log(arguments); // object
  return a + b;
}
// console.log(sum(2, 3, 7, 8)); // 5

//

// dyamic arguments

function sumD() {
  //(a,b)
  let total = 0;
  for (const value of arguments) total += value;
  return total;
}
// console.log(sumD(2, 3, 4, 5, 1)); //15


// Rest Parameters

function sumA(b, ...a) {
  console.log(a); // ARRAYS [ 3, 4, 5, 1 ]
  return a.reduce((p, c) => p + c, b);
}
console.log(sumA(2, 3, 4, 5, 1)); //15
