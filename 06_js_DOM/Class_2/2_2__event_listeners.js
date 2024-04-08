//
// EventListner

1: addEventListener()
2: removeEventListener()
3: dispatchEvent()

we can
: listen to event
: respond to event
: hook into event

//pscedo-code

 event-target.addEventListener(event-type, callback-function, use-capture); 

    :: event-type: string value (like "click")
    :: callback-fuction: function to run when event happens
    :: use-capture: boolean value (true or false)  

//

{/* example */}
//

document.addEventListener("click", function(){
    console.log('i clicked on document');
})

let content=document.querySelector('H1');
content.addEventListener("click", function(){
    content.style.color="blue";
})

//

// other way
function eventHandler(){
    content.style.color="blue";
}
let content = document.querySelector("h1");
content.addEventListener("click", eventHandler);

//

//

== type coercion : js tries to convert the items compared to same type 
=== prevent type coercion 

//

//

// removeEventListner()

removeEventListener() : same function passed as in addeventListner to apply itself
    : same target
    : same event type
    : same function (use-capture)

// example

// do not work as it is referring to other function objects
content.removeEventListener("click", function(){
    content.style.color="blue";
})

// works if refer to same function (on sevind way of addeventlistner)
content.removeEventListener("click", eventHandler);

//

// dispatchEvent()

