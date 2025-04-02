//{ '27': 1, '28': 2, '31': 1 }

let arrayInfo = [
    { fname: "Abhinav", lname: "sharma", age: 27 },
    { fname: "Hardik", lname: "Rathod", age: 28 },
    { fname: "Akshay", lname: "Ardeshna", age: 31 },
    { fname: "chinmay", lname: "Rathod", age: 28 },
  ];

  let countArray = arrayInfo.reduce((acc,curr)=>{
    if(!acc[curr.age]) {
        acc[curr.age] = 1;
    }
    else {
        acc[curr.age]=acc[curr.age]+1;
    }
    return acc;
  },{})

  console.log(countArray)