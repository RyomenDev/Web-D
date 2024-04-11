
basic routing
    app.method(PATH,HANDLER)

    app.get('/',(req,res)=>{
        res.send('Hello World')
    })

// Handler - type of function that handles the request


// testing API routes

create new collection in postman eg. firstCollection
list all apis in firstCollection ans save them

-------------------------------------------------------

model=> use of schema in the form of <class> (that it have such such properties)=> it will be used in the controller

when an object is created of that model , it will be called as documents, which in turn will be saved in the collection

model(NAME,Schema)
module.exports = mongoose.model("Post",postSchema)

--------------------------------------------------------

controller=> 

--------------------------------------------------------

Routes=>
 CRUD operations:
get- find,fetch
put- update
delete- delete,remove
post- create

--------------------------------------------------------
