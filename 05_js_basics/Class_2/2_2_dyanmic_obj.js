
// Adding and deleting obj

// factory function

const createRectangle = (len, bre) => {
  let rectangle = {
    length: len,
    breadth: bre,
  };
  return rectangle;
};

let rectobj1 = createRectangle(3, 4);
console.log(rectobj1.length);

rectobj1.color = "yellow";
console.log(rectobj1);

delete rectobj1.color;
console.log(rectobj1);

//

//

//

// Constructor function

// const CreateObj=(length, breadth)=> {  //not work
function CreateObj(length, breadth) {
  (this.length = length),
    (this.breadth = breadth),
    (this.draw = function () {
      console.log("drwaing constuctor function");
    });
}

let obj1 = new CreateObj(5, 6); // new create empty object
obj1.color = "black";
console.log(obj1);
