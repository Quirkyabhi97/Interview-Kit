<h1>1) Var/ Let/ Const  </h1>

->Scope of variables -> functional,Global / block / block
->Redeclaration and reassignment - redeclared and reassigned / cannot be re-declared but reassigned / neither declared nor reassigned
-> Hoisting - Can be Hoisted / Cannot ,stay in TBZ till initialized / cannot , stay in TBZ

<h1>2) Primitive v/s Non-primitive datatype  </h1>

Primitive                                                             Non-Primitive 
(Number, String , Boolean, Undefined, Null, BigInt, Symbol)            (Array, Object)
Primitive Data types are predefined. 	                               Non-Primitive data types are created by the programmer
Primitive Data types will have certain values.	                       Non-Primitive data types can be NULL.
Size depends on the type of data structure.	                           Size is not fixed


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

<h1>5) Strings </h1>

operations ->>

a) concatenate ( using + operator/ template literal)
b) string.length
c) string.toUpperCase() , string.toLowerCase()
d) string.charAt()
e) string.substring(indexStart, indexEnd) 
f) string.trim() -> remove whitespace
g) string.split(separator, limit) -> takes a pattern and divides this string into an ordered list of substrings by searching for the    pattern, and returns substring in form of the array.

<h1>6) Arrays </h1>

<h1>7) Objects </h1>

<h1>8) Functions </h1>

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

<h1> New Features of ES6 </h1>
a) The let & const Keyword
b) Arrow Functions
c) Destructuring assignment(array/object destructuring)


d) for of loop 

syntax : for(const item of array){
    //code
}

e) Map and Set
f) promises
g) default parameters
h) classes
i) spread operator



<h1> Continue v/s break   </h1>

continue - to skip current iteration and move onto next iteration
break - to stop execution of loop/switch statements

<h1> Rest vs Spread Operator </h1> 