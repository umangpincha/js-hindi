// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(1,2,3,4,5,6))

const myObject = {
    name:"Umang",
    email:"umangpincha@gmail.com"
}

//PASSING ONJECT FUNSTION
function myobjectfunction(anotherObject) {
    console.log(`Name is ${anotherObject.name} and email is ${anotherObject.email}`);
}


// myobjectfunction(myObject);


//passing array in function
const myArray =  [1,2,3,4,5]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myArray))