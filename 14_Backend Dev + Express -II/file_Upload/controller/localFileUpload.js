const File = require("../models/File");
// const cloudinary = require("cloudinary").v2;

//localFileUpload -> handler function
exports.localFileUpload = async (req, res) => {
    try {

        //fetch fileFrom request
        const file = req.files.file;
        console.log("Received File -> ", file);


        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH-> ", path)

        //add path to the move function
        file.mv(path, (err) => {
            console.log(err);
        });

        //create a successful response
        res.json({
            success: true,
            message: 'Local File Uploaded Successfully',
        });

    }
    catch (error) {
        console.log("Not able to upload the file on server")
        console.log(error);
    }
}

// function isFileTypeSupported(fileType, supportedTypes) {
//     return supportedTypes.includes(fileType);
// }

// async function uploadFileToCloudinary(file, folder, quality) {
//     const options = { folder };
//     if (quality) {
//         options.quality = quality;
//     }
//     options.resource_type = "auto"
//     return await cloudinary.uploader.upload(file.tempFilePath, options);
// }

