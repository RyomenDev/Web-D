// handling errors

// try & catch --> error handling

let person2 = {
  fName: "John",
  lName: "Doe",
  get fullName2() {
    return `${person2.fName} ${person2.lName}`;
  },
  set fullName2(value) {
    if (typeof value !== "string") {
      throw new Error("not a string");
    }
    [this.fName, this.lName] = value.split(" ");
  },
};

try {
  person2.fullName2 = 1;
} catch (e) {
  console.log(`you have send wrong format data \n${e}`);
}
