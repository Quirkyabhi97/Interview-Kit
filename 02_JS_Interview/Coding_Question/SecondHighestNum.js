let arr = [9,-19,-299,-199,399]

function findSecHighest(array){
    let highest = -Infinity;
    let secondHighest = -Infinity

    for(let item of array) {
        if(item > highest){
            secondHighest= highest;
            highest = item;
        }
        else if(item>secondHighest && item<highest ){
            secondHighest = item;
        }
    }

    return secondHighest;
}


console.log(findSecHighest(arr));