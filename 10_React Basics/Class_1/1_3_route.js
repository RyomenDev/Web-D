// ROUTE & Component

JSX : javascript xml 
    => Html in js code

route=>
    : process of navigating b/w different pages of the app without triggering a full page reload.

    types=>
        : Memory router     = history of URL
            --> useful for testing and non-browser environments like react native

        : Browser router    = keep UI in sync
            -->uses 5 HTML history API (pushState,replaceState,popState)

        : Hash router
            -->uses client-side hash routing
            -->uses hash portion of URL to keep UI in sync with URL.


--------------------------------------

react code - user friendly
    : this code is converted into jsx(browser friendly) code .

--------------------------------------

if a function or class is created and want to use it in another file then we need to export it.
And import it in another file where we want to use it.

--------------------------------------

creating Components - Naming : first letter capital of every word

in component file =>
    import "./ItemDate.css";
    let ItemDate = () => {
        return (
          <div>
            {/*  */}
          </div>
        );
      };
    export default ItemDate;

in app.js =>
    import ItemDate from "./component/ItemDate";

    function App() {
    return (
        <div>
        <ItemDate></ItemDate>
        <div>Hello World</div>
        </div>
        );
    }
