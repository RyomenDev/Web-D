//
:: Avoid to many Events = to save memory

function paraStatus(event) {
    // console.log(`i have clicked para.`);
    console.log(`i have clicked para. ${event.target.textContent}`);
  }
  
  let myDiv = document.createElement("div");
  
  for (let i = 1; i <= 7; i++) {
    let newElement = document.createElement("p");
    newElement.textContent = `this is para ${i}`;
  
    // newElement.addEventListener("click", paraStatus);
    myDiv.appendChild(newElement);
  }
  myDiv.addEventListener("click", paraStatus); //  more optimized but loses para individuality : solve using phase
  
  document.body.appendChild(myDiv);
  // adding a child in the documnent itself throws ERROR
  // bcoz document can only have a <HTML> element, all other elements are child pf <HTML> element

//

//

// Event Target property
console.log(`i have clicked para. ${event.target.textContent}`);

    it prints the text content of the clicked paragraph

-----------------------
<artcle id="myArticle">
    <p>
        PQRS
        <span>abcd</span>
        <span>wxyz</span>
    </p>
</article>
------------------------

let element=document.querySelector("#myArticle");
element.addEventListener("click",function(event){
    // to prevent p tag form printing : filtering
  if (event.target.nodeName === "SPAN")
    console.log(`click on span ${event.target.textContent}`);
})

if same used on span : provide all text content of the clicked span

//

//

// DOM content loaded
DOM content loaded event is fired when the HTML document has been completely parsed, and all deferred scripts, stylesheets, and external resources such as images and frames have been loaded.

// for run in head in safe mode
<script>
    document.addEventListener("DOMContentLoaded", function(event) {
        ---------
        code of js
        -------
    })
</script>
