//using recursion
let num = 7;

function fibonacciFunc(n){
  if(n<2){
    return n;
  }
  else return fibonacciFunc(n-1)+fibonacciFunc(n-2)
}

for(i=0;i<num;i++){
    console.log((fibonacciFunc(i)))
}

