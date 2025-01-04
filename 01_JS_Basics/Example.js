//short-circuiting example
console.log(false|| 7 || 18 || false) //7

//how to use template literal ``
let num1 = 10;
let num2 = 20;
let num3 = num1+ num2;

console.log(`The sum of ${num1} + ${num2} is ${num3}`);

let fullSentence = `This
sentence 
will
print exactly like this`
console.log(fullSentence);

//rest operator use in array and function 

function sumRest(...arr){
    let sum = 0;
 for (const item of arr){
    sum +=item;
 }
 return sum;
}

console.log("sum using spread operator is ", sumRest(1,2,3,4,5,6));

let array2 = [1,2,3];
let [aOne,...aRest] = array2;
console.log("array destructuring using rest operator is ", aOne, aRest);

//spread operator use in array and function

let arrayOld = [1,2,3]
let arrayNew = [...arrayOld, 4, 5];
console.log(arrayNew);

let arrayOld1 = [4,5,6];
let arrayLatest = [...arrayOld,...arrayOld1 ];
console.log(arrayLatest);

function sumSpread(a,b,c ){
    return a+b+c;
   }

console.log("sum using spread operator is ", sumSpread(...arrayOld));

// before array destructuring

let arr1 = [0,1,2,3,4]
let a1 = arr1[0];
let a2 = arr1[1];

// after array destructuring

let [b1,b2] = arr1;
console.log("destructuring array", b1,b2);

// before object destructuring

const obj1 = {name : "Ab", age : 27}
let name1 = obj1.name;
let age1 = obj1.age;
console.log("destructuring obj",name1,age1);

// after object destructuring

const obj2 = {name2 : "Ab", age2 : 27}
const { name2, age2 } = obj2;
console.log("destructuring obj",name2,age2);


//string creation Method 

const string1 = "Method1 -A string primitive";

const string2 = new String("Method 2- A String object");

// string concatenation and length

const string3 = "Abhinav";
const string4 = "Sharma";
const concatString = `${string3}${string4}`;
console.log(concatString);
console.log(concatString.length);

//string Uppercase,lowercase

console.log(concatString.toLowerCase());
console.log(concatString.toUpperCase());

//substring and split
console.log(concatString.substring(7,13));
const string5 = "this is to test split function";
console.log(string5.split(' '));
const string6 = "this /is /to /test /split /function";
console.log(string6.split(' /'));


// array slice 
let brr = [1,2,3,4,5];
console.log("slice output", brr.slice(1,3))

// array slice 
let brr1 = [10,20,30,40];
brr1.splice(1,1,90);
console.log("splice output insert second element and delete 90", brr1);


//array sort ascending / descending

brr1.sort((a,b)=> b-a);
console.log("descending array", brr1);
brr1.sort((a,b)=> a-b);
console.log("ascending array", brr1);

//array map

let mapDoubleArray = brr1.map((item,index)=>{
    return item*2;
})
console.log("original array", brr1);
console.log("array using map function", mapDoubleArray);

//array filter

let filterEvenArray = brr1.filter((item,index)=>{
   if(item%2==0){
    return true;
   } 
   else false;
})
console.log("original array", brr1);
console.log("array using filter function", filterEvenArray);

// array reduce

let reduceSumArray = brr1.reduce((acc,curr)=>{
    return acc = acc + curr;
},0)

console.log("original array", brr1);
console.log("array using reduce function", reduceSumArray);


//while loop example
let j =0;
while(j<3){
    console.log(j);
    j++;
}

// for of loop using array
let array1 = [11,22,33]

for(const item of array1){
    console.log(item);
}


//for of loop using string

let string11 = "abhi"

for(const item of string11){
    console.log(item);
}

//for each loop using array

array1.forEach((item,index)=>{
    console.log(`${index} element is` ,item);
})

//for in using object

let objNew = {
    name1 : "Ab",
    age1 : 27,
    height1 : 5.4
}

for(let key in objNew){
 console.log("Key is", key, "value is" , objNew[key]);
}




