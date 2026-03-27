//strings

const name = "Jagadeep"
const repoCount = 50

//combineing both strings
console.log(name+repoCount); //old version conversion

//model conversion
console.log(`Hello my name is ${name}. My total repo Count is ${repoCount}`)

//we can write sring as below also
const gameName = new String("Jagadeep-hc-com")

//string indexing
console.log(gameName[0])

//we can get their prototype
console.log(gameName.__proto__)

//length of string
console.log(gameName.length)

//to write tgotal string in uppercase
console.log(gameName.toUpperCase())

//we can get character positions 
console.log(gameName.charAt(2))

//to konw the index
console.log(gameName.indexOf('p'))

//slicing
let newString = gameName.substring(0,4)
console.log(newString)

//negative slicing
let string = gameName.slice(-12,9)// start should not be greater than end
console.log(string)

//use of trim
let newString1 = "      Jagadeep      " //it removes all start and end spaces
console.log(newString1)
console.log(newString1.trim())

//use of replace
let url = "https??Jagadeep.github.com"
console.log(url)
console.log(url.replace('??','//'))

//use of includes
console.log(url.includes("Jagadeep"))
console.log(url.includes("rajesh"))

//split it gives array a word
console.log(gameName.split("-"))



