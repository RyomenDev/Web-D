
// to save todo type object entry in database

// importing model
const Todo = require('../models/todo');

// define route handler
// async function - so that others do not wait for it to complete
// never do network call on main thread - it will block the UI
export.createTodo = async (req, res) => {
    // fetch 2 imp things from request body - title and description
    try{
        // get data from request body
        const {title,description}=req.body; // destructuring
        
        // create todo object & insert in DB
        // create use to insert
        const response = await Todo.create({
            title,description
        })
        // send response
        res.status(201).json({
            success: true,
            data: response,
            message: "Todo created successfully",
        });

    }
    catch(err){
        console.log("Error Received");
        console.error(err);
        console.log(err);
        res.status(500).json({ // 500 - internal server error
            success: false,
            data:"internal server error"
            message: err.message,
        })
    }
}