const express = require("express");
const router = express.Router();

const { localFileUpload } = require("../controller/localFileUpload");
// const { imageUpload } = require("../controller/imageUpload");
// const { videoUpload } = require("../controller/videoUpload");
// const { imageReducer } = require("../controller/imageReducer");

//api route
// router.post("/localFileUpload", localFileUpload);
// router.post("/imageUpload", imageUpload);
// router.post("/videoUpload", videoUpload);
// router.post("/imageReducer", imageReducer);

module.exports = router;
