// Async await

// let fun = async () => {
//   return 7; // return "abcd"
// };
// console.log(fun());

async function utility() {
  //
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promise1 hello");
      resolve("Delhi hot weather");
    }, 3000);
  });

  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promise2 bye");
      resolve("Mumbai cool weather");
    }, 1000);
  });

  let p1 = await promise1;
  let p2 = await promise2; // execute only if previous line execute

  console.log(p1, p2);

  return [p1, p2];
}

utility();
