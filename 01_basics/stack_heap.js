//stack (primitive type)
// it will not change the value just it will copy the duplicates
let userEmail = "jagadeep.google.com"
 
let updatedEmail = userEmail;
updatedEmail = "jagadeep.@yahhoo.com"

console.log(userEmail)
console.log(updatedEmail)


//heap (non primitive type)
//here it totalyy changes the value
let user1 ={
    email:"deepu.com"
}
let user2 = user1
user2.email = "deepu.gooogle.com"

console.log(user1)
console.log(user2)
