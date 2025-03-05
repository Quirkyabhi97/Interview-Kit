let num = 19
let isPrime = true;

function primeFunc() {
    if(num==1){
        console.log("1 is neither prime nor composite");
    }
    else{
        for(let i=2;i<num/2;i++){
            if(num%i==0){
                isPrime = false; 
                break;              
            }           
        }
        if(isPrime){
            console.log(num+" is a prime number")
        }
        else console.log(num+" is not a prime number")
    }

}

primeFunc();