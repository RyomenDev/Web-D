
connect express.js & MongoDB:
    connect server with DB 

    1. install mongoose //  npm i mongoose
    2. create a DB
    3. connect DB with server
    4. create a model
    5. create a route
    6. create a controller
    7. create a view
    8. create a template
    9. create a layout
    10. create a route for the template
    11. create a controller for the template
    12. create a view for the template
    13. create a layout for the template
    14. create a route for the layout
    15. create a controller for the layout
    16. create a view for the layout
    17. create a layout for the layout
    18. create a route for the layout
    19. create a controller for the layout
    20. create a view for the layout
        => repeat 17-20 ......
    
---------------------------------------------------------

mongoose-> middle-layer (ODM library)

in node.js data treated as object
in mongoDB data treated as document

mapping  by object data modeling (ODM)

---------------------------------------------------------

const mongoose=require('mongoose');

// promise=> resolve or reject
// connect and send config object
mongoose.connect('mongodb://localhost:27017/mahindra', { useNewUrlParser: true, useUnifiedTopology: true });
// if database is not present it will create automatically

------------------------------------------------

useNewUrlParser and useUnifiedTopology options are deprecated and have no effect since Node.js Driver version 4.0.0. This means that you can safely remove these options from your mongoose.connect call without affecting the behavior of your connection.

mongoose
  .connect("mongodb://localhost:27017/Mahindra")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

//   the localhost alias resolves to IPv6 address ::1 instead of 127.0.0.1
------------------------------------------------