// Primitive

// 7 primitive datatype : String , Number , Boolean , undefined , null 
// , Symbol, BigInt



//Reference (Non Primitive)
// Array , Objects , Functions


// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')
console.table([id,anotherId]);
console.log(id === anotherId); // false


const heros = ["shaktiman" , "naagraj" , "doga"]

let myObj = {
    name:"Umang",
    age: 23
}

const myFunction = function() {
    console.log("My Function");
}

console.log(typeof myFunction); //function object
console.log(typeof  myObj); //object
console.log(typeof  heros); //object





// return type
// number - number
// string -  String
// boolean - boolean
// symbol - symbol
// bigint - bigint
// undefined - undefined
// null - object
// array - object
// object - object
// function - object function


// Non primitive types takes reference 
let myObj2 = myObj.name;
myObj2.name = "Lola"
console.log(myObj.name);
console.log(myObj2);












