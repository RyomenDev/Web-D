// Types in JS : primitive(or value) types AND reference type (or object)

// primitive
let a = 10;
b = a; // copy by value
a++;
console.log(a, b); // 11,10

// reference type
let c = { value: 10 }; // object
let d = c; // point to same address , copy by address
c.value++;
console.log(c, d); // { value: 11 } { value: 11 }
console.log(c.value, d.value); // 11 11

// primitive
let a1 = 1;
increment = (a1) => {
  // function increment(a1) {
  a1++; //2
};
increment(a1);
console.log(a1); //1
