
mapped to each other ->

index.js -> route (mapping) -> controller -> model

route: it is the path which is being mapped to the controller

controller: it is the function which is being called when the route is being hit

-----------------------------------------------


In Express.js, modules are reusable blocks of code that encapsulate functionality and can be easily integrated into an Express application. These modules are typically distributed as npm packages and can be installed using npm or yarn.

-----------------------------------------------

Modules in Express can serve various purposes, including:

1=> Middleware: Middleware functions in Express are modules that have access to the request and response objects (req and res) and the next middleware function in the application's request-response cycle. They can perform tasks such as logging, authentication, error handling, parsing request bodies, and more. Examples of popular middleware modules include body-parser, morgan, cors, helmet, etc.

2=> Routing: Routing modules in Express help organize the application's request-handling logic into separate modules based on different paths or routes. These modules define how the application responds to different HTTP requests (GET, POST, PUT, DELETE, etc.) for specific routes. Examples of routing modules include express.Router() instances and libraries like express-promise-router, express-group-routes, etc.

3=> Utility Functions: Some modules provide utility functions or helper methods that assist in common tasks such as data validation, formatting responses, working with databases, handling asynchronous operations, etc. These modules can be used to streamline development and improve code maintainability.

4=> View Engines: Express supports various view engines, such as Pug (formerly Jade), EJS (Embedded JavaScript), Handlebars, etc. These view engines are modules that allow developers to render dynamic HTML templates by combining data with pre-defined views/layouts.

Overall, modules in Express play a crucial role in enhancing the functionality, scalability, and maintainability of Express applications by promoting code reuse, modularity, and separation of concerns.

-----------------------------------------------

model: it is the database which is being used by the controller
    : model is used to interact with the database
    : model is used to create the schema

    :  model is used to create the model
    :  model is used to create the controller
    :  model is used to create the route
    :  model is used to create the view
    :  model is used to create the middleware
    :  model is used to create the error handling
    :  model is used to create the authentication
    :  model is used to create the authorization
    :  model is used to create the logging
    :  model is used to create the caching
    :  model is used to create the monitoring
    :  model is used to create the testing
    :  model is used to create the deployment
    :  model is used to create the documentation
    :  model is used to create the versioning
    :  model is used to create the scaling
    :  model is used to create the performance
    :  model is used to create the security
    :  model is used to create the maintenance
    :  model is used to create the debugging
    :  model is used to create the troubleshooting
    :  model is used to create the optimization
    :  model is used to create the benchmarking
    :  model is used to create the profiling
    

-----------------------------------------------


