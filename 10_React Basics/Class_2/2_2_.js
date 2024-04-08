
to Take input

<input type="text" value={newTitle} onChange {functionName}></input>
    setTitle(event.target.value);
    console.log(event.target.value);

onChange : event handler function.
         : req for controlled inputs
         : fires immediately when the input's value changes.


---------------------------------------

set... like setTitle, setAge, setName : schedule a function to be called later. they do not change value on the spot.

---------------------------------------
---------------------------------------

Difference between onChange and onInput=>
: onInput -> onInput event occurs immediately after the content has been changed.
: onChange -> onChange event occurs when the element loses focus.

---------------------------------------

we can get object previous state by using useRef hook.

parent communicate to child using props.
    parent -> child
child communicate to parent using prop function.
    child -> parent (lifting state up)

    : parent created a function which have a object obj(pre take , if that object comes as prop then ...) ,obj pass a prop from parent to child.
    when child want to communicate to parent then child call that function and pass the object obj.

    // App to NewProduct 