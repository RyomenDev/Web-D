// default parameters
// at ends
function sum(a, b = 2, c = 3) {
  return a + b + c;
}
console.log(sum(2, undefined, 5)); // 9--> Hack-Bad Practice

let person1 = {
  fName: "John",
  lName: "Doe",
};

function fullName2() {
  // read only
  return `${person1.fName} ${person1.lName}`;
}
console.log(fullName2());

function fullName1(prsn) {
  return prsn.fName + " " + prsn.lName;
}
// console.log(fullName1(person1)); // John Doe
//

// getter -> access properties
// setter -> change or mutate properties
// both not a function

let person2 = {
  fName: "John",
  lName: "Doe",
  get fullName2() {
    return `${person2.fName} ${person2.lName}`;
  },
  set fullName2(value) {
    // [this.fName, this.lName] = value.split(" ");
    let parts = value.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

console.log(fullName2()); // John Doe
console.log(person2.fullName2); // John Doe
console.log((person2.fullName2 = "Jane Smith")); //Jane Smith
console.log(fullName2()); //John Doe
