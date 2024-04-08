//

Phases of an event  
    : capturing phase   (searching)
    : at target phase   (at target)
    : bubbling phase    (get back)

use-capture :: (for phase)
         by-defult: bubbling phase

// true value : on the capturing phase
.addEventListener(event, listener, true) 

// 

The event object :>
    when an event is triggered, it is passed to the event handler as an argument.

//

//

//

 :: the default action

 => preventedDefault();

anchor tag : open link ; it can be prevented by preventedDefault();

let links=document.querySelectorAll("a");
let thirdLink=links[2];
function preventDef(event){
  event.preventDefault();
}
thirdLink.addEventListener("click",preventDef);

//

//

//



