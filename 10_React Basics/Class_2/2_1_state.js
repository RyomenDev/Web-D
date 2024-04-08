
Event listener equivalent in React=>
    : React exposes all those default event as props with starts as on.
    : a special type of event listener called an event handler.

----------------------------------------

const [title, setTitle] = useState(props.title);
=> const [getter,function]
// setTitle to change value of title 

function clickHandler() {
    setTitle("Added to Cart");
    console.log("Add to card button clicked");
}

<button onClick={clickHandler}>Add to Cart</button>

:: if clickHandler() used -> auto function call when the main function is called.

----------------------------------------

state : a built-in react object that is used to contain data or information about the component.
    : if UI have data that can be changed and change to be restructured to the UI state is used.
    : per component state is managed.(separately) 

----------------------------------------

useState =>
    : react hook -> allows you to add state a functional component.
    : a built-in react function that is used to initialize the state of a component.
    : it always return an array with two elements - 
        1- value of variables
        2- a function that is used to update the value of variables.
----------------------------------------

useEffect =>
: a built-in react function that is used to perform side effects in a functional component.

----------------------------------------


