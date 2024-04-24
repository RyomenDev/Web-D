# Authorization & Authentication

## Authorization

Authorization is the process of granting or restricting access to resources based on a set of rules or permissions. In the context of web applications, authorization is often used to control what actions a user can perform and what data they can access.

## Authentication

Authentication is the process of verifying the identity of a user, typically before granting access to resources or services. It ensures that users are who they claim to be, allowing them to access the system or application securely.

Cookies and JSON Web Tokens (JWT) are two common methods used for handling authentication and maintaining user sessions in web applications.

# Cookies

- Cookies are small pieces of data stored in the client's browser.
- They are sent with every HTTP request to the server, including requests for images, scripts, and stylesheets.
- Cookies are typically used for session management, user authentication, and tracking user behavior.
- Cookies can have an expiration time, after which they are automatically deleted by the browser.
- Cookies are vulnerable to Cross-Site Scripting (XSS) attacks if not properly secured.

# JSON Web Tokens (JWT):

stores:
Header - algorithm , type
payload - user information
signature - secret key

- JWT is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
- JWTs are digitally signed, making them secure and tamper-proof.
- JWTs can contain claims (payload) such as user identity and permissions.
- JWTs are typically used for authentication and authorization.
- JWTs are stateless, meaning the server does not need to maintain session state.
- JWTs can be used in modern web architectures, including Single Sign-On (SSO) systems and microservices.

## Comparison:

> >

    - Cookies are stored on the client side, while JWTs are transmitted      between the client and server.
    - Cookies are automatically sent with every HTTP request, while JWTs need to be explicitly included in the request headers.
    - Cookies are easier to implement for session management, while JWTs provide more flexibility and scalability for distributed systems.
    - Cookies are vulnerable to CSRF and XSS attacks, while JWTs are vulnerable to token leakage if not properly secured.
    - Cookies require server-side storage for session data, while JWTs are stateless and do not require server-side storage.
