//
// creating text-Node

let content = document.querySelector(".paraClass");

let newChild = document.createElement("p");
let textPara = document.createTextNode("This is a new paragraph");

newChild.appendChild(textPara);
content.appendChild(newChild); // At the END

//

//

// FAST WAY

let content = document.querySelector(".paraClass");
let mypara = document.createElement("p");
mypara.textContent = "This is a new paragraph";

content.appendChild(mypara); // last sibling (at end)

//

//

//

// to append new element at any position
insertAdjacentHTML(); // method
// to position newly created element
// has to be called with two arguments (location/position and html text/content to insert) [where/what]
// POSITION : beforebegin, afterbegin, beforeend,afterend

let content = document.querySelector(".paraClass");
let newAdd = document.createElement("h3");
newAdd.textContent("abcd");
content.insertAdjacentHTML("afterbegin", newAdd);
