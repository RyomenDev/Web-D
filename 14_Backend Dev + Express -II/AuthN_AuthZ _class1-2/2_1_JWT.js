JWT - json web token
var token = jwt.sign(user, JWT_Secret);

the function can run in two modes: Synchronously (sync) and asynchronously (async). The function can automatically decide on which method to use depending on the number of parameters and type of parameters you provide the function, and the parameters you can supply are (in order):

: The data/payload
: Secret key/token
: Options/configs (optional, can use callback here if you use default options)
: Callback function (optional, will run in async mode if you provide this)

To illustrate this, read the code below:

----------------------------------------------------------

npm i jsonwebtoken
const jwt = require("jsonwebtoken");

// Synchronous
const syncToken = jwt.sign({payload: { x: 1, y: '2'}}, 'JWT_SECRET');
console.log(syncToken);

// Asynchronous
jwt.sign({payload: { x: 1, y: '2'}}, 'JWT_SECRET', (err, asyncToken) => {
  if (err) throw err;
  console.log(asyncToken);
});


 // Verify password & generate a JWT token

 if (await bcrypt.compare(password, user.password)) {
    // password match
    let token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
}
else{

}
----------------------------------------------------------

token in JWT :

JWT (JSON Web Tokens) typically consist of three parts separated by dots: the header, the payload, and the signature. Each part is encoded in Base64.

Header: The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA. 
For example:
json

{
  "alg": "HS256",
  "typ": "JWT"
}

Payload: The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: reserved claims, public claims, and private claims. Reserved claims are predefined and include information such as the issuer, subject, expiration time, and issue time. Public claims are defined in the JWT specification, but they are not mandatory. Private claims are defined by the parties that agree to use them.
 For example:
json

{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

Signature: The signature is created by combining the encoded header, the encoded payload, a secret, and the specified algorithm. This signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. 
For example, if the algorithm is HMAC SHA256, the signature is created like this:
scss
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
  
Each part of the JWT (header, payload, signature) is Base64Url encoded separately and then concatenated with periods to form the JWT token.
