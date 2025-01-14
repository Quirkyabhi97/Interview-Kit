// 1.1) deep copy using spread operator

let oldObj = { name1 : "Abhi", age : 27}
let newObj = {...oldObj}

newObj.name1 = "Har"
console.log("old object is",oldObj);
console.log("newobject1 is",newObj);

// 1.2) deep copy using object.assign

let newObj2 = Object.assign({},oldObj);
newObj2.name1 = "Adi";
console.log("old object is",oldObj);
console.log("newobject2 is",newObj2);

// 2.1) function borrowing using call() 

let personalDetail1 = {
    fName : "Abhi",
    lName : "Sharma"
}

let personalDetail2 = {
    fName : "Adi",
    lName : "Nuwal"
}

let printDetail = function(city, age){
    console.log(this.fName +" "+ this.lName + " from ", city + " & age", age)
   }

printDetail.call(personalDetail1, "Bundi", 27);
printDetail.call(personalDetail1, "Kota" , 28)
//personalDetail1.printDetail.call(personalDetail1, "Bundi");
//personalDetail1.printDetail.call(personalDetail2, "Kota");

// 2.2) function borrowing using apply()

printDetail.apply(personalDetail1, ["Jodhpur", 29]);
printDetail.apply(personalDetail1, ["Jaipur", 30]);

// 2.3) function borrowing using bind()

let newDetails = printDetail.bind(personalDetail1, "Ajmer", 31);
newDetails();

// 3.1) Curring using Bind function

let multipleThreeArgs = function(a,b,c){
    return a*b*c
}

console.log("without curring result is ", multipleThreeArgs(10,20,30));



let firstBindFunc = multipleThreeArgs.bind(this, 10); // creates a clone of original function  that takes first parameter as 10
let secondBindFunc = firstBindFunc.bind(this , 20); // creates a clone of first bind function that takes second parameter as 20
console.log("with curring using bind result is ", secondBindFunc(30)); //third parameter passed here


// 3.2) Curring using Closures

function multiplyThreeClosure(a){
    return function firstFunction(b){
        return function SecondFunction(c){
             return a*b*c
        }
    }
}

console.log("with curring using closure result is ",multiplyThreeClosure(10)(20)(30));

// 4.1) polyfill for Array.prototype.includes()

let ArrayCheck = [1,2,3]

console.log("output using array.includes is  "+ ArrayCheck.includes(1))

Array.prototype.myIncludesPolyfill = function(num){
    let arr = this;
 if(!num){
    return false;
 }
 else{
    for (let i=0; i<arr.length;i++){
        if(arr[i]==num){
            return true;
        }
        else return false
    }
 }
}


console.log("output using array.myIncludesPolyfill is  "+ ArrayCheck.myIncludesPolyfill(1))

// 4.2) polyfill for Math.Trunc()

console.log("output using Math.trunc is  "+ Math.trunc(-4.4))

Math.myTruncPolyfill = function(num){
 return num<0 ? Math.ceil(num) : Math.floor(num)
}

console.log("output using Math.myTruncPolyfill  is  "+ Math.myTruncPolyfill(-4.4))

// 4.3) polyfill for Function.prototype.bind()

let personalDetail3 = {
    fName : "Aksh",
    lName : "Vyas"
}

function printDetails(age,hometown){
    console.log(this.fName + " of age " +age + " from " + hometown );
}

let pDetails = printDetails.bind(personalDetail3 , "28", "Jaiselmer");
pDetails();

Function.prototype.myBindPolyfill= function(...args){
    obj = this;
    //here this points to the function printDetails 
    return function(...args2){
      //call is uses to borrow function printName
      obj.call(...args,...args2);
    }
}

let pDetailsWithBind = printDetails.myBindPolyfill(personalDetail3,"28");
pDetailsWithBind("Jaiselmer");


// legal vs Illegal shadowing

function shadowingExample(){
    var a=10;
    let b=20;
    if(true){
        let a = 1; //legal shadowing
        // var b =2; Illegal shadowing
        console.log(a); // output = 1
       // console.log(b); // output = Error 
    }
}

shadowingExample();


