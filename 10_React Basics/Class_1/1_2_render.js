// Render & Return

// core Syntax & set up $ JSX
// Components
// data

=> Components 
        : reusable piece of code that performs a specific task.

set-UP 
        : install node js 

----------------
npx create-react-app my-app // no upperCase
cd my-app       // directory change
npm start 
---------------

package.json =>
        : All dependencies are listed here.
        : All scripts are listed here.

Entry Point : index.js

--------------

Render  : react renders HTML to the web page by using a function called render().
        : process of describing a UI based on app's current state and props.

diff b/w render & return =>
       : render is called only once in the beginning to render a react element to the DOM.
       : read props & state and return our JSX code to root component of our app.
       : cannot change the state,cannot cause side effects(making http request).
       : purpose(to display specified HTML code inside specified HTML element)

       : return is called whenever the state of the component changes and the component needs to be re-rendered.
       : return is used inside a function component to return JSX to be rendered based on component's current state or props.



