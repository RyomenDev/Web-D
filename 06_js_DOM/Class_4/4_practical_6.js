//

// closurēs

let name = "xyz";

function init() {
  {
    let name = "abc";
    // var name = "abc";
    var name1 = "hehe"; // function specific
  }
  //   var name1 = "zzzzz";
  console.log(name1);
  var name = "Mozilla";

  function displayName() {
    // let name = "pqrs";
    console.log(name);

    var name1 = "hahaha";
    console.log(name1);
  }
  console.log(name1);
  return displayName;
}
// console.log(name1); // error
let a = init(); // return displayName
// at this point "name" is already distroyed as the function ended -  so ecpected : undefined

a(); // Mozilla
