//app create
const express = require("express");
const app = express();

// find port
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//add middleware
app.use(express.json());

// connect database
const db = require("./config/database");
db.connect();

// add fileupload
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//connect to cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

//activate server
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
