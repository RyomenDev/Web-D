let meraPromise1 = new Promise((resolve, reject) => {
  //   resolve(233); // meraPromise2 will execute after this
  setTimeout(() => {
    console.log("inside meraPromise1 inside timeout");
    resolve(233);
  }, 5000);
  // resolve(233); // meraPromise2 will execute before timeout
  //   reject(new Error("error in meraPromise1"));
});

// meraPromise1.then((value) => {
//   console.log(value);
// });

// meraPromise1.catch((error) => {
//   console.log("recieved error");
// });

//

// if one process is to be completed after completition of first
let output = meraPromise1.then((value) => {
  console.log(value);
  let meraPromise2 = new Promise((resolve, reject) => {
    console.log("inside meraPromise2");
    resolve(199);
  });
  return meraPromise2; // to print 199
});

output.then((value) => {
  console.log(value);
});

 
