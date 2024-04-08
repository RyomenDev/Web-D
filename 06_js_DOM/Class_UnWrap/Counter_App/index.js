//

const countValue = document.querySelector("#Counter");

// Decrement function
const decrement = () => {
  let value = parseInt(countValue.innerText); // str to int
  value--;
  countValue.innerText = value;
};

// increment function
const increment = () => {
  let value = parseInt(countValue.innerText); // str to int
  value++;
  countValue.innerText = value;
};

//
