### Routes

> > signUp
> > login

### protected route

> > /student
> > /admin

# SignUp

    fetch data(email,name,id,role) from request body
    check for already registered users
    if registered - send response
    if not registered - create user
    hash the password, if successful - store : else return response
    insert user data into database
    send response

# login

     email id / password fetch
     validation process
     check if email(user) is registered or not
     if not get registered send response
     if password matching , yes

### token

     store jwt token in body , user object, cookie
     if (password match) yes, create token using sign method (generate jwt token - payload, options, secret key)
     as response cookie is send to client set password to undefined
     cookie ( name, value , options)
     send response

### middleware

     utility functions - invokes when request is made (intercept)
     add middlewares (b/w protected routes and handler function).
     test , auth - to check authentication, isAdmin ans isStudent - to check authorization

#### auth

    if req have valid jwt token - verify it

#### isAdmin / isStudent

     if req have valid jwt token - verify it
     if user is admin - return true
     if user is not admin - return false
