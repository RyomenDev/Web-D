/*

 Object --> similar entities
collection of key value pairs

*/
// console.log("let's start");

const rectangle = {
  length: 3,
  breadth: 2,

  // behaviour c/a METHOD
  draw: function () {
    console.log("drawing Rectangle");
    console.log(this.length * this.breadth);
  },
  //   draw() {
  //     console.log("drawing factory function");
  //   },
};

// console.log(rectangle);
// console.log(rectangle.length);
console.log(rectangle.draw()); // accessing methods of object

//

//

//

//

//

// function to create object
// Factory Function and Constructor function

// factory function

function createRectangle(length, breadth) {
  // return rectangle={}
  let rectangle = {
    length, // length: length,
    breadth: breadth,

    draw: function () {
      console.log("drawing factory function");
    },
  };
  return rectangle;
}

let rectangleObj1 = createRectangle(4, 5); // function call
console.log(rectangleObj1.length);
console.log(rectangleObj1.draw());

//

//

// Constructor function -> Pascal Notation : first letter of every word is capital   ::  no need to return , it defines the properties

function CreateObj(length, breadth) {
  (this.length = length),
    (this.breadth = breadth),
    (this.draw = function () {
      console.log("drwaing constuctor function");
    });
}

let obj1 = new CreateObj(5, 6); // new create empty object
console.log(obj1.breadth);
