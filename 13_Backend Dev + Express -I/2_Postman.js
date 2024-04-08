
# postman
https://www.postman.com/downloads/


// sending req (client to server)
workspace -> new -> HTTp (new req) ->  POST (req) -> URL -> 
https://jsonplaceholder.typicode.com/posts 
-> Body -> raw -> JSON -> {
    "name": "benz",
    "brand": "mercedes"
}

---------------------------------

middleware - body parser 
// used to parse req.body in express -> PUT or POST
const bodyParser = require("body-parser");
// specifically parse JSON data and add it to the body property of the request object (request.Body object)
app.use(bodyParser.json()) // powering up

---------------------------------
---------------------------------