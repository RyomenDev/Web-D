// adding 5 para

console.log("performance t3>t2>t1 i>=100");

const t0 = performance.now();

for (let i = 1; i <= 3; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "1:: This is a new paragraph" + i;
  document.body.appendChild(newElement);
}

const t1 = performance.now();
console.log("1st Time taken in ms", t1 - t0);

// optimising
const t2 = performance.now();

let myDiv = document.createElement("div");
for (let i = 1; i <= 3; i++) {
  let element = document.createElement("p");
  element.innerHTML = "2:: This is a new paragraph" + i;
  myDiv.appendChild(element);
}
document.body.appendChild(myDiv);

const t3 = performance.now();
console.log("2nd this takes in ms", t3 - t2);

//

//

// document fragment

const t4 = performance.now();

let fragment = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
  let element = document.createElement("p");
  element.textContent = "3:: This is a new paragraph" + i;
  myDiv.appendChild(element);
}

document.body.appendChild(fragment);

const t5 = performance.now();
console.log("3rd this takes in ms", t5 - t4);
