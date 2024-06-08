const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

// Video Uploader Handler
exports.videoUpload = async (req, res) => {
  try {
    // Fetch Data
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const videoFile = req.files.videoFile;

    // Validation
    const supportedTypes = ["mp4", "mov"];
    const fileType = videoFile.name.split(".")[1].toLowerCase();

    // HW - File Maximum 5MB
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      res.status(400).json({
        success: false,
        message: "File type not supported",
      });
    }

    // Supported
    // File Upload to the Cloudinary
    const response = await uploadFileToCloudinary(videoFile, "FileApp");

    // Upload To DB
    const vidFile = new File({
      name,
      tags,
      email,
      fileUrl: response.secure_url,
    });

    const file = await vidFile.save();

    res.status(200).json({
      success: true,
      message: "video file uploaded successfully",
      file: file,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
