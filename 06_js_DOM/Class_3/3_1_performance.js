
// performance

performance
 : memory speed of code
 : how to write efficient and performing code
 : event loop

const t0 = performance.now();

Reflow : when new element is added to the DOM , a calculation is done to see where to place the element - computation intesive task
Repaint : after reflow , the browser has to redraw the page (pixel by pixel)

: epaint faster then reflow
// good practice 
    minimize reflow and repaint

//

// Documnet Fragment
: it is a light weight document object , temp container for elements that are then added to the DOM
: paragraphs are first added to a document fragment and then added to the DOM
: reflow and repaint do not happen when added in this

:: when this documnet fragments are added in actutal document , the browser does not have to do reflow and repaint (only 1 reflow and repaint)

const t4 = performance.now();

let fragment = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
  let element = document.createElement("p");
  element.textContent = "3:: This is a new paragraph" + i;
  myDiv.appendChild(element);
}

document.body.appendChild(fragment);

const t5 = performance.now();
console.log("3rd this takes in ms", t5 - t4)