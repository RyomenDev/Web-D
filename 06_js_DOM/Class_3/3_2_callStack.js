
JS :: single threaded language

function addPara() {
    let para=document.createElement('p');
    para.textContent='JS is single';
    document.body.appendChild(para);
}

function appendNewMSg(){
    let para=document.createElement('p');
    para.textContent="kya haal chal";
    document.body.appendChild(para);
}

observation ::>
    # js
    :: run to completion
    :: dosnt execute multiple line / function at same time
    ::  execution line by line
    ::  LIFO : stack implementation when a function is invoked 
    :: sychronous in nature


addPara();
appendNewMSg();
    
Output::
    JS is single
    kya haal chal

//

//

::> addEventListener is not Synchronous

// Event Loop
if an addEventListener is added it will go to event queue and when clicked , it will execute only if call stack is empty , if there is no sychronous execution not happening.
--------------------------
console.log('ABCD');
element.addEventListener('click',function(){
    console.log('1234');
})
console.log('xyz');
--------------------------
//

//
--------------------------

Async code : depends on JS event loop
: any async code is handled by browser
: it will wait in event queue









