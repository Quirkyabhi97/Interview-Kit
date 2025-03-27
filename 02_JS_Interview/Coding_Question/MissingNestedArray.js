const nestedArr = [[10, 3], 5, [[15]], 1];

//step 1 -> flatten nested array

//const flatArr = arr.flat(); cannot be used as depth of nested array is not known

function flattenNestedArray(arr) {
  let flatArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr.push(...flattenNestedArray(arr[i]));
      //The spread operator (...) is used to "unpack" an array into individual elements.
    } else {
      flatArr.push(arr[i]);
    }
  }

  return flatArr;
}

//step 2 - find min and max in flat arr
function missingNestedArray(arr) {
  const flatArr = flattenNestedArray(arr);

  const missingArr = [];

  let min = Math.min(...flatArr);
  let max = Math.max(...flatArr);
  //The spread operator (...) is used to "unpack" an array into individual elements.

  for(let i=min;i<max;i++){
    if(!flatArr.includes(i)){
        missingArr.push(i);
    }
  }

  return missingArr;
}

console.log(missingNestedArray(nestedArr));
