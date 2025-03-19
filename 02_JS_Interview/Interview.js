//Ques Asked in Interview

//Ques 1
let a = 10;
let b = a++;
let c = ++a;

console.log(a); //12
console.log(b); //10
console.log(c); //12

//Ques 2

console.log(1 + true); //2
console.log("2" * "3"); //6
console.log(null + 1); //1
console.log(NaN + 1); // 1
console.log(undefined + 1); // NaN
console.log([] == []); //false
console.log(NaN === NaN); //false
console.log(parseInt("hello123")); //NaN
console.log(parseInt("123hello")); //123

//Ques 3

let arr = [1, 2, 3];
arr.length = 0;
console.log(arr); // []

//Ques 4

let arr1 = [1, 2, 3];

console.log(arr1.map((num) => num > 5)); // [false,false,false]
console.log(arr1.forEach((num) => num > 5)); // undefined
console.log(arr1.filter((num) => num < 5)); // [1,2,3]

//Ques 5
const ar = [];
ar[9] = 1;
console.log(ar);

//Ques 6

let tempObj = {
  name1: "hari",
  age1: 35,
  hello: () => {
    //different output in case instead of arrow function , normal function is used
    console.log(` ${name1} ${this.name1} ${age1} ${this.age1}`);
  },
};

let name1 = "arun";
var age1 = 40;
this.age1 = 40;

tempObj.hello();

// Ques 7

let numbers = [1, 2, 3, 4, 5];
let outputfunc = (numbers) => {
  let newarr = [];
  numbers.filter((item, index) => {
    if (item > 2) {
      newarr.push(item);
    }
  });
  return newarr;
};

console.log(outputfunc(numbers));

//Ques 8 -> In above ques what if we use map instead of filter //Same output

//Ques 9

console.log("Start");
process.nextTick(function () {
  console.log("process.nextTick 1");
});

function dummy() {
  console.log("dummy function");
}
setTimeout(function () {
  Promise.resolve().then(function () {
    console.log("Promise 1");
  });
  dummy();
  process.nextTick(function () {
    console.log("setTimeout process.nextTick 1");
  });
}, 0);

console.log("End");

//Start -> End -> process.nextTick1 -> dummy function -> setTimeout process.nextTick 1 -> Promise 1

//Ques 10

let objOld = {
  name: "sijin",
  address: {
    city: "kerala",
  },
};

let objNew = { ...objOld };
objNew.name = "abhinav";
objNew.address.city = "Chennai";

console.log(objOld);
console.log(objNew);

// Ques 11

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);

// Ques 12 -> which of the following three console is valid

//A: mouse.bird.size is not valid
//B: mouse[bird.size] is not valid
//C: mouse[bird["size"]] is not valid
//D: All of them are valid

const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};

//console.log(mouse.bird.size); //undefined
console.log(mouse[bird.size]); //true
console.log(mouse[bird["size"]]); //true

//Ques 13-> return name of players with role = batting

const obj1 = [
  { name: "MSD", age: 43, roles: ["keeper", "batting"] },
  { name: "Ruturaj", age: 28, roles: ["batting"] },
  { name: "Jadeja", age: 38, roles: ["batting", "bowling"] },
  { name: "Kohli", age: 26, roles: ["batting"] },
  { name: "Pathirana", age: 23, roles: ["bowling"] },
];

let result = obj1.filter((item) => {
  for (let i = 0; i < item.roles.length; i++) {
    if (item.roles[i] == "batting") {
      console.log(item.name);
    }
  }
});

//Ques 14 -> flatten a nested array

let arrFlat = [
  [1, 2],
  [2, 3, 4],
  [5, 6],
];

let flattenArrFunc = (arr) => {
  let a = [];
  arr.map((item, index) => {
    for (let i = 0; i < item.length; i++) {
      a.push(item[i]);
    }
  });
  return a;
};

console.log(flattenArrFunc(arrFlat));

//Ques 15

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7); // 1 -> 7 ->3 -> 5 -> 2 -> 6 -> 4

//Ques 16

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

process.nextTick(() => {
  console.log("Tick");
});

setImmediate(() => {
  console.log("Immediate");
}); // Start -> End -> Tick -> Timeout 1 -> Timeout 2 -> Immediate

//Ques 17

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("Hi", i), 1000);
} //All will be printed after 1000 ms

//Ques 18 output of following
const objNew = {};
objNew['1'] = 'ONE';
objNew[1] = 'one';
console.log(objNew); 

//Ques 18 - fetch object whose id and name does not repeat

let originalArr = [
  { id: 1, name: "Abhi" },
  { id: 2, name: "Manish" },
  { id: 3, name: "Shreya" },
  { id: 1, name: "Abhi" },
];

//solution 1 -> using for loop

let uniqueArr = [];
let seenIds = [];
let seenNames = [];

for (let i = 0; i < originalArr.length; i++) {
  // Check if the id and name have both not been seen before
  if (
    !seenIds.includes(originalArr[i].id) &&
    !seenNames.includes(originalArr[i].name)
  ) {
    uniqueArr.push(originalArr[i]);
    seenIds.push(originalArr[i].id); // Track the unique id
    seenNames.push(originalArr[i].name); // Track the unique name
  }
}

console.log("Unique array is ", uniqueArr);
console.log(seenIds);
console.log(seenNames);

//solution 2 -> using HOC i.e. reduce

let uniqueArr2 = originalArr.reduce((acc, item) => {
  // Manually check if both id and name have not been seen before
  let isUnique = true;

  for (let i = 0; i < acc.length; i++) {
    if (acc[i].id === item.id && acc[i].name === item.name) {
      isUnique = false;
      break;
    }
  }

  if (isUnique) {
    acc.push(item);
  }

  return acc;
}, []);

console.log(uniqueArr2);

//Ques 18 - write a function for sum(1)(2)(3)(4)()

function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else return a;
  };
}

console.log("using recursive approach solution is " + sum(1)(2)(3)(4)());



//Ques 19 //output "one two two three three four five five five six seven"
 const inputStr = "seven five two three four five one three five six two"
 
const arrInput = inputStr.split(" ");

const objArr = {
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5 ,
    "six" : 6,
    "seven" : 7
}

const sortedArr = arrInput.sort((a,b)=>objArr[a]-objArr[b]).join(" ")

console.log(sortedArr);



//Ques 19 - Second highest number in array

//Ques 20 - Print 10,20,30,40,50 after each second

function timeoutExample(){
  for(let i=1;i<6;i++){                
    //if we use var instead of let it will refer to same memory location(closure) and will print same output i.e. 50 everytime
    // whereas let has block scope, therefor new variable is created on every callback, and give output as 10, 20, 30, 40, 50
    setTimeout(()=>{
      console.log(`after ${i} second`, i*10);
    },i*1000)
    
  } 
  }

  console.log(timeoutExample());

 

//ques 22 create a function will take input product id and value 
//{if product id exists in that json will increase the qty and value else it will create another object of cart}
// ex - addCart(4, 10) // 4 is product id and 10 is value

const cart = [{product_id: 1, qty: 1, value: 10}, {product_id: 2, qty: 1, value: 100}]

function addCart(productId, value) {
  // Find the product in the cart by product_id
  const product = cart.find(item => item.product_id === productId);

  if (product) {
    // If product exists, increase its quantity and value
    product.qty += 1;
    product.value += value;
  } else {
    // If product doesn't exist, add a new object to the cart
    cart.push({ product_id: productId, qty: 1, value: value });
  }
}

addCart(4, 10);  // Add product with id 4 and value 10

console.log(cart);

//Ques Get output based on frequency ,OUTPUT [ 'apple', 'apple', 'apple', 'banana', 'banana', 'orange' ]
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Step 1: Count the frequency of each element
const frequency = arr.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

// Step 2: Rebuild the array based on frequency
const output = [];
for (let item in frequency) {
  for (let i = 0; i < frequency[item]; i++) {
    output.push(item);
  }
}

console.log(output);

//Ques  -> Write a function to find the first non-repeating character in a string

// Example -> console.log(firstNonRepeatingChar("swiss")); // Output: w

// reverse a string without using string

//check if an object is empty

// output of following

function counter(){
  count=0;
  return function(){
      return ++count;
  }
}

let counter1 = counter();
console.log(counter1());
console.log(counter1());

let counter2 = counter();
console.log(counter2());
console.log(counter1());


//output of following

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");

//output of following
let emp = {code:111}
let obj = Object.create(emp)

//prototype inheritance
//here obj.code will be able to access as we have created a prototype of emp and thus we will be able to inherit property of emp inside obj

console.log(obj.code)

// max character and count in js

function getMaxCharAndCount(str) {
  const charCount = {};
  
  // Count the occurrences of each character in the string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the character with the highest count
  let maxChar = '';
  let maxCount = 0;

  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  return { maxChar, maxCount };
}

// Example usage:
const resultMaxCount = getMaxCharAndCount("hello world");
console.log(resultMaxCount); // { maxChar: 'l', maxCount: 3 }

//Add id to each object in array

function addIdToArray(array) {
  return array.map((item, index) => {
    // Directly add the 'id' property to each object
    item.id = index + 1;
    return item;
  });
}

// Example usage:
const array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const resultObj = addIdToArray(array);
console.log(resultObj);

