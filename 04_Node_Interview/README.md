<h1> 1) Event Loop  </h1>

<h1> 2) Streams </h1>
-> Used to handling I/O operations( data processing, manipulation, and transfer )
-> Streams are a powerful feature that allows handling data in chunks rather than loading it all at once.

const stream = require('stream');

Time Efficient: We don’t have to wait until entire file has been transmitted. We can start processing data as soon as we have it.
Memory Efficient: We don’t have to load huge amount of data in memory before we start processing.

4 types -> a) Readable, Writable, Duplex , Transform


<h1> 3) Middleware</h1>

Middleware is a request handler that allows you to intercept and manipulate requests and responses before they reach route handlers. They are the functions that are invoked by the Express.js routing layer.

app.get(path, (req, res, next) => {}, (req, res) => {})

Middleware functions take 3 arguments: the request object, the response object, and the next function.

The middle part (req, res, next)=>{} is the middleware function.
Here we generally perform the required actions before the user can view the webpage or call the data and many other functions.

Types ->

a) Application-level middleware
b) Router-level middleware
c) Error-handling middleware
d) Built-in middleware
e) Third-party middleware
