//

use effect hook=>
    : to manage side effects
    side effects -> helps establish communication with external resources , such as local storage and support utilizing APIs.

useEffect(callback,dependencies)

---------------------------------------------------

the component in which use effect hook is used is called as the parent component, after render of parent component, use effect hook will be called(execute).

sideEffect : task of useEffect 

---------------------------------------------------

useEffect(callback,array of dependencies) // parameters

---------------------------------------------------

state shows value of particular variable.
sideEffect shows value of particular function.
---------------------------------------------------

variation->1
seEffect(() => {
    console.log("UI rendering done.");
    }); //at every render it execute.  

---------------------------------------------------

variation->2
useEffect(() => {
    console.log("UI rendering done.");
  }, []); // only at first render - pass second parameter as empty

---------------------------------------------------

variation->3
  // first render + when dependency change
  useEffect(() => {
    console.log("Change Observed.");
    // }, [text]);
  }, [name, text]); // any number of parameters

---------------------------------------------------

variation->4
  // use listener on onChange -> remove previous listener before adding new listener
  useEffect(() => {
    // first
    console.log("UI rendering done.");
    return () => {
      // second
      console.log("listener removed");
    };
  }, [text]); //third Dependency list , dependency value


