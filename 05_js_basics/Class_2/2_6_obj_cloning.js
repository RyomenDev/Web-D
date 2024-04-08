// obj cloning -- copying

let obj1 = { a: 2, b: 3, c: 4 };
let obj2 = {};

// iteration

for (let key in obj1) {
  obj2[key] = obj1[key];
}
console.log(obj2);

// assign
// multiple objects copy together
let obj11={value:25};
let obj3 = Object.assign({}, obj1,obj11);
console.log(obj3);

// spread
let obj4 = { ...obj1 };
for (let key in obj4) {
  console.log(key, obj4[key]);
}
