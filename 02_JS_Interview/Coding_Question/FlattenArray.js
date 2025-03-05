let arr = [1,[2],[3,3,[4]],[4,[5,[6,[7,8]]]]]

//using recursion

let flattenArrFunc= (arr) => {

    let flatArr = [];

   arr.forEach(item => {
      if(Array.isArray(item)){
        flatArr = flatArr.concat(flattenArrFunc(item))
      }
      else{
        flatArr.push(item);
      }
   });


    return flatArr;
}

console.log(flattenArrFunc(arr));
