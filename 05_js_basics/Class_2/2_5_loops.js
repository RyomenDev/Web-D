// iterating through objects

// for-in

let rectangle = {
  length: 2,
  breath: 3,
};

for (let key in rectangle) {
  // key by key
  // value by rectangle[key]
  console.log(key, rectangle[key]);
}

// for-of
// only on iterables : array , map
// not on objects

let arr = [1, 2, 3, 4, 5];
for (const it of arr) {
  console.log(it);
}

if ("length" in rectangle) {
  console.log("present");
} else {
  console.log("Absent");
}
console.log();


