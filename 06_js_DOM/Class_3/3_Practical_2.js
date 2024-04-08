//
// Call stack

function addPara() {
  let para = document.createElement("p");
  para.textContent = "JS is single";
  document.body.appendChild(para);
}

function appendNewMSg() {
  let para = document.createElement("p");
  para.textContent = "kya haal chal";
  document.body.appendChild(para);
}

// execution line by line
// stack implementation
addPara();
appendNewMSg();

let fun = () => {
    let newElem=document.createElement('p');
    newElem.textContent="TimeOut function";
    document.body.appendChild(newElem);
};

setTimeout(() => {
  console.log("HOOOOOO timeout 4sec");
  fun();
}, 2000);
