
// promises

console.log("hello");

function sync1() {
  document.write("abc");
}

sync1();

// async
setTimeout(() => {
  //   document.write("def");
  console.log("HOOOOOO timeout");
}, 2000);

console.log("after timeout");

//

//

// promise

let myPromise = new Promise(function (resolve, reject) {
  console.log("Promise control :: myPromise");
  setTimeout(() => {
    console.log("inside promise inside timeout");
    // resolve(1998);
    reject(new Error("Promise rejected due to Error"));
  }, 5000);
  //   reject(new Error("Promise rejected due to Error"));
});

console.log("pehla");
console.log(`myPromise`, myPromise);

setTimeout(() => {
  console.log("after promise timeout 2000");
  console.log(`myPromise`, myPromise);
}, 2000);

setTimeout(() => {
  console.log("after promise timeout 5000");
  console.log(`myPromise`, myPromise);
}, 5000);
