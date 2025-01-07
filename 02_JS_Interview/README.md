
<h1> Shallow Copy Vs Deep Copy  </h1>

shallow copy -> new object reference to original memory location, original value is modified 

Method-1) using assignment(=) operatorkn bv 
  
deep copy -> new object at different memory location is created ,original value is not modified

Method-1) using JSON.parse(JSON.stringify()    ||||   Method-2) Using Spread Operator</br> ||| Method-3) Using Object.assign()


<h1> Promises </h1>

1. Before promise we used to depend on callback functions which would result in </br>
a) Callback Hell (Pyramid of doom) || b) Inversion of control

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



