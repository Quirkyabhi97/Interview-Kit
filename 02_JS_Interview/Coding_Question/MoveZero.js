let arr = [1, 0, 4, 5, 0, 6];

let positionOfZero = 0; //pointer that stores position of 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[positionOfZero] = arr[i];
    if (positionOfZero !== i) {
      arr[i] = 0;
    }
    positionOfZero++;
  }

 
}

console.log(arr);
