//using recursion

let n = 4

function factorialFunc(num){
    if(num==0 || num ==1){
    return 1;
    }
    else return num*factorialFunc(num-1)
}

console.log(factorialFunc(n));