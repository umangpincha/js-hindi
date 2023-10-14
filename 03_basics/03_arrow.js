const users = {
    username:"Umang",
    age:27,
    welcomeUser: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// users.welcomeUser()
// users.username = "Sheru"
// users.welcomeUser()
// console.log(this);



// ***In the below code this keyword will not work as expected , it will only work in onjects
// function chai() {
//     let user = "Hitesh" 
//     console.log(this.user);
// }

// chai()


// const chai = () => {
//     let user = "Hitesh"
//     console.log(this.use);
// }

// chai()

//  2 ways of writing arrow functions

// 1) Explicit : In which we write returm keyword explicitely
// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }


// 2) Implicitly : In which we dont have to write return keyword explicitely
// ***when use braces no need to use return
// const addTwo = (num1 , num2) => (num1 + num2)

// How to return object
const returnObj = () => ({username:"Umang"})

// console.log(addTwo(1,2))
console.log(returnObj())