Hi, these are set of questions which were given priority in interviews.
For example of each topic please refer Example.js.


<h1> Shallow Copy Vs Deep Copy  </h1>

shallow copy -> new object reference to original memory location, original value is modified 

     Method-1) using assignment(=) operator 
  
deep copy -> new object at different memory location is created ,original value is not modified

     Method-1) using JSON.parse(JSON.stringify()    
     Method-2) Using Spread Operator</br> 
     Method-3) Using Object.assign()

<h1> Call/Apply/Bind </h1>

All these methods are user for method/functions borrowing/sharing.

1. call method is used to invoke the function directly and sets "this" to the first argument and remaining argument can be passed individually.

2. apply method is similar to call method, the only difference is that instead of passing argument individually,we will pass the argument in a list/array.

3. bind method is similar to call method. It is also used to override this value, but the difference is it will not invoke the function instantly but return a function with attached "this" and arguments which can be called later.</br>
Bind is used to create polyfill for a function. Also used for curring.

<h1> Currying </h1>

Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

    Method-1) using closures
    Method-2) using bind function

-> Why is Currying useful in JavaScript?

Helps Create Higher Order Fuction / Code more readable / Reduces chances of error 

<h1> Polyfill </h1>

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

common use case 

        Ex-1) Array.prototype.includes()
        Ex-2) Function.prototype.bind()
        Ex-3) Math.trunc()
        Ex-4) Object.assign()

<h1> Promises </h1>

1) Before promise we used to depend on callback functions which would result in ->

        a) Callback Hell (Pyramid of doom) </br>
        b) Inversion of control

2. Inversion of control is overcome by using promise.

  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.

  2.2) A promise has 3 states: pending | fulfilled | rejected.

  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.

  2.4) A promise resolves only once and it is immutable. 

  2.5) Using .then() we can control when we call the cb(callback) function.

<h1> Promises Chaining </h1>

1. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'

2. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

<h1> Tree Shaking in JS</h1>

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

<h1> Why function called first class citizen ? </h1>

Functions can be -> 

     a) assigned to a variable </br>
     b) passed as an argument </br> 
     c) return as a value </br>
     d) used as a property in object </br>
     e) used as item in arrays

<h1> Shadowing in JS</h1>

when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Shadowing or Variable Shadowing.

![Shadowing](Shadowing.png)



