<h1>1) Var/ Let/ Const  </h1>

->Scope of variables -> functional,Global / block / block

->Redeclaration and reassignment - redeclared and reassigned / cannot be re-declared but reassigned / neither declared nor reassigned

-> Hoisting - Can be Hoisted / Cannot ,stay in TBZ till initialized / cannot , stay in TBZ

<h1>2) Primitive v/s Non-primitive datatype  </h1>

Primitive -> (Number, String , Boolean, Undefined, Null, BigInt, Symbol)

Primitive Data types are predefined / Primitive Data types will have certain values / Size depends on the type of data structure.

Non-Primitive -> (Array, Object)

Non-Primitive data types are created by the programmer / Non-Primitive data types can be NULL / Size is not fixed

<h1>3) Null vs Undefined vs NaN </h1>

Null - Null represents an empty value and carry no meaningful information.

Undefined - Undefined represents any value that has not been defined anywhere in the program.
If any variable is declared but not initialized, it returns undefined.

NaN - NaN stands for Not a Number. You get this value when you try to do some operation that can't yield a meaningful result. ex - 0/0

<h1>4) Truthy vs Falsy </h1>

Falsy - undefined, null , 0, false, NaN , ''
Truthy - Anything which is not falsy.

<h1>4) Short Circuiting </h1>

While encountering a set of condition for non boolean using 'OR' operator, if anywhere truthy value is found,
remaining condition will not be checked and truthy is returned.

ex - (falsy || falsy || 7 || false || true) -> 7 is output
after 3rd condition, rest will not be even checked.

<h1> 5) Continue v/s break   </h1>

continue - to skip current iteration and move onto next iteration

break - to stop execution of loop/switch statements

<h1> 6) Rest vs Spread Operator </h1>

The rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest parameter compresses them.

spread operator use case -> Combining arrays / Copying arrays / pass array as argument to function

rest operator use case -> array destructuring / allows functions to accept an indefinite number of arguments

<h1> 7) Strings </h1>

operations ->>

a) concatenate ( using + operator/ template literal)

b) string.length

c) string.toUpperCase() , string.toLowerCase()

d) string.charAt()

e) string.substring(indexStart, indexEnd)

f) string.trim() -> remove whitespace

g) string.split(separator, limit) -> takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, and returns substring in form of the array.

<h1> 8) Arrays </h1>

collection of Items.

a) array.push/pop -> insert/remove topmost element

b) array.shift/unshift -> remove/add a leftmost element 

c) array.slice(start, end) -> does not include end element

d) array.splice(start, deleteCount, item1, item2) -> change content of array(insert,replace,remove)

e) array.sort((a,b)=>b-a) -> for descending order 

f) array.indexOf(searchElement, fromIndex)

<h1>9) Map / Filter / Reduce</h1>

g) array.map -> The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array / original array remain unaffected

h) array.filter -> The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array. 

i) array.reduce -> The reduce() method reduces an array of values down to just one value.

![Difference](Map_Filter_Reduce.png)

<h1>10) Objects </h1>

Collection of key-value pair.

<h1>11) Types of Functions </h1>

a) Arrow function -> compact alternative , introduced in ES6

b) IIFE (Immediately Invoked Function) -> Runs as soon as it is defined
syntax : (function () {
// …
})();

why -> If we have some initiation code(global variables) that we don't need to use again, we could use the IIFE pattern.

c) Callback function -> function passed as an argument to other function

d) Named Function

e) Anonymous Function

f) Higher Order Function

<h1> 12) New Features of ES6 </h1>

a) The let & const Keyword

b) Arrow Functions

c) Destructuring assignment(array/object destructuring)

let arr1 = [0,1,2,3,4];
let [b1,b2] = arr1;

const obj2 = {name2 : "Ab", age2 : 27}
const { name2, age2 } = obj2;

d) for of loop

syntax : for(const item of array){
//code
}

e) Map and Set - stores key value pairs

f) promises

g) default parameters

h) classes
  Note -> follows OOPS model, private member can be declared with # symbol (e.g. #name)

   to access private varible inside class use this operator (this.#name)

   to access private varible outside class use getter/setter 

   e.g -> get fetchName(){
       return this.#name;
   }

   set modifyName(val){
       this.#name = val;
   }

i) spread operator