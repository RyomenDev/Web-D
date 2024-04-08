
// controlled components.
    maintain state inside components. 

    : whole state track in form data.
    : in controlled components we maintain state of every element in itself. [by value attribute]

    <input
    type="text"
    placeholder="first name"
    // onChange={firstNameChangeHandler}
    onChange={changeHandler}
    name="firstName"
    className="bg-red-100"
    value={formData.firstName}
    />

---------------------------------------------------------

formData update -> useState -> update -> re-render -> jsx code run -> <input value={formData.xyz}/> , value from formData will get copy in value.

---------------------------------------------------------

input, textarea, label

    for normal cases value field is used,
    but in check box checked field is used.

---------------------------------------------------------

 // destructuring
 const { name, value, checked, type } = event.target;

---------------------------------------------------------

if radio buttons have same name : can select only one of them .
if different name : can select multiple of them.

---------------------------------------------------------

<button>Submit</button> 
    : by default type of button is submit 


on clicking the button an event of onSubmit type will trigger.
use handler for that event in form.
---------------------------------------------------------