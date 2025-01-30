// Topic -1//Closure

function outer(){
  let outerVar = 10;
  function inner(){
  console.log("Accessing outerVar using closure", outerVar)
}
inner();
} 

outer();
//  Callback as a parameter

let callback1 = function () {
  console.log("example 1 of Callback");
};

setTimeout(callback1, 1000);

// Callback as an Anonymous function

setTimeout(function () {
  console.log("example 2 of Callback");
}, 1000);

// Callback as an ES6 Arrow function

setTimeout(() => {
  console.log("example 3 of Callback");
}, 1000);

// Topic //Callback Hell example using Ecommerce website

let cart = ["Shirt", "Pant", "Shoes"];

let api = {
  createOrder : createOrder=()=>{
    console.log("OrderCreated");
  }
}

api.createOrder(cart, () => {
  //code grows horizontally instead of vertically

  api.createPayment(() => {
    //passed as a callback to createOrder, dependent on createOrder to be executed first

    api.updateWallet(); //passed as a callback to createPayment, dependent on createPayment to be executed first
  });
});


// Topic //     fetch api using promise

const GITHUB_API = "https://api.github.com/users/Quirkyabhi97"
let responsePromise = fetch(GITHUB_API);

//console.log(responsePromise.status);

responsePromise.then((result)=>{
   console.log("promise resolved",result.status)
},
(error)=>{
  console,log("promise rejected",error);
}
)

// Topic //    Ecommerce using promise chaining and Error handling

const cartNew = ["pant","shirt","shoes"];

   // producer part of promise
let createOrderNew = function(cartNew){
  let pr = new Promise((resolve,reject)=>{     ////promise creation using promise constructor
  
    if(cartNew.length==0){
      const err = new Error("No items present in cart") //new error created using Error constructor
      reject(err)
    }

  else{
    const orderId = 12345;
    setTimeout(()=>{
      resolve(orderId);
    },5000)
    
  }
  }) 

  return pr;
}

let createPaymentNew = function(orderId){
  console.log("Enter your Card details for order", orderId)

  return new Promise((resolve,reject)=>{
    if(!orderId){
      const err = new Error("Order Id not found")
      reject("Payment failed with error :",err);
    }
    else{
      resolve("payment successful");
    }
    
  })
}


      //consumer part of promise
      let promise = createOrderNew(cartNew); //createOrder api returns a promise to be used later by payment api containing order id

      promise
      .then((orderId)=>{
        console.log(orderId);
      return orderId; //always use "return" statement in promise chain
      })
      .then((orderId)=>{
        return createPaymentNew(orderId);
      })
      .then((paymentStatus)=>{
        console.log(paymentStatus);
      })
      .catch((err)=>{
        console.log(err.message);
      })

     
      


// Topic // 1.1) deep copy using spread operator

let oldObj = { name1: "Abhi", age: 27 };
let newObj = { ...oldObj };

newObj.name1 = "Har";
console.log("old object is", oldObj);
console.log("newobject1 is", newObj);

// 1.2) deep copy using object.assign

let newObj2 = Object.assign({}, oldObj);
newObj2.name1 = "Adi";
console.log("old object is", oldObj);
console.log("newobject2 is", newObj2);

// Topic // 2.1) function borrowing using call()

let personalDetail1 = {
  fName: "Abhi",
  lName: "Sharma",
};

let personalDetail2 = {
  fName: "Adi",
  lName: "Nuwal",
};

let printDetail = function (city, age) {
  console.log(this.fName + " " + this.lName + " from ", city + " & age", age);
};

printDetail.call(personalDetail1, "Bundi", 27);
printDetail.call(personalDetail1, "Kota", 28);
//personalDetail1.printDetail.call(personalDetail1, "Bundi");
//personalDetail1.printDetail.call(personalDetail2, "Kota");

// 2.2) function borrowing using apply()

printDetail.apply(personalDetail1, ["Jodhpur", 29]);
printDetail.apply(personalDetail1, ["Jaipur", 30]);

// 2.3) function borrowing using bind()

let newDetails = printDetail.bind(personalDetail1, "Ajmer", 31);
newDetails();

// Topic // 3.1) Curring using Bind function

let multipleThreeArgs = function (a, b, c) {
  return a * b * c;
};

console.log("without curring result is ", multipleThreeArgs(10, 20, 30));

let firstBindFunc = multipleThreeArgs.bind(this, 10); // creates a clone of original function  that takes first parameter as 10
let secondBindFunc = firstBindFunc.bind(this, 20); // creates a clone of first bind function that takes second parameter as 20
console.log("with curring using bind result is ", secondBindFunc(30)); //third parameter passed here

// 3.2) Curring using Closures

function multiplyThreeClosure(a) {
  return function firstFunction(b) {
    return function SecondFunction(c) {
      return a * b * c;
    };
  };
}

console.log(
  "with curring using closure result is ",
  multiplyThreeClosure(10)(20)(30)
);

// Topic // 4.1) polyfill for Array.prototype.includes()

let ArrayCheck = [1, 2, 3];

console.log("output using array.includes is  " + ArrayCheck.includes(1));

Array.prototype.myIncludesPolyfill = function (num) {
  let arr = this;
  if (!num) {
    return false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == num) {
        return true;
      } else return false;
    }
  }
};

console.log(
  "output using array.myIncludesPolyfill is  " +
    ArrayCheck.myIncludesPolyfill(1)
);

// 4.2) polyfill for Math.Trunc()

console.log("output using Math.trunc is  " + Math.trunc(-4.4));

Math.myTruncPolyfill = function (num) {
  return num < 0 ? Math.ceil(num) : Math.floor(num);
};

console.log(
  "output using Math.myTruncPolyfill  is  " + Math.myTruncPolyfill(-4.4)
);

// 4.3) polyfill for Function.prototype.bind()

let personalDetail3 = {
  fName: "Aksh",
  lName: "Vyas",
};

function printDetails(age, hometown) {
  console.log(this.fName + " of age " + age + " from " + hometown);
}

let pDetails = printDetails.bind(personalDetail3, "28", "Jaiselmer");
pDetails();

Function.prototype.myBindPolyfill = function (...args) {
  obj = this;
  //here this points to the function printDetails
  return function (...args2) {
    //call is uses to borrow function printName
    obj.call(...args, ...args2);
  };
};

let pDetailsWithBind = printDetails.myBindPolyfill(personalDetail3, "28");
pDetailsWithBind("Jaiselmer");

// 4.4) polyfill for Function.prototype.map()

Array.prototype.mapPolyfill = function(logicFunc){
  let Newarr = [];
  let arr=this;
    for(let i=0;i<arr.length;i++){
        Newarr.push(logicFunc(arr[i]));
    }
    return Newarr;
}

let radius = [3,4,5];

let area= function(rad){
  return Math.PI*rad*rad;
}

console.log("area using map polyfill", radius.map(area));

// Topic // 5.1 ) Debouncing

function myDebounce(func, delay) {
  let timer; // stores the ID of the timeout that is set using setTimeout

  return function (...args) {
    clearTimeout(timer); //cleared previous timer if any

    timer = setTimeout(() => {
      func.call(this, ...args); //this here/
    }, delay);
  };
}

let callMyDebounce = myDebounce(callApi, 1000); //two paramenters function and delay is passed here to debounce function

function callApi() {
  console.log("API is called", query);
}

//searchBar.addEventListener("input", callMyDebounce);

// 5.2 ) Throttling

function myThrottle(func, delay) {
  let isRunning = false; //flag used to check if function is running or not

  return function (...args) {
    if (!isRunning) {
      isRunning = true;

      func.call(this, ...args); // Set the flag to true

      // Set a timer that will reset the flag after the interval
      setTimeout(() => {
        isRunning = false;
      }, delay);
    }
  };
}

let callMyThrottle = myThrottle(resizeWindow, 1000);

function resizeWindow() {
  console.log("Window is resized");
}

// window.addEventListener("resize", callMyDebounce);

// Topic // legal vs Illegal shadowing

function shadowingExample() {
  var a = 10;
  let b = 20;
  if (true) {
    let a = 1; //legal shadowing
    // var b =2; Illegal shadowing
    console.log(a); // output = 1
    // console.log(b); // output = Error
  }
}

shadowingExample();

// Topic // function Constructor

function counterConstructor(){
  count = 0;
  // With "this", the properties(count) would be local to the constructor and wouldn't be assigned to the object(counter) instances.Thus will give error when accessed
  this.incrementCounter = function(){  
    //The use of "this" ensures that each new object created by the Person function gets its own instance of incrementCounter function.
    count++;
    console.log("increment Counter function called", count);
  }
  this.decrementCounter = function(){
    count--;
    console.log("decrement Counter function called", count);
  }
}

let counter = new counterConstructor();
counter.incrementCounter();
counter.decrementCounter();

