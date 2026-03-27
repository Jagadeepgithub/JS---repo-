//dates

let newDate = new Date() //gives todays date
console.log(newDate);

let string = String(newDate) // gives standard universal time
console.log(string) //or console.log(newDate.toString())

//covert todate string gives week, day and month
console.log(newDate.toDateString())

//convert toLocal string dd/mm/yyyy. h:m:s
console.log(newDate.toLocaleString())
console.log(typeof newDate)

//lets create our own date and create to datestring
let myCreateDate = new Date(2023,0,5)
console.log(myCreateDate.toDateString())

//lets create hours and minutes also
let myCreateDate1 = new Date(2023,2,25)
console.log(myCreateDate1.toLocaleString())

//it gives values in yyyy-mm-dd
let myCreateDate2 = new Date("2026-01-25")
//console.log(myCreateDate2.toISOString())
//console.log(myCreateDate2.toLocaleDateString())
//console.log(myCreateDate2.toTimeString())
console.log(myCreateDate2.toLocaleString())

//indian standard
let myCreateDate3 = new Date("01-14-2024")
console.log(myCreateDate3.toLocaleString())

//time stamp gives in miliseconds
let timeStamp = Date.now()
console.log(timeStamp)
console.log(myCreateDate3.getTime())
//divide with 1000 gives in seconds
console.log(Date.now()/1000)

//to remove decimals we use math.floor
console.log(Math.floor(Date.now()/1000))

let newDate1 = new Date()
console.log(newDate1)
//to get the date
console.log(newDate.getDate())

//to get year
console.log(newDate1.getFullYear())

//to get month
console.log(newDate1.getMonth()+1)

//string interpolation meand
console.log(`${newDate1.getDay()} and the time is ${newDate1.getTime()}`);
