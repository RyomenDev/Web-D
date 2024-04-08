//

// Async : setTimeOut

features of Async code
    : clean & concise
    : better error handling
    : easier debugging


:: Promise --> to parallel execute something in     background in js
    : pending
    : fulfilled ->
            then() = handles the result(return) of promise 
    : rejected
            catch() = handles the error(throw) of promise

--> represents completion (or failure) of an asynchronous operation

:: Promise.prototype.then()
:: Promise.

// let myPromise = new Promise((resolve, reject) => {
let myPromise = new Promise(function(resolve, reject)  {
    // aysnc function
  console.log(('Promise control :: myPromise'));
    resolve(1998);
    // reject(new Error("Promise rejected due to Error"));
})
console.log('pehla');

// promise parallel in 4_practical_2


resolve:: 
reject ::

let meraPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("inside meraPromise1 inside timeout");
      resolve(233);
    }, 5000);
    //   reject(new Error("error in meraPromise1"));
  });
  
  meraPromise1.then((value) => {
    console.log(value);
    // meraPromise2 ....{}
  });
  
  meraPromise1.catch((error) => {
    console.log("recieved error");
  });