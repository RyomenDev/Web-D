
//
// Remove child
.removeChild();
// should know parent element , and the element to remove
parent.removeChild(childElement);

// to get childElement
let childElement=document.querySelector('.tempText');
// to get parentElement
let parentElement=document.querySelector('.content');

parentElement.removeChild(childElement);
// content.remove('.tempText');

//

//

// Deleting without parent
parent=childElement.parent;
child.parent.remove(child);
