Middleware

router.get("/student", auth, isStudent, (req, res) => {}); // path,middlewares,callback

In MERN (MongoDB, Express.js, React.js, Node.js) development, middleware plays a crucial role in handling various tasks within the application. Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. They can perform tasks such as:

1. **Authentication and Authorization**: Middleware can be used to verify the identity of users and ensure that they have the necessary permissions to access certain routes or resources.

2. **Logging**: Middleware can log information about incoming requests, such as the request method, URL, and timestamp, which can be useful for debugging and monitoring purposes.

3. **Error Handling**: Middleware can catch errors that occur during the execution of route handlers and return appropriate error responses to the client.

4. **Request Parsing**: Middleware can parse incoming request bodies, such as JSON or form data, and make the parsed data available to route handlers.

5. **CORS (Cross-Origin Resource Sharing)**: Middleware can handle CORS headers to allow or restrict access to resources from different origins.

6. **Compression**: Middleware can compress server responses to reduce the size of data sent over the network, improving performance.

7. **Session Management**: Middleware can manage user sessions and handle tasks such as session creation, deletion, and persistence.

8. **Rate Limiting**: Middleware can limit the rate at which requests are processed to prevent abuse or spamming of the server.

In a MERN application, middleware can be added to the Express.js server using the `app.use()` method, where `app` is an instance of the Express application. Middleware functions can be created as standalone functions or imported from third-party libraries. They are typically executed in the order they are defined in the code, allowing for modular and customizable request processing pipelines.

// ways to find tokens (possibility)
from cookie , body , header

// extract token
const token = req.body.token;
const token = req.cookie.token
const token = req.header.token;