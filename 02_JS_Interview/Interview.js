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

////solution 2 -> using HOC i.e. reduce

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

// merge,sort,remove duplicates, and remove "_"

let arr_1 = [9, 4, 7, 1, 2, 10];

let arr_2 = [9, 2, 3, 87, 20, 11, 5, "_", "_"];

let newArr = arr_1.concat(arr_2);

newArr.sort((a, b) => b - a);

console.log(newArr);

let newArr2 = [];

newArr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    newArr2.push(curr);
  }
  return newArr2;
}, []);

console.log(newArr2);

//Ques 19 - Second highest number in array

//Ques  -> Write a function to find the first non-repeating character in a string

// Example -> console.log(firstNonRepeatingChar("swiss")); // Output: w
