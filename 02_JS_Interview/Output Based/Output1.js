// Question 1: Mixing async/await with setTimeout
async function timeoutExample() {
    console.log("Before timeout");
    setTimeout(() => console.log("Inside timeout"), 1000);
    console.log("After timeout");
}
timeoutExample();



 
// Question 2: Await inside a loop
async function loopExample() {
    for (let i = 1; i <= 3; i++) {
        let result = await Promise.resolve(i);
        console.log(result);
    }
}
loopExample();



 
// Question 3: Calling async function without await
async function fetchData() {
    return "Data fetched!";
}
function main() {
    let data = fetchData();
    console.log(data);
}
main();

ouput => undefined
 
// Question 4: Promise.all with async/await
async function promiseAllExample() {
    let results = await Promise.all([
        Promise.resolve("First"),
        Promise.resolve("Second"),
        Promise.resolve("Third")
    ]);
    console.log(results);
}
promiseAllExample();

output => [first,second,third]
 
// Question 5: Finally block with async/await
async function finallyExample() {
    try {
        throw new Error("An error occurred!");
    } catch (err) {
        console.log("Caught error:", err.message);
    } finally {
        console.log("Finally block executed");
    }
}
finallyExample();

