// parallel promise

let myPromise1 = new Promise(function (resolve, reject) {
  console.log("Promise1 control :: myPromise1");
  setTimeout(() => {
    console.log("inside promise-1 inside timeout");
    // resolve(1998);
  }, 5000);
  //   reject(new Error("Promise1 rejected due to Error"));
});

console.log("pehla");
// console.log(`myPromise1`, myPromise1);

// setTimeout(() => {
//   console.log("after promise1 timeout");
//   console.log(`myPromise1`, myPromise1);
// }, 5000);

let myPromise2 = new Promise(function (resolve, reject) {
  console.log("Promise2 control :: myPromise2");
  setTimeout(() => {
    console.log("inside promise-2 inside timeout");
  }, 2000);
});

// console.log(`myPromise1`, myPromise2);

// setTimeout(() => {
//   console.log("after promise2 timeout");
//   console.log(`myPromise2 `, myPromise2);
// }, 2000);
