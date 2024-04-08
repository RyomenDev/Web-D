// Phases of events (2_3_phases_of_events)

const content2 = document.querySelector("#wrapper");

function wrapperEvent(event) {
  console.log(event);
  console.log(event.eventPhase);
}
content2.addEventListener("click", wrapperEvent);

//

// prevent default

let links = document.querySelectorAll("a");
let firstLink = links[0];
function preventDef(event) {
  event.preventDefault();
}
firstLink.addEventListener("click", preventDef);

//

//

// :: Avoid to many Events

function myFun() {
  console.log(`i have clicked para. ${event.target.textContent}`);
}

let myDiv = document.createElement("div");

for (let i = 1; i <= 7; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = `this is para ${i}`;

  // newElement.addEventListener("click", myFun);
  myDiv.appendChild(newElement);
}
myDiv.addEventListener("click", myFun); //  more optimized  more optimized but loses para individuality

document.body.appendChild(myDiv);

//

//

// problem with span
let element = document.querySelector("#myArticle");
element.addEventListener("click", function (event) {
  // to prevent p tag form printing : filtering
  // if (event.target.tagName.toLowerCase() === "span") // OR
  if (event.target.nodeName === "SPAN")
    console.log(`click on span ${event.target.textContent}`);
});
