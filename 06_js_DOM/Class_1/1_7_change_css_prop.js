//
// how to change CSS proprties

.style
.cssText
.setAttribute
.className
.classList

// CSS-specificity - inline>internal>external

//

// style
let content=$0; // after selecting an element
content.style.color='red'; // change to red
content.style.backgroundColor='red'; // bg change to white
// drawback : modify one css property at a single time

//

//cssText
let content=$0; // after selecting an element
content.style.cssText="color:green; background-color:yellow; font-size:4em;"; 

//

// setAttribute : also to add id class ,etc
content.setAttribute('style',"color:red; background-color:white;");

content.setAttribute("id","headID;");

//

// className : if content have className
content.className; // give string of all className
let classNames=content.className.split(' '); // gives array with an empty string at 1st

let classNames=content.className.trim().split(' '); // gives array 

//

//

// classList
content.classList; // gives array of all classNames (list of items)
add(); // to push
remove();
toggle(); // if element id not present it will add , if present then delete
contains(); // if present = True else false
