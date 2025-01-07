// deep copy using spread operator

let oldObj = { name1 : "Abhi", age : 27}
let newObj = {...oldObj}

newObj.name1 = "Har"
console.log("old object is",oldObj);
console.log("newobject1 is",newObj);

//deep copy using object.assign

let newObj2 = Object.assign({},oldObj);
newObj2.name1 = "Adi";
console.log("old object is",oldObj);
console.log("newobject2 is",newObj2);