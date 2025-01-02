//Ques Asked in Interview

let a = 10;
let b = a++;
let c = ++a;

console.log(a); //12
console.log(b); //10
console.log(c); //12


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
console.log("array destructuring using spread operator is ", aOne, aRest);

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

//for of loop using sting

let string11 = "abhi"

for(const item of string11){
    console.log(item);
}



