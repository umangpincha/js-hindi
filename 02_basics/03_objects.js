// Objects in depth in javascript in hindi | chai aur #javascript

// singleton
// Object.create
// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Umang",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "umangpincha@pincha.com"
// console.log(JsUser.email);
// Object.freeze(JsUser) //.freeze won't allow any new modification on an object 
// JsUser.email = "umangpincha@pinch"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hola");
}

JsUser.greetingsTwo = function() {
    console.log(`Hola ${this.name}`);
}

JsUser.greetings();
JsUser.greetingsTwo();