 //  output {h:1, e: 1, l:3, o:2, w:1, r:1, d:1}

const input = "hello world";

const countChar = input.split('').reduce((acc,curr)=>{
   if(curr!== ' ') {
    if(!acc[curr]){
        acc[curr]=1
    }
    else{
        acc[curr]=acc[curr]+1;
    }}
    return acc;
},{})

console.log(countChar)





