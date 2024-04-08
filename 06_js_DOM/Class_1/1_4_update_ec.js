//

// update existing content


innerHTML   : get/set html content, or get return all the desendents
outerHTML   :
textContent : get/set textual content
innerText   : get/set textual content

//

//

let codingEx=document.querySelector('.code-example');

codingEx.innerHTML 
codingEx.innerHTML=' ' 



//

//

textContent,innerText as innerHTML

diifernce:text only text (render tags as text), innerHTML tags also rendered.

//

textcontent & innerText diff:
text content displays elerything including (display : hidden)
innerText avoid them



//

//

// Adding new element/content

//

let content=document.querySelector('.paraClass');
let newChild=document.createElement('span');
content.appendChild(newChild); // At the END

