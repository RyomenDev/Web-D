# Backend

HTTp : client server interaction
=> OSI Model (read)

HTTP : Hyper Text Transfer Protocol
=> application layer protocol

-------------

click on link -> oS -> (default browser) LINK -> DNS -> IP address 
-> TCP -> HTTP -> response 
(connection establish by TCP 3 way hand shake) 

-------------
Domain Name Resolution (DNS) :  link to ip address (of server/website | load balancer | reverse Proxy | etc)

DNS : Domain Name System
=> Domain Name Resolution
DNS Server :  stores the ip address of the domain

---------------

# 3 WAY Handshake 
# idempotent :  means it can be called multiple times and will give the same result

::now get request is ready 

1. Client sends a request to the server
2. Server sends a response to the client
3. Client displays the response

http request :
        -> get      : retrieves data from the server
        -> post     : update 
        -> put      : submit
        -> delete   : remove

        --------------              --------------
        --------------              --------------
 

# Express js : framework to create server side application

1: create a folder
2: npm init -y  // package.json file
3: npm install express // node modules
4: create a file : app.js (here server.js)
5: change main in package.json to server.js
6: write code
7: node server.js

optional 
        : npm install nodemon
        // add in package.json
        "scripts": {
                "start": "nodemon server.js"
        }
        : npm start
