const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// middleware to parse JSON request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");
// mount the todos api routes
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connect to Db
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

/*
{
    "title": "this is title",
    "description": "first stage of learning"
}
http://localhost:3000/api/v1/createTodo
http://localhost:3000/api/v1/getTodo
http://localhost:3000/api/v1/getTodoById/_id

http://localhost:3000/api/v1/updateTodo/_id
http://localhost:3000/api/v1/deleteTodo/_id
*/
