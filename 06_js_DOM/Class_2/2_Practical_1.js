//
// 2_2_event_listners
console.log("hello");

// addEventListner

// let content = document.querySelector("h1");
// content.addEventListener("click", function () {
//   content.setAttribute("style", "color:red; background-color:yellow;");
// });

function eventHandler() {
  content1.setAttribute("style", "color:red; background-color:yellow;");
}
let content1 = document.querySelector("h1");
content1.addEventListener("click", eventHandler);

//

//

// removeEventListener

//

// works if refered to same function object
content1.removeEventListener("click", eventHandler);

//

//

