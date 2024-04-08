// https://jsonplaceholder.typicode.com/

// get fetch API : get to retrive a data

async function utility1() {
  //
  let content1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  let output1 = await content1.json();

  console.log(output1);
}

// utility1();

//

//

// post fetch API : to send a data

async function helper() {
  //
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  let content2 = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );

  let response = await content2.json();
  //   console.log(response);
  return response;
}

// helper();

async function utility2() {
  let ans = helper();
  console.log(ans);
}

utility2();

//

// put fetch API : to update a data

// let options = {};
