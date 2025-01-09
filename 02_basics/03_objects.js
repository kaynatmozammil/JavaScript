// singleton 

// object literals 
// Object.create -> constructor 

const mySym = Symbol("key1")
const JsUser = {
    name :"Kaynat" , 
    "full name":"Kaynat Mozammil",
    [mySym] : "mykey1",
    age : 18,
    location : "Delhi" , 
    email : "kaynatmozammil@gmail.com", 
    isLoggedIn : false , 
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( JsUser[mySym]) 

JsUser.email = "mozammil@chatgpt.com" 

console.log(JsUser["email"]) 
// Object.freeze(JsUser)
JsUser.email = "mozammil@gimini.com" 
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hellow JsUser");  
}
JsUser.greetingTwo = function(){
    console.log(`Hellow JsUser,${this.name}`);  
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
// myArray = ["h","i"] 
// myArray[1]