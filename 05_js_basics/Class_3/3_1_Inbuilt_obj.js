// Math | string | Date & time |  
// (mdn)

console.log(Math.abs(-6));

// string

let name1 = "name_1";
let name2 = new String("name_2"); // object
console.log(typeof name1, typeof name2);

// if . is used with primitive data types js will act that data as object
console.log(name1.length);
console.log(typeof name1, typeof name2); // string object

//

//

//

// template literals and escape sequences

let message1 = 'hello how " are u?';
let message2 = `how 'are "u ${name1}
  well or not?`;

console.log(message2);

//

//

// date and time

let date=new Date(); // 2024-02-11T06:28:49.752Z
console.log(date);

let date2=new Date(1998,11,20,7); //1998-12-20T01:30:00.000Z
date2.setFullYear(1947);  // 1947-12-20T01:30:00.000Z
console.log(date2);

