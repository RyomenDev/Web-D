//

Async await 
 : speical syntax used to work with promises
 : it makes code easy to read and write
 : return promise

let fun1 = async () => {
    return 7;
  };

let a1=await fun1(); 
  await : other line will only exectute if this line is executed
  : only vaild if inside aync


console.log(fun1()); //Promise {<fulfilled>: 7}

//

aync function utility{

    let promise1;
    let promise2;

    let p1=await promise1;
    let p2=await promise2;

    return [p1,p2];
}