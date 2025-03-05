// merge,sort, remove duplicates, and remove "_" 

let arr_1 = [9, 4, 7, 1, 2, 10];

let arr_2 = [9, 2, 3, 87, 20, 11, 5, "_", "_"]

let newArr = arr_1.concat(arr_2);

newArr.sort((a,b)=>a-b);

newArr = [...new Set(newArr)];

newArr = newArr.filter((item)=>item !== '_')

console.log(newArr);
