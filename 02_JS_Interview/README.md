<h1>1) Promises </h1>

1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

<h1>2) Promises Chaining </h1>

1. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
2. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()


<h1>2) Shadowing in JS</h1>

when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Shadowing or Variable Shadowing.

![Shadowing](Shadowing.png)