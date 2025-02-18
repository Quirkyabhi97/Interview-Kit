Hi, these are set of questions which were given priority in interviews.
For example of each topic please refer Example.js.

<h1>Var/ Let/ Const  </h1>

->Scope of variables -> functional,Global / block / block

->Redeclaration and reassignment - redeclared and reassigned / cannot be re-declared but reassigned / neither declared nor reassigned

-> Hoisting - Can be Hoisted / Cannot ,stay in TBZ till initialized / cannot , stay in TBZ

-> Window object -> attached to window object, can be accessed using this,window object / Not attached,accessed / Not attached, accessed

       Note : 1) level of strictness -> Const >>> Let >>> Var
              2) Use const wherever possible , followed by let & var the least
              3) const variable declaration and initialisation must be done on the same line.

<h1> Hoisting  </h1>

1.  Hoisting allows you to use functions and variables before they're declared

2.  In MEMORY ALLOCATION PHASE

           Variable declarations are scanned and allocated memory, initialized with the value 'undefined'.

           Function declarations are scanned and stored in memory with their entire code.

3.  Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.

4.

<h1> Closures </h1>

1.  Function bundled with its lexical environment is known as a closure.

2.  Closures help retain references to variables that would otherwise be lost after the execution of the outer function.

3.  Closures can also be used for data hiding and encapsulation. So other code cannot access this value.

             uses of closures : a) curring
                                b) memoize
                                c) setTimeout
                                d) function like once

                 disadvantage : a) memory consumption is high (thus difficulty for garbage collection)

<h1> Execution Context / Call Stack  </h1>

Everything in JavaScript happens inside an "execution context".

Execution context has two component

       a) Memory component[variable environment]
         This is the place where all variables and functions are stored as key value pairs. eg-{key: value ||  n:2;}

       b) Code component[Thread of execution]
         This is the place where code is executed one line at a time

1.  When JavaScript code is executed, Execution Context is created and it is called Global Execution Context.

2.  JavaScript program is executed in TWO PHASES inside Execution Context

           a) MEMORY ALLOCATION PHASE - JavaScript program goes throughout the program and allocate memory of Variables and Functions declared in program.

           b) CODE EXECUTION PHASE -  JavaScript program now goes throughout the code line by line and execute the code.

3.  A Function is invoked when it is called and it acts as another MINI PROGRAM and creates its own Execution Context.

4.  Returns keyword return the Control back to the PREVIOUS Execution-Context where the Function is called and Execution Context of the Function is DELETED.

5.  CALL STACK maintains the ORDER of execution of Execution Contexts. It CREATES Execution Context whenever a Program starts or a Function is invoked and it pops out the Execution Context when a Function or Program ENDS.

![Execution](Execution_Context_1.png)

![Execution](Execution_Context_2.png)

<h1> Event Loop/ Web Api</h1>

1.  Event loop is a mechanism that enables asynchronous operations to be executed in a non-blocking manner.

2.  The event loop continuously checks the Call stack ,Callback queue(setTimeout) and Microtask queue(promises and mutation observer). If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.

        priority -> Call Stack -> Microtask Queue -> Callback Queue

3.  Web APIs refer to sets of functionalities provided by the browser environment to interact with web-related features and resources.

![Event_Loop](Event_Loop.png)

<h1> Lexical Environment / Scope Chain </h1>

1. Scope of a variable is directly dependent on the lexical environment.

2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.

3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.

4. The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.

5. The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.

![Scope_Chain](ScopeChain.jpg)

<h1> Block Scope  </h1>

1. Code inside curly bracket is called block.

2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.

3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)

<h1> Temporal Dead Zone  </h1>

1. A temporal dead zone (TDZ) is the time where a variable is inaccessible until the moment the computer completely initializes it with a value.

2. Whenever you try to access a "let" or "const" variable in the temporal dead zone, then it will always give you reference error.

<h1> Window Object  </h1>

1.  window object is created by the JS engines of the respective browsers when global execution context is created.
    It contains the various methods and properties that we can use to access and manipulate the current browser window

             ex -> Windows.setTimeout() , Windows.console , Windows.sessionStorage

2.  A window for a given document can be obtained using the document.defaultView property.

3.  At global level "This" points to Window Object

          ex-> let a =10;
               console.log(a);          //output=10
               console.log(window.a);   //output=10
               console.log(this.a);     //output=10

<h1> This Keyword </h1>

1. "this" in global scope always points to the globalObject (globalObject depends on javascript runtime env)

2. "this" in a function depends on 2 things
   a. strict / non strict mode (in strict mode, "this" is undefined, in non strict mode, "this substitution" takes place and "this" points to globalObject)
   b. how the function is being invoked (if we invoke the function using the global object in strict mode, then "this" will point to that globalObject)

3. "this" in a method always points to the object that is used to invoke the method.

4. call, apply & bind are used to share a method with another object (hence the "this" keyword reference would also change accordingly)

5. "this" inside arrow function refers to the "enclosing lexical context"

6. "this" in DOM points to the HTML element itself on which it is being used

![This_Keyword](This_Keyword.png)

<h1> Higher Order function </h1>

A higher-order function is a function that does one or both of the following:

          a) Takes one or more functions as arguments.
          b) Returns a function as its result.

<h1> Callback function </h1>

Callbacks are the functions passed to another function as an argument and it helps to write asynchronous operation in JS.

3 ways to create Callback

           a) Pass as a parameter to another function
           b) Callback as an Anonymous function
           c) Callback as an ES6 Arrow function

<h1> Callback Hell </h1>

When we are using callbacks, we face two issues:

1. Callback hell - When we have multiple dependent callbacks it will form nested callbacks, code will be unmaintainable and unreadable. This nested callback structure is also called Pyramid of Doom.

2. Inversion of control - We pass the callback function within another function, we are blindly trusting where we don't know whether that function will ever execute our callback function or not, it's so risky for a developer. We loose the control of our program.

 <h1> Promises </h1>

1.  Before promise we used to depend on callback functions which would result in ->

         a) Callback Hell (Pyramid of doom) </br>
         b) Inversion of control

2)  Inversion of control is overcome by using promise.

    2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.

    2.2) A promise has 3 states: pending | fulfilled | rejected.

    2.3) As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.

    2.4) A promise resolves only once and it is immutable.

    2.5) Using .then() we can control when we call the cb(callback) function.

           Before Promise ->

                             createOrder(cartItem, function(orderId){
                               createPayment(orderId)
                             })

           After Promise ->

                             let promise = createOrder(cartItem)

                             promise.then(function(orderId){
                               createPayment(orderId)
                             })

<h1> Promises Chaining / Error Handling</h1>

1. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'

2. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

3. Promise can be created using a new Promise() constructor function.

   let promise = new Promise((resolve,reject)=>{})

4. An error can also be created using new Error() constructor function.

   let err = new Error("Error found")

5. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.

6. .catch only handles error of .then() that are present above it.
   If there is any .then() below it, catch will not handle any error for that.

7. It can be useful in a way if we want to catch error for a particular portion of a chain.

8. We can have multiple catch based on requirement and then a general catch at the end.

<h1> Promise APIs </h1>

  <h2> 1.1) Promise.All </h2>

1. Promise.all handles multiple promises simultaneously, returning an array of results when all promises are fulfilled, and throwing an error if any promise fails.

2. If any promise in Promise.all fails, the entire operation fails, and an error is thrown immediately without waiting for other promises.

![Promise_All](Promise_All.png)

 <h2> 1.2) Promise.AllSettled </h2>

1.  Promise.allSettled waits for all promises to settle (whether fulfilled or rejected) before returning an array of results or errors, making it suitable for scenarios where partial failures are acceptable.

![Promise_AllSettled](Promise_AllSettled.png)

 <h2> 1.3) Promise.Race </h2>

1.  Promise.race returns the result of the first settled promise, whether it's success or failure, making it ideal for scenarios where the fastest response is required.

![Promise_Race](Promise_Race.png)

 <h2> 1.4) Promise.Any </h2>

1. Promise.any is similar to Promise.race but waits for the first successful promise rather than the first settled one, making it suitable for scenarios where success is prioritized over speed.

2. Promise.any collects errors if all promises fail and returns an aggregated error array.

![Promise_Any](Promise_Any.png)

![Promise_Any_AllError](Promise_Any_AllError.png)

<h1> Async-Await </h1>

1.  Async/await is syntactic sugar over promises, offering a more concise and readable way to handle asynchronous operations, but ultimately functioning similarly under the hood.

2.  Async always return a promise.

3.  Await can only used inside an async function.

4.  Can only write await keyword infront of a promise.

5.  JavaScript's async/await does not actually halt execution but rather suspends function execution until promises are resolved.

6.  Use try catch for Error handling and can also use . Catch() method

<h1> Garbage Collector </h1>

1. Garbage Collection in JavaScript refers to the automatic process of reclaiming memory that is no longer in use, ensuring that your application doesn’t run out of memory during execution.

2. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.

   Mark: The garbage collector “marks” all objects that are accessible.
   Sweep: It removes (or “sweeps”) objects that are not marked, freeing up memory.

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

2. apply method is similar to call method, the only difference is that instead of passing argument individually,
   we will pass the argument in a list/array.

3. bind method is similar to call method. It is also used to override this value,
   but the difference is it will not invoke the function instantly but return a function with attached "this" and arguments which can be called later.</br>
   Bind is used to create polyfill for a function. Also used for curring.

<h1> Currying </h1>

Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions,
each taking a single argument.

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

 <h1> Debouncing vs Throttling </h1>

Debouncing -> the function is only executed after a specific delay since the "last event's occurrence".
If new events occur within the delay period, the timer is reset, and the function execution is further delayed

        use case : ideal when you want to wait for a pause in the events before triggering a function,
                   like search suggestions

Throttling -> function is executed at a "fixed interval" .
Even if the triggering event occurs more frequently, the function is invoked according to the defined interval.

        use case : suitable for scenarios where you want to limit the frequency of function calls,
                   like handling scroll events or resizing events

<h1> Tree Shaking in JS</h1>

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

<h1> Shadowing in JS</h1>

when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Shadowing or Variable Shadowing.

![Shadowing](Shadowing.png)

<h1> Set Timeout </h1>

1. setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.

2. Without closure the var reference gives the latest value as it does not retain the original value but rather has the reference so any update in value after timeout will be shown.

3. If we use let/const because they have block scope, every time a new copy of variable is attached, thus this can be done without closure.

![SetTimeout](SetTimeout.png)

4. The setTimeout function stores it in the callback queue which is executed only after call stack is empty, even if setTimeout is set to 0ms.

5. setTimeout ensures that minimum it will take the time mentioned because it may be paused due to call stack not empty.

<h1> Why function called first class citizen ? </h1>

Ability to be used like values

Functions can be ->

     a) assigned to a variable </br>
     b) passed as an argument </br>
     c) return as a value </br>
     d) used as a property in object </br>
     e) used as item in arrays

<h1>function statement or function declaration</h1>

1.  function statement or function declaration

             function one(){
               console.log("Example of function statement") // can be hoisted
             }

2.  function Expression

             var exp =function two(){
               console.log("Example of function expression") // cannot be hoisted
             }

<h1> Pure VS Impure Function </h1>

<h1> Function Constructor </h1>

1.  The JavaScript Function() constructor is used to create new function objects dynamically.

2.  One notable characteristic of functions created with the Function() constructor is that they have a global scope, meaning they are accessible from anywhere in the code.

                   var variable = new Function(arg1, arg2..., Function Body)

<h1> JS Engine </h1>

1.  JS runtime environment contains all elements required to run JS.

         Process : Parsing ---> Compilation -----> Execution.

2.  Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).

3.  Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.

4.  Execution and Compilation are done together.

5.  Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.

![JS_Engine](JS_Engine.png)
