// conversions
let myNum = 23; //"23"
//to check which type of conversion
console.log(typeof myNum);

// using Number conversion change string to number
let myNewNum = Number(myNum);
console.log(typeof myNewNum);
console.log(myNewNum);

// both string and number
let myString1 = "23abc";
console.log(typeof myString1);
let convString1 = Number(myString1);
console.log(typeof convString1)
console.log(convString1);

//string to num
let myString = "33"
console.log(typeof myString);
let myNewString = Number(myString);
console.log(typeof myNewString)
console.log(myNewString);

//number in case of boolean true or false
//case1 true
let myBool = true
console.log(typeof myBool)
let myNewBool = Number(myBool)
console.log(typeof myNewBool)
console.log(myNewBool);

//case 2 false
let myBool1 = false
console.log(typeof myBool1);
let newBool1 = Number(myBool1)
console.log(typeof newBool1)
console.log(newBool1)

// incase of null
let value = null;
console.log(typeof value)
let newValue = Number(value)
console.log(typeof newValue)
console.log(newValue);

//incase of undefined
let num = undefined;
console.log(typeof num);
let newnum = Number(num)
console.log(typeof newnum);
console.log(newnum);

//   value              typeof   value
//Number("33") =>       number    33
//Number(33)   =>       number    33
//Number("33abc") =>    number    NaN
//Number(true) =>       number     1
//Number(false) =>      number     0
//Number(null)  =>      number     0
//Number(undefined)=>   number     NaN
