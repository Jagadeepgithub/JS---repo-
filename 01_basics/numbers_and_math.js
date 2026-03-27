// numbers
const numValue = 100
console.log(numValue)

const numValue1 = new Number(numValue)
console.log(numValue1);

//__proto__ type can be used to see what are inbbtheir prototypes
console.log(numValue1.__proto__)

//convert number to string
console.log(numValue1.toString())

//we can fix the number with decimal values
console.log(numValue1.toFixed(2))

//we can precision with round how much numbers we want to show
const value2 = 123.4568
console.log(value2.toPrecision(3))
console.log(value2.toPrecision(4))
console.log(value2.toPrecision(2))

//to local string gives relation to bigger values
const balance = 1000000
console.log(balance.toLocaleString())
console.log(balance.toLocaleString("en-IN")) //indian standard 

//***********************Maths*****************************/
console.log(Math) // object

//abs absolute value
console.log(Math.abs(-4)) //it gives positive numbers

//round it gives the rounded value based on decimals 
console.log(Math.round(4.9)) //greater than 5 decimal value so adds one
console.log(Math.round(4.2)) // less than 5 decimal value

//ceil it gives the top value
console.log(Math.ceil(4.2))
console.log(Math.ceil(4.9))

//floor it give low value it removes the decimal point
console.log(Math.floor(4.6))
console.log(Math.floor(4.2))

//min valaue
console.log(Math.min(4.6,5,2,0,-9))

//max value 
console.log(Math.max(4.6,5,2,0,-9))

// random values

console.log(Math.random()) // gives 0 to 1 values

console.log(Math.random()*10) // it removes one decimal place

console.log(Math.floor(Math.random()*10) + 1) // it gives from 1

const min = 10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // formula
