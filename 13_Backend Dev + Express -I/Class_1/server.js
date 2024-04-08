//

// [Server Instantiate] & naming it app
const express = require("express");
const app = express();

// used to parse req.body in express -> PUT or POST
const bodyParser = require("body-parser");
// specifically parse JSON data and add it to the body property of the request object (request.Body object)
app.use(bodyParser.json()); // powering up

// server port : 3000 [activate]
app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// defining route
app.get("/", (req, res) => {
  res.send("<h1>Hello World! How ARE U ALL??</h1>");
}); // http://localhost:3000/

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
}); // http://localhost:3000/about

//

//

// route define "/api/cars"
app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body; // destructuring
  console.log(name, brand);
  res.send("hello from simple server api/cars , car submitted successfully:)");
});

const mongoose = require("mongoose");

// connect and send config object

// mongoose
//   .connect("mongodb://localhost:27017/Mahindra", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("received error"));


// the localhost alias resolves to IPv6 address ::1 instead of 127.0.0.1
mongoose
  .connect("mongodb://127.0.0.1/Cars")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB:", err);
  });
