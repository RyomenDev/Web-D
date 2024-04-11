// Import Mongoose 
const mongoose = require('mongoose')


// Route Handler 
const postSchema = new mongoose.Schema({
    // send title & body
    title : {
        type : String,
        required : true
    } ,
    body : {
        type : String,
        required : true
    } ,
    likes : [{ // array
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like",
    }],
    comments : [{ // array
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment",
    }]
})


// Export 
module.exports = mongoose.model("Post",postSchema)