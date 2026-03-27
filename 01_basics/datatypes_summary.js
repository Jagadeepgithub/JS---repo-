//Datatypes two types 1. Primitive, 2.Non Primitive

//Primitive types
//there are 7 typess : string, number, boolean, null, undefined, bigInt, symbol

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null // gives object
let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 686119915655155487745
44n //uses BigInt by reprasenting an n

// Non primitive types or reference types
// they are 3 types arrays, functions, objects

const myArray = ["Shakthiman","Hero","Doremon"]
console.log(myArray) // gives object

// objects
let myObj = {
    name:"Jagadeep",     //gives object
    age:25,
}

//functions
const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof score)
console.log(typeof scoreValue)
console.log(typeof isLoggedIn)
console.log(typeof outsideTemp)
console.log(typeof userEmail)
console.log(typeof bigNumber)
console.log(typeof id)
console.log(typeof anotherId)
console.log(typeof myArray)
console.log(typeof myObj)
console.log(typeof myFunction)