//

closurēs 
    : combination of function bundled together with references to its surrounding state (lexical environment)
    : it gives access to an outer function's scope from an inner function
    : in js, closurēs are created every time a function is created, at function creation time

    : global variables can be made local (private) with closures

---------------------------------

let -> block scope
const ->block scope
var --> global scope (out of block) : function specific

---------------------------------
function init() {
        var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
          // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
    }
init();

//

    :::: closures ::::

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  
---------------------------

: name vairable already stored in context 
: all the variables in the context are available inside the closure
: variables which are used by inner function are already stored in context

: context is stored in closure
: context stores the function logic , variables and parameters that are to be used by inner function

: context saves the memory(ref) of variables and functions  (not as copy)  // important

---------------------------

variables which are used by inner function are called as free variables 

// hw
// classes and export modules